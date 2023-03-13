import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const templateTemplate: IConfigItem = {
	option: '[Component] Create a new template',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/component/',
	},
	output: {
		path: './src/components/templates',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert component name', slot: '__name__' },
	],
};

export default templateTemplate;
