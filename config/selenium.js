module.exports = {
  version: '3.4.0',
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      version: '2.29',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    firefox: {
      version: '0.16.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    }
  },
  logger: (message) => {
    console.log(message);
  },
  progressCb: (totalLength, progressLength, chunkLength) => {
    process.stdout.write(`Downloading ${progressLength}/${totalLength}\r`);
  }

}