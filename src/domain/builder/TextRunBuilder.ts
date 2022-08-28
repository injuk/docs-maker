import { TextRun } from 'docx';

type Colors = '#1188ff';
type Fonts = 'Nanum Gothic';

interface TextRunProps {
    size?: number;
    text?: string;
    break?: number;
    bold?: boolean;

    font?: Fonts;
    color?: '#1188ff';
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

    build() {
        console.log(`create TextRun with: ${JSON.stringify(this.props)}`);
        return new TextRun(this.props);
    }
}