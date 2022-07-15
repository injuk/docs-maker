export function objectToMap<T, K extends keyof T>(obj: T) {
    // FIXME: 이거 아닌 것 같은데...
    const result = new Map<Extract<keyof T, string>, T[Extract<keyof T, string>]>();

    for(const key in obj) {
        result.set(key, obj[key]);
    }

    return result;
}