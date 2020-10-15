const { prefix } = require('../config.json');
module.exports = {
    name: '노래',
    aliases: [
        '재생'
        ],

    async execute(message, args){
        const ytdl = require('ytdl-core-discord');
        const url = args[0];
        const VoiceChannel = message.member.voice.channel;
        if (!VoiceChannel) {
            return message.reply('먼저 보이스 채널에 들어가셔야 해요!')
        }
        if (!args.length) 
            return message.reply(`**\`${prefix}노래\`** \`유튜브 링크 | 노래 제목 | 사운드클라우드 링크\``).catch(console.error)
            
        const connection = await VoiceChannel.join();
        const dispatcher = connection.play(await ytdl(url), { type: 'opus', filter: 'highestaudio', highWaterMark: 1024 * 1024 * 10 });
        dispatcher.once('finish', () => VoiceChannel.leave());
    }
}