let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = ["com", "net", "us", "io"];

function generateDomains(pronoun, adj, noun, extensions) {
  let domains = [];

  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
      nouns.forEach(noun => {
        extensions.forEach(extension => {
          let domain = `${pronoun}${adjective}${noun}.${extension}`;
          domains.push(domain);

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
