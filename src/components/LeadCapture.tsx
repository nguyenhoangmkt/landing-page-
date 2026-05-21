import React, { useState } from 'react';
import { CheckCircle, Calendar, MessageSquare, Briefcase, Phone, UserCheck, Sparkles, Send } from 'lucide-react';

interface LeadFormInput {
  fullName: string;
  phone: string;
  niche: string;
  message: string;
}

const INITIAL_FORM: LeadFormInput = {
  fullName: '',
  phone: '',
  niche: '',
  message: ''
};

export default function LeadCapture() {
  const [form, setForm] = useState<LeadFormInput>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim()) {
      alert('Vui lòng điền thông tin Họ tên và Số điện thoại liên hệ!');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setReceiptNumber('MKT-' + Math.floor(100000 + Math.random() * 900000));
    }, 1200);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-[40px] shadow-2xl border border-slate-100/80 text-[#001b3d] relative overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0050cb] to-[#0066ff]" />
        
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>

          <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Gửi yêu cầu nhận tư vấn thành công!
          </span>

          <h4 className="font-display font-bold text-xl sm:text-2xl text-slate-950 mb-4">
            Cảm ơn {form.fullName}, MKT đã ghi nhận thông tin!
          </h4>
          
          <p className="text-sm text-slate-500 max-w-md leading-relaxed mb-8">
            Chúng tôi đã chuyển tiếp yêu cầu của bạn tới Chuyên viên Tư vấn tăng trưởng Facebook Profile khu vực của bạn.
          </p>

          <div className="w-full bg-slate-50/80 rounded-2xl p-4 mb-8 text-left space-y-3.5 border border-slate-200/55 text-xs font-mono">
            <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
              <span className="text-slate-400">Mã yêu cầu:</span>
              <span className="font-bold text-slate-800">{receiptNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Khách hàng:</span>
              <span className="font-bold text-slate-800">{form.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Số DĐ/Zalo:</span>
              <span className="font-bold text-slate-800">{form.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Lĩnh vực:</span>
              <span className="font-bold text-slate-800">{form.niche || 'Mặc định'}</span>
            </div>
            <div className="flex justify-between border-t border-dashed border-slate-200 pt-2 text-slate-500">
              <span>Chuyên viên hỗ trợ gán:</span>
              <span className="font-bold text-brand-primary">Nguyễn Minh Thu (Leader Growth)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button 
              onClick={() => alert(`Yêu cầu Zalo gửi tới hotline: 09xx xxx xxx với mã ${receiptNumber}`)}
              className="flex-1 bg-emerald-500 text-white py-3.5 rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all active:scale-95"
            >
              💬 Nhắn liên hệ ngay qua Zalo
            </button>
            <button 
              onClick={handleReset}
              className="flex-1 bg-slate-100 text-slate-600 py-3.5 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all"
            >
              Gửi yêu cầu mới
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10 rounded-[40px] shadow-2xl border border-slate-100/90">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
          Điền mẫu đăng ký nhận demo & báo giá sỉ
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name Input */}
        <div>
          <label className="block text-slate-700 font-semibold text-xs mb-2 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-brand-primary" />
            Họ tên của bạn <span className="text-rose-500">*</span>
          </label>
          <input 
            type="text" 
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl text-slate-800 text-sm focus:outline-none transition-all placeholder:text-slate-400"
            placeholder="Nguyễn Văn A" 
          />
        </div>

        {/* Phone / Zalo Input */}
        <div>
          <label className="block text-slate-700 font-semibold text-xs mb-2 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-primary" />
            Số điện thoại (Nhận tài liệu qua Zalo) <span className="text-rose-500">*</span>
          </label>
          <input 
            type="tel" 
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl text-slate-800 text-sm focus:outline-none transition-all placeholder:text-slate-400"
            placeholder="Ví dụ: 0912345678" 
          />
        </div>

        {/* Niche Input */}
        <div>
          <label className="block text-slate-700 font-semibold text-xs mb-2 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-brand-primary" />
            Lĩnh vực kinh doanh của bạn
          </label>
          <input 
            type="text" 
            name="niche"
            value={form.niche}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl text-slate-800 text-sm focus:outline-none transition-all placeholder:text-slate-400"
            placeholder="Ví dụ: Bất động sản, Mỹ phẩm, Khóa học..." 
          />
        </div>

        {/* Special requirement Textarea */}
        <div>
          <label className="block text-slate-700 font-semibold text-xs mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-brand-primary" />
            Nhu cầu bài toán cần tư vấn cụ thể
          </label>
          <textarea 
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 h-28 bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl text-slate-800 text-sm focus:outline-none transition-all placeholder:text-slate-400 resize-none"
            placeholder="Tôi muốn tư vấn setup hệ thống 100 nick nuôi tự động..."
          />
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-brand-primary-container text-white font-display font-extrabold text-xs rounded-xl hover:bg-brand-primary hover:shadow-xl hover:shadow-brand-primary/25 active:scale-95 transition-all text-center uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? (
            <>Đang đăng ký xử lý...</>
          ) : (
            <>
              Nhận tư vấn ngay
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
