---
layout: docs
---

# PO language file format

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
msgstr "Extracted string will be added like this"
...
msgid "multiline"
msgstr "An explicitly multiline strings\nwill be extracted like this."
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


### Creation of POT files and compilation to MO files is not supported

Plugin supports extraction into a PO file for source languages.

Other parts of an advanced gettext workflow are not supported:
* Strings are extracted into PO and not POT file,
* PO file compilation into MO files is not supported.
