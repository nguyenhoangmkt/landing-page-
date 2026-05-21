import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenDemo: () => void;
}

export default function Header({ onOpenDemo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of header approx
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/55' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-xl font-display font-extrabold text-[#001b3d] tracking-tight">
            MKT <span className="text-brand-primary">Automation</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a onClick={(e) => handleNavClick(e, 'solutions')} href="#solutions" className="text-sm font-semibold text-brand-on-surface-variant hover:text-brand-primary transition-colors">
            Giải pháp
          </a>
          <a onClick={(e) => handleNavClick(e, 'process')} href="#process" className="text-sm font-semibold text-brand-on-surface-variant hover:text-brand-primary transition-colors">
            Quy trình
          </a>
          <a onClick={(e) => handleNavClick(e, 'calculator')} href="#calculator" className="text-sm font-semibold text-brand-on-surface-variant hover:text-brand-primary transition-colors">
            Ước tính hiệu quả
          </a>
          <a onClick={(e) => handleNavClick(e, 'pricing')} href="#pricing" className="text-sm font-semibold text-brand-on-surface-variant hover:text-brand-primary transition-colors">
            Bảng giá
          </a>
          <a onClick={(e) => handleNavClick(e, 'faq')} href="#faq" className="text-sm font-semibold text-brand-on-surface-variant hover:text-brand-primary transition-colors">
            Hỏi đáp
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenDemo}
            className="bg-brand-primary-container text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            Trình Mô Phỏng
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brand-on-surface hover:text-[#0050cb] p-1.5 rounded-lg border border-slate-200"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200/90 shadow-xl px-6 py-6 transition-all duration-300 ease-out animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <a onClick={(e) => handleNavClick(e, 'solutions')} href="#solutions" className="text-base font-semibold text-brand-on-surface-variant hover:text-brand-primary py-2 border-b border-slate-100">
              Giải pháp
            </a>
            <a onClick={(e) => handleNavClick(e, 'process')} href="#process" className="text-base font-semibold text-brand-on-surface-variant hover:text-brand-primary py-2 border-b border-slate-100">
              Quy trình
            </a>
            <a onClick={(e) => handleNavClick(e, 'calculator')} href="#calculator" className="text-base font-semibold text-brand-on-surface-variant hover:text-brand-primary py-2 border-b border-slate-100">
              Ước tính hiệu quả
            </a>
            <a onClick={(e) => handleNavClick(e, 'pricing')} href="#pricing" className="text-base font-semibold text-brand-on-surface-variant hover:text-brand-primary py-2 border-b border-slate-100">
              Bảng giá
            </a>
            <a onClick={(e) => handleNavClick(e, 'faq')} href="#faq" className="text-base font-semibold text-brand-on-surface-variant hover:text-brand-primary py-2 border-b border-slate-100">
              Hỏi đáp
            </a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full bg-brand-primary-container text-white py-3 rounded-xl font-bold hover:bg-brand-primary transition-all text-sm flex items-center justify-center gap-1.5 mt-2"
            >
              Trải Nghiệm Trình Mô Phỏng
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
