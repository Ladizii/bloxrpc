require('dotenv').config()
const client = require('discord-rich-presence')(process.env.ClientID)
const nbx = require('noblox.js')

async function run() {
    await nbx.setCookie(process.env.RBLXCookie);
    let interval = setInterval(async function() {
    let presence = (await nbx.getPresences([process.env.UserID])).userPresences[0]
    let details = ["Offline", "Online", "In-Game", "Studio"][presence.userPresenceType]
    let large_image = presence.userPresenceType === 3 ? process.env.studioAssetID : process.env.gameAssetID
    
    client.updatePresence({
      state: presence.lastLocation,
      details: details,
      largeImageKey: large_image,
      instance: true
    })
}, 5000)
}
 
run();