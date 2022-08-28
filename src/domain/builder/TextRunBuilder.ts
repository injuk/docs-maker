import docx from 'https://esm.sh/docx@7.4.0';
const { TextRun } = docx;

type Colors = '#1188ff';
type Fonts = 'Nanum Gothic';

interface TextRunProps {
    size?: number;
    text?: string;
    break?: number;
    bold?: boolean;

    font?: Fonts;
    color?: Colors;
}

export default class TextRunBuilder {
    private readonly props: TextRunProps;

    constructor() {
        this.props = {};
    }

    static builder() {
        return new TextRunBuilder();
    }

    break(param: number) {
        this.props.break = param;
        return this;
    }

    font(param: Fonts) {
        this.props.font = param;
        return this;
    }

    size(param: number) {
        this.props.size = param;
        return this;
    }

    text(param: string) {
        this.props.text = param;
        return this;
    }

    color(param: Colors) {
        this.props.color = param;
        return this;
    }

    bold(param: boolean) {
        this.props.bold = param;
        return this;
    }

    // FIXME: return TextRun 타이핑하기.
    build() {
        return new TextRun(this.props);
    }
}