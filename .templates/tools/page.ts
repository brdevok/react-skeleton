import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const pageTemplate: IConfigItem = {
	option: '[Page] Create a new page',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/page/',
	},
	output: {
		path: './src/pages',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert page name', slot: '__name__' },
	],
};

export default pageTemplate;
