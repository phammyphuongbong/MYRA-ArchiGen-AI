import { 
  PenTool, 
  Sparkles, 
  Palette, 
  Layout, 
  Box, 
  Search, 
  Wind, 
  FileText, 
  GitBranch, 
  Layers, 
  Home, 
  ExternalLink, 
  Maximize, 
  Scissors, 
  Building, 
  Sun, 
  Settings, 
  RotateCcw, 
  Map, 
  TreePine, 
  Video, 
  Camera, 
  FileCheck, 
  PieChart, 
  History, 
  DollarSign, 
  Calendar, 
  Mail, 
  Library,
  Compass,
  Aperture,
  Cpu,
  Zap,
  Flame,
  Image,
  User,
  RefreshCw,
  Droplets,
  Cloud,
  Type,
  Smile,
  Car,
  Disc,
  Wrench,
  Gauge
} from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description?: string;
  isPro?: boolean;
  isNew?: boolean;
  icon: any;
  theme?: 'default' | 'red';
}

export interface Phase {
  id: string;
  title: string;
  subtitle?: string;
  layout: 'grid' | 'edu' | 'sections' | 'centered';
  sections?: { title: string; tools: Tool[] }[];
  tools?: Tool[];
}

export const PHASES: Phase[] = [
  {
    id: 'edu',
    title: 'EDU',
    layout: 'edu'
  },
  {
    id: 'arch2',
    title: 'ARCH 2',
    subtitle: '20 Công cụ Kiến trúc Chuyên sâu - Công nghệ Nano Banana Pro 4K.',
    layout: 'grid',
    tools: [
      { id: 'a2-1', title: 'NGOẠI THẤT MASTER (4K)', icon: Box },
      { id: 'a2-2', title: 'NỘI THẤT LUXURY (4K)', icon: Box },
      { id: 'a2-3', title: 'QUY HOẠCH PRO (MASTERPLAN)', icon: Box },
      { id: 'a2-4', title: 'KIẾN TRÚC CẢNH QUAN PRO', icon: Box },
      { id: 'a2-5', title: 'KẾT CẤU X-RAY (STRUCTURAL)', icon: Box },
      { id: 'a2-6', title: 'HỆ THỐNG MEP (KỸ THUẬT)', icon: Box },
      { id: 'a2-7', title: 'THIẾT KẾ BỀN VỮNG (GREEN)', icon: Box },
      { id: 'a2-8', title: 'KỸ SƯ MẶT DỰNG (FACADE)', icon: Box },
      { id: 'a2-9', title: 'TRÙNG TU DI SẢN (HERITAGE)', icon: Box },
      { id: 'a2-10', title: 'NHÀ NHỎ (TINY HOUSE)', icon: Box },
      { id: 'a2-11', title: 'TÒA NHÀ CHỌC TRỜI (HIGH-RISE)', icon: Box },
      { id: 'a2-12', title: 'KIẾN TRÚC THAM SỐ (PARAMETRIC)', icon: Box },
      { id: 'a2-13', title: 'MÔ HÌNH MAQUETTE (PHYSICAL)', icon: Box },
      { id: 'a2-14', title: 'THIẾT KẾ ÁNH SÁNG (LIGHTING)', icon: Box },
      { id: 'a2-15', title: 'PHÒNG THÍ NGHIỆM VẬT LIỆU', icon: Box },
      { id: 'a2-16', title: 'PHÁC THẢO SANG BIM', icon: Box },
      { id: 'a2-17', title: 'MÔ PHỎNG CÔNG TRƯỜNG', icon: Box },
      { id: 'a2-18', title: 'ẢNH BÁN HÀNG BẤT ĐỘNG SẢN', icon: Box },
      { id: 'a2-19', title: 'THỰC TẾ ẢO 360° VR', icon: Box },
      { id: 'a2-20', title: 'CONCEPT TRỪU TƯỢNG', icon: Box },
    ]
  },
  {
    id: 'arch',
    title: 'ARCH',
    subtitle: 'Chọn một công cụ để bắt đầu quá trình sáng tạo của bạn.',
    layout: 'sections',
    sections: [
      {
        title: 'Giai đoạn 1: Lên ý tưởng & Nghiên cứu',
        tools: [
          { id: 'p1-1', title: 'Phác thảo Ý tưởng AI', description: 'Biến ý tưởng văn bản thành hình ảnh concept kiến trúc độc đáo ngay lập tức.', icon: Sparkles },
          { id: 'p1-2', title: 'Phác thảo Ý tưởng AI (V2 - Pro)', description: 'Tạo concept chất lượng 4K sắc nét với mô hình Nano Banana Pro tiên tiến.', isPro: true, icon: Sparkles },
          { id: 'p1-3', title: 'Phác thảo Concept Nghệ thuật', description: 'Tạo phác thảo nghệ thuật (chì, than, màu nước) từ ý tưởng sơ khởi.', icon: PenTool },
          { id: 'p1-4', title: 'Phác thảo Concept (V2 - Pro)', description: 'Phác thảo Concept 4K với nét vẽ tự nhiên và phóng khoáng.', isPro: true, icon: PenTool },
          { id: 'p1-5', title: 'Tạo Moodboard & Vật liệu', description: 'Tạo bảng cảm hứng (moodboard) về vật liệu, màu sắc và không gian.', icon: Palette },
          { id: 'p1-6', title: 'Tạo Moodboard (V2 - Pro)', description: 'Moodboard chất lượng 4K với bố cục nghệ thuật và cân đối hơn.', isPro: true, icon: Palette },
          { id: 'p1-7', title: 'Phát triển Mặt bằng 2D', description: 'Tự động tạo phương án bố trí mặt bằng công năng từ yêu cầu thiết kế.', icon: Layout },
          { id: 'p1-8', title: 'Phát triển Mặt bằng (V2 - Pro)', description: 'Mặt bằng 2D chuẩn 4K, thể hiện rõ nội thất và kích thước.', isPro: true, icon: Layout },
          { id: 'p1-9', title: 'Tạo khối 3D Concept', description: 'Nghiên cứu hình khối công trình (Massing) nhanh chóng từ mô tả ý tưởng.', icon: Box },
          { id: 'p1-10', title: 'Tạo khối 3D Concept (V2 - Pro)', description: 'Tạo khối tích 3D độ phân giải cao 4K, chi tiết hình học chính xác hơn.', isPro: true, icon: Box },
          { id: 'p1-11', title: 'Tìm kiếm Ý tưởng Tham khảo', description: 'Tìm kiếm hình ảnh công trình tham khảo tương tự từ cơ sở dữ liệu.', icon: Search },
          { id: 'p1-12', title: 'Tìm kiếm Tham khảo (V2 - Pro)', description: 'Tìm ảnh tham khảo chất lượng 4K, chi tiết rõ ràng.', isPro: true, icon: Search },
          { id: 'p1-15', title: 'Trợ lý Pháp lý Quy hoạch', description: 'Giải thích các thông số quy hoạch phức tạp từ văn bản pháp lý.', icon: FileText },
          { id: 'p1-16', title: 'Trực quan hóa Quy hoạch (V2 - Pro)', description: 'Trực quan hóa khối tích quy hoạch 3D (Building Envelope) từ quy định.', isPro: true, icon: Map },
          { id: 'p1-17', title: 'Sơ đồ Dây chuyền Công năng', description: 'Tạo sơ đồ bong bóng (bubble diagram) để nghiên cứu dây chuyền công năng.', icon: GitBranch },
          { id: 'p1-18', title: 'Sơ đồ Công năng (V2 - Pro)', description: 'Sơ đồ công năng 4K với bố cục tối ưu và màu sắc trực quan.', isPro: true, icon: GitBranch },
        ]
      },
      {
        title: 'Giai đoạn 2: Phát triển Thiết kế & Diễn họa',
        tools: [
          { id: 'p2-1', title: 'Thiết kế Tổng thể (Holistic)', description: 'Tạo trọn bộ hồ sơ concept: Tổng mặt bằng, Ngoại thất, và Nội thất đồng bộ.', icon: Building },
          { id: 'p2-2', title: 'Diễn họa Ngoại thất', description: 'Chuyển hóa phác thảo tay hoặc khối 3D thô thành phối cảnh ngoại thất chân thực.', icon: Home },
          { id: 'p2-3', title: 'Diễn họa Ngoại thất (V2 - Pro)', description: 'Render ngoại thất 4K siêu thực, kiểm soát sâu về ánh sáng và camera.', isPro: true, icon: Home },
          { id: 'p2-4', title: 'Diễn họa Nội thất', description: 'Biến không gian thô thành nội thất sống động, đầy cảm xúc và đúng phong cách.', icon: Layout },
          { id: 'p2-5', title: 'Diễn họa Nội thất (V2 - Pro)', description: 'Render nội thất 4K, tái tạo chi tiết vật liệu vải, gỗ, đá chân thực.', isPro: true, icon: Layout },
          { id: 'p2-6', title: 'Diễn họa Quy hoạch', description: 'Diễn họa quy hoạch tổng thể từ bản vẽ 2D hoặc sơ đồ phân khu.', icon: Map },
          { id: 'p2-7', title: 'Diễn họa Quy hoạch (V2 - Pro)', description: 'Phối cảnh quy hoạch 4K bao quát, chi tiết cây xanh và giao thông.', isPro: true, icon: Map },
          { id: 'p2-8', title: 'Phối cảnh Mặt cắt (Section)', description: 'Tạo phối cảnh cắt 3D thể hiện không gian bên trong và kết cấu.', icon: Box },
          { id: 'p2-9', title: 'Thiết kế Mặt đứng Thương mại', description: 'Thiết kế chuyên sâu mặt tiền cửa hàng, showroom, nhận diện thương hiệu.', icon: Layout },
          { id: 'p2-10', title: 'Nghiên cứu Chiếu sáng', description: 'Mô phỏng công trình dưới nhiều kịch bản ánh sáng (ngày, đêm, chiều).', icon: Sun },
          { id: 'p2-11', title: 'Diễn họa Chi tiết Cấu tạo', description: 'Diễn họa cận cảnh chi tiết cấu tạo, mối nối vật liệu siêu thực.', icon: Search },
          { id: 'p2-12', title: 'Chuyển đổi Phong cách (Style Transfer)', description: 'Áp dụng phong cách của KTS nổi tiếng (Zaha, Ando...) lên công trình của bạn.', icon: Layers, isPro: true },
          { id: 'p2-13', title: 'Dựng phối cảnh từ Mặt bằng', description: 'Dựng phối cảnh 3D trực tiếp từ bản vẽ mặt bằng 2D.', icon: Box, isPro: true },
          { id: 'p2-14', title: 'Diễn họa Cảnh quan Đô thị', description: 'Thiết kế cảnh quan công viên, quảng trường, đường dạo từ ý tưởng sơ bộ.', icon: TreePine, isPro: true },
          { id: 'p2-15', title: 'Tiểu Cảnh & Sân Vườn', description: 'Thiết kế chi tiết sân vườn, tiểu cảnh, patio cho biệt thự, nhà phố.', icon: TreePine },
          { id: 'p2-16', title: 'Sơ đồ Phân rã (Exploded)', description: 'Tạo sơ đồ phân rã (bóc tách) các lớp cấu tạo của công trình.', icon: Layers },
          { id: 'p2-17', title: 'Tạo ảnh 360° VR (Panorama)', description: 'Tạo ảnh toàn cảnh 360 độ (Equirectangular) tương thích kính VR.', icon: Maximize },
          { id: 'p2-18', title: 'Trình chỉnh sửa Vật liệu', description: 'Thay đổi vật liệu bất kỳ trên ảnh render chỉ bằng câu lệnh mô tả.', icon: PenTool },
        ]
      },
      {
        title: 'Giai đoạn 3: Hậu kỳ & Phân tích',
        tools: [
          { id: 'p3-1', title: 'Biên tập & Chỉnh sửa Ảnh AI', description: 'Công cụ hậu kỳ mạnh mẽ: Inpainting, mở rộng ảnh, chỉnh sửa chi tiết.', icon: Sparkles },
          { id: 'p3-2', title: 'Nâng cấp Ảnh 4K', description: 'Nâng cấp độ phân giải ảnh lên 4K, làm nét và khôi phục chi tiết.', icon: Maximize },
          { id: 'p3-3', title: 'Nâng cấp Ảnh 4K (V2 - Pro)', description: 'Nâng cấp 4K Pro với khả năng tái tạo bề mặt vật liệu thông minh.', isPro: true, icon: Maximize },
          { id: 'p3-4', title: 'Bản vẽ Kỹ thuật 2D', description: 'Tự động trích xuất 4 mặt đứng kỹ thuật 2D sạch sẽ từ ảnh phối cảnh 3D.', icon: Layout },
          { id: 'p3-5', title: 'Tạo Sơ đồ Phân tích (Diagram)', description: 'Vẽ sơ đồ phân tích (giao thông, nắng gió, công năng) chồng lên ảnh.', icon: GitBranch },
          { id: 'p3-6', title: 'Tạo Video Kiến trúc (Veo)', description: 'Tạo video diễn họa kiến trúc (timelapse, flycam) ấn tượng từ ảnh tĩnh.', icon: Video },
          { id: 'p3-7', title: 'Dàn dựng Nội thất Ảo', description: 'Tự động bố trí nội thất vào ảnh chụp phòng trống (cho Bất động sản).', icon: Home },
          { id: 'p3-8', title: 'Diễn họa Phong cách Nghệ thuật', description: 'Biến đổi ảnh render thành tranh vẽ nghệ thuật (Van Gogh, Anime...).', icon: Palette },
          { id: 'p3-9', title: 'Nghiên cứu Bóng đổ', description: 'Nghiên cứu bóng đổ công trình theo giờ và tọa độ địa lý thực tế.', icon: Sun },
          { id: 'p3-10', title: 'Mô phỏng Trình tự Thi công', description: 'Minh họa các bước thi công xây dựng chính bằng sơ đồ 3D.', icon: Layers },
          { id: 'p3-11', title: 'Chỉnh màu Điện ảnh', description: 'Chỉnh màu (Color Grading) ảnh render theo phong cách điện ảnh.', icon: Camera },
        ]
      },
      {
        title: 'Quản lý Dự án',
        tools: [
          { id: 'p4-1', title: 'Ước tính Chi phí Sơ bộ', description: 'Phân tích hình ảnh để ước tính sơ bộ khối lượng và chi phí.', icon: DollarSign },
          { id: 'p4-2', title: 'Lập Tiến độ Thi công', description: 'Lập bảng tiến độ thi công gợi ý dựa trên quy mô công trình.', icon: Calendar },
          { id: 'p4-3', title: 'Soạn thảo Chỉ dẫn Kỹ thuật', description: 'Soạn thảo văn bản chỉ dẫn kỹ thuật thi công cho vật liệu/chi tiết.', icon: FileText },
          { id: 'p4-4', title: 'Tạo Báo cáo Ngày', description: 'Tạo email báo cáo ngày công trường chuyên nghiệp từ ảnh chụp.', icon: Mail },
          { id: 'p4-5', title: 'Thư viện Dự án', description: 'Quản lý, lưu trữ và xem lại toàn bộ các dự án đã thực hiện.', icon: Library },
        ]
      }
    ]
  },
  {
    id: 'photo',
    title: 'PHOTO',
    subtitle: '18 Công cụ Pro - Xử lý 4K với Nano Banana Pro.',
    layout: 'sections',
    sections: [
      {
        title: 'Xu Hướng & Sự Kiện',
        tools: [
          { id: 'ph-1', title: 'EventBannerPro', icon: Layout, isNew: true, theme: 'red' },
          { id: 'ph-2', title: 'Chuyên gia Retouch Da (Studio)', icon: Smile, isNew: true, theme: 'red' },
          { id: 'ph-3', title: 'Ghép Mặt Nhóm & Sự kiện (Pro)', icon: User, isNew: true, theme: 'red' },
          { id: 'ph-4', title: 'Chân dung Nghệ thuật AI', icon: Image, theme: 'red' },
          { id: 'ph-5', title: 'Thiết kế Poster & Lịch', icon: Calendar, theme: 'red' },
          { id: 'ph-6', title: 'Magic Christmas (Noel)', icon: Sparkles, theme: 'red' },
          { id: 'ph-7', title: 'Magic Tết (Áo Dài & Pháo Hoa)', icon: Flame, theme: 'red' },
        ]
      },
      {
        title: '1. Phục hồi & Nâng cao',
        tools: [
          { id: 'ph-8', title: 'Phục hồi ảnh cũ Pro', icon: RefreshCw },
          { id: 'ph-9', title: 'Nâng cấp 4K+ (Super Res)', icon: Maximize },
          { id: 'ph-10', title: 'Khử nhiễu & Làm nét', icon: Droplets },
          { id: 'ph-11', title: 'Làm nét Chân dung Pro', icon: Image },
        ]
      },
      {
        title: '2. Sáng tạo & Biến đổi',
        tools: [
          { id: 'ph-12', title: 'Tô màu ảnh xưa', icon: Palette },
          { id: 'ph-13', title: 'Tách & Ghép Nền', icon: Scissors },
          { id: 'ph-14', title: 'Xóa Vật thể (Inpainting)', icon: Sparkles },
          { id: 'ph-15', title: 'Biến hình AI (Generative Fill)', icon: Layers },
        ]
      },
      {
        title: '3. Studio & Thương mại',
        tools: [
          { id: 'ph-16', title: 'Chụp ảnh Sản phẩm AI (Pro)', icon: Box },
          { id: 'ph-17', title: 'Thay đổi Trang phục AI', icon: User },
          { id: 'ph-18', title: 'Tạo Lookbook Thời trang', icon: Layout },
          { id: 'ph-19', title: 'Ảnh thẻ & Profile chuyên nghiệp', icon: FileCheck },
        ]
      }
    ]
  },
  {
    id: 'brand',
    title: 'BRAND',
    subtitle: 'Thiết kế Logo, Kiểu dáng công nghiệp và Nhận diện thương hiệu chuẩn 4K với công nghệ Nano Banana Pro.',
    layout: 'grid',
    tools: [
      { id: 'br-1', title: 'THIẾT KẾ LOGO (PHONG THỦY)', icon: Sparkles },
      { id: 'br-2', title: 'KIỂU DÁNG CÔNG NGHIỆP', icon: Box },
      { id: 'br-3', title: 'BAO BÌ & TEM NHÃN', icon: Layout },
      { id: 'br-4', title: 'THIẾT KẾ ICON 3D/2D', icon: Palette },
      { id: 'br-5', title: 'BỘ NHẬN DIỆN THƯƠNG HIỆU', icon: FileText },
      { id: 'br-6', title: 'HỌA TIẾT & HOA VĂN VẢI', icon: Layers },
      { id: 'br-7', title: 'NGHỆ THUẬT CHỮ (TYPOGRAPHY)', icon: Type },
      { id: 'br-8', title: 'LINH VẬT THƯƠNG HIỆU (MASCOT)', icon: Smile },
    ]
  },
  {
    id: 'video',
    title: 'VIDEO',
    subtitle: 'Tạo video điện ảnh 1080p từ ảnh tĩnh. Công nghệ Google Veo 3.1 mới nhất.',
    layout: 'centered',
    tools: [
      { id: 'vi-1', title: 'PHIM KIẾN TRÚC (ARCH VEO)', icon: Box },
      { id: 'vi-2', title: 'ẢNH ĐỘNG (CINEMAGRAPH)', icon: Image },
      { id: 'vi-3', title: 'PHIM XE HƠI (AUTO VEO)', icon: Car },
    ]
  },
  {
    id: 'car',
    title: 'CAR',
    subtitle: 'Biến hóa xế yêu với công nghệ AI 4K Ultra-Sharp. Độ body, mâm, màu sơn và bối cảnh trong tích tắc.',
    layout: 'grid',
    tools: [
      { id: 'ca-1', title: 'CARFREEDOM', icon: Car, isNew: true, theme: 'red' },
      { id: 'ca-2', title: 'CARMODEL', icon: Video, isNew: true, theme: 'red' },
      { id: 'ca-3', title: 'MÀU SƠN & TEM (WRAP)', icon: Palette, theme: 'red' },
      { id: 'ca-4', title: 'BODY KITS & CẢN ĐỘ', icon: GitBranch, theme: 'red' },
      { id: 'ca-5', title: 'MÂM & LỐP (WHEELS)', icon: Disc, theme: 'red' },
      { id: 'ca-6', title: 'ĐÈN ĐÓM (LIGHTING)', icon: Sun, theme: 'red' },
      { id: 'ca-7', title: 'HẠ GẦM & HỆ THỐNG TREO', icon: PieChart, theme: 'red' },
      { id: 'ca-8', title: 'NỘI THẤT (INTERIOR)', icon: Home, theme: 'red' },
      { id: 'ca-9', title: 'ĐỘ XE ĐỊA HÌNH', icon: Wind, theme: 'red' },
      { id: 'ca-10', title: 'PHONG CÁCH ĐUA XE', icon: Gauge, theme: 'red' },
      { id: 'ca-11', title: 'SPA & LÀM MỚI XE', icon: Sparkles, theme: 'red' },
      { id: 'ca-12', title: 'BỐI CẢNH & SHOWROOM', icon: Image, theme: 'red' },
    ]
  }
];
