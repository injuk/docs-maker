import docx from 'docx';
import { debug } from '../common/logger.ts';
import Cover from './docx/Cover.ts';
import EditTable from './docx/EditTable.ts';

export default async function doSomething() {
    const document = new docx.Document({
        sections: [
            {
                children: [
                    ...Cover,
                    ...EditTable,


                    // break
                    new docx.Paragraph({
                        pageBreakBefore: true,
                        text: 'new page!!!'
                    }),
                ],
            },
        ],
    });

    const buffer = await docx.Packer.toBuffer(document);

    Deno.writeFile('../resources/data/output/temp.docx', buffer)
        .then(() => {
            debug('maybe done');
            Deno.exit(0);
        });
}