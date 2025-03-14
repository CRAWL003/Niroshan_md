import moment from 'moment-timezone';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';

const allMenu = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
    
        // Calculate uptime
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    //realtime function
        const realTime = moment().tz("Zimbabwe/Harare").format("HH:mm:ss");
// pushwish function
    let pushwish = "";
    
        if (realTime < "05:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
} else if (realTime < "11:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶 🌄`;
} else if (realTime < "15:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙰𝙵𝚃𝙴𝚁𝙽𝙾𝙾𝙽 🌅`;
} else if (realTime < "18:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
} else if (realTime < "19:00:00") {
  pushwish = `𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶 🌃`;
} else {
  pushwish = `𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝙷𝚃 🌌`;
}

  const sendCommandMessage = async (messageContent) => {
    await sock.sendMessage(
      m.from,
      {
        text: messageContent,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363306168354073@newsletter', // Preserved newsletter JID
            newsletterName: "",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "",
            body: pushName,
            thumbnailUrl: 'https://files.catbox.moe/bqs70b.jpg', // Thumbnail URL
            sourceUrl: 'https://files.catbox.moe/tdhhl5.mp3', // Source URL
            mediaType: 1,
            renderSmallerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  };

  // Command: allmenu
  if (cmd === "menu") {
    await m.React('⏳'); // React with a loading icon
    const aliveMessage = `
 
╭───❍「 *𝖩𝖨𝖭𝖶𝖮𝖮 𝖵³* 」
│ 🧑 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *𝖩𝖨𝖭 𝖬𝖤𝖭𝖴 𝖫𝖨𝖲𝖳* 」
* | * 💻 *${prefix}mainmenu*
*│* 📥 *${prefix}downloadmenu*
*│* 🤖 *${prefix}Aimenmenu*
*│* 💭 *${prefix}Searchmenu*
*│* ⚙️ *${prefix}Toolsmenu*
*│* ©️ *${prefix}Logomenu*
*│* 🫂 *${prefix}Groupmenu*
╰───────────❍ 
╭───────────❍
> ᴏᴡɴᴇʀ ᴍᴀʟᴠɪɴ ᴋɪɴɢ
╰───────────❍
`;

    await m.React('✅'); // React with success icon
    await sendCommandMessage(aliveMessage);
  }
if (cmd === "mainmenu") {
    await m.React('🦖'); // React with a loading icon

    const mainmenuMessage = `
╭───❍「 *𝖩𝖨𝖭𝖶𝖮𝖮 𝖵³* 」
┊ 👤 *𝚄sᴇʀ:* ${pushName} ${pushwish}
┊ 🪩 *𝙼ᴏᴅᴇ:* ${mode}
┊ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
┊ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
   ⚡〔 *𝖩𝖨𝖭𝖶𝖮𝖮-𝖵³* 〕⚡
╭──────────────
┇ Oᴡɴᴇʀ : *ᴍᴀʟᴠɪɴ ᴋɪɴɢ*
┇ Usᴇʀ :  ${pushName} ${pushwish}
┇ Tʏᴘᴇ : *ɴᴏᴅᴇ.ᴊs*
┇ Mᴏᴅᴇ : *${mode}*
┇ Pʀᴇғɪx : [${prefix}]
┇ Vᴇrsɪᴏɴ : *3.1.0*
╰─────────────┈⊷ 
> Hey ${m.pushName} ${pushwish}

 ❐ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ᴀᴛᴛᴘ
┊ ${prefix}ᴀᴛᴛᴘ2
┊ ${prefix}ᴀᴛᴛᴘ3
┊ ${prefix}ᴇʙɪɴᴀʀʏ
┊ ${prefix}ᴅʙɪɴᴀʀʏ
┊ ${prefix}ᴇᴍᴏᴊɪᴍɪx
┊ ${prefix}ᴍᴘ3
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙰𝙸 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ᴀɪ
┊ .${prefix}ʙᴜɢ
┊ .${prefix}ʀᴇᴘᴏʀᴛ
┊ ${prefix}ɢᴘᴛ
┊ ${prefix}ᴅᴀʟʟᴇ
┊ ${prefix}ʀᴇᴍɪɴɪ
┊ ${prefix}ɢᴇᴍɪɴɪ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝚃𝙾𝙾𝙻 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
┊ ${prefix}ᴛᴇᴍᴘᴍᴀɪʟ
┊ ${prefix}ᴄʜᴇᴄᴋᴍᴀɪʟ
┊ ${prefix}ᴛʀᴛ
┊ ${prefix}ᴛᴛs
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ʟɪɴᴋɢᴄ
┊ .${prefix}sᴇᴛᴘᴘɢᴄ
┊ ${prefix}sᴇᴛɴᴀᴍᴇ
┊ ${prefix}sᴇᴛᴅᴇsᴄ
┊ ${prefix}ɢʀᴏᴜᴘ
┊ ${prefix}ɢᴄsᴇᴛᴛɪɴs
┊ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
┊ ${prefix}ᴀᴅᴅ
┊ ${prefix}ᴋɪᴄᴋ
┊ ${prefix}ʜɪᴅᴇᴛᴀɢ
┊ ${prefix}ᴛᴀɢᴀʟʟ
┊ ${prefix}ᴀɴᴛɪʟɪɴᴋ
┊ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ
┊ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
┊ ${prefix}ᴅᴇᴍᴏᴛᴇ
┊ ${prefix}ɢᴇᴛʙɪᴏ
┊ ${prefix}ᴄʟᴏsᴇ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ɪᴍɢ
┊ ${prefix}ᴀᴘᴋ
┊ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
┊ ${prefix}ᴍɪᴅᴇᴀғɪʀᴇ
┊ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛᴅʟ
┊ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
┊ ${prefix}ɢᴅʀɪᴠᴇ
┊ ${prefix}ɪɴsᴛᴀ
┊ ${prefix}ʏᴛᴍᴘ3
┊ ${prefix}ʏᴛᴍᴘ4
┊ ${prefix}ᴘʟᴀʏ
┊ ${prefix}sᴏɴɢ
┊ ${prefix}ᴠɪᴅᴇᴏ
┊ ${prefix}ʏᴛᴍᴘ3ᴅᴏᴄ
┊ ${prefix}ʏᴛᴍᴘ4ᴅᴏᴄ
┊ ${prefix}ᴛɪᴋᴛᴏᴋ
┊ ${prefix}ᴛɪᴋᴛᴏᴋ2
┊ ${prefix}ʏᴛs2
┊ ${prefix}ʏᴛs
┊ ${prefix}ᴘʟᴀʏ2
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈❑

   ❐ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴘʟᴀʏ
┊ ${prefix}ʏᴛs
┊ ${prefix}ɪᴍᴅʙ
┊ ${prefix}ɢᴏᴏɢʟᴇ
┊ ${prefix}ɢɪᴍᴀɢᴇ
┊ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
┊ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
┊ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
┊ ${prefix}ʏᴛsᴇᴀʀᴄʜ
┊ ${prefix}ʀɪɴɢᴛᴏɴᴇ
┊ ${prefix}ʟʏʀɪᴄs
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴘɪɴɢ
┊ ${prefix}ᴀᴅᴅᴠᴀʀ
┊ ${prefix}ᴀʟʟᴠᴀʀ
┊ ${prefix}ᴀʟɪᴠᴇ
┊ ${prefix}ᴏᴡɴᴇʀ
┊ ${prefix}ᴍᴇɴᴜ
┋ ${prefix}ɪɴғᴏʙᴏᴛ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴍᴇɴᴜ
┊ ${prefix}ʀᴇᴘᴏ
┊ ${prefix}sᴄ
┊ ${prefix}ᴊᴏɪɴ
┊ ${prefix}ʟᴇᴀᴠᴇ
┊ ${prefix}ʙʟᴏᴄᴋ
┊ ${prefix}ᴜɴʙʟᴏᴄᴋ
┊ ${prefix}sᴇᴛᴘᴘʙᴏᴛ
┊ ${prefix}ᴀɴᴛɪᴄᴀʟʟ
┊ ${prefix}sᴇᴛsᴛᴀᴛᴜs
┊ ${prefix}sᴇᴛɴᴀᴍᴇʙᴏᴛ
┊ ${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┊ ${prefix}ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
┊ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
┊ ${prefix}ᴀᴜᴛᴏsᴠɪᴇᴡ
╰┈┈┈┈┈┈┈┈┈┈┈┈┈❑

   ❐ 𝚂𝚃𝙰𝙻𝙺 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴛʀᴜᴇᴄᴀʟʟᴇʀ
┊ ${prefix}ɪɴsᴛᴀsᴛᴀʟᴋ
┊ ${prefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
┊ ${prefix}ᴡᴀᴄʜᴀɴɴᴇʟ
┊ ${prefix}ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
╰┉┈┈┈┈┈┈┈┈┈┈┈┈┈┈❐

> ᴊᴏɪɴ ᴏᴜʀ ᴡᴀ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs`;

await m.React('✅'); // React with success icon
    await sendCommandMessage(mainmenuMessage);
  }
 // Command: downloadmenu
  if (cmd === "downloadmenu") {
    await m.React('⏳'); // React with a loading icon

    const downloadmenuMessage = `

   
╭───❍「 *𝖩𝖨𝖭𝖶𝖮𝖮 𝖵3* 」
┊ 🧑‍ *𝚄sᴇʀ:* ${pushName} ${pushwish}
┊ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
┊ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
┊ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *DOWNLOAD MENU * 」
*┋*⬇️ *${prefix}Fb*
*┋*⬇️ *${prefix}Insta*
*┋*⬇️ *${prefix}Insta2*
*┋*⬇️ *${prefix}Play*
*┋*⬇️ *${prefix}Song*
*┋*⬇️ *${prefix}Video*
*┋*⬇️ *${prefix}TwitAudio*
*┋*⬇️ *${prefix}Tiktok*
*┋*⬇️ *${prefix}Tiktok2*
*┋*⬇️ *${prefix}MediaFire2*
*┋*⬇️ *${prefix}Apk*
 ╰───────────❍   
╭───────────❍
> ᴊɪɴᴡᴏᴏ ᴠ3
╰──────────
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(downloadmenuMessage);
  }
  // Command: aimenu
  if (cmd === "aimenu") {
    await m.React('⏳'); // React with a loading icon

    const aimenuMessage = `
╭───❍「 *𝖩𝖨𝖭𝖶𝖮𝖮 𝖵3* 」
┊ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
┊ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
┊ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
┊ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
*┋*🤖 *${prefix}𝙶𝚙𝚝*
*┋*🤖 *${prefix}𝙼𝚎𝚝𝚊*
*┋*🤖 *${prefix}𝙱𝚕𝚊𝚌𝚔𝙱𝚘𝚡*
*┋*🤖 *${prefix}𝙻𝚕𝚊𝚖𝚊*
*┋*🤖 *${prefix}𝙲𝚕𝚊𝚞𝚍𝚎*
*┋*🤖 *${prefix}𝙼𝚒𝚡𝚝𝚛𝚊𝚕*
╰───────────❍
╭───────────❍
> ᴊɪɴᴡᴏᴏ ᴠ3
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(aimenuMessage);
  }
  // Command: groupmenu
  if (cmd === "logomenu") {
    await m.React('⏳'); // React with a loading icon

    const logomenuMessage = `
╭───❍「 *TREX MD* 」
│ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
*┋* 🕳️ *${prefix}𝗅𝗈𝗀𝗈*
*┋* 🕳️ *${prefix}𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄*
*┋* 🕳️ *${prefix}𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋*
*┋* 🕳️ *${prefix}𝗇𝖺𝗋𝗎𝗋𝗈*
*┋* 🕳️ *${prefix}𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁*
*┋* 🕳️ *${prefix}𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁*
*┋* 🕳️ *${prefix}𝗌𝗍𝖺𝗋*
*┋* 🕳️ *${prefix}𝗌𝗆𝗈𝗄𝖾*
*┋* 🕳️ *${prefix}𝖻𝖾𝖺𝗋*
*┋* 🕳️ *${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅*
*┋* 🕳️ *${prefix}𝗌𝖼𝗋𝖾𝖾𝗇*
*┋* 🕳️ *${prefix}𝗇𝖺𝗍𝗎𝗋𝖾*
*┋* 🕳️ *${prefix}𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅*
*┋* 🕳️ *${prefix}𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌*
*┋* 🕳️ *${prefix}𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍*
*┋* 🕳️ *${prefix}𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉*
*┋* 🕳️ *${prefix}𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌*
*┋* 🕳️ *${prefix}𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇*
*┋* 🕳️ *${prefix}𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍*
*┋* 🕳️ *${prefix}hacker*
*┋* 🕳️ *${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅*
╭───────────❍
> ᴊɪɴᴡᴏᴏ ᴠ3
╰───────────❍
`;

await m.React('✅'); // React with success icon
    await sendCommandMessage(logomenuMessage);
  }
  // Command: joel
  if (cmd === "groupmenu") {
    await m.React('⏳'); // React with a loading icon

    const stalkerMessage = `
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
│ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 
*┋* 👥 *${prefix}𝙾𝚙𝚎𝚗*
*┋* 👥 *${prefix}𝙲𝚕𝚘𝚜𝚎*
*┋* 👥 *${prefix}𝚃𝚊𝚐𝚊𝚕𝚕*
*┋* 👥 *${prefix}𝙺𝚒𝚌𝚔*
*┋* 👥 *${prefix}𝙰𝚍𝚍*
*┋* 👥 *${prefix}𝙳𝚒𝚜 24𝚑*
*┋* 👥 *${prefix}𝙸𝚗𝚟𝚒𝚝𝚎*
╭───────────❍
> ᴊɪɴᴡᴏᴏ ᴠ3 
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(stalkerMessage);
  }
 
  // Command: allmenu
  if (cmd === "searchmenu") {
    await m.React('⏳'); // React with a loading icon

    const stickerMessage = `
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
│ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
*┊*🔎 *${prefix}𝚈𝚝𝚜*
*┊*🔎 *${prefix}𝙶𝚒𝚝𝚜*
*┊*🔎 *${prefix}𝚃𝚒𝚔𝚜*
*┊*🔎 *${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛*
*┊*🔎 *${prefix}𝚂𝚙𝚘𝚝𝚒𝚏𝚢*
*┊*🔎 *${prefix}ɢᴏᴏɢʟᴇ*
*┊*🔎 * ${prefix}ɢɪᴍᴀɢᴇ*
*┊*🔎 * ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ*
*┊*🔎 * ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ*
*┊*🔎 * ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ*
*┊*🔎 * ${prefix}ʏᴛsᴇᴀʀᴄʜ*
*┊*🔎 * ${prefix}ʀɪɴɢᴛᴏɴᴇ*
*┊*🔎 * ${prefix}ʟʏʀɪᴄs*
╰───────────❍
╭───────────❍
> ᴊɪɴᴡᴏᴏ ᴠ3
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(stickerMessage);
  }
  // Command: ownermenu
  if (cmd === "ownermenu") {
    await m.React('⏳'); // React with a loading icon

    const ownerMessage = `
    ╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
│ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
 ╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
*┋*❄️ *${prefix}𝚁𝚎𝚜𝚝𝚊𝚛𝚝*
*┋*💫 *${prefix}𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝*
*┋*💫 *${prefix}𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝*
*┋*❄️ *${prefix}𝙹𝚘𝚒𝚗*
*┋*💫 *${prefix}𝙻𝚎𝚏𝚝*
*┋*💫 *${prefix}𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝*
*┋*❄️ *${prefix}𝚅𝚟*
*┋*💫 *${prefix}𝚅𝚟2*
*┋*💫 *${prefix}𝙳𝚎𝚕𝚎𝚝𝚎*
*┋*❄️ *${prefix}𝚂𝚊𝚟𝚎*
*┋*💫 *${prefix}ᴍᴇɴᴜ2*
*╰───────────❍*
╭───────────❍
> HELLO ${pushName} ${pushwish}
╰───────────❍
`;

    await m.React('✅'); // React with success icon
    await sendCommandMessage(ownerMessage);
  }
  //Command: othermenu
  if (cmd === "othermenu") {
    await m.React('⏳'); // React with a loading icon

    const otherMessage = `
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
│ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
*│ *🗿 *${prefix}𝙿𝚒𝚗𝚐*
*│ *🗿 *${prefix}𝙰𝚋𝚘𝚞𝚝*
*│ *🗿 *${prefix}𝚛𝚎𝚙𝚘*
*│ *🗿 *${prefix}sᴄ*
*│ *🗿 *${prefix}𝙰𝚕𝚒𝚟𝚎*
*│ *🗿 *${prefix}𝚄𝚛𝚕*
*│ *🗿 *${prefix}𝚄𝚛𝚕2*
*│ *🗿 *${prefix}𝚂𝚎𝚗𝚍𝚖𝚎*
╰───────────❍   
╭───────────❍
> ᴊɪɴᴡᴏᴏ ᴠ3
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(otherMessage);
  }
    if (cmd === "toolsmenu") {
    await m.React('⏳'); // React with a loading icon
    const toolsMessage = `
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
│ 🧑‍💻 *𝚄sᴇʀ:* ${pushName} ${pushwish}
│ 🌐 *𝙼ᴏᴅᴇ:* ${mode}
│ ⏰ *𝚃ɪᴍᴇ:* ${realTime}
│ 🚀 *𝚄ᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───────────❍
╭───❍「 *𝖩𝖨𝖭 𝖬𝖣* 」
*┋*📍  * ${prefix}𝚂𝚜 *
*┋*📍  * ${prefix}𝚆𝚎𝚋𝚜𝚜 *
*┋*📍  * ${prefix}𝙵𝚞𝚕𝚕𝚜𝚜 *
*┋*📍  * ${prefix}𝚃𝚛𝚝 *
*┋*📍  * ${prefix}𝙵𝚎𝚝𝚌𝚑 *
*┋*📍  * ${prefix}𝚃𝚎𝚡𝚝2𝚒𝚖𝚐 *
*┋*📍  * ${prefix}ᴀᴅᴅᴠᴀʀ *
*┋*📍  * ${prefix}ᴀʟʟᴠᴀʀ *
╰───────────❍  
╭───────────❍
> THANKS ${pushName} ${pushwish}
╰───────────❍
`;
await m.React('✅'); // React with success icon
    await sendCommandMessage(toolsMessage);
  }
};
// coded by Malvin King

export default allMenu;
