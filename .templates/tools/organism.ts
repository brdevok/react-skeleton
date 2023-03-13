import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const organismTemplate: IConfigItem = {
	option: '[Component] Create a new organism',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/component/',
	},
	output: {
		path: './src/components/organisms',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert component name', slot: '__name__' },
	],
};

export default organismTemplate;
