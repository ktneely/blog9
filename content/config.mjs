
/**
 * @type {import("../config/siteConfig").UserConfig}
 
export default {};
 */


const config = {
  title: "The 15th Standard - Usable Cybersecurity",
  description: "A digital garden of Information and Cybersecurity documents, tools, and advice",
  author: "Kevin Neely",
  defaultAuthor: "ktneely",
  domain: "https://the15thstandard.com",
  // links to the pages you want to link to in the navbar and in the footer
  navLinks: [
    { href: "/blog", name: "Blog" },
    { href: "/infosec", name: "InfoSec" },
    { href: "/projects", name: "Projects" },
    { href: "/research", name: "Research" },
    { href: "/about", name: "About" }
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kevintneely/",
    mastodon: "@ktneely@infosec.exchange", 
  },
  nextSeo: {
    title: "The 15th Standard",
    description: "This site covers cybersecurity leadership and advice regarding the building of cyber and information security programs for successful companies.",
  },
  contentExclude: ["/templates/*"],
};

export default config;

