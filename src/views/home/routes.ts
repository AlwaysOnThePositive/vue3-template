export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: (): Promise<typeof import("*.vue")> =>
      import("./pages/home.vue"),
  },
];
