---
layout: docs
---

# String extraction

Extract a hard-coded string after detection, the strings are automatically detected based on the source configuration.

**Existing values**

If keys with the same value already exist, then the plugin would suggest using an existing key.

**Multi-line strings**

Multi-line strings inside HTML files would be extracted where multiple whitespace characters will be replaced with a 
single space. See more at [How whitespace is handled by HTML, CSS, and in the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace)

**Nesting support**

Key nesting is supported for YAML and PHP language files, it's possible to configure it with the 'Nesting separator' 
option in the `Preferences/Settings | i18n Ally | Project settings`.

**Inline tags**

Hard-coded strings can be extracted with inline tags and in that case a `raw` filter would be automatically added for 
templating sources like Twig and Blade, for XLIFF sink it will be added within a CDATA tag.

List of inline tags can be configured in the `Preferences/Settings | i18n Ally | Project settings`.

**Attributes**

Attributes like `alt`, `placeholder`, `label`, `title`, `aria-label` is also scanned for hardcoded strings.

Inline tags that have attributes with user-facing text would still be extracted as one key, so the translation software 
could perform the segmentation by its own rules.

Custom translatable attributes like `data-popover` can be added in the `Preferences/Settings | i18n Ally | Project 
settings`.

## Usage

Move cursor to the detected string and via the context menu and selecting `"Context actions"` or with hot keys
`Alt + Enter` (`Option + Return` in MacOS).

![String extraction](assets/string-extraction.gif)

## Support

Supported on every source.
