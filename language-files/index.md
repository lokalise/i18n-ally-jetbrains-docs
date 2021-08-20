---
layout: docs
---

# Language files configuration

{{ page.url }}

## Supported language files

**JSON**

Extract strings into key-value pairs. Arrays are not supported.

**YAML**

Extract strings into key-value pairs with support of key nesting. Sequences are not supported.

**XLIFF v1**

Extract strings into a `trans-unit` block per string.

**XLIFF v2**

Extract strings into a `segment` block per string.

**PHP**

Extract into the latest array declaration per page with support of key nesting.


## Single file vs Namespaced translation storage

**Single file**

Extract all strings to a predefined file.

**Namespaced** 

choose where to extract strings among multiple files within the default locale (namespaces, domains).

## Placeholder formats

Format to store placeholder name in a language file.

**Symfony replacement**

{% highlight php %}{% raw %}
Source: {{ 'key'|trans({'%name%': nameVar}) }}
{% endraw %}{% endhighlight %}

{% highlight yaml %}{% raw %}
String: My name is %name%.
{% endraw %}{% endhighlight %}

**ICU**

{% highlight php %}{% raw %}
Source: {{ 'key'|trans({'name': nameVar}) }}
{% endraw %}{% endhighlight %}

{% highlight yaml %}{% raw %}
String: My name is {name}.
{% endraw %}{% endhighlight %}

**Laravel**

{% highlight php %}{% raw %}
Source: {{ trans('app.key', ['name' => $nameVar])}}
{% endraw %}{% endhighlight %}

{% highlight yaml %}{% raw %}
String: My name is :name.
{% endraw %}{% endhighlight %}


## Key naming pattern

Generate key names from the source string.

**snake_case**

{% raw %}
Hello world! ➞ hello_world
{% endraw %}

**camelCase**

{% raw %}
Hello world! ➞ helloWorld
{% endraw %}

**Natural language** (not recommended)

{% raw %}
Hello world! ➞ Hello world!
{% endraw %}

## Nesting separator

Select symbol for nesting keys inside language files.

Here is a yaml example for a key `homepage.features.title` with dot as a nesting separator will be decomposed into:

{% highlight yaml %}
{% raw %}
homepage:
  features:
    title: Features
{% endraw %}
{% endhighlight %}

## Default locale

Extract strings into this locale. Could be in any format: en, en_US, en-US, english, etc.

Will be used in the “Language file name template”

## Translations directory

A folder that contains language files for all locales.
For example:

- `/lang/messages.en.yaml` – select `/lang` folder,
- `/lang/en/app.php` – select `/lang` folder.

## Language file name template

A template to build a filename where to extract strings.
Will be appended to translations directory and should not start with.

**Patterns to use:**
- `%namespace%` – will use a namespace selected during extraction. Available options are listed in the Namespaces list.
- `%locale%` – will use a Default locale specified in preferences.

## Language file path

Change the default language file path with settings above.

## Namespaces

A comma-separated list of namespace part in the language file name. For example:

- `messages+intl-icu.en.xlf` – `messages` is a namespace,
- `en/app_lang.php, en/promo_lang.php` – `app, promo` are namespaces.


The first namespace in the list is considered a default one and can be configured in the Sources section to be skipped:

- `trans('key')` – for default (first) namespace,
- `trans('key', [], 'non-default-namespace')` – for other namespaces.

