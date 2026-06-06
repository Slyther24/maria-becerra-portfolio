// Featured project data used by the Projects section.
const projects = [
  {
    title: "Surgical Training Simulator",
    category: "unity",
    description:
      "Interactive surgical simulator developed in Unity for guided practice and 3D interaction.",
    technologies: ["Unity", "C#", "3D Interaction", "Animation"],
    role: "Gameplay Programming, Interaction Systems, UI Development",
    links: [
      { label: "View Project", url: "#" },
      { label: "Repository", url: "#" },
    ],
  },
  {
    title: "Package Tracking Platform",
    category: "web",
    description:
      "Microservices-based tracking system built using TypeScript, Node.js and MySQL.",
    technologies: ["Node.js", "TypeScript", "MySQL", "Docker"],
    role: "System Design, API Development, Requirements Analysis",
    links: [
      { label: "View Project", url: "#" },
      { label: "Repository", url: "#" },
    ],
  },
  {
    title: "Stress Management Application",
    category: "web",
    description:
      "Web platform designed to help students manage stress through interactive multimedia resources.",
    technologies: ["React", "JavaScript", "CSS", "UX"],
    role: "Frontend Development, UX Structure, Content Flow",
    links: [
      { label: "View Project", url: "#" },
      { label: "Repository", url: "#" },
    ],
  },
  {
    title: "Augmented Reality Learning App",
    category: "ar",
    description:
      "Educational AR experience developed using Unity and Vuforia for interactive learning.",
    technologies: ["Unity", "Vuforia", "C#", "AR"],
    role: "AR Development, Interaction Design, Prototype Testing",
    links: [
      { label: "View Project", url: "#" },
      { label: "Repository", url: "#" },
    ],
  },
  {
    title: "Speaker Recognition Using CNN",
    category: "ai",
    description:
      "Deep learning model for speaker classification based on MFCC audio features.",
    technologies: ["Python", "TensorFlow", "CNN", "MFCC"],
    role: "Model Training, Audio Processing, Research Documentation",
    links: [
      { label: "View Project", url: "#" },
      { label: "Repository", url: "#" },
    ],
  },
];

// DOM references for the project grid and filter buttons.
const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");

// Human-readable labels for project categories.
function formatCategory(category) {
  const labels = {
    unity: "Unity",
    web: "Web",
    ai: "AI",
    ar: "AR",
  };

  return labels[category] || category;
}

// Builds the HTML for the links inside each project card.
function renderProjectLinks(links) {
  return links
    .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}

// Renders projects and applies the selected category filter.
function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (!visibleProjects.length) {
    projectGrid.innerHTML =
      '<p class="empty-state">No projects found for this category.</p>';
    return;
  }

  projectGrid.innerHTML = visibleProjects
    .map((project, index) => {
      const technologies = project.technologies
        .map((technology) => `<li>${technology}</li>`)
        .join("");

      return `
        <article class="project-card">
          <div class="project-media">
            <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="project-category">${formatCategory(project.category)}</span>
          </div>
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="project-role">My Role: ${project.role}</p>
            <ul class="tag-list">${technologies}</ul>
            <div class="project-links">${renderProjectLinks(project.links)}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

// Adds accessible behavior to filter buttons.
filterButtons.forEach((button) => {
  button.setAttribute(
    "aria-pressed",
    button.classList.contains("active") ? "true" : "false",
  );

  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
});

// Prevents the static contact form from reloading the page.
document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for your message. Please connect this form to a backend service.");
});

// Initial project render.
renderProjects();
