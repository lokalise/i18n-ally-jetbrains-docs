## Translatable attribute names

Translatable attributes are also checked for the translatable text:

{% highlight html %}{% raw %}
<img src="…"
     alt="Checked by default"
     title="Checked by default"
     data-content="Requires configuration" />
{% endraw %}{% endhighlight %}

You can add custom attributes, like `data-content`, by appending a new attribute to the comma-separated list.
