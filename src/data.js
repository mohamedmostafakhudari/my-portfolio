
const skills = [
  {
    title: "React",
    progressValue: 90,
  },
  {
    title: "Tailwind Css",
    progressValue: 100,
  },
  {
    title: "NextJS 13",
    progressValue: 60,
  },
  {
    title: "TypeScript",
    progressValue: 60,
  },
  {
    title: "Svelte",
    progressValue: 70,
  },
  {
    title: "Styled Components",
    progressValue: 70,
  },
  {
    title: "Express",
    progressValue: 70,
  },
  {
    title: "MongoDB & Mongoose",
    progressValue: 70,
  },
];

const projects = {
  personal: {
    complete: [],
    notComplete: [
      {
        name: "todolist-v1",
        desc: "Project Desc",
        imgSrc: "/assets/todos-app-project.png",
        githubHref: "https://github.com/mohamedmostafakhudari/todolist-v1",
        demoHref: "https://todolist-v1-testdeploy.onrender.com/",
      },
      {
        name: "keeper-app",
        desc: "Project Desc",
        imgSrc: "/assets/keeper-app-project.png",
        githubHref: "https://github.com/mohamedmostafakhudari/keeper-app",
        demoHref: "https://mohamedmostafakhudari.github.io/keeper-app/",
      },
    ],
  },
  clones: [
    {
      name: "Bookmark-land-page",
      desc: "Project Desc",
      imgSrc: "/assets/bookmark-clone.png",
      githubHref: "https://github.com/mohamedmostafakhudari/Bookmark-land-page",
      demoHref: "https://mohamedmostafakhudari.github.io/Bookmark-land-page/",
    },
    {
      name: "abstract-clone",
      desc: "Project Desc",
      imgSrc: "/assets/abstract-clone.png",
      githubHref: "https://github.com/mohamedmostafakhudari/abstract-clone",
      demoHref: "https://mohamedmostafakhudari.github.io/abstract-clone/",
    },
    {
      name: "social-media-dashboard",
      desc: "Project Desc",
      imgSrc: "/assets/social-media-dashboard.png",
      githubHref:
        "https://github.com/mohamedmostafakhudari/social-media-dashboard-with-theme-switcher-master-frontendmentor",
      demoHref:
        "https://mohamedmostafakhudari.github.io/social-media-dashboard-with-theme-switcher-master-frontendmentor/",
    },
  ],
  games: [
    {
      name: "simon-game",
      desc: "Project Desc",
      imgSrc: "/assets/simon-game.png",
      githubHref: "https://github.com/mohamedmostafakhudari/simon-game",
      demoHref: "https://mohamedmostafakhudari.github.io/simon-game/",
    },
  ],
};
const experiences = [
  {
    title: "A Web Development Bootcamp by Dr.Angela",
    bullets: [
      "Strengthened the fundamentals to an impressive degree.",
      "Built several projects including ones with Express server and MongoDB database integrated.",
      "Learned a lot about Authentication methods ranging from simple ones to mroe complex ones like crypto, passport and OAuth.",
    ],
    startDate: new Date(Date.UTC(2023, 8, 1)),
    endDate: new Date(Date.UTC(2023, 9, 1)),
  },
  {
    title:
      "A Nano Degree Front-End Web Development Program Sponsered By MCIT of Egypt",
    bullets: [
      "Completed an extensive curriculum which involved many critical aspects in the field.",
      "Worked on graduate projects with a deadline which taught me much about time management and prioritization skills.",
    ],
    startDate: new Date(Date.UTC(2022, 1, 1)),
    endDate: new Date(Date.UTC(2022, 8, 1)),
  },
  {
    title:
      "The Odin Project Full Stack Curriculum",
    bullets: [
      "An open source community with lots of amazing collaporators of different experience levels brought together this curriculum of the brightest educational articales on the internet.",
      "It embraces the \"Learn By Doing\" methodology. This was the start point in my career to transition my passion for Programming from just a hobby to a professional level and a serious life-long commitment.",
    ],
    startDate: new Date(Date.UTC(2022, 1, 1)),
    endDate: new Date(Date.UTC(2023, 1, 1)),
  },
];

export { skills, projects, experiences };