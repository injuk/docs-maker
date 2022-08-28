import docx from 'https://esm.sh/docx@7.4.0';
const { Paragraph, TextRun } = docx;

interface Bottom {
    color: string;
    space: number;
    style: string;
    size: number;
}
interface Border {
    bottom?: Bottom;
}

// type TextRun = typeof TextRun;

interface ParagraphProps {
    spacing?: { line: number };
    alignment?: string;
    border?: Border;
    children?: typeof TextRun[];
}

export default class ParagraphBuilder {
    private readonly props: ParagraphProps;

    constructor() {
        this.props = {};
    }

    static builder() {
        return new ParagraphBuilder();
    }

    spacing(param: number) {
        this.props.spacing = { line: param };
        return this;
    }

    alignment(param: string) {
        this.props.alignment = param;
        return this;
    }

    border(param: Border) {
        this.props.border = param;
        return this;
    }

    children(param: Array<typeof TextRun>) {
        this.props.children = param;
        return this;
    }

    // FIXME: return Paragraph 타이핑하기.
    build() {
        return new Paragraph(this.props);
    }
}