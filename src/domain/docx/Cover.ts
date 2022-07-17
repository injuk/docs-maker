import docx from 'docx';

export default [
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
                font: 'Arial',
                bold: true,
                break: 2,
                size: 22,
            }),
        ],
        alignment: docx.AlignmentType.RIGHT,
    }),
];