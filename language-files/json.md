---
layout: docs
title: JSON for localization
---

<h1>{{ page.title }}</h1>

## Key/value is the only supported format

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

## Indentation

Configure formatting at the IDE level in <a href="phpstorm://settings?name=Editor--Code+Style--JSON">Preferences | Editor | Code Style | JSON</a>.

## Unsupported formats

Request support at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

### Arrays are not supported

{% highlight json %}
{
    "key:": [
        "Arrays are NOT supported"
    ]
}
{% endhighlight %}

### Translations nested under some key are not supported

{% highlight json %}
{
    "some_metadata": {
        ...
    },
    "translations": {
        "key": "Key/values nested under some key are NOT supported"
    }
}
{% endhighlight %}

### Nested keys are not supported

{% highlight json %}
{
    "some_key": {
        "nested_key": "Nested keys are NOT supported"
    }
}
{% endhighlight %}

### Structured JSON is not supported

{% highlight json %}
{
    "other_key": {
        "translation": "Complex structure per key is NOT supported",
        "notes": ""
    }
}
{% endhighlight %}
