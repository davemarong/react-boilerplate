const path = require("path");
const fs = require("fs");

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

const createFiles = (path, text) => {
  fs.writeFile(path, text, (err) => {
    if (err) {
      throw err;
    }
  });
};

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
createFiles("./public/index.html", index_html);
