import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const Projects = () => {
  const [visibleSection, setVisibleSection] = useState('');

  const toggleSection = (section) => {
    setVisibleSection((prevSection) => (prevSection === section ? '' : section));
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4"><b>Projects</b></h2>
        <div className="navigation-buttons text-center mb-4">
          <button 
            onClick={() => toggleSection('JavaScript')} 
            className="btn btn-custom mx-2">
            JavaScript Projects
          </button>
          <button 
            onClick={() => toggleSection('React')} 
            className="btn btn-custom mx-2">
            React Projects
          </button>
          <button 
            onClick={() => toggleSection('Android')} 
            className="btn btn-custom mx-2">
            Android Projects
          </button>
          <button 
            onClick={() => toggleSection('Python')} 
            className="btn btn-custom mx-2">
            Python Projects
          </button>
        </div>

        {visibleSection === 'JavaScript' && (
          <>
            <h3 id="javascript-projects" className="text-center mb-4">JavaScript Projects</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={project1} className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">Rock Paper Scissors</h5>
                    <p className="card-text">JavaScript Based Project which is a Very Popular Game called Rock-Paper-Scissors (Language Used: HTML, CSS, JS)</p>
                    <Link to="/project/rock-paper-scissors" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={project2} className="card-img-top" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Tic-Tac-Toe</h5>
                    <p className="card-text">JavaScript Based Project which is a Very Popular Game called Tic-Tac-Toe also called O and X (Language Used: HTML, CSS, JS)</p>
                    <Link to="/project/tic-tac-toe" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={project3} className="card-img-top" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">Currency Converter</h5>
                    <p className="card-text">JavaScript Based Project, This Website helps us to convert the Currency in different Countries. (Language Used: HTML, CSS, JS)</p>
                    <Link to="/project/currency-converter" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {visibleSection === 'React' && (
          <div className="container mt-5">
            <h3 id="react-projects" className="text-center mb-4">React Projects</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={react1} className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">WordCount Pro</h5>
                    <p className="card-text">WordCount Pro is a versatile text analysis tool designed to enhance your writing experience.(Library Used:React Js).</p>
                    <Link to="/project/wordcount-pro" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={video} className="card-img-top" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Meet Here</h5>
                    <p className="card-text">Meet Here is Video Conferencing App which allows user to make a video call. (Framework Used: React Native)</p>
                    <Link to="/project/meet-here" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={Rf} className="card-img-top" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">Registration Form</h5>
                    <p className="card-text">Registration Form is a Simple form that allow user to fill the information and submit it. (Library Used: React JS)</p>
                    <Link to="/project/registration-form" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {visibleSection === 'Android' && (
          <div className="container mt-5">
            <h3 id="android-projects" className="text-center mb-4">Android Projects</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={expense} className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">Expense Tracker</h5>
                    <p className="card-text">Expense Tracker is Android Application which allows user to track his daily and monthly expenses.(Language Used:Java and Xml).</p>
                    <Link to="/project/expense-tracker" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={quiz} className="card-img-top" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Quiz Game</h5>
                    <p className="card-text">Quiz Game allows User to select his Interest and allows to play a Quiz based on Interest Choosen by User.(Language Used:java and Xml) </p>
                    <Link to="/project/quiz-game" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={signup} className="card-img-top" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">SignUp and Login </h5>
                    <p className="card-text">Sign Up and Login Page allows user to login the app here proper Authentication is done.(Language Used: Java,Xml,Firebase)</p>
                    <Link to="/project/signup-login" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {visibleSection === 'Python' && (
          <div className="container mt-5">
            <h3 id="python-projects" className="text-center mb-4">Python Projects</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={guess} className="card-img-top" alt="Project 1" />
                  <div className="card-body">
                    <h5 className="card-title">Guess The word</h5>
                    <p className="card-text">Guess the Word is Python based game that able user to guess the words of different things.(Language Used: Python)</p>
                    <Link to="/project/guess-the-word" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <img src={suduku} className="card-img-top" alt="Project 2" />
                  <div className="card-body">
                    <h5 className="card-title">Soduku Solver Pro</h5>
                    <p className="card-text">Soduku Solver is the Python Based Project Whic solver any soduku that is given as Input(Language Used: Python)</p>
                    <Link to="/project/soduku-solver" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 ">
                  <img src={calc} className="card-img-top" alt="Project 3" />
                  <div className="card-body">
                    <h5 className="card-title">Scientific Calculator</h5>
                    <p className="card-text">Scientific Calculator is the Python based Calculator,The GUI is developed Using TKinter.(Language Used:Python)</p>
                    <Link to="/project/scientific-calculator" className="btn btn-custom">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
