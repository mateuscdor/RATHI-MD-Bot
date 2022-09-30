process.on('uncaughtException', console.error)
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zrathi = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { rathiTiktok } = require('./lib/tiktokrathidl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')


const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));

 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Asia/Colombo').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Colombo').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = rathi = async (rathi, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await rathi.decodeJid(rathi.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await rathi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')




const mongoose = require("mongoose");




/////////// -  DM chatbot (Delete this part to turn off DM Chat Bot) - //////////////////

if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }

//////////////////////////////////////////////////////////////////////////////////////


_sewa.expiredCheck(rathi, sewa)

const reply = (teks) => {
            rathi.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            rathi.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && rathi.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *User Level UP* 」\n\n@${m.sender.split("@")[0]} got leveled up!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Role*: ${role} \n\n`
rathi.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		rathi.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await rathi.sendPresenceUpdate('composing', m.chat)
rathi.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { rathi.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { rathi.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { rathi.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { rathi.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { rathi.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
rathi.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Colombo').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
Pls try not to tag him!
He's in away from keyboard ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
Pls try not to tag him!
He's Offline ${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


if (m.mtype === 'groupInviteMessage') {
teks = `I can't join the group untill my *Owner* ask me to join. Type *.owner* to get owner number and ask him.`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/rathi.jpg'), `${watermark}`, `${BotName}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}


if (AntiLink) {
    linkgce = await rathi.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be because you sent this group's link.`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nAdmin has sent a link so no action is taken.`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nLink sent by Admin so no action is taken!`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
  rathi.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nLink sent by Admin so no action is taken!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
rathi.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]}  Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*Caution!*\n\n`.repeat(300))
    reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    rathi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await rathi.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be taken because you sent this group's link!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nAdmin has sent a group link so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt video link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt channel link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Instagram link in this group! No promotion is allowed!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Facebook link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Telegram link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Tiktok link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Twitter link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await rathi.groupParticipantsUpdate(m.chat, [kice], 'remove')
        rathi.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending links in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Asia/Colombo').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Asia/Colombo').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
rathi.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}


if (!rathi.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Asia/Colombo"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await rathi.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await rathi.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await rathi.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await rathi.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await rathi.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await rathi.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await rathi.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Perfect Player`}`.trim()
          rathi.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          rathi.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          rathi.sendText(m.chat, `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) rathi.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          if (!roof.pilih2) rathi.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) rathi.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          rathi.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scissors|rock|paper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih2) rathi.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih) rathi.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            rathi.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: rathi.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, rathi.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              rathi.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                rathi.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/rathi.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `rathi`,
                                "h": `rathi`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `CHARITH`,
                                'jpegThumbnail': fs.readFileSync('./Assets/rathi.jpg')
                                       }
                                      }
                                   } 

//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${global.location}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "916909137213-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "audioMessage": {
  "mimetype":"audio/ogg; codecs=opus",
  "seconds": "9999999999999999",
  "ptt": "true"
  }
  } 
  }
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }


    const menulist = `
    HI ${pushname} cago 👋. I am ${global.BotName}, a bot developed by: Charith to take your WhatsApp usage into next level.
        
       「 System Info 」
    
    🍭 Speed : ${latensie.toFixed(4)} miliseconds
    🍭 Up Time : ${runtime(process.uptime())}
    🍭 Bot Name : ${global.BotName}
    🍭 Owner Name : ${global.OwnerName}
    🍭 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}

    Type *.menu* or press any button below to start using *${global.BotName}*
    
    ©️ *${global.BotName}* All Rights Reserved by: *Charith Senanayake*
    `
        const qtod = m.quoted? "true":"false"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

           

