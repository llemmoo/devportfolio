export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "lemo.work",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Me",
      to: "about",
    },
    {
      label: "My work",
      to: "projects",
    },
  ],
  links: {
    github: "https://github.com/llemmoo",
    linkedin: "https://linkedin.com/in/oliver-lemonakis",
  },
};
