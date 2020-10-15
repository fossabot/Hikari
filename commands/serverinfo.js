const Discord = require("discord.js");

module.exports = {
    name: '서버',
    aliases: [
        '서버정보'
        ],
    async execute(message){
        const serverinfo = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}`)
        .setThumbnail(`${message.guild.iconURL({ format: 'png', size: 2048, dynamic: true })}`)
        .addField(`ID`, message.guild.id)
        .addField(`지역`, message.guild.region)
        .addField(`주인`, `${message.guild.owner.user}`)
        .addField(`멤버`, `${message.guild.memberCount}명`, true)
        .addField(`유저`, `${message.guild.members.cache.filter(member => !member.user.bot).size}명`)
        .addField(`<:online:720821312251101227> 온라인`, `${message.guild.members.cache.filter(user => user.presence.status === 'online' || user.presence.status === 'idle' || user.presence.status === 'dnd').size}명`, true)
        .addField(`<:idle:720821264117137518> 오프라인`, `${message.guild.members.cache.filter(user => user.presence.status === 'offline').size}명`, true)
        .addField(`생성 날짜`, `${message.guild.createdAt}`)
        .addField(`부스트 수`, `${message.guild.premiumSubscriptionCount}`)
        .setFooter("Hikari ♬", "https://cdn.discordapp.com/icons/719467676816113695/d9df767c7cbc9829510dc4d50f88e05d.png")
        .setColor("RANDOM")
        message.channel.send(serverinfo);
    }

}