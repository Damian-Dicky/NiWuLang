"use client";

import Navbar from "../Components/Navbar";
import "../CSS/Components/Navbar.css";
import "../CSS/projects.css";
import { useState,useMemo } from "react";
import Footer from "../Components/Footer";
import "../CSS/Components/Footer.css";
import projects from "../static/Projects";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Projects(){
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectsPerPage = 9;

    const filteredProjects = useMemo(() => {
        return projects.filter(project =>
          project.work.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }, [projects, searchTerm]);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
      };
    
    const openModal = (project) => {
        setSelectedProject(project);
      };
    
      const closeModal = () => {
        setSelectedProject(null);
      };

      const renderPaginationButtons = () => {
        const pageNumbers = [];
        const maxVisibleButtons = 3;
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
        if (endPage - startPage + 1 < maxVisibleButtons) {
          startPage = Math.max(1, endPage - maxVisibleButtons + 1);
        }
    
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => paginate(i)}
              className={`pagination-button ${currentPage === i ? 'active' : ''}`}
            >
              {i}
            </button>
          );
        }
    
        return (
          <div className="pagination">
            <button
              onClick={() => paginate(1)}
              className="pagination-button nav-button"
              disabled={currentPage === 1}
            >
                &lt;&lt;
            </button>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="pagination-button nav-button"
              disabled={currentPage === 1}
            >
                &lt;
            </button>
            {pageNumbers}
            <button
              onClick={() => paginate(currentPage + 1)}
              className="pagination-button nav-button"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
            <button
              onClick={() => paginate(totalPages)}
              className="pagination-button nav-button"
              disabled={currentPage === totalPages}
            >
              &gt;&gt;
            </button>
          </div>
        );
      };
    
    return(
        <div>
            <Navbar />
            <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>
      
      <div className="search-container">
        <Search size={24} className="search-icon" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
        }}
          className="search-input"
        />
        
      </div>

      {filteredProjects.length === 0 ? (
        <p className="no-results">No projects found matching your search.</p>
      ) : (
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="image-container">
                {/* <Image src={project.image} alt={`Project ${index + 1}`} className="project-image" /> */}
                <div className="status-badge" style={{backgroundColor: project.status=="Completed" ? "#10b981" : "orange"}}>
                  <span className="status-icon">{project.status=="Completed" ? "✓" : "X"}</span>
                  {project.status}
                </div>
                <br />
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.work}</h2>
                <p className="project-summary">{project.summary}</p>
              </div>
              <div className="project-footer">
                <button className="learn-more-btn" onClick={() => openModal(project)}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {renderPaginationButtons()}
      {/* <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div> */}
    </div>
    {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            {/* <img src={selectedProject.image} alt={selectedProject.work} className="modal-image" /> */}
            <h2>{selectedProject.work}</h2>
            <p className="modal-status" style={{color: selectedProject.status=="Completed" ? "green" : "orange"}}><strong>Status:</strong> {selectedProject.status}</p>
            <p><strong>Summary:</strong> {selectedProject.summary}</p>
          </div>
        </div>
      )}
            
            <Footer />
        </div>
    )
}