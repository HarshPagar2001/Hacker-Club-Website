import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Image from '../../images/Image.png'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Faculty from '../../components/Faculty/Faculty';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const faqData = [
  {
    question: "What is the Hacker Club about?",
    answer: "Hacker Club is a community of tech enthusiasts passionate about cybersecurity, ethical hacking, web development, and cloud computing!",
  },
  {
    question: "Who can join the club?",
    answer: "Any student interested in technology, cybersecurity, and development can join, no matter their current skill level.",
  },
  {
    question: "Are there training sessions?",
    answer: "Yes! We organize regular training workshops on Web Development, Cybersecurity, Cloud Computing, and more.",
  },
];

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home">
<section id="hero">
  <div className="hero-container">
  <div className="hero-left">
  <h1><span className="hacker">Hacker</span> <span className="club">Club</span></h1>
  <p>"We are a community of passionate ethical hackers dedicated to exploring and mastering the tools of cybersecurity. 
    We empower our members with knowledge of ethical hacking techniques, penetration testing, and security tools to safeguard systems and networks. 
    Join us and unlock the secrets of ethical hacking."</p>
  <Link to="/register" className="cta-button">Register Now</Link>
  </div>    

  <div className="hero-right">
      <img src={Image} />
  </div>
  </div>
</section>

<section id="mission-vision">
  <div className="mission-vision-container">
    <div className="card">
      <i className="fas fa-bullseye"></i> {/* Font Awesome Icon */}
      <h2>Our Mission</h2>
      <p>
        Our mission is to foster a community where innovation thrives, students collaborate, 
        and ideas transform into reality. We aim to empower every student with the technical 
        skills, leadership abilities, and creative thinking required to solve real-world problems 
        through technology and collaboration.
      </p>
    </div>

    <div className="card">
      <i className="fas fa-eye"></i> {/* Font Awesome Icon */}
      <h2>Our Vision</h2>
      <p>
        Our vision is to be the leading platform for students passionate about technology, 
        enabling them to stay ahead in the rapidly evolving digital world. We strive to build 
        a legacy where our members innovate fearlessly, inspire others, and create a lasting 
        impact in society through their dedication and passion for learning.
      </p>
    </div>
  </div>
</section>

<section id="events">
        <div className="events-container">
          {/* Left: Lottie Animation */}
          <div className="events-left">
            <div className="lottie-wrapper">
             <DotLottieReact
             src="https://lottie.host/2e839686-0759-492a-96d8-ca4d7698be5f/cC85YkOT1V.lottie"
             loop
             autoplay/>
             </div>
           </div>

          {/* Right: Text */}
          <div className="events-right">
            <h2><span className='club'>Our</span> <span className='hacker'>Events</span></h2>
  <div className="events-cards">
<div className="event-card">
  <i className="fas fa-user-shield event-icon"></i> Ethical Hacking 101
</div>
<div className="event-card">
  <i className="fas fa-flag event-icon"></i> Capture The Flag (CTF) Challenge
</div>
<div className="event-card">
  <i className="fas fa-shield-alt event-icon"></i> Cybersecurity Bootcamp
</div>

  </div>
         </div>
        </div>
      </section>

{/* Training Section */}
<section className="training-section">
        <div className="training-container">
          <h2 className="training-heading">Our <span className='hacker'>Training</span></h2>
          <div className="training-cards">
            <div className="training-card">
              <i className="fas fa-laptop fa-3x"></i>
              <h3>Live Sessions</h3>
              <p>Attend live sessions with industry experts to enhance your skills.</p>
            </div>
            <div className="training-card">
              <i className="fas fa-calendar fa-3x"></i>
              <h3>Weekly Tests</h3>
              <p>Take weekly tests to assess your knowledge and track your progress.</p>
            </div>
            <div className="training-card">
              <i className="fas fa-project-diagram fa-3x"></i>
              <h3>Projects</h3>
              <p>Work on real-life projects to build hands-on experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty-members">
      <Faculty />
      </section>


      <section className="faq-section">
      <div className="faq-container">
        <div className="faq-heading-container">
        <h2 className="faq-heading">Frequently Asked <span className='hacker'>Questions</span></h2>
        </div>

        <div className="faq-items">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
    </div>
    <Footer />
    </>
  );
};

export default Home;

