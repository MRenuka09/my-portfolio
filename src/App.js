import React from 'react';
import './App.css';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Molleti Renuka</h1>
        <p className="text-lg mt-2">AI & ML Enthusiast | Full Stack Developer</p>
        <p className="text-sm">molletirenuka.22.csm@anits.edu.in | +91 7207411715 | @Mrenuka09</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Career Objective</h2>
        <p>
          Passionate and dedicated Computer Science and Engineering student specializing in AI & ML, seeking to leverage technical skills in machine learning, data analysis, and algorithm development to contribute to innovative projects.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li><strong>Anil Neerukonda Institute of Technology and Science</strong> - B.Tech, CSE (AI & ML), CGPA: 8.96 (2022-26)</li>
          <li><strong>Sri Chaitanya Jr. College</strong> - Intermediate, MPC, 95% (2020-2022)</li>
          <li><strong>Ravindra Bharathi School</strong> - SSC, 100% (2019-20)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside">
          <li><strong>AWS Cloud Computing Workshop:</strong> Hands-on experience with EC2, S3, and cloud architecture.</li>
          <li><strong>Internship at Edumoon:</strong> Built an e-commerce website using full-stack technologies.</li>
          <li><strong>Mini Project:</strong> Payroll Management System using MySQL and DBMS principles.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside">
          <li><strong>AI-Powered Predictive Analytics:</strong> ML model using Random Forests, XGBoost, and Flask on AWS.</li>
          <li><strong>NLP-Based Sentiment Analysis:</strong> Using BERT, LSTM with Python and Hugging Face.</li>
          <li><strong>E-Commerce Website:</strong> Full-stack platform with React, Node.js, MongoDB.</li>
          <li><strong>Event Management Website:</strong> HTML, CSS, JS, MySQL based web app.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <p>Python, Java, C, MySQL, React, Node.js, MongoDB, Machine Learning, AWS, Docker</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>GATE 2025 - DA: Rank 6259</li>
          <li>Java Programming - NPTEL</li>
          <li>Ethical Hacking - NPTEL</li>
          <li>Python Programming - Udemy</li>
          <li>Full Stack Web Development - Udemy</li>
          <li>Cloud Computing - AWS</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">HackerRank Badges</h2>
        <p>Python (Gold), Problem Solving (Gold), SQL (Silver), Java (Silver)</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <p>English, Hindi, Telugu</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hobbies & Interests</h2>
        <p>Cooking, Arts & Crafts</p>
      </section>
    </div>
  );
}
