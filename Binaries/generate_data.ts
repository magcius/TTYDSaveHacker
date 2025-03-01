
// Build our WAT WebAssembly modules.

import * as path from 'path';
import * as fs from 'fs';

function buildData(filename: string): string {
    const binary = fs.readFileSync(path.join(__dirname, filename));
    return `"${binary.toString('base64')}"`;
}

function main() {
    const out = `
const BinaryDataInit = {
    [GameVersion.JP]: ${buildData('bin/Init_JP.bin')},
    [GameVersion.EU]: ${buildData('bin/Init_EU.bin')},
    [GameVersion.US]: ${buildData('bin/Init_US.bin')},
};

const BinaryDataMain = {
    [GameVersion.JP]: {
        [PatchVersion.V1]: ${buildData('bin/Main_JP_V1.bin')},
        [PatchVersion.V2]: ${buildData('bin/Main_JP_V2.bin')},
        [PatchVersion.V3]: ${buildData('bin/Main_JP_V3.bin')},
    },
    [GameVersion.EU]: {
        [PatchVersion.V1]: ${buildData('bin/Main_EU_V1.bin')},
        [PatchVersion.V2]: ${buildData('bin/Main_EU_V2.bin')},
        [PatchVersion.V3]: ${buildData('bin/Main_EU_V3.bin')},
    },
    [GameVersion.US]: {
        [PatchVersion.V1]: ${buildData('bin/Main_US_V1.bin')},
        [PatchVersion.V2]: ${buildData('bin/Main_US_V2.bin')},
        [PatchVersion.V3]: ${buildData('bin/Main_US_V3.bin')},
    },
};
`;
    fs.writeFileSync(path.join(__dirname, 'BinaryData.ts'), out);
}

main();
