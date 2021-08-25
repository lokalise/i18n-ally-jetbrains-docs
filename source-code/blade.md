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

<ul>
{% for item in site.data.sidebar_items %}
    {% if item.path == 'features' and item.sub_paths %}
        {% for feature in item.sub_paths %}
            {% if feature.sources contains 'blade' %}
                <li>
                    <a href="{{ site.baseurl }}/{{ item.path }}/{{ feature.path }}.html">{{ feature.title }}</a>
                </li>
            {% endif %}
        {% endfor %}
    {% endif %}
{% endfor %}
</ul>

# Configure Blade sources

The plugin should automatically configure itself for Laravel projects, but adjustments could be needed for custom setup.

![Blade Source Code Preferences screenshot](assets/blade-preferences.png){:width="629px" height="auto"}

{% include_relative _includes/preferences_scope.md %}

{% include_relative _includes/preferences_inline_tags.md %}

{% include_relative _includes/preferences_translatable_attribute_names.md %}

{% include_relative _includes/preferences_function_name.md %}

{% include_relative _includes/preferences_arguments_template.md %}

# Supported language constructs

All strings inside tags and translatable attributes are checked.

# What's not supported

* Extracting strings from blade expressions, like {% raw %}`{{ someFunc('Hello world!') }}`{% endraw %}
* Strings from blade directives, like {% raw %}`@if ($foo === 'Hello world!')`{% endraw %}
* Renaming key names from language files

# What strings are skipped

* Pure HTML markup with blade expressions, like {% raw %}`<p class="mt0"><b>{{ someFunc('someParam') }}</b></p>`{% endraw %}.
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
