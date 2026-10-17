
## Part A: Git and GitHub topics

### 1. What is Git, and why QAs need it
- Git keeps the **version history of your test code**: undo mistakes, work with a team without overwriting each other, and see who changed what and when.
- Your automation framework lives in Git, so every QA working on it needs the basics.

**Three areas to remember**
| Area | Meaning |
|---|---|
| Working tree | Your files on disk, where you edit |
| Staging area | The "ready to save" list (`git add`) |
| Repository | Saved snapshots (commits) |

### 2. Everyday commands

| Command | What it does | QA example |
|---|---|---|
| `git clone <repo-url>` | Downloads a copy of the project | First day on a new project |
| `git status` | Shows what changed and what is ready to save | Run before every add, commit and push |
| `git add <file>` / `git add .` | Moves changes to the staging area | Add only the test file; `git add .` can pick up temp files, which is why `.gitignore` exists |
| `git commit -m "message"` | Saves a snapshot with a note | Write meaningful messages, not "fixed stuff" |
| `git push origin <branch>` | Uploads commits to GitHub | First push of a new branch: `git push -u origin <branch>` |
| `git pull origin main` | Downloads and merges the latest changes | Start your day with a pull |
| `git branch` | Lists branches | |
| `git switch -c <name>` | Creates a new branch and moves onto it | Never write new tests directly on `main` |
| `git stash` / `git stash pop` | Shelves unsaved changes, then brings them back | Check another branch mid-way through a test |
| `git stash list` | Shows what is on the shelf | |
| `git log --oneline` | Commit history, one line per commit | Find a commit hash |

**Good commit messages**
- Bad: `fixed stuff`, `it works on my machine`, `final_v2_REALLYFINAL`
- Good: `Add login test for valid user`

**Commit vs push**
- A commit only saves your work on **your machine**. Nobody else (and no CI pipeline) can see it until you `git push`.
- Think: commit = save the file on your laptop, push = upload it to the shared drive.

### 3. `git switch` vs `git checkout`
- Both can move you to another branch, with the same result.
- `git switch` (newer, Git 2.23+) only switches branches. `git switch -c <name>` creates a new branch.
- `git checkout` (older) does more than one job (switching branches **and** restoring files). `git checkout -b <name>` creates a new branch.
- You will see `checkout` in older tutorials and older Git versions, and `switch` in newer docs. Follow your team's habit.

| Task | Newer | Older |
|---|---|---|
| Move to a branch | `git switch main` | `git checkout main` |
| Create and move | `git switch -c feature/x` | `git checkout -b feature/x` |

---

### 4. Git Oops #1: I pushed to the wrong branch

**Step 0: check first.** Do not panic and do not force-push.
```
git status
```
- "Your branch is **ahead of** 'origin/main'" means the commit is **not pushed yet** (Case A).
- "Your branch is **up to date with** 'origin/main'" after you pushed means it is **already pushed** (Case B).

**Case A: committed, not pushed yet**
```
git reset --soft HEAD~1
git switch -c feature/login-tests
git commit -m "Add login test for valid user"
git push -u origin feature/login-tests
```
- `--soft` undoes the commit but keeps your code. `--hard` would delete it.
- If the right branch already exists, use `git switch <name>` without `-c`.

**Case B: already pushed**

Step 1: undo it on the wrong branch
```
git log --oneline          # copy the commit hash, e.g. a1b2c3d
git revert a1b2c3d
git push origin main
```
- Revert adds a new commit that cancels the old one, so nobody's history is rewritten.
- If `main` is protected, your push may be rejected. Tell your lead and raise a PR for the revert.

Step 2: move the work to the right branch
```
git switch feature/login-tests
git cherry-pick a1b2c3d
git push
```
- If the work went to a wrong feature branch (not main), the same fix applies: revert there, cherry-pick onto the right one.

**Please don't**
- Do not `git push --force` on a shared branch. It rewrites shared history and can wipe out teammates' commits.
- Do not quietly fix it and hope nobody notices.
- Do not delete the repo and clone again.
- Do tell your lead early, and run `git status` before every push.

---

### 5. Git Oops #2: GitHub says conflicts are fixed, but my local still shows them

**What it looks like**
```
git status
On branch feature/login-tests
You have unmerged paths.
  both modified:   LoginTest.java
```
`git pull` refuses to run, files say "both modified", and GitHub shows no conflicts.

**Why it happens**
- Your laptop and GitHub have different versions of the same branch.
- You started resolving the conflict one way; the developer resolved it another way and pushed.
- Git cannot guess which is right, so it stops and waits. You did not break anything.

**Fix 1: no changes on your branch (the easy way)**
```
git merge --abort
git switch main
git branch -d feature/login-tests
git fetch origin
git switch feature/login-tests
```
- Use `-d`, not `-D`. `-d` refuses to delete unmerged work; `-D` force-deletes it.
- `git fetch origin` makes sure the recreated branch comes from the latest GitHub copy.

**Fix 2: you have changes. Back up first.**
```
git branch backup-my-work
```

*Not committed yet:*
```
git merge --abort
git stash
git pull
git stash pop
```
If there is a conflict at `stash pop`, fix it in the file, then `git add`.

*Committed, not pushed yet:*
```
git merge --abort
git pull --rebase origin feature/login-tests
# conflict? fix the file, then:
git add LoginTest.java
git rebase --continue
```
Changed your mind mid-way? `git rebase --abort` takes you back to the start.

**The shortcut (only if you do not need your local work)**
```
git fetch origin
git reset --hard origin/feature/login-tests
```
- `reset --hard` permanently deletes uncommitted work. Not sure? Use Fix 2 and back up first.

---

### 6. Git Oops #3 (planned): asked for my password on every push or pull

- Check how the repo connects: `git remote -v`
    - `https://...` means HTTPS
    - `git@github.com:...` means SSH
- **Best fix: SSH**
    1. `ssh-keygen -t ed25519`
    2. Add the **public** key in GitHub Settings
    3. Switch the remote: `git remote set-url origin git@github.com:user/repo.git`
- **If staying on HTTPS:** GitHub no longer accepts your account password. Use a **personal access token** and let a credential manager save it.
- Never share your private key or token.

---

### 7. GitHub Pull Requests (PRs) for QAs

**Step 1: raise a PR**
```
git push -u origin feature/login-tests
```
Then click **Compare & pull request** on GitHub. Fill in:
- A clear title, like `Add login test for valid user`
- A description: what changed and why
- A linked ticket (for example `Closes #42` on GitHub; use your Azure Boards or Jira ID if that is what your team uses)
- Reviewers (right sidebar)

**Step 2: review a PR**
1. Open the **Files changed** tab
2. Click the **+** beside a line to comment
3. Click **Review changes**
4. Pick one and submit:
    - **Comment**: feedback only
    - **Approve**: good to merge
    - **Request changes**: fix these first

**Step 3: merge it**
| Option | What it does |
|---|---|
| Merge commit | Keeps every commit and adds one merge commit |
| Squash and merge | Combines all commits into one |
| Rebase and merge | Replays your commits on top, with no merge commit |

Then click **Delete branch**. Your work is already in `main`. Not sure which merge type to use? Follow your team's rule.

**Step 4: after the merge**
```
git switch main
git pull
git branch -d feature/login-tests
```
Skip this and your next branch starts from an old `main`.

**QA angle: what makes a good PR for test code**
- Small and focused: one purpose per PR
- Linked to the ticket
- Test results attached (screenshot or report)
- No temp files, reports or passwords in it
- Small PRs are easier to review, so they usually get approved faster
