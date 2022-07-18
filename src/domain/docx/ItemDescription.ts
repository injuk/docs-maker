import docx from 'docx';
import createTextRun from '../../util/createTextRun.ts';

const bullet = { level: 0 };
const spacing = { line: 370 };

export default function createItemDescription(descriptionName: string) {
    return [
        new docx.Paragraph({
            spacing,
            children: [
                createTextRun(descriptionName, 28, { font: 'Arial', break: 1, bold: true }),
                createTextRun('설명: ', 22, { break: 1 }),
            ],
        }),

        // bullet
        createBullet('target'),
        createBullet('detail'),
    ];
}

function createBullet(itemName: string) {
    return new docx.Paragraph({
        bullet,
        children: [ createTextRun(itemName) ],
    })
}