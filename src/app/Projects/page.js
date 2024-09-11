"use client";

import Navbar from "../Components/Navbar";
import "../CSS/Components/Navbar.css";
import "../CSS/projects.css";

export default function Projects(){
    return(
        <div>
            <Navbar />
            <div className="projects-container">
                <h1 className="page-title">Our Projects</h1>
                <div className="projects-grid">
                    <div className="project-card">
                        <h2 className="card-title">Earth-Filling and Earth-Cutting</h2>
                        <p className="card-description">We have experience with 10 million+ cubic meter earth filling.</p>
                    </div>
                    <div className="project-card">
                        <h2 className="card-title">Excavation Works</h2>
                        <p className="card-description">We specialize in excavation works for various projects.</p>
                    </div>
                    <div className="project-card">
                        <h2 className="card-title">Dam and Canal Works</h2>
                        <p className="card-description">We have experience with dam and canal works.</p>
                    </div>
                    <div className="project-card">
                        <h2 className="card-title">Road Works and Highways</h2>
                        <p className="card-description">We specialize in road works and highways.</p>
                    </div>
                    <div className="project-card">
                        <h2 className="card-title">SEZ's Development</h2>
                        <p className="card-description">We have experience with SEZ's development.</p>
                    </div>
                    <div className="project-card">
                        <h2 className="card-title">Township Development</h2>
                        <p className="card-description">We specialize in township development.</p>
                    </div>
                    <div className="project-card">
                        <h2 className="card-title">Mining Transportation Works</h2>
                        <p className="card-description">We have experience with mining transportation works.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}