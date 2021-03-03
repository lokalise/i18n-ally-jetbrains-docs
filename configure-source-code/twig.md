---
layout: default
---

# Twig source configuration


![Twig Source Code Preferences screenshot](assets/twig-preferences.png){:width="629px" height="auto"}

## Scope

i18n Ally is applying inspections for files that have `.twig` extension and are included into [a PhpStorm's scope](https://www.jetbrains.com/help/phpstorm/settings-scopes.html#d55e18f7).

Create a new scope or adjust existing by clicking on `…` button and handpicking only the meanigfull directories and files.

Select `Project files` to include all PHP files in your project. Note that for frameworks that has autoconfiguration the relevant scope would be specified automatically.

## Inline tags

List of tags that would be taked inside keys, like `a`, `strong` or `span`. Filled by default with [all "inline" tags listed on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#elements).

An example of extaction result difference between block and inline tags:
{% highlight twig %}{% raw %}
Three <p>different</p> pieces.
{{ 'three'|trans }} <p>{{ 'different'|trans }}</p> {{ 'pieces'|trans }}


One <b>big</b> piece.
{{ 'one_big_piece'|trans|raw }}
{% endraw %}{% endhighlight %}

Notice the `raw` filter appended to the key that contains inline tags. i18n Ally adds it automatically to ensure corrent rendering of the content.

You can add custom tags, like `icon`, by appending a new tag to the comma-separated list.

## Translatable attribute names

Translatable attributes are also checked for the translatable text:
{% highlight twig %}{% raw %}
<img src="…" 
    alt="Checked by default" 
    title="Checked by default" 
    data-bs-content="Requires configuration" />
{% endraw %}{% endhighlight %}

You can add custom attribues, like `data-bs-content`, by appending a new attribute to the comma-separated list.

## Filter name

Filter name to use for extraction is the default one in Symfony framework: `trans` would became {% raw %}`'key'|trans`{% endraw %}.

If you have a custom function or an array for fetching translations you [create a custom filter](https://twig.symfony.com/doc/3.x/advanced.html#filters):

{% highlight php %}
$filter = new \Twig\TwigFilter('translate', function ($key, $domain = 'messages') {
    textdomain($domain);
    return gettext($key);
});
{% endhighlight %}


## Arguments template

### `%map%`

Map means an associative array that:

* won't be replaced with anything if there are no placeholders use and the default domain is used: `trans('key')`,
* will be replaced with an empty short syntax array in non-default domain is specified: `trans('key', {}, 'validators')`,
* will be replaced as an associative short syntax array if there are any placeholders detected: `trans('key', {'placeholder': $placeholder})`.

Initial placeholder names are determined automatically based on a respective variable.

### `%domain%`

Domain (could be called a "namespace") usually means a part of language file path from where translations would be searched for. The default domain is usually `messages`, but could be changed by specifying different first domain in [the Symfony language file](/configure-language-files/symfony).

## Supported language constructs

All strings inside tags and translatable attributes are checked.

## What's not supported

* Strings inside twig expressions, like {% raw %}`{% set var = 'Hello!' %}`{% endraw %}
* Extraction with function, like {% raw %}`{{ trans('key') %}`{% endraw %}, or array, like {% raw %}`{{ lang.key %}`{% endraw %}
* Extraction with `trans` blocks

## What strings are skipped

* Pure HTML markup with Twig expressions, like `<p class="mt0"><b>{{ 'summary'|trans }}</b></p>`.
* All attributes except ones listed in "Translatable attribute names" preference.
* Content inside `trans` block as it's assumed to be already extracted.
* Content inside `verbatim` tag.
* Content inside `script` and `pre` tags.
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.

## Renaming from the editor

If an existing key or automatically captured placeholder is not an optimal one you can rename the right from the editor.

Just put a cursor on a key or a placeholder in source code, then hit `Shift+F6`<br>or right click → hover over `Refactor` → click on `Rename…`:

![Twig renaming key and placeholder from editor screencast](assets/twig-renaming.gif){:width="744px" height="auto"}

## Extract selected string

If you need to extract one string into a multiple keys, then select part of a string you want to extract, click `Alt+Enter` or right-click and select "Show Context Actions":

![Twig extracting selection from editor screencast](assets/twig-extract-selection.gif){:width="843px" height="auto"}

## Deal with branching in two steps

It's commont to have a small simple branches in the Twig templates for presentation purposes:
{% highlight twig %}{% raw %}
Webhook <strong>{% if success %}succeeded{% else %}failed{% endif %}</strong>.
{% endraw %}{% endhighlight %}

The best practice it to separate this message into two different ones so translators would be a full context and would be able to adjust word order according the the target language grammar.

**1st step:** manually extract the condition out of the message to get two messages without condition
{% highlight twig %}{% raw %}
{% if success %}
    Webhook <strong>succeeded</strong>.
{% else %}
    Webhook <strong>failed</strong>.
{% endif %}
{% endraw %}{% endhighlight %}


**2nd step:** replace simple messages with i18n Ally
{% highlight twig %}{% raw %}
{% if success %}
  {{ 'webhook_succeeded'|trans }}
{% else %}
  {{ 'webhook_failed'|trans }}
{% endif %}
{% endraw %}{% endhighlight %}
