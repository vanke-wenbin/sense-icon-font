const CDN_PATH = 'https://img.4009515151.com/font';

function getUnicodeTemplate(unicodeData, familyName) {
  return Object.keys(unicodeData).map(name => (
`\r
.${familyName}.${familyName}-${name}::before {
  content: "\\${unicodeData[name]}";
}`
  )).join('');
}

function getFontFaceTemplate(familyName) {
}

function getCssTemplate(name, unicodeData) {
  const familyName = name === 'main' ? `sense-font` : `sense-font-${name}`;
  return `\r
@font-face {
  font-family: "${familyName}";
  src: url('${CDN_PATH}/${familyName}.eot?t=1501061240770'); /* IE9*/
  src: url('${CDN_PATH}/${familyName}.eot?t=1501061240770#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('${CDN_PATH}/${familyName}.woff?t=1501061240770') format('woff'), /* chrome, firefox */
  url('${CDN_PATH}/${familyName}.ttf?t=1501061240770') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('${CDN_PATH}/${familyName}.svg?t=1501061240770#${familyName}') format('svg'); /* iOS 4.1- */
}

.${familyName} {
  font-family: "${familyName}";
  font-size: 16px;
  font-style: normal;
}

${getUnicodeTemplate(unicodeData, familyName)}\r
`;
}

module.exports = getCssTemplate;
