const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/rashmigr01/rashmigr01.github.io";

ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
