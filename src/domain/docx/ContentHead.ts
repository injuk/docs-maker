import docx from 'docx';
import createTextRun from '../../util/createTextRun.ts';

const {
    Paragraph,
    HeadingLevel,
} = docx;

const spacing = { line: 370 };

export default [
    new Paragraph({
        pageBreakBefore: true,
    }),
    new Paragraph({
        spacing,
        heading: HeadingLevel.HEADING_2,
        children: [
            createTextRun(`API 1 이름`, 28, { font: `Arimo`, bold: true }),
        ],
    }),
    new Paragraph({
        spacing,
        children: [
            createTextRun(`[GET] /v1/api/something`),
            createTextRun(`설명: `, 22, { break: 1 }),
        ],
    }),
];