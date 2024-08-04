import React from 'react';
import { useParams } from 'react-router-dom';
import project1 from './Images/Project1.png';
import project2 from './Images/Project2.png';
import project3 from './Images/Project3.png';
import react1 from './Images/React1.png';
import Rf from './Images/Rf.png';
import expense from './Images/Expense.png';
import quiz from './Images/Quiz.png';
import signup from './Images/Signup.png';
import guess from './Images/Guess.png';
import suduku from './Images/suduku.png';
import calc from './Images/calc.png';
import video from './Images/video.jpg';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projectDetails = {
    'rock-paper-scissors': {
      title: 'Rock Paper Scissors',
      description: 'JavaScript Based Project which is a Very Popular Game called Rock-Paper-Scissors (Language Used: HTML, CSS, JS)',
      image: project1,
      moreInfo: 'In this game, users can play Rock Paper Scissors against the computer. The computer randomly chooses rock, paper, or scissors, and the user selects their choice. The game then determines the winner based on the standard rules of Rock Paper Scissors. This project demonstrates basic game logic and user interaction.',
    },
    'tic-tac-toe': {
      title: 'Tic-Tac-Toe',
      description: 'JavaScript Based Project which is a Very Popular Game called Tic-Tac-Toe also called O and X (Language Used: HTML, CSS, JS)',
      image: project2,
      moreInfo: 'This project is a classic Tic-Tac-Toe game where two players can compete against each other. The game board is a 3x3 grid, and players take turns marking a cell with their symbol (X or O). The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game. The game logic includes detecting wins and handling tie conditions.',
    },
    'currency-converter': {
      title: 'Currency Converter',
      description: 'JavaScript Based Project, This Website helps us to convert the Currency in different Countries. (Language Used: HTML, CSS, JS)',
      image: project3,
      moreInfo: 'The Currency Converter project allows users to convert amounts between different currencies. It fetches real-time exchange rates from an external API and performs conversions based on the user\'s input. This project is useful for travelers and businesses dealing with multiple currencies. It includes features for updating rates and handling various currencies.',
    },
    'wordcount-pro': {
      title: 'WordCount Pro',
      description: 'WordCount Pro is a versatile text analysis tool designed to enhance your writing experience. (Library Used: React JS)',
      image: react1,
      moreInfo: 'WordCount Pro provides users with various text analysis features, such as word count, character count, and readability score. It helps writers, bloggers, and students improve their writing by offering insights into their text. Users can paste or type their text into the application to get instant feedback. Additional features include text formatting and keyword density analysis.',
    },
    'meet-here': {
      title: 'Meet Here',
      description: 'Meet Here is a Video Conferencing App which allows users to make video calls. (Framework Used: React Native)',
      image: video,
      moreInfo: 'Meet Here is a video conferencing application that supports multiple participants. Users can create and join meetings, share screens, and chat during the call. The app is built using React Native, providing a seamless experience on both Android and iOS devices. Key features include meeting scheduling, real-time communication, and user authentication.',
    },
    'registration-form': {
      title: 'Registration Form',
      description: 'Registration Form is a simple form that allows users to fill in information and submit it. (Library Used: React JS)',
      image: Rf,
      moreInfo: 'The Registration Form project is a basic form that collects user information such as name, email, and password. It includes form validation to ensure the data entered is correct and complete. This project demonstrates how to handle user input and form submission in a React application. It also includes features for password strength validation and email verification.',
    },
    'expense-tracker': {
      title: 'Expense Tracker',
      description: 'Expense Tracker is an Android application that allows users to track their daily and monthly expenses. (Language Used: Java and XML)',
      image: expense,
      moreInfo: 'The Expense Tracker app helps users manage their finances by tracking income and expenses. Users can categorize their expenses, set budgets, and view reports. The app is built using Java and XML for Android, providing a user-friendly interface and essential financial management features. It includes features for expense categorization, budget setting, and data visualization.',
    },
    'quiz-game': {
      title: 'Quiz Game',
      description: 'Quiz Game allows users to select their interests and play a quiz based on their chosen interests. (Language Used: Java and XML)',
      image: quiz,
      moreInfo: 'The Quiz Game project is an interactive application that offers quizzes on various topics. Users can choose their area of interest and take quizzes to test their knowledge. The app provides instant feedback on answers and tracks the user\'s score. It is designed to be both educational and entertaining. Features include multiple-choice questions, score tracking, and timed quizzes.',
    },
    'signup-login': {
      title: 'SignUp and Login',
      description: 'Sign Up and Login Page allows users to log in to the app with proper authentication. (Language Used: Java, XML, Firebase)',
      image: signup,
      moreInfo: 'The SignUp and Login project implements user authentication using Firebase. Users can create accounts, log in with their credentials, and securely access the app\'s features. The project includes form validation, password encryption, and email verification to ensure a secure authentication process. Additional features include password recovery and user profile management.',
    },
    'guess-the-word': {
      title: 'Guess The Word',
      description: 'Guess the Word is a Python-based game that allows users to guess words for different things. (Language Used: Python)',
      image: guess,
      moreInfo: 'Guess The Word is a fun and challenging game where users have to guess the word based on given clues. The game provides hints and tracks the number of attempts. It is built using Python and showcases the use of basic game logic and user interaction in a console-based application. Features include difficulty levels and hint systems.',
    },
    'soduku-solver': {
      title: 'Soduku Solver Pro',
      description: 'Soduku Solver is a Python-based project that solves any Sudoku puzzle given as input. (Language Used: Python)',
      image: suduku,
      moreInfo: 'Soduku Solver Pro is an application that can solve Sudoku puzzles of any difficulty level. Users can input a Sudoku puzzle, and the solver will provide the solution. The project demonstrates the use of algorithms and backtracking techniques in Python to solve complex problems. It includes features for puzzle generation and difficulty adjustment.',
    },
    'scientific-calculator': {
      title: 'Scientific Calculator',
      description: 'Scientific Calculator is a Python-based calculator with a graphical user interface developed using Tkinter. (Language Used: Python)',
      image: calc,
      moreInfo: 'The Scientific Calculator project provides a GUI-based calculator that performs various mathematical operations. It supports basic arithmetic, trigonometry, logarithms, and other scientific functions. The project is built using Python and Tkinter, showcasing the creation of graphical applications in Python. Features include a history log and advanced mathematical functions.',
    }
  };

  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="img-fluid mb-4" />
      <p>{project.description}</p>
      <p>{project.moreInfo}</p>
      <div className="contact-info mt-4 text-center">
        <p>For source code and more details, please contact me</p>
        
      </div>
    </div>
  );
};

export default ProjectDetails;
