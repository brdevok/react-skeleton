import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const atomTemplate: IConfigItem = {
	option: '[Component] Create a new atom',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/component/',
	},
	output: {
		path: './src/components/atoms',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert component name', slot: '__name__' },
	],
};

export default atomTemplate;
