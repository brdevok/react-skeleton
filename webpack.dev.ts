import path from 'path';
import config, { distFolders, srcFolder, srcFolders } from './webpack.config';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export default {
	...config,
	mode: 'development',
	devServer: {
		static: [
			{
				directory: path.resolve(__dirname, srcFolder, srcFolders.assets),
				publicPath: `/${distFolders.assets}`,
			},
			{
				directory: path.resolve(__dirname, srcFolder, srcFolders.locales),
				publicPath: `${distFolders.locales}`,
			},
		],
		watchFiles: {
			paths: [`${srcFolder}/**/*`],
		},
		historyApiFallback: true,
		compress: true,
		port: 9000,
		open: true,
	} as DevServerConfiguration,
} as Configuration;
