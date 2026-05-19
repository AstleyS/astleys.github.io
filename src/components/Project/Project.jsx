import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/projects.json";
import { CAT_COLORS } from "../../constants/colors";

const getCategories = (projects) => {
  const set = new Set();
  projects.forEach((p) => set.add(p.category));
  return ["All", ...set];
};

const Projects = () => {
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const categories = getCategories(projects);

  const filtered =
    cat === "All"
      ? projects
      : projects.filter((p) => p.category === cat);

  const handleExpand = (id) =>
    setExpanded((prev) => (prev === id ? null : id));

  const handleClose = () => setExpanded(null);

  useEffect(() => {
    setExpanded(null);
  }, [cat]);

  return (
    <section className="projects-section">
      {/* HEADER */}
      <div className="projects-header">
        <h2>Projects</h2>

        <div className="tabs">
          {categories.map((c) => (
            <button
              key={c}
              className={`tab ${
                cat === c ? "active" : ""
              }`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* TRACK */}
      <div className="projects-track">
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            colors={CAT_COLORS}
            isExpanded={expanded === p.id}
            isShrunk={
              expanded !== null &&
              expanded !== p.id
            }
            onClick={() => handleExpand(p.id)}
            onClose={handleClose}
          />
        ))}
      </div>

      {/* HINT */}
      <p className="projects-hint">
        Click a card to expand
      </p>
    </section>
  );
};

export default Projects;