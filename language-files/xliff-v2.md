---
layout: docs
---

# XLIFF v2 language file format

{% highlight xml %}
<?xml version="1.0"?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0">
<file source-language="en" target-language="en" datatype="plaintext" original="file.ext">
    <unit id="key">
        <segment>
            <source>key</source>
            <target>Value</target>
        </segment>
    </unit>
    <unit id="cfe9cb61-3c59-47ea-b31d-0f717f3027aa">
        <segment>
            <source>another_key</source>
            <target>Keys are read from `source` tag, so ID could be anything.</target>
        </segment>
    </unit>
    ...
    <unit id="extracted">
        <segment>
            <source>extracted</source>
            <target>Extracted string will be added like this</target>
        </segment>
    </unit>
    ...
    <unit id="extracted_with_tags">
        <segment>
            <source>extracted_with_tags</source>
            <target><![CDATA[String with tags<br> will be added like this]]></target>
        </segment>
    </unit>
</file>
</xliff>
{% endhighlight %}

## Indentation

Configure formatting at the IDE level in <a href="phpstorm://settings?name=Editor--Code+Style--XML">Preferences | Editor | Code Style | XML</a>.

## Advanced XLIFF features are not supported

Request support for your use case at <a href="mailto:i18n-ally@lokalise.com">i18n-ally@lokalise.com</a>.

{% highlight xml %}
<xliff xmlns="urn:oasis:names:tc:xliff:document:2.0" version="2.0"
 srcLang="en" trgLang="fr">
<file id="f1">
    <notes>
        <note id="n1">Notes are skipped</note>
    </notes>
    <unit id="u1">
        <my:elem xmlns:my="myNamespaceURI" id="x1">data</my:elem>
        <notes>
            <note id="n1">Notes are skipped</note>
        </notes>
        <segment id="s1">
            <source>
                <pc id="1">
                    Markup within key that's not present in source code is NOT supported.
                    <mrk id="m1" type="term">Term</mrk>
                </pc>
            </source>
            <target>
                <pc id="1">Bonjour le <mrk id="m1" type="term">Monde</mrk> !</pc>
            </target>
        </segment>
    </unit>
    ...
    <unit id="string1">
        <segment id="1">
            <source>Key segmentation is not supported.</source>
        </segment>
    </unit>
    <unit id="string2">
        <segment id="1">
            <source>Second sentence from the same key.</source>
        </segment>
    </unit>
    ...
    <group id="" translate="yes">
        <unit id="grouped">
        <segment>
            <source>Key within group would NOT be recognized</source>
            <target>Grouped units are NOT supported</target>
        </segment>
    </unit>
    </group>
</file>
</xliff>
{% endhighlight %}