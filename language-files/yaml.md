---
layout: docs
---

# YAML language file format

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

### Translations nested under some key are not supported

{% highlight yaml %}
some_metadata:
    ...
translations:
    key: 'Key/values nested under some key are NOT supported'
{% endhighlight %}

### Complex structures within a key are not supported

{% highlight yaml %}
other_key:
    translation: 'JSON with complex structure per key are NOT supported'
    notes: ''
{% endhighlight %}

