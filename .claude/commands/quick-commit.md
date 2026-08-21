---
model: claude-haiku-4-5-20251001
---

# Quick Commit & Push

Analyze all current changes, create a commit with a clear message, and push to remote.

## Steps

1. Run `git status` to see all modified and untracked files.
2. Run `git diff` to review staged and unstaged changes.
3. Run `git log --oneline -5` to match the repository's commit message style.
4. Analyze the changes and determine the nature (feat, fix, chore, refactor, docs, test, style).
5. When changes span multiple unrelated concerns, create **separate commits** for each.
6. Stage the relevant files individually — do NOT use `git add -A` or `git add .`. Never stage files that may contain secrets (.env, credentials, etc.).
7. Create a concise commit message that:
   - Uses conventional commit format: `type(scope): description`
   - Focuses on the "why" rather than the "what"
   - Is 1-2 sentences max
   - Does NOT include any `Co-Authored-By` trailer
8. Commit the changes.
9. Push to the current branch: `git push origin HEAD`.
10. Show the resulting `git log --oneline -3` to confirm.

Important:
- Never force push.
- Never skip hooks.

If there are no changes to commit, say so and stop.
