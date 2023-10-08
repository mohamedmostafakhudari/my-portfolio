
const skills = [
  {
    title: "React",
    progressValue: 90,
  },
  {
    title: "Tailwind Css",
    progressValue: 90,
  },
  {
    title: "NextJS 13",
    progressValue: 90,
  },
  {
    title: "Svelte",
    progressValue: 90,
  },
  {
    title: "Styled Components",
    progressValue: 90,
  },
  {
    title: "Express",
    progressValue: 90,
  },
  {
    title: "MongoDB & Mongoose",
    progressValue: 90,
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

export { skills, projects };