import React, { useState, useEffect, useRef } from 'react';
import { SimulatedAccount, ProcessLog } from '../types';
import { Play, Square, RefreshCw, Terminal, CheckCircle2, AlertTriangle, Users2, ShieldAlert, Cpu, Sparkles, Network, UserPlus, Database } from 'lucide-react';

const PRESET_TARGETS = [
  { id: 1, label: 'Cộng đồng Bất Động Sản Hà Nội & HCM', members: '145,000 thành viên', query: 'https://facebook.com/groups/bds-vietnam-chinhchu' },
  { id: 2, label: 'Nhóm Khởi Nghiệp & Kinh Doanh Việt Nam', members: '320,000 thành viên', query: 'https://facebook.com/groups/khoinghiep-sme' },
  { id: 3, label: 'Fanpage Đối Thủ Cạnh Tranh - Mỹ Phẩm Cao Cấp', members: '88,000 người thích', query: 'https://facebook.com/pages/cosmetics-premium-competitor' },
  { id: 4, label: 'Cộng đồng Mẹ đăng tin & Săn sale bỉm sữa', members: '65,000 thành viên', query: 'https://facebook.com/groups/me-bim-sua-smart' },
];

const MOCK_NAMES = [
  'Nguyễn Văn Tuấn (Via Trust)', 'Trần Thị Mỹ Linh (Via 2FA)', 'Phạm Hoàng Minh (Clone US)',
  'Lê Thu Trang (Via Nolimit)', 'Vũ Văn Hùng (Back Up)', 'Đặng Thu Thảo (Via Ngoại)',
  'Hoàng Quốc Anh (Via ADS)', 'Đỗ Kim Oanh (Clone Trust)', 'Bùi Minh Đức (Via Trust)',
  'Phan Thanh Hà (Via 2FA)'
];

const LOG_TEMPLATES = [
  { message: 'Khởi động luồng trình duyệt mô phỏng LDPlayer sạch.', type: 'info' as const },
  { message: 'Thay đổi địa chỉ IP Proxy thành công thông qua Router.', type: 'success' as const },
  { message: 'MKT Data: Quét thành công danh sách người tương tác bài viết gần nhất.', type: 'success' as const },
  { message: 'Lướt newsfeed, xem video watch 24s tăng độ tương tác tài khoản.', type: 'info' as const },
  { message: 'Gửi kết bạn tự động tới đối tượng tiềm năng.', type: 'success' as const },
  { message: 'Thực hiện thả tim bài viết đầu tiên của đối tượng mục tiêu.', type: 'success' as const },
  { message: 'Nhận diện Checkpoint hình ảnh thành công, tự động giải quyết an toàn.', type: 'success' as const },
  { message: 'MKT Care: Đăng bài viết chia sẻ giá trị tự động lên trang cá nhân.', type: 'success' as const },
];