switch(command) {
	
    case 'sc': case 'script': case 'sourcecode': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    teks = `RATHI's Script\n\nGitHub: ${global.BotSourceCode}\n\nDont forget to follow me on *GitHub* and give a ⭐️ to my projects. `
    let buttons = [
    {buttonId: `.menu`, buttonText: {displayText: '📃 MENU 📃'}, type: 1}
    ]
    let buttonMessage = {
    image: Thumb,
    jpegThumbnail: BotLogo ,
    caption: teks,
    footer: `${BotName }`,
    buttons: buttons,
    headerType: 4,
    contextInfo:{externalAdReply:{
    title:"Powered by Charith",
    body: " ", 
    thumbnail: fs.readFileSync("Assets/rathi.jpg"),
    mediaType:1,
    mediaUrl: 'https://i.ibb.co/5vScqb1/botRATHI.jpg',
    sourceUrl: "https://github.com/CharithPramodyaSenanayake/#follow"
    }}

    }
    rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'me': case 'profile': case 'p':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await rathi.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"
     
     try {
        
        pfp=await rathi.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://i.ibb.co/5vScqb1/botRATHI.jpg'
    }

     const profilexx = `*「  Profile Info  」*\n\n*User Name* : ${pushname}\n*Bio* : ${bioo}\n*Group Admin Status* : ${adn}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n*Role* : ${role}`
 


let buttonspro = [
    {buttonId: `.soulmate`, buttonText: {displayText: 'Your Soulmate'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        rathi.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break


case 'banchat': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (isBanChat) return replay('This Group is Already Banned from using me!')
banchat.push(from)
replay('This Group has been banned from using me!')
var groupe = await rathi.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
rathi.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('This Group is Already Banned from using me!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('This Group has been *unbanned* from using me!')
} else {
  let buttonsntnsfw = [
  { buttonId: `.bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `.bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await rathi.sendButtonText(m.chat, buttonsntnsfw, `Please choose any Button below.\n\n *On / Off*`, `${global.BotName }`, m)
  }
  }
  break


  case 'charith': case 'chari': case 'chariya': case 'චරිත්':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    replay('o කියපන්')

    break

    case 'gm': case 'good morning': case 'morning': case 'සුබ උදෑසනක්':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        replay('සුබ උදෑසනක්...!!🌄')
    
        break
    
    case 'gn': case 'good night': case 'night': case 'සුබ රාත්‍රියක්':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        replay('සුබ රාත්‍රියක්...!😴')
        
        break    



case 'botgrups':
case 'botgroups':
case 'botgrup':
case 'botgroup':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` Don't forget to join yeah!
🍭GROUP LINK
   https://chat.whatsapp.com/DvRZCCiJB1LFFTvAEelMMi
`)
break

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'support': case 'supportgc':
    
    reply(`*My developer's group:* http://gg.gg/rathiSupport`)
    break

case 'repo': case 'botrepo':
    
    reply(`My Source Code: https://github.com/CharithPramodyaSenanayake/RATHI-MD-Bot`)
    break

case 'naraka':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!AntiNsfw) return reply(mess.nonsfw)
        reply(` *━━━〈  📛 NARAKA Menu 📛  〉━━━*\n\nhentaivideo, blowjobgif, hneko, masturbation, thighs, pussy, panties, orgy, ahegao, ass, bdsm, blowjob, cuckold, ero, gasm, cum, femdom, foot, gangbang, glasses, jahy, trap, blowjobgif, spank, hneko, hwaifu, gasm`)
    break

case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━〈  📍 Reactions 📍  〉━━━*\n\nbonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe`)
        break   
    

case 'limituser': case 'userlimit': case 'limit':
            if (isBan) return reply(mess.banned)	 			
            if (isBanChat) return reply(mess.bangc)
            {      
               let txt = `「 *All User Limit* 」\n\n`
                 for (let i of _limit){
                 txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
                 }
                reply(txt)       
              }
             break
    



case 'ringtone': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		rathi.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'film': case 'movie': case 'moviesearch':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                }
               rathi.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break



case 'wikimedia': case 'wikiimage': {
	if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `.wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
        ]
        let buttonMessage = {
            image: { url: hasil.image },
            caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

  case 'grupsetting':
    case 'groupsetting':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`leveling off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
            let suruh = [`Enable`, `Disable`]
            let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  rathi.sendMessage(
from, 
{
text: "Group Settings",
footer: BotName,
title: "Set your group settings here...",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break

/*
case 'animesearchxxx': case 'anime':{
    await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
    .then((res) => {
    let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
    rathi.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
    })
    }
    break
*/

case 'coffee': case 'kopi': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `.coffee`, buttonText: {displayText: '⏩'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `Here is your Coffee...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'emojimix': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*Example :* ${prefix + command} '😎+😏`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await rathi.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'getcase':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('Where is the emoji?\nemoji එකත් ඕනා')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await rathi.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Here it is...`}, {quoted:m})
await rathi.sendMessage(from, {text:"reply .s to this image to make sticker"}, {quoted:mese})
})
}
break

/*
case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return
 let { chat, fromMe, id, isBaileys } = m.quoted
 if (!isBaileys) return replay('How can i delete messages of other person? Baka!')
 rathi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
*/

 case 'deleteall': case 'delall': case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Please mention a message baka!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await rathi.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  rathi's pm user list  」\n\nTotal ${anu.length} users are using rathi in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`
 }
 rathi.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  rathi's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await rathi.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Colombo').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 rathi.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'afk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} is now Away From Keyboard.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': case 'අකුරු හරවන්න': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`「  Text Flipper Tool  」\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`「  Word Maker Tool  」\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
 } catch {
 replay(`Error!`)
 }
 }

   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Already activated`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling activated')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling deactivated')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Already activated')
 ntilink.push(from)
 replay('Activated _Antilink_ in this group.')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Already deactivated!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Already activated')
 ntilinkytvid.push(from)
 replay('Activated youtube video antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Already deactivated')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Deactivated youtube video antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Already activated')
 ntilinkytch.push(from)
 replay('Activated youtube channel antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Deactivated youtube channel antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Already activated')
 ntilinkig.push(from)
 replay('Activated instagram antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated instagram antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Already activated')
 ntilinkfb.push(from)
 replay('Activated facebook antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Already deactivated')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Deactivated facebook antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Already activated')
 ntilinktg.push(from)
 replay('Activated telegram antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated telegram antilink in this group')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Already activated')
 ntilinktt.push(from)
 replay('Activated tiktok antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Already deactivated')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Deactivated tiktok antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinktwt.push(from)
 replay('Activated twitter antilink in this group !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Already deactivated')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Deactivated twitter antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `.antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Already activated')
 ntwame.push(from)
 replay('Activated antiwame !')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `「  Warning  」\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Already deactivated')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `.antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'nsfw': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay('Already activated')
 ntnsfw.push(from)
 replay('Enabled NSFW Commands!')
 var groupe = await rathi.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 rathi.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nNSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay('Already deactivated')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('Disabled NSFW Commands!')
 } else {
   let buttonsntnsfw = [
   { buttonId: `.nsfw on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `.nsfw off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await rathi.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User is already banned.')
banUser.push(orgnye)
replay(`Successfully Banned the user.`)
} else if (args[0] === "del") {
if (!isBane) return ads('User is already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully Unbanned the user.`)
} else {
replay("Error")
}
}
break


case 'listonline': case 'listaktif': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 rathi.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break

 case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned.')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user.`)
} else {
replay("Error")
}
}
break


