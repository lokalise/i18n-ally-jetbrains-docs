---
layout: docs
---

<h1>Plug and play configuration</h1>

After opening a project built with Laravel, Symfony or other supported framework,
the plugin would be automatically configured, where a new profile and scope is created specific to the project
which includes the sources and the language file.

This can be seen in the notifications and the Event log and
there will be 2 options `"Run inspections…"` and `"Show config"`.

To check the generated configuration click `"Show config"`.
To scan the project click `"Run inspections..."`, to scan the whole project for hardcoded strings.

More than one profile/scope could be generated, for example, when opening a Laravel/Symfony project a profile/scope
might be generated for PHP and Twig/Blade source and found sink files.

## Supported frameworks

- PHP
  - Symfony
  - Laravel
  - Yii
  - Zend & Laminas
  - CodeIgniter
  - CakePHP
- JS/Vue (Coming soon)
