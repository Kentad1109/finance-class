
import React from 'react';
import { ESSAY_THEMES } from '../constants';

export const Essays: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">小論文形式問題</h2>
        <p className="mt-2 text-slate-600">
          深い理解を問う論述テーマです。復習の際のガイドとして活用してください。
        </p>
      </div>

      <div className="grid gap-6">
        {ESSAY_THEMES.map((theme) => (
          <div key={theme.id} className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 rounded-l-2xl"></div>
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors">
                {String(theme.id).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                  {theme.title}
                </h3>
                <p className="text-slate-500 text-sm italic">
                  このテーマについて、講義内容を踏まえて詳細に論じてください。
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mt-12">
        <h4 className="font-bold text-amber-800 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          学習アドバイス
        </h4>
        <p className="text-amber-700 text-sm leading-relaxed">
          小論文問題は、単なる暗記ではなく「なぜそうなるのか」という論理構成が重要です。特にNPVとIRRの比較や、日本特有の金融システム（メインバンク等）については、具体例を交えて説明できるように準備しましょう。
        </p>
      </div>
    </div>
  );
};
