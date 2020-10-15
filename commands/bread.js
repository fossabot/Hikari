module.exports = {
    name: '식빵',

    async execute(message){
        message.react('🍞');
        message.react('723574676734869576');
        message.delete({ timeout: 20000 })
        }
    }