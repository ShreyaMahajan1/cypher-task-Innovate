# Deploying the backend (Node/Express + MongoDB) from GitHub using VS Code

This doc explains how to deploy the `backend/` app in this repo from GitHub using popular hosts — Render, Railway and Heroku — and how to do it via VS Code.

Important configuration values (required in production):
- MONGODB_URI — connection string to your MongoDB (Atlas recommended)
- JWT_SECRET — secret for signing JSON Web Tokens
- PORT — port to listen on (commonly 5000)

There is an example `.env` inside `backend/.env.example` you can copy from.

---

## Preparation (required before linking to any host)

1. Ensure `backend/package.json` uses `start: node index.js` (done) and `dev: nodemon index` for local dev.
2. Make sure your changes are committed and pushed to GitHub (this repo's `main` already contains the updates).

---

## Option 1 — Render (recommended for simplicity)

Render supports auto-deploy from GitHub for web services.

1. Go to https://render.com and sign in.
2. Create a new **Web Service** → Connect your GitHub repo.
3. Pick the `main` branch (or another branch) and set the **Root** to `backend`.
4. Build/Start command:

   Build command: (leave blank) or `npm install`

   Start command: `npm start`

5. Add environment variables in the Render dashboard (MONGODB_URI, JWT_SECRET, PORT).
6. Click Create Web Service. Render will install dependencies, run `npm start`, and expose a public URL.

Notes: MongoDB should be hosted on Atlas or another provider. Set MONGODB_URI to the Atlas connection string.

---

## Option 2 — Railway

1. Go to https://railway.app and connect your GitHub repository.
2. Create a new project, connect the `backend` folder as the deploy root (Railway often autodetects Express apps).
3. Set environment variables in Railway project settings: MONGODB_URI and JWT_SECRET.
4. Railway will build and deploy automatically on each push.

---

## Option 3 — Heroku (classic)

1. Install the Heroku CLI if needed and log in:

```bash
npm i -g heroku
heroku login
```

2. Create an app: `heroku create <app-name>`
3. Set environment variables:

```bash
heroku config:set MONGODB_URI="<your-mongodb-uri>" JWT_SECRET="<your-secret>" --app <app-name>
```

4. Push `main` to Heroku (if using the GitHub integration connect the repo inside the Heroku dashboard):

```bash
git push https://git.heroku.com/<app-name>.git main
```

Heroku will start the app using `npm start` defined in `backend/package.json`.

Notes: Heroku no longer provides free tiers for many add-ons — using MongoDB Atlas externally is recommended.

---

## Deploying from VS Code

You can perform the entire flow from VS Code using either the platform extensions or the integrated terminal + Git.

Steps (general flow):
1. Make sure your repo is committed and pushed to GitHub.
2. Install the appropriate extension in VS Code (e.g., **Render**, **Railway**, or **Heroku**) or use the platform's web dashboard.
3. Use the extension UI to create a new service and connect your GitHub repository + `backend` root. The extension will walk you through environment variables and build/start commands.

Alternatively, use the terminal inside VS Code and the host's CLI (example for Heroku):

```bash
# login
heroku login

# ensure in the backend directory if pushing only backend
cd backend

# create an app or use existing
heroku create my-backend-app

# push to heroku
git push https://git.heroku.com/my-backend-app.git main

# set env vars
heroku config:set MONGODB_URI="<uri>" JWT_SECRET="<secret>" --app my-backend-app
```

---

## Environment & Secrets

Make sure you DO NOT commit production secrets. Use the host dashboard (Render/Railway/Heroku) to set values and keep them secret.

---

If you want I can:
- create a minimal `Dockerfile` for the backend so you can deploy anywhere using Docker.
- connect the repo to Render for you (I can provide exact steps and commands to follow in VS Code).
