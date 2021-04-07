---
layout: default
---

# i18n Ally JetBrains plugin <small>(closed beta)</small>

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/QW-oU6sJuFc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Features

* Automated configuration for Symfony applications and bundles for effortless start.
* Detection of hardcoded strings in the whole project and within editor to reduce the need to carefully examine all the source code.
* Extraction hardcoded strings, both manual and automated to remove boring and repetitive work.
* Renaming keys and placeholders from the source code to prevent jumping between files.
* Navigation from source to language files for easier strings editing.
* Excluding particular strings, functions or methods to reduce false positive detection.
* Sync plugin configuration among your team via file in repository so the plugin would be more and more precise.

<br>

## Install closed beta version from a received file

![Install closed beta version from code](assets/install-plugin-from-files.png){:width="884px" height="auto"}

* Go to Preferences, then Plugins
* Click on the ⚙️ cog icon
* Select Install plugin from disk...
* Select plugin archive
* Click apply

All necessary dependencies are bundled into PhpStorm:

* Required (will be automatically asked to install):
  * `org.jetbrains.plugins.yaml` is used for detecting Symfony configuration,
  * `com.intellij.database` for storing and reading plugin settings and translation keys.
* Optional (feature will not work if not present):
  * `com.jetbrains.php` for PHP source,
  * `com.jetbrains.twig` for Twig source,
  * `org.jetbrains.plugins.yaml` for YAML language file type.

## Extract harcoded strings one by one

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3Lnt-aBy98E?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

* Top menu → Tools Run → i18n Ally inspections…
* Specify what files to check (use "Whole project" if unsure) [as described in the JetBrains documentation](https://www.jetbrains.com/help/idea/specify-inspection-scope-dialog.html).
* Open a tree of inspection results up to the last level.
* Click on the first problem found.
* Press `Alt+Enter` (called "Show Context Actions" in Preferences → Keymap)
* Select extraction.
* Select where to extract, if having a multiple translation files per language and confirm selection by pressing `Enter`.
* Edit a translation key and confirm extraction by pressing `Enter`.

## Previewing the docs locally

Prerequsites: [Ruby v2.*](https://www.ruby-lang.org/en/documentation/installation/#homebrew), [Bundler](https://bundler.io/).

1. Clone the repo.
2. Run `bundle install --path vendor/bundle`
3. Run `bundle exec jekyll serve --baseurl=''`.
4. Navigate to `http://localhost:4000` and observe the docs.
