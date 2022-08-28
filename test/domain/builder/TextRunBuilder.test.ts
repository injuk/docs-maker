import { TextRun } from 'docx';
import TextRunBuilder from '../../../src/domain/builder/TextRunBuilder';

describe('TextRunBuilder', () => {

    it('TextRunBuilder.build', () => {
        // given
        // when
        const result = TextRunBuilder.builder()
            .break(5)
            .font('Nanum Gothic')
            .size(60)
            .text('test')
            .color('#1188ff')
            .bold(true)
            .build();

        // then
        expect(result).toBeInstanceOf(TextRun);
    });
});