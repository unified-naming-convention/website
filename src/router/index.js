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
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
