import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const blockTemplate: IConfigItem = {
	option: '[Component] Create a new block',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/component/',
	},
	output: {
		path: './src/components/blocks',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert component name', slot: '__name__' },
	],
};

export default blockTemplate;
