import {Paragraph, AlignmentType, BorderStyle, TextRun, IBorderOptions} from 'docx';
import ParagraphBuilder from '../../../src/domain/builder/ParagraphBuilder';

describe('ParagraphBuilder', () => {

    it('ParagraphBuilder.build', async () => {
        // given
        const bottom: IBorderOptions = {
            color: 'auto',
            space: 1,
            style: BorderStyle.SINGLE,
            size: 3
        };
        const children: TextRun[] = [
            new TextRun({
                break: 5,
                size: 60,
            }),
        ];

        // when
        const result = ParagraphBuilder.builder()
            .spacing(370)
            .alignment(AlignmentType.RIGHT)
            .border({ bottom })
            .children(children)
            .build();

        // then
        expect(result).toBeInstanceOf(Paragraph);
    });
});
