
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

const enum PatchVersion {
    V1 = 1,
    V2 = 2,
}

const BinaryDataInit = {
    [GameVersion.JP]: "gI2ZwICEACBUhHAiOIRBQICtFjiApQCofYUiFH2JA6ZOgAQg",
    [GameVersion.EU]: "gI2bMICEACBUhHAiOIRCYICtHHiApQCofYUiFH2JA6ZOgAQg",
    [GameVersion.US]: "gI2asICEACBUhHAiOIRCYICtG5iApQCofYUiFH2JA6ZOgAQg",
};

const BinaryDataMain = {
    [GameVersion.JP]: {
        [PatchVersion.V1]: "PGCAKWBjUnBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj28h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA2A9gIAmYYw9XH2IA6ZOgAAhf6PreDiAA2BIAADJk60ciDh9A2CQbRyMY4MiRGOkAMBIAACZY4xSdH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5IWx8fxt4P8CAAGPDSIg8gICwOKADYEt2PGljw0iIOIADYEgAAEk8YIAGYGPr2GPESiBIAAAhPGCAKWBjUnA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpQo8fKgDpk6AACFjowsgfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqTVUsA///QIIADDe9//9Bgf/kLAMAAECCAYg4YAAAgI0WOICEAAQ4oAAAOMAAAEgqVC1IAAEJLAMAAEGiABAsA//6QYIACEgAAVg4YAAAOIAAAEgqS9VIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RL5H+l63hIKmMhLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqaqVIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCpqYUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCj/lSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIAq70OGAAAEgCrxgsAwAATIIAIH3IAqY4YAAASCoduSwD//9Bgv/0fcgDpk6AACB/Y9t4SCkBnX+E43hL///Bf2TbeEv//7l/o+t4SCpjPX+k63hL//+pOGAAAEgqVQ0sHgAAQYIADH/IA6ZOgAAhOGAAAEgGn/xyZWwA",
        [PatchVersion.V2]: "PGCAKWBjUnBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj28h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA+A9gIAmYYw9XH2IA6ZOgAAhf6PreDiAA+BIAADJk60ciDh9A+CQbRyMY4MiRGOkAMBIAACZY4xSdH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5IWx8fxt4P8CAAGPDSIg8gICwOKAD4Et2PGljw0iIOIAD4EgAAEk8YIAGYGPr2GPESiBIAAAhPGCAKWBjUnA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpQo8fKgDpk6AACFjowsgfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqTVUsA///QIIADDe9//9Bgf/kLAMAAECCAgg4YAAAgI0WOICEAAQ4oAAAOMAAAEgqVC1IAAGRLAMAAEGiABAsA//6QYIACEgAAdg4YAAAOIAAAEgqS9VIAAFtLAMAAECCAcA4gAAUSAABVXx9G3g4YAAAY+RMZH+l63hIKmMhLAMAAECCAXw4gAQASAABMXx7G3h/o+t4f2TbeDigBAA4wCAAOOAAAEgqaqVIAAEZLAMAAECCATyA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSDOwIgfwbKFHwY4EBAoAAIf5jjeH9k23hIAACpfwTDeEgAAKl8ext4f6PreH9k23h/heN4OMAiADjgAABIKmodSAAAkSwDAABAggC0f5vSFH9j23h/hON4OKAAAUgo/HUsAwABQIIAkHx6yhQ4YwAfVGMANICb/+g4hP/gOKMAQHwFIABBgQAsOKMAIJC7/+h8wyBQfJsaFJDEAAg/QIBCg1qOoIB6AARIKLgRkHoABJOfQUyTf0FQg9sANEgAAEg4YAAASAKubDhgAABIAq6QLAMAAEyCACB9yAKmOGAAAEgqHTEsA///QYL/9H3IA6ZOgAAgf2PbeEgpARV/ZNt4S///wX+j63hIKmK9f6TreEv//7E4YAAASCpUjSweAABBggAMf8gDpk6AACE4YAAASAaffHJlbAA=",
    },
    [GameVersion.EU]: {
        [PatchVersion.V1]: "PGCAKWBj8MBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj/5h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA2A9gIAmYYzbAH2IA6ZOgAAhf6PreDiAA2BIAADJk60iyDh9A2CQbSLMY4PAlGOkAMBIAACZY4zwxH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5v7x8fxt4P8CAAGPDSIg8gICwOKADYEt22g1jw0iIOIADYEgAAEk8YIAHYGMQ9GPESiBIAAAhPGCAKWBj8MA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpaiMfKgDpk6AACFjo6lwfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgq69UsA///QIIADDe9//9Bgf/kLAMAAECCAYg4YAAAgI0ceICEAAQ4oAAAOMAAAEgq8q1IAAEJLAMAAEGiABAsA//6QYIACEgAAVg4YAAAOIAAAEgq6lVIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RL5H+l63hIKwGhLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgrCSVIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCsI4UgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCmd5SwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArZAOGAAAEgCtmQsAwAATIIAIH3IAqY4YAAASCq8OSwD//9Bgv/0fcgDpk6AACB/Y9t4SCmf7X+E43hL///Bf2TbeEv//7l/o+t4SCsBvX+k63hL//+pOGAAAEgq840sHgAAQYIADH/IA6ZOgAAhOGAAAEgGxRhyZWwA",
        [PatchVersion.V2]: "PGCAKWBj8MBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj/5h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA+A9gIAmYYzbAH2IA6ZOgAAhf6PreDiAA+BIAADJk60iyDh9A+CQbSLMY4PAlGOkAMBIAACZY4zwxH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5v7x8fxt4P8CAAGPDSIg8gICwOKAD4Et22g1jw0iIOIAD4EgAAEk8YIAHYGMQ9GPESiBIAAAhPGCAKWBj8MA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpaiMfKgDpk6AACFjo6lwfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgq69UsA///QIIADDe9//9Bgf/kLAMAAECCAgg4YAAAgI0ceICEAAQ4oAAAOMAAAEgq8q1IAAGRLAMAAEGiABAsA//6QYIACEgAAdg4YAAAOIAAAEgq6lVIAAFtLAMAAECCAcA4gAAUSAABVXx9G3g4YAAAY+RMZH+l63hIKwGhLAMAAECCAXw4gAQASAABMXx7G3h/o+t4f2TbeDigBAA4wCAAOOAAAEgrCSVIAAEZLAMAAECCATyA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSDOwIgfwbKFHwY4EBAoAAIf5jjeH9k23hIAACpfwTDeEgAAKl8ext4f6PreH9k23h/heN4OMAiADjgAABIKwidSAAAkSwDAABAggC0f5vSFH9j23h/hON4OKAAAUgpmsUsAwABQIIAkHx6yhQ4YwAfVGMANICb/+g4hP/gOKMAQHwFIABBgQAsOKMAIJC7/+h8wyBQfJsaFJDEAAg/QIBDg1q54IB6AARIKVZhkHoABJOfQUyTf0FQg9sANEgAAEg4YAAASAK1uDhgAABIArXcLAMAAEyCACB9yAKmOGAAAEgqu7EsA///QYL/9H3IA6ZOgAAgf2PbeEgpn2V/ZNt4S///wX+j63hIKwE9f6TreEv//7E4YAAASCrzDSweAABBggAMf8gDpk6AACE4YAAASAbEmHJlbAA=",
    },
    [GameVersion.US]: {
        [PatchVersion.V1]: "PGCAKWBjsHRIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj7bx8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA2A9gIAmYYydDH2IA6ZOgAAhf6PreDiAA2BIAADJk60hmDh9A2CQbSGcY4OASGOkAMBIAACZY4yweH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5f3B8fxt4P8CAAGPDSIg8gICwOKADYEt2nBljw0iIOIADYEgAAEk8YIAGYGP+OGPESiBIAAAhPGCAKWBjsHQ8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpWpUfKgDpk6AACFjo2sMfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqq1ksA///QIIADDe9//9Bgf/kLAMAAECCAYg4YAAAgI0bmICEAAQ4oAAAOMAAAEgqsjFIAAEJLAMAAEGiABAsA//6QYIACEgAAVg4YAAAOIAAAEgqqdlIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RL5H+l63hIKsElLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqyKlIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCrIZUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCldmSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArVYOGAAAEgCtXwsAwAATIIAIH3IAqY4YAAASCp7vSwD//9Bgv/0fcgDpk6AACB/Y9t4SClfoX+E43hL///Bf2TbeEv//7l/o+t4SCrBQX+k63hL//+pOGAAAEgqsxEsHgAAQYIADH/IA6ZOgAAhOGAAAEgGslxyZWwA",
        [PatchVersion.V2]: "PGCAKWBjsHRIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj7bx8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA+A9gIAmYYydDH2IA6ZOgAAhf6PreDiAA+BIAADJk60hmDh9A+CQbSGcY4OASGOkAMBIAACZY4yweH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5f3B8fxt4P8CAAGPDSIg8gICwOKAD4Et2nBljw0iIOIAD4EgAAEk8YIAGYGP+OGPESiBIAAAhPGCAKWBjsHQ8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpWpUfKgDpk6AACFjo2sMfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqq1ksA///QIIADDe9//9Bgf/kLAMAAECCAgg4YAAAgI0bmICEAAQ4oAAAOMAAAEgqsjFIAAGRLAMAAEGiABAsA//6QYIACEgAAdg4YAAAOIAAAEgqqdlIAAFtLAMAAECCAcA4gAAUSAABVXx9G3g4YAAAY+RMZH+l63hIKsElLAMAAECCAXw4gAQASAABMXx7G3h/o+t4f2TbeDigBAA4wCAAOOAAAEgqyKlIAAEZLAMAAECCATyA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSDOwIgfwbKFHwY4EBAoAAIf5jjeH9k23hIAACpfwTDeEgAAKl8ext4f6PreH9k23h/heN4OMAiADjgAABIKsghSAAAkSwDAABAggC0f5vSFH9j23h/hON4OKAAAUgpWnksAwABQIIAkHx6yhQ4YwAfVGMANICb/+g4hP/gOKMAQHwFIABBgQAsOKMAIJC7/+h8wyBQfJsaFJDEAAg/QIBCg1rwcIB6AARIKRgpkHoABJOfQUyTf0FQg9sANEgAAEg4YAAASAK00DhgAABIArT0LAMAAEyCACB9yAKmOGAAAEgqezUsA///QYL/9H3IA6ZOgAAgf2PbeEgpXxl/ZNt4S///wX+j63hIKsDBf6TreEv//7E4YAAASCqykSweAABBggAMf8gDpk6AACE4YAAASAax3HJlbAA=",
    },
};

