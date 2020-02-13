var _a, _b;
function readString(buffer, offs, length) {
    var u = new Uint8Array(buffer);
    var S = '';
    for (var i = 0; i < length; i++)
        S += String.fromCharCode(u[offs + i]);
    return S;
}
function writeBytes(buffer, offs, S) {
    new Uint8Array(buffer).set(new Uint8Array(S), offs);
}
function makeStrBytes(S) {
    var u = new Uint8Array(S.length);
    for (var i = 0; i < S.length; i++)
        u[i] = S.charCodeAt(i);
    return u.buffer;
}
var BinaryDataInit = (_a = {},
    _a["G8MJ01" /* JP */] = "gI2ZwICEACBUhHAiOIRBQICtFjiApQCofYUiFH2JA6ZOgAQg",
    _a["G8MP01" /* EU */] = "gI2bMICEACBUhHAiOIRCYICtHHiApQCofYUiFH2JA6ZOgAQg",
    _a["G8ME01" /* US */] = "gI2asICEACBUhHAiOIRCYICtG5iApQCofYUiFH2JA6ZOgAQg",
    _a);
var BinaryDataMain = (_b = {},
    _b["G8MJ01" /* JP */] = "PGCAKWBjUnBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj28h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigAzw9gIAmYYw9XH2IA6ZOgAAhf6PreDiAAzxIAADJk60ciDh9AzyQbRyMY4MiRGOkAMBIAACZY4xSdH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5IWx8fxt4P8CAAGPDSIg8gICwOKADPEt2PGljw0iIOIADPEgAAEk8YIAGYGPr2GPESiBIAAAhPGCAKWBjUnA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpQo8fKgDpk6AACFjowsgfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqTVUsA///QIIADDe9//9Bgf/kLAMAAECCAWQ4YAAAgI0WOICEAAQ4oAAAOMAAAEgqVC1IAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RLwH+l63hIKmNFLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqaslIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCpqhUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCj/uSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIAq8YOGAAAEgCrzwsAwAATIIAIH3IAqY4YAAASCod3SwD//9Bgv/0fcgDpk6AACB/Y9t4SCkBwX+E43hL///Bf2TbeEv//7l/o+t4SCpjYX+k63hL//+pOGAAAEgqVTEsHgAAQYIADH/IA6ZOgAAhOGAAAEgGoCByZWwA",
    _b["G8MP01" /* EU */] = "PGCAKWBj8MBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj/5h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigAzw9gIAmYYzbAH2IA6ZOgAAhf6PreDiAAzxIAADJk60iyDh9AzyQbSLMY4PAlGOkAMBIAACZY4zwxH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5v7x8fxt4P8CAAGPDSIg8gICwOKADPEt22g1jw0iIOIADPEgAAEk8YIAHYGMQ9GPESiBIAAAhPGCAKWBj8MA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpaiMfKgDpk6AACFjo6lwfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgq69UsA///QIIADDe9//9Bgf/kLAMAAECCAWQ4YAAAgI0ceICEAAQ4oAAAOMAAAEgq8q1IAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RLwH+l63hIKwHFLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgrCUlIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCsJBUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCmeCSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArZkOGAAAEgCtogsAwAATIIAIH3IAqY4YAAASCq8XSwD//9Bgv/0fcgDpk6AACB/Y9t4SCmgEX+E43hL///Bf2TbeEv//7l/o+t4SCsB4X+k63hL//+pOGAAAEgq87EsHgAAQYIADH/IA6ZOgAAhOGAAAEgGxTxyZWwA",
    _b["G8ME01" /* US */] = "PGCAKWBjsHRIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj7bx8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigAzw9gIAmYYydDH2IA6ZOgAAhf6PreDiAAzxIAADJk60hmDh9AzyQbSGcY4OASGOkAMBIAACZY4yweH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5f3B8fxt4P8CAAGPDSIg8gICwOKADPEt2nBljw0iIOIADPEgAAEk8YIAGYGP+OGPESiBIAAAhPGCAKWBjsHQ8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpWpUfKgDpk6AACFjo2sMfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqq1ksA///QIIADDe9//9Bgf/kLAMAAECCAWQ4YAAAgI0bmICEAAQ4oAAAOMAAAEgqsjFIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RLwH+l63hIKsFJLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqyM1IAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCrIiUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCldvSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArV8OGAAAEgCtaAsAwAATIIAIH3IAqY4YAAASCp74SwD//9Bgv/0fcgDpk6AACB/Y9t4SClfxX+E43hL///Bf2TbeEv//7l/o+t4SCrBZX+k63hL//+pOGAAAEgqszUsHgAAQYIADH/IA6ZOgAAhOGAAAEgGsoByZWwA",
    _b);
