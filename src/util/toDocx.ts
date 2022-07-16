import { debug } from '../common/logger.ts';
import RequiredKeys from '../domain/RequiredKeys.ts';

export default function (input: RequiredKeys): void {
    debug(input);
}