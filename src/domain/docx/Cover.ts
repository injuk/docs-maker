import docx from 'docx';

const {
    TextRun,
    Paragraph,
    BorderStyle,
    AlignmentType,
} = docx;

const spacing = { line: 370 };
const alignment = AlignmentType.RIGHT;

// TODO: TextRun 중복을 줄일 방법이 있을까?
export default [
    new Paragraph({
        spacing,
        alignment,
        border: {
            bottom: {
                color: 'auto',
                space: 1,
                style: BorderStyle.SINGLE,
                size: 3,
            }
        },
        children: [
            new TextRun({
                break: 5,
                font: 'Nanum Gothic',
                size: 60,
            }),
            new TextRun({
                text: 'ingnoh',
                color: '#1188ff',
                font: 'Nanum Gothic',
                bold: true,
                size: 60,
            }),
            new TextRun({
                text: 'API 연동 가이드',
                color: '#1188ff',
                font: 'Nanum Gothic',
                break: 1,
                size: 44,
            }),
        ],
    }),
    new Paragraph({
        spacing,
        alignment,
        children: [
            new TextRun({
                text: 'Version 0.1  2022/07/18',
                font: 'Arial',
                bold: true,
                break: 2,
                size: 22,
            }),
        ],
    }),
];