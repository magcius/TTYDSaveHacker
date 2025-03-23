var _a, _b, _c, _d, _e;
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
    _b["G8MJ01" /* JP */] = (_c = {},
        _c[1 /* V1 */] = "PGCAKWBjUnBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj28h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA2A9gIAmYYw9XH2IA6ZOgAAhf6PreDiAA2BIAADJk60ciDh9A2CQbRyMY4MiRGOkAMBIAACZY4xSdH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5IWx8fxt4P8CAAGPDSIg8gICwOKADYEt2PGljw0iIOIADYEgAAEk8YIAGYGPr2GPESiBIAAAhPGCAKWBjUnA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpQo8fKgDpk6AACFjowsgfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqTVUsA///QIIADDe9//9Bgf/kLAMAAECCAYg4YAAAgI0WOICEAAQ4oAAAOMAAAEgqVC1IAAEJLAMAAEGiABAsA//6QYIACEgAAVg4YAAAOIAAAEgqS9VIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RL5H+l63hIKmMhLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqaqVIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCpqYUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCj/lSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIAq70OGAAAEgCrxgsAwAATIIAIH3IAqY4YAAASCoduSwD//9Bgv/0fcgDpk6AACB/Y9t4SCkBnX+E43hL///Bf2TbeEv//7l/o+t4SCpjPX+k63hL//+pOGAAAEgqVQ0sHgAAQYIADH/IA6ZOgAAhOGAAAEgGn/xyZWwA",
        _c[2 /* V2 */] = "PGCAKWBjUnBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj28h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA+A9gIAmYYw9XH2IA6ZOgAAhf6PreDiAA+BIAADJk60ciDh9A+CQbRyMY4MiRGOkAMBIAACZY4xSdH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5IWx8fxt4P8CAAGPDSIg8gICwOKAD4Et2PGljw0iIOIAD4EgAAEk8YIAGYGPr2GPESiBIAAAhPGCAKWBjUnA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpQo8fKgDpk6AACFjowsgfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqTVUsA///QIIADDe9//9Bgf/kLAMAAECCAgg4YAAAgI0WOICEAAQ4oAAAOMAAAEgqVC1IAAGRLAMAAEGiABAsA//6QYIACEgAAdg4YAAAOIAAAEgqS9VIAAFtLAMAAECCAcA4gAAUSAABVXx9G3g4YAAAY+RMZH+l63hIKmMhLAMAAECCAXw4gAQASAABMXx7G3h/o+t4f2TbeDigBAA4wCAAOOAAAEgqaqVIAAEZLAMAAECCATyA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSDOwIgfwbKFHwY4EBAoAAIf5jjeH9k23hIAACpfwTDeEgAAKl8ext4f6PreH9k23h/heN4OMAiADjgAABIKmodSAAAkSwDAABAggC0f5vSFH9j23h/hON4OKAAAUgo/HUsAwABQIIAkHx6yhQ4YwAfVGMANICb/+g4hP/gOKMAQHwFIABBgQAsOKMAIJC7/+h8wyBQfJsaFJDEAAg/QIBCg1qOoIB6AARIKLgRkHoABJOfQUyTf0FQg9sANEgAAEg4YAAASAKubDhgAABIAq6QLAMAAEyCACB9yAKmOGAAAEgqHTEsA///QYL/9H3IA6ZOgAAgf2PbeEgpARV/ZNt4S///wX+j63hIKmK9f6TreEv//7E4YAAASCpUjSweAABBggAMf8gDpk6AACE4YAAASAaffHJlbAA=",
        _c[3 /* V3 */] = "PGCAKWBjUnA8gHwIYIQCpoCjAAB8BSAAQIIAMEgAAAV8iAKmOIQANEgAATWAbZCwOIAAAZCDEng8YIAGYGPbyHxpA6ZOgAQgkIMAAEgAASVL///clCH/4HwIAqaQAQAkv4EACHx+G3h8nyN4P6CA8D+AgCl/o+t4SAAABXyIAqY4hP+EOKAErD2AgCZhjD1cfYgDpk6AACF/o+t4OIAErEgAANWTrRyIOH0ErJBtHIxjgyJEY6QA4EgAAKVjjFJ0fYkDpn/D83h/5Pt4u4EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gIDwYIQBAEgAAGl/4/t4SzkhTHx/G3g/wIAAY8NIiDyAgPA4oASsSzY8SWPDSIg4gASsSAAAVTxggAJgY/w8Y8RKTEgAAC1jw1XgY8RKbEgAACE8YIApYGNScDyAgABghEjcSAAADX/j+3hIQDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/6HwIAqaQAQAcv6EACHx/G3h8niN4P6CAKWOlCjx8qAOmToAAIWOjCyB8aAOmf+P7eH/E83hOgAAhu6EACIABABx8CAOmOCEAGE6AACBsaIBAKAj02ECiABA9AIAAgQhBSHzoOFB8FjoUSAKx2JQh/7B8CAKmkAEAVL7BACiQYQAIkIEADDxggPA4gAAAOKAErEgABiU4gASsS///ZYPtD7CDzRxQP6CAADuAAACTnUFISCociT9gAA9je0JAOGAAADiAAAA4oAAASCpMySwD//9AggAMN3v//0GB/+QsAwAAQIICFGODoAA4gP/gf8UgOHyjKFB8pCA4kI0cUDhgAAA4oAAAOMAAAEgqU5FIAAFlLAMAAEGiABAsA//6QYIACEgAAaQ4YAAAOIAAAEgqSzlIAAFBLAMAAECCAYw7YQAUOGAAAGOkTTB/Zdt4SCpijSwDAABAggFoOGAEADiAACBIKLvdfHkbeH9j23h/JMt4OKAEADjAIAA44AAASCpqDUgAAPEsAwAAOKAEAECCAQyA2QBAO0YB/1daACyDGQJIgHkCRHwYG5Z8ABnWfADAUUGiABx/BMN4fKMA0H8FKDh/BRoUfITAUHzGIhSC2QIgfuayFHwX0EBAoAAIf1fTeJPtD7B+47t4OIAAIEgou1F8eRt4OIAEAEv//gV/Y9t4fyTLeH9F03g4wCIAOOAAAEgqaXlIAABdLAMAAH9F03hAggB4f1nCFH8jy3h/RNN4OKAAAUgo+80sAwABQIIAUHx4shR8fxoUkG0PsDiAAAB8uLhQSAAEYXyYuFBL//2hk11BTJM9QVCDmQA0SAAASCwDAABMggAgPICAQYBk3YQsA///QYL/+E6AACB/I8t4SCkArX7lu3h8uit4fyPLeDiAAABIAAQRf0TTeEv//VGT7Q+wf2PbeEgqYj04YAAASCpUFYBtHFA4gAAAYIWgAEgAA+U4gAAAYISgAEv//SGTzRxQLBwAAEGCAAx/iAOmToAAIYBtD7B8fxhQOGMAH1RjADSAnUFIfGQaFJB9QUiAYQAIgIEADLrBACiAAQBUfAgDpjghAFCUIf/wSAAIuHJlbAA=",
        _c),
    _b["G8MP01" /* EU */] = (_d = {},
        _d[1 /* V1 */] = "PGCAKWBj8MBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj/5h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA2A9gIAmYYzbAH2IA6ZOgAAhf6PreDiAA2BIAADJk60iyDh9A2CQbSLMY4PAlGOkAMBIAACZY4zwxH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5v7x8fxt4P8CAAGPDSIg8gICwOKADYEt22g1jw0iIOIADYEgAAEk8YIAHYGMQ9GPESiBIAAAhPGCAKWBj8MA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpaiMfKgDpk6AACFjo6lwfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgq69UsA///QIIADDe9//9Bgf/kLAMAAECCAYg4YAAAgI0ceICEAAQ4oAAAOMAAAEgq8q1IAAEJLAMAAEGiABAsA//6QYIACEgAAVg4YAAAOIAAAEgq6lVIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RL5H+l63hIKwGhLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgrCSVIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCsI4UgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCmd5SwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArZAOGAAAEgCtmQsAwAATIIAIH3IAqY4YAAASCq8OSwD//9Bgv/0fcgDpk6AACB/Y9t4SCmf7X+E43hL///Bf2TbeEv//7l/o+t4SCsBvX+k63hL//+pOGAAAEgq840sHgAAQYIADH/IA6ZOgAAhOGAAAEgGxRhyZWwA",
        _d[2 /* V2 */] = "PGCAKWBj8MBIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj/5h8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA+A9gIAmYYzbAH2IA6ZOgAAhf6PreDiAA+BIAADJk60iyDh9A+CQbSLMY4PAlGOkAMBIAACZY4zwxH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5v7x8fxt4P8CAAGPDSIg8gICwOKAD4Et22g1jw0iIOIAD4EgAAEk8YIAHYGMQ9GPESiBIAAAhPGCAKWBj8MA8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpaiMfKgDpk6AACFjo6lwfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgq69UsA///QIIADDe9//9Bgf/kLAMAAECCAgg4YAAAgI0ceICEAAQ4oAAAOMAAAEgq8q1IAAGRLAMAAEGiABAsA//6QYIACEgAAdg4YAAAOIAAAEgq6lVIAAFtLAMAAECCAcA4gAAUSAABVXx9G3g4YAAAY+RMZH+l63hIKwGhLAMAAECCAXw4gAQASAABMXx7G3h/o+t4f2TbeDigBAA4wCAAOOAAAEgrCSVIAAEZLAMAAECCATyA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSDOwIgfwbKFHwY4EBAoAAIf5jjeH9k23hIAACpfwTDeEgAAKl8ext4f6PreH9k23h/heN4OMAiADjgAABIKwidSAAAkSwDAABAggC0f5vSFH9j23h/hON4OKAAAUgpmsUsAwABQIIAkHx6yhQ4YwAfVGMANICb/+g4hP/gOKMAQHwFIABBgQAsOKMAIJC7/+h8wyBQfJsaFJDEAAg/QIBDg1q54IB6AARIKVZhkHoABJOfQUyTf0FQg9sANEgAAEg4YAAASAK1uDhgAABIArXcLAMAAEyCACB9yAKmOGAAAEgqu7EsA///QYL/9H3IA6ZOgAAgf2PbeEgpn2V/ZNt4S///wX+j63hIKwE9f6TreEv//7E4YAAASCrzDSweAABBggAMf8gDpk6AACE4YAAASAbEmHJlbAA=",
        _d[3 /* V3 */] = "PGCAKWBj8MA8gHwIYIQCpoCjAAB8BSAAQIIAMEgAAAV8iAKmOIQANEgAATWAbZCwOIAAAZCDEng8YIAGYGP/mHxpA6ZOgAQgkIMAAEgAASVL///clCH/4HwIAqaQAQAkv4EACHx+G3h8nyN4P6CA8D+AgCl/o+t4SAAABXyIAqY4hP+EOKAEoD2AgCZhjNsAfYgDpk6AACF/o+t4OIAEoEgAANWTrSLIOH0EoJBtIsxjg8CUY6QA4EgAAKVjjPDEfYkDpn/D83h/5Pt4u4EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gIDwYIQBAEgAAGl/4/t4Szm/nHx/G3g/wIAAY8NIiDyAgPA4oASgSzbZ7WPDSIg4gASgSAAAVTxggANgYwNwY8RKTEgAAC1jw1XgY8RKYEgAACE8YIApYGPwwDyAgABghEjcSAAADX/j+3hIQDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/6HwIAqaQAQAcv6EACHx/G3h8niN4P6CAKWOlqIx8qAOmToAAIWOjqXB8aAOmf+P7eH/E83hOgAAhu6EACIABABx8CAOmOCEAGE6AACA9AIAAgQhBSHzIMFB8AzIUSAK5GJQh/7B8CAKmkAEAVL7BACiQYQAIkIEADDxggPA4gAAAOKAEoEgABjE4gASgS///cYPtFfCDzSKQP6CAADuAAACTnUFISCq7FT9gAA9je0JAOGAAADiAAAA4oAAASCrrVSwD//9AggAMN3v//0GB/+QsAwAAQIICFGODoAA4gP/gf8UgOHyjKFB8pCA4kI0ikDhgAAA4oAAAOMAAAEgq8h1IAAFlLAMAAEGiABAsA//6QYIACEgAAaQ4YAAAOIAAAEgq6cVIAAFBLAMAAECCAYw7YQAUOGAAAGOkTSR/Zdt4SCsBGSwDAABAggFoOGAEADiAACBIKVo5fHkbeH9j23h/JMt4OKAEADjAIAA44AAASCsImUgAAPEsAwAAOKAEAECCAQyA2QBAO0YB/1daACyDGQJIgHkCRHwYG5Z8ABnWfADAUUGiABx/BMN4fKMA0H8FKDh/BRoUfITAUHzGIhSC2QIgfuayFHwX0EBAoAAIf1fTeJPtFfB+47t4OIAAIEgpWa18eRt4OIAEAEv//hF/Y9t4fyTLeH9F03g4wCIAOOAAAEgrCAVIAABdLAMAAH9F03hAggB4f1nCFH8jy3h/RNN4OKAAAUgpmiksAwABQIIAUHx4shR8fxoUkG0V8DiAAAB8uLhQSAAEbXyYuFBL//2tk11BTJM9QVCDmQA0SAAASCwDAABMggAgPICAQoBkAoQsA///QYL/+E6AACB/I8t4SCmfCX7lu3h8uit4fyPLeDiAAABIAAQdf0TTeEv//V2T7RXwf2PbeEgrAMk4YAAASCryoYBtIpA4gAAAYIWgAEgAA/E4gAAAYISgAEv//S2TzSKQLBwAAEGCAAx/iAOmToAAIYBtFfB8fxhQOGMAH1RjADSAnUFIfGQaFJB9QUiAYQAIgIEADLrBACiAAQBUfAgDpjghAFCUIf/wSAAIxHJlbAA=",
        _d),
    _b["G8ME01" /* US */] = (_e = {},
        _e[1 /* V1 */] = "PGCAKWBjsHRIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj7bx8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA2A9gIAmYYydDH2IA6ZOgAAhf6PreDiAA2BIAADJk60hmDh9A2CQbSGcY4OASGOkAMBIAACZY4yweH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5f3B8fxt4P8CAAGPDSIg8gICwOKADYEt2nBljw0iIOIADYEgAAEk8YIAGYGP+OGPESiBIAAAhPGCAKWBjsHQ8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpWpUfKgDpk6AACFjo2sMfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqq1ksA///QIIADDe9//9Bgf/kLAMAAECCAYg4YAAAgI0bmICEAAQ4oAAAOMAAAEgqsjFIAAEJLAMAAEGiABAsA//6QYIACEgAAVg4YAAAOIAAAEgqqdlIAADlLAMAAECCAUA4gAAUSAAAzXx9G3g4YAAAY+RL5H+l63hIKsElLAMAAECCAPw4gAIASAAAqXx7G3h/o+t4f2TbeDigAgA4wCAAOOAAAEgqyKlIAACRLAMAAECCALyDmwBAO5wB/1ecACx/ZNt4SAAAZX+E43hIAABlfHsbeH+j63h/ZNt4f4XjeDjAIgA44AAASCrIZUgAAE0sAwAAQIIAeICbACBIAAA1fHwbeH9j23h/hON4SCldmSwDAAFAggBIk59BTJN/QVCD2wA0SAAAUDhgAABIArVYOGAAAEgCtXwsAwAATIIAIH3IAqY4YAAASCp7vSwD//9Bgv/0fcgDpk6AACB/Y9t4SClfoX+E43hL///Bf2TbeEv//7l/o+t4SCrBQX+k63hL//+pOGAAAEgqsxEsHgAAQYIADH/IA6ZOgAAhOGAAAEgGslxyZWwA",
        _e[2 /* V2 */] = "PGCAKWBjsHRIAAAFfIgCpjiEAChIAAEdgG2QsDiAAAGQgxJ4PGCABmBj7bx8aQOmToAEIJQh/+B8CAKmkAEAJL+BAAh8fht4fJ8jeD+ggLA/gIApf6PreEgAAAV8iAKmOIT/pDigA+A9gIAmYYydDH2IA6ZOgAAhf6PreDiAA+BIAADJk60hmDh9A+CQbSGcY4OASGOkAMBIAACZY4yweH2JA6Z/w/N4f+T7eLuBAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYzu0PICAsGCEAOBIAABdf+P7eEt5f3B8fxt4P8CAAGPDSIg8gICwOKAD4Et2nBljw0iIOIAD4EgAAEk8YIAGYGP+OGPESiBIAAAhPGCAKWBjsHQ8gIAAYIRIvEgAAA1/4/t4SIA6jHyDIFBUhAG6PKBIAHylI3iQowAAOIAABJQh/+B8CAKmkAEAJL+hAAh8fxt4fJ4jeD+ggCljpWpUfKgDpk6AACFjo2sMfGgDpn/j+3h/xPN4ToAAIbuhAAiAAQAkfAgDpjghACBOgAAgP+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgqq1ksA///QIIADDe9//9Bgf/kLAMAAECCAgg4YAAAgI0bmICEAAQ4oAAAOMAAAEgqsjFIAAGRLAMAAEGiABAsA//6QYIACEgAAdg4YAAAOIAAAEgqqdlIAAFtLAMAAECCAcA4gAAUSAABVXx9G3g4YAAAY+RMZH+l63hIKsElLAMAAECCAXw4gAQASAABMXx7G3h/o+t4f2TbeDigBAA4wCAAOOAAAEgqyKlIAAEZLAMAAECCATyA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSDOwIgfwbKFHwY4EBAoAAIf5jjeH9k23hIAACpfwTDeEgAAKl8ext4f6PreH9k23h/heN4OMAiADjgAABIKsghSAAAkSwDAABAggC0f5vSFH9j23h/hON4OKAAAUgpWnksAwABQIIAkHx6yhQ4YwAfVGMANICb/+g4hP/gOKMAQHwFIABBgQAsOKMAIJC7/+h8wyBQfJsaFJDEAAg/QIBCg1rwcIB6AARIKRgpkHoABJOfQUyTf0FQg9sANEgAAEg4YAAASAK00DhgAABIArT0LAMAAEyCACB9yAKmOGAAAEgqezUsA///QYL/9H3IA6ZOgAAgf2PbeEgpXxl/ZNt4S///wX+j63hIKsDBf6TreEv//7E4YAAASCqykSweAABBggAMf8gDpk6AACE4YAAASAax3HJlbAA=",
        _e[3 /* V3 */] = "PGCAKWBjsHQ8gHwIYIQCpoCjAAB8BSAAQIIAMEgAAAV8iAKmOIQANEgAATWAbZCwOIAAAZCDEng8YIAGYGPtvHxpA6ZOgAQgkIMAAEgAASVL///clCH/4HwIAqaQAQAkv4EACHx+G3h8nyN4P6CA8D+AgCl/o+t4SAAABXyIAqY4hP+EOKAEoD2AgCZhjJ0MfYgDpk6AACF/o+t4OIAEoEgAANWTrSGYOH0EoJBtIZxjg4BIY6QA4EgAAKVjjLB4fYkDpn/D83h/5Pt4u4EACIABACR8CAOmOCEAIE6ABCB8fxt4PGCBMGBjO7Q8gIDwYIQBAEgAAGl/4/t4Szl/UHx/G3g/wIAAY8NIiDyAgPA4oASgSzab+WPDSIg4gASgSAAAVTxggANgYwKIY8RKTEgAAC1jw1XgY8RKYEgAACE8YIApYGOwdDyAgABghEjcSAAADX/j+3hIQDpgfIMgUFSEAbo8oEgAfKUjeJCjAAA4gAAElCH/6HwIAqaQAQAcv6EACHx/G3h8niN4P6CAKWOlalR8qAOmToAAIWOjawx8aAOmf+P7eH/E83hOgAAhu6EACIABABx8CAOmOCEAGE6AACA9AIAAgQhBSHzIMFB8AzIUSAK4MJQh/7B8CAKmkAEAVL7BACiQYQAIkIEADDxggPA4gAAAOKAEoEgABjE4gASgS///cYPtFRCDzSFgP6CAADuAAACTnUFISCp6mT9gAA9je0JAOGAAADiAAAA4oAAASCqq2SwD//9AggAMN3v//0GB/+QsAwAAQIICFGODoAA4gP/gf8UgOHyjKFB8pCA4kI0hYDhgAAA4oAAAOMAAAEgqsaFIAAFlLAMAAEGiABAsA//6QYIACEgAAaQ4YAAAOIAAAEgqqUlIAAFBLAMAAECCAYw7YQAUOGAAAGOkTSR/Zdt4SCrAnSwDAABAggFoOGAEADiAACBIKRwBfHkbeH9j23h/JMt4OKAEADjAIAA44AAASCrIHUgAAPEsAwAAOKAEAECCAQyA2QBAO0YB/1daACyDGQJIgHkCRHwYG5Z8ABnWfADAUUGiABx/BMN4fKMA0H8FKDh/BRoUfITAUHzGIhSC2QIgfuayFHwX0EBAoAAIf1fTeJPtFRB+47t4OIAAIEgpG3V8eRt4OIAEAEv//hF/Y9t4fyTLeH9F03g4wCIAOOAAAEgqx4lIAABdLAMAAH9F03hAggB4f1nCFH8jy3h/RNN4OKAAAUgpWd0sAwABQIIAUHx4shR8fxoUkG0VEDiAAAB8uLhQSAAEbXyYuFBL//2tk11BTJM9QVCDmQA0SAAASCwDAABMggAgPICAQYBkO4QsA///QYL/+E6AACB/I8t4SClevX7lu3h8uit4fyPLeDiAAABIAAQdf0TTeEv//V2T7RUQf2PbeEgqwE04YAAASCqyJYBtIWA4gAAAYIWgAEgAA/E4gAAAYISgAEv//S2TzSFgLBwAAEGCAAx/iAOmToAAIYBtFRB8fxhQOGMAH1RjADSAnUFIfGQaFJB9QUiAYQAIgIEADLrBACiAAQBUfAgDpjghAFCUIf/wSAAIxHJlbAA=",
        _e),
    _b);
