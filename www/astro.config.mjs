import theme from "toolbeam-docs-theme";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import config from "./config";

const url = "http://localhost:3010";

// https://astro.build/config
export default defineConfig({
  site: url,
  trailingSlash: "never",
  server: {
    host: "0.0.0.0",
    port: 3010,
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      plugins: [theme()],
      title: "Teaser",
      description: "Composable coming soon landing page components",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "48x48",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.svg",
            media: "(prefers-color-scheme: light)",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon-dark.svg",
            media: "(prefers-color-scheme: dark)",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: `${url}/social-share.png`,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: `${url}/social-share.png`,
          },
        },
      ],
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: false,
      },
      social: {
        github: config.github,
        discord: config.discord,
      },
      lastUpdated: true,
      editLink: {
        baseUrl: `${config.github}/edit/master/www/`,
      },
      components: {
        Hero: "./src/components/Hero.astro",
        Footer: "./src/components/Footer.astro",
      },
      customCss: ["./src/custom.css", "./src/styles/lander.css"],
      sidebar: [
        { label: "Intro", slug: "index" },
        {
          label: "Get Started",
          items: [
            { label: "Installation", slug: "guides/installation" },
            { label: "Quick Start", slug: "guides/quick-start" },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "Theming", slug: "guides/theming" },
            { label: "Composability", slug: "guides/composability" },
          ],
        },
        {
          label: "Components",
          items: [
            { label: "Teaser", slug: "components/teaser" },
            { label: "Form", slug: "components/form" },
            { label: "Success State", slug: "components/success" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Examples", slug: "reference/examples" },
            { label: "API", slug: "reference/api" },
          ],
        },
      ],
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
