import { router } from "@/plugins/router";
import type { RouteRecordRaw } from "vue-router";
import routes from "./routes";

routes.forEach((route: RouteRecordRaw) => router.addRoute(route));
