# fileArrayData
fileArrayData is a Node.js module that provides utility functions for reading data from a file into an array and appending array data back into a file. It simplifies the process of handling file data in array format.


## Example:

test.txt contains UTF-8 CRLF data like:
a1;a2;a3;a4;a5;a6;a7
b1;b2;b3;b4;b5;b6;b7
...
n1;n2;n3;n4;n5;n6;n7

CRLF use "\r\n"
LR use "\n"

### Reading:
const arrayData = await getFileDataToArray("./test.txt", "\n\r", ";","utf8");

### Append:
arrayData = \[a1,a2,a3,a4,a5, ... , an\];
matrixData = \[\[a1,a2,a3,a4,a5, ... , an\],\[b1,b2,b3,b4,b5, ... , bn\], ...\];

await appendArrayDataToFile ("./test.txt", arrayData, "\n\r", ";","utf8");
await appendMatrixDataToFile ("./test.txt", matrixData, "\n\r", ";","utf8");
