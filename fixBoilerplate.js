const fs = require("fs");
const path = require("path");

const publicFilesToDelete = [];
const srcFilesToDelete = [];

const index_html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`;
const foldersInSrcToCreate = [
  "components",
  "assets",
  "styles",
  "redux",
  "pages",
];
const reduxFoldersToCreate = ["actions", "reducers"];

const createFolders = () => {
  for (let i = 0; i < foldersInSrcToCreate.length; i++) {
    fs.mkdir(`./src/${foldersInSrcToCreate[i]}`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
  for (let i = 0; i < reduxFoldersToCreate.length; i++) {
    fs.mkdir(`./src/redux/${reduxFoldersToCreate[i]}`, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};
createFolders();
const createFiles = (path, text) => {
  fs.writeFile(path, text, (err) => {
    if (err) {
      throw err;
    }
  });
};
createFiles("./public/index.html", index_html);
// createFiles("./src/redux/actions/index.js", "");
// createFiles("./src/redux/reducers/index.js", "");
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
