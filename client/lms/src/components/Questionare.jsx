import React from 'react'
// import { useState } from 'react';
import forward from "../assets/forward.png"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const Questionare = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isQuizCompleted, setIsQuizCompleted] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [score, setScore] = useState(0);
//   const { courseid, moduleid } = useParams();
//   const [end, setEnd] = useState(false);
//   const [results, setResults] = useState([]);
//   const [repeatQuiz, setRepeat] = useState(false);
//   const [reattempt, setreattempt] = useState(0);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}/ques`);
//         setQuestions(response.data);
//       } catch (err) {
//         console.log("Module component question error", err);
//       }
//     };

//     fetchQuestions();

//     setIsQuizCompleted(false);
//     setScore(0);
//     setCurrentQuestionIndex(0)
//     setAnswers({});
//     setEnd(false);

//   }, [moduleid]);

//   // useEffect(() => {
//   //   console.log("repeatQuiz changed:", repeatQuiz);
//   //   if (repeatQuiz) {
//   //     if (reattempt >= 3) {
//   //       alert('You have exhausted your attempt options.');
//   //     } else {
//   //       setScore(0);
//   //       setCurrentQuestionIndex(0);
//   //       setAnswers({});
//   //       setRepeat(false);
//   //       setEnd(false)
//   //     }

//   //   }
//   // }, [repeatQuiz])



//   const calculateResult = () => {
//     let _score = 0;
//     const _results = questions.map((question, index) => {
//       const userAnswer = answers[index] || [];
//       const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(question.correct_answer.sort());
//       if (isCorrect) _score += 1;
//       return {
//         question: question.question_text,
//         userAnswer,
//         correctAnswer: question.correct_answer,
//         isCorrect,
//       };
//     });
//     setResults(_results);
//     return _score;
//   };


//   useEffect(() => {
//     if (isQuizCompleted) {

//       const _score = calculateResult()
//       setScore(_score)

//       const submitQuiz = async () => {
//         try {
//           const data = await axios.post(`http://localhost:3000/api/course/${courseid}/${moduleid}/ques/quiz`, {
//             resourceId: moduleid,
//             programId: courseid,
//             score: _score,
//             maxScore: questions.length

//           });

//           console.log("Submitting quiz with data:", data);

//         } catch (error) {
//           console.error('Error submitting quiz', error);
//           console.error('Error submitting quiz', error.message);
//         }
//       };


//       submitQuiz();

//     }
//   }, [isQuizCompleted]);

//   const handleCheckboxChange = (option) => {
//     const currentAnswers = answers[currentQuestionIndex] || [];
//     const updatedAnswers = currentAnswers.includes(option)
//       ? currentAnswers.filter((ans) => ans !== option)
//       : [...currentAnswers, option];

//     setAnswers({
//       ...answers,
//       [currentQuestionIndex]: updatedAnswers,
//     });
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setIsQuizCompleted(true);
//       setEnd(true)
//     }
//   };

//   if (!questions.length) return <div>Loading...</div>;



//   const correctCount = results.filter(result => result.isCorrect).length;
//   const wrongCount = results.filter(result => !result.isCorrect && result.userAnswer.length > 0).length;
//   const unansweredCount = results.filter(result => result.userAnswer.length === 0).length;



//   if (end) {
//     const accuracy = (score / questions.length) * 100;

//     return (
//       <div className='bg-slate-500 text-black p-10 text-[25px]'>
//         <h1>Quiz Completed</h1>
//         <p>Your score: {score} / {questions.length}</p>
//         <p>Accuracy: {accuracy.toFixed(2)}%</p>

//         {/* {results.map((result, index) => (
//           <div key={index} className='mt-4'>
//             <h3>{result.question}</h3>
//             <p>Your answer: {result.userAnswer.join(', ')}</p>
//             {!result.isCorrect && (
//               <p>Correct answer: {result.correctAnswer.join(', ')}</p>
//             )}
//             <p>Status: {result.isCorrect ? 'Correct' : 'Wrong'}</p>
//           </div>
//         ))} */}


//         <div className='mt-4 flex items-center'>
//           <img src="" alt="Correct" className="h-8 w-8" /> {/* Correct icon */}
//           <p className='ml-2'>Correct: {correctCount}</p>
//         </div>

//         <div className='mt-4 flex items-center'>
//           <img src="" alt="Wrong" className="h-8 w-8" /> {/* Wrong icon */}
//           <p className='ml-2'>Wrong: {wrongCount}</p>
//         </div>

//         <div className='mt-4 flex items-center'>
//           <img src="" alt="Unanswered" className="h-8 w-8" /> {/* Unanswered icon */}
//           <p className='ml-2'>Unanswered: {unansweredCount}</p>
//         </div>

