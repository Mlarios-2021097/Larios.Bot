import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Larios.PNG';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
    @𝐋𝐀𝐑𝐈𝐎𝐒.𝐏𝐒𝐃 𝐁𝐎𝐓 ⭐

  *𝗛ola, ${taguser}*

𝐒𝐈 𝐃𝐄𝐒𝐄𝐀𝐒 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝐔 𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐂𝐔𝐀𝐋𝐐𝐔𝐈𝐄𝐑 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀 
            𝐃𝐄 𝐋𝐀 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐋𝐈𝐒𝐓𝐀 
𝐌𝐀𝐍𝐃𝐀𝐌𝐄 𝐔𝐍 𝐌𝐄𝐍𝐒𝐀𝐉𝐄 𝐀𝐋 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐍𝐔𝐌𝐄𝐑𝐎!!

@𝐋𝐀𝐑𝐈𝐎𝐒.𝐏𝐒𝐃: wa.me/50253501417

𝐌𝐄𝐓𝐎𝐃𝐎𝐒 𝐃𝐄 𝐏𝐀𝐆𝐎: 𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀 𝐌𝐗, 𝐏𝐀𝐘𝐏𝐀𝐋, 𝐁𝐈𝐍𝐀𝐍𝐂𝐄, 𝐁𝐀𝐍𝐑𝐔𝐑𝐀𝐋.

         𝐌𝐄𝐍𝐔 𝐃𝐄 𝐏𝐑𝐄𝐂𝐈𝐎𝐒 

⭐ 𝐏𝐑𝐄𝐂𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 : 𝟐𝟓 𝐌𝐗 - 𝟐 𝐃𝐋𝐒

⭐ 𝐏𝐑𝐄𝐂𝐈𝐎 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 𝐒𝐓𝐑𝐄𝐀𝐌𝐈𝐍𝐆 ⭐
      (𝐏𝐄𝐑𝐅𝐈𝐋𝐄𝐒 - 𝟏 𝐃𝐈𝐒𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐎)
      
⭐ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝟏 𝐌𝐄𝐒 - 𝟐𝟎 𝐌𝐗
⭐ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝟐 𝐌𝐄𝐒𝐄𝐒 - 𝟑𝟎 𝐌𝐗
⭐ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝟑 𝐌𝐄𝐒𝐄𝐒 - 𝟒𝟎 𝐌𝐗
⭐ 𝐇𝐁𝐎 𝐌𝐀𝐗 𝟏 𝐌𝐄𝐒 - 𝟏𝟓 𝐌𝐗
⭐ 𝐇𝐁𝐎 𝐌𝐀𝐗 𝟑 𝐌𝐄𝐒𝐄𝐒 - 𝟐𝟎 𝐌𝐗
⭐ 𝐃𝐈𝐒𝐍𝐄𝐘 𝐏𝐋𝐔𝐒 𝟏 𝐌𝐄𝐒 - 𝟏𝟓 𝐌𝐗
⭐ 𝐒𝐓𝐀𝐑 𝐏𝐋𝐔𝐒 𝟏 𝐌𝐄𝐒 - 𝟏𝟓 𝐌𝐗
⭐ 𝐏𝐑𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 𝟏 𝐌𝐄𝐒 - 𝟏𝟎 𝐌𝐗
⭐ 𝐏𝐀𝐑𝐀𝐌𝐎𝐔𝐍𝐓 𝐏𝐋𝐔𝐒 𝟏 𝐌𝐄𝐒 - 𝟏𝟎 𝐌𝐗
⭐ 𝐍𝐄𝐓𝐅𝐋𝐈𝐗 𝟏 𝐌𝐄𝐒 - 𝟒𝟓 𝐌𝐗
⭐ 𝐂𝐋𝐀𝐑𝐎 𝐕𝐈𝐃𝐄𝐎 𝟏 𝐌𝐄𝐒 - 𝟐𝟓 𝐌𝐗
⭐ 𝐂𝐑𝐔𝐍𝐂𝐇𝐘𝐑𝐎𝐋𝐋 𝟏 𝐌𝐄𝐒 - 𝟐𝟎 𝐌𝐗
⭐ 𝐕𝐈𝐗 𝐏𝐋𝐔𝐒 𝟐 𝐌𝐄𝐒𝐄𝐒 - 𝟐𝟎 𝐌𝐗
⭐ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝟏 𝐌𝐄𝐒 - 𝟐𝟓 𝐌𝐗
⭐ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐌𝐔𝐒𝐈𝐂 𝟏 𝐌𝐄𝐒 - 𝟐𝟓 𝐌𝐗

   ⭐ 𝐂𝐔𝐄𝐍𝐓𝐀𝐒 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐒 ⭐
   