case 'apk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : ${prefix + command} Lightroom`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '「 APK Search Engine 」'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `.menu`, buttonText: {displayText: '📃 MENU 📃'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break

 case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : -yts Heat waves`)
 let yts = require("yt-search")
 let search = await yts(args.join(" "))
 let teks = '```「 YouTube search Engine 」```\n\n Search Term: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Result No : ${no++}\n\nTitle : ${i.title}\n\nViews : ${i.views}\n\nDuration : ${i.timestamp}\n\nUploaded : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 rathi.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

 case 'setname': case 'setsubject': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Name>  to change this Group Name')
 await rathi.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await rathi.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': {
            if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await rathi.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'setdesk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Description>  to change this Group Description.')
 await rathi.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 let media = await rathi.downloadAndSaveMediaMessage(quoted)
 await rathi.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'tag': case 'tagall': case 'all':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `「 _Tag All_ 」
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `» @${mem.id.split('@')[0]}\n`
 }
 rathi.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break

 case 'hidetag': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 rathi.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break

/*
     case 'purge':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)

        const delay = time => new Promise(res=>setTimeout(res,time));

        let users = (await rathi.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
        for (let user of users){

            await rathi.groupParticipantsUpdate(m.chat, [user], 'remove')
            await delay(3000)
        }
    }
     break

*/

case 'purge':{mess
    if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
const delay = time => new Promise(res=>setTimeout(res,time));
let mentioned = participants.map(v => v.jid)
      for (let member of mentioned) {     
      rathi.groupParticipantsUpdate(m.chat, [member], 'remove')
      }
    }

    break




    case 'nowa':  case 'stalk': case 'stalknumber':{
        if (isBan) return reply(mess.banned)
        if (!args[0]) return reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You didnot added x')
        reply(`Searching for WhatsApp account in given range...`)
        reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
        return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
        var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        var status1 = nu[Math.floor(Math.random() * nu.length)]
        var status2 = nu[Math.floor(Math.random() * nu.length)]
        var status3 = nu[Math.floor(Math.random() * nu.length)]
        var dom4 = nu[Math.floor(Math.random() * nu.length)]
        var rndm;
        if (random_length == 1) {
        rndm = `${status1}`
        } else if (random_length == 2) {
        rndm = `${status1}${status2}`
        } else if (random_length == 3) {
        rndm = `${status1}${status2}${status3}`
        } else if (random_length == 4) {
        rndm = `${status1}${status2}${status3}${dom4}`
        }
        var anu = await rathi.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
        var anuu = anu.length !== 0 ? anu : false
        try {
        try {
        var anu1 = await rathi.fetchStatus(anu[0].jid)
        } catch {
        var anu1 = '401'
        }
        if (anu1 == '401' || anu1.status.length == 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
        } else {
        nomerny += `🎀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Asia/Colombo').format('HH:mm:ss DD/MM/YYYY')}\n\n`
        }
        } catch {
        nowhatsapp += `${number0}${i}${number1}\n`
        }
        }
        reply(`${nomerny}${nobio}${nowhatsapp}`)
        }
        break







 case 'grouplink': case 'gclink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await rathi.groupInviteCode(m.chat)
 rathi.sendMessage(m.chat, {text:`*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'revoke':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    rathi.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'grup': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await rathi.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Group has been closed!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await rathi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Group has been opened!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '.group open', buttonText: { displayText: 'Open' }, type: 1 },
     { buttonId: '.group close', buttonText: { displayText: 'Close' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'remove':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await rathi.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await rathi.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Succes!")
     } else {
     rathi.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/rathi.jpg'), `${global.packname}`, `${global.BotName}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await rathi.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Joined !")
     } else {
     replay("Error")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'volume': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
     media = await rathi.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     rathi.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     rathi.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("Please send video/audio file only!")
     }
     }
     break

     case 'tempo': {
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
        if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await rathi.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        rathi.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else if (isQuotedVideo) {
        ran = getRandom('.mp4')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media)
        if (err) return reply('Error!')
        hah = fs.readFileSync(ran)
        rathi.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
        fs.unlinkSync(ran)
        })
        } else {
        reply("Please send video/audio file only!")
        }
        }
        break

        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await rathi.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            rathi.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break


case 'calculator': case 'cal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*Example :*\n${prefix}calculator 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 Calculator Tool 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 rathi.public = true
 reply('I am now Publicly accessable!')
 rathi.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 rathi.public = false
 reply('Only Owner can use me now!')
 rathi.setStatus(`Mode : Self`)
 }
 break


