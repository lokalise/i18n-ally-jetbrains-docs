---
layout: docs
---

# Configure source code

{{ page.url }}

In order for the plugin to work as expected, there is a need to configure the source and sink pairs, for frameworks, like
Laravel/Symfony the Plug and Play feature automatically creates profiles and scopes for the project.

Configuring scopes is not always necessary, if there is only one source-sink pair then a project wide scope would suffice, 
but for multi-source and/or multi-sink projects it is essential, so that the plugin only detects/displays what's in scope.
