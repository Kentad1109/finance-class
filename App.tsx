
import React, { useState } from 'react';
import { View } from './types';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { Essays } from './components/Essays';
import { Glossary } from './components/Glossary';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home onNavigate={setCurrentView} />;
      case 'quiz': return <Quiz />;
      case 'essays': return <Essays />;
      case 'glossary': return <Glossary />;
      default: return <Home onNavigate={setCurrentView} />;
    }
  };

  const navItems: { label: string; view: View }[] = [
    { label: 'ホーム', view: 'home' },
    { label: 'クイズ', view: 'quiz' },
    { label: '論述', view: 'essays' },
    { label: '用語集', view: 'glossary' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentView('home')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">F</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 hidden sm:block">Finance Guide</h1>
          </div>

          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setCurrentView(item.view)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === item.view
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="animate-in fade-in duration-500">
          {renderView()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-slate-900 font-bold text-lg mb-1">財務基礎学習ガイド</h4>
              <p className="text-slate-500 text-sm">Interactive Study Platform for Finance Professionals</p>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <span className="cursor-help hover:text-blue-600 transition-colors">利用規約</span>
              <span className="cursor-help hover:text-blue-600 transition-colors">プライバシー</span>
              <span className="cursor-help hover:text-blue-600 transition-colors">お問い合わせ</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
            © {new Date().getFullYear()} Finance Mastery Learning. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