export default function NickSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [targetUrl, setTargetUrl] = useState(PRESET_TARGETS[0].query);
  const [numAccounts, setNumAccounts] = useState(10);
  const [accounts, setAccounts] = useState<SimulatedAccount[]>([]);
  const [logs, setLogs] = useState<ProcessLog[]>([]);
  
  // Simulated overall performance counters
  const [scannedUIDs, setScannedUIDs] = useState(0);
  const [sentRequests, setSentRequests] = useState(0);
  const [reachSimulated, setReachSimulated] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Initialize accounts
  useEffect(() => {
    const initial: SimulatedAccount[] = Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      name: MOCK_NAMES[i % MOCK_NAMES.length],
      avatar: `https://images.unsplash.com/photo-${1500000000000 + (i * 100000)}?w=150&auto=format&fit=crop&q=60`,
      friendCount: Math.floor(Math.random() * 1200) + 300,
      status: 'idle',
      successCount: 0,
      trustScore: Math.floor(Math.random() * 15) + 80
    }));
    setAccounts(initial);
  }, []);

  // Handle auto scroll for logs
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Simulation execution loop
  useEffect(() => {
    let interval: any;
    if (isRunning) {
      // Periodic logic
      interval = setInterval(() => {
        // Randomly update an account's state
        setAccounts(prev => {
          const index = Math.floor(Math.random() * Math.min(prev.length, numAccounts));
          return prev.map((acc, i) => {
            if (i === index) {
              const states: Array<SimulatedAccount['status']> = ['scanning', 'connecting', 'posting', 'active'];
              const newStatus = states[Math.floor(Math.random() * states.length)];
              let successPlus = 0;
              let trustPlus = 0;

              if (newStatus === 'connecting') {
                successPlus = 1;
                trustPlus = Math.random() > 0.9 ? -1 : 1; 
              }

              return {
                ...acc,
                status: newStatus,
                successCount: acc.successCount + successPlus,
                friendCount: acc.friendCount + successPlus,
                trustScore: Math.max(50, Math.min(100, acc.trustScore + trustPlus))
              };
            }
            return acc;
          });
        });

        // Add a random log
        const randomTemplate = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
        const randomAcc = MOCK_NAMES[Math.floor(Math.random() * Math.min(10, numAccounts))];
        const timestamp = new Date().toLocaleTimeString('vi-VN', { hour12: false });
        
        const newLog: ProcessLog = {
          id: Math.random().toString(),
          time: timestamp,
          message: `[${randomAcc.split(' ')[0]}] ${randomTemplate.message}`,
          type: randomTemplate.type
        };

        setLogs(prev => [...prev.slice(-30), newLog]); // Keep last 30 logs

        // Increment stats
        setScannedUIDs(prev => prev + Math.floor(Math.random() * 8) + 3);
        setSentRequests(prev => prev + (Math.random() > 0.4 ? 1 : 0));
        setReachSimulated(prev => prev + Math.floor(Math.random() * 45) + 15);
        setMoneySaved(prev => prev + Math.floor(Math.random() * 2500) + 800);

      }, 1500);
    } else {
      // Clear interval
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, numAccounts]);

  const startSimulation = () => {
    if (!targetUrl.trim()) return;
    setIsRunning(true);
    const timestamp = new Date().toLocaleTimeString('vi-VN', { hour12: false });
    setLogs([
      {
        id: 'start',
        time: timestamp,
        message: `Khởi tạo quy trình automation Facebook Profile. Target: ${targetUrl}`,
        type: 'info'
      },
      {
        id: 'scanning-data',
        time: timestamp,
        message: `MKT Data: Tiến hành quét UID tiềm năng từ tệp đã chọn...`,
        type: 'info'
      }
    ]);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    const timestamp = new Date().toLocaleTimeString('vi-VN', { hour12: false });
    setLogs(prev => [
      ...prev,
      {
        id: 'stop',
        time: timestamp,
        message: 'Đã tạm dừng quy trình tự động hóa. Đang lưu trạng thái phiên làm việc.',
        type: 'warning'
      }
    ]);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setScannedUIDs(0);
    setSentRequests(0);
    setReachSimulated(0);
    setMoneySaved(0);
    setLogs([]);
    setAccounts(prev => prev.map(a => ({ ...a, status: 'idle', successCount: 0 })));
  };

  return (
    <div id="demo-simulator" className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden scroll-mt-20">
      <div className="bg-[#001b3d] px-6 py-5 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-primary/20 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h3 className="font-display font-bold text-lg text-white">BẢN TRẢI NGHIỆM TRỰC TUYẾN: MKT DEMO SIMULATOR</h3>
          </div>
          <p className="text-xs text-slate-300/90 mt-1">Mô phỏng quy trình tự động quét khách, kết bạn & tương tác của tệp tài khoản</p>
        </div>
        <div className="flex gap-2">
          {!isRunning ? (
            <button 
              onClick={startSimulation}
              className="bg-brand-primary text-white hover:bg-brand-primary-container px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Chạy Hệ Thống
            </button>
          ) : (
            <button 
              onClick={stopSimulation}
              className="bg-amber-600 text-white hover:bg-amber-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              Tạm Dừng
            </button>
          )}
          <button 
            onClick={resetSimulation}
            className="bg-slate-700 text-slate-200 hover:bg-slate-600 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
            title="Reset dữ liệu"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Làm mới
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Parameters Form */}
        <div className="lg:col-span-4 p-6 border-r border-slate-100 flex flex-col justify-between bg-slate-50/70">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Cài đặt quy trình giả lập</h4>
            
            {/* Target Settings */}
            <div className="mb-5">
              <label className="block text-xs font-extrabold text-slate-700 mb-2">1. Chọn Nguồn Khách Hàng Quét UID</label>
              <div className="space-y-2 mb-3">
                {PRESET_TARGETS.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => setTargetUrl(preset.query)}
                    className={`text-left w-full p-2.5 rounded-lg border text-xs transition-all ${targetUrl === preset.query ? 'bg-brand-secondary-container/30 border-brand-primary text-[#001849] font-semibold' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="truncate pr-1">{preset.label}</span>
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-mono shrink-0">{preset.members}</span>
                    </div>
                  </button>
                ))}
              </div>
              <input 
                type="text" 
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder="Nhập link page, group, bài viết facebook..."
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-primary"
              />
            </div>

            {/* Asset scale settings */}
            <div className="mb-5">
              <div className="flex justify-between text-xs font-extrabold text-slate-700 mb-2">
                <span>2. Số Tài Khoản Vận Hành:</span>
                <span className="text-brand-primary font-mono">{numAccounts} Nick Profiles</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="10" 
                value={numAccounts}
                onChange={(e) => setNumAccounts(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>Min: 3 Nick</span>
                <span>Max: 10 Nick (Simulated)</span>
              </div>
            </div>

            {/* Simulated process state list */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
              <h5 className="text-[11px] font-bold text-slate-700 uppercase mb-3 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-brand-primary" />
                Dàn máy tính đề xuất
              </h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Cấu hình RAM đề xuất:</span>
                  <span className="font-semibold text-slate-700">16GB - 32GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Băng thông IP proxy:</span>
                  <span className="font-semibold text-slate-700">Dcom / Proxy cá nhân</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tốc độ tối ưu:</span>
                  <span className="font-semibold text-emerald-600">~1,000 khách/ngày</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200">
            <div className="rounded-xl bg-slate-900 text-white p-4.5 glow-primary">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-amber-400 w-4 h-4 animate-bounce" />
                <span className="text-xs font-bold text-slate-200">Hiệu năng thực tế khi dùng bản MKT trả phí</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Bản thương mại hỗ trợ nuôi đồng thời <b>1,000 - 50,000 nick</b> trên máy cá nhân, tự động đổi dải IP sạch, kháng checkpoints và spam an toàn.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual accounts grid & Live console logs */}
        <div className="lg:col-span-8 p-6 flex flex-col justify-between">
          
          {/* Top Row: Live statistics counter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/50 flex flex-col justify-between font-display">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Cơ sở dữ liệu quét</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-[#001b3d]">{scannedUIDs.toLocaleString('vi-VN')}</span>
                <span className="text-[10px] text-slate-500 font-medium">Khách</span>
              </div>
            </div>

            <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/50 flex flex-col justify-between font-display">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Yêu cầu kết bạn</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-brand-primary">{sentRequests.toLocaleString('vi-VN')}</span>
                <span className="text-[10px] text-slate-500 font-medium font-mono">Lần gửi</span>
              </div>
            </div>

            <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/50 flex flex-col justify-between font-display">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Lượt tiếp cận ước tính</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold text-teal-600">{(reachSimulated).toLocaleString('vi-VN')}</span>
                <span className="text-[10px] text-slate-500 font-medium">Organic</span>
              </div>
            </div>

            <div className="bg-brand-primary-container/[0.04] p-3.5 rounded-xl border border-brand-primary-container/20 flex flex-col justify-between font-display">
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block mb-1">Tiết kiệm chi phí Ads</span>
              <div className="flex items-baseline gap-1 bg-brand-primary/10 px-2 py-0.5 rounded w-fit mt-1 lg:mt-0">
                <span className="text-xs font-extrabold text-[#0050cb]">~ {moneySaved.toLocaleString('vi-VN')} đ</span>
              </div>
            </div>
          </div>

          {/* Profile asset screen grid */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
              <span>Bảng trạng thái dàn tài khoản ({numAccounts})</span>
              {isRunning && <span className="text-emerald-600 font-mono text-[10px] animate-pulse">● Vận hành đa luồng song song</span>}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {accounts.slice(0, numAccounts).map(acc => {
                let statusBg = 'bg-slate-50 border-slate-200 text-slate-500';
                let statusLabel = 'Đang xếp hàng...';
                let statusPointColor = 'bg-slate-400';

                if (acc.status === 'scanning') {
                  statusBg = 'bg-sky-50 border-sky-200 text-sky-700 animate-pulse';
                  statusLabel = 'Quét thành viên...';
                  statusPointColor = 'bg-sky-500';
                } else if (acc.status === 'connecting') {
                  statusBg = 'bg-brand-primary/5 border-brand-primary/20 text-[#0050cb]';
                  statusLabel = 'Gửi kết bạn...';
                  statusPointColor = 'bg-brand-primary';
                } else if (acc.status === 'posting') {
                  statusBg = 'bg-purple-50 border-purple-200 text-purple-700';
                  statusLabel = 'Đăng bài & Seeding...';
                  statusPointColor = 'bg-purple-500';
                } else if (acc.status === 'active') {
                  statusBg = 'bg-emerald-50 border-emerald-200 text-emerald-800';
                  statusLabel = 'Tương tác Newsfeed';
                  statusPointColor = 'bg-emerald-500';
                }

                return (
                  <div key={acc.id} className="p-3 bg-white rounded-xl border border-slate-150 transition-all shadow-sm hover:shadow-md flex items-center gap-3">
                    <div className="relative">
                      <img src={acc.avatar} alt={acc.name} className="w-10 h-10 object-cover rounded-full border border-slate-200" />
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${statusPointColor}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-slate-800 truncate" title={acc.name}>{acc.name}</div>
                      <div className="flex gap-2 items-center text-[10px] text-slate-400 mt-0.5">
                        <span>👥 {acc.friendCount} bạn</span>
                        <span>🛡️ Trust {acc.trustScore}%</span>
                      </div>
                      <div className={`mt-2 py-0.5 px-2 rounded text-[9px] font-semibold w-fit ${statusBg}`}>
                        {statusLabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive terminal output log */}
          <div className="bg-slate-900 rounded-2xl p-4 text-slate-300 font-mono text-[11px] h-[190px] flex flex-col justify-between border border-slate-800 shadow-inner">
            <div className="flex justify-between border-b border-slate-800 pb-2 mb-2 text-slate-500 text-[10px]">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-[#0050cb]" />
                NHẬT KÝ VẬN HÀNH MARKETING TOOL MKT
              </span>
              <span>LIVE OUTPUT</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-slate-800 pr-1">
              {logs.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 text-xs py-10">
                  <Database className="w-8 h-8 opacity-20 mb-2" />
                  <span>Ấn nút "Chạy Hệ Thống" ở trên để xem quá trình tự động hoá hoạt động thực tế.</span>
                </div>
              ) : (
                logs.map(log => {
                  let textCol = 'text-slate-300';
                  if (log.type === 'success') textCol = 'text-emerald-400';
                  if (log.type === 'warning') textCol = 'text-amber-500';
                  if (log.type === 'error') textCol = 'text-rose-400';

                  return (
                    <div key={log.id} className="flex gap-2 leading-relaxed">
                      <span className="text-slate-500 shrink-0 font-light">{log.time}</span>
                      <span className={`${textCol} break-all`}>{log.message}</span>
                    </div>
                  );
                })
              )}
              <div ref={terminalEndRef} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
