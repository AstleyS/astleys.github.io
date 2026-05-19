import React, { useState, useEffect, useRef } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/projects.json";
import { CAT_COLORS } from "../../constants/colors";

import "./Projects.css";

const getCategories = (projects) => {
  const set = new Set();
  projects.forEach((p) => set.add(p.category));
  return ["All", ...set];
};

const Projects = () => {
  const [cat, setCat] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const trackRef = useRef(null);

  const categories = getCategories(projects);

  const filtered =
    cat === "All"
      ? projects
      : projects.filter((p) => p.category === cat);

  const handleExpand = (id) =>
    setExpanded((prev) => (prev === id ? null : id));

  const handleClose = () => setExpanded(null);

  const updateScrollButtons = () => {
    const el = trackRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 5);
  };

  const scrollTrack = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    setExpanded(null);
  }, [cat]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [filtered]);

  return (
    <div className="projects-section">
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
      <div className="projects-slider">
        <button
          type="button"
          className="projects-arrow left"
          onClick={() => scrollTrack("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="projects-track" ref={trackRef}>
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

        <button
          type="button"
          className="projects-arrow right"
          onClick={() => scrollTrack("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      {/* HINT */}
      <p className="projects-hint">
        Click a card to expand
      </p>
    </div>
  );
};

export default Projects;