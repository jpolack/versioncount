const parser = require('./src/parser');
const stringifier = require('./src/stringifier');
const counter = require('./src/counter');

const start = async () => {
  const path = process.argv[2];
  const countUp = process.argv[3];

  const { error, version } = await parser.parse(path);

  if (error) {
    console.error(`Path could not be parsed: ${error}`);
    process.exit(1);
  }

  if (!countUp) {
    console.log('Version is:', stringifier.stringify(version));
    console.log('Please pass a second argument to count the version up');
  }

  counter.count(version, countUp, path);
};

start();
