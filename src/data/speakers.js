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
import emilBay from '../graphics/speaker_emil_bay.jpg';
import patriciaAas from '../graphics/speaker_patricia_aas.jpg';
import finnTeam from '../graphics/speaker_finn_team.jpg';


export default [
  {
    name: 'Tor Martin Storsletten, Tom Widerøe and Lotte Johansen,',
    bio: [
      'Tor Martin, Tom and Lotte are the award winning accessibillity team at FINN.no.'
    ],
    title: 'How to make accessible web when the ideal does not match reality?',
    abstract: [
      'The accessibility group in FINN has worked for four years to make FINN more accessible. We will demonstrate some examples you can learn from to make your code more accessible even if the reality works against you.'
    ],
    photoUrl: finnTeam
  },

  {
    name: 'Patricia Aas',
    bio: [
      'Patricia Aas is a C++ programmer working on the Vivaldi Browser. She has previously worked at Opera Software on their Desktop Browser and at Cisco on their Telepresence Hardware Endpoints, primarily on Linux. Patricia is a curious person, always trying to find out how things work. She hopes that we will find a way to make the world a better place by creating things that can be used for good.'
    ],
    title: 'Reading other peoples code',
    abstract: [
      'Someone else\'s code. Even worse, thousands of lines, maybe hundreds of files of other peoples code. Is there a way to methodically read and understand other peoples work, build their mental models? In this talk I will go through techniques I have developed throughout 18 years of programming. Hopefully you will walk away with a plan on how to approach a new code base. But even more I hope you walk away with a feeling of curiosity, wanting to get to know your fellow programmers through their code.'
    ],
    photoUrl: patriciaAas
  },

  {
    name: 'Emil Bay',
    bio: [
      'Emil Bay is a independent consultant from Copenhagen, Denmark. He used to study maths, but quickly dropped out to work on software. He has worked at a biomedical instrument lab, HPC lab, an agency and a newspaper, as a data journalist.',
      'He currently works on making cryptography and security primitives more accessible.'
    ],
    title: 'Hand-crafting WebAssembly',
    abstract: [
      'There has been many talks about what WebAssembly (WASM) is, its relation to compilers and how bright our collective future is with WASM in our toolbox. However most talks treat WebAssembly as a semi-opaque box, and mostly as something you can compile higher level languages into. This is a pity! WebAssembly is a fun language to learn, and allows one to write code often less than a magnitude slower than C!',
      'In this talk I will show how to write WAT (WebAssembly Text-format), how to reason about algorithms when all you have is one large slab of memory, how to convert high level constructs such as loops into elementary instructions and how to have fun at the same time! We will convert a number of progressively harder algorithms, each revealing a challenging aspect of working with no abstractions.',
      'Even if you will not write WASM at work, learning at the lowest level of computer tears away the enchantment that abstractions cause, and reveals the magical machine that is the computer.'
    ],
    photoUrl: emilBay
  },

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
    title: 'Inside V8: The choreography of Ignition and TurboFan',
    abstract: [
      'This talk is about V8, Google’s high-performance JavaScript engine that powers both Chrome and Node. We\'ll dive into the two optimization tiers of V8, Ignition and TurboFan, and how they enable peak performance of modern, idiomatic JavaScript.',
      'The talk provides high-level insight into V8 and explains the basics of deoptimization and why it\'s important. We\'ll conclude with some actionable performance advice on JavaScript.'
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
    title: 'Building a ray tracer in Javascript',
    abstract: [
      'In this talk we learn about the basics of real time 3D graphics and what we need in order to produce realistic looking 3D graphics in the browser by building a very simple ray tracing render engine. Seeing how a seemingly complex concept such as ray tracing can be broken down to simpler concepts will inspire web developers to get creative and enhance their web products with 3D and webVR. We will look at practical techniques and performance tips for browser-based 3D and overcome the obstacle on how to get started.'
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
