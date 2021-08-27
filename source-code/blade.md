---
layout: docs
---

<h1>Blade templates internationalization</h1>

{% highlight html %}{% raw %}
<p>Hello world!</p>
⬇
<p>{{ trans('app.helloWorld') }}</p>
<!-- resources/lang/en/messages.php: 'helloWorld' => 'Hello world!' -->

<p>Hello world, {{ $user }}!</p>
⬇
<p>{{ trans('app.helloWorld', ['user' => $user]) }}</p>
<!-- resources/lang/en/messages.php: 'helloWorld' => 'Hello world, :user!' -->

<p>Hello <b>world</b>!</p>
⬇
<p>{!! trans('app.helloWorld') !!}</p>
<!-- resources/lang/en/messages.php: 'helloWorld' => 'Hello <b>world</b>!' -->
{% endraw %}{% endhighlight %}


<h3>Table of contents</h3>
* TOC
{:toc}

# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='blade'
%}

# Configure hardcoded strings extraction from Blade templates

The plugin should automatically configure itself for Laravel projects, but adjustments could be needed for custom setup.

![Blade Source Code Preferences screenshot](assets/blade-preferences.png){:width="629px" height="auto"}

{% 
  include_relative _includes/preferences_scope.md
  file_extension='.blade.php'
%}


{% capture preferences_inline_tags_sample %}

{% highlight html %}{% raw %}
Three
<p>different</p>
keys.
<!-- ⬇ will be extracted into -->
{{ trans('app.three') }}
<p>{{ trans('app.different') }}</p>
{{ trans('app.keys') }}

One <b>inclusive</b> key.
<!-- ⬇ will be extracted into -->
{!! trans('app.oneInclusiveKey') !!}
{% endraw %}{% endhighlight %}

{% endcapture %}
{%
  include_relative _includes/preferences_inline_tags.md
  sample=preferences_inline_tags_sample
%}


{% include_relative _includes/preferences_translatable_attribute_names.md %}


{% capture preferences_function_name_sample %}
By default it's `trans` from Laravel framework.
{% endcapture %}
{% 
  include_relative _includes/preferences_function_name.md
  sample=preferences_function_name_sample
%}


{% capture preferences_arguments_template_recommended_settings %}
Recommended value for Laravel v5.0+: `'%namespace%.%key%', %map%`<br>
with "Skip default namespace" checkbox set to `false`.
{% endcapture %}
{%
  include_relative _includes/preferences_arguments_template.md
  recommended_settings=preferences_arguments_template_recommended_settings
  example_map="trans('namespace.key', ['foo' => $foo, 'bar' => $bar])"
  example_list="trans('namespace.key', [$foo, $bar])"
  example_varargs="trans('namespace.key', $foo, $bar)"
%}

# Supported language constructs

All strings inside tags and translatable attributes are checked.

# What's not supported

* Extracting strings from blade expressions, like {% raw %}`{{ someFunc('Hello world!') }}`{% endraw %}
* Strings from blade directives, like {% raw %}`@if ($foo === 'Hello world!')`{% endraw %}
* Renaming key names from language files

# What strings are skipped

* Pure HTML markup with blade expressions, like {% raw %}`<a href="{{ route('home') }}"><img …></a>`{% endraw %}.
* All attributes except ones listed in "Translatable attribute names" preference.
* Content inside `trans` block as it's assumed to be already extracted.
* Content inside `verbatim` directive.
* Content inside `script` and `pre` tags.
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.
* Strings inside expressions and directives, like {% raw %}`@auth('Hello world!')`{% endraw %}

# Best practice: dealing with branching in messages

It's common to have small and simple branches in blade templates for presentation purposes:
{% highlight html %}{% raw %}
Webhook <strong>{{ $success ? 'succeeded' : 'failed' }}</strong>.
{% endraw %}{% endhighlight %}

The best practice it to separate this message into two different ones so translators would be a full context and would 
be able to adjust word order according the target language grammar.

**1st step:** manually extract the condition out of the message to get two messages without condition
{% highlight html %}{% raw %}
@if ($success)
    Webhook <strong>succeeded</strong>.
@else
    Webhook <strong>failed</strong>.
@endif
{% endraw %}{% endhighlight %}


**2nd step:** replace simple messages with i18n Ally
{% highlight html %}{% raw %}
@if ($success)
    {!! trans('app.webhookSucceeded') !!}
@else
    {!! trans('app.webhookFailed') !!}
@endif
{% endraw %}{% endhighlight %}
