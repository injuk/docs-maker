import { objectToMap } from './util/toMap.ts';
import FromYaml from './domain/YamlParser.ts';
import { debug, error } from './common/logger.ts';

import toDocx from './util/toDocx.ts';
import writeDocx from './domain/docx/Cover.ts';

(async function main() {
    const file = await Deno.readTextFile('../resources/data/input/input.yml');
    // const file = await Deno.readTextFile('../resources/data/input/invalid-input.yml');

    try {
        const parsed = new FromYaml()
            .toJson(file);

        const map = objectToMap(parsed.paths);
        for(const [ k, v ] of map)
            debug(`[${k}] => [${JSON.stringify(v)}]`);

        toDocx(parsed);

        // await writeDocx();
    } catch (e) {
        error(e);
        error('error occurred!!!');
    }
})();
