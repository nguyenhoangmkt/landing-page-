import React, { useState } from 'react';
import { ToggleLeft, CircleDollarSign, Percent, BadgeAlert, TrendingUp, Lightbulb } from 'lucide-react';

const INDUSTRIES = [
  { id: 'bds', name: 'Bất Động Sản', avgCpc: 8500, convRate: 0.015, desc: 'Tệp cạnh tranh cực cao, quảng cáo Ads đắt đỏ' },
  { id: 'cosmetics', name: 'Mỹ Phẩm / Làm Đẹp', avgCpc: 3500, convRate: 0.03, desc: 'Cần seeding mạnh, tiếp cận cá nhân hóa' },
  { id: 'education', name: 'Khóa học / Đào tạo', avgCpc: 6000, convRate: 0.025, desc: 'Phụ thuộc nhiều vào uy tín profile cá nhân' },
  { id: 'retail', name: 'Thời Trang / Đồ Gia Dụng', avgCpc: 2500, convRate: 0.04, desc: 'Lợi nhuận mỏng, tiết kiệm Ads tối đa' },
  { id: 'services', name: 'Dịch vụ Spa / Salon / Gym', avgCpc: 4500, convRate: 0.02, desc: 'Cần quét khách hàng đúng địa bàn local' },
];

export default function CostSavedCalculator() {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);
  const [profiles, setProfiles] = useState(50);
  const [friendsPerProfile, setFriendsPerProfile] = useState(3000);

  // Match selected industry values
  const currentIndustry = INDUSTRIES.find(ind => ind.id === selectedIndustry) || INDUSTRIES[0];

  // Calculated values
  const totalAudience = profiles * friendsPerProfile;
  // Estimated reach of system (e.g. 15% of friends see an active post or profile profile action over 1 week)
  const estimatedReach = Math.round(totalAudience * 0.18);
  // Facebook Ads cost equivalent: estimatedReach multiplied by average cost-per-click/impression proxy
  const adsCostEquivalent = Math.round(estimatedReach * currentIndustry.avgCpc * 0.4); // adjusted factor for realistic impression-to-click transition
  // Standard license price of MKT system
  const mktLicenseFee = 3000000; // 3 Million VND
  const moneySaved = adsCostEquivalent - mktLicenseFee;

  return (
    <div id="calculator" className="w-full bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden scroll-mt-20">
      {/* Decorative gradient blur background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary-container/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="max-w-2xl mb-10">
          <span className="inline-block bg-brand-primary/25 border border-brand-primary/45 text-brand-primary-fixed px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Duy nhất tại đây
          </span>
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-white tracking-tight">
            Ước Tính Hiệu Quả & Chi Phí Tiết Kiệm
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Nhập các thông số dự kiến của bạn để thấy bảng so sánh trực quan hiệu năng tiếp cận tự nhiên so với chạy Facebook Ads thông thường.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Controls form */}
          <div className="space-y-6">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">
                1. Chọn lĩnh vực kinh doanh của bạn
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {INDUSTRIES.map(industry => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium text-center border transition-all ${
                      selectedIndustry === industry.id
                        ? 'bg-brand-primary border-brand-primary text-white font-semibold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-2.5 font-light">
                ℹ️ {currentIndustry.desc}. CPC quảng cáo trung bình ước tính: <span className="text-brand-primary-fixed font-mono font-bold">{currentIndustry.avgCpc.toLocaleString('vi-VN')} đ/click</span>
              </p>
            </div>

            {/* Profile count slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                <span>2. Số lượng tài khoản Profile nuôi:</span>
                <span className="text-teal-400 font-mono text-sm">{profiles} Nick</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={profiles}
                onChange={(e) => setProfiles(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>10 Nick</span>
                <span>100 Nick (Khuyên dùng)</span>
                <span>200 Nick</span>
              </div>
            </div>

            {/* Friends slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wide mb-2">
                <span>3. Mục tiêu số Bạn Bè bình quân/Nick:</span>
                <span className="text-purple-400 font-mono text-sm">{friendsPerProfile.toLocaleString('vi-VN')} Bạn</span>
              </div>
              <input
                type="range"
                min="1000"
                max="5000"
                step="250"
                value={friendsPerProfile}
                onChange={(e) => setFriendsPerProfile(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>1,000 Bạn</span>
                <span>3,000 Bạn</span>
                <span>5,000 Bạn (Tối đa FB)</span>
              </div>
            </div>
          </div>

          {/* Results dashboard grid */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 font-sans space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700 pb-3">Kết quả so sánh hiệu quả</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">Tổng Tệp Khách Hàng tích lũy</span>
                <span className="text-xl font-bold font-mono text-teal-400">{(totalAudience).toLocaleString('vi-VN')}</span>
                <span className="text-[10px] text-slate-500 block">Contact tiềm năng</span>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">Lượt Tiếp Cận (Sau 10 bài)</span>
                <span className="text-xl font-bold font-mono text-purple-400">{(estimatedReach).toLocaleString('vi-VN')}</span>
                <span className="text-[10px] text-slate-500 block">Lượt xem tự nhiên</span>
              </div>
            </div>

            <div className="space-y-3.5 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Chi phí Ads tương đương (Để đạt cùng lượt xem):</span>
                <span className="font-bold text-rose-400 font-mono">~ {adsCostEquivalent.toLocaleString('vi-VN')} vnđ</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Chi phí phần mềm MKT (bình quân/tháng):</span>
                <span className="font-bold text-[#b3c5ff] font-mono">~ {(mktLicenseFee / 12).toLocaleString('vi-VN')} vnđ</span>
              </div>

              <div className="bg-brand-primary-container/10 p-4 rounded-xl border border-brand-primary/20 mt-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <TrendingUp className="text-emerald-400 w-4 h-4" />
                  <span className="text-xs font-bold text-slate-100">Lợi Ích Tiết Kiệm Dự Kiến</span>
                </div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  + {moneySaved > 0 ? moneySaved.toLocaleString('vi-VN') : '0'} đ <span className="text-xs text-slate-300 font-normal">/ năm</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                  Do hệ thống Profile nuôi có độ bền lâu, tiếp cận trực tiếp inbox không thông qua CPM đấu thầu đắt đỏ của Meta Ads.
                </p>
              </div>
            </div>

            <div className="flex gap-2 p-3 bg-brand-tertiary/10 rounded-xl border border-brand-tertiary/20 text-[11px] text-slate-300 font-light">
              <Lightbulb className="w-4 h-4 text-brand-tertiary shrink-0 mt-0.5" />
              <span>Gợi ý: Chỉ với cấu hình <b>{profiles} nick</b>, bạn có thể build tệp <b>{(totalAudience).toLocaleString('vi-VN')} khách hàng tiềm năng</b> và đăng bài tiếp cận đúng tệp tự động mỗi ngày hoàn toàn miễn phí.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
