// Color formatting libraries may not be available when this script is run.
function red(text) {
  return '\x1b[31m' + text + '\x1b[0m';
}
function cyan(text) {
  return '\x1b[36m' + text + '\x1b[0m';
}
function green(text) {
  return '\x1b[32m' + text + '\x1b[0m';
}
function yellow(text) {
  return '\x1b[33m' + text + '\x1b[0m';
}

// only allow NPM to install, not yarn
if (process.env.npm_execpath.indexOf('npm') === -1) {
  console.log(
    red('*** This project uses NPM for package management ***'),
    '\n'
  );
  console.log(yellow('To install all packages:'));
  console.log(cyan('$'), 'npm i', '\n');
  console.log(
    yellow('To install a new (runtime) package to "dependencies":')
  );
  console.log(cyan('$'), 'npm i [package_name@version]', '\n');
  console.log(
    yellow('To install a new package to "devDependencies":')
  );
  console.log(
    cyan('$'),
    'npm i --save-dev [package_name@version]',
    '\n'
  );
  console.log(yellow('To upgrade a package:'));
  console.log(cyan('$'), 'npm up [package_name@version]', '\n');
  console.log(yellow('To remove a package:'));
  console.log(cyan('$'), 'npm r [package_name]', '\n');
  process.exit(1);
}
