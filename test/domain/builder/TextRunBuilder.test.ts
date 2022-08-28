import docx from 'https://esm.sh/docx@7.4.0';
const { TextRun } = docx;

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
import TextRunBuilder from '../../../src/domain/builder/TextRunBuilder.ts';

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
        assertInstanceOf(result, TextRun);
    });
});