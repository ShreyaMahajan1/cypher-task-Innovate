# Deploying the frontend to Vercel

This repository contains a frontend folder named `frontend (2)` (space and parentheses). Vercel normally deploys the repository root; this repo includes a `vercel.json` so Vercel knows to build the React app inside `frontend (2)`.

Below are two simple ways to deploy your frontend to Vercel.

---

## Option A — (Recommended) Deploy using the Vercel web dashboard (no CLI required)

1. Push your repository to GitHub (or GitLab/Bitbucket) so Vercel can import it.
2. Open https://vercel.com and sign in.
3. Click **New Project** → Import your repo.
4. When Vercel asks for the project settings, set the **Root Directory** to `frontend (2)` if it doesn't auto-detect. (Because this repo has `vercel.json`, Vercel should auto-find the right config.)
5. Ensure the **Build Command** is `npm run build` and the **Output Directory** is `build`.
6. Click Deploy. Vercel will use `@vercel/static-build` to run `npm run build` in the `frontend (2)` directory and publish the `build` folder.

Notes: If you prefer not to use the `frontend (2)` path or run into special cases, you can rename the folder to `frontend` to avoid spaces and parentheses.

---

## Option B — Deploy using the Vercel CLI

1. Install the Vercel CLI (if you do not have it):

```bash
npm i -g vercel
```

2. From your repository root (where `vercel.json` is located), login and deploy:

```bash
vercel login
vercel --prod
```

During the CLI flow, if it asks which directory is your project root, pick `frontend (2)` (or press the default if Vercel picks the config from `vercel.json`).

---

## Notes & troubleshooting

- The project was tested to build locally with `npm run build` inside `frontend (2)` and produced a successful build.
- If you prefer to avoid any potential edge-cases due to the folder name, rename `frontend (2)` to `frontend` and update any references.
- If your frontend calls the backend, make sure to update the production API base URL in your frontend code or set environment variables in Vercel project settings.

---

## Deploying via GitHub (automatic builds)

1. Push your branch to GitHub (we pushed `main` already). Vercel will use the repository to run builds if you connect it.
2. In Vercel dashboard, go to **Import Project** → choose the repo and **link** it to Vercel.
3. During setup, ensure the **Root Directory** is `frontend (2)`, Build Command is `npm run build`, and Output Directory is `build`.
4. Enable automatic deployments for the branch you want (e.g., `main`) — now every push to `main` will trigger Vercel to rebuild and redeploy.

## Deploy from VS Code (Vercel extension)

1. Install the **Vercel** extension in VS Code: Extensions → Search `Vercel` → Install.
2. Open VS Code, sign in to Vercel via the extension (click on the extension and follow the login flow).
3. The extension can list and import projects from your Vercel account. If you want to create a new deployment directly from VS Code, open the command palette (Ctrl+Shift+P) → `Vercel: Deploy`.
4. Choose your project root (`frontend (2)`) when asked and follow the prompts. The extension will run a build and publish the app.

Notes:
- The VS Code extension is best for quick manual deploys or for debugging. For continuous deployment triggered by pushes, use the GitHub integration described above.

