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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_07_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHWVRaeGVFTU0wMElNVHRacDJFK1ZrU0JrMlhoOG1Lb09zRjc5N2RVOEFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUJDMDNDQjMzQzkyOEI5REJFNkY2NEQ1NURENkQ3ODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUyMzI5MjUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNGZFhfczZTUXdhZlMzWUFyTG1hcmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjZlNTJiNzUtMzNkMi00YWNhLTk3MTQtNzJhZjFiMmI5MjQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDE4MCxcbiAgICAgIDE4NyxcbiAgICAgIDU4LFxuICAgICAgMTI0LFxuICAgICAgMjI2LFxuICAgICAgMTI0LFxuICAgICAgMTg4LFxuICAgICAgNDcsXG4gICAgICA5MixcbiAgICAgIDE0MyxcbiAgICAgIDIyMSxcbiAgICAgIDE5MyxcbiAgICAgIDIwNSxcbiAgICAgIDE2LFxuICAgICAgMjksXG4gICAgICAxNjAsXG4gICAgICAyMTQsXG4gICAgICAxOTIsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE1NCxcbiAgICAgIDE3NixcbiAgICAgIDgxLFxuICAgICAgMjIxLFxuICAgICAgMzksXG4gICAgICAxNjEsXG4gICAgICAyNDEsXG4gICAgICAxNDUsXG4gICAgICAxMDEsXG4gICAgICAxNzgsXG4gICAgICAxNDcsXG4gICAgICA5NCxcbiAgICAgIDI0MCxcbiAgICAgIDE3NyxcbiAgICAgIDEwNyxcbiAgICAgIDE0OCxcbiAgICAgIDE2MSxcbiAgICAgIDE4OSxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIOTJ0UUdFSnJZeWNNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZThZSXl3aGlMMkNkT2J0Q3p3ZnNrQjhXaFFUYnJMTHdOL1UxY1Z2N2prST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJENVJTMlRjQkRFN0RTNWpWVTZWU0MyNUhocVNJM21GQjR5NWRyVTRldjVzbkRSd2t2eTdsWGVJOGwxejd3dzkrK05NdTZBTExIN1lsbnBJWUtxMDhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrU3lBSzB6Z2tWbG9Id3dBemlRZldqVlMvSURoVFJKOHA3cVhVaHc1a0xjcEphdFVKV2tMTFFnWnBGSmVoNnl0d3l2TzI1YUZxY0NUaDBZQS9UNzdEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0Njo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjc0Njo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTIzMjkyNDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOVnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5WcC5qc29uIjogIntcImtleURhdGFcIjpcIjNaR2NtUjRQdlZpQXVSZ3RSWUtZWHJEN1h3blVLYnFWQnFJQ2plZUpRSFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4ODI2NDE3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUyMzI5MjUyNDk3XCJ9Igp9"  // PUT your SESSION_ID 


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
