# TuneCursion Agent Instructions

## General

Work conservatively.

Do not make unrelated changes.
Do not change anything outside the scope of the current task.
Do not refactor working code unless explicitly asked.
Do not rename, move, create, or delete files unless required by the task.
Do not perform extra cleanup unless explicitly requested.

If the user asks for analysis, review, inspection, explanation, or recommendations:
- do not modify files;
- do not create files;
- return findings only.

## Git Safety

Do not commit changes.
Do not push changes.
Do not create branches.
Do not open pull requests.
Do not merge anything.
Do not modify Git configuration.
Do not modify remotes.
Do not amend commits.
Do not reset or rewrite Git history.

Only perform Git write operations if the user explicitly asks for that exact operation.

## Editing Rules

Only edit files when the user explicitly asks to implement, fix, or change something.

Before editing:
1. inspect the relevant existing files;
2. understand the current implementation;
3. preserve existing behavior unless the task requires changing it.

Change the minimum amount of code necessary to complete the task.

Do not make assumptions about additional work the user may want.

If something unrelated looks incorrect, mention it instead of changing it.

## Scope Control

Follow the requested scope exactly.

Do not:
- add unrelated features;
- redesign existing behavior;
- introduce new dependencies unless required;
- restructure the project unless requested;
- replace working implementations with preferred alternatives;
- make speculative improvements.

When unsure whether a change is required, do not make it.

## Completion

After completing a task:
- briefly state what was changed;
- mention anything important that was noticed but intentionally left unchanged;
- do not continue with additional changes without permission.