module.exports = {
    name: '시발',
    aliases: [
        'ㅅㅂ'
        ],

    async execute(message){
        message.send('풉ㅋ');
        message.delete({ timeout: 20000 })
        }
    }