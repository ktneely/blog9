
/**
 * @type {import("../config/siteConfig").UserConfig}
 
export default {};
 */


const config = {
  title: "Blog 9 draft title from Outer Space",
  description: "A digital garden with some flowers among all the weeds",
  author: "Kevin Neely",
  defaultAuthor: "ktneely",
  # domain: "https://blog9-zeta.vercel.app/",
  domain: "https://the15thstandard.com",
  // links to the pages you want to link to in the navbar and in the footer
  navLinks: [
    { href: "/blog", name: "Blog" },
    { href: "/projects", name: "Projects" },
    { href: "/research", name: "Research" },
    { href: "/about", name: "About" }
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/kevintneely/",
    mastodon: "https://infosec.exchange/@ktneely", 
  },
  nextSeo: {
    title: "The 15th Standard",
    description: "This site covers cybersecurity leadership and advice regarding the building of cyber and information security programs for successful companies.",
  }
};

export default config;

