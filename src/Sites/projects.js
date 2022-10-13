import React from "react";
import './projects.css';
import HighlightedProject from "../Components/HighlightedProjects.js"
import {cardsData} from '../Data/HighligtedProjects';
export default function Projects() {
  
  return (
    <div className="content">
      <div className="project-highlighted">
        <HighlightedProject data={cardsData} />
      </div> 
      <a href="https://github.com/borchand?tab=repositories" target="_blank" rel="noopener noreferrer" className="github-link">
        See all my projects on GitHub
      </a>
    </div>
  );
}