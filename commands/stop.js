const Discord = require("discord.js");
module.exports = {
    name: '멈춰',
    aliases: [
        '정지'
        ],

    async execute(message){
        const VoiceChannel = message.member.voice.channel;
        if (!VoiceChannel) {
            return message.reply('먼저 보이스 채널에 들어가셔야 해요!')
        }
        const connection = await VoiceChannel.join();
        connection.dispatcher.end();
        message.channel.send("⏹ 노래가 멈췄어요!");
        VoiceChannel.leave()
        }
    }


