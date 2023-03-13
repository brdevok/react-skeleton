import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const contextTemplate: IConfigItem = {
	option: '[Context] Create a new context',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/context/',
	},
	output: {
		path: './src/context',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert context name', slot: '__name__' },
	],
};

export default contextTemplate;
