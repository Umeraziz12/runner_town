async function run() {
  try {
    const path = 'D:\\CODE\\RUNNERTOWN\\frontend\\metro.config.js';
    console.log('Attempting to import:', path);
    await import(path);
    console.log('Successfully imported!');
  } catch (err) {
    console.error('Import failed:', err);
  }
}
run();
