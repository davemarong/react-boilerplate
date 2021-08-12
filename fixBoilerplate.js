const fs = require("fs");

const publicFilesToDelete = [];
const srcFilesToDelete = [];

fs.readdir("./public", (err, files) => {
  if (err) {
    throw err;
  }
  publicFilesToDelete.push(...files);

  for (let i = 0; i < publicFilesToDelete.length; i++) {
    if (publicFilesToDelete[i] === `index.html`) {
      publicFilesToDelete.splice(i, 1);
    }
  }
  deletePublicFiles("public", publicFilesToDelete);
  process.stdout.write(
    `\n \n \n You have deleted these files from the folder "public": \n ${publicFilesToDelete}`
  );
});
fs.readdir("./src", (err, files) => {
  if (err) {
    throw err;
  }
  srcFilesToDelete.push(...files);
  let number = srcFilesToDelete.length;
  let i;
  for (i = 0; i < number; i++) {
    if (
      srcFilesToDelete[i] === "App.js" ||
      srcFilesToDelete[i] === "index.js"
    ) {
      srcFilesToDelete.splice(i, 1);
      i = i - 1;
    }
  }
  deletePublicFiles("src", srcFilesToDelete);
  process.stdout.write(
    `\n \n \n You have deleted these files from the folder "src": \n ${srcFilesToDelete} \n \n \n`
  );
});

const deletePublicFiles = (folder, fileArray) => {
  for (let i = 0; i < fileArray.length; i++) {
    fs.unlinkSync(`./${folder}/${fileArray[i]}`);
  }
};
