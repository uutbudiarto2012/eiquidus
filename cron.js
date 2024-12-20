const cron = require('node-cron');
const { exec } = require('child_process');

// Fungsi untuk menjalankan perintah
function runCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
}
// Task untuk sync-blocks (setiap 1 menit)
cron.schedule('*/1 * * * *', () => {
  console.log('Running sync-blocks...');
  runCommand('npm run sync-blocks');
});

// Task untuk sync-markets (setiap 5 menit)
cron.schedule('*/5 * * * *', () => {
  console.log('Running sync-markets...');
  runCommand('npm run sync-markets');
});

// Task untuk sync-peers (setiap 5 menit)
cron.schedule('*/5 * * * *', () => {
  console.log('Running sync-peers...');
  runCommand('npm run sync-peers');
});


// Menjaga script tetap berjalan
console.log('Scheduler is running...');
