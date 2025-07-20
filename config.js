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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_26_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxLM01xNUlPRUVRekN0MDcwL1JjV0ZObHRxWTI5RTNvVVRPZVJYUWVVMU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0OTI2NzQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRDVDQzM3NEUxNjYyREUxMTY3NjA0M0UzOTAxNkUxM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTMwMTc5ODhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBGMEEwQTMxOUJFNzIzQkIzQTVDRjc2NEFBRDI4RDBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MzAxNzk4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0ZGMTZCRTc0OTVDMkREMkRBMjMzNzkwRTE4MzkzQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUzMDE3OTkzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxjYWRoaVVPUzMtWklEMm5jWk93YWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2VmM2UxNTAtNjY2MS00NjAyLTg0ZDEtOTY0MWVmN2U1MTdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDE5NSxcbiAgICAgIDc3LFxuICAgICAgMTc4LFxuICAgICAgMTg1LFxuICAgICAgNTMsXG4gICAgICAxMzUsXG4gICAgICAyMjAsXG4gICAgICAyMjMsXG4gICAgICAxNTUsXG4gICAgICAyNDYsXG4gICAgICAyNDgsXG4gICAgICAxMDEsXG4gICAgICAyNSxcbiAgICAgIDE4MCxcbiAgICAgIDE2NCxcbiAgICAgIDQ5LFxuICAgICAgNDksXG4gICAgICAxMDksXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDIzMyxcbiAgICAgIDk4LFxuICAgICAgMTgxLFxuICAgICAgODgsXG4gICAgICA2OSxcbiAgICAgIDE1OCxcbiAgICAgIDE2NyxcbiAgICAgIDIyOSxcbiAgICAgIDQwLFxuICAgICAgMTQ5LFxuICAgICAgMTg5LFxuICAgICAgMTEwLFxuICAgICAgMTYzLFxuICAgICAgMTI1LFxuICAgICAgMjU0LFxuICAgICAgNzEsXG4gICAgICAxNTUsXG4gICAgICAyMzUsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR0g2TmtFRVA3Yzg4TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVQOUNQL1huUGtOK1REc1pRZ1dsWkpIakN6Ri9rV200TGs2U21rdTczQzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTHJFSThGN1hlOVZXM2xlcjkwY2VGSFdsUmIvZ3MrenZ6ZDVlMVNmRE9xTzV1MGxiWGFud2ZVYTBzaldWYVdGWFFCeUZWQTlHcFc2eDRKaXR5MTBNQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQW56c3FKU2JHSU5uajFBWGMyTFRxVXBuNWphYTZXYWFCejdwTm1HWDlabk5EMFlNTzBleHRrRnBJa0c5aXhsY2MrL2lHRXI0cUJHUEVZTUw0eUM4RFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQ5MjY3NDY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+IDU5MTFcIixcbiAgICBcImxpZFwiOiBcIjI2NTA0NzM2NDM3ODY4NjoxNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNjc0NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUzMDE3OTg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUER2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQRHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrR1ZIMEZJVDhseituR3pHakRpSTZCVVZ2Z3RzaWliU0hSVm44OGR5Mk9vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjIwOTMyOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MzAxNzk5MjAyMVwifSIKfQ=="  // PUT your SESSION_ID 


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
