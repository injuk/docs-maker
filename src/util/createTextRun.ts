import docx from 'docx';

type textRunOptions = {
    font?: string;
    bold?: boolean;
    break?: number;
}

export default function createTextRun(text: string, size: number = 22, options: textRunOptions = {}) {
    const bold = options.bold || false;
    const _break = options.break || 0;
    const font = options.font || 'Nanum Gothic';

    return new docx.TextRun({ text, size, bold, font, break: _break });
}