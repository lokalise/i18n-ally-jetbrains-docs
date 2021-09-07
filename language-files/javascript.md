---
layout: docs
title: JavaScript/TypeScript objects for localization
---

<h1>{{ page.title }}</h1>

## ES6 and CommonJS modules are supported

{% highlight js %}
export default {
    key: 'Value',
    anotherKey: 'Another value',
    ...
    extracted: 'Extracted string will be added like this',
    ...
    some_key: {
        nested_key: 'Nested keys are also supported',
    },
    ...
    multiline: 'An explicitly multiline strings\nwill be extracted like this.'
}

// module.exports = {} is also supported
{% endhighlight %}

## Indentation

Configure formatting at the IDE level in <a href="phpstorm://settings?name=Editor--Code+Style--JSON">Preferences | Editor | Code Style | JSON</a>.

## Unsupported formats

Request support at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

### Translations nested under some key are not supported

{% highlight js %}
{
    some_metadata: {
        'nonTranslationKey: true
    },
    translations: {
        key: 'This is NOT supported, because i18n Ally calls it like `translations.key` while the app would use just `key`'
    }
}
{% endhighlight %}

### Complex key value is not supported

{% highlight json %}
{
    "other_key": {
        "translation": "Complex structure per key is NOT supported",
        "notes": ""
    }
}
{% endhighlight %}
