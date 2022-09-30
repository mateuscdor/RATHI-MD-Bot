const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['94712448370']
global.OwnerNumber = ['94712448370']
global.ownertag = ['94712448370']
global.BotName = "RATHI MD"
global.packname = "RATHI MD Bot"
global.author = "By: CHARITH"
global.OwnerName = "Charith Senanayake"
global.BotSourceCode = "https://github.com/CharithPramodyaSenanayake/#follow"
global.SupportGroupLink = "https://chat.whatsapp.com/DvRZCCiJB1LFFTvAEelMMi"//https://chat.whatsapp.com/JcBzjRIxM5UHfuJbt0KrWt
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Matale, Sri-Lanka"
global.reactmoji = "😎"
global.themeemoji = "🍭"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://CharithPramodyaSenanayake.github.io"
global.lolhuman = "litepramo"


global.BotLogo = fs.readFileSync("./Assets/rathi.jpg")
global.Thumb = fs.readFileSync("./Assets/rathi.jpg")
global.Thumb1 = fs.readFileSync("./Assets/rathi.jpg")
global.ErrorPic = fs.readFileSync("./Assets/erro.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'done...\n*RATHI MD*',
    useradmin: 'Sorry, only *Group Admins* can use this command!! \n*RATHI MD*',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.\n*RATHI MD*',
    botowner: 'Only my *Owner* can use this command! \n*RATHI MD*',
    grouponly: 'This command is only made for *Groups*! \n*RATHI MD*',
    privateonly: 'This command is only made for *Private Chat*! \n*RATHI MD*',
    botonly: 'Only the *Bot* can use this command!\n*RATHI MD*',
    waiting: 'wait...\n*RATHI MD*',
    nolink: 'Please provide *link*!\n*RATHI MD*',
    error: 'An error occurd!\n*RATHI MD*',
    banned: 'You are *Banned* from using commands!\n*RATHI MD*',
    bangc: 'This Group is *Banned* from using Commands!\n*RATHI MD*',
    nonsfw: 'Dont be a pervert! This is not a NSFW enabled group!\n*RATHI MD*'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
