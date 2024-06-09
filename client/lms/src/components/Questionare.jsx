import React from 'react'
import { useState } from 'react';
import forward from "../assets/forward.png"

const Questionare = () => {

  const questions = [
    {
      id: 1,

      question: 'Which of the following are programming languages?',
      options: ['Python', 'HTML', 'CSS', 'JavaScript'],
      correctAnswer: ['Python', 'JavaScript']
    },
    {
      id: 2,

      question: 'Which of the following are programming languages?',
      options: ['Python', 'HTML', 'CSS', 'JavaScript'],
      correctAnswer: ['Python', 'JavaScript']
    },
    {
      id: 3,

      question: 'Which of the following are programming languages?',
      options: ['Python', 'HTML', 'CSS', 'JavaScript'],
      correctAnswer: ['Python', 'JavaScript']
    }

  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const calculateResult = () => {
    let score = 0;
    questions.forEach((question, index) => {
      const userAnswer = answers[index];

      if (JSON.stringify(userAnswer?.sort()) === JSON.stringify(question.correctAnswer.sort())) {
        score += 1;
      }
    });
    return score;
  };

  if (isQuizCompleted) {
    const score = calculateResult();

    return (
      <div className='bg-slate-500 text-black p-10 text-[25px]'>
        <h1>Quiz Completed</h1>
        <p>Your score: {score} / {questions.length}</p>

        {/* {score>7 ?():()} */}
      </div>
    );
  }


  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className=' w-[1000px] h-[500px] bg-slate-500 text-black p-10 text-[25px]'>

      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{currentQuestion.question}</p>
      <div>
        {currentQuestion.options.map(option => (
          <label key={option} className=" block gap-2 text-xl m-3">
            <input
              type="checkbox"
              className=' form-checkbox h-5 w-5 text-blue-600 m-2'
              // checked={answers[currentQuestionIndex]?.includes(option) || false}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleNextQuestion} className="mt-4 hover:animate-pulse p-2 bg-blue-500 text-white rounded">
        <img className=' h-8 w-8 object-contain hover:animate-pulse hover:h-10 hover:w-10 transition-all' src={forward} alt="next" />
      </button>



    </div>
  )
}

export default Questionare
