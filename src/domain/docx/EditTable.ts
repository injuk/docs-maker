import docx from 'docx';

const {
    Table,
    TextRun,
    TableRow,
    TableCell,
    Paragraph,
    HeightRule,
    ShadingType,
    AlignmentType,
    VerticalAlign,
} = docx;

const height = {
    value: 450,
    rule: HeightRule.AUTO,
};
const shading = {
    type: ShadingType.CLEAR,
    color: 'auto',
    fill: '#d2d2d2',
};
const verticalAlign = VerticalAlign.CENTER;

export default [
    new Paragraph({ pageBreakBefore: true }),
    new Table({
        columnWidths: [3000, 3000, 3000],
        rows: [
            new TableRow({
                height,
                children: [
                    getTableCellWithText('수정일', true),
                    getTableCellWithText('내용', true),
                    getTableCellWithText('수정자', true),
                ],
                tableHeader: true,
            }),
            new TableRow({
                height,
                children: [
                    // contents
                    getTableCellWithText('2022/07/18'),
                    getTableCellWithText('nothing'),
                    getTableCellWithText('ingnoh'),
                ],
            }),
            ...getTableRows(18),
        ],
    }),
];

function getTableCellWithText(text: string, hasShading: boolean = false) {
    return new TableCell({
        verticalAlign,
        children: [
            new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [ new TextRun({ text, font: 'Arial', size: 22 }) ],
            }),
        ],
        shading: hasShading ? shading : undefined,
    });
}

function getTableRows(count = 0) {
    const results = [];
    for(let i = 0; i < count; i++) {
        results.push(
            new TableRow({ height, children: getPlainTableCell(3) }),
        );
    }

    return results;
}

function getPlainTableCell(count = 0) {
    const results = [];
    for (let i = 0; i < count; i++) {
        results.push(
            new TableCell({ verticalAlign, children: [] }),
        );
    }

    return results;
}