case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.waiting)
let media = await rathi.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
rathi.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await rathi.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await rathi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'toaud': case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
 if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 rathi.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break

case 'tomp3': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 rathi.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'togif': case 'getgif':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await rathi.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await rathi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await rathi.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break


 case 'owner': case 'creator': case 'චරිත්': case 'mod': case 'charith':{
    rathi.sendContact(m.chat, global.Owner, m)
    }
    break

case 'translate': case 'trans': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("Pls enter any text to translate")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break


case 'gimage': case 'gig': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Enter a search term to get Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `.gimage ${args.join(" ")}`, buttonText: {displayText: '⏩'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 Google Image Search 」

 🔍 Search Term : ${text}
 🔗 Media Url : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'search': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 Google Search Engine 」\n\n 🔍 Search term ${text}\n\n`
 for (let g of res) {
 teks += ` ✒ Title  ${g.title}\n\n`
 teks += ` 🔰 Description  ${g.snippet}\n\n`
 teks += ` 🔗 Link  ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break

 case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
 try {
 hx.igdl(args[0]).then(async(resed) => {
 ini_anu = []
 anu_list = []
 textbv = `「 Instagram Downloader 」\n\n 🎩 Username : ${resed.user.username ? resed.user.name : "undefined"}\n 👦 Followers : ${resed.user.followers}`
 urut = 1
 for (let i = 0; i < resed.medias.length; i++) {
 ini_anu.push({
  "type": resed.medias[i].fileType,
  "url": resed.medias[i].url
 })
 }
 ilod = 1
 for (let i of ini_anu) {
 anu_list.push({buttonId: `.ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
 }
 textbv += `\n\n_Select the media below to download_`
 let buttons = anu_list
 let buttonMessage = {
 image:BotLogo,
 jpegThumbnail:Thumb,
 caption: textbv,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 rathi.sendMessage(from, buttonMessage, {quoted:m})
 })
 } catch (err) {
 reply("An Error Occured!")
 }
 }
 break

 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
rathi.sendMessage(from, {video:{url:args[1]}, caption:'Here it is...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
rathi.sendMessage(from, {image:{url:args[1]}, caption:'Here it is...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break

case 'mp4' : {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Pls provide link!`)
try {
rathi.sendMessage(from, {video:{url:args[0]}, caption:"Succes!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
 rathi.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link error")
 }
 }
 break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Please provide link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 rathi.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `
                                     『  RATHI  』\n
                             ◉═══════════════════════════◉\n`
                    txt += `「 Twitter Downloader 」\n\n`
                    txt += ` ✒ Title  ${data.title}\n`
                    txt += ` 🤞 Quality  ${data.medias[1].quality}\n`
                    txt += ` 📌 Type  ${data.medias[1].extension}\n`
                    txt += ` 🤙 Size  ${data.medias[1].formattedSize}\n`
                    txt += ` 🔰 Duration  ${data.medias.length}\n`
                    txt += ` 🔗 URL  ${data.url}\n\n`
                    txt += `◉═══════════════════════════◉`
                buf = await getBuffer(data.thumbnail)    
                rathi.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                rathi.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break

case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
                xfarrapi.Twitter(`${text}`).then(async (data) => {
                rathi.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break

case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `
        『  RATHI  』
◉═══════════════════════════◉
   「 Twitter Downloader 」

 ✒ Caption  ${lotwit.title ? lotwit.title : "undefined"}
 🤞 Type  ${lotwit.medias[1].extension}
 🎗 Size  ${lotwit.medias[1].formattedSize}
 🔗 Link  ${lotwit.medias[1].url}

Please choose the video quality

◉═══════════════════════════◉`
let buttons = [
{buttonId: `.twitter ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `.twitter ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
rathi.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link Error!")
}
}
break

case 'twddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `.menu`, buttonText: {displayText: '📃 MENU 📃'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Here it is...",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 rathi.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
              if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                 if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
             let bocil = require('@bochilteam/scraper')  
                 bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                     let txt = `
                              『  RATHI  』\n
                     ◉═══════════════════════════◉\n`
                     txt += `「 Facebook Downloader 」\n\n`
                     txt += ` ✒ Title  ${data.title}\n`
                     txt += ` 🤞 Quality  ${data.result[0].quality}\n`
                     txt += ` 🔰 Description  ${data.description}\n`
                     txt += ` 🔗 URL  ${text}\n\n`
                     txt += `◉═══════════════════════════◉`

                 buf = await getBuffer(data.thumbnail)    
                 rathi.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                 for (let i of data.result) {     
                 rathi.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
                 }          
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break

case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
                  if (!text) return reply(`Please provide the link!\n\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  rathi.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break


case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `
       『  RATHI  』
◉═══════════════════════════◉
  「 Facebook Downloader 」

 ✒ Type  video/${resd.medias[0].extension}
 🤞 Quality  ${resd.medias[0].quality}
 🎗 Size  ${resd.medias[0].formattedSize}

 Click the button below 
 to download

◉═══════════════════════════◉`
let buttons = [
{buttonId: `.fbdl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,

}
rathi.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break

case 'fbddlxx': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let buttons = [
 {buttonId: `.menu`, buttonText: {displayText: '📃 MENU 📃'}, type: 1}
 ]
 let buttonMessage = {
 video: {url:args[0]},
 caption: "Done!",
 footer: `${pushname}`,
 buttons: buttons,
 headerType: 4,

 }
 rathi.sendMessage(from, buttonMessage, {quoted:m})
 }
 break

 case 'tiktok':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
 const musim_rambutan = await rathiTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const rathitiktokop = musim_rambutan.result.watermark
texttk = `Please choose the button below`
let buttons = [
{buttonId: `.ttnowm ${q}`, buttonText: {displayText: 'No Watermark'}, type: 1},
{buttonId: `.ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:rathitiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
rathi.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.wait)
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!\nටික්ටොක් ලිංකුවක් දාන්න!`)
 const musim_rambutan = await rathiTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const rathitiktoknowm = musim_rambutan.result.nowatermark
  rathi.sendMessage(from, { video: { url: rathitiktoknowm }, caption: "Here it is..." }, { quoted: m })
 }
break

case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Where is the audio?')
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!\nටික්ටොක් ලිංකුවක් දාන්න!`)
 const musim_rambutan = await rathiTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 console.log(musim_rambutan)
 const rathitiktokaudio = musim_rambutan.result.nowatermark
  rathi.sendMessage(from, { audio: { url: rathitiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
 }
break




case 'play2': case 'ytplay2': {
    if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
     reply(mess.wait)
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
    let ytvc = await hx.youtube(anu.url)
    let buttons = [
    {buttonId: `.ytmp4 ${anu.url}`, buttonText: {displayText: '📽 Video 📽'}, type: 1},
    {buttonId: `.ytmp3 ${anu.url}`, buttonText: {displayText: '🎵 Audio 🎵'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: anu.thumbnail},
                        caption: `
                              『  RATHI  』
                        ◉═══════════════════════════◉
                           「 Youtube Player 」
                       
                         ✒ Title  ${anu.title}
                         🎗 ID  ${anu.videoId}
                         🔰 Duration  ${anu.timestamp}
                         💤 Viewers  ${anu.views}
                         📅 Uploaded  ${anu.ago}
                         👦 Author  ${anu.author.name}
                         🎩 Channel  ${anu.author.name}
                         🔗 Url  ${anu.url}

                        ◉═══════════════════════════◉`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
          
                
case 'ytdl2': case 'yt2': case 'youtube2':{
	if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
if (!args[0]) return reply(mess.nolink)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `

        『  RATHI  』
◉═══════════════════════════◉
   「 Youtube Downloader 」

 ✒ Title  ${res.title}
 🤞 Quality  ${res.quality}
 🎗 Size  ${res.size}

    Select video or audio
video ද audio ද කියලා තෝරන්න

◉═══════════════════════════◉`
let buttons = [
{buttonId: `.ytmp4 ${res.link}`, buttonText: {displayText: '📽 Video 📽'}, type: 1},
{buttonId: `.ytmp3 ${res.link}`, buttonText: {displayText: '🎵 Audio 🎵'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: BotName,
buttons: buttons,
headerType: 4,

}
rathi.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Error link!")
}
}
break

case 'music': case 'play': case 'song': case 'ytplay': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
 let ytvc = await hx.youtube(anu.url)
 let buttons = [
 {buttonId: `.ytvd ${ytvc.link}`, buttonText: {displayText: '📽 Video 📽'}, type: 1},
 {buttonId: `.ytad ${ytvc.mp3}`, buttonText: {displayText: '🎵 Audio 🎵'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `
       『  RATHI  』
 ◉═══════════════════════════◉
    「 Youtube Player 」

 ✒ Title  ${anu.title}
 🔰 Duration  ${anu.timestamp}
 💤 Viewers  ${anu.views}
 📅 Uploaded  ${anu.ago}
 🎩 Channel  ${anu.author.name}
 🔗 Url  ${anu.url}
 
 ◉═══════════════════════════◉`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break

 case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(mess.nolink)
 try {
 hx.youtube(args[0]).then(async(res) => {
 textyt = `
         『  RATHI  』
 ◉═══════════════════════════◉
    「 Youtube Downloader 」

 ✒ Title  ${res.title}
 🤞 Quality  ${res.quality}
 🎗 Size  ${res.size}

     Select video or audio
 video ද audio ද කියලා තෝරන්න

◉═══════════════════════════◉`
 let buttons = [
 {buttonId: `.ytvd ${res.link}`, buttonText: {displayText: '📽 Video 📽'}, type: 1},
 {buttonId: `.ytad ${res.mp3}`, buttonText: {displayText: '🎵 Audio 🎵'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res.thumb},
 caption: textyt,
 footer: `${BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 rathi.sendMessage(from, buttonMessage, {quoted:m})
 }).catch(_ => _)
 } catch {
 reply("Link error!")
 }
 }
 break


 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 rathi.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Upload කරමින් පවතී...",}, {quoted:m})
 }
 break

 case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
 rathi.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true}, {quoted:m})
 }
 break
 
 case 'ytshorts': case 'shorts': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
   if (!text) return reply(`Use ${prefix + command} put yt shorts link\n ${prefix + command} එක්ක yt shorts එකේ ලිංකුව`)
   if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid!`)
   xfarrapi.Youtube(`${text}`).then(async (data) => {
   if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
   cap = `
        『  RATHI  』
◉═══════════════════════════◉
   「  Youtube Shorts  」

 ✒ TITLE ${data.title}\n
 🤞 QUALITY ${data.medias[0].quality}\n
 🎗 SIZE ${data.medias[0].formattedSize}\n
 🔰 DURATION ${data.duration}\n
 🔗 LINK ${data.url}\n
 
◉═══════════════════════════◉`

   buf = await getBuffer(data.thumbnail)
   rathi.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
   rathi.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*TITLE:* ${data.title}\n*QUALITY:* ${data.medias[0].quality}\n*SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                 }).catch((err) => {
                     reply(mess.reply)
                 })
             }
             break


 case 'ytmp3x':  case 'ytmusicx': {	    
    if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
let { yta } = require('./lib/y2mate')
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
let caption = `*「 Youtube Music 」*\n\n*Title :* ${media.title}\n*File size :* ${media.filesizeF}\n*Url :* ${isUrl(text)}\n*Ext :* MP3\n*Resolution :* ${args[1] || '128kbps'}`
buf = await getBuffer(media.thumb)
rathi.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => reply(mess.error))                
rathi.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{title:media.title,body:"YOUTUBE MP3",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}}).catch((err) => reply(mess.error))
}
break


case 'ytmp4x': case 'ytvideox': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { ytv } = require('./lib/y2mate')
if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=RNa4thokVJ4 360p`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid!`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 999999) return reply('*File Over Limit* '+util.format(media))
var capti = `*「 Youtube Video 」*\n\n*Title* : ${media.title}\n*File size* : ${media.filesizeF}\n*Url* : ${isUrl(text)}\n*Ext* : Mp4\n*Resoultion* : ${args[1] || '360p'}`
var buf = await getBuffer(media.thumb)
rathi.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
rathi.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Here you go!` }, { quoted: m }).catch((err) => reply(mess.error))
}
break

