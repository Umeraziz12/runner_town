try {
  const path = 'D:\\CODE\\RUNNERTOWN\\frontend\\metro.config.js';
  console.log('Attempting to require:', path);
  const config = require(path);
  console.log('Successfully required!');
} catch (err) {
  console.error('Require failed:', err);
}
