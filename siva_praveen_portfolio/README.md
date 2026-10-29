# Siva Praveen Kurapati — Portfolio Website

A responsive static portfolio built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — page content and sections
- `style.css` — responsive light-theme design
- `script.js` — mobile menu, email copy button, and project link configuration
- `assets/profile-placeholder.svg` — replace this with your own photo
- `resume.pdf` — add your real resume PDF here (not included yet)

## Preview locally
Open `index.html` in your browser. For a more reliable local preview, use the VS Code Live Server extension.

## Personalize before publishing
1. Replace `assets/profile-placeholder.svg` with a photo named `profile.jpg` (or another image format).
2. In `index.html`, update the profile image source, for example:
   `src="assets/profile.jpg"`
3. Add your actual resume PDF to this folder and name it `resume.pdf`.
4. Open `script.js` and add your real GitHub, LinkedIn, and project repository/demo URLs.
5. Search the files for `placeholder` and confirm all missing links are updated.

## Deploy to Vercel (free static site)
1. Create a GitHub repository and upload all files while keeping the folder structure.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. For a plain HTML site, leave the framework preset as **Other** (or no framework).
5. Leave the build command empty and the output directory as the repository root (`.`), if asked.
6. Click Deploy. Vercel will provide a public URL.
7. When you change files, commit and push the updates; Vercel redeploys from GitHub.

No database, paid API, or build step is required for this static portfolio. Free-plan features and limits may change.

## Important
- The contact links use your supplied email and phone number.
- Project links are intentionally placeholders until you provide real URLs.
- The resume download works after you add `resume.pdf`.
- This site does not collect or store contact-form submissions; no contact form has been added.
