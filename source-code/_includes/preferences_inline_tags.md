## Inline tags

List of tags that would be taken inside translations, like `a`, `strong` or `span`. Filled by default with
[all "inline" tags listed on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#elements).

An example of extraction result difference between block and inline tags:

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
{{ trans('app.oneInclusiveKey') }}
{% endraw %}{% endhighlight %}

You can add custom tags, like `icon`, by appending a new tag to the comma-separated list.
