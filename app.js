require('dotenv').config()
const client = require('discord-rich-presence')(process.env.ClientID)
const nbx = require('noblox.js')

async function run() {
    await nbx.setCookie(process.env.RBLXCookie);
    let interval = setInterval(async function() {
    let presence = await nbx.getPresences([`${process.env.UserID}`])
        if(presence.userPresences[0].userPresenceType === 0) {
            client.updatePresence({
                state: presence.userPresences[0].lastLocation,
                details: "Offline",
                largeImageKey: process.env.gameAssetID,
                instance: true
            })
        }

        if(presence.userPresences[0].userPresenceType === 1) {
            client.updatePresence({
                state: presence.userPresences[0].lastLocation,
                details: "Online",
                largeImageKey: process.env.gameAssetID,
                instance: true
            })
        }

        if(presence.userPresences[0].userPresenceType === 2) {
            client.updatePresence({
                state: presence.userPresences[0].lastLocation,
                details: "In-Game",
                largeImageKey: process.env.gameAssetID,
                instance: true
            })
        }

        if(presence.userPresences[0].userPresenceType === 3) {
            client.updatePresence({
                state: presence.userPresences[0].lastLocation,
                details: "Studio",
                largeImageKey: process.env.studioAssetID,
                instance: true
            })
        }
    }, 5000)
}
 
run();