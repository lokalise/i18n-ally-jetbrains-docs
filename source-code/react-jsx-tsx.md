---
layout: docs
title: React (JSX/TSX) internationalization
---

<h1>{{ page.title }}</h1>

<p><b>Important!</b> Always configure both Ract and <a href="js-and-ts.html">plain JavaScript sources</a> together.</p>

{% highlight html %}{% raw %}
<p>Hello world!</p>
⬇
<p>{t('helloWorld')}</p>
<!-- locales/en.js: helloWorld: 'Hello world!' -->

<p>Hello, {user}!</p>
⬇
<p>{t('hello', {user: user})}</p>
<!-- locales/en.js: helloWorld: 'Hello, {{user}}!' -->
{% endraw %}{% endhighlight %}


# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='react-jsx-tsx'
%}


# Configure hardcoded strings extraction from React (JSX/TSX) templates

The plugin should automatically configure itself for project with dependencies on `react-i18next`, but adjustments could be needed for custom setup.

![Ract Source Code Preferences screenshot](assets/react-jsx-tsx.png){:width="629px" height="auto"}

{% 
  include_relative _includes/preferences_scope.md
  file_extension='.js/.jsx/.tsx'
%}


## Inline tags

Extraction of strings with a special treatment of inline tags is not currently supported.


{% include_relative _includes/preferences_translatable_attribute_names.md %}


{% capture preferences_arguments_template_recommended_settings %}
Recommended value for `react-i18next` packages: `t('%namespace%:%key%', %map%)`.
{% endcapture %}
{%
  include_relative _includes/preferences_replacement_template.md
  recommended_settings=preferences_arguments_template_recommended_settings
  map_replaced_with="an object"
  example_map="t('namespace:key', {foo: fooVariable, bar: barVariable})"
  example_list="t('namespace:key', [fooVariable, barVariable])"
  example_varargs="t('namespace:key', fooVariable, barVariable)"
%}


# Supported language constructs

All strings inside tags and translatable attributes are checked.


# What strings are skipped

* All attributes except ones listed in "Translatable attribute names" preference.
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.

{% capture preferences_branching_best_practice_initial_string %}
{% highlight html %}{% raw %}
return <>Webhook {isSuccess ? 'succeeded' : 'failed'}.</>;
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_first_step %}
{% highlight html %}{% raw %}
return isSuccess
  ? return <>Webhook succeeded.</>
  : return <>Webhook failed.</>;
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_second_step %}
{% highlight html %}{% raw %}
return isSuccess
  ? return <>{t('webhookSucceeded')}</>
  : return <>{t('webhookFailed')}</>;
{% endraw %}{% endhighlight %}
{% endcapture %}
{% 
  include_relative _includes/preferences_branching_best_practice.md
  initial_string=preferences_branching_best_practice_initial_string
  first_step=preferences_branching_best_practice_first_step
  second_step=preferences_branching_best_practice_second_step
%}