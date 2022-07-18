import docx from 'docx';
import createTextRun from '../../util/createTextRun.ts';

const {
    Table,
    TableRow,
    TableCell,
    Paragraph,
    ShadingType,
    VerticalAlign,
} = docx;

const shading = {
    type: ShadingType.CLEAR,
    color: 'auto',
    fill: '#d2d2d2',
};
const spacing = { line: 370 };

export default [
    new Paragraph({
        spacing,
        children: [
            createTextRun('Request Body', 28, { font: 'Arial', break: 1, bold: true }),
        ],
    }),
    new Table({
        columnWidths: [9000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        shading,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing,
                                children: [
                                    createTextRun('request body!!!', 22, { font: 'Arial' }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    }),
];