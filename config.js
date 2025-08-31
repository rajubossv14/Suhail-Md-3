const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923314926746" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926746";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926746";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_01_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY0LFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUWNIT0IyRjBacnFUMSttU0F3dUI0QmtNMW43WkFNT0h4a3VGb3ZhL0dOVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3RTIwMkIwMDlEODU0NzFFQTNGMUMzODYwMzA4ODlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NjY0NTMxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTcxRTVCNEZGNzE1QzEyNDRGNEQ0N0M1QjAzRTk2MzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU2NjQ1MzEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVlMmVLX08yUnBhQjhoQk1YejQxRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2NkNzk1OGEtYzQ4Yi00YTcxLWIzOTMtYjA0ZDIzNDg3M2JjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDI0OSxcbiAgICAgIDI4LFxuICAgICAgMTY2LFxuICAgICAgMTg3LFxuICAgICAgOTcsXG4gICAgICAxNTgsXG4gICAgICAyMjksXG4gICAgICAyNDgsXG4gICAgICA4MixcbiAgICAgIDIwMixcbiAgICAgIDE0NCxcbiAgICAgIDMwLFxuICAgICAgMjM5LFxuICAgICAgMTU4LFxuICAgICAgNzAsXG4gICAgICAyMjgsXG4gICAgICAyMDIsXG4gICAgICA4OCxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTI5LFxuICAgICAgOTksXG4gICAgICAxNDYsXG4gICAgICAxMTIsXG4gICAgICAxMCxcbiAgICAgIDQ2LFxuICAgICAgMTYyLFxuICAgICAgMTE3LFxuICAgICAgMTQ2LFxuICAgICAgNjAsXG4gICAgICAyNSxcbiAgICAgIDEzNCxcbiAgICAgIDIxOSxcbiAgICAgIDMsXG4gICAgICA0OSxcbiAgICAgIDE3MixcbiAgICAgIDMsXG4gICAgICAzMixcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWExL0xJRkVMaVAwY1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzRlJZTTBPVVNyVzBSalNMV0FScFFqWTNHMnV1a1p2OFBsUy9NalM4R2lrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImc3SUcvdWwrcndtakkwV0o4SUJQYkRONEhXWTBZRnI3emlqRGFKYW5zd2NnOUhwcCtnS0szZXdKMVJveWYweUU1YjltNGwzeUwwVXEyWS9MeHVVS0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImsvcE0rNHJoS1J2Qjh1bDVJRjNzSlBqR1JOZlJkVVREeUw4UDViOURQWkdVeFhqeE9sN25HdGhoamwyV1dUY21Pa3gyY0VLRXczNDFZMVhCUWFteGd3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE0OTI2NzQ2OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6MzJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQ5MjY3NDY6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU2NjQ1MzA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1gyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDWDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRdmx6TUpJRmpJeVR2Y1dHLzNOcVovc1U4UlJNN1RNWHFzWnlXcW8rdlc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDkwNzMyODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NjY0NTEzNDk0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
