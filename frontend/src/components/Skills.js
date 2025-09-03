import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch('/api/skills');
      if (!response.ok) {
        throw new Error('Failed to fetch skills');
      }
      const data = await response.json();
      setSkills(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching skills:', err);
      // Fallback to hardcoded skills if API fails
      setSkills({
        frontend: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Bootstrap"],
        backend: ["Python", "Node.js", "Flask", "Express.js", "Django", "PostgreSQL", "MongoDB"],
        tools: ["Git", "Docker", "AWS", "Heroku", "Vercel", "VS Code", "Postman"],
        other: ["RESTful APIs", "GraphQL", "CI/CD", "Agile", "Responsive Design", "UI/UX"]
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="loading">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="skills-section">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="skills-intro">
          I've worked with a variety of technologies and frameworks. Here's what I bring to the table:
        </p>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skills-list">
                {skillList.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
