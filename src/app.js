let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = ["com", "net", "us", "io"];

function generateDomains(pronoun, adj, noun, extensions) {
  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          domains.push(`${p}${a}${n}.${ext}`);

          if (n.endsWith(ext)) {
            let hackedDomain = `${p}${a}${n.slice(0, -ext.length)}.${ext}`;
            domains.push(hackedDomain);
          }
        }
      }
    }
  }

  return domains;
}

let allDomains = generateDomains(pronoun, adj, noun, extensions);
allDomains.forEach(domain => console.log(domain));
