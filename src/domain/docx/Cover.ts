import docx from 'docx';
import { debug } from '../../common/logger.ts';

export default async function doSomething() {
    const document = new docx.Document({
        sections: [
            {
                children: [
                    new docx.Paragraph({
                        border: {
                            bottom: {
                                color: 'auto',
                                space: 1,
                                style: docx.BorderStyle.SINGLE,
                                size: 3,
                            }
                        },
                        spacing: {
                            line: 370,
                        },
                        children: [
                            new docx.TextRun({
                                break: 5,
                                font: 'Nanum Gothic',
                                size: 60,
                            }),
                            new docx.TextRun({
                                text: 'ingnoh',
                                color: '#1188ff',
                                font: 'Nanum Gothic',
                                bold: true,
                                size: 60,
                            }),
                            new docx.TextRun({
                                text: 'API 연동 가이드',
                                color: '#1188ff',
                                font: 'Nanum Gothic',
                                break: 1,
                                size: 44,
                            }),
                        ],
                        alignment: docx.AlignmentType.RIGHT,
                    }),
                    new docx.Paragraph({
                        spacing: {
                            line: 370,
                        },
                        children: [
                            new docx.TextRun({
                                text: 'Version 0.1  2022/07/18',
                                font: 'Nanum Gothic',
                                bold: true,
                                break: 2,
                                size: 22,
                            }),
                        ],
                        alignment: docx.AlignmentType.RIGHT,
                    }),

                    // break
                    new docx.Paragraph({
                        pageBreakBefore: true,
                        text: 'new page!!!'
                    })
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