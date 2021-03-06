var download = require('./download');
var discord = require('./discord_connect')
var neo4j_send = require('./neo4j')

function ShortHand() {
    //shorthands
document.addEventListener('keydown', function (e) {
    // To download in csv format
    if (e.key === "c" && e.altKey) {
      download.downloadCSV();
    }
  
    if (e.key === "l" && e.altKey) {
      download.downloadJSON();
    }
  
    if (e.key === "f" && e.altKey) {
      window.open('https://www.facebook.com', '_blank');
    }
  
    if (e.key === "t" && e.altKey) {
      window.open('https://www.twitter.com', '_blank');
    }
  
    if (e.key === "i" && e.altKey) {
      window.open('https://www.instagram.com', '_blank');
    }
  
    if (e.key === "g" && e.altKey) {
      window.open('https://www.google.com', '_blank');
    }
    if((e.key === "d") && e.altKey) {
        discord.DiscordSend();
    }
    if(e.key === 's' && e.altKey) {
      neo4j_send.Neo4jSend();
    } 
  });
}

module.exports = {
    ShortHand
}