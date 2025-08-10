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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_59_08_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNkp0RUx0NS82d0p3ZVJyVDVRdlRyTjY0amgweUdwNzl2TkcxNmZPS1ovVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVzh6aFVjX29RRHFyM0hRSjlRemdsZ1wiLFxuICBcInBob25lSWRcIjogXCJjZDhlNmQyYy1mYmU5LTQyMTAtOWYyZS1iMzYzZDYwYjQ3YzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE0LFxuICAgICAgMTA3LFxuICAgICAgMjM1LFxuICAgICAgMSxcbiAgICAgIDY2LFxuICAgICAgNDAsXG4gICAgICAyMDUsXG4gICAgICAxLFxuICAgICAgMTksXG4gICAgICAyNDAsXG4gICAgICAzNSxcbiAgICAgIDEyOSxcbiAgICAgIDkxLFxuICAgICAgMTIsXG4gICAgICA1NSxcbiAgICAgIDg2LFxuICAgICAgMTYxLFxuICAgICAgMTE5LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDIwMCxcbiAgICAgIDQzLFxuICAgICAgMTA2LFxuICAgICAgMjU1LFxuICAgICAgOTMsXG4gICAgICAyMzQsXG4gICAgICAyMjQsXG4gICAgICAxMjUsXG4gICAgICAyNTAsXG4gICAgICAzOCxcbiAgICAgIDEyNyxcbiAgICAgIDIxNixcbiAgICAgIDE0MyxcbiAgICAgIDIzNixcbiAgICAgIDEzOCxcbiAgICAgIDE3NCxcbiAgICAgIDEsXG4gICAgICAyNDYsXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEYys0c0VFS3FHNGNRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNy96c283VUQzanFLZENjWXNjMUt4Z1B2MWtUcHk2K0xBVm5pMFN4bElWUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIUWVvSTl0Nk9ncHZPUjJCazZ0R2Z4ck0wV3YxVklhWmh0WmFVZXFHbXFXcVpzLytRdnpUS0dZb3hFOWN3VW5waHVGbzVIdmVFKzdtTW9vb2JINHBEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKek1qcGNBMzVEZFhyNm9kelVqSmFZVEgxT2FhNE0xcVVzSFJ1bTNoUnVhMHFnVUdkN3FqSkJ2V1ZrN2RsZ3plY1pBOUQxRU1ickxHaXdiZkF3MTloQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0NjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiLFxuICAgIFwibGlkXCI6IFwiMjY1MDQ3MzY0Mzc4Njg2OjI1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU0ODA5MTM0XG59Igp9"  // PUT your SESSION_ID 


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
