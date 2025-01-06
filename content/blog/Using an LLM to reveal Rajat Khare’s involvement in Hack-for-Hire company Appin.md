---
tags:
  - AI
  - hacking-for-hire
  - blog
  - LLM
date: 2023-12-20
title: Using an LLM to reveal Rajat Khare’s involvement in Hack-for-Hire company Appin
---


I came across a [post](https://www.jwz.org/blog/2023/12/rajat-khare-doesnt-like-people-writing-about-him/) the other day by [JWZ](https://mastodon.social/@jwz) regarding the #billionaire behind one of the more infamous #hacking-for-hire companies around.  It's been fairly well known for some time that people and companies were selling their offensive #cybersecurity skills like this, but what was news to me was that Rajat Khare was paying and bullying his way to wiping the slate clean by removing the articles regarding his involvement.

So, given that large language models are trained on data from a certain point in time, I thought it would be interesting to see what one “knew” about Rajat Khare’s activities.  I used [Mistral Instruct 7B](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.1) and asked it to create an article regarding Khare’s involvement with funding hack-for-hire companies.  The output seemed very good and accurate; I was able to quickly confirm nearly everything in the output below.

I also wanted the reporter’s voice to be hard-hitting, 50’s style journalism, which I don’t think came out very well.  It did, however, lead me down a rabbit hole into Russian Oligarch Rybolovlev by linking him to some hacking-for-hire as a customer.


## Mistral-Instruct 7B generated article

> ﻿﻿﻿﻿﻿In the shadows of the digital world, there exists an insidious network of hackers who have been orchestrating a campaign of cybercrime that has left entire nations vulnerable. These hackers operate in secret, using sophisticated techniques to breach even the most secure systems and steal sensitive data from politicians, celebrities, and other high-profile figures around the world.
> 
> At the heart of this criminal enterprise is Rajat Khare, an Indian venture capitalist who has been funding firms that eventually became a widespread hack-for-hire enterprise known as Appin. Khare's involvement in these illicit activities has left him with a dark reputation and raised serious questions about his business practices.
> 
> Appin was founded by a group of former employees from the Indian cybersecurity firm, Hacking House. These individuals were highly skilled hackers who used their expertise to provide a range of services to clients around the world. However, as time went on, it became clear that Appin's true purpose was to carry out a campaign of cybercrime for hire.
> 
> One of the most notorious cases involving Appin occurred in 2018 when they were hired by a wealthy businessman named Dmitry Rybolovlev to hack into the email accounts of his former wife, Elena Okamoto. Using advanced techniques such as phishing and social engineering, Appin was able to gain access to Ms. Okamoto's emails and steal sensitive information about her personal life and financial dealings.
> 
> Another high-profile case involved a group of hackers who were hired by the Russian government to carry out cyberattacks against Western governments and political figures during the 2016 U.S. presidential election. It is believed that Appin played a key role in this operation, providing the hackers with access to sensitive information about their targets.
> 
> Despite these high-profile cases, Rajat Khare has continued to deny any involvement in Appin's criminal activities. However, evidence suggests otherwise. In 2019, it was revealed that Khare had invested heavily in a company called Cybereason, which provides advanced threat detection and response services. This investment raised suspicions that Khare may have been using his venture capital firm to fund cybercrime operations.
> 
> Furthermore, several former employees of Appin have come forward to describe the company's culture of criminality. They claim that the company was run by a group of ruthless hackers who were willing to do whatever it took to carry out their clients' requests, even if it meant breaking the law.
> 
> In conclusion, Rajat Khare's involvement in Appin and its criminal activities raises serious questions about his business practices and ethics. It is clear that he has been using his venture capital firm to fund a campaign of cybercrime that has left entire nations vulnerable. As such, it is important for law enforcement agencies around the world to take action against Khare and his associates in order to protect citizens from further harm.


## References

Some real-world references:
- [Inside the global hack-for-hire industry](https://www.thebureauinvestigates.com/stories/2022-11-05/inside-the-global-hack-for-hire-industry) Bureau of Investigative Journalism
- Reuters article archived on Archive.org: [How an Indian Startup Hacked the World](https://web.archive.org/web/20231117025741/https:/www.reuters.com/investigates/special-report/usa-hackers-appin/)
- [Who Is Killing All These Stories About a Controversial Tech Mogul?](https://www.thedailybeast.com/who-is-killing-all-these-stories-about-rajat-khare-controversial-tech-mogul) from the DailyBeast
- [Swiss Prosecutors Investigating Russian Billionaire Rybolovlev](https://news.artnet.com/art-world/swiss-prosecutors-are-now-investigating-russian-billionaire-rybolovlev-at-the-request-of-his-nemesis-yves-bouvier-2207336)
- [How mercenary hackers sway litigation battles](https://www.reuters.com/investigates/special-report/usa-hackers-litigation/) - Reuters Investigative report



**edit:** Jan 4, 2023:  added link to the Reuters "Mercenary hackers" article

