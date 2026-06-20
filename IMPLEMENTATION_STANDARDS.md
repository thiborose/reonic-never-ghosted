# Implementation Standards

Minimal baseline. Grow as needed.

## Code

- Keep it simple. Build only what's needed now — no "just in case" code.
- Always type-annotate. Prefer Pydantic models over raw dicts.
- One-line docstrings. Comment *why*, not *what*. Descriptive names.
- Absolute imports for app code. No wildcard imports.

## Testing (TDD)

Failing test first → minimum code to pass → refactor. Use `pytest`. CI runs on
every PR and must pass before merging to `main`. (CI + tests come later; write
testable code.)

## Branches

Branch off `main`, named `<type>/<short-description>` (e.g. `feat/quote-parser`).

## Commits

[Conventional Commits](https://www.conventionalcommits.org/): one-line subject,
optional one-line summary. **Never** add Claude/AI as co-author.

```text
feat(strategy): add first follow-up generator

Builds the opening message from quote data.
```

Types:

- **feat** – new feature
- **fix** – bug fix
- **test** – adding or updating tests
- **docs** – documentation only
- **build** – build system, packaging, dependencies
- **chore** – maintenance, housekeeping
