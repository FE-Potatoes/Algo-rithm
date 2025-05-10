const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [a, ...b] = input;

const [N, M] = a.split(" ").map(Number);

const site = b.slice(0, N);
const findSite = b.slice(N);

const pwMatch = {};
for (let address of site) {
  const [siteUrl, password] = address.split(" ");
  // 이걸 포함하면 시간초과..
  //   if (findSite.includes(siteUrl)) {
  pwMatch[siteUrl] = password;
  //   }
}

findSite.forEach((ele) => {
  console.log(pwMatch[ele]);
});
