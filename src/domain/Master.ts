import docx from 'docx';
import { debug } from '../common/logger.ts';
import Cover from './docx/Cover.ts';
import EditTable from './docx/EditTable.ts';
import ContentHead from './docx/ContentHead.ts';
import RequestBody from './docx/RequestBody.ts';
import createItemDescription from './docx/ItemDescription.ts';

const {
    Packer,
    Document,
    Paragraph,
} = docx;

export default async function doSomething() {
    const document = new Document({
        sections: [
            {
                children: [
                    ...Cover,
                    ...EditTable,
                    ...ContentHead,
                    ...createItemDescription('Query params'),
                    ...RequestBody,
                    ...createItemDescription('Request body detail'),

                    // break
                    new Paragraph({
                        pageBreakBefore: true,
                        text: 'new page!!!'
                    }),
                ],
            },
        ],
    });

    const buffer = await Packer.toBuffer(document);

    Deno.writeFile('../resources/data/output/temp.docx', buffer)
        .then(() => {
            debug('maybe done');
            Deno.exit(0);
        });
}