import type { IConfigItem } from 'generate-template-files';
import { CaseConverterEnum } from 'generate-template-files';

const moleculeTemplate: IConfigItem = {
	option: '[Component] Create a new molecule',
	defaultCase: CaseConverterEnum.PascalCase,
	entry: {
		folderPath: './.templates/tools/component/',
	},
	output: {
		path: './src/components/molecules',
		overwrite: true,
	},
	stringReplacers: [
		{ question: 'Insert component name', slot: '__name__' },
	],
};

export default moleculeTemplate;
