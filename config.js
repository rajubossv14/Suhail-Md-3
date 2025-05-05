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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_08_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICA3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK25BMm03K2tkbmh4YUZqRDd6WEw5VUNTR00xaktFa2hIdEtDS3FWRTV6Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5MjY3NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM1MUFDQzFGRDQ0OURCQUNCNzc0MjU5OTgxODgxREFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjQzNjExNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxNDkyNjc0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEI5RTcwRkM4QjkwNkMwQkEyMEYxOTM0MTRCODgyQUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NDM2MTE1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNZYldIU0IzU3R1TWRQX19JOFZHZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjFkZmQ3M2UtZWM4Yy00YmU3LWJiYTctNTMyNmEzNjY1MGE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDIxNyxcbiAgICAgIDQyLFxuICAgICAgMzgsXG4gICAgICA3LFxuICAgICAgNjgsXG4gICAgICA3OSxcbiAgICAgIDE1MCxcbiAgICAgIDE1NSxcbiAgICAgIDEyNyxcbiAgICAgIDIwNyxcbiAgICAgIDE5MixcbiAgICAgIDEwMSxcbiAgICAgIDE5MixcbiAgICAgIDEzNixcbiAgICAgIDg0LFxuICAgICAgMTQsXG4gICAgICA2NixcbiAgICAgIDEwNCxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDM5LFxuICAgICAgMTQ3LFxuICAgICAgMzQsXG4gICAgICAxODcsXG4gICAgICAxMzYsXG4gICAgICA4MSxcbiAgICAgIDE3NyxcbiAgICAgIDE1NSxcbiAgICAgIDE2MixcbiAgICAgIDE0NixcbiAgICAgIDcxLFxuICAgICAgODUsXG4gICAgICAxNzgsXG4gICAgICAxOCxcbiAgICAgIDIwNCxcbiAgICAgIDY0LFxuICAgICAgMjE4LFxuICAgICAgNzMsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUwxVENaWUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2TofCdk6rwnZOz8J2TviA1OTExXCIsXG4gICAgXCJsaWRcIjogXCIyNjUwNDczNjQzNzg2ODY6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeWt3bzRIRUl1QTRzQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFWN244RlBhSFZESFBWZFJlYnlCblpEMzFZcmZXNUlQVzZXWEZkUWJaZ0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZFVURDdYRXVJSi9zSU5pREtTRm9pWGIrZDh2Yk1NZTc2SDdyc0ZIZithdGZMZ2h0UTBjb204UDR3Sldxb3JYaWpWaTFLN3hITlVTNmtmbWJ3eDJ6REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0VpNlhXRmUzTlBlUDc1ZDNHRUdVcmRIYnM0dDdFNVhVdnhHNk8rOWRNOWVRdjJsVVJWMzhYaDFLeVVYKzlBaktzQUMzWHNpaWZoTlBYeUhXQ0Rqamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2NDM2MTExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2VlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMcmQ2TGsveTFHYWFheVhPM20wMDVnVWw1UUpCYXMxdlp1ZzBWbSs5SXZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDk0OTQzNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NjQzNjExNTI1MFwifSIKfQ=="  // PUT your SESSION_ID 


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
