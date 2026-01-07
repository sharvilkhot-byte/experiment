
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

const QUESTIONS = [
  {
    text: "Which city is known as 'The Eternal City'?",
    options: ["Paris", "Rome", "Athens", "Cairo"],
    correct: "Rome"
  },
  {
    text: "What currency is used in Japan?",
    options: ["Won", "Yen", "Baht", "Ringgit"],
    correct: "Yen"
  },
  {
    text: "Which of these is NOT a wonder of the ancient world?",
    options: ["Great Wall of China", "Hanging Gardens of Babylon", "Pyramids of Giza", "Colossus of Rhodes"],
    correct: "Great Wall of China"
  }
];

const GamePage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (option: string) => {
    if (isCorrect !== null) return;
    setSelectedOption(option);
  };

  const handleCheck = () => {
    const correct = selectedOption === QUESTIONS[currentQuestion].correct;
    setIsCorrect(correct);
    if (correct) setScore(score + 100);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-black mb-6 text-duo-yellow">CHALLENGE COMPLETE!</h2>
        <div className="bg-white dark:bg-gray-800 p-12 rounded-[3rem] shadow-duo-white dark:shadow-duo-dark border-4 border-duo-border dark:border-gray-700 mb-8">
          <div className="text-8xl mb-6">🏆</div>
          <p className="text-2xl font-black mb-2">Total Expedition Score:</p>
          <p className="text-6xl font-black text-duo-green">{score}</p>
        </div>
        <Button size="lg" variant="primary" onClick={reset}>PLAY AGAIN</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Progress Bar */}
      <div className="flex items-center gap-4 mb-12">
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-duo-green transition-all duration-500 rounded-full shadow-[0_2px_0_rgba(255,255,255,0.3)_inset]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-duo-red text-xl font-black">❤️ 5</span>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-black text-duo-textDark dark:text-gray-100">
          {QUESTIONS[currentQuestion].text}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUESTIONS[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-6 rounded-2xl border-2 font-black text-lg transition-all text-left press-effect
                ${selectedOption === option 
                  ? 'border-duo-blue bg-blue-50 dark:bg-blue-900/20 text-duo-blue shadow-duo-blue' 
                  : 'border-duo-border dark:border-gray-700 dark:text-gray-300 shadow-duo-white dark:shadow-duo-dark hover:bg-gray-50 dark:hover:bg-gray-800'}
              `}
            >
              <span className="inline-block w-8 h-8 rounded-lg border-2 border-current text-center mr-4 text-sm leading-7">
                {QUESTIONS[currentQuestion].options.indexOf(option) + 1}
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Check Area */}
      <div className={`fixed bottom-0 left-0 right-0 p-6 md:p-12 border-t-2 bg-white dark:bg-duo-dark transition-all duration-300
        ${isCorrect === true ? 'bg-green-100 dark:bg-green-900/40 border-green-200' : ''}
        ${isCorrect === false ? 'bg-red-100 dark:bg-red-900/40 border-red-200' : ''}
      `}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="hidden md:block">
            {isCorrect === true && (
              <div className="flex items-center gap-4 text-duo-greenDark">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">✅</div>
                <div>
                  <h4 className="font-black text-xl">Brilliant!</h4>
                  <p className="font-bold">You're a true explorer.</p>
                </div>
              </div>
            )}
            {isCorrect === false && (
              <div className="flex items-center gap-4 text-duo-red">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">❌</div>
                <div>
                  <h4 className="font-black text-xl">Incorrect</h4>
                  <p className="font-bold">The answer was: {QUESTIONS[currentQuestion].correct}</p>
                </div>
              </div>
            )}
          </div>
          
          {!isCorrect === null || isCorrect === null ? (
            <Button 
              variant={selectedOption ? 'primary' : 'outline'} 
              size="lg" 
              className="w-full md:w-auto ml-auto"
              disabled={!selectedOption}
              onClick={handleCheck}
            >
              CHECK
            </Button>
          ) : (
            <Button 
              variant={isCorrect ? 'primary' : 'red'} 
              size="lg" 
              className="w-full md:w-auto ml-auto"
              onClick={nextQuestion}
            >
              CONTINUE
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