case 'ytdl': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.nolink)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
tummb = await getBuffer(anu.thumb)
audio = await getBuffer(anu.audio)        
rathi.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
rathi.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
}
break


case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Please provide search term!\nසර්ච් කරන්න ඕනෙ එක ටයිප් කරන්න.")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `.pinterest ${args.join(" ")}`, buttonText: {displayText: '⏩'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 rathi.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break

case 'smeme': case 'stickermeme': case 'stickmeme': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await rathi.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await rathi.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'sgif': case 'ස්ටිකර්': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await rathi.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
 let media = await quoted.download()
 let encmedia = await rathi.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds\nවිඩියෝ එකේ වෙලාව තත්පර 10ට අඩු වෙන්න ඕනෙ.`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply('What Are You Looking For??\nඔයාට ඕනෙ මොනවා ගැනද??')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error Result Not Found!') 
}) 
const result2 = `
       『  RATHI  』
◉═══════════════════════════◉

✒ Title : ${res2[0].judul}
🍭 Wiki : ${res2[0].wiki}

◉═══════════════════════════◉`
rathi.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
rathi.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break

  /*                 
 case 'dare':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
         "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
         "spill people who make you pause",
         "call crush/pickle now and send ss",
         "drop only emote every time you type on gc/pc for 1 day.",
         "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
         "call ex saying miss",
         "sing the chorus of the last song you played",
         "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
         "Bang on the table (which is at home) until you get scolded for being noisy",
         "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
         "mention ex's name",
         "make 1 rhyme for the members!",
         "send ur whatsapp chat list",
         "chat random people with gheto language then ss here",
         "tell your own version of embarrassing things",
         "tag the person you hate",
         "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
         "change name to *I AM DONKEY* for 24 hours",
         "shout *ma chuda ma chuda ma chuda* in front of your house",
         "snap/post boyfriend photo/crush",
         "tell me your boyfriend type!",
         "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
         "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
         "prank chat ex and say *i love u, please come back.* without saying dare!",
         "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
         "change the name to *I am a child of randi* for 5 hours",
         "type in bengali 24 hours",
         "Use selmon bhoi photo for 3 days",
         "drop a song quote then tag a suitable member for that quote",
         "send voice note saying can i call u baby?",
         "ss recent call whatsapp",
         "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
         "pop to a group member, and say fuck you",
         "Act like a chicken in front of ur parents",
         "Pick up a random book and read one page out loud in vn n send it here",
         "Open your front door and howl like a wolf for 10 seconds",
         "Take an embarrassing selfie and paste it on your profile picture",
         "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
         "Walk on your elbows and knees for as long as you can",
         "sing national anthem in voice note",
         "Breakdance for 30 seconds in the sitting room😂",
         "Tell the saddest story you know",
         "make a twerk dance video and put it on status for 5mins",
         "Eat a raw piece of garlic",
         "Show the last five people you texted and what the messages said",
         "put your full name on status for 5hrs",
         "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
         "call ur bestie, bitch",
         "put your photo without filter on ur status for 10mins",
         "say i love oli london in voice note🤣🤣",
         "Send a message to your ex and say I still like you",
         "call Crush/girlfriend/bestie now and screenshot here",
         "pop to one of the group member personal chat and Say you ugly bustard",
         "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
         "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
         "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
         "use any bollywood actor photo as ur pfp for 3 days",
         "put your crush photo on status with caption, this is my crush",
         "change name to I AM GAY for 5 hours",
         "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
         "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
         "slap ur butt hardly send the sound of slap through voice note😂",
         "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
         "shout bravooooooooo and send here through voice note",
         "snap your face then send it here",
         "Send your photo with a caption, i am lesbian",
         "shout using harsh words and send it here through vn",
         "shout you bastard in front of your mom/papa",
         "change the name to i am idiot for 24 hours",
         "slap urself firmly and send the sound of slap through voice note😂",
         "say i love the bot owner Charith through voice note",
         "send your gf/bf pic here",
         "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
         "breakup with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
     ]
                   const rathidareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://wallpapercave.com/wp/wp10524609.jpg`)
                   rathi.sendMessage(from, { image: buffer, caption: '*You have chosen Dare*\n\n'+ rathidareww }, {quoted:m})
                   break*/
                       
