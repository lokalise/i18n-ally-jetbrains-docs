---
layout: docs
---

<h1>Rename keys and placeholders</h1>

Keys can be renamed from the Twig templates

## Usage

**Keys** are renamed via the hot keys `Shift + F6` or by right-clicking the highlighted part and selecting
`Refactor -> "Rename…"`.

If the new name contains a nesting separator then the key will be nested if supported by sink file (JSON/YAML).

**Placeholders** can be renamed within the source file, put a cursor into the placeholder `name` rename it via the hot
keys `Shift + F6` or by right-clicking the highlighted part and selecting `Refactor -> "Rename…".`

![Rename keys and placeholders](assets/rename-keys-and-placeholders.gif)

## Support

Renaming keys within source is supported for all sources, but renaming placeholders is only supported for these
sink files:
- JSON
- YAML
- PO
