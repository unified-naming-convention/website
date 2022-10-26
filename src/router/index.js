import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/badge",
		name: "badge",
		component: () => import("../views/Badge.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
});

export default router;
