
import React, { useState, useMemo } from 'react';
import { GLOSSARY_DATA } from '../constants';

export const Glossary: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    return GLOSSARY_DATA.filter(item => 
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.english.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">主要用語集</h2>
        <p className="mt-2 text-slate-600">
          講義に登場する重要な用語を網羅しています。検索機能で素早く確認できます。
        </p>
      </div>

      <div className="sticky top-4 z-10 bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="用語、英語名、または定義で検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900">{item.term}</h3>
                <span className="text-slate-500 font-medium text-sm">({item.english})</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-500">
            一致する用語が見つかりませんでした。
          </div>
        )}
      </div>
    </div>
  );
};
