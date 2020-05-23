module.exports = {
  title: 'КодСур',
  tagline: 'Гэрээсээ дэлхийд ажиллацгаая',
  url: '',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mongolian-coders',
  projectName: 'codesur',
  themeConfig: {
    navbar: {
      title: 'КодСур',
      logo: {
        alt: 'CodeSur Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/algorithms0',
          activeBasePath: 'docs',
          label: 'Алгоритм / Өгөгдлийн Бүтэц',
          position: 'left',
        },
        {to: 'blog', label: 'Мэдээ', position: 'left'},
        {
          href: 'https://github.com/mongolian-coders/codesur',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Хичээл',
          items: [
            {
              label: 'Алгоритм / Өгөгдлийн Бүтэц',
              to: 'docs/algorithms0',
            },
          ],
        },
        {
          title: 'Мэдээлэл',
          items: [
            {
              label: 'Блог',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Бусад',
          items: [
            {
              label: 'Эх Код',
              href: 'https://github.com/mongolian-coders/codesur',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mongolian-coders. Docusaurus -г ашиглав.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mongolian-coders/codesur/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/mongolian-coders/codesur/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
