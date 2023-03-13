import path from 'path';
import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export const distFolder = 'dist';
export const distFolders = {
	assets: 'assets',
	locales: 'locales',
};

export const srcFolder = 'src';
export const srcFolders = {
	api: 'api',
	app: 'app',
	assets: 'assets',
	components: 'components',
	context: 'context',
	data: 'data',
	hooks: 'hooks',
	i18next: 'i18next',
	locales: 'locales',
	pages: 'pages',
	router: 'router',
	styles: 'styles',
	globalTypes: 'global-types',
	utils: 'utils',
};

export const plugins = [
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		inject: 'body',
		template: `${srcFolder}/index.html`,
	}),
	new CopyPlugin({
		patterns: [
			{
				from: path.resolve(__dirname, srcFolder, srcFolders.assets),
				to: path.resolve(__dirname, distFolder, distFolders.assets),
				noErrorOnMissing: true,
				filter: async (resourcePath) => {
					const name = resourcePath.split('/').at(-1) as string;

					if (/^(\.gitkeep)/.test(name)) {
						return false;
					}
					return true;
				},
			},
			{
				from: path.resolve(__dirname, srcFolder, srcFolders.locales),
				to: path.resolve(__dirname, distFolder, distFolders.locales),
				noErrorOnMissing: true,
			},
		],
	}),
];

export default {
	plugins,
	entry: {
		main: path.resolve(__dirname, 'src/app/App.tsx'),
	},
	output: {
		assetModuleFilename: (pathData) => {
			return pathData.filename?.replace(`${srcFolder}/`, '');
		},
		path: path.resolve(__dirname, distFolder),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.css', '.scss', '.json'],
		alias: Object.fromEntries(
			Object.values(srcFolders).map((name) => [
				`@${name}`,
				path.resolve(__dirname, `${srcFolder}/${name}`),
			]),
		),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				loader: 'import-glob-loader',
				enforce: 'pre',
				options: {
					silent: true,
				},
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
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
			},
		],
	},
} as Configuration;
