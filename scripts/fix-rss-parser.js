const fs = require('fs');
const path = require('path');

// Target file path relative to this script
const targetFile = path.join(__dirname, '..', 'node_modules', 'rss-parser', 'lib', 'parser.js');

if (!fs.existsSync(targetFile)) {
  console.warn('rss-parser not found at expected path:', targetFile);
  process.exit(0);
}

let content = fs.readFileSync(targetFile, 'utf8');
let modified = false;

// Fix 1: Replace url.parse with new URL()
const search1 = "let urlParts = url.parse(feedUrl);";
const replace1 = `const parsed = new URL(feedUrl);
    let urlParts = {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      href: parsed.href
    };
    if (parsed.port) urlParts.port = parsed.port;
    if (parsed.username || parsed.password) {
      urlParts.auth = \`\${parsed.username}:\${parsed.password}\`;
    }`;

if (content.includes(search1)) {
  content = content.replace(search1, replace1);
  modified = true;
  console.log('Applied fix 1/2 to rss-parser');
} else if (content.includes('const parsed = new URL(feedUrl);')) {
  console.log('Fix 1/2 already present');
} else {
  console.warn('Could not find code block for Fix 1 in rss-parser');
}

// Fix 2: Replace url.resolve with new URL().href
const search2 = "const newLocation = url.resolve(feedUrl, res.headers['location']);";
const replace2 = "const newLocation = new URL(res.headers['location'], feedUrl).href;";

if (content.includes(search2)) {
  content = content.replace(search2, replace2);
  modified = true;
  console.log('Applied fix 2/2 to rss-parser');
} else if (content.includes("const newLocation = new URL(res.headers['location'], feedUrl).href;")) {
  console.log('Fix 2/2 already present');
} else {
  console.warn('Could not find code block for Fix 2 in rss-parser');
}

if (modified) {
  fs.writeFileSync(targetFile, content);
  console.log('Successfully patched rss-parser');
} else {
  console.log('No changes needed for rss-parser');
}
