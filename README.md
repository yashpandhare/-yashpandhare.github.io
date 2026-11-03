# yashpandhare.github.io

My personal homepage. Plain HTML and one small CSS file, nothing to build.

Files:
- `index.html` - all the content
- `styles.css` - styling
- `.nojekyll` - tells GitHub Pages to serve the files as they are
- `resume.pdf` - add this yourself (compiled resume from Overleaf)

## Putting it on GitHub Pages

1. On the `yashpandhare` account, create a public repo called `yashpandhare.github.io`.
2. Put your compiled resume in this folder as `resume.pdf`.
3. Push everything:
   ```bash
   git init
   git add .
   git commit -m "Personal site"
   git branch -M main
   git remote add origin https://github.com/yashpandhare/yashpandhare.github.io.git
   git push -u origin main
   ```
   (Or use "Add file -> Upload files" on github.com.)
4. In the repo, open Settings -> Pages, choose branch `main` and folder `/ (root)`, and save.
   After a minute or two it's live at https://yashpandhare.github.io

## Things to do afterwards

- Push the NGO project to a public repo under CodeStudioKurkheda, then link it from the "NGO website" heading in `index.html`
  (the org currently shows no public repos, so that link opens an empty page).
- Add the site URL to the resume header, LinkedIn and Naukri.
