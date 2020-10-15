const Discord = require("discord.js");

module.exports = {
    name: '도와줘',
    aliases: [
        '도움'
        ],
    async execute(message){
        const embed = new Discord.MessageEmbed()
        .setTitle("Hikari 명령어")
        .setDescription("사용 가능한 명령어에요.")
        .setColor("RANDOM")
        .addField("*노래*", "▼", false)
        .addField("ㅑ노래", "를 틀어줘요.", true)
        .addField("ㅑ멈춰", "멈춰줘요.", true)
        .addField("ㅑ잠깐", "잠깐 멈춰줘요.", true)
        .addField("ㅑ다시", "다시 틀어줘요.", true)
        .addField("ㅑ넘겨", "넘겨줘요.", true)
        .addField("ㅑ반복", "반복재생을 해줘요.", true)
        .addField("ㅑ뭐야", "현재 듣고있는 노래를 보여줘요.", true)
        .addField("h!queue", "쌓여있는 노래를 보여줘요.", true)
        .addField("*유틸리티*", "▼", false)
        .addField("ㅑ도와줘", "명령어가 뭐가 있는지 도와줍니다", true)
        .addField("ㅑ서버", "여기 서버 정보를 보여줘요.", true)
        .addField("ㅑ유저", "유저 정보를 보여줘요.", true)
        message.channel.send(embed);
        }
    }