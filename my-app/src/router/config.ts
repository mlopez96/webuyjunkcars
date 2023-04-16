const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/blog"],
    exact: true,
    component: "Blog",
  },
  {
    path: ["/", "/blog/:blogId"],
    exact: true,
    component: "BlogArticle",
  },
  {
    path: ["/", "/faq"],
    exact: true,
    component: "FAQ",
  },
];

export default routes;
