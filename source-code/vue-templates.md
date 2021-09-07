---
layout: docs
title: Vue templates internationalization
---

<h1>{{ page.title }}</h1>

{% highlight html %}{% raw %}
<p>Hello world!</p>
⬇
<p>{{ $t('helloWorld') }}</p>
<!-- locales/en.js: helloWorld: 'Hello world!' -->

<p>Hello, {{ user }}!</p>
⬇
<p>{{ $t('hello', {user: user}) }}</p>
<!-- locales/en.js: helloWorld: 'Hello, {user}!' -->

<p>Hello, {{ user }}!</p>
⬇
<p>{{ $t('hello', [user]) }}</p>
<!-- locales/en.js: helloWorld: 'Hello, {0}!' -->
{% endraw %}{% endhighlight %}


# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='vue-templates'
%}


# Configure hardcoded strings extraction from Vue templates

The plugin should automatically configure itself for project with dependencies on `vue-i18n` and `nuxt-i18n`, but adjustments could be needed for custom setup.

![Blade Source Code Preferences screenshot](assets/blade-preferences.png){:width="629px" height="auto"}

{% 
  include_relative _includes/preferences_scope.md
  file_extension='.vue'
%}


## Inline tags

Extraction of strings with a special treatment of inline tags is not currently supported.


{% include_relative _includes/preferences_translatable_attribute_names.md %}


{% capture preferences_function_name_sample %}
By default it's `$t` from `vue-i18n` package.
{% endcapture %}
{% 
  include_relative _includes/preferences_function_name.md
  sample=preferences_function_name_sample
%}


{% capture preferences_arguments_template_recommended_settings %}
Recommended value for `vue-i18n` and `nuxt-i18n` packages: `'%key%', %map%`.
{% endcapture %}
{%
  include_relative _includes/preferences_arguments_template.md
  recommended_settings=preferences_arguments_template_recommended_settings
  example_map="$t('key', {foo: fooVariable, bar: barVariable})"
  example_list="$t('key', [fooVariable, barVariable])"
  example_varargs="$t('key', fooVariable, barVariable)"
%}


# Supported language constructs

All strings inside tags and translatable attributes are checked.


# What's not supported

* Extracting strings from expressions, like {% raw %}`{{ someFunc('Hello world!') }}`{% endraw %}
* Renaming key names from language files


# What strings are skipped

* All attributes except ones listed in "Translatable attribute names" preference.
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.

{% capture preferences_branching_best_practice_initial_string %}
{% highlight html %}{% raw %}
Webhook {{ isSuccess ? 'succeeded' : 'failed' }}.
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_first_step %}
{% highlight html %}{% raw %}
<template v-if="isSuccess">Webhook succeeded.</template>
<template v-else>Webhook failed.</template>
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_second_step %}
{% highlight html %}{% raw %}
<template v-if="isSuccess">{{ $t('webhookSucceeded') }}</template>
<template v-else>{{ $t('webhookFailed') }}</template>
{% endraw %}{% endhighlight %}
{% endcapture %}
{% 
  include_relative _includes/preferences_branching_best_practice.md
  initial_string=preferences_branching_best_practice_initial_string
  first_step=preferences_branching_best_practice_first_step
  second_step=preferences_branching_best_practice_second_step
%}