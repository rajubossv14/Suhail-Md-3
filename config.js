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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_09_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDYzLFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImt1aUVPbm5iVWlQR0FwQWhNcDNZMGFPeEpwTEdRZ1c4c3h0a3owK0phUG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0OTI2NzQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRjk2OUM3MTE0NUVFQ0EyQkRBQ0M4ODc5OTJDOTkwMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTcyNTA1ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0NjY1NzQzNTNGNEYwRURFQTNFRDMwOUQ0RTZDREZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1NzI1MDU4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1M0dPRWJJTVJqdUY1TGNGUG9CT2FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlYzJkOGZiLWU0ODAtNDI3NC05Y2IyLTg2MmMyYmZhNGUyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDE2MCxcbiAgICAgIDgzLFxuICAgICAgMTA1LFxuICAgICAgNTIsXG4gICAgICA0NyxcbiAgICAgIDI0NyxcbiAgICAgIDE1MCxcbiAgICAgIDI4LFxuICAgICAgMjUzLFxuICAgICAgNzUsXG4gICAgICAxMDAsXG4gICAgICAxMjgsXG4gICAgICA3MCxcbiAgICAgIDE1MSxcbiAgICAgIDg2LFxuICAgICAgMTM0LFxuICAgICAgMTAzLFxuICAgICAgMzAsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMTI1LFxuICAgICAgNDIsXG4gICAgICAxNTUsXG4gICAgICAxNDQsXG4gICAgICA0MSxcbiAgICAgIDI0OSxcbiAgICAgIDE0LFxuICAgICAgMTYwLFxuICAgICAgMTE4LFxuICAgICAgMjA4LFxuICAgICAgMjEyLFxuICAgICAgODAsXG4gICAgICAxMDMsXG4gICAgICA3NyxcbiAgICAgIDExMCxcbiAgICAgIDE2OSxcbiAgICAgIDIzNixcbiAgICAgIDU4LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnUvOE04R0VJNkk5c1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1Z0U0Qm44SGFja0dNZ2ZRYStnTjE2UUFzbzIrbnpLa1lSTWdnYk1uRlJBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRGWVdPOXk0UHR3dVdMeTJSM3pBbVVXUHVOYU12TDUwNmFUdUZLWEI3ZVZGb201SFV1T1VZZHFaaldiWUZ2Y1kxb3VSeHhBQ29SOEI1cklCRC9DVEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdnWkFMVDVaREY0NzdDaDR1ZmJWMWhpQVVQWWZyUmE0MDVrU290NTVRRDVhejg3TE5Vc1pZUFJTd2VvQlZsUUlXNklTVkg0dGtNeDArSUpndFh4dGl3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzE0OTI2NzQ2OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6MzlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTQ5MjY3NDY6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NzI1MDU3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFPeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU95Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUlZSdHU5NjZzZlhsSE1sMjBEY3J6ZVV0SEZOM0RzWTMyMDVySmJVM3BNTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc4MTMwOTA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTcyNTA1ODI5MzhcIn0iCn0="  // PUT your SESSION_ID 


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
