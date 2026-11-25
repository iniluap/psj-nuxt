---
name: careful-delete
description: Delete specified file, part of file or set of files. Deletes the minimal number of lines or files. Commits one change per commit.Use it when the user asks "can you delete X", "remove X", "delete X".
argument-hint: '<file, symbol, method, route or package>'
disable-model-invocation: true
allowed-tools: 'Bash(git log:*), Bash(git show:*), Bash(git blame:*), Bash(git status:*), Bash(git ls-files:*), Bash(git grep:*), Bash(git rev-parse:*), Bash(npx -y knip:*), Bash(npx knip:*), Bash(ls:*), Bash(cat:*), Bash(find:*), Bash(grep:*), Read, Grep, Glob'
---

# Careful delete

## Arguments

Raw arguments: $ARGUMENTS

The arguments name **one candidate**: a file, a function or class, an export, a route, a job, a feature-flag branch, a config key or a package. If they're empty, ask which candidate to check (if a `/cruft-hunt` report is in the conversation, offer its "Start with" items) and stop.

## Goal

Delete $ARGUMENTS. Keep the change small.

## Instructions

Delete $ARGUMENTS. Keep the change small.

## Rules

- Remove only its own tests, config and docs. Leave every other test alone.
- Change nothing else. No refactors or renames on the way.
- Delete it, don't comment it out. Git keeps the history.
- If you're merging two similar functions, write tests for both behaviours first.
- Re-run the dead-code tool and list anything that's now unused. Don't delete those yet.
- Commit this one item on its own.
