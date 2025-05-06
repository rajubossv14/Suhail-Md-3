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


global.devs = "923314926711" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314926711";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314926711";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_21_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaTXJhMGpFNG9jaGt4UGV1cFJGS2w1UjB5TXhPbVdjMitQemc4SXp2bTBrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSVml1M3BTX1JLcXg0MkVicjM1bUl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI0NmUzNTBiLTJlZGItNDQwMS04MDY2LTJjNjU5YzgyMmY2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAxNTAsXG4gICAgICA4LFxuICAgICAgMjAsXG4gICAgICAxNjgsXG4gICAgICA2MyxcbiAgICAgIDE3OCxcbiAgICAgIDIyMixcbiAgICAgIDI0NCxcbiAgICAgIDEwLFxuICAgICAgMjIsXG4gICAgICA2MixcbiAgICAgIDEyMixcbiAgICAgIDkxLFxuICAgICAgMTc1LFxuICAgICAgMTU1LFxuICAgICAgMzYsXG4gICAgICA1LFxuICAgICAgMjEwLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDIyNixcbiAgICAgIDExLFxuICAgICAgODksXG4gICAgICAxNzgsXG4gICAgICAyNDAsXG4gICAgICAwLFxuICAgICAgMjAsXG4gICAgICAyMCxcbiAgICAgIDEzMSxcbiAgICAgIDk3LFxuICAgICAgNzgsXG4gICAgICAxMjcsXG4gICAgICAxODgsXG4gICAgICA0OSxcbiAgICAgIDQwLFxuICAgICAgMTc3LFxuICAgICAgMjE4LFxuICAgICAgMjgsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUs0WVg3R0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjcxMTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjY4MDk1NzY1MzIzMDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042a3dvNEhFTWo5NThBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVY3bjhGUGFIVkRIUFZkUmVieUJuWkQzMVlyZlc1SVBXNldYRmRRYlpnRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNbUxzTWxWLzNjbE5kQVRiZUxNZmVvMUxRaVlyWDdBK3VXdW14OEIwQVFLek1TOW1uTHlRMXlpdEFuMGNHK2FmN1NYWFNYZVZOdm1seU1adkhYME5CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqMy92WUQ1L0dlbjdvN2FnUXBJR1dOY1ZneVYxWGYzZHVYUFB3bWJ5OUNtN1lxYktCa0U1SmowZHQ5Nnc2Z3dGMUgvUnh2eE9xcS9pcGU5RXRmMWpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQ5MjY3MTE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY1MzQwOTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
