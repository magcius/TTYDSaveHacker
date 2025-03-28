#!/usr/bin/python3
import binascii
import sys

# stringToInt taken from text_to_bits from here:
# https://stackoverflow.com/questions/7396849/convert-binary-to-ascii-and-vice-versa
def stringToInt(string, encoding="utf-8", errors="surrogatepass"):
    bits = bin(int(binascii.hexlify(string.encode(encoding, errors)), 16))[2:]
    return int(bits.zfill(8 * ((len(bits) + 7) // 8)), 2)

# Make sure something was passed in
if len(sys.argv) < 2:
    input("You must pass in a proper TTYD gci file. Press Enter to close this window.")
    sys.exit("")

# Make sure what was passed in is a gci file
FileName = sys.argv[1]
if not FileName.endswith(".gci"):
    input("You must pass in a proper TTYD gci file. Press Enter to close this window.")
    sys.exit("")

# Check if the version number was passed in
VersionNumberString = ""
if len(sys.argv) < 3:
     while (VersionNumberString == ""):
        VersionNumberString = input("Enter the number of the version to use (1-3): ")
        
        # Make sure the input is valid
        if (not VersionNumberString.isdigit()) or (int(VersionNumberString) < 1) or (int(VersionNumberString) > 3):
            VersionNumberString = ""
else:
    VersionNumberString = sys.argv[2]
    if (not VersionNumberString.isdigit()) or (int(VersionNumberString) < 1) or (int(VersionNumberString) > 3):
        VersionNumberString = ""
        
        # Prompt for the version number to use
        while (VersionNumberString == ""):
            VersionNumberString = input("Enter the number of the version to use (1-3): ")
            
            # Make sure the input is valid
            if (not VersionNumberString.isdigit()) or (int(VersionNumberString) < 1) or (int(VersionNumberString) > 3):
                VersionNumberString = ""

# Check if the file number was passed in
FileNumberString = ""
if len(sys.argv) < 4:
    
    # Prompt for the file number to use
    while (FileNumberString == ""):
        FileNumberString = input("Enter the number of the file to hack (1-4): ")
        
        # Make sure the input is valid
        if (not FileNumberString.isdigit()) or (int(FileNumberString) < 1) or (int(FileNumberString) > 4):
            FileNumberString = ""
else:
    FileNumberString = sys.argv[3]
    
    # Make sure the input is valid
    if (not FileNumberString.isdigit()) or (int(FileNumberString) < 1) or (int(FileNumberString) > 4):
        FileNumberString = ""
        
        # Prompt for the file number to use
        while (FileNumberString == ""):
            FileNumberString = input("Enter the number of the file to hack (1-4): ")
            
            # Make sure the input is valid
            if (not FileNumberString.isdigit()) or (int(FileNumberString) < 1) or (int(FileNumberString) > 4):
                FileNumberString = ""

# Convert the file number string to a proper number
FileNumber = int(FileNumberString)

# Open the gci file
f = open(FileName, "r+b")

# Get the game id
GameId = int.from_bytes(f.read(6), byteorder="big", signed=False)

# Set up the values for the three retail game ids
ID_JP = stringToInt("G8MJ01")
ID_US = stringToInt("G8ME01")
ID_EU = stringToInt("G8MP01")

# Make sure the game id of the gci file opened is valid
if (GameId != ID_JP) and (GameId != ID_US) and (GameId != ID_EU):
    f.close()
    input("You must pass in a proper TTYD gci file. Press Enter to close this window.")
    sys.exit("")

# Get the internal filename
f.seek(0x8, 0)
InternalName = int.from_bytes(f.read(17), byteorder="big", signed=False)

# Make sure the internal filename of the gci file opened is valid
ProperInternalName = stringToInt("mariost_save_file")

if InternalName != ProperInternalName:
    f.close()
    input("You must pass in a proper TTYD gci file. Press Enter to close this window.")
    sys.exit("")

# Get the offset to the currently-selected file
OffsetFirstFile = ((FileNumber - 1) * 0x4000) + 0x2040

# Get the offset to the currently-selected file's duplicate
OffsetSecondFile = OffsetFirstFile + 0x10000

# Set up a variable to use for temporary offsets
TempOffset = 0

# Write the pointer to the init asm function
InitAsmFuncPtr = 0
if GameId == ID_JP:
    InitAsmFuncPtr = 0x803D8214
    TempOffset = 0x11AC
elif GameId == ID_US:
    InitAsmFuncPtr = 0x803DBDAC
    TempOffset = 0x3B4
else:
    InitAsmFuncPtr = 0x803E7E0C
    TempOffset = 0x104

f.seek(OffsetFirstFile + TempOffset, 0)
f.write(InitAsmFuncPtr.to_bytes(4, byteorder="big", signed=False))
f.seek(OffsetSecondFile + TempOffset, 0)
f.write(InitAsmFuncPtr.to_bytes(4, byteorder="big", signed=False))

# Write the pointer to the current anim data for the partner
# JP does not need this pointer
if GameId != ID_JP:
    AnimDataPtr = 0
    if GameId == ID_US:
        AnimDataPtr = 0x802CB1A8
        TempOffset = 0x3B0
    else:
        AnimDataPtr = 0x802D6E2C
        TempOffset = 0x100
    
    f.seek(OffsetFirstFile + TempOffset, 0)
    f.write(AnimDataPtr.to_bytes(4, byteorder="big", signed=False))
    f.seek(OffsetSecondFile + TempOffset, 0)
    f.write(AnimDataPtr.to_bytes(4, byteorder="big", signed=False))

# Make sure the selected file is an existing file
f.seek(OffsetFirstFile, 0)
f.write((0).to_bytes(2, byteorder="big", signed=False))
f.seek(OffsetSecondFile, 0)
f.write((0).to_bytes(2, byteorder="big", signed=False))

# Write the new file name
FileNameString = "REL Loader v" + VersionNumberString + "\0"
f.seek(OffsetFirstFile + 0x11C4, 0)
f.write(stringToInt(FileNameString).to_bytes(len(FileNameString), byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x11C4, 0)
f.write(stringToInt(FileNameString).to_bytes(len(FileNameString), byteorder="big", signed=False))

# Set the current follower Id
CurrentFollowerValue = 0
if GameId == ID_JP:
    CurrentFollowerValue = 0x4F04
else:
    CurrentFollowerValue = 0x4F7F

f.seek(OffsetFirstFile + 0x11E8, 0)
f.write(CurrentFollowerValue.to_bytes(4, byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x11E8, 0)
f.write(CurrentFollowerValue.to_bytes(4, byteorder="big", signed=False))

# Write the init asm function
VersionText = ""
if GameId == ID_JP:
    VersionText = "JP"
    TempOffset = 0x1184
elif GameId == ID_US:
    VersionText = "US"
    TempOffset = 0x119C
else:
    VersionText = "EU"
    TempOffset = 0x119C

# Open the file containing the init asm function
g = open("bin/Init_" + VersionText + ".bin", "rb")

# Perform the write
Func = g.read()

f.seek(OffsetFirstFile + TempOffset, 0)
for b in Func:
    f.write(b.to_bytes(1, byteorder="big", signed=False))

f.seek(OffsetSecondFile + TempOffset, 0)
for b in Func:
    f.write(b.to_bytes(1, byteorder="big", signed=False))
g.close()

# Write the main asm function
if GameId == ID_JP:
    TempOffset = 0x2140
else:
    TempOffset = 0x2260

# Open the file containing the main asm function
g = open("bin/Main_" + VersionText + "_V" + VersionNumberString + ".bin", "rb")

# Perform the write
Func = g.read()

f.seek(OffsetFirstFile + TempOffset, 0)
for b in Func:
    f.write(b.to_bytes(1, byteorder="big", signed=False))

f.seek(OffsetSecondFile + TempOffset, 0)
for b in Func:
    f.write(b.to_bytes(1, byteorder="big", signed=False))
g.close()

# Get the sum of the bytes for the data field
DataFieldSize = 0
if GameId == ID_JP:
    DataFieldSize = 0x2140
else:
    DataFieldSize = 0x2260

DataFieldSum = 0
f.seek(OffsetFirstFile, 0)

DataField = f.read(DataFieldSize)
for b in DataField:
    DataFieldSum += b

# Set the checksum of the bytes for the data field
f.seek(OffsetFirstFile + 0x3FF8, 0)
f.write(DataFieldSum.to_bytes(4, byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x3FF8, 0)
f.write(DataFieldSum.to_bytes(4, byteorder="big", signed=False))

# Set the inverted checksum of the bytes for the data field
f.seek(OffsetFirstFile + 0x3FFC, 0)
f.write((~DataFieldSum).to_bytes(4, byteorder="big", signed=True))
f.seek(OffsetSecondFile + 0x3FFC, 0)
f.write((~DataFieldSum).to_bytes(4, byteorder="big", signed=True))

f.close()