/*
case 'truth':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                           const truth =[
                 "Have you ever liked anyone? How long?",
                 "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
                 "apa ketakutan terbesar kamu?",
                 "Have you ever liked someone and felt that person likes you too?",
                 "What is the name of your friend's ex-girlfriend that you used to secretly like?",
                 "Have you ever stolen money from your father or mom? The reason?",
                 "What makes you happy when you're sad?",
                 "Ever had a one sided love? if so who? how does it feel bro?", 
                 "been someone's mistress?",
                 "the most feared thing",
                 "Who is the most influential person in your life?",
                 "what proud thing did you get this year", 
                 "Who is the person who can make you awesome", 
                 "Who is the person who has ever made you very happy?", 
                 "Who is closest to your ideal type of partner here", 
                 "Who do you like to play with??", 
                 "Have you ever rejected people? the reason why?",
                 "Mention an incident that made you hurt that you still remember", 
                 "What achievements have you got this year??",
                 "What's your worst habit at school??",
                 "What song do you sing most in the shower",
                 "Have you ever had a near-death experience",
                 "When was the last time you were really angry. Why?",
                 "Who is the last person who called you",
                 "Do you have any hidden talents, What are they",
                 "What word do you hate the most?",
                 "What is the last YouTube video you watched?",
                 "What is the last thing you Googled",
                 "Who in this group would you want to swap lives with for a week",
                 "What is the scariest thing thats ever happened to you",
                 "Have you ever farted and blamed it on someone else",
                 "When is the last time you made someone else cry",
                 "Have you ever ghosted a friend",
                 "Have you ever seen a dead body",
                 "Which of your family members annoys you the most and why",
                 "If you had to delete one app from your phone, which one would it be",
                 "What app do you waste the most time on",
                 "Have you ever faked sick to get home from school",
                 "What is the most embarrassing item in your room",
                 "What five items would you bring if you got stuck on a desert island",
                 "Have you ever laughed so hard you peed your pants",
                 "Do you smell your own farts",
                 "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
                 "What is the biggest mistake you have ever made",
                 "Have you ever cheated in an exam",
                 "What is the worst thing you have ever done",
                 "When was the last time you cried",
                 "whom do you love the most among ur parents", 
                 "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
                 "who was ur crush during the school days",
                 "tell honestly, do u like any boy in this grup",
                 "have you ever liked anyone? how long?",
                 "do you have gf/bf','what is your biggest fear?",
                 "have you ever liked someone and felt that person likes you too?",
                 "What is the name of your ex boyfriend of your friend that you once liked quietly?",
                 "ever did you steal your mothers money or your fathers money",
                 "what makes you happy when you are sad",
                 "do you like someone who is in this grup? if you then who?",
                 "have you ever been cheated on by people?",
                 "who is the most important person in your life",
                 "what proud things did you get this year",
                 "who is the person who can make you happy when u r sad",
                 "who is the person who ever made you feel uncomfortable",
                 "have you ever lied to your parents",
                 "do you still like ur ex",
                 "who do you like to play together with?",
                 "have you ever stolen big thing in ur life? the reason why?",
                 "Mention the incident that makes you hurt that you still remember",
                 "what achievements have you got this year?",
                 "what was your worst habit at school?",
                 "do you love the bot creator CHARITH?",
                 "have you ever thought of taking revenge from ur teacher?",
                 "do you like current prime minister of ur country",
                 "you non veg or veg",
                 "if you could be invisible, what is the first thing you would do",
                 "what is a secret you kept from your parents",
                 "Who is your secret crush",
                 "whois the last person you creeped on social media",
                 "If a genie granted you three wishes, what would you ask for",
                 "What is your biggest regret",
                 "What animal do you think you most look like",
                 "How many selfies do you take a day",
                 "What was your favorite childhood show",
                 "if you could be a fictional character for a day, who would you choose",
                 "whom do you text the most",
                 "What is the biggest lie you ever told your parents",
                 "Who is your celebrity crush",
                 "Whats the strangest dream you have ever had",
                 "do you play pubg, if you then send ur id number"
             ]
                           const rathitruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://wallpapercave.com/wp/wp10524609.jpg`)
                           rathi.sendMessage(from, { image: buffer, caption: '*You have chosen Truth*\n'+ rathitruthww }, {quoted:m})
                           break*/




