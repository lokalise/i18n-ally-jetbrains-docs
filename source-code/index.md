---
layout: docs
---

# Internationalize source code

In order for the plugin to work as expected, there is a need to configure the source and sink pairs, for popular frameworks, like
Laravel/Symfony the plugin would automatically create profiles and scopes for the project useful to get the first results.

Configuring scopes is not always necessary, if there is only one source-sink pair then a project wide scope would suffice, 
but for multi-source and/or multi-sink projects it is essential, so that the plugin only detects/displays what's in scope.

## Supported source code

<ul>
{% for item in site.data.sidebar_items %}
    {% if item.path == 'source-code' and item.sub_paths %}
        {% for source in item.sub_paths %}
            <li>
                <a href="{{ source.path | global_asset_url }}.html">{{ source.title }}</a>
            </li>
        {% endfor %}
    {% endif %}
{% endfor %}
</ul>