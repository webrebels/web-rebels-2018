import martinSplit from '../graphics/speaker_martin_split.jpg';
import maximSalnikov from '../graphics/speaker_maxim_salnikov.jpg';
import michaelaLehr from '../graphics/speaker_michaela_lehr.jpg';
import michaelGeers from '../graphics/speaker_michael_geers.jpg';
import johnPapa from '../graphics/speaker_john_papa.jpg';
import ernieTurner from '../graphics/speaker_ernie_turner.jpg';
import joeKarlsson from '../graphics/speaker_joe_karlsson.jpg';
import lucianoMammino from '../graphics/speaker_luciano_mammino.jpg';
import madlainaKalunder from '../graphics/speaker_madlaina_kalunder.jpg';
import monikaKedrova from '../graphics/speaker_monika_kedrova.jpg';
import sigurdSchneider from '../graphics/speaker_sigurd_schneider.jpg';
import p01 from '../graphics/speaker_p01.jpg';
import stefanJudis from '../graphics/speaker_stefan_judis.jpg';
import ivanJovanovic from '../graphics/speaker_ivan_jovanovic.jpg';


export default [
  {
    name: 'Ivan Jovanovic',
    bio: [
      'Ivan is the senior software engineer, team lead, speaker, and mentor. His focus is on building scalable JS applications and experimenting with new languages and frameworks. He is into functional and reactive programming. Leading teams and mentoring junior developers is his everyday duty. He loves to share knowledge and to write on his tech blog.'
    ],
    title: 'Thinking Reactive in JavaScript',
    abstract: [
      'What is reactive programming? A lot of people have this question. Thinking in a reactive way is not that hard but it takes some time to understand all things and to change the way you look at development. In this talk we should learn everything about reactive programming and how can it help us to create better JavaScript apps.',
    ],
    photoUrl: ivanJovanovic
  },

  {
    name: 'Stefan Judis',
    bio: [
      'Stefan started programming 7 years ago and quickly fell in love with web performance, new technologies, and accessibility.',
      'He worked for several startups in Berlin and recently joined Contentful to tell the world how an API-first CMS can make you a bit happier.',
      'He is also a curator of the web performance online resource Perf Tooling, organizer of the Web Performance Meetup Berlin, contributes to a variety of open source projects and enjoys sharing nerdy discoveries.'
    ],
    title: 'What the v...DOM?',
    abstract: [
      'A deep dive into the vDOM and its core mechanisms. How does the different vDOM implementations differ and are they really that different? And what about lit-html or hyperHTML? How does they differ or do they really?',
    ],
    photoUrl: stefanJudis
  },

  {
    name: 'p01',
    bio: [
      'P01 worked for Opera Software for 11 years, but are now part of the Microsoft Office 365 team. In his spare time he makes unbelivable crazy tiny demos in JavaScript.'
    ],
    title: 'A testing story in 3 acts',
    abstract: [
      'Testing is a solved problem they say. You probably saw talks about it: About the good old dogs and the new kid on the block.',
      'But does it apply to your project? How to test if you deliver a third party component used in many workloads with different integration strategies?'
    ],
    photoUrl: p01
  },

  {
    name: 'Sigurd Schneider',
    bio: [
      'V8 core team developer with a background in programming languages and compiler verification.'
    ],
    title: 'Supporting modern JavaScript idioms for array builtins in V8',
    abstract: [
      'From a high-level we will look at how V8 ensures performance for array builtins behind the scenes. We will see that V8 has to make certain assumptions to be able to generate optimized code. I’ll explain how V8 decides which assumptions to make, what happens if an assumption turns out to be wrong, and how V8 learns from making wrong assumptions.',
      'This knowledge leads to useful insights for JavaScript developers wishing to improve their code’s run-time performance.'
    ],
    photoUrl: sigurdSchneider
  },

  {
    name: 'Monika Kedrova',
    bio: [
      'Monika is a full stack developer who loves challenges - whether it’s solving problems of all kinds, learning new things, or climbing mountains. Her day job involves writing server side code in Scala and taking care of infrastructure and databases. She likes to keep it fun by making WebXR demos and sharing the joy of VR at conferences. She’s a huge fan of functional programming and well written documentation.'
    ],
    title: 'Building virtual worlds with web technologies',
    abstract: [
      'We will explore the landscape of virtual reality on the web, look at where it started and where it’s heading and then we’ll dive into how to create a multi-user interactive experience available on all platforms. For this we’ll use Mozilla’s A-Frame library, which makes it easy and fun to get into WebXR. We will have a look at how to compose scenes with HTML-like syntax from a range of components and how to modify them in the in-browser editor.'
    ],
    photoUrl: monikaKedrova
  },

  {
    name: 'Madlaina Kalunder',
    bio: [
      'Madlaina is a full stack developer and a 3d graphics enthusiast on a mission to make 3d content accessible for people working on the web.',
      'She graduated at the Zurich University of Arts with a bachelor degree in Design, specialization Game Design, combining the passion for design and storytelling with the newest technologies.',
      'Madlaina believes in bringing people of different backgrounds together to solve problems in creative ways.'
    ],
    title: '',
    abstract: [

    ],
    photoUrl: madlainaKalunder
  },

  {
    name: 'Luciano Mammino',
    bio: [
      'Luciano is a software engineer born in 1987, the same year that “Super Mario Bros” was released in Europe, which, by chance is his favourite game! He started coding early at the age of 12, hacking away with his father`s old i386 armed only with MS-DOS and the QBasic interpreter.',
      'He has been professionally a software developer for more than 10 years and are currently a Solution Architect at Vectra AI in Dublin where he is working on automating the hunt for cyberattackers and speeding-up incident response.'
    ],
    title: 'Cracking JWT tokens: a tale of magic, Node.JS and parallel computing',
    abstract: [
      'JWT tokens are powerful artifacts that magicians from all over the World are using to secure modern apps and APIs. But as any other magic tool, those powerful tokens need to be used with caution and mastery, otherwise, they might become dangerous exploitable vulnerabilities. In this talk, I will demonstrate how evil magicians can cast a JWT brute force spell to take control of poorly constructed JWT tokens.'
    ],
    photoUrl: lucianoMammino
  },

  {
    name: 'Joe Karlsson',
    bio: [
      'JavaScript Engineer at Best Buy. Builder of weird software. Co-Creator of bechdel.io.'
    ],
    title: 'Building High Performance React Applications',
    abstract: [
      'React is built with performance in mind. But when is React slow? In this talk we’ll discuss common bottlenecks in React and when you might be making your program work harder than it should. We will discuss how Best Buy builds components that stay fast, even during the enormous stress of Black Friday traffic. You will learn practical ways to speed up your real world React applications today.'
    ],
    photoUrl: joeKarlsson
  },

  {
    name: 'Ernie Turner',
    bio: [
      'Ernie has over ten years of experience building Enterprise web applications and developer platforms going back to the dark, soul crushing days of IE6. Ernie now works at IronCore Labs building turnkey data security for developers so they can focus on their core features and still get strong security.',
      'When not making the digital world a better place, he enjoys spending time in the great outdoors with his family in beautiful Montana.'
    ],
    title: 'Dodging Web Crypto API Landmines',
    abstract: [
      'A look at how to use the Web Crypto API within a production application. By focusing on the practical implementation of cryptography and not on cryptography generalities we will see that cryptography is not as scary a concept as you might think.'
    ],
    photoUrl: ernieTurner
  },

  {
    name: 'John Papa',
    bio: [
      'John Papa is dedicated a father and husband, a Principal Developer Advocate with Microsoft, and alumnus of the Google Developer Expert, Microsoft RD and MVP programs.',
      'His passions are deploying and teaching modern web technologies and enjoying everything Disney with his family. John is a co-host of the popular Adventures in Angular podcast, author of the Angular Style Guide, and many popular Pluralsight courses.'
    ],
    title: '',
    abstract: [],
    photoUrl: johnPapa
  },

  {
    name: 'Martin Splitt',
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
