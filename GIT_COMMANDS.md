# Quick Git Deployment Commands

## IMPORTANT: Restart First!

**You MUST restart VSCode or your terminal after installing Git for it to work.**

Close and reopen VSCode/Terminal, then follow these steps:

---

## Commands to Run

Open PowerShell in your portfolio folder: `d:\ME\Portifolio\WEB`

Copy and paste these commands **one at a time**:

### 1. Initialize Git Repository

```bash
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Commit Files

```bash
git commit -m "Initial commit - AI Engineer Portfolio"
```

### 4. Add GitHub Remote

```bash
git remote add origin https://github.com/AbdelrahmanHussein1/portfolio.git
```

### 5. Rename Branch to Main

```bash
git branch -M main
```

### 6. Push to GitHub

```bash
git push -u origin main
```

> **Note**: You may be prompted to sign in to GitHub. Use your GitHub username and password (or Personal Access Token if you have 2FA enabled).

---

## After Pushing Successfully

Your code will be on GitHub! Now enable GitHub Pages:

1. Go to: https://github.com/AbdelrahmanHussein1/portfolio
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Wait 1-2 minutes, then visit:
**https://abdelrahmanhussein1.github.io/portfolio/**

---

## Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Updated portfolio content"
git push
```

---

## If You Get Errors

### Error: "Author identity unknown"

Run these first:

```bash
git config --global user.name "Abdelrahman Ehab"
git config --global user.email "your-email@example.com"
```

### Error: "Permission denied" or authentication required

GitHub requires a **Personal Access Token** instead of password:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Deploy"
4. Check the "repo" scope
5. Generate and copy the token
6. Use this token as your password when Git asks

---

## Verify Git Installation

After restarting, run this to check:

```bash
git --version
```

You should see something like: `git version 2.x.x`
