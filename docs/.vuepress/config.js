const { getFilesOf } = require("./util");

// .vuepress/config.js
module.exports = {
  base: "/sw-maestro-11-team-building/",
  title: "SW 마에스트로 11기 팀 빌딩 저장소",
  assetsPublicPath: "/",
  themeConfig: {
    nav: [
      {
        text: "About",
        items: [{ text: "Github", link: "https://github.com/changicho" }],
      },
    ],
    sidebar: [
      {
        title: "Readme",
        children: ["/"],
      },
      {
        title: "teambuilding",
        // children: ["team/changicho.md"],
        children: getFilesOf("docs/team"),
      },
    ],
    repo: "https://github.com/changicho/sw-maestro-11-team-building",
    repoLabel: "GitHub",
    editLinks: true,
    docsBranch: "master",
    editLinkText: "Edit this page!",
  },
};
