
## Arguments template

Recommended value for Laravel v5.0+: `'%namespace%.%key%', %map%`

### `%key%`

Short key or a natural language string that defines a translation.

### `%namespace%`

Namespace (called 'domain' in Symfony) usually means a part of language file path from where translations would be searched for. The default 
namespace is usually `messages`, but could be changed by specifying different first namespace in 
[the Symfony language file](/configure-language-files/symfony).

### `%map%`

If there are no variables in the string, then nothing would be added.

Map will be replaced with an associative short syntax array if there are any placeholders detected: 
`trans('namespace.key', ['foo' => $foo, 'bar' => $bar])`.

Placeholder names will be determined automatically based on a respective variable, function or method name.

In language files placeholder syntax will be determined based on the Placeholder format setting of the language file.

### `%list%`

If there are no variables in the string, then nothing would be added.

List will be replaced with an indexed short syntax array if there are any placeholders detected: 
`trans('namespace.key', [$foo, $bar])`.

In language files the ordered placeholder syntax `{0}, {1}` will be enforced.

### `%varargs%`

If there are no variables in the string, then nothing would be added.

Varargs will be replaced with placeholder passed directly to the translation function if there are any placeholders detected: 
`trans('namespace.key', $foo, $bar)`.

In language files the ordered placeholder syntax `{0}, {1}` will be enforced.