function decodeBinaryData(S: string): ArrayBuffer {
    return Uint8Array.from(window.atob(S), function(c) { return c.charCodeAt(0); }).buffer;
}

const enum PatchErrorCode {
    Success,
    NotSaveFile,
    WrongSaveFileGameID,
    WrongSaveFileInternalName,
    InvalidVersionNumber,
    InvalidFileNumber,
}

function patch(view: DataView, versionNumber: number, fileNumber: number): PatchErrorCode {
    const version = readString(view.buffer, 0x00, 0x06) as GameVersion;

    const validVersions = [GameVersion.JP, GameVersion.US, GameVersion.EU];
    if (!validVersions.includes(version))
        return PatchErrorCode.WrongSaveFileGameID;

    const internalFilename = readString(view.buffer, 0x08, 0x11);
    if (internalFilename !== 'mariost_save_file')
        return PatchErrorCode.WrongSaveFileInternalName;
    
    if (versionNumber < 1 || versionNumber > 2)
        return PatchErrorCode.InvalidVersionNumber;

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
    const newFileName = 'REL Loader v' + versionNumber + '\0'
    patchFilesBytes(0x11C4, makeStrBytes(newFileName));

    // Set the current follower ID.
    if (version === GameVersion.JP) {
        patchFilesU32(0x11E8, 0x4F04);
    } else {
        patchFilesU32(0x11E8, 0x4F7F);
    }

    // Write the init ASM function.
    if (version === GameVersion.JP) {
        patchFilesBytes(0x1184, decodeBinaryData(BinaryDataInit[version]));
    } else {
        patchFilesBytes(0x119C, decodeBinaryData(BinaryDataInit[version]));
    }

    // Write the main ASM function.
    if (version === GameVersion.JP) {
        patchFilesBytes(0x2140, decodeBinaryData(BinaryDataMain[version][versionNumber]));
    } else {
        patchFilesBytes(0x2260, decodeBinaryData(BinaryDataMain[version][versionNumber]));
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

function displayResult(e: PatchErrorCode): boolean {
    const errorMessage = document.querySelector<HTMLDivElement>('div#errormessage');

    if (e === PatchErrorCode.Success) {
        errorMessage.textContent = '';
        return true;
    } else if (e === PatchErrorCode.NotSaveFile) {
        errorMessage.textContent = 'The file you specified was not a valid .gci save file';
        return false;
    } else if (e === PatchErrorCode.WrongSaveFileGameID) {
        errorMessage.textContent = 'This save file is not for Paper Mario: The Thousand Year Door';
        return false;
    } else if (e === PatchErrorCode.WrongSaveFileInternalName) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal Paper Mario: The Thousand Year Door save file.';
        return false;
    } else if (e === PatchErrorCode.InvalidVersionNumber) {
        // should not happen
        throw "Invalid version number.";
    } else if (e === PatchErrorCode.InvalidFileNumber) {
        // should not happen
        throw "Invalid file number.";
    }
}

function fileSubmitted(): void {
    const input = document.querySelector<HTMLInputElement>('input#fileupload');
    const file = input.files[0];

    if (!file.name.endsWith('.gci')) {
        if (!displayResult(PatchErrorCode.NotSaveFile))
            return;
    }
    
    const versionNumberInput = document.querySelector<HTMLSelectElement>('select#versionnumber');
    const versionNumber = Number(versionNumberInput.selectedOptions[0].textContent);

    const fileNumberInput = document.querySelector<HTMLSelectElement>('select#filenumber');
    const fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);

    const reader = new FileReader();
    reader.onload = () => {
        const buffer = reader.result as ArrayBuffer;
        const view = new DataView(buffer);
        const res = patch(view, versionNumber, fileNumber);
        if (!displayResult(res))
            return;
        
        const outputFilename = `${file.name.replace(/\..*$/, '')}_REL_Loader_v` + versionNumber + `.gci`;
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
