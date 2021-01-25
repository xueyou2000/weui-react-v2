export function uuid() {
  var chars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var val = '';
  for (var i = 0; i < 4; i++) {
    var v = Math.random() * 26;
    var g = Math.floor(v);
    val += chars[g];
  }
  return val;
}
