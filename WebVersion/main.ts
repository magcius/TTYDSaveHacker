
function readString(buffer: ArrayBuffer, offs: number, length: number): string {
    const u = new Uint8Array(buffer);
    let S = '';
    for (let i = 0; i < length; i++)
        S += String.fromCharCode(u[offs + i]);
    return S;
}

function writeBytes(buffer: ArrayBuffer, offs: number, S: ArrayBuffer): void {
    new Uint8Array(buffer).set(new Uint8Array(S), offs);
}

function makeStrBytes(S: string): ArrayBuffer {
    const u = new Uint8Array(S.length);
    for (let i = 0; i < S.length; i++)
        u[i] = S.charCodeAt(i);
    return u.buffer;
}

const enum GameVersion {
    JP = 'G8MJ01',
    US = 'G8ME01',
    EU = 'G8MP01',
}

const BinaryDataInit = {
    [GameVersion.JP]: "gI2ZwICEACBUhHAiOIRBQICtFjiApQCofYUiFH2JA6ZOgAQg",
    [GameVersion.EU]: "gI2bMICEACBUhHAiOIRCYICtHHiApQCofYUiFH2JA6ZOgAQg",
    [GameVersion.US]: "gI2asICEACBUhHAiOIRCYICtG5iApQCofYUiFH2JA6ZOgAQg",
};

const BinaryDataMain = {
    [GameVersion.JP]: "PGCAKWBjUnBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj28h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigAzw9gIAmYYw9XH2IA6ZOgAAhf6PreDiAAzxIAADJk60ciDh9AzyQbRyMY4MiRGOkAMBIAACZY4xSdH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5IWx8fxt4P8CAAGPDSIg8gICwOKADPEt2PGljw0iIOIADPEgAAEk8YIAGYGPr2GPESiBIAAAhPGCAKWBjUnA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpQo8fKgDpk6AACFjowsgfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqTVUsA///QIIADDe9//9Bgf/kLAMAAECCAWQ4YAAAgI0WOICEAAQ4oAAAOMAAAEgqVC1IAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RLwH+l63hIKmNFLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqaslIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCpqhUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCj/uSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIAq8YOGAAAEgCrzwsAwAATIIAIH3IAqY4YAAASCod3SwD//9Bgv/0fcgDpk6AACB/Y9t4SCkBwX+E43hL///Bf2TbeEv//7l/o+t4SCpjYX+k63hL//+pOGAAAEgqVTEsHgAAQYIADH/IA6ZOgAAhOGAAAEgGoCByZWwA",
    [GameVersion.EU]: "PGCAKWBj8MBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj/5h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigAzw9gIAmYYzbAH2IA6ZOgAAhf6PreDiAAzxIAADJk60iyDh9AzyQbSLMY4PAlGOkAMBIAACZY4zwxH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5v7x8fxt4P8CAAGPDSIg8gICwOKADPEt22g1jw0iIOIADPEgAAEk8YIAHYGMQ9GPESiBIAAAhPGCAKWBj8MA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpaiMfKgDpk6AACFjo6lwfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgq69UsA///QIIADDe9//9Bgf/kLAMAAECCAWQ4YAAAgI0ceICEAAQ4oAAAOMAAAEgq8q1IAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RLwH+l63hIKwHFLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgrCUlIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCsJBUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCmeCSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArZkOGAAAEgCtogsAwAATIIAIH3IAqY4YAAASCq8XSwD//9Bgv/0fcgDpk6AACB/Y9t4SCmgEX+E43hL///Bf2TbeEv//7l/o+t4SCsB4X+k63hL//+pOGAAAEgq87EsHgAAQYIADH/IA6ZOgAAhOGAAAEgGxTxyZWwA",
    [GameVersion.US]: "PGCAKWBjsHRIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj7bx8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigAzw9gIAmYYydDH2IA6ZOgAAhf6PreDiAAzxIAADJk60hmDh9AzyQbSGcY4OASGOkAMBIAACZY4yweH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5f3B8fxt4P8CAAGPDSIg8gICwOKADPEt2nBljw0iIOIADPEgAAEk8YIAGYGP+OGPESiBIAAAhPGCAKWBjsHQ8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpWpUfKgDpk6AACFjo2sMfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqq1ksA///QIIADDe9//9Bgf/kLAMAAECCAWQ4YAAAgI0bmICEAAQ4oAAAOMAAAEgqsjFIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RLwH+l63hIKsFJLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqyM1IAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCrIiUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCldvSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArV8OGAAAEgCtaAsAwAATIIAIH3IAqY4YAAASCp74SwD//9Bgv/0fcgDpk6AACB/Y9t4SClfxX+E43hL///Bf2TbeEv//7l/o+t4SCrBZX+k63hL//+pOGAAAEgqszUsHgAAQYIADH/IA6ZOgAAhOGAAAEgGsoByZWwA",
};

