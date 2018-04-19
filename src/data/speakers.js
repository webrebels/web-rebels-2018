import martinSplit from '../graphics/speaker_martin_split.jpg';
import maximSalnikov from '../graphics/speaker_maxim_salnikov.jpg';
import michaelaLehr from '../graphics/speaker_michaela_lehr.jpg';
import michaelGeers from '../graphics/speaker_michael_geers.jpg';

export default [
  {
    name: 'Martin Split',
    bio: [
      'Martin is pretty decent at humaning and pretty good at computering, so he decided to use his computering to improve his and others humaning.',
      'He loves the open web and open source and helps to make things better with, but not limited to, code.'
    ],
    title: '',
    abstract: [],
    photoUrl: martinSplit
  },

  {
    name: 'Michaela Lehr',
    bio: [
      'Michaela Lehr is a creative front-end developer and designer. She specialises in UX and WebVR, and co-founded the studio GeilDanke. In her free time she travels round the world, practices yoga, and watches way too much Buffy.'
    ],
    title: 'Using New Web APIs For Your Own Pleasure – How I Wrote New Features For My Vibrator using the Web Bluetooth API and the Web Audio API',
    abstract: [
      'When I first heard about the Web Bluetooth API I was so curious, that I could not wait to try it out. So I asked myself: Which Bluetooth device should I buy? Especially if I do not want to through it away after I was finished experimenting with the API. So obviously a Bluetooth enabled vibrator was a perfect fit. And it came with a serious use case, too: The slogan of the vibrator was "Let him control you", which I found very limiting, so I used the Web Bluetooth API to connect it to the browser, and the Web Audio API, to establish my own slogan: "Let a video control you". In my talk you will learn how to use the Web Bluetooth API to connect a Bluetooth enabled device to the browser. Also you will see what is possible with the Web Audio API, especially when it comes to analyzing spoken words.'
    ],
    photoUrl: michaelaLehr
  },

  {
    name: 'Michael Geers',
    bio: [
      'Michael Geers loves the open web and enjoys building things. Would describe himself as a full stack developer. At neuland Büro für Informatik he works on taking e-commerce frontends to the next level. Learning new technologies and programming languages inspires him. At home he constructs hardware projects with his kids.'
    ],
    title: 'Micro Frontends - Think Smaller, Avoid the Monolith, Love the Backend',
    abstract: [
      'Microservices are the backend answer to handling complexity and work efficiently with multiple teams. Many frontend apps are also reaching the size where development gets harder and changing fundamental things is too risky. The software does not fit in one frontend developers head any more. Micro Frontends is a way of cutting your software into pieces that can live on their own and are each operated by an end-to-end team. It’s not microservices for frontend people. Think of it as full stack microservices that come with database and user interface. This solves many issues. One of them is briding the gap between frontend and backend developers.',
      'Integrating the UI of multiple applications in the browser, so that the user still gets a seamless and coherent experience comes with a few challenges. This talk explains the Micro Frontends idea, when this concept is useful and what problems it tries to solve. It’ll also highlight topics that you should think about when you build applications this way.'
    ],
    photoUrl: michaelGeers
  },

  {
    name: 'Maxim Salnikov',
    bio: [
      'Maxim Salnikov is Oslo-based Web UI Engineer, a Google Developer Expert in Web Technologies and a Microsoft MVP in Development Technologies. He develops complex web applications since the end of the last century and has extensive experience with all aspects of web front-end: UX/UI prototyping, HTML/CSS/JS, main frameworks, progressive web apps.',
      'Maxim is a founder and active contributor to two conferences: Mobile Era and ngVikings - Nordics’ main conferences for mobile and Angular developers respectively. Also, he leads Norway’s largest meetups dedicated to web front-end and mobile: Framsia, Angular Oslo, Mobile Meetup Oslo.',
      'Maxim is passionate about sharing his web front-end experience and knowledge with the community. He travels extensively for visiting developers events and speaking/training at conferences and meetups around the world.'
    ],
    title: 'Service Worker: taking the best from the past experience for the bright future of PWAs',
    abstract: [
      'There is no doubt that 2018 is the year when Progressive Web Apps will get the really broad adoption and recognition by all the involved parties: browser vendors (finally, all the major ones), developers, users. And the speed and smoothness of this process heavily depend on how correctly we, developers, use the power of new APIs. The main one in PWA concept is Service Worker API, which is responsible for all offline magic, network optimizations and push notifications.',
      'In my session based on accumulated experience of developing and maintaining PWAs we - go through the list of advanced tips & tricks, - showcase best practices, - learn how to avoid common pitfalls, - have a look at the latest browser support and known limitations, - share lots of useful insights.'
    ],
    photoUrl: maximSalnikov
  }

].map(speaker => {
  speaker.pageUrl = `/speaker/${speaker.name
    .split(' ')
    .join('-')
    .toLowerCase()}`;
  return speaker;
});
