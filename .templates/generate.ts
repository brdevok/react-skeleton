import { generateTemplateFiles } from 'generate-template-files';

import atomTemplate from './tools/atom';
import blockTemplate from './tools/block';
import contextTemplate from './tools/context';
import moleculeTemplate from './tools/molecule';
import organismTemplate from './tools/organism';
import pageTemplate from './tools/page';
import templateTemplate from './tools/template';

generateTemplateFiles([
	atomTemplate,
	moleculeTemplate,
	organismTemplate,
	blockTemplate,
	templateTemplate,
	contextTemplate,
	pageTemplate,
]);
