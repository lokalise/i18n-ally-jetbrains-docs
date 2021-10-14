---
layout: docs
title: JavaScript/TypeScript internationalization
---

<h1>{{ page.title }}</h1>

{% highlight js %}{% raw %}
const foo = 'Hello world!';
⬇
const foo = $t('helloWorld');
// locales/en.js: 'helloWorld' => 'Hello world!'

const foo = `Welcome, ${name}`;
const foo = 'Welcome, ' + name;
⬇
const foo = $t('welcome', {name: name});
// locales/en.js: 'welcome' => 'Welcome, {user}!'
{% endraw %}{% endhighlight %}


# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='js-and-ts'
%}


# Configure hardcoded strings extraction from PHP source

The plugin should automatically configure itself for project with dependencies on `vue-i18n` and `nuxt-i18n`, but adjustments could be needed for custom setup.

![PHP Source Code Preferences screenshot](assets/php-preferences.png){:width="721px" height="auto"}


{% 
  include_relative _includes/preferences_scope.md
  file_extension='.js/.ts'
%}


{% capture preferences_function_name_sample %}
It could be any callable JavaScript structure that wraps arguments into parentheses:

* function: `$t(…)`, `__(…)`,
* object method: `this.$t(…)`, `parent.$t(…)`.
{% endcapture %}
{% capture preferences_arguments_template_recommended_settings %}
Recommended value for `vue-i18n` and `nuxt-i18n` packages: `$t('%key%', %map%)`.
{% endcapture %}
{%
  include_relative _includes/preferences_replacement_template.md
  function_name_sample=preferences_function_name_sample
  recommended_settings=preferences_arguments_template_recommended_settings
  map_replaced_with="an object"
  example_map="$t('key', {foo: fooVariable, bar: barVariable})"
  example_list="$t('key', [fooVariable, barVariable])"
  example_varargs="$t('key', fooVariable, barVariable)"
%}


## Supported language constructs

i18n Ally finds hardcoded user-facing strings and template literals:

{% highlight php %}
'Welcome, John'     // $t('welcome') simple strings
`Welcome, {name}`  // $t('welcome', {name: name}) template literals
'Welcome, ' + name // $t('welcome', {name: name}) concatenated strings
{% endhighlight %}

Placeholder names are determined automatically.


## What strings are skipped

* All arguments passed to functions or methods (except constructors), but avaialbe to unignore case by case
* Array keys,
* Indexed array,
* Class property definitions,
* Default parameter values,
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.


{% capture preferences_branching_best_practice_initial_string %}
{% highlight js %}{% raw %}
const foo = `Webhook <strong>${isSuccess ? 'succeeded' : 'failed'}</strong>.`;
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_first_step %}
{% highlight js %}{% raw %}
const foo = isSuccess
  ? 'Webhook <strong>succeeded</strong>.'
  : 'Webhook <strong>failed</strong>.';
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_second_step %}
{% highlight js %}{% raw %}
const foo = isSuccess
  ? $t('webhookSucceeded')
  : $t('webhookFailed');
{% endraw %}{% endhighlight %}
{% endcapture %}
{% 
  include_relative _includes/preferences_branching_best_practice.md
  initial_string=preferences_branching_best_practice_initial_string
  first_step=preferences_branching_best_practice_first_step
  second_step=preferences_branching_best_practice_second_step
%}