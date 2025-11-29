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
        frontend: ["HTML5", "CSS3", "JavaScript", "React"],
        backend: ["Python", "Node.js", "Flask", "MySQL"],
        tools: ["Git", "VS Code", "Postman", "Render", "Netlify"],
        other: ["RESTful APIs", "Agile","UI/UX"],
        non_technical: ["Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability", "Critical Thinking"]
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
          {Object.entries(skills)
            .sort(([a], [b]) => {
              // Define the order you want
              const order = ['frontend', 'backend', 'tools', 'other', 'non_technical'];
              const indexA = order.indexOf(a);
              const indexB = order.indexOf(b);
              // If category not in order array, put it at the end
              if (indexA === -1) return 1;
              if (indexB === -1) return -1;
              return indexA - indexB;
            })
            .map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
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
