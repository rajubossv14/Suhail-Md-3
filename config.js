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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_37_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR2VYSk5HRUljUzVMdGdSa2JOdThRMklic3U0bXNCU1RkUGJiSWFSQWY4QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4RjY0Q0E0MThCN0FFNkJCMjFCOTc0OTc0M0U3QzQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NzI1MjIyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTMwNTExMzIzN0ZERjNDMjI2ODQyNEYwRTM2QzUxQzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU3MjUyMjIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhKUFkyYjJzUjBpRVVHbjUwSndlRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTMwZDkwN2EtNDA5OC00ZGJmLTg5ZjgtZjc1ODI4ZWUwYTY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDIyMixcbiAgICAgIDU0LFxuICAgICAgMTAxLFxuICAgICAgODIsXG4gICAgICAxODgsXG4gICAgICAxNjMsXG4gICAgICAxOCxcbiAgICAgIDI2LFxuICAgICAgMTA2LFxuICAgICAgNTgsXG4gICAgICAxMjEsXG4gICAgICAyMTcsXG4gICAgICA4MCxcbiAgICAgIDI2LFxuICAgICAgMTYwLFxuICAgICAgMTExLFxuICAgICAgMTgyLFxuICAgICAgMTc4LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDI0OCxcbiAgICAgIDU4LFxuICAgICAgMTI0LFxuICAgICAgMjI1LFxuICAgICAgMTc3LFxuICAgICAgMTAsXG4gICAgICAxMTgsXG4gICAgICAyMjAsXG4gICAgICA0MSxcbiAgICAgIDEzNyxcbiAgICAgIDIxMyxcbiAgICAgIDkyLFxuICAgICAgMTEwLFxuICAgICAgNSxcbiAgICAgIDIzOCxcbiAgICAgIDI0LFxuICAgICAgMTc0LFxuICAgICAgNTgsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeS84TThHRVBTVTlzVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVnRTRCbjhIYWNrR01nZlFhK2dOMTZRQXNvMituektrWVJNZ2diTW5GUkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOElxV3Y3bVVpRERpVVRsU0lHbE1JR2dvdkJuNHFJQ2lkZjkwcXVGSEdTVHNkN2VRc1d1aTUrU1J2bnhUUUZpV2pKWG15b2JaaExBZy9aYUZxT3dHREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUXhFTm5ucHBObzhNUkdNNW9md3F2Mmo2ZzEvbkV3c2hpLzdCSEt5QnR1Rmt5Tml3UG1XaHJHTWoydFltNlk5SHA1eSs2bmZnNURyejlKaVJrUjV6RHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjI2MjI2NDE5MjAyMDcyNDo0NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU3MjUyMjE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnMxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCczEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBQ1poUlFKdHN1UHBFRDV3d21oYzlSZjRONjRORzVucXpIRVNmZUNncFR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzgxMzA5MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NzI1MjIyMTI5OFwifSIKfQ=="  // PUT your SESSION_ID 


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
