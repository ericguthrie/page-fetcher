const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fPath = process.argv[3];

const downLoader = (url, fPath) => {
  
  request(url, (error, response, body) => {
    
    if (error) {
      console.log('Failed to download:', error);
    }
    if (response.statusCode !== 200 || !response) {
      console.log(`URL --> ${url} Didn't work \n ${error}`);
      process.exit();
    }

    if (fs.existsSync(fPath)) {
      console.log("File exists");
    } else {
      console.log("File does not exist");
    }
    

    fs.writeFile(fPath, body, (error) => {
      if (error) {
        console.log('Failed to work');
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${fPath}.`);
      }
    });
  });
};

downLoader(url, fPath);