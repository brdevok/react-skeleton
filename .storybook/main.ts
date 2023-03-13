import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	webpackFinal: (config) => {
		if (config.resolve.plugin) {
			config.resolve.plugins.push([
				new TsConfigPathsPlugin({ extensions: config.resolve.extensions }),
			]);
		} else {
			config.resolve.plugins = [
				new TsConfigPathsPlugin({ extensions: config.resolve.extensions }),
			];
		}

		config.module.rules.push({
			test: /\.scss$/,
			loader: 'import-glob-loader',
			enforce: 'pre',
			options: {
				silent: true,
			},
		}, 
		{
			test: /\.svg$/,
			use: [
				{
					loader: 'babel-loader',
				},
				{
					loader: 'react-svg-loader',
					options: {
						jsx: true,
					},
				},
			],
		});

		return config;
	},
};
