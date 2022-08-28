import docx from 'https://esm.sh/docx@7.4.0';
const { Paragraph, AlignmentType, BorderStyle, TextRun } = docx;

import {
    assertEquals,
    assertThrows,
    assertInstanceOf,
    assertStrictEquals,
} from 'https://deno.land/std@0.153.0/testing/asserts.ts';
import {
    it,
    describe,
    afterEach,
    beforeEach,
} from 'https://deno.land/std@0.153.0/testing/bdd.ts';
import ParagraphBuilder from '../../../src/domain/builder/ParagraphBuilder.ts';

describe('ParagraphBuilder', () => {

    it('ParagraphBuilder.build', async () => {
        // given
        const bottom = {
            color: 'auto',
            space: 1,
            style: BorderStyle.SINGLE,
            size: 3
        };
        const children: Array<typeof TextRun> = [
            new TextRun({
                break: 5,
                size: 60,
            })
        ];

        // when
        const result = ParagraphBuilder.builder()
            .spacing(370)
            .alignment(AlignmentType.RIGHT)
            .border(bottom)
            .children(children)
            .build();

        // then
        assertInstanceOf(result, Paragraph);
    });
});