function decodeBinaryData(S) {
    return Uint8Array.from(window.atob(S), function (c) { return c.charCodeAt(0); }).buffer;
}
function patch(view, versionNumber, fileNumber) {
    var version = readString(view.buffer, 0x00, 0x06);
    var validVersions = ["G8MJ01" /* JP */, "G8ME01" /* US */, "G8MP01" /* EU */];
    if (!validVersions.includes(version))
        return 2 /* WrongSaveFileGameID */;
    var internalFilename = readString(view.buffer, 0x08, 0x11);
    if (internalFilename !== 'mariost_save_file')
        return 3 /* WrongSaveFileInternalName */;
    if (versionNumber < 1 || versionNumber > 3)
        return 4 /* InvalidVersionNumber */;
    if (fileNumber < 1 || fileNumber > 4)
        return 5 /* InvalidFileNumber */;
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
    var newFileName = 'REL Loader v' + versionNumber + '\0';
    patchFilesBytes(0x11C4, makeStrBytes(newFileName));
    // Set the current follower ID.
    if (version === "G8MJ01" /* JP */) {
        patchFilesU32(0x11E8, 0x4F04);
    }
    else {
        patchFilesU32(0x11E8, 0x4F7F);
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
        patchFilesBytes(0x2140, decodeBinaryData(BinaryDataMain[version][versionNumber]));
    }
    else {
        patchFilesBytes(0x2260, decodeBinaryData(BinaryDataMain[version][versionNumber]));
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
        errorMessage.textContent = 'The file you specified is not a valid .gci save file';
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
    else if (e === 4 /* InvalidVersionNumber */) {
        // should not happen
        throw "Invalid version number.";
    }
    else if (e === 5 /* InvalidFileNumber */) {
        // should not happen
        throw "Invalid file number.";
    }
}
function fileSubmitted() {
    var input = document.querySelector('input#fileupload');
    var file = input.files[0];
    if (!file.name.endsWith('.gci')) {
        if (!displayResult(1 /* NotSaveFile */))
            return;
    }
    var versionNumberInput = document.querySelector('select#versionnumber');
    var versionNumber = Number(versionNumberInput.selectedOptions[0].textContent);
    var fileNumberInput = document.querySelector('select#filenumber');
    var fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);
    var reader = new FileReader();
    reader.onload = function () {
        var buffer = reader.result;
        var view = new DataView(buffer);
        var res = patch(view, versionNumber, fileNumber);
        if (!displayResult(res))
            return;
        var outputFilename = file.name.replace(/\..*$/, '') + "_REL_Loader_v" + versionNumber + ".gci";
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
