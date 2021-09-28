
function getlessNoun(str1, str2) {
    //
    return str1.slice(-str2.length);
}

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "house", "discom", "disinfo"];
let ext = ["com", "org", "net", "edu", "se", "info"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        // Check if last noun characters are the same of ext
        if (ext[l] === getlessNoun(noun[k],ext[l])) {
            console.log(pronoun[i] + adj[j] + noun[k].slice(0, noun[k].length - ext[l].length) + "." + ext[l]);
        }
        else {
            console.log(pronoun[i] + adj[j] + noun[k] + "." + ext[l]);
        }
      }
    }
  }
}