//         <button className=' rounded m-2 p-2  bg-blue-600 w-auto h-auto' onClick={() => { setRepeat(true) }}>Reattempt??</button>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className='w-[1000px] h-[500px] bg-slate-500 text-black p-10 text-[25px]'>
//       <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
//       <p>{currentQuestion.question_text}</p>
//       <div>
//         {currentQuestion.options.map(option => (
//           <label key={option} className="block gap-2 text-xl m-3">
//             <input
//               type="checkbox"
//               className='form-checkbox h-5 w-5 text-blue-600 m-2'
//               checked={answers[currentQuestionIndex]?.includes(option) || false}
//               onChange={() => handleCheckboxChange(option)}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <button onClick={handleNextQuestion} className="mt-4 hover:animate-pulse p-2 bg-blue-500 text-white rounded">
//         <img className='h-8 w-8 object-contain hover:animate-pulse hover:h-10 hover:w-10 transition-all' src={forward} alt="next" />
//       </button>
//     </div>
//   );
// }

// export default Questionare



// // const question = [
// //   {
// //     id: 1,

// //     question: 'Which of the following are programming languages?',
// //     options: ['Python', 'HTML', 'CSS', 'JavaScript'],
// //     correctAnswer: ['Python', 'JavaScript']
// //   },
// //   {
// //     id: 2,

// //     question: 'Which of the following are programming languages?',
// //     options: ['Python', 'HTML', 'CSS', 'JavaScript'],
// //     correctAnswer: ['Python', 'JavaScript']
// //   },
// //   {
// //     id: 3,

// //     question: 'Which of the following are programming languages?',
// //     options: ['Python', 'HTML', 'CSS', 'JavaScript'],
// //     correctAnswer: ['Python', 'JavaScript']
// //   }

// // ];




const Questionare = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const { courseid, moduleid } = useParams();
  const [end, setEnd] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/course/${courseid}/${moduleid}/ques`);
        setQuestions(response.data);
      } catch (err) {
        console.log("Module component question error", err);
      }
    };

    fetchQuestions();

    setIsQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0)
    setAnswers({});
    setEnd(false);

  }, [moduleid]);

  const calculateResult = () => {
    let _score = 0;
    const _results = questions.map((question, index) => {
      const userAnswer = answers[index] || [];
      const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(question.correct_answer.sort());
      if (isCorrect) _score += 1;
      return {
        question: question.question_text,
        userAnswer,
        correctAnswer: question.correct_answer,
        isCorrect,
      };
    });
    setResults(_results);
    return _score;
  };

  useEffect(() => {
    if (isQuizCompleted) {
      const _score = calculateResult();
      setScore(_score);

      const submitQuiz = async () => {
        try {
          const data = await axios.post(`http://localhost:3000/api/course/${courseid}/${moduleid}/ques/quiz`, {
            resourceId: moduleid,
            programId: courseid,
            score: _score,
            maxScore: questions.length
          });

          console.log("Submitting quiz with data:", data);

        } catch (error) {
          console.error('Error submitting quiz', error);
          console.error('Error submitting quiz', error.message);
        }
      };

      submitQuiz();
    }
  }, [isQuizCompleted]);

  const handleCheckboxChange = (option) => {
    const currentAnswers = answers[currentQuestionIndex] || [];
    const updatedAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter((ans) => ans !== option)
      : [...currentAnswers, option];

    setAnswers({
      ...answers,
      [currentQuestionIndex]: updatedAnswers,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
      setEnd(true);
    }
  };

  if (!questions.length) return <div>Loading...</div>;

  const correctCount = results.filter(result => result.isCorrect).length;
  const wrongCount = results.filter(result => !result.isCorrect && result.userAnswer.length > 0).length;
  const unansweredCount = results.filter(result => result.userAnswer.length === 0).length;

  if (end) {
    const accuracy = (score / questions.length) * 100;

    return (
      <div className='bg-slate-500 text-black p-10 text-[25px]'>
        <h1>Quiz Completed</h1>
        <p>Your score: {score} / {questions.length}</p>
        <p>Accuracy: {accuracy.toFixed(2)}%</p>

        <div className='mt-4 flex items-center'>
          <img src="" alt="Correct" className="h-8 w-8" /> {/* Correct icon */}
          <p className='ml-2'>Correct: {correctCount}</p>
        </div>

        <div className='mt-4 flex items-center'>
          <img src="" alt="Wrong" className="h-8 w-8" /> {/* Wrong icon */}
          <p className='ml-2'>Wrong: {wrongCount}</p>
        </div>

        <div className='mt-4 flex items-center'>
          <img src="" alt="Unanswered" className="h-8 w-8" /> {/* Unanswered icon */}
          <p className='ml-2'>Unanswered: {unansweredCount}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='w-[1000px] h-[500px] bg-slate-500 text-black p-10 text-[25px]'>
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <p>{currentQuestion.question_text}</p>
      <div>
        {currentQuestion.options.map(option => (
          <label key={option} className="block gap-2 text-xl m-3">
            <input
              type="checkbox"
              className='form-checkbox h-5 w-5 text-blue-600 m-2'
              checked={answers[currentQuestionIndex]?.includes(option) || false}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleNextQuestion} className="mt-4 hover:animate-pulse p-2 bg-blue-500 text-white rounded">
        <img className='h-8 w-8 object-contain hover:animate-pulse hover:h-10 hover:w-10 transition-all' src={forward} alt="next" />
      </button>
    </div>
  );
};

export default Questionare;

