import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    question: "Phần mềm này dành cho những lĩnh vực nào?",
    answer: "Phần mềm phù hợp cho mọi ngành nghề cần tìm kiếm và chăm sóc khách hàng trực tuyến: từ Bất động sản, Bảo hiểm, Mỹ phẩm, Khóa học đào tạo, Phần mềm sản phẩm, đến các dịch vụ cửa hàng local như Spa, Gym, Nha khoa, Nhà hàng..."
  },
  {
    id: 2,
    question: "Có sợ bị khóa nick khi sử dụng automation không?",
    answer: "MKT Automation sử dụng công nghệ giả lập hành vi người dùng thực tế (gồm thời gian giãn cách ngẫu nhiên, tự động đổi dải địa chỉ IP qua proxy/Dcom, lướt newsfeed trước khi hành động). Điều này mô phỏng chính xác thao tác của con người, giảm rủi ro checkpoint hay bóp tương tác xuống dưới mức tối thiểu."
  },
  {
    id: 3,
    question: "Sau bao lâu thì thấy được kết quả thực tế?",
    answer: "Chỉ sau khoảng 7-15 ngày đầu tiên khi hệ thống tài khoản đi vào trạng thái ổn định và kết bạn đúng tiệp UID, bạn sẽ bắt đầu nhận thấy các lượt tiếp cận organic tăng mạnh, lượt comment trên bài và tin nhắn inbox quan tâm tự nhiên dồn dập đổ về."
  },
  {
    id: 4,
    question: "Tôi không rành về máy tính và kỹ thuật có tự cài đặt và dùng được không?",
    answer: "MKT Automation cam kết có đội ngũ kỹ thuật viên giàu kinh nghiệm hỗ trợ cài đặt trực tiếp qua UltraView/TeamViewer. Chúng tôi cung cấp bộ thư viện video ngắn hướng dẫn từng nút bấm, cùng quy trình 1 kèm 1 cho tới khi bạn chạy thành thạo."
  },
  {
    id: 5,
    question: "Giá phần mềm bao gồm những công cụ gì và chế độ bảo hành thế nào?",
    answer: "Sản phẩm được chia thành các gói như MKT Care (nuôi tài khoản & đăng bài đồng loạt) và MKT Data (quét tệp thành viên, tương tác). Toàn bộ phần mềm đều được tự động update cập nhật thuật toán Meta miễn phí trong suốt thời hạn đăng ký gói để đảm bảo tính ổn định tối đa."
  }
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {FAQS.map(faq => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id} 
            className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-md' : 'bg-slate-50/60 hover:bg-white'}`}
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex justify-between items-center p-6 text-left cursor-pointer transition-colors focus:outline-none"
            >
              <span className={`font-bold text-sm sm:text-base ${isOpen ? 'text-brand-primary' : 'text-[#001b3d]'}`}>
                {faq.question}
              </span>
              <span className={`p-1.5 rounded-full ${isOpen ? 'bg-brand-primary/10 text-brand-primary rotate-180' : 'bg-slate-200/50 text-slate-500'} transition-all duration-300`}>
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'}`}
            >
              <div className="p-6 text-sm sm:text-base text-brand-on-surface-variant leading-relaxed font-light">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
