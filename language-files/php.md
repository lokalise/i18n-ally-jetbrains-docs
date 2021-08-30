---
layout: docs
---

# PHP language file format

## Array definitions are supported

### Returning an array is supported

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

### Array assignment is supported
{% highlight php %}
<?php

$lang = [
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

## Indentation

Configure formatting at the IDE level in <a href="phpstorm://settings?name=Editor--Code+Style--PHP">Preferences | Editor | Code Style | PHP</a>.

## Unsupported formats

Request support at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

### Appending to an array is not supported

{% highlight php %}
<?php

$lang = [];
$lang['key'] = 'Value';
$lang['another_key'] = 'Appending to an array is not supported';
{% endhighlight %}

### Only the latest array definition is supported

{% highlight php %}
$first = [
    'key' => 'This array definition will be ignored',
];

$latest = [
    'another_key' => 'Only the latest array definition is supported',
];
{% endhighlight %}

### Translations nested after a different key are not supported

Nested translations are **only** supported if they start from the **root**. In the sample below, the translations are 
after a different key which is not supported.

{% highlight php %}
<?php

return [
    'metadata' => [
        'non_translation_key' => true,
    ],
    'translations' => [
        'key' => 'This is NOT supported, because i18n Ally calls it like `translations.key` while the app would use just `key`',
    ],
];
{% endhighlight %}

### Complex structures within a key are not supported

{% highlight php %}
<?php

return [
    'key' => [
        'translation' => 'Complex structure per key is NOT supported',
        'notes' => '',
    ],
];
{% endhighlight %}
