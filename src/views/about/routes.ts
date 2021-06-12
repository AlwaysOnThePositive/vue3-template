export default [
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About",
    },
    component: (): Promise<typeof import("*.vue")> =>
      import("./pages/about.vue"),
  },
];
