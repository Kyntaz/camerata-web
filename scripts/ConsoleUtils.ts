import read from "read";
import fs from "fs";

type ReadOptions = {
    prompt?: string,
    silent?: boolean,
    replace?: string,
    timeout?: number,
    default?: string,
    edit?: boolean,
    terminal?: boolean,
    input?: NodeJS.ReadStream,
    output?: NodeJS.WriteStream,
}

export async function question(options: ReadOptions = {}) {
    return new Promise<string>((resolve) => {
        read(options, (error, answer) => resolve(answer));
    });
}

export function loadJson<T = any>(path: string): T {
    const raw = fs.readFileSync(path).toString("utf-8");
    return JSON.parse(raw);
}
