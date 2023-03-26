import React, { useState } from 'react';
import Link from 'next/link';

const initialState = {
  name: '',
  jobTitle: '',
  email: '',
  phone: '',
  summary: '',
  skills: [],
};

const ResumeBuilder = () => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSkillsChange = (event) => {
    const newSkills = event.target.value.split(',');
    setFormData({
      ...formData,
      skills: newSkills,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="resume-builder">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(',')}
            onChange={handleSkillsChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;

