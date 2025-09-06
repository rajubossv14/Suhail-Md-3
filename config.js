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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_13_09_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImNNa0svcnNLU2M1UDVROHZUQ0Q5aTJmdXRSNWVWMVhyd01WS1U4RzZLNjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0OTI2NzQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NTRBM0M0RjAzM0Y4MTMzMUQ3NDkwMjI5ODc5MkZDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTcxNzUyMThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4NDZEODhFRkU5NTZDOTQ0QzgxNzE0NTVDRkQxQjJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NzE3NTIxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSQXNSeFl0OFF2aWRnVFBtWlIzYzV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkMGExMmMzLTRjODYtNDlhMC1iMTg5LWRjZjVhNTk5ZGIyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICA2MCxcbiAgICAgIDQ5LFxuICAgICAgMTAxLFxuICAgICAgNTIsXG4gICAgICAxNzYsXG4gICAgICAxMjEsXG4gICAgICAyMjYsXG4gICAgICAxNTQsXG4gICAgICAxMTgsXG4gICAgICAxMjMsXG4gICAgICAxMixcbiAgICAgIDE2OCxcbiAgICAgIDE4OSxcbiAgICAgIDE0NyxcbiAgICAgIDE4NyxcbiAgICAgIDcyLFxuICAgICAgMjIsXG4gICAgICAzOSxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTAsXG4gICAgICAyMjMsXG4gICAgICA0MyxcbiAgICAgIDEzNyxcbiAgICAgIDEzNixcbiAgICAgIDE5OSxcbiAgICAgIDExOSxcbiAgICAgIDE0LFxuICAgICAgMjM2LFxuICAgICAgMTkwLFxuICAgICAgMjU0LFxuICAgICAgMTMzLFxuICAgICAgMjUxLFxuICAgICAgMjUwLFxuICAgICAgMTUwLFxuICAgICAgMjEyLFxuICAgICAgMTAxLFxuICAgICAgMTYwLFxuICAgICAgMTcsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObS84TThHRUtxNzhjVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVnRTRCbjhIYWNrR01nZlFhK2dOMTZRQXNvMituektrWVJNZ2diTW5GUkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWRwUWdtODZ3YkNxYWZ6OUdpZ2RJVHdxeUhqRDVPN2EwbGtPY3B3YzhiWFNXa0tIdjNBQ1VIZ1N6cjRMVDBFVkYyVGF2bjc2dTF1Sy9HNDNISnZBQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidVRzM0FNNFdCM0NDbEJpYUlHdkRiVU1odkFhRHdnRUsxOEpjN2RPMW0waHowU0JTVTVMWTFNUjkzVTdlNlpTOGs2UEJXTzYyWUpJN1NBbjd6U2o0Qnc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQ5MjY3NDY6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjI2NTA0NzM2NDM3ODY4NjozNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjc0NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU3MTc1MjE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1hQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDWFAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZZ0IwNlZxU2lzT1lwN1c1Zzh4QmNKT2UyejZrcnhlSWN0dklOMGtsc2JzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzgxMzA5MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NzE0Njg5MTk2N1wifSIKfQ=="  // PUT your SESSION_ID 


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
