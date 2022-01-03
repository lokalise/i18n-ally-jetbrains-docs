// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const glob = require('glob');
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
  favicon: 'img/favicon.png',
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
          editUrl: 'https://github.com/lokalise/i18n-ally-jetbrains-docs/',
        },
        blog: {
          path: 'changelog',
          routeBasePath: '/changelog',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Changelog',
          editUrl: 'https://github.com/lokalise/i18n-ally-jetbrains-docs/',
        },
        theme: {
          customCss: glob.sync('./src/css/**/*.css').map(require.resolve),
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
          {to: 'changelog', label: 'Changelog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
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
