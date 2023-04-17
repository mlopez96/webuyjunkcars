const routes = [
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/blog",
    component: "Blog",
  },
  {
    path: "/blog/:blogId",
    component: "BlogArticle",
  },
  {
    path: "/faq",
    component: "FAQ",
  },
];

export default routes;
