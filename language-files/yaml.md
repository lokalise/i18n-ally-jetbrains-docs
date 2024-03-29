---
layout: docs
title: YAML for localization
---

<h1>{{ page.title }}</h1>

## Key/value is the only supported format

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

## Indentation

Configure formatting at the IDE level in <a href="phpstorm://settings?name=Editor--Code+Style--YAML">Preferences | Editor | Code Style | YAML</a>.

## Unsupported formats

Request support at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

### Arrays are not supported

{% highlight yaml %}
key:
    - 'One value'
    - 'Arrays are NOT supported'
{% endhighlight %}

### Translations nested after a different key are not supported

Nested translations are **only** supported if they start from the **root**. In the sample below, the translations are
after a different key which is not supported.

{% highlight yaml %}
metadata:
    non_translation_key: true
translations:
    key: 'This is NOT supported, because i18n Ally calls it like `translations.key` while the app would use just `key`'
{% endhighlight %}

It is still possible to extract strings into complex structures of YAML and examples like the above, but it is **not supported**, because some frameworks parse
language files differently, e.g., [Ruby on Rails i18n API](https://guides.rubyonrails.org/i18n.html) with the locale as the root key.

### Complex structures within a key are not supported

{% highlight yaml %}
other_key:
    translation: 'Complex structure per key is NOT supported'
    notes: ''
{% endhighlight %}

