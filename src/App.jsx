import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mic, Github, Globe, ChevronDown } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import './index.css';

const languages = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
];

const translations = {
  ko: {
    about: '서비스 소개',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    refund: '환불정책',
    contact: '문의',
    madeBy: 'made by nobonobo',
    rights: '© 2026 Language Study Project'
  },
  en: {
    about: 'About',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    refund: 'Refund Policy',
    contact: 'Contact',
    madeBy: 'made by nobonobo',
    rights: '© 2026 Language Study Project'
  },
  ja: {
    about: 'サービス紹介',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    refund: '返金ポリシー',
    contact: 'お問い合わせ',
    madeBy: 'made by nobonobo',
    rights: '© 2026 Language Study Project'
  },
  zh: {
    about: '关于我们',
    privacy: '隐私政策',
    terms: '服务条款',
    refund: '退款政策',
    contact: '联系我们',
    madeBy: 'made by nobonobo',
    rights: '© 2026 Language Study Project'
  },
  es: {
    about: 'Sobre nosotros',
    privacy: 'Política de privacidad',
    terms: 'Términos de servicio',
    refund: 'Política de reembolso',
    contact: 'Contacto',
    madeBy: 'made by nobonobo',
    rights: '© 2026 Language Study Project'
  }
};

const Header = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangLabel = languages.find(l => l.code === lang)?.label || 'Language';

  return (
    <header className="mb-10 flex items-center justify-between max-w-[1800px] mx-auto w-full relative z-50">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity decoration-0">
        <div className="p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/30">
          <Mic size={24} color="white" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          <span className="title-gradient">Language Study Master</span>
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/10 min-w-[100px] justify-between"
          >
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-gray-400" />
              <span>{currentLangLabel}</span>
            </div>
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-[#1e1e1e] border border-white/10 rounded-lg shadow-xl overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center justify-between ${lang === l.code ? 'text-indigo-400 bg-indigo-500/10' : 'text-gray-300'}`}
                >
                  {l.label}
                  {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href="https://github.com/soohwanlim/LanguageStudyMaster"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
          title="Visit GitHub"
        >
          <Github size={24} />
        </a>
      </div>
    </header>
  );
};

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations['en'];

  return (
    <Router>
      <div className="min-h-screen p-8 text-white flex flex-col bg-[#121212]">
        <Header lang={lang} setLang={setLang} />

        {/* Content Area */}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/privacy" element={<Privacy lang={lang} />} />
          <Route path="/terms" element={<Terms lang={lang} />} />
          <Route path="/refund" element={<Refund lang={lang} />} />
        </Routes>

        <footer className="mt-20 py-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-[1800px] mx-auto px-4 gap-4">
            <div className="text-left">
              <p>{t.rights}</p>
              <p className="mt-1">{t.madeBy}</p>
              <p className="mt-1">{t.contact}: swtee0506@gmail.com</p>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link to="/about" className="hover:text-white transition-colors">
                {t.about}
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy" className="hover:text-white transition-colors">
                {t.privacy}
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">
                {t.terms}
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/refund" className="hover:text-white transition-colors">
                {t.refund}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App;
