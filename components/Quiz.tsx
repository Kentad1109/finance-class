
import React, { useState } from 'react';
import { QUIZ_DATA } from '../constants';

const QuizCard: React.FC<{ item: typeof QUIZ_DATA[0] }> = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            問題 {item.id}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-4 leading-relaxed">
          {item.question}
        </h3>
        
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
            showAnswer 
            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {showAnswer ? '解答を隠す' : '解答を表示する'}
        </button>

        {showAnswer && (
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-slate-700 leading-relaxed italic">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const Quiz: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">短答式問題</h2>
        <p className="mt-2 text-slate-600">
          全30問のクイズでファイナンスの基礎知識を確認しましょう。カードをクリックして解答を表示してください。
        </p>
      </div>
      <div className="grid gap-6">
        {QUIZ_DATA.map((item) => (
          <QuizCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
