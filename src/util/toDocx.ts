import docx from 'docx';
import { debug } from '../common/logger.ts';
import RequiredKeys from '../type/RequiredKeys.ts';

export default function (input: RequiredKeys): void {
    debug(input);
}