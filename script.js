// Portfolio setup: replace placeholder URLs below with your real links.
const portfolioLinks = {
  githubProfile: "", // Example: "https://github.com/your-username"
  linkedinProfile: "", // Example: "https://www.linkedin.com/in/your-profile/"
  projects: {
    jobSearch: { github: "", demo: "" },
    movieGraph: { github: "", demo: "" },
    libraryManagement: { github: "", demo: "" }
  }
};

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

// Add real project links above. Unconfigured links stay visibly non-functional
// and do not send visitors to an unrelated website.
const projectGroups = [
  portfolioLinks.projects.jobSearch,
  portfolioLinks.projects.movieGraph,
  portfolioLinks.projects.libraryManagement
];
document.querySelectorAll(".project-card").forEach((card, index) => {
  const group = projectGroups[index];
  card.querySelectorAll(".placeholder-link").forEach(link => {
    const kind = link.dataset.linkType;
    const url = group?.[kind];
    if (url && /^https?:\/\//i.test(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.remove("placeholder-link");
    } else {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert("This link is a placeholder. Add the real " + (kind === "github" ? "GitHub repository" : "live demo") + " URL in script.js.");
      });
    }
  });
});

// Copy email address
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");
copyButton?.addEventListener("click", async () => {
  const email = "kurapatisivapraveen@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email address copied.";
  } catch {
    copyStatus.textContent = "Please copy this address: " + email;
  }
});

// Photo: replace assets/profile-placeholder.svg with your own photo and update
// the image src in index.html, or keep the placeholder until you're ready.

// Resume: place your real PDF in this folder named resume.pdf.
// Until then, the download button will point to a file that has not been added.
document.querySelector("[data-resume-link]")?.addEventListener("click", event => {
  // The actual file is downloaded by the browser when resume.pdf exists.
  // Avoid fake success messages; if missing, show a clear setup hint.
  fetch("resume.pdf", { method: "HEAD" }).then(response => {
    if (!response.ok) {
      event.preventDefault();
      alert("Add your resume PDF to this portfolio folder and name it resume.pdf, then redeploy.");
    }
  }).catch(() => {
    // On some local file previews HEAD requests are blocked; keep normal link behavior.
  });
});
