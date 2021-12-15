// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'i18n Ally',
  tagline: 'Internationalization are cool',
  url: 'https://i18nally.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lokalise', // Usually your GitHub org/user name.
  projectName: 'i18nally', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'jetbrains',
          routeBasePath: '/jetbrains',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lokalise/i18n-ally-jetbrains-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        logo: {
          alt: 'I18n Ally Logo',
          src: 'img/i18n_ally_logo.svg',
        },
        items: [
          {to: '/jetbrains/introduction', label: 'Documentation', position: 'left'},
          {
            href: 'https://github.com/lokalise/i18n-ally-jetbrains-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Tutorial',
                to: '/jetbrains/introduction',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lokalise/i18n-ally-jetbrains-docs',
              },
              {
                label: 'License: 3-Clause BSD',
                to: '/license-3-clause-bsd',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lokalise Group`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
    }),
};

module.exports = config;
