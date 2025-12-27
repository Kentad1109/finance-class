
import React from 'react';
import { View } from '../types';

interface HomeProps {
  onNavigate: (view: View) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      title: '短答式クイズ',
      desc: '基礎知識を定着させる30の問答集。',
      target: 'quiz' as View,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '論述テーマ',
      desc: '理解を深めるための10の小論文課題。',
      target: 'essays' as View,
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: '用語集',
      desc: '37語のファイナンス重要語句をマスター。',
      target: 'glossary' as View,
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          財務基礎<span className="text-blue-600">学習ガイド</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
          株式、債券、企業金融の基本原則、投資評価手法、および日本市場の特性を
          網羅的に理解し、テストに向けて完璧な準備を。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((f, i) => (
          <div 
            key={i} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            onClick={() => onNavigate(f.target)}
          >
            <div className="mb-6 inline-block p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{f.desc}</p>
            <span className="text-blue-600 font-semibold flex items-center group-hover:gap-2 transition-all">
              学習を開始する
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">この授業の全体像</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="text-blue-400 font-bold mb-2">1. 金融市場の基礎</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                株式、債券、IPO、流通市場など。日本独自の「系列」や「持ち合い」も重要なテーマです。
              </p>
            </div>
            <div>
              <h4 className="text-blue-400 font-bold mb-2">2. 価値評価モデル</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                DDM、ゴードンモデル、PER、PBRなどの指標を学びます。
              </p>
            </div>
            <div>
              <h4 className="text-blue-400 font-bold mb-2">3. 投資判断基準</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                NPV（正味現在価値）やIRR（内部収益率）を用い、資本の機会費用を考慮した意思決定を行います。
              </p>
            </div>
            <div>
              <h4 className="text-blue-400 font-bold mb-2">4. リスクとリターン</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                CAPMやWACCを通じ、企業の資本コストを計算し、効率的な投資判断を目指します。
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};
