import React, { useState, useRef } from 'react';
import { Camera, Download, ChevronDown, Sparkles, Lightbulb, Send, Loader2, Upload, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { useSettings } from '../contexts/SettingsContext';

const SUBJECTS = [
  'Toán học', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 
  'Lịch sử', 'Địa lý', 'Giáo dục công dân', 'Tin học', 'Công nghệ', 
  'Khoa học tự nhiên', 'Lịch sử và Địa lý'
];

const GRADES = Array.from({ length: 12 }, (_, i) => `Lớp ${i + 1}`).reverse();

export const EduLayout: React.FC = () => {
  const { getApiKey } = useSettings();
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [grade, setGrade] = useState(GRADES[0]);
  const [question, setQuestion] = useState('');
  const [uploadedImage, setUploadedImage] = useState<{ url: string; base64: string } | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        setUploadedImage({
          url: URL.createObjectURL(file),
          base64: base64String
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSolve = async () => {
    if (!uploadedImage && !question) return;

    setLoading(true);
    setResult(null);

    try {
      const apiKey = getApiKey();
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Bạn là một chuyên gia giáo dục Việt Nam. Hãy giải bài tập sau đây theo chuẩn của Bộ Giáo dục và Đào tạo Việt Nam.
Môn học: ${subject}
Lớp: ${grade}
Câu hỏi/Yêu cầu bổ sung: ${question || 'Giải chi tiết bài tập trong ảnh.'}

Yêu cầu lời giải:
1. Trình bày rõ ràng, mạch lạc.
2. Tuân thủ đúng phương pháp giải trong Sách giáo khoa.
3. Giải thích chi tiết từng bước.
4. Sử dụng ngôn ngữ sư phạm chuẩn mực.
5. Nếu là bài tập trắc nghiệm, hãy giải thích tại sao chọn đáp án đó.`;

      const contents = [];
      if (uploadedImage) {
        contents.push({
          parts: [
            { inlineData: { data: uploadedImage.base64, mimeType: 'image/jpeg' } },
            { text: prompt }
          ]
        });
      } else {
        contents.push({ parts: [{ text: prompt }] });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: contents[0]
      });

      setResult(response.text || 'Không thể tạo lời giải. Vui lòng thử lại.');
    } catch (error) {
      console.error('Error solving exercise:', error);
      setResult('Đã có lỗi xảy ra trong quá trình giải bài tập. Vui lòng kiểm tra lại kết nối hoặc ảnh chụp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)]">
      {/* Sidebar - Input Area */}
      <aside className="w-full lg:w-80 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar shrink-0">
        {/* Part 1: ĐỀ BÀI */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold text-accent-cyan uppercase tracking-widest flex items-center gap-2">
            <div className="w-1 h-4 bg-accent-cyan rounded-full" />
            1. ĐỀ BÀI
          </h2>
          
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" 
            className="hidden" 
            ref={cameraInputRef}
            onChange={handleFileUpload}
          />
          <button 
            onClick={() => cameraInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            <Camera size={18} />
            <span className="font-semibold">Chụp ảnh (Camera)</span>
          </button>

          <div className="relative flex items-center justify-center py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative px-3 bg-brand-bg text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
              HOẶC TẢI FILE
            </span>
          </div>

          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer group relative overflow-hidden ${
              uploadedImage ? 'border-accent-cyan/50 bg-accent-cyan/5' : 'border-white/10 hover:border-accent-cyan/30 bg-white/5'
            }`}
          >
            {uploadedImage ? (
              <>
                <img src={uploadedImage.url} alt="Uploaded" className="w-full h-32 object-cover rounded-lg" />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setUploadedImage(null);
                  }}
                  className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-red-500 transition-colors"
                >
                  <X size={14} />
                </button>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-accent-cyan transition-colors">
                  <Upload size={20} />
                </div>
                <p className="text-[10px] text-gray-500 text-center leading-relaxed">
                  Kéo & thả hoặc click để tải ảnh lên<br />
                  <span className="text-[9px] opacity-60">(PNG, JPG, WEBP)</span>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Part 2: THÔNG TIN BỔ SUNG */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold text-accent-cyan uppercase tracking-widest flex items-center gap-2">
            <div className="w-1 h-4 bg-accent-cyan rounded-full" />
            2. THÔNG TIN BỔ SUNG
          </h2>

          <div className="flex flex-col gap-3">
            <div className="relative">
              <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block ml-1">Môn học</label>
              <div className="relative">
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:border-accent-cyan/50 transition-colors text-white"
                >
                  {SUBJECTS.map(s => <option key={s} value={s} className="bg-[#1a1a1a]">{s}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block ml-1">Lớp học</label>
              <div className="relative">
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:border-accent-cyan/50 transition-colors text-white"
                >
                  {GRADES.map(g => <option key={g} value={g} className="bg-[#1a1a1a]">{g}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block ml-1">Câu hỏi cụ thể (nếu có)</label>
              <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Nhập câu hỏi cụ thể hoặc yêu cầu đặc biệt..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm min-h-[100px] focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none text-white"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={handleSolve}
          disabled={loading || (!uploadedImage && !question)}
          className="mt-auto w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          {loading ? 'Đang giải...' : 'Giải bài tập'}
        </button>
      </aside>

      {/* Main Content - Results Area */}
      <main className="flex-grow bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden flex flex-col min-w-0">
        {/* Header Tab */}
        <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center gap-2">
          <Sparkles size={16} className="text-accent-cyan" />
          <span className="text-sm font-bold text-gray-300">Lời giải chi tiết</span>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {!result && !loading ? (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-20 h-20 bg-accent-cyan/10 rounded-full flex items-center justify-center text-accent-cyan mb-8"
              >
                <Sparkles size={40} />
              </motion.div>
              
              <h3 className="text-2xl font-display font-bold mb-6">Giải Bài Tập theo chuẩn Bộ GD&ĐT</h3>
              
              <ul className="text-left space-y-4 max-w-md mx-auto">
                {[
                  'Chụp ảnh bài tập rõ nét (Toán, Lý, Hóa, Văn, Anh...).',
                  'Chọn Môn và Lớp để AI giải chính xác hơn.',
                  'Nhập thêm yêu cầu nếu cần giải thích chi tiết.',
                  'Lời giải tuân thủ 100% phương pháp SGK Việt Nam.'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="p-8 prose prose-invert max-w-none text-white">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <Loader2 className="animate-spin text-accent-cyan" size={40} />
                  <p className="text-gray-400 animate-pulse">AI đang phân tích và giải bài tập...</p>
                </div>
              ) : (
                <div className="markdown-body">
                  <ReactMarkdown>{result!}</ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Advice Box */}
        <div className="p-6 border-t border-white/5 bg-accent-cyan/5">
          <div className="flex items-start gap-4 max-w-2xl mx-auto">
            <div className="p-2 bg-accent-cyan/10 rounded-lg text-accent-cyan">
              <Lightbulb size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold mb-1">Lời khuyên sử dụng</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Chụp ảnh rõ nét, không bị lóa sáng. Chọn đúng Môn và Lớp để AI giải chính xác nhất theo chương trình của Bộ GD&ĐT.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
