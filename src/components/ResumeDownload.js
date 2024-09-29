// src/components/ResumeDownload.js
import React from 'react';

const ResumeDownload = () => {
  return (
    <div className="resume-download">
      <a href="/resume/my_resume.pdf" download>
        <button>Download Resume</button>
      </a>
    </div>
  );
};

export default ResumeDownload;
