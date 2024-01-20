export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Qwik",
  description:
    "Qwik is a multipurpose Discord bot.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: 'dashboard',
      href: "/dashboard"
    }
  ],
  links: {
    twitter: "https://twitter.com/.../",
    github: "https://github.com/name/rep_name",
    invite: "discord.com/oauth/....",
    docs: "/docs",
  },
}
