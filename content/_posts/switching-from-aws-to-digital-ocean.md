---
title: "Switching from AWS to Digital Ocean"
excerpt: "This article is from my old blog website! Amazon Web Services is an amazing cloud provider where you can literally do anything possible.There are literally hundreds of services that all do a multitude of things, including AI and just general servers"
coverImage: "/images/blog/switching-from-aws-to-digital-ocean-cover.jpg"
date: "2021-02-02T16:51:52.296Z"
ogImage:
    url: "/images/default.jpg"
minsRead: 2
---

**This article is from my old blog website**

Amazon Web Services is an amazing cloud provider where you can literally do anything possible. There are literally hundreds of services that all do a multitude of things, including AI and just general servers. It is kind of overwhelming! However, my complaint is partial with the Lightsail service. I have used this service for a few years now with not many complaints. The service is well built and easy to use and I love how quickly you can deploy instances. However, my issue relates to a project I host on one of the Lightsail servers. I have had a few instances where servers would just spontaneously go offline. But I've had a relatively good experience with them.

To aid with my college work, I am hosting a [code-server](https://github.com/coder/code-server). It is really useful as it allows me to edit my work at home and in school. It worked great for the first few days until I tried to SSH into it one lunchtime to update some system files. I couldn't connect. I waited for a while as I had just assumed there was a temporary outage. Then when I went back to it, I found the code server had disconnected. Checking the Lightsail dashboard. There was over 100% CPU utilisation. This was eating up my CPU credits. I kept seeing this trend so I span up another server. I had the same issue.

I switched to DigitalOcean and I have to say that the user experience is really better than Amazon. I think this is in due part that AWS is suited towards large companies operating with many services. For my needs such as hosting a couple of VPS's, it looks really intuitive. Setting up the instance was more tedious than Lightsail however, their tutorials are really easy to follow and within half an hour, I had my server online. It also seems to be more stable than Lightsail. I have had a few random disconnects which I think is down to the machine I was using.
