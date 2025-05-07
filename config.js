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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_57_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA4NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmTUUzdzk1OEN4NEFhWlh3OUF0SlhqZ2ZHTkVyYnFyeXZNMzU0d2ZmbnY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjcxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0RDRkEwQTA4QkJBRkRDMTE2OTA1RDYzOENCREIyRDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NjIyNjI4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9UZ2RubGEtUmUtOUpWX2x3cXpueWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmE0ZWYwN2YtMjQ2Yi00MDgwLTliNTMtNmY4ZjEwMjlkMDg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTg3LFxuICAgICAgOTIsXG4gICAgICAxMzYsXG4gICAgICAxNzEsXG4gICAgICAxMjcsXG4gICAgICA1LFxuICAgICAgMSxcbiAgICAgIDg5LFxuICAgICAgODUsXG4gICAgICAyMjUsXG4gICAgICAxMTcsXG4gICAgICAyNTAsXG4gICAgICA5NSxcbiAgICAgIDg3LFxuICAgICAgMjQsXG4gICAgICAxODQsXG4gICAgICA1NyxcbiAgICAgIDQwLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE4NSxcbiAgICAgIDEwNixcbiAgICAgIDU4LFxuICAgICAgOTAsXG4gICAgICA3NixcbiAgICAgIDUxLFxuICAgICAgMTE0LFxuICAgICAgNDcsXG4gICAgICAxOSxcbiAgICAgIDkyLFxuICAgICAgMjIzLFxuICAgICAgMjUyLFxuICAgICAgMzksXG4gICAgICAxODcsXG4gICAgICA0NixcbiAgICAgIDU4LFxuICAgICAgNzUsXG4gICAgICAxODcsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNRUdHUzdLQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE0OTI2NzExOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjI2NjgwOTU3NjUzMjMwOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTitrd280SEVKbXg3Y0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxVjduOEZQYUhWREhQVmRSZWJ5Qm5aRDMxWXJmVzVJUFc2V1hGZFFiWmdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllMVEdlMWo0Sk5zRUpCV3Vmck9BYWM0cDFwdDZmd3hXU1U1ODBCclpvSFNIVmJVOGhmOWJZeFc2czlvUnp6REVlNVc0cFZycHQvT1lEZ0ZFUUlVUUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZzV1BpVEM0ZFcxZ2JPc24vWEhSTWdYeGJlSGhXRDFuTVVlcFc2WFU2ZUJiRkN2V0wwN0k5NElmc0NhK056VGVXZFdsbkpHc05nRXdISS9YcC8wUkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjcxMTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjYyMjYyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNjSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2NJLmpzb24iOiAie1wia2V5RGF0YVwiOlwidGlUYWt0b0tMVkl0VHpNRW9keUtKUjZVYjMwY2tjRWtqNUQyUU1ONHVwZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTA5NDk0MzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY2MjI2Mjc3NjhcIn0iCn0="  // PUT your SESSION_ID 


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
