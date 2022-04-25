import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/badge",
		name: "badge",
		component: () => import("../views/Badge.vue"),
	},
	{
		path: "/source",
		name: "source",
		beforeEnter() {
			window.location.href = "https://jck.cx/g/";
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
