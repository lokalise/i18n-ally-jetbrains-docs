---
layout: docs
title: Changelog
---

<h1>{{ page.title }}</h1>

## v1.0.10 (2021-09-07)

Support for JavaScript, TypeScript and Vue templates 🚀
The plugin could be installed in WebStorm, PhpStorm, PyCharm, RubyMine and Idea Ultimate.

Features:
— Support JavaScript and TypeScript source code
— Support Vue templates
— Support for JavaScript and Typescript files as language files
— Support key nesting and indexed arrays in JSON language files
— Support WebStorm, PyCharm, RubyMine and Idea Ultimate


Plug and play configuration improvements:
— Automatic plugin configuration for vue-i18n, vuex-i18n, nuxt-i18n, @nuxtjs/i18n packages


Experience improvements:
— Significantly reduce the time of project indexing
— Store config in the hidden folder by default and support project root for existing users and ones who want to share config with team


Bugfixes:
— Fix automatic configuration of a selected translation folder
— Ensure that plugin can work with file paths on Windows
— Improve navigation from PO and POT files to sources
— Detect strings that start with inline tags
— Prevent saving profiles without sources
— Fix manual preferences editing

## v1.0.9 (2021-08-26)

Features:
- Autocomplete key names in Blade sources
- Support for POT files
- Support %varargs% and %list% placeholders formats (could be configured from source function arguments)


Plug and play configuration improvements:
- Introduced automatic configuration for CakePHP v3 and v4
- Allow automatic configuration of multiple frameworks founds in one repository


Experience improvements:
- Limit natural language key extraction to file formats that handle in natively: XLIFF, PO and POT
- Navigation from YAML nested keys to source code
- Overcome the “Slow operations are prohibited on EDT” exception appearing in PhpStorm v2021.2


Bugfixes:
- Extraction of strings with HTML tags uses unescaped Blade syntax ({!! ... !!}) now
- Respect scopes in renaming and navigation for multiple Twig sources
- It’s possible to extract multiline strings into an existing key from plain PHP source into XLIFF language files
- Key naming pattern changes now applied without reopening a project
- Improved stability of syntax checks in Blade templates


## v1.0.8 (2021-08-09)

Experience improvements:
- Workaround not to overwrite default unchanged inspection profiles


## v1.0.7 (2021-08-03)

Features:
- Navigation from language files to sources

Plug and play configuration improvements:
- Introduced automatic configuration for CodeIgniter v3 and v4
- Introduced automatic configuration for Zend/Laminas framework

Experience improvements:
- Added support for the PhpStorm v2021.2.*
- Show and store relative path to translation directory

Bugfixes:
- Unescaped blade expressions (`{!! !!}`) are recognized now
- Support comments in the Blade expressions
- Allow deleting config and undoing the deletion in one session
- Missing key inspections was showing for an existing key when multiple profiles were configured on the same scope
- Allow empty `target` element in XLIFF files
- Plugin can run seamlessly with Twig plugin disabled in PhpStorm
- Fixed IndexOutOfBoundsException when scaning PHP projects
- Scope is not resetting to "Project files" when saving anymore
- Example fields in source preferences are correctly reflecting source configuration now


## v1.0.6 (2021-07-21)

Features:
- Changes in language files are instantly reflected in source code

Bugfixes:
- Fix an exception thrown when opening PHP files with a disabled Blade plugin
- Fix “Project is already disposed” exception which sometimes occurred after closing a project
- Fix exception in plug and play configuration for Yii projects with multiple translation folders
- When “Apply” button that keeps to be active after click


## v1.0.5 (2021-07-16)

Features:
- Localization hints introduced: see an actual user-facing text instead of translation keys in source code.

Experience improvements:
- Open a sandbox project to try plugin out from Preferences → i18n Ally → Open sandbox.
- Warn developers via popup when they run scanning on the project without configuration.

Plug and play configuration improvements:
- Introduced automatic configuration for Yii apps similar to the official templates.
- Improved automatic configuration for Symfony with added support for `framework.translator.paths` configuration param: now multiple translation directories would be added by plugin itself.
- Plugin would try detect whether key nesting is needed for the particular project.


## v1.0.4 (2021-07-07)

First public release! 🚀

Features:
- Detect missing strings in the whole project, folder or file (Tools → Run i18n Ally Inspections…).
- Extract hardcoded strings in bulk or from the editor with Quick fixes (Alt+Enter).
- Jump from the source code to the language file to update strings (Ctrl+Click on key).
- Rename keys and params from source code (Context menu → Refactor → Rename).
- Ignore a string in all sources and ignore a function/argument/array key value in PHP source.

Supports:
- PHP, HTML with PHP, Blade and Twig source files.
- Storing translation messages in YAML, PHP, PO, XLIFF and JSON files.
- Plug and play cofiguration for Laravel and Symfony frameworks.
- Manual configuration for Yii, CodeIgniter, CakePHP frameworks.