case 'mediafire': case 'mediafiredl': {
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid\nලින්ක් එක වැරදියි.`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `
        『  RATHI  』
◉═══════════════════════════◉  
「   Mediafire Downloader   」
				
📝 Name : ${baby1[0].nama}
🎗 Size : ${baby1[0].size}
🔰 Mime : ${baby1[0].mime}
🔗 Link : ${baby1[0].link}

◉═══════════════════════════◉  `
reply(`${result4}`)
rathi.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'bj' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
bjd = await axios.get(`https://api.waifu.pics/nsfw/fuck`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await rathi.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)						
resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
let resffj = await getBuffer(resggh.data.url)
let resmain = await GIFBufferToVideoBuffer(resffj)   
      await rathi.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                  return reply('error..')
                                  })
break

*/

case 'lyrics': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`Comand usage: ${prefix}lyrics Kacha Badam`)
reply(mess.waiting)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
📌 Title : ${result.title}
🖊 Author : ${result.author}
🔗 Url : ${result.link}

🍭 Lyrics : ${result.lyrics}

`.trim())
}
break

case 'leavegc': case 'leavegroup': case 'bye': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await rathi.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break

case 'bc': case 'broadcast': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: '📃 MENU 📃',
id: '.menu'
}  
}, {
quickReplyButton: {
displayText: '😎 OWNER 😎',
id: '.owner'
}
}]
let txt = `「 *RATHI's Broadcast* 」\n\n${text}`
rathi.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('Broadcast Sent !')
}
break    


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'help': case 'මෙනුව': case 'බොටා': case 'bot': case 'menu': case 'allmenu': case 'listmenu':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `
         『  RATHI  』
◉═══════════════════════════◉        

🙏 ආයුබෝවන් *${pushname}*,

🍭 I am *RATHI*, a bot developed
   by *CHARITH SENANAYAKE*.

🔰 My prefix is:  ${prefix}

Here's the list of my Commands.
 
◉══════════ OWNER ══════════◉

📍 self
📍 public
📍 ban
📍 bangroup
📍 bye
📍 join
📍 bye
📍 block
📍 unblock
📍 broadcast 

◉══════════ GROUP ══════════◉

📍 add
📍 remove
📍 tagall
📍 groupsetting
📍 grouplink
📍 setgcpp
📍 setname
📍 setdesc

◉══════════ SEARCH ══════════◉
 
📍 play
📍 song
📍 yts
📍 lyrics
📍 pinterest
📍 image
📍 movie
📍 wallpaper
📍 ringtone

◉══════════ CONVERT ══════════◉

📍 sticker
📍 toimg
📍 tovideo
📍 togifsteal
📍 emojimix
📍 tourl
📍 tomp3
📍 toaudio

◉══════════ DOWNLOAD ══════════◉

📍 play
📍 ytmp3
📍 ytmp4
📍 ytvideo
📍 mediafire
📍 instagram
📍 facebook
📍 tiktok
📍 tiktokaudio
📍 tiktoknowm
📍 mediafire  

◉══════════════════════════════◉

 Powered by: *CHARITH SENANAYAKE*`
    

 let buttonshelpm = [
    {buttonId: `.owner`, buttonText: {displayText: 'Bot Owner'}, type: 1}
    ]
                let buttonMessage = {
                    video:fs.readFileSync('./system/rathi2.mp4'),gifPlayback:true,
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                    
                }
            rathi.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break
 

