const fs = require("fs");
const path = require("path");

console.log(__dirname);

const publicFiles = fs.readdirSync("./public");
const srcFiles = fs.readdirSync("./src");

console.log(publicFiles, srcFiles);

const removePublicFiles = (file) => {
  fs.unlinkSync(`./public/${file}`);
};