function decodeBinaryData(S) {
    return Uint8Array.from(window.atob(S), function (c) { return c.charCodeAt(0); }).buffer;
}
function patch(view, fileNumber) {
    var version = readString(view.buffer, 0x00, 0x06);
    var validVersions = ["G8MJ01" /* JP */, "G8ME01" /* US */, "G8MP01" /* EU */];
    if (!validVersions.includes(version))
        return 2 /* WrongSaveFileGameID */;
    var internalFilename = readString(view.buffer, 0x08, 0x11);
    if (internalFilename !== 'mariost_save_file')
        return 3 /* WrongSaveFileInternalName */;
    if (fileNumber < 1 || fileNumber > 4)
        return 4 /* InvalidFileNumber */;
    var offsetFile0 = ((fileNumber - 1) * 0x4000) + 0x2040;
    var offsetFile1 = offsetFile0 + 0x10000;
    function patchFilesU16(offset, value) {
        view.setUint16(offsetFile0 + offset, value, false);
        view.setUint16(offsetFile1 + offset, value, false);
    }
    function patchFilesU32(offset, value) {
        view.setUint32(offsetFile0 + offset, value, false);
        view.setUint32(offsetFile1 + offset, value, false);
    }
    function patchFilesBytes(offset, value) {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }
    // Write the pointer to the init ASM function.
    if (version === "G8MJ01" /* JP */) {
        patchFilesU32(0x11AC, 0x803D8214);
    }
    else if (version === "G8ME01" /* US */) {
        patchFilesU32(0x3B4, 0x803DBDAC);
    }
    else if (version === "G8MP01" /* EU */) {
        patchFilesU32(0x104, 0x803E7E0C);
    }
    // Write the pointer to the current anim data for the partner.
    if (version === "G8MJ01" /* JP */) {
        // JP doesn't need this pointer.
    }
    else if (version === "G8ME01" /* US */) {
        patchFilesU32(0x3B0, 0x802CB1A8);
    }
    else if (version === "G8MP01" /* EU */) {
        patchFilesU32(0x100, 0x802D6E2C);
    }
    // Make sure the selected file exists.
    patchFilesU16(0x00, 0x00);
    // Write the new file name.
    patchFilesBytes(0x11C4, makeStrBytes('REL Loader\0'));
    // Set the current follower ID.
    if (version === "G8MJ01" /* JP */) {
        patchFilesU32(0x11EC, 0x4F04);
    }
    else {
        patchFilesU32(0x11EC, 0x4F7F);
    }
    // Write the init ASM function.
    if (version === "G8MJ01" /* JP */) {
        patchFilesBytes(0x1184, decodeBinaryData(BinaryDataInit[version]));
    }
    else {
        patchFilesBytes(0x119C, decodeBinaryData(BinaryDataInit[version]));
    }
    // Write the main ASM function.
    if (version === "G8MJ01" /* JP */) {
        patchFilesBytes(0x2140, decodeBinaryData(BinaryDataMain[version]));
    }
    else {
        patchFilesBytes(0x2260, decodeBinaryData(BinaryDataMain[version]));
    }
    var dataFieldSize = (version === "G8MJ01" /* JP */) ? 0x2140 : 0x2260;
    var dataFieldSum = 0;
    for (var i = 0; i < dataFieldSize; i++)
        dataFieldSum = (dataFieldSum + view.getUint8(offsetFile0 + i)) >>> 0;
    // Patch in checksums.
    patchFilesU32(0x3FF8, dataFieldSum);
    patchFilesU32(0x3FFC, (~dataFieldSum) >>> 0);
    return 0 /* Success */;
}
function downloadFile(filename, data) {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('download', filename);
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}
function displayResult(e) {
    var errorMessage = document.querySelector('div#errormessage');
    if (e === 0 /* Success */) {
        errorMessage.textContent = '';
        return true;
    }
    else if (e === 1 /* NotSaveFile */) {
        errorMessage.textContent = 'The file you specified was not a valid .gci save file';
        return false;
    }
    else if (e === 2 /* WrongSaveFileGameID */) {
        errorMessage.textContent = 'This save file is not for Paper Mario: The Thousand Year Door';
        return false;
    }
    else if (e === 3 /* WrongSaveFileInternalName */) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal Paper Mario: The Thousand Year Door save file.';
        return false;
    }
    else if (e === 4 /* InvalidFileNumber */) {
        // should not happen
        throw "whoops";
    }
}
function fileSubmitted() {
    var input = document.querySelector('input#fileupload');
    var file = input.files[0];
    if (!file.name.endsWith('.gci')) {
        if (!displayResult(1 /* NotSaveFile */))
            return;
    }
    var fileNumberInput = document.querySelector('select#filenumber');
    var fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);
    var outputFilename = file.name.replace(/\..*$/, '') + "_REL_Loader.gci";
    var reader = new FileReader();
    reader.onload = function () {
        var buffer = reader.result;
        var view = new DataView(buffer);
        var res = patch(view, fileNumber);
        if (!displayResult(res))
            return;
        downloadFile(outputFilename, buffer);
    };
    reader.readAsArrayBuffer(file);
}
function main() {
    var form = document.querySelector('form#uploadform');
    form.onsubmit = function (e) {
        fileSubmitted();
        return false;
    };
}
window.onload = function () {
    main();
};
