import { objectToMap } from './util/toMap.ts';
import FromYaml from './domain/YamlParser.ts';
import { debug, error } from './common/logger.ts';

(async function main() {
    const file = await Deno.readTextFile('../resources/data/input.yml');
    // const file = await Deno.readTextFile('../resources/data/invalid-input.yml');

    try {
        const parsed = new FromYaml()
            .toJson(file);

        const map = objectToMap(parsed.paths);
        for(const [ k, v ] of map)
            debug(`[${k}] => [${JSON.stringify(v)}]`);

        // debug(parsed.info);
        // debug(parsed.servers);
        // debug(parsed.components);
    } catch (e) {
        error(e);
        error('error occurred!!!');
    }
})();
