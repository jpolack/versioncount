const parser = require('./src/parser');

const start = async () => {
  const path = process.argv[2];

  const { error } = await parser.parse(path);

  if (error) {
    console.error(`Path could not be parsed: ${error}`);
    process.exit(1);
  }
};

start();
