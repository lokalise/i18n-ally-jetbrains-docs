// @ts-check
module.exports = {
    mySidebar: [
        'introduction',
        {
            type: 'category',
            label: 'Features',
            link: {
                type: 'doc',
                id: 'features',
            },
            items: [
                'features/automatically-extract-strings-in-bulk',
                'features/extract-selection',
                'features/hardcoded-strings-extraction',
                'features/ignore-strings-by-content',
                'features/ignore-strings-by-functions-and-keys',
                'features/inline-tag-extraction',
                'features/localization-hints',
                'features/navigate-to-translation',
                'features/plug-and-play-configuration',
                'features/register-missing-key',
                'features/rename-keys-and-placeholders',
            ],
        },
        {
            type: 'category',
            label: 'Supported file formats',
            items: [
                'language-files/javascript',
                'language-files/json',
                'language-files/php',
                'language-files/po',
                'language-files/xliff-v1',
                'language-files/xliff-v2',
                'language-files/yaml',
            ],
        },
        {
            type: 'category',
            label: 'Supported Source code',
            link: {
                type: 'doc',
                id: 'sources',
            },
            items: [
               'source-code/blade',
               'source-code/js-and-ts',
               'source-code/php',
               'source-code/phphtml',
               'source-code/react-jsx-tsx',
               'source-code/twig',
               'source-code/vue-templates',
            ],
        },
    ],
};

