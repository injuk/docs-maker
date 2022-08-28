import {
    TextRun,
    Paragraph,
    AlignmentType,
    IBordersOptions,
} from 'docx';

interface ParagraphProps {
    spacing?: { line: number };
    alignment?: AlignmentType;
    border?: IBordersOptions;
    children?: TextRun[];
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

    alignment(param: AlignmentType) {
        this.props.alignment = param;
        return this;
    }

    border(param: IBordersOptions) {
        this.props.border = param;
        return this;
    }

    children(param: TextRun[]) {
        this.props.children = param;
        return this;
    }

    build() {
        console.log(`create Paragraph with: ${JSON.stringify(this.props)}`);
        return new Paragraph(this.props);
    }
}