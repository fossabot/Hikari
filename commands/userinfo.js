const Discord = require("discord.js");

module.exports = {
    name: '유저',
    aliases: [
        '유저정보'
        ],
    async execute(message){
        const platforms = {
            web: "웹",
            mobile: "모바일",
            desktop: "PC"
        };
        const clientStatus = platforms[Object.keys(message.author.presence.clientStatus)[0]];
        const serverinfo = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}(${message.author.tag})`)
        .setThumbnail(`${message.author.displayAvatarURL({ format: 'png', size: 2048, dynamic: true })}`)
        .addField(`ID`, message.guild.id)
        .addField(`상태`, message.author.presence.status, true)
        .addField(`기기`, clientStatus)
        .addField(`봇?`, message.author.bot)
        .addField(`가입일`, message.author.createdAt)
        .setFooter("Hikari ♬", "https://cdn.discordapp.com/icons/719467676816113695/d9df767c7cbc9829510dc4d50f88e05d.png")
        .setColor("RANDOM")
        message.channel.send(serverinfo);
    }

}