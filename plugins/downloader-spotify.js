/* Creditos de los tags a @darlyn1234 y diseño a @ALBERTO9883 */
import fetch from 'node-fetch';
import Spotify from 'spotifydl-x';
import fs from 'fs';
import NodeID3 from 'node-id3';
import axios from 'axios';
import {find_lyrics} from '@brandond/findthelyrics';

const credentials = {
  clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
  clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
};
const spotify = new Spotify.default(credentials);

const handler = async (m, { conn, text }) => {
 if (!text) throw `*[❗] Ingrese el nombre de alguna canción de spotify.*`;
  try {
    const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
    const jsonDL = await resDL.json();
    const linkDL = jsonDL.result[0].link;
    const spty = await spotifydl(linkDL);
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    const randomName = getRandom('.mp3');
    const filePath = `./tmp/${randomName}`;
    const artist = spty.data.artists.join(', ') || '-';
    const img = await (await fetch(`${spty.data.cover_url}`)).buffer()  
    const letra_s = await find_lyrics(spty.data.name ? spty.data.name : '');
    let letra;
    letra = `${letra_s ? letra_s + '\n\n🤴🏻 Descarga por BrunoSobrino & TheMystic-Bot-MD 🤖' : '🤴🏻 Descarga por BrunoSobrino & TheMystic-Bot-MD 🤖'}`  
    const tags = {
      title: spty.data.name || '-',
      artist: artist,
      album: spty.data.album_name || '-',
      year: spty.data.release_date || '-',
      genre: 'Música',
      comment: {
        language: 'spa',
        text: letra,
      },
      unsynchronisedLyrics: {
        language: 'spa',
        text: letra,
      },
      image: {
        mime: 'image/jpeg',
        type: {
          id: 3,
          name: 'front cover',
        },
        description: 'Spotify Thumbnail',
        imageBuffer: await axios.get(spty.data.cover_url, {responseType: "arraybuffer"}).then((response) => Buffer.from(response.data, "binary")),
      },
      mimetype: 'image/jpeg',
      copyright: 'Copyright Darlyn ©2023',
    };
    await fs.promises.writeFile(filePath, spty.audio);
    await NodeID3.write(tags, filePath);
    let spotifyi = `* 💽 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 *\n\n`
         spotifyi += `	◦  *𝐓𝐈𝐓𝐔𝐋𝐎:* ${spty.data.name}\n`
         spotifyi += `	◦  *𝐀𝐑𝐓𝐈𝐒𝐓𝐀:* ${spty.data.artists}\n`
         spotifyi += `	◦  *𝐀𝐋𝐁𝐔𝐌:* ${spty.data.album_name}\n`                 
         spotifyi += `	◦  *𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎:* ${spty.data.release_date}\n\n`   
         spotifyi += `𝐄𝐋 𝐀𝐔𝐃𝐈𝐎 𝐒𝐄 𝐄𝐒𝐓𝐀 𝐄𝐍𝐕𝐈𝐀𝐍𝐃𝐎, 𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎!`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '*[❗] Error, no se encontraron resultados.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;

async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await spotify.getTrack(url);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Tiempo de espera agotado'));
        }, 300000);
      });
      const audioPromise = spotify.downloadTrack(url);
      const audio = await Promise.race([audioPromise, timeoutPromise]);
      resolve({ data: res, audio });
    } catch (error) {
      reject(error);
    }
  });
}
