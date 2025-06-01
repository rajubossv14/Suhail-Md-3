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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_25_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZlpzcFdRY293QjFiT2NrVVA4K2E1S24ySzVLa05HV0tDSm5yMVNoVEFpOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYzQUY0M0RDQjUyQkZDQ0M5NEE4QTcyNzdDNTlBMTkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODc4NDMxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTg0RkI5RTI2ODE4QTRGMkM2OTBEMUMyM0UxNDQ1M0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4Nzg0MzEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNGN2ZhTnFCU0RLWGdENURfc3BubkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWFmYjA0MDgtMjZiNS00MGU4LWIyNmQtNTU0ODllY2FlZTkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDE2MCxcbiAgICAgIDcsXG4gICAgICAxOTIsXG4gICAgICA0OSxcbiAgICAgIDQ0LFxuICAgICAgODYsXG4gICAgICA5MyxcbiAgICAgIDE4MSxcbiAgICAgIDE4MCxcbiAgICAgIDEwMCxcbiAgICAgIDE4OSxcbiAgICAgIDE3LFxuICAgICAgMTk0LFxuICAgICAgNTYsXG4gICAgICAxMTAsXG4gICAgICA5NyxcbiAgICAgIDc2LFxuICAgICAgNTgsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDgxLFxuICAgICAgMjQ1LFxuICAgICAgNjAsXG4gICAgICA4NSxcbiAgICAgIDIzNSxcbiAgICAgIDQ3LFxuICAgICAgMTI2LFxuICAgICAgMTIsXG4gICAgICAxODMsXG4gICAgICA5NixcbiAgICAgIDExOSxcbiAgICAgIDE5MixcbiAgICAgIDc4LFxuICAgICAgMjE1LFxuICAgICAgMjIsXG4gICAgICA0NixcbiAgICAgIDIyMyxcbiAgICAgIDIwNyxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08vOTJ0UUdFTEdwOGNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZThZSXl3aGlMMkNkT2J0Q3p3ZnNrQjhXaFFUYnJMTHdOL1UxY1Z2N2prST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJILzhZSDNDeVRWVFhVbk9FcEtwR0xZcUhNT2tjbGlqSmhBd3QzOGFOOFdaN0JTT1hsL3BxL1FRVzRoLzNwODZWYzJaakRTV3FJWVVlL3dOVDVVU0tEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1VEZ6ZC9DN1JvdTlQclFvT0RTSTNBcG96NzJLcEhlSnYrZ1pLVG0zUi8xQkdkcmhWTWNmVUQzbW03UWM4TFlYbXYzUmF1UjZDQ0VtbHdDZzFEQ1FEZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjc0Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg3ODQzMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDaVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNpWS5qc29uIjogIntcImtleURhdGFcIjpcIk9MTmkvNVplakxWVk1GU1RRa05LZkVjR20yNXJ2QnlVTGtnS2NBSVVwNnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4ODI2NDE3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ4Nzg0MzE0MTc5XCJ9Igp9"  // PUT your SESSION_ID 


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
