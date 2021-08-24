---
layout: docs
---

# HTML with PHP source configuration

![PHP Source Code Preferences screenshot](assets/html-with-php-preferences.png){:width="721px" height="auto"}

## Scope

i18n Ally is applying inspections for files that have `.php` extension and are included into 
[a PhpStorm's scope](https://www.jetbrains.com/help/phpstorm/settings-scopes.html#d55e18f7).

Create a new scope or adjust existing by clicking on `…` button and handpicking only the meaningful directories and files.

Select `Project files` to include all PHP files in your project. Note that for frameworks that has autoconfiguration the 
relevant scope would be specified automatically.

## Inline tags

List of tags that would be taken inside keys, like `a`, `strong` or `span`. Filled by default with
[all "inline" tags listed on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#elements).

An example of extraction result difference between block and inline tags:

{% highlight php %}{% raw %}
<div>
    Three <p>different</p> pieces.
    <?= Yii::t('app', 'three') ?> <p><?= Yii::t('app', 'different') ?></p> <?= Yii::t('app', 'pieces') ?>
</div>
<div>
    One <b>big</b> piece.
    <?= Yii::t('app', 'one_big_piece') ?>
</div>
{% endraw %}{% endhighlight %}

You can add custom tags, like `icon`, by appending a new tag to the comma-separated list.

## Translatable attribute names

Translatable attributes are also checked for the translatable text:

{% highlight php %}{% raw %}
<img src="…"
     alt="Checked by default"
     title="Checked by default"
     data-content="Requires configuration" />
{% endraw %}{% endhighlight %}

You can add custom attributes, like `data-content`, by appending a new attribute to the comma-separated list.

## Function name

It could be any callable PHP structure that wraps arguments into parentheses:

* function: `_(…)`, `__(…)`,
* object method: `$this->trans(…)`, `$translator->trans(…)`,
* static method: `\Yii:app(…)`.

Don't include parentheses there: for example, `gettext(…)` function should be written as `gettext`.

## Arguments template

### `%key%`

Key will be replaced with a string ID that was generated automatically or entered by you during a hardcoded string extraction (note that you have to specify preferred quotes like `'%key%'`).

### `%map%`

Map means an associative array that:

* won't be replaced with anything if there are no placeholders use and the default domain is used: `Yii::t('key')`,
* will be replaced with an empty short syntax array in non-default domain is specified: `Yii::t('key', [], 'validators')`,
* will be replaced as an associative short syntax array if there are any placeholders detected: `Yii::t('key', ['placeholder' => $placeholder])`.

Initial placeholder names are determined automatically based on a respective variable, constant, function, or method.

### `%namespace%`

Namespace usually means a part of language file path from where translations would be searched for. The default 
namespace is usually `messages`, but could be changed by specifying different first namespace.

## Supported language constructs

i18n Ally finds hardcoded user-facing strings are only detected inside HTML tags.

Placeholder names are determined automatically.

## What's not supported

* Non-ICU placeholders, for example: `Hello, %user%!` string with `trans('hello', ['%user%' => $user])`.
* Using an array for message retrieval (common approach in PHP legacy codebases, for example `$lang['key']`).
* Adding the default domain to the translation function (in Yii there should always be a domain, `\Yii:t('app', 'key')`).

## What strings are skipped

* All arguments passed to functions or methods (except constructors),
* HEREDOC and NOWDOC strings,
* Array keys,
* Class property definitions,
* Default parameter values,
* Constant name specified in `define` first argument,
* Strings assigned to constants,
* Strings in comments,
* Strings arguments for the echo function, e.g. `echo 'this string';`
* Strings inside PHP tags, e.g., `<?= "<b>$overallRating[percent]%</b> of 100%"; ?>`
* Default argument values,
* Full SQL queries and most of SQL parts,
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.

## Renaming from the editor

If an existing key or automatically captured placeholder is not an optimal one you can rename the right from the editor.

Just put a cursor on a key or a placeholder in source code, then hit `Shift+F6`<br>or right click → hover over `Refactor` → click on `Rename…`:

