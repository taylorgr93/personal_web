---
model: claude-sonnet-4-6
---

# Publish to Production

Push current develop branch changes and merge them into main for production deployment.

## Steps

1. Verify you are on the `develop` branch. If not, stop and warn.
2. Run `git status` to ensure the working tree is clean. If there are uncommitted changes, stop and suggest running `/quick-commit` first.
3. Push `develop` to remote: `git push origin develop`.
4. Ask the user to confirm before merging to main.
5. Once confirmed:
   - `git checkout main`
   - `git merge develop` (fast-forward when possible)
   - `git push origin main`
   - `git checkout develop` (return to develop branch)
6. Show `git log --oneline -3` on both branches to confirm the state.

Important:
- Never force push.
- Never skip hooks.
- Always return to `develop` after publishing.
- Do NOT include any `Co-Authored-By` trailer in any commit.
