---
layout: docs
title: Internationalize source code
---

<h1>{{ page.title }}</h1>

In order for the plugin to work as expected, there is a need to configure the source and sink pairs, for popular frameworks, like
Laravel/Symfony the plugin would automatically create profiles and scopes for the project useful to get the first results.

Configuring scopes is not always necessary, if there is only one source-sink pair then a project wide scope would suffice, 
but for multi-source and/or multi-sink projects it is essential, so that the plugin only detects/displays what's in scope.

## [React (JSX/TSX)]({{ 'react-jsx-tsx' | global_asset_url }}.html)

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


## [Vue templates]({{ 'vue-templates' | global_asset_url }}.html)

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

## [JavaScript and TypeScript]({{ 'js-and-ts' | global_asset_url }}.html)

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

## [Blade templates]({{ 'blade' | global_asset_url }}.html)

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


## [Twig templates]({{ 'twig' | global_asset_url }}.html)

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


## [PHP views with HTML]({{ 'phphtml' | global_asset_url }}.html)

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


## [PHP source code]({{ 'php' | global_asset_url }}.html)

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