case 'rathi':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

const txt = `රතීට ආසයි වගේ...😏.`
        
            const rathiselection = rathiarray[Math.floor(Math.random()*rathiarray.length)]
        
            rathi.sendMessage(from,{video:{url:rathiselection},gifPlayback:true,caption:txt},{quoted:m})

break

case 'add':{     			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`Please write the number of the person you want to add to thhis group`)
  await rathi.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`User Added Successfully!`)).catch((err) => replay(`Cannot add that user to this group!`))
 }
 break


 case "tts":  case "texttospeech":  case "say": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Please give me a text so that i can speak it!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      rathi.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `rathiSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


    case 'qr': case 'qrcode':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        if (!m.isGroup) return replay(mess.grouponly)
    reply(`Running repl....Please wait until repl.it responds...`)						
    var replqr =  await getBuffer(`https://rathi.qr--fantox001.repl.co/`)
                               var qrbutton = [
            {buttonId: `.qr`, buttonText: {displayText: `Re-run Repl`}, type: 1}
            ]
          let bmffg = {
           image: replqr,
           caption:  `Scan the qr within 10-15 seconds...`,
          footer: `${global.BotName}`,
          buttons: qrbutton,
          headerType: 4
          }     
                await rathi.sendMessage(m.chat, bmffg,{ quoted:m }).catch(err => {
                        return('Error!')
                    })
    break


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`No such command programmed *${pushname}* bokkha! Type *${prefix}help* to get my full command list!`)

    }	 			


if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
rathi.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await rathi.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return rathi.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
rathi.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
rathi.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
