
## Arguments template

### `%key%`

Namespace (called 'domain' in Symfony) usually means a part of language file path from where translations would be searched for. The default 
namespace is usually `messages`, but could be changed by specifying different first namespace in 
[the Symfony language file](/configure-language-files/symfony).

### `%namespace%`

Namespace (called 'domain' in Symfony) usually means a part of language file path from where translations would be searched for. The default 
namespace is usually `messages`, but could be changed by specifying different first namespace in 
[the Symfony language file](/configure-language-files/symfony).

### `%map%`

Map means an associative array that:

* won't be replaced with anything if there are no placeholders use and the default domain is used: `trans('key')`,
* will be replaced as an associative short syntax array if there are any placeholders detected: 
`trans('key', ['%placeholder%' => placeholder])`.

Initial placeholder names are determined automatically based on a respective variable.
