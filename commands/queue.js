module.exports = {
    name: '리스트',
    description: '현재 듣고있는 노래를 보여줘요.',

    async execute(message){
        const ytdl = require('ytdl-core-discord');
        ytdl(args[2])
    }
}