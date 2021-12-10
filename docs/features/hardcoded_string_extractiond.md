# Extract a hardcoded string
Extract a hard-coded string after detection, the strings are automatically detected based on the source configuration.

Move cursor to the detected string and via the context menu and selecting `"Context actions"` or with hot keys Alt + Enter (`Option + Return` in MacOS).

![String extraction](https://i18nally.org/features/assets/string-extraction.gif)

## Into existing keys
If keys with the same value already exist, then the plugin would suggest using an existing key.

## Into nested keys
Key nesting is supported for YAML and PHP language files, it’s possible to configure it with the ‘Nesting separator’ option in the `Preferences/Settings | i18n Ally | Project settings`.

## With multi-line strings
Multi-line strings inside HTML files would be extracted where multiple whitespace characters will be replaced with a single space. See more at How whitespace is handled by HTML, CSS, and in the DOM

## With inline tags
Hard-coded strings can be extracted with inline tags and in that case a raw filter would be automatically added for templating sources like Twig and Blade, for XLIFF sink it will be added within a CDATA tag.

List of inline tags can be configured in the Preferences/Settings | i18n Ally | Project settings.

## From attributes
Attributes like alt, placeholder, label, title, aria-label is also scanned for hardcoded strings.

Inline tags that have attributes with user-facing text would still be extracted as one key, so the translation software could perform the segmentation by its own rules.

Custom translatable attributes like data-popover can be added in the Preferences/Settings | i18n Ally | Project
settings.

## Support
Supported on every source. (see [Supported sources](/sources.md))
