# Best practice: dealing with branching in messages

It's common to have small and simple branches in blade templates for presentation purposes:
{{ include.initial_string }}

The best practice it to separate this message into two different ones so translators would have a full context and would 
be able to adjust word order according the target language grammar.

**1st step:** manually extract the condition out of the message to get two messages without condition
{{ include.first_step }}


**2nd step:** replace simple messages with i18n Ally
{{ include.second_step }}
