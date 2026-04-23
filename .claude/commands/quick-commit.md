---
model: claude-sonnet-4-6
---

# Quick Commit

Analyze all current changes and create a commit with a clear, concise message.

## Steps

1. Run `git status` to see all modified and untracked files.
2. Run `git diff` to review staged and unstaged changes.
3. Run `git log --oneline -5` to match the repository's commit message style.
4. Analyze the changes and determine the nature (feat, fix, chore, refactor, docs, test, style).
5. Stage the relevant files individually — do NOT use `git add -A` or `git add .`. Never stage files that may contain secrets (.env, credentials, etc.).
6. Create a concise commit message that:
   - Uses conventional commit format: `type(scope): description`
   - Focuses on the "why" rather than the "what"
   - Is 1-2 sentences max
   - Does NOT include any `Co-Authored-By` trailer
7. Commit the changes.
8. Show the resulting `git log --oneline -1` to confirm.

If there are no changes to commit, say so and stop.
