import docx from 'docx';

const {
    Paragraph,
    Table,
    TableRow,
    TableCell,
    VerticalAlign,
    AlignmentType,
    TextRun,
    ShadingType,
    HeightRule,
} = docx;

export default [
    new Paragraph({
        pageBreakBefore: true,
    }),
    new Table({
        columnWidths: [3000, 3000, 3000],
        rows: [
            new TableRow({
                tableHeader: true,
                height: {
                    value: 450,
                    rule: HeightRule.AUTO,
                },
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: '수정일',
                                        font: 'Arial',
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        shading: {
                            type: ShadingType.CLEAR,
                            color: "auto",
                            fill: "#b4b4b4",
                        },
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: '내용',
                                        font: 'Arial',
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        shading: {
                            type: ShadingType.CLEAR,
                            color: "auto",
                            fill: "#b4b4b4",
                        },
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: '수정자',
                                        font: 'Arial',
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }),
                        ],
                        shading: {
                            type: ShadingType.CLEAR,
                            color: "auto",
                            fill: "#b4b4b4",
                        },
                    }),
                ],
            }),
            new TableRow({
                height: {
                    value: 450,
                    rule: HeightRule.AUTO,
                },
                children: [
                    // contents
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: '2022/07/18',
                                        font: 'Arial',
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: 'nothing',
                                        font: 'Arial',
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: 'ingnoh',
                                        font: 'Arial',
                                        size: 22,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            ...getTableRows(18),
        ],
    }),
];

function getTableRows(count = 0) {
    const results = [];
    for(let i = 0; i < count; i++) {
        results.push(
            new TableRow({
                height: {
                    value: 450,
                    rule: HeightRule.AUTO,
                },
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                ],
            })
        );
    }

    return results;
}