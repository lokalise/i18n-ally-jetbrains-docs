---
layout: docs
---

# Register a missing key

After scanning is complete missing keys within the scope are detected and can be extracted to sink files with empty values. 

For languages that support nesting (PHP and YAML), if the includes a nesting separator, then the key will be nested.

## Detection

Missing keys are detected everywhere in the project and also within:
- Inline tags
- attributes
- custom tags and attributes (must be defined in the plugin settings)

## Usage

Keys can be registered via the context menu and selecting `"Context actions"` or with hot keys 
`Alt + Enter` (`Option + Return` in MacOS).

![Register missing key](assets/register-missing-key.gif)

## Support

Supported on every source.
