---
layout: docs
title: PHP internationalization
---

<h1>{{ page.title }}</h1>

{% highlight php %}{% raw %}
<?php
$foo = 'Hello world';
⬇
$foo = trans('hello_world');
// messages.php: 'hello_world' => 'Hello world'

$foo = "Hello world, $user!";
$foo = 'Hello world, ' . $user . '!';
$foo = sprintf('Hello world, %s!', $user);
⬇
$foo = trans('hello_world', ['user' => $user]);
// messages.php: 'hello_world' => 'Hello world, %user%!'
{% endraw %}{% endhighlight %}


# Features supported

{% 
  include_relative _includes/features_supported.html
  source_name='php'
%}


# Configure hardcoded strings extraction from PHP source

The plugin should automatically configure itself for Laravel, Symfony, CodeIgniter, CakePHP, Zend and Laminas projects, but adjustments could be needed for custom setup and other frameworks.

![PHP Source Code Preferences screenshot](assets/php-preferences.png){:width="721px" height="auto"}


{% 
  include_relative _includes/preferences_scope.md
  file_extension='.php'
%}
Important! This source would only looks for hardcoded strings within PHP source codeHTML and outside of PHP snippets. To extract hardcoded strings from HTML tags configure [an HTML with PHP source]({{ 'phphtml' | global_asset_url }}.html).

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
  map_replaced_with="an associative short syntax array"
  example_map="trans('key', ['foo' => $foo, 'bar' => $bar])"
  example_list="trans('key', [$foo, $bar])"
  example_varargs="trans('key', $foo, $bar)"
%}


## Supported language constructs

i18n Ally finds hardcoded user-facing strings within callable context and supports multiple cases:

{% highlight php %}
"Welcome, John"     // trans('welcome') simple strings
"Welcome, {$name}"  // trans('welcome', ['name' => $name]) interpolated strings
"Welcome, " . $name // trans('welcome', ['name' => $name]) concatenated strings
sprintf("Welcome, %s", $name) // trans('welcome', ['name' => $name]) // sprintf templates
{% endhighlight %}

Placeholder names are determined automatically.


## What's not supported

* Using an array for message retrieval (common approach in PHP legacy codebases, for example `$lang['key']`).


## What strings are skipped

* All arguments passed to functions or methods (except constructors),
* HEREDOC and NOWDOC strings,
* Array keys,
* Class property definitions,
* Default paramenter values,
* Constant name specified in `define` first argument,
* Strings assigned to constants,
* Default argument values
* Full SQL queries and most of SQL parts,
* Strings that looks like code: without letters, multiple words without spaces or `camelCased` ones.


# Limitation: dependencies should be wired manually

When extracting a translation you should still wire dependencies manually if they are not global like [Laravel's helper `__(…)`](https://laravel.com/docs/8.x/localization#retrieving-translation-strings) or [static method in Yii 2.0 `\Yii::t(…)`](https://www.yiiframework.com/doc/guide/2.0/en/tutorial-i18n#1-wrap-a-text-message).

Given a Symfony controller with configured autowiring:

{% highlight php %}
class BlogController extends BaseController
{
    public function commentNew(Request $request)
    {
        $message = 'Comment saved!';
    }
}
{% endhighlight %}

i18n Ally would help to extract a hardcoded string:

{% highlight php %}
class BlogController extends BaseController
{
    public function commentNew(Request $request)
    {
        $message = $translator->translate('comment_saved'); # CHANGED by i18n Ally
    }
}
{% endhighlight %}

Then developer should manually specify dependencies:
{% highlight php %}
use Symfony\Contracts\Translation\TranslatorInterface; # CHANGED manually

class BlogController extends BaseController
{
    public function commentNew(Request $request, TranslatorInterface $translator) # CHANGED manually
    {
        $message = $translator->translate('Comment saved!');
    }
}
{% endhighlight %}


{% capture preferences_branching_best_practice_initial_string %}
{% highlight php %}{% raw %}
$foo = 'Webhook <strong>' . ($success ? 'succeeded' : 'failed') . '</strong>.';
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_first_step %}
{% highlight php %}{% raw %}
if ($success) {
    $foo = 'Webhook <strong>succeeded</strong>.';
} else {
    $foo = 'Webhook <strong>failed</strong>.';
}
{% endraw %}{% endhighlight %}
{% endcapture %}

{% capture preferences_branching_best_practice_second_step %}
{% highlight php %}{% raw %}
if ($success) {
    $foo = trans('webhook_succeeded');
} else {
    $foo = trans('webhook_failed');
}
{% endraw %}{% endhighlight %}
{% endcapture %}
{% 
  include_relative _includes/preferences_branching_best_practice.md
  initial_string=preferences_branching_best_practice_initial_string
  first_step=preferences_branching_best_practice_first_step
  second_step=preferences_branching_best_practice_second_step
%}