function decodeBinaryData(S: string): ArrayBuffer {
    return Uint8Array.from(window.atob(S), function(c) { return c.charCodeAt(0); }).buffer;
}

const enum PatchErrorCode {
    Success,
    InvalidSaveFile,
    InvalidFileNumber,
}

function patch(view: DataView, fileNumber: number): PatchErrorCode {
    const version = readString(view.buffer, 0x00, 0x06) as GameVersion;

    const validVersions = [GameVersion.JP, GameVersion.US, GameVersion.EU];
    if (!validVersions.includes(version))
        return PatchErrorCode.InvalidSaveFile;

    const internalFilename = readString(view.buffer, 0x08, 0x11);
    if (internalFilename !== 'mariost_save_file')
        return PatchErrorCode.InvalidSaveFile;

    if (fileNumber < 1 || fileNumber > 4)
        return PatchErrorCode.InvalidFileNumber;

    const offsetFile0 = ((fileNumber - 1) * 0x4000) + 0x2040;
    const offsetFile1 = offsetFile0 + 0x10000;

    function patchFilesU16(offset: number, value: number): void {
        view.setUint16(offsetFile0 + offset, value, false);
        view.setUint16(offsetFile1 + offset, value, false);
    }

    function patchFilesU32(offset: number, value: number): void {
        view.setUint32(offsetFile0 + offset, value, false);
        view.setUint32(offsetFile1 + offset, value, false);
    }

    function patchFilesBytes(offset: number, value: ArrayBuffer): void {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }

    // Write the pointer to the init ASM function.
    if (version === GameVersion.JP) {
        patchFilesU32(0x11AC, 0x803D8214);
    } else if (version === GameVersion.US) {
        patchFilesU32(0x3B4, 0x803DBDAC);
    } else if (version === GameVersion.EU) {
        patchFilesU32(0x104, 0x803E7E0C);
    }

    // Write the pointer to the current anim data for the partner.
    if (version === GameVersion.JP) {
        // JP doesn't need this pointer.
    } else if (version === GameVersion.US) {
        patchFilesU32(0x3B0, 0x802CB1A8);
    } else if (version === GameVersion.EU) {
        patchFilesU32(0x100, 0x802D6E2C);
    }

    // Make sure the selected file exists.
    patchFilesU16(0x00, 0x00);

    // Write the new file name.
    patchFilesBytes(0x11C4, makeStrBytes('REL Loader\0'));

    // Set the current follower ID.
    if (version === GameVersion.JP) {
        patchFilesU32(0x11EC, 0x4F04);
    } else {
        patchFilesU32(0x11EC, 0x4F7F);
    }

    // Write the init ASM function.
    if (version === GameVersion.JP) {
        patchFilesBytes(0x1184, decodeBinaryData(BinaryDataInit[version]));
    } else {
        patchFilesBytes(0x119C, decodeBinaryData(BinaryDataInit[version]));
    }

    // Write the main ASM function.
    if (version === GameVersion.JP) {
        patchFilesBytes(0x2140, decodeBinaryData(BinaryDataMain[version]));
    } else {
        patchFilesBytes(0x2260, decodeBinaryData(BinaryDataMain[version]));
    }

    const dataFieldSize = (version === GameVersion.JP) ? 0x2140 : 0x2260;

    let dataFieldSum = 0;
    for (let i = 0; i < dataFieldSize; i++)
        dataFieldSum = (dataFieldSum + view.getUint8(offsetFile0 + i)) >>> 0;

    // Patch in checksums.
    patchFilesU32(0x3FF8, dataFieldSum);
    patchFilesU32(0x3FFC, (~dataFieldSum) >>> 0);

    return PatchErrorCode.Success;
}

function downloadFile(filename: string, data: ArrayBuffer): void {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('download', filename);
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}

function fileSubmitted(): void {
    const input = document.querySelector<HTMLInputElement>('input#fileupload');
    const file = input.files[0];

    const fileNumberInput = document.querySelector<HTMLSelectElement>('select#filenumber');
    const fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);

    const outputFilename = `${file.name.replace(/\..*$/, '')} REL Loader.gci`;
    const reader = new FileReader();
    console.log('yay!');
    reader.onload = () => {
        console.log('yay 2!');
        const buffer = reader.result as ArrayBuffer;
        const view = new DataView(buffer);
        const res = patch(view, fileNumber);
        if (res !== PatchErrorCode.Success)
            alert(res);
        downloadFile(outputFilename, buffer);
    }
    reader.readAsArrayBuffer(file);
}

function main(): void {
    const form = document.querySelector<HTMLFormElement>('form#uploadform');
    form.onsubmit = (e) => {
        fileSubmitted();
        return false;
    };
}

window.onload = () => {
    main();
};
