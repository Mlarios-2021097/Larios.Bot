import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: '𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾',
      body: '⭐ @𝐋𝐀𝐑𝐈𝐎𝐒.𝐏𝐒𝐃 ⭐',
      previewType: 0, thumbnail: fs.readFileSync('./Larios.PNG'),
      sourceUrl: `https://github.com/Mlarios-2021097/Larios.Bot`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
