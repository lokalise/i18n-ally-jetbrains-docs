---
layout: docs
---

<h1>XLIFF v1 language file format</h1>

{% highlight xml %}
<?xml version="1.0"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
<file source-language="en" target-language="en" datatype="plaintext" original="file.ext">
<body>
    <trans-unit id="key">
        <source>key</source>
        <target>Value</target>
    </trans-unit>
    <trans-unit id="cfe9cb61-3c59-47ea-b31d-0f717f3027aa">
        <source>another_key</source>
        <target>Keys are read from `source` tag, so ID could be anything.</target>
    </trans-unit>
    ...
    <trans-unit id="extracted">
        <source>extracted</source>
        <target>Extracted string will be added like this</target>
    </trans-unit>
    ...
    <trans-unit id="extracted_with_tags">
        <source>extracted_with_tags</source>
        <target><![CDATA[String with tags<br> will be added like this]]></target>
    </trans-unit>
</body>
</file>
</xliff>
{% endhighlight %}

## Indentation

Configure formatting at the IDE level in <a href="phpstorm://settings?name=Editor--Code+Style--XML">Preferences | Editor | Code Style | XML</a>.

## Advanced XLIFF features are not supported

Request support for your use case at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

{% highlight xml %}
<?xml version="1.0"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
<file source-language="en" target-language="en" datatype="plaintext" original="file.ext">
<body>
    <trans-unit id='1'>
        <source>Key with note would be available</source>
        <note priority='2'>Note tag is skipped and would be populated in any way</note>
    </trans-unit> 
    ...
    <trans-unit id= "1">
        <source>Key with segmentation would not be recognized</source>
        <seg-source>
            <mrk mtype="seg" mid="1">Key with segmentation</mrk>
            <mrk mtype="seg" mid="2">would not be recognized</mrk>
        </seg-source>
        <target>
            <mrk mtype="seg" mid="1">Key with segmentation</mrk>
            <mrk mtype="seg" mid="2">would not be recognized</mrk>
        </target>
    </trans-unit> 
    ...
    <group merged-trans="yes">
        <trans-unit id="t1">
            <source>Key within group would NOT be recognized</source>
            <target equiv-trans="no">Grouped units are NOT supported</target>
        </trans-unit>
        <trans-unit id="t2">
            <source> Second merged key</source>
            <target equiv-trans="no"/>
        </trans-unit>
    </group>
</body>
</file>
</xliff>
{% endhighlight %}
