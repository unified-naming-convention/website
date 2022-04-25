const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		allowedHosts: [".ngrok.io"],
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
                    @import "@/styles/variables.scss";
                    @import "@/styles/global.scss";
					@import "@/styles/hljs.css";
                `,
			},
		},
	},
});
