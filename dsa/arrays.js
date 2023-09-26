// using node's buffer here
const a = new ArrayBuffer(6);
console.log(a); // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
a8[0] = 45;
a8[2] = 45;
console.log(a); // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 } // walk 8 bits, hence 0, 2 are set

const a16 = new Uint16Array(a);
a16[2] = 0x4545;
console.log(a); // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 } // walk 16 bits, 4 is set, remember endianness
