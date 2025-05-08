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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_33_05_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNixcbiAgICAgICAgODUsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU0xvT2NPdDNZVHA1VkpKZkkzVjNWSWFnMVJBcE1jNVk0djQ1SUtQbkZOUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMzLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMzLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic0lDZ3RodDZRYy1EOWhueUx1SDZpd1wiLFxuICBcInBob25lSWRcIjogXCIyZDFiY2NkNi1jMjI4LTQ3MzUtOGYwOS0zN2ZlM2EzZGY0OTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxMjYsXG4gICAgICAxMDMsXG4gICAgICA5NyxcbiAgICAgIDExNixcbiAgICAgIDExOSxcbiAgICAgIDI0NSxcbiAgICAgIDIyMCxcbiAgICAgIDMxLFxuICAgICAgMjEyLFxuICAgICAgMTQ5LFxuICAgICAgMTgwLFxuICAgICAgMjksXG4gICAgICA0MixcbiAgICAgIDUyLFxuICAgICAgNDAsXG4gICAgICA4MyxcbiAgICAgIDE2OCxcbiAgICAgIDE3NCxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDIxMyxcbiAgICAgIDQyLFxuICAgICAgNDIsXG4gICAgICAyNTQsXG4gICAgICAzOSxcbiAgICAgIDEwNSxcbiAgICAgIDEyMCxcbiAgICAgIDE0NixcbiAgICAgIDE2NSxcbiAgICAgIDE3OSxcbiAgICAgIDE5MixcbiAgICAgIDM0LFxuICAgICAgMTcwLFxuICAgICAgODQsXG4gICAgICAxMjgsXG4gICAgICA4MSxcbiAgICAgIDE3LFxuICAgICAgMjIyLFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUtEU0FSN0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR2t3bzRIRUxpQjg4QUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFWN244RlBhSFZESFBWZFJlYnlCblpEMzFZcmZXNUlQVzZXWEZkUWJaZ0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidW1lVk1KOXdoUnBVZTZSeS9VZ0pJSi9oVDdTb0NVQXdpMHE2RVIrSGU0NUpHaEcxMHZuQnZBWFVMTE1RL0UrMFhQZnVQME1YVHBRK0gzeWluSEpNQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSCsvdHZHRTB4ejlUbXcweWllbUZNL3c0OWlTYkFicGhBM2NtQmw4VHdnS2p1NHZRZmZ5c054N2lISTJzazd3dUcvSkYyMU5ldFVaRUExbWNiN1J6aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2NzE0ODExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEUwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMRTAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0bWRKaDJGODVlMnBFM3BWek9WUkZ2WXJQR2NBR1RZNkthSWI2OWF0dUV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDk0OTQzNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjcxMTU1NDMwM1wifSIKfQ=="  // PUT your SESSION_ID 


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
