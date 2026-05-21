import React, { useState } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  PlayCircle, 
  Ban, 
  UserMinus, 
  Timer, 
  Hammer, 
  Percent, 
  ChevronRight, 
  Laptop, 
  Users, 
  Terminal, 
  Database,
  CheckCircle2,
  Lock,
  Zap,
  Check,
  PhoneCall,
  MapPin,
  ExternalLink,
  Bot
} from 'lucide-react';
import Header from './components/Header';
import NickSimulator from './components/NickSimulator';
import CostSavedCalculator from './components/CostSavedCalculator';
import FaqAccordion from './components/FaqAccordion';
import LeadCapture from './components/LeadCapture';

export default function App() {
  const [activeTab, setActiveTab] = useState<'care' | 'data'>('care');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    const simulatorElement = document.getElementById('demo-simulator');
    if (simulatorElement) {
      simulatorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Preset plans for visual toggles
  const pricePlans = {
    care: [
      { name: 'Gói MKT Care 1 Năm', price: '3,000,000 đ', limit: 'Nuôi tối đa 500 tài khoản', features: ['Tự động đăng bài hàng loạt', 'Tự động gửi 50 kết bạn/ngày/acc', 'Auto seeding bình luận/like chéo', 'Gia hạn IP tĩnh/Dcom tự động', 'Hỗ trợ kỹ thuật 1:1 từ xa'] },
      { name: 'Gói MKT Care Vĩnh Viễn', price: '10,000,000 đ', limit: 'Không giới hạn số lượng tài khoản', features: ['Toàn bộ tính năng nâng cao', 'Cập nhật trọn đời thuật toán Meta miễn phí', 'Tặng bộ tài liệu 100 via Facebook Trust cao', 'Hỗ trợ can thiệp API chuyên sâu', 'Backup sao sao lưu dữ liệu tự động'], isPopular: true },
    ],
    data: [
      { name: 'Gói MKT Data 1 Năm', price: '2,500,000 đ', limit: 'Truy vấn không giới hạn UID', features: ['Quét UID quét từ Group kín/mở', 'Quét người tương tác Fanpage đối thủ', 'Quét số điện thoại đã mã hóa', 'Bộ lọc nâng cao theo từ khóa/vị trí', 'Hỗ trợ kỹ thuật 1:1 từ xa'] },
      { name: 'Gói MKT Data Vĩnh Viễn', price: '7,500,000 đ', limit: 'Truy vấn vĩnh viễn không giới hạn', features: ['Toàn bộ tính năng quét cao cấp nhất', 'Cập nhật nâng cấp trọn đời miễn phí', 'Tích hợp xuất tệp Excel tự động cực nhanh', 'API liên kết trực tiếp CRM doanh nghiệp', 'Bàn giao chuyển giao công nghệ bảo mật'], isPopular: true },
    ]
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A1A1A] overflow-x-hidden selection:bg-brand-secondary-container selection:text-[#1A1A1A]">
      {/* Navigation Header */}
      <Header onOpenDemo={handleOpenDemo} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-24 border-b border-[#1A1A1A]/10 bg-[#E5E2D9]/25">
        {/* Artistic accent subtle decor */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#D95F39]/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E5E2D9] border border-[#1A1A1A]/15 px-4.5 py-1.5 rounded-full text-[#1A1A1A] font-semibold text-xs mb-6 w-fit animate-fade-in font-display">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D95F39] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D95F39]"></span>
              </span>
              #1 Giải pháp Automation Facebook Profile
            </div>

            <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-5.5xl text-[#1A1A1A] leading-tight mb-6 tracking-tight">
              Xây Dựng Hệ Thống <br className="hidden sm:block" />
              <span className="font-serif-italic text-[#D95F39] font-normal italic">30.000 – 50.000</span> Khách Hàng <span className="underline decoration-[#D95F39] decoration-wavy underline-offset-8 relative inline-block">Tự Động</span>
            </h1>

            <p className="text-sm sm:text-base md:text-md text-[#5B574F] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Không còn tốn tiền nuôi Ads đắt đỏ! Tự động hóa hoàn toàn quy trình tìm kiếm UID, nuôi nick tương tác, kết bạn đúng tệp, seeding và gửi tin nhắn tự động hàng loạt để chuyển đổi đột phá doanh thu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={handleOpenDemo}
                className="w-full sm:w-auto bg-[#D95F39] text-[#F4F1EA] h-14 px-8 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] hover:shadow-[4px_4px_0px_#D95F39] transition-all border border-[#1A1A1A] cursor-pointer"
              >
                Nhận Demo Hệ Thống
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto bg-[#E5E2D9] text-[#1A1A1A] h-14 px-8 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-[#1A1A1A]/15 hover:bg-[#1A1A1A] hover:text-[#F4F1EA] transition-all cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 text-[#D95F39] shrink-0" />
                Xem Video Quy Trình
              </button>
            </div>

            {/* Micro social proof under buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#5B574F] font-light">
              <span className="flex items-center gap-1 font-semibold text-[#1A1A1A]">🛡️ An toàn tài khoản</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 font-semibold text-[#1A1A1A]">⚡ Setup tự động 100%</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1 font-semibold text-[#1A1A1A]">👥 Đã có +5,000 khách tin dùng</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-[#D95F39]/5 rounded-3xl blur-2xl -z-10" />
            <div className="bg-[#E5E2D9] p-4 rounded-2xl border-2 border-[#1A1A1A] rotate-1 hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0px_#1A1A1A] overflow-hidden group">
              <img 
                alt="Automation Workflow" 
                className="rounded-xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0VtNejxNZmUaer2PkR8t-1afP13HO3zdiCwzskIrVfv0O2OEWfTTQaYMijsZ-DrF6blhH0YnCaaJEMXg71k_dov4VyNtijpu3Z06EHygZbBedgJhteqW6pEo_8eNLHP8z5gggN49QBqYUr6EbyD8Tg6zrZHF13YXPMU4yGsKvltAJMnO7YifA60Fp0b3mZgi6ORnk-G-ZQzAjLKErZvCI79f2zegb0DbsdouLSnHL3dy3mDSvDwyk3M4RURSAmwbjuPcQI14zFyBU" 
              />
              <div className="absolute top-6 right-6 bg-[#1A1A1A] text-[#F4F1EA] px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border border-[#1A1A1A]/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                LIVE METRICS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-[#E5E2D9]/15 border-t border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Trở ngại doanh nghiệp</span>
            <h2 className="font-display font-medium text-2.5xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-snug">
              Bạn đang gặp các vấn đề này trong bán hàng?
            </h2>
            <div className="h-0.5 w-16 bg-[#D95F39] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Pain Point 1 */}
            <div className="bg-[#E5E2D9]/30 p-6 sm:p-7 rounded-xl border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#E5E2D9]/40 transition-all group duration-300">
              <div className="w-12 h-12 bg-[#F4F1EA] border border-[#1A1A1A]/10 rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#F4F1EA] transition-all duration-300 text-[#D95F39]">
                <Ban className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] mb-2 font-medium">Chi Phí Ads Quá Đắt</h3>
              <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                Ngân sách quảng cáo ngày càng tăng vọt nhưng tỉ lệ ra đơn thấp và bão hòa.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-[#E5E2D9]/30 p-6 sm:p-7 rounded-xl border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#E5E2D9]/40 transition-all group duration-300">
              <div className="w-12 h-12 bg-[#F4F1EA] border border-[#1A1A1A]/10 rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#F4F1EA] transition-all duration-300 text-[#D95F39]">
                <UserMinus className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] mb-2 font-medium">Không Có Khách Tiếp Cận</h3>
              <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                Đăng bài lên group bị admin kiểm duyệt xóa, không tiếp cận được đúng người mua.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-[#E5E2D9]/30 p-6 sm:p-7 rounded-xl border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#E5E2D9]/40 transition-all group duration-300">
              <div className="w-12 h-12 bg-[#F4F1EA] border border-[#1A1A1A]/10 rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#F4F1EA] transition-all duration-300 text-[#D95F39]">
                <Users className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] mb-2 font-medium">Profile Ít Tương Tác</h3>
              <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                Bạn bè trên trang phần lớn là Nick ảo, đối tượng không hề có nhu cầu mua hàng thật.
              </p>
            </div>

            {/* Pain Point 4 */}
            <div className="bg-[#E5E2D9]/30 p-6 sm:p-7 rounded-xl border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#E5E2D9]/40 transition-all group duration-300">
              <div className="w-12 h-12 bg-[#F4F1EA] border border-[#1A1A1A]/10 rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#F4F1EA] transition-all duration-300 text-[#D95F39]">
                <Timer className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] mb-2 font-medium">Seeding Thủ Công Cực Khổ</h3>
              <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                Mất cả ngày chỉ để đổi nick đi rải comment dạo dọn phễu thủ công cực kỳ tốn sức.
              </p>
            </div>

            {/* Pain Point 5 */}
            <div className="bg-[#E5E2D9]/30 p-6 sm:p-7 rounded-xl border border-[#1A1A1A]/15 hover:border-[#1A1A1A] hover:bg-[#E5E2D9]/40 transition-all group duration-300">
              <div className="w-12 h-12 bg-[#F4F1EA] border border-[#1A1A1A]/10 rounded-lg flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#F4F1EA] transition-all duration-300 text-[#D95F39]">
                <Hammer className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] mb-2 font-medium">Không Thể Tăng Quy Mô</h3>
              <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                Không thể quản lý một lúc 100 nick để làm phễu tiếp cận do quy trình quá lộn xộn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sandbox Section (Live Tool Simulator) */}
      <section className="py-16 md:py-24 bg-[#E5E2D9]/10" id="demo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Công cụ tự động</span>
            <h2 className="font-display font-medium text-2.5xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-snug">
              Trải Nghiệm Trực Quan Quy Trình Tự Động Hóa
            </h2>
            <p className="text-[#5B574F] text-xs sm:text-sm mt-3 font-light leading-relaxed">
              Dưới đây là một mẫu mô phỏng kịch bản nuôi nick và quét khách hàng thực tế của MKT. Ấn nút dưới đây để xem cách dàn tài khoản auto quét thành viên, kết bạn và tương tác thông minh.
            </p>
          </div>

          <NickSimulator />
        </div>
      </section>

      {/* Solutions Section (The Stepper) */}
      <section className="py-16 md:py-24 bg-[#F4F1EA]" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Giải pháp chiến lược</span>
            <h2 className="font-display font-medium text-2.5xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-snug">
              Mô Hình Xây Dựng Hệ Thống Facebook Profile Tự Động
            </h2>
            <p className="text-[#5B574F] text-xs sm:text-sm mt-4 font-light leading-relaxed">
              Quy trình khép kín giúp bạn tự nhân bản tệp khách hàng từ không có gì thành tài sản bền vững sở hữu hàng chục nghìn bạn bè tiềm năng.
            </p>
          </div>

          <div className="relative">
            {/* Connection Flow decoration line for desktop only */}
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-[#1A1A1A]/10 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="group bg-[#E5E2D9]/25 border border-[#1A1A1A]/15 p-6 sm:p-7 rounded-lg shadow-sm hover:-translate-y-2 hover:bg-[#E5E2D9]/40 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F4F1EA] rounded flex items-center justify-center font-display font-extrabold text-lg group-hover:bg-[#D95F39] transition-colors mb-6 shadow-sm">
                  1
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-2">Chuẩn Bị Profile</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-normal font-light">
                  Setup hàng loạt 10 - 100 nick Facebook sạch, ảnh đại diện chuẩn doanh nhân, đầy đủ thông tin uy tín.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group bg-[#E5E2D9]/25 border border-[#1A1A1A]/15 p-6 sm:p-7 rounded-lg shadow-sm hover:-translate-y-2 hover:bg-[#E5E2D9]/40 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F4F1EA] rounded flex items-center justify-center font-display font-extrabold text-lg group-hover:bg-[#D95F39] transition-colors mb-6 shadow-sm">
                  2
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1A1A] mb-2">Quét Tệp UID Khách</h4>
                <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                  Sử dụng công cụ MKT Data quét thành viên nhóm đối thủ, khách dạo bình luận tích cực từ bài viết hot.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group bg-[#E5E2D9]/25 border border-[#1A1A1A]/15 p-6 sm:p-7 rounded-lg shadow-sm hover:-translate-y-2 hover:bg-[#E5E2D9]/40 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F4F1EA] rounded flex items-center justify-center font-display font-extrabold text-lg group-hover:bg-[#D95F39] transition-colors mb-6 shadow-sm">
                  3
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1A1A] mb-2">Tự Động Kết Bạn</h4>
                <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                  Phần mềm tự động hóa gửi 50 - 100 yêu cầu kết bạn mỗi ngày đúng tệp UID khách hàng tiềm năng.
                </p>
              </div>

              {/* Step 4 */}
              <div className="group bg-[#E5E2D9]/25 border border-[#1A1A1A]/15 p-6 sm:p-7 rounded-lg shadow-sm hover:-translate-y-2 hover:bg-[#E5E2D9]/40 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F4F1EA] rounded flex items-center justify-center font-display font-extrabold text-lg group-hover:bg-[#D95F39] transition-colors mb-6 shadow-sm">
                  4
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1A1A] mb-2">Dàn Tài Khoản Tương Tác</h4>
                <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                  Auto thả like dạo, lướt video watch nuôi tương tác tăng chỉ số tin cậy 'Trust' chống checkpoint hiệu quả.
                </p>
              </div>

              {/* Step 5 */}
              <div className="group bg-[#E5E2D9]/25 border border-[#1A1A1A]/15 p-6 sm:p-7 rounded-lg shadow-sm hover:-translate-y-2 hover:bg-[#E5E2D9]/40 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F4F1EA] rounded flex items-center justify-center font-display font-extrabold text-lg group-hover:bg-[#D95F39] transition-colors mb-6 shadow-sm">
                  5
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1A1A] mb-2">Chốt Đơn Tự Nhiên</h4>
                <p className="text-[#5B574F] text-xs sm:text-sm leading-normal font-light">
                  Đăng tải nội dung bán hàng đồng loạt, kéo thành viên vô nhóm zalo/messenger tư vấn chốt đơn trực tiếp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Infographic Section */}
      <section className="py-16 md:py-20 bg-[#1A1A1A] text-white overflow-hidden relative" id="process">
        <div className="absolute inset-0 bg-[#D95F39]/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-bold text-[#D95F39] block uppercase tracking-wider mb-2 font-mono">Vận hành trơn tru</span>
          <h2 className="font-display font-medium text-2.5xl sm:text-3.5xl mb-6 text-white leading-snug">
            Quy Trình Vận Hành Khép Kín Hệ Thống
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-14 font-light">
            Các tính năng bổ trợ tự liên kết chặt chẽ tạo thành guồng quay kéo phễu bán hàng khép kín đỉnh cao.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {/* Action Item 1 */}
            <div className="flex flex-col items-center bg-[#E5E2D9]/10 p-5 rounded-xl border border-white/10 w-32 sm:w-40">
              <div className="w-12 h-12 rounded-full border border-[#D95F39]/30 flex items-center justify-center bg-[#D95F39]/10 mb-3 text-[#D95F39]">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold font-display text-slate-200">Quét Khách UID</span>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block" />

            {/* Action Item 2 */}
            <div className="flex flex-col items-center bg-[#E5E2D9]/10 p-5 rounded-xl border border-white/10 w-32 sm:w-40">
              <div className="w-12 h-12 rounded-full border border-[#D95F39]/30 flex items-center justify-center bg-[#D95F39]/10 mb-3 text-[#D95F39]">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold font-display text-slate-200">Gửi Kết Bạn</span>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block" />

            {/* Action Item 3 */}
            <div className="flex flex-col items-center bg-[#E5E2D9]/10 p-5 rounded-xl border border-white/10 w-32 sm:w-40">
              <div className="w-12 h-12 rounded-full border border-[#D95F39]/30 flex items-center justify-center bg-[#D95F39]/10 mb-3 text-[#D95F39]">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold font-display text-slate-200">Nuôi Nick</span>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block" />

            {/* Action Item 4 */}
            <div className="flex flex-col items-center bg-[#E5E2D9]/10 p-5 rounded-xl border border-white/10 w-32 sm:w-40">
              <div className="w-12 h-12 rounded-full border border-[#D95F39]/30 flex items-center justify-center bg-[#D95F39]/10 mb-3 text-[#D95F39]">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold font-display text-slate-200">Đăng Bài Đồng Loạt</span>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block" />

            {/* Action Item 5 */}
            <div className="flex flex-col items-center bg-[#E5E2D9]/10 p-5 rounded-xl border border-white/10 w-32 sm:w-40">
              <div className="w-12 h-12 rounded-full border border-[#D95F39]/30 flex items-center justify-center bg-[#D95F39]/10 mb-3 text-[#D95F39]">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold font-display text-slate-200">Seeding Kéo Phễu</span>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block" />

            {/* Final Target */}
            <div className="flex flex-col items-center bg-[#D95F39] p-5 rounded-xl border border-[#D95F39]/40 w-36 sm:w-44 shadow-lg">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white mb-3 text-[#D95F39] text-xl font-bold font-mono">
                💰
              </div>
              <span className="text-xs font-bold font-display text-white uppercase tracking-wider">Chốt Đơn Sale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator (The savings metric simulator code-crafted tool) */}
      <section className="py-16 md:py-24 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6">
          <CostSavedCalculator />
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 bg-[#E5E2D9]/15 border-t border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Chuẩn bị chu đáo</span>
            <h2 className="font-display font-medium text-2.5xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-snug mb-8">
              Sẵn sàng vận hành hệ thống cùng MKT Automation?
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-[#D95F39]/10 p-2.5 rounded-lg text-[#D95F39] border border-[#D95F39]/20 shrink-0 mt-0.5 animate-pulse">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1A1A1A] text-sm sm:text-base font-medium">Mở máy tính Laptop hoặc PC cấu hình khá</h5>
                  <p className="text-[#5B574F] text-xs sm:text-sm mt-1 leading-normal font-light">
                    Hỗ trợ chạy mượt trên tối thiểu hệ điều hành Windows 10, cấu hình ổ cứng SSD và cấu hình tốt (RAM tối thiểu 16GB nếu muốn nuôi trên 100 tài khoản).
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-[#D95F39]/10 p-2.5 rounded-lg text-[#D95F39] border border-[#D95F39]/20 shrink-0 mt-0.5">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1A1A1A] text-sm sm:text-base font-medium">Chuẩn bị 50 - 100 nick Facebook (clone/via)</h5>
                  <p className="text-[#5B574F] text-xs sm:text-sm mt-1 leading-normal font-light">
                    Chuẩn bị tài nguyên tài khoản Facebook cổ hoặc mua clone mới có trust ổn định để khởi động chiến bão kết bạn.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-[#D95F39]/10 p-2.5 rounded-lg text-[#D95F39] border border-[#D95F39]/20 shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1A1A1A] text-sm sm:text-base font-medium">Một bộ phần mềm MKT bản quyền</h5>
                  <p className="text-[#5B574F] text-xs sm:text-sm mt-1 leading-normal font-light">
                    Kích hoạt gói MKT Care để nuôi tương tác mượt mà và MKT Data nhằm lấy tập dữ liệu UID từ trang của đối thủ.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-[#D95F39]/10 p-2.5 rounded-lg text-[#D95F39] border border-[#D95F39]/20 shrink-0 mt-0.5">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-[#1A1A1A] text-sm sm:text-base font-medium">Tài liệu hướng dẫn & tệp tỏi proxy IP sạch</h5>
                  <p className="text-[#5B574F] text-xs sm:text-sm mt-1 leading-normal font-light">
                    Sử dụng Proxy tĩnh để duy trì địa chỉ IP sạch cố định cho từng nick chống trỏ checkpoint liên đới cực nguy hiểm.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-[#D95F39]/5 rounded-3xl blur-2xl pointer-events-none" />
            <img 
              alt="System Requirements" 
              className="rounded-xl border-2 border-[#1A1A1A] w-full object-cover shadow-[6px_6px_0px_#1A1A1A] transition-transform duration-550 hover:scale-[1.01]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDp3RAyqJFVovzIYo-gHVGra3nd7fLEN4CXipcHGcNwLyiX792Mo-pJ-jdhOKco_2P0Dk3jOEkOTIe8GwhD1k4p5q5b_hWmkCFgbVcK4txfKcJS2o6CkDKQ2OO3_f5dYuk7z0DJ3bz-bbxlSoUkc2gk1tr4JS1UK_k5eaCn13stDbMfBhLBVueQPFDTOOWq0OVhB9pW4hlDdbn-nFNK-TWqcHgpzUw0nXFgUKuwOUuzTI1nG_lfZ6YXD8huGzy4a6YEDB0QpVk_sSS" 
            />
          </div>

        </div>
      </section>

      {/* Actual Case Study Results */}
      <section className="py-16 md:py-24 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Thống kê thực tiễn</span>
          <h2 className="font-display font-medium text-2.5xl sm:text-3.5xl text-[#1A1A1A] max-w-xl mx-auto mb-16 leading-tight">
            Kết Quả Vận Hành Thực Tế Từ Khách Hàng
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#E5E2D9]/20 rounded-xl border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
              <div className="text-[#D95F39] font-serif-italic font-normal italic text-4xl sm:text-5xl mb-2">50,000+</div>
              <p className="font-bold text-[#1A1A1A] mb-3 text-base sm:text-lg">Khách hàng tích lũy chất lượng</p>
              <p className="text-[#5B574F] text-xs sm:text-sm font-light leading-relaxed">
                Tệp khách hàng đúng mục tiêu được kết nối tối ưu với 100 tài khoản profile sau 3 tháng vận hành.
              </p>
            </div>

            <div className="p-8 bg-[#E5E2D9]/20 rounded-xl border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
              <div className="text-[#D95F39] font-serif-italic font-normal italic text-4xl sm:text-5xl mb-2">200%</div>
              <p className="font-bold text-[#1A1A1A] mb-3 text-base sm:text-lg">Inbox mua hàng đổ về tự nhiên</p>
              <p className="text-[#5B574F] text-xs sm:text-sm font-light leading-relaxed">
                Tăng tỷ lệ tin nhắn quan tâm hỏi mua sản phẩm nhờ thả seeding và nuôi bài viết chia sẻ hữu ích.
              </p>
            </div>

            <div className="p-8 bg-[#E5E2D9]/20 rounded-xl border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_#1A1A1A] transition-all duration-300">
              <div className="text-[#D95F39] font-serif-italic font-normal italic text-4xl sm:text-5xl mb-2">0 VNĐ</div>
              <p className="font-bold text-[#1A1A1A] mb-3 text-base sm:text-lg">Ngân sách quảng cáo Facebook Ads</p>
              <p className="text-[#5B574F] text-xs sm:text-sm font-light leading-relaxed">
                Hoàn toàn độc lập, dán tem sở hữu tệp tiếp cận riêng biệt không lo bị Meta bóp tương tác vô cớ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Solutions Section */}
      <section className="py-16 md:py-24 bg-[#E5E2D9]/20 border-t border-[#1A1A1A]/10" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Bảng giá cạnh tranh</span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#1A1A1A]">Bảng Giá Giải Pháp</h2>
            <p className="text-[#5B574F] text-xs sm:text-sm mt-3 font-light">Chọn phân khúc giải pháp marketing phù hợp nhất với tầm vóc thương hiệu của bạn.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
            <button 
              onClick={() => setActiveTab('care')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold font-display border border-[#1A1A1A] transition-all cursor-pointer ${activeTab === 'care' ? 'bg-[#1A1A1A] text-white shadow-md' : 'bg-[#E5E2D9] text-[#1A1A1A] hover:bg-[#d5d1c5]'}`}
            >
              Phần mềm Nuôi Nick & Seeding Profile (MKT Care)
            </button>
            <button 
              onClick={() => setActiveTab('data')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold font-display border border-[#1A1A1A] transition-all cursor-pointer ${activeTab === 'data' ? 'bg-[#1A1A1A] text-white shadow-md' : 'bg-[#E5E2D9] text-[#1A1A1A] hover:bg-[#d5d1c5]'}`}
            >
              Phần mềm Quét & Khai Thác UID (MKT Data)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricePlans[activeTab].map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-[#F4F1EA] p-8 sm:p-10 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${plan.isPopular ? 'border-[#1A1A1A] shadow-[6px_6px_0px_#D95F39] scale-[1.01]' : 'border-[#1A1A1A]/20 hover:border-[#1A1A1A]'}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#D95F39] text-[#F4F1EA] px-5 py-1.5 rounded-bl-lg font-display font-medium text-[10px] uppercase tracking-wider">
                    BEST VALUE
                  </div>
                )}
                
                <h3 className="font-display font-bold text-lg text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-2 flex items-center gap-2">
                  <span>{plan.name}</span>
                </h3>
                
                <div className="my-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#D95F39] font-display">{plan.price}</span>
                  <p className="text-[11px] text-[#5B574F] font-light mt-1.5">{plan.limit}</p>
                </div>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-[#5B574F]">
                      <Check className="w-4 h-4 text-[#D95F39] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#cta"
                  className={`block w-full text-center py-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border border-[#1A1A1A] cursor-pointer ${plan.isPopular ? 'bg-[#D95F39] text-white hover:bg-[#c24e2a] shadow-sm' : 'bg-[#1A1A1A] text-[#F4F1EA] hover:bg-[#1A1A1A]/90'}`}
                >
                  Nhận báo giá ngay
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-xs sm:text-sm text-[#5B574F] font-light">
            Bạn cần tư vấn cài đặt thử nghiệm? <a className="text-[#D95F39] font-medium underline hover:text-[#1A1A1A]" href="#cta">Đăng ký tư vấn xây dựng tệp mẫu ngay</a>
          </p>
        </div>
      </section>

      {/* FAQS Accordion Section */}
      <section className="py-16 md:py-24 bg-[#E5E2D9]/15 border-t border-b border-[#1A1A1A]/10" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D95F39] block mb-2 font-mono">Thắc mắc & Giải đáp</span>
            <h2 className="font-display font-medium text-[#1A1A1A] text-2.5xl sm:text-3.5xl">Câu Hỏi Thường Gặp</h2>
            <div className="h-0.5 w-12 bg-[#D95F39] mx-auto mt-4"></div>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA Registration Section with lead Capture Form */}
      <section className="py-16 md:py-24 bg-[#1A1A1A] text-white relative overflow-hidden border-t border-[#1A1A1A]" id="cta">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#D95F39]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-6 text-center lg:text-left">
            <h2 className="font-display font-medium text-3xl sm:text-4.5xl leading-tight text-white mb-6">
              Muốn Xây Dựng Hệ Thống Facebook Tự Động Cho Riêng Bạn?
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base mb-10 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tránh tụt hậu trước đối thủ trực tiếp. Liên hệ ngay để đội ngũ MKT bàn vùng, hướng dẫn setup tận tâm hệ thống nuôi tài khoản khổng lồ thu hút hàng vạn khách hành thành công.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="flex -space-x-3">
                <img 
                  alt="User avatar 1" 
                  className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] object-cover animate-pulse" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc-In4jh1IYl7QkvkhZhOyGlFPaLtJ4IxzIlT0ViDn3JqRd3K5XbOXX2fqPVCKV45nx4L3Q2IbxfRQSg0fRn3v1uiJsNEE3NQ2hL5HVIpYqJ2U_sGZWpLyQzU7hGz5Y5JlB8s4r98_rfglxPhlOlLkbBEn3w1be738AvLZSDHnanntuPYc5emUcE5sVcKqKtCi-1bl_On1-pkn2RmYPZE-V8S3A-nVil68NEl9Yq3zjyqI4piyi7TKIkHQGCYwRIjTQclL9a26ZAFd" 
                />
                <img 
                  alt="User avatar 2" 
                  className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW9_3hH2bC6YYYLfEAEJn4A_-uyVO03v9w1fEn-qTmT-ovckVgD_VJPV_ZlsMBD8zoHD6JL4WpELRsgcZcxrO2wAT6Ew8PkjyayL3yp6Gl2P0yl2A3ocjXUN4pGA1JCJ-Jhl26rgiWi3nhKc_3UwFVecdsX81JLHih-L9GBax0XaXTr68sDGAhPdJY2CooI8w_JBYEWkkZeTLT1YYpdlUhqlesp7ELYvdZXBpOJcDcOFW6a3KWGMTULkBWNhyaUzYBuXX2Sjg56Xmj" 
                />
                <img 
                  alt="User avatar 3" 
                  className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyl9UDHOzRdcGgqikIQE3IuAltCLiNEeMpTUTG5eBI97jXj-cuXvIk19lsJPymd3peXvz8zBY17xqFd7oZ_PDh5Jh9SVRVOvVmYY6IytXM6yD5nbZP4roJofcgNWgGzAjFHhTHsor-oC7uZxudFyF5eRKhFb9NSmHZnbTaCZto4434o8505yH54vocfONd-v1yM17da1wJcVVTdVCipUMV1ikVd_8uyGj_3CXtqSKh2ZMDv_7gue2F0VZmJ9aYo4_of6EuGlG-kpQl" 
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#D95F39] font-display">
                🔥 Hơn +5,000 khách hàng SME & Doanh nghiệp đã đăng ký tin dùng mẫu
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <LeadCapture />
          </div>

        </div>
      </section>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-[#1A1A1A]/85 backdrop-blur-sm z-[9999] flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="bg-[#F4F1EA] w-full max-w-4xl rounded-xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A] relative">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-[#1A1A1A] hover:bg-[#D95F39] text-[#F4F1EA] w-9 h-9 rounded flex items-center justify-center font-bold text-xs cursor-pointer"
            >
              ✕
            </button>
            <div className="p-6 border-b border-[#1A1A1A]/10">
              <h4 className="font-display font-semibold text-[#1A1A1A] flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#D95F39]" />
                Quy trình chạy tự động đa luồng Facebook MKT Software
              </h4>
            </div>
            
            {/* Visual simulation of a software run on video mock rather than static placeholder */}
            <div className="aspect-[16/9] bg-[#1A1A1A] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center filter opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0VtNejxNZmUaer2PkR8t-1afP13HO3zdiCwzskIrVfv0O2OEWfTTQaYMijsZ-DrF6blhH0YnCaaJEMXg71k_dov4VyNtijpu3Z06EHygZbBedgJhteqW6pEo_8eNLHP8z5gggN49QBqYUr6EbyD8Tg6zrZHF13YXPMU4yGsKvltAJMnO7YifA60Fp0b3mZgi6ORnk-G-ZQzAjLKErZvCI79f2zegb0DbsdouLSnHL3dy3mDSvDwyk3M4RURSAmwbjuPcQI14zFyBU')" }} />
              
              <div className="z-10 text-center max-w-md p-6">
                <div className="w-14 h-14 rounded-full bg-[#D95F39]/20 text-[#D95F39] flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Cpu className="w-8 h-8" />
                </div>
                <h5 className="font-bold text-sm text-white mb-2">Đang liên kết Trình phát Video Demo</h5>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Hệ thống nuôi thực tế giả lập hoạt động trên LDPlayer với cấu hình đa luồng. Hãy kéo xuống phần <b>Trình Mô Phỏng Sandbox</b> để trực tiếp vận hành các tham số thực tế ngay trên trình duyệt web của bạn!
                </p>
                <button 
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    handleOpenDemo();
                  }} 
                  className="mt-6 bg-[#D95F39] text-[#F4F1EA] text-xs px-5 py-2.5 rounded hover:bg-[#c24e2a] cursor-pointer"
                >
                  Dùng thử Sandbox Thay thế
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-slate-400 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-sans">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#D95F39] flex items-center justify-center text-[#F4F1EA] shadow-md">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                MKT <span className="text-[#D95F39]">Automation</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Giải pháp bộ công cụ phần mềm quản trị và tối ưu hóa Facebook Profile Marketing tự động hóa hàng đầu Việt Nam. Giúp doanh nghiệp đột phá tệp khách hàng tự nhiên.
            </p>
          </div>

          <div>
            <h5 className="font-display font-semibold text-white uppercase text-xs tracking-wider mb-6">Sản phẩm nổi bật</h5>
            <ul className="space-y-4 text-xs font-light">
              <li><a href="#pricing" onClick={() => { setActiveTab('care'); }} className="hover:text-white transition-colors">Hệ thống nuôi nick MKT Care</a></li>
              <li><a href="#pricing" onClick={() => { setActiveTab('data'); }} className="hover:text-white transition-colors">Khai thác dữ liệu khách MKT Data</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Tải Auto Seeding & Auto Add Friend</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Công cụ quét UID Fanpage đối thủ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-semibold text-white uppercase text-xs tracking-wider mb-6">Chính Sách & Hỗ Trợ</h5>
            <ul className="space-y-4 text-xs font-light">
              <li><a href="#" className="hover:text-white transition-colors">Tài liệu hướng dẫn vận hành sỉ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo hành bản quyền</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật dữ liệu account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên hệ tư vấn viên</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-semibold text-white uppercase text-xs tracking-wider mb-6">Thông Tin Liên Hệ</h5>
            <div className="space-y-4 text-xs font-light">
              <p className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#D95F39] shrink-0" />
                <span>Hotline hỗ trợ: <b className="text-slate-200">09xx xxx xxx</b></span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D95F39] shrink-0" />
                <span>Trụ sở chính: Quận Cầu Giấy, TP. Hà Nội, Việt Nam</span>
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs font-light text-slate-500">
          <p>© 2026 MKT Automation Solution. Bản quyền được bảo hộ và thiết kế bởi MKT Group.</p>
        </div>
      </footer>
    </div>
  );
}
