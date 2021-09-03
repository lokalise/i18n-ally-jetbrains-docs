---
layout: docs
---

# Supported file formats

## [JSON]({{ 'json' | global_asset_url }}.html)

{% highlight json %}
{
    "key": "Value",
    "another_key": "Another value",
    ...
    "extracted": "Extracted string will be added like this",
    ...
    "multiline": "An explicitly multiline strings\nwill be extracted like this."

}
{% endhighlight %}

## [YAML]({{ 'yaml' | global_asset_url }}.html)

{% highlight yaml %}
key: Value
another_key: 'Another value'
...
extracted: 'Extracted string will be added like this'
extracted_single_word: Extracted
...
some_key:
    nested_key: 'Nested keys are also supported'
...
multiline: |
    'An explicitly multiline strings
    will be extracted like this.'
{% endhighlight %}

## [XLIFF v1]({{ 'xliff-v1' | global_asset_url }}.html)

{% highlight xml %}
<?xml version="1.0"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
<file source-language="en" target-language="en" datatype="plaintext" original="file.ext">
<body>
    <trans-unit id="extracted">
        <source>extracted</source>
        <target>Extracted string will be added like this</target>
    </trans-unit>
    ...
    <trans-unit id="extracted_with_tags">
        <source>extracted_with_tags</source>
        <target><![CDATA[String with tags<br> will be added like this]]></target>
    </trans-unit>
</body>
</file>
</xliff>
{% endhighlight %}

## [XLIFF v2]({{ 'xliff-v2' | global_asset_url }}.html)

{% highlight xml %}
<?xml version="1.0"?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0">
<file source-language="en" target-language="en" datatype="plaintext" original="file.ext">
    <unit id="extracted">
        <segment>
            <source>extracted</source>
            <target>Extracted string will be added like this</target>
        </segment>
    </unit>
    ...
    <unit id="extracted_with_tags">
        <segment>
            <source>extracted_with_tags</source>
            <target><![CDATA[String with tags<br> will be added like this]]></target>
        </segment>
    </unit>
</file>
</xliff>
{% endhighlight %}

## [PHP]({{ 'php' | global_asset_url }}.html)

{% highlight php %}
<?php

return [
    'key' => 'Value',
    'another_key' => 'Another value',
    ...
    'extracted' => 'Extracted string will be added like this',
    ...
    'some_key' => [
        'nested_key' => 'Nested keys are also supported',
    ],
    ...
    'multiline' => 'An explicitly multiline strings
        will be extracted like this.'
];
{% endhighlight %}

# Configure translation storage

## Single or namespaced storage

### Single file

Extract all strings to a predefined file.

### Namespaced

choose where to extract strings among multiple files within the default locale (namespaces, domains).

## Placeholder formats

Format to store placeholder name in a language file.

### Symfony replacement

{% highlight php %}{% raw %}
Source: {{ 'key'|trans({'%name%': nameVar}) }}
{% endraw %}{% endhighlight %}

{% highlight yaml %}{% raw %}
String: My name is %name%.
{% endraw %}{% endhighlight %}

### ICU

{% highlight php %}{% raw %}
Source: {{ 'key'|trans({'name': nameVar}) }}
{% endraw %}{% endhighlight %}

{% highlight yaml %}{% raw %}
String: My name is {name}.
{% endraw %}{% endhighlight %}

### Laravel

{% highlight php %}{% raw %}
Source: {{ trans('app.key', ['name' => $nameVar])}}
{% endraw %}{% endhighlight %}

{% highlight yaml %}{% raw %}
String: My name is :name.
{% endraw %}{% endhighlight %}


## Key naming pattern

Generate key names from the source string.

### snake_case

{% raw %}
Hello world! ➞ hello_world
{% endraw %}

### camelCase

{% raw %}
Hello world! ➞ helloWorld
{% endraw %}

### Natural language (not recommended)

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

- `%namespace%` – will use a namespace selected during extraction. Available options are listed in the Namespaces list.
- `%locale%` – will use a Default locale specified in preferences.

## Namespaces

A comma-separated list of namespace part in the language file name. For example:

- `messages+intl-icu.en.xlf` – `messages` is a namespace,
- `en/app_lang.php, en/promo_lang.php` – `app, promo` are namespaces.


The first namespace in the list is considered a default one and can be configured in the Sources section to be skipped:

- `trans('key')` – for default (first) namespace,
- `trans('key', [], 'non-default-namespace')` – for other namespaces.

