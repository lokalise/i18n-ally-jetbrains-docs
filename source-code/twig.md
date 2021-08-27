---
layout: docs
---


<h1>Twig templates internationalization</h1>

{% highlight html %}{% raw %}
<p>Hello world!</p>
⬇
<p>{{ 'hello_world'|trans }}</p>
<!-- translations/messages.en.yaml: hello_world: 'Hello world!' -->

<p>Hello world, {{ user }}!</p>
⬇
<p>{{ 'hello_world'|trans({'user': user}) }}</p>
<!-- translations/messages.en.yaml: hello_world: 'Hello world, {user}!' -->

<p>Hello <b>world</b>!</p>
⬇
<p>{{ 'hello_world'|trans|raw }}</p>
<!-- translations/messages.en.yaml: hello_world: 'Hello <b>world</b>!' -->
{% endraw %}{% endhighlight %}


<h3>Table of contents</h3>
* TOC
{:toc}

# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='twig'
%}

# Configure hardcoded strings extraction from Twig templates

The plugin should automatically configure itself for Symfony projects, but adjustments could be needed for custom setup and other frameworks.

![Twig Source Code Preferences screenshot](assets/twig-preferences.png){:width="629px" height="auto"}

{% 
  include_relative _includes/preferences_scope.md
  file_extension='.twig'
%}


{% capture preferences_inline_tags_sample %}

{% highlight html %}{% raw %}
Three
<p>different</p>
keys.
<!-- ⬇ will be extracted into -->
{{ 'three'|trans }}
<p>{{ 'different'|trans }}</p>
{{ 'keys'|trans }}


One <b>inclusive</b> keys.
<!-- ⬇ will be extracted into -->
{{ 'one_inclusive_key'|trans|raw }}
{% endraw %}{% endhighlight %}

Notice the `raw` filter appended to the key that contains inline tags. i18n Ally adds it automatically to ensure current rendering of the content.

{% endcapture %}
{%
  include_relative _includes/preferences_inline_tags.md
  sample=preferences_inline_tags_sample
%}


{% include_relative _includes/preferences_translatable_attribute_names.md %}


## Filter name

Filter name to use for extraction is the default one in Symfony framework: `trans` would become {% raw %}`'key'|trans`{% endraw %}.

If you have a custom function or an array for fetching translations you [create a custom filter](https://twig.symfony.com/doc/3.x/advanced.html#filters):

{% highlight php %}
$filter = new \Twig\TwigFilter('translate', function ($key, $domain = 'messages') {
    textdomain($domain);
    return gettext($key);
});
{% endhighlight %}


{% capture preferences_arguments_template_recommended_settings %}
Recommended value for Symfony 3+: `'%key%', %map%, '%namespace%'`<br>
with "Skip default namespace" checkbox set to `true`.
{% endcapture %}
{%
  include_relative _includes/preferences_arguments_template.md
  recommended_settings=preferences_arguments_template_recommended_settings
  key_note=' (not available for Twig)'
  example_map="{{ 'key'|trans({'foo': foo, 'bar': bar}, 'namespace') }}"
  example_list="{{ 'key'|trans([foo, bar], 'namespace') }}"
  example_varargs="{{ 'key'|trans(foo, bar, 'namespace') }}"
%}


## Supported language constructs

All strings inside tags and translatable attributes are checked.


## What's not supported

* Strings inside twig expressions, like {% raw %}`{% set var = 'Hello!' %}`{% endraw %}
* Extraction with function, like {% raw %}`{{ trans('key') %}`{% endraw %}, or array, like {% raw %}`{{ lang.key %}`{% endraw %}
* Extraction with `trans` blocks


## What strings are skipped

* Pure HTML markup with Twig expressions, like `<a href="{{ route('home') }}"><img …></a>`.
* All attributes except ones listed in "Translatable attribute names" preference.
* Content inside `trans` block as it's assumed to be already extracted.
* Content inside `verbatim` tag.
* Content inside `script` and `pre` tags.
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.


# Best practice: dealing with branching in messages

It's common to have a small simple branches in the Twig templates for presentation purposes:
{% highlight twig %}{% raw %}
Webhook <strong>{% if success %}succeeded{% else %}failed{% endif %}</strong>.
{% endraw %}{% endhighlight %}

The best practice it to separate this message into two different ones so translators would be a full context and would be able to adjust word order according the target language grammar.

**1st step:** manually extract the condition out of the message to get two messages without condition
{% highlight twig %}{% raw %}
{% if success %}
    Webhook <strong>succeeded</strong>.
{% else %}
    Webhook <strong>failed</strong>.
{% endif %}
{% endraw %}{% endhighlight %}


**2nd step:** replace simple messages with i18n Ally
{% highlight twig %}{% raw %}
{% if success %}
  {{ 'webhook_succeeded'|trans|raw }}
{% else %}
  {{ 'webhook_failed'|trans|raw }}
{% endif %}
{% endraw %}{% endhighlight %}
