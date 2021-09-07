---
layout: docs
title: PO and POT for localization
---

<h1>{{ page.title }}</h1>

## PO file format basics are supported

{% highlight po %}
msgid "key"
msgstr "Value"
...
msgid ""
"Keys spread "
"across multiple lines"
msgstr "Keys which are spread across multiple lines are also supported"
...
msgid "extracted"
msgstr ""
...
msgid "multiline"
msgstr "An explicitly multiline strings\nwill be extracted like this."
{% endhighlight %}

## POT files would have empty `msgstr`
{% highlight po %}
msgid "Extracted string will be added like this"
msgstr ""
...
msgid ""
"Keys spread "
"across multiple lines"
msgstr ""
...
msgid "An explicitly multiline strings\nwill be extracted like this."
msgstr ""
{% endhighlight %}


## Indentation

No formatting options are available for PO files.

## Unsupported formats

Request support at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

### Nested keys are not supported

{% highlight po %}
msgid "some_key.nested_key"
msgstr "Nested keys are not supported by the file format"
{% endhighlight %}

### References are not added during extraction nested under some key are not supported

{% highlight po %}
#: public/i18n.php:13
msgid "key"
msgstr "References to source string won't be added during extraction"
{% endhighlight %}


### Compilation to MO files is not supported

PO files should be compiled into MO files with other tools, like [GNU `msgfmt` utility](https://www.gnu.org/software/gettext/manual/html_node/msgfmt-Invocation.html):

{% highlight shell %}
msgfmt messages.po -o messages.mo
{% endhighlight %}