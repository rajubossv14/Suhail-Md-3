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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_43_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1KRkk3S2FTMmQ5eHIxN1hmbnlIbDdqbC81TnBONENEdTNzV2xuQUpUSGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0OTI2NzQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QjhFRjEwN0RGMUNCRDI2QUI0MEY1QjQxNTMzMzE4RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTcyMTI5ODRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibnVjNTQ1R25SZTJQeFNtcThJSnFSQVwiLFxuICBcInBob25lSWRcIjogXCI3ODY0YjM0ZC1hYmNhLTQxZjAtODJhYy02ZTI0NGM5NzUxNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxNDcsXG4gICAgICA0NyxcbiAgICAgIDE4OCxcbiAgICAgIDE1MCxcbiAgICAgIDEzOSxcbiAgICAgIDExMixcbiAgICAgIDE2NixcbiAgICAgIDE0OCxcbiAgICAgIDE3NSxcbiAgICAgIDU5LFxuICAgICAgNTAsXG4gICAgICAxMTIsXG4gICAgICAxNyxcbiAgICAgIDEyOCxcbiAgICAgIDE3MyxcbiAgICAgIDE1NixcbiAgICAgIDgxLFxuICAgICAgMTAyLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE2OSxcbiAgICAgIDExOCxcbiAgICAgIDI2LFxuICAgICAgMjI4LFxuICAgICAgMTk1LFxuICAgICAgMjE2LFxuICAgICAgNDUsXG4gICAgICAzMixcbiAgICAgIDIwOSxcbiAgICAgIDEwMyxcbiAgICAgIDE0MyxcbiAgICAgIDU4LFxuICAgICAgMTMwLFxuICAgICAgMjQ3LFxuICAgICAgMTQ2LFxuICAgICAgNDcsXG4gICAgICAyMjQsXG4gICAgICAzNSxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xLzhNOEdFTERpODhVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWdFNEJuOEhhY2tHTWdmUWErZ04xNlFBc28yK256S2tZUk1nZ2JNbkZSQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGbTVRTytvN2IvekdFZUdpYnFpWE5QUmFhdHBNQy93NDJuOXpKbTVxc1RBdXgxT0tLa2ZvNGw0OE15WklqNnRnckJCdnF5b3ZnVG9NR1Y1K3Fsa2ZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBV2pnRXBMVEpWcWRVV25uWnhZcHFoYTI1VkNqdHMxclVkT05KUnh1NVh1NjIvS0JoMzNxdkZIRzZ5VGRmR0I2SHZDNlE0NUdZcGFuQmdocFo5L1hnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNjc0NjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiLFxuICAgIFwibGlkXCI6IFwiMjY1MDQ3MzY0Mzc4Njg2OjM4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0OTI2NzQ2OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTcyMTI5ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDd2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN3Zy5qc29uIjogIntcImtleURhdGFcIjpcImpUaWxWS0llYVkxTllWbHA2TCtDdzFRbTNWdUFBWi83VzNQekEvaFJhckE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3ODEzMDkwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU3MjEyMzMzNTAyXCJ9Igp9"  // PUT your SESSION_ID 


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
