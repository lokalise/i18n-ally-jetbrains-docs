---
layout: docs
---

<h1>PHP views internationalization</h1>

{% highlight html %}{% raw %}
<p>Hello world!</p>
⬇
<p><?php _('Hello world') ?></p>
<!-- messages.po: msgid "Hello world" -->

<p>Hello world, <?php $user ?>!</p>
⬇
<p><?php sprintf(_('Hello world, %1$s!'), $user) ?></p>
<!-- messages.po: msgid "Hello world, %1$s!" -->
{% endraw %}{% endhighlight %}


# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='phphtml'
%}


# Configure hardcoded strings extraction from PHP views

The plugin should automatically configure itself for CodeIgniter, CakePHP, Zend and Laminas projects, but adjustments could be needed for custom setup and other frameworks.

![PHP Source Code Preferences screenshot](assets/html-with-php-preferences.png){:width="721px" height="auto"}

{% 
  include_relative _includes/preferences_scope.md
  file_extension='.php'
%}
Important! This source would only looks for hardcoded strings within HTML and outside of PHP snippets. To extract hardcoded strings from PHP snippets you have to configure [a PHP source]({{ 'php' | global_asset_url }}.html).


{% capture preferences_inline_tags_sample %}

{% highlight php %}{% raw %}
Three
<p>different</p>
keys.
<!-- ⬇ will be extracted into -->
<?php _('Three') ?>
<p><?php _('different') ?></p>
<?php _('keys.') ?>


One <b>inclusive</b> key.
<!-- ⬇ will be extracted into -->
<?php _('One <b>inclusive</b> key.') ?>
{% endraw %}{% endhighlight %}

{% endcapture %}
{%
  include_relative _includes/preferences_inline_tags.md
  sample=preferences_inline_tags_sample
%}


{% include_relative _includes/preferences_translatable_attribute_names.md %}


{% capture preferences_function_name_sample %}
It could be any callable PHP structure that wraps arguments into parentheses:

* function: `_(…)`, `__(…)`,
* object method: `$this->trans(…)`, `$translator->trans(…)`,
* static method: `\Yii:app(…)`.
{% endcapture %}
{% 
  include_relative _includes/preferences_function_name.md
  sample=preferences_function_name_sample
%}


{% capture preferences_arguments_template_recommended_settings %}
Recommended value for gettext, CodeIgniter, CakePHP and Zend/Laminas: `'%key%'` with `sprintf` mode enabled.<br>
Recommended value for Yii v2: `'%namespace%', '%key%', %map%`.<br>
Recommended value for Yii v3: `'%key%', %map%, '%namespace%'`.
{% endcapture %}
{%
  include_relative _includes/preferences_arguments_template.md
  recommended_settings=preferences_arguments_template_recommended_settings
  example_map="<?php echo trans('key', ['foo' => $foo, 'bar' => $bar]) ?>"
  example_list="<?php echo trans('key', [$foo, $bar]) ?>"
  example_varargs="<?php echo trans('key', $foo, $bar) ?>"
%}


## Supported language constructs

i18n Ally finds hardcoded user-facing strings are only detected inside HTML tags.

Placeholder names are determined automatically.


## What's not supported

* Using an array for message retrieval (common approach in PHP legacy codebases, for example `$lang['key']`).


## What strings are skipped

* Pure HTML markup with PHP snippets expressions, like `<a href="<?php route('home')?>"><img …></a>`.
* All attributes except ones listed in "Translatable attribute names" preference.
* Content inside `script` and `pre` tags.
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.


{% capture preferences_branching_best_practice_initial_string %}
{% highlight html %}{% raw %}
Webhook <strong><?php echo $success ? 'succeeded' : 'failed' ?></strong>.
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_first_step %}
{% highlight html %}{% raw %}
<?php if ($success) { ?>
    Webhook <strong>succeeded</strong>.
<?php } else { ?>
    Webhook <strong>failed</strong>.
<?php } ?>
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_second_step %}
{% highlight php %}{% raw %}
<?php
    if ($success) {
        echo _('Webhook <strong>succeeded</strong>.')
    } else {
        echo _('Webhook <strong>failed</strong>.')
    }
?>
{% endraw %}{% endhighlight %}
{% endcapture %}
{% 
  include_relative _includes/preferences_branching_best_practice.md
  initial_string=preferences_branching_best_practice_initial_string
  first_step=preferences_branching_best_practice_first_step
  second_step=preferences_branching_best_practice_second_step
%}