⭐ 𝐇𝐁𝐎 𝐌𝐀𝐗 𝟏 𝐌𝐄𝐒 - 𝟑𝟎 𝐌𝐗
⭐ 𝐇𝐁𝐎 𝐌𝐀𝐗 𝟑 𝐌𝐄𝐒𝐄𝐒 - 𝟒𝟓 𝐌𝐗
⭐ 𝐃𝐈𝐒𝐍𝐄𝐘 𝐏𝐋𝐔𝐒 𝟏 𝐌𝐄𝐒 - 𝟓𝟎 𝐌𝐗
⭐ 𝐒𝐓𝐀𝐑 𝐏𝐋𝐔𝐒 𝟏 𝐌𝐄𝐒 - 𝟒𝟎 𝐌𝐗
⭐ 𝐏𝐑𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 𝟏 𝐌𝐄𝐒 - 𝟒𝟎 𝐌𝐗
⭐ 𝐏𝐀𝐑𝐀𝐌𝐎𝐔𝐍𝐓 𝐏𝐋𝐔𝐒 𝟏 𝐌𝐄𝐒 - 𝟑𝟎 𝐌𝐗
⭐ 𝐍𝐄𝐓𝐅𝐋𝐈𝐗 𝟏 𝐌𝐄𝐒 - 𝟏𝟕𝟓 𝐌𝐗
⭐ 𝐂𝐑𝐔𝐍𝐂𝐇𝐘𝐑𝐎𝐋𝐋 𝟏 𝐌𝐄𝐒 - 𝟑𝟓 𝐌𝐗
⭐ 𝐕𝐈𝐗 𝐏𝐋𝐔𝐒 𝟐 𝐌𝐄𝐒𝐄𝐒 - 𝟒𝟎 𝐌𝐗
⭐ 𝐂𝐀𝐍𝐕𝐀 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 - 𝟑𝟎 𝐌𝐗
⭐ 𝐎𝐅𝐅𝐈𝐂𝐄 𝟑𝟔𝟓 𝟏 𝐌𝐄𝐒 - 𝟓𝟎 𝐌𝐗

⭐ 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 ⭐

⭐ 𝟏𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟐𝟎 𝐌𝐗
⭐ 𝟐𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟒𝟎 𝐌𝐗
⭐ 𝟑𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟔𝟎 𝐌𝐗
⭐ 𝟒𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟖𝟎 𝐌𝐗
⭐ 𝟓𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟏𝟎𝟎 𝐌𝐗
⭐ 𝟔𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟏𝟏𝟓 𝐌𝐗
⭐ 𝟕𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟏𝟑𝟎 𝐌𝐗
⭐ 𝟖𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟏𝟒𝟎 𝐌𝐗
⭐ 𝟗𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟏𝟓𝟎 𝐌𝐗
⭐ 𝟏𝟎𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟏𝟔𝟎 𝐌𝐗
⭐ 𝟑𝟓𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟒𝟖𝟎 𝐌𝐗
⭐ 𝟔𝟎𝐊 𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒 - 𝟗𝟖𝟎 𝐌𝐗

 ⭐ 𝐋𝐈𝐊𝐄𝐒 𝐏𝐀𝐑𝐀 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 ⭐

⭐ 𝟏𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟏𝟎 𝐌𝐗
⭐ 𝟐𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟐𝟎 𝐌𝐗
⭐ 𝟑𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟑𝟎 𝐌𝐗
⭐ 𝟒𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟒𝟎 𝐌𝐗
⭐ 𝟓𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟓𝟎 𝐌𝐗
⭐ 𝟔𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟔𝟎 𝐌𝐗
⭐ 𝟕𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟕𝟎 𝐌𝐗
⭐ 𝟖𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟖𝟎 𝐌𝐗
⭐ 𝟗𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟗𝟎 𝐌𝐗
⭐ 𝟏𝟎𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟏𝟎𝟎 𝐌𝐗
⭐ 𝟏𝟎𝟎𝐊 𝐋𝐈𝐊𝐄𝐒 - 𝟒𝟎𝟎 𝐌𝐗

⭐ @𝐋𝐀𝐑𝐈𝐎𝐒.𝐏𝐒𝐃 ⭐`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
