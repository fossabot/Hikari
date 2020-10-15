module.exports = {
	name: '지워',
	description: '메시지를 없에줘요',

	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('메시지 지우는건 1부터 99까지에요.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('메시지 지우는건 1부터 99까지에요.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send("메시지를 지우는데 문제가 생겼어요! 아마 권한 문제거나 너무 오래된 메시지라서 안될수도 있어요.");
        })
        {	
			message.delete({ timeout: 20000 })
            message.channel.send("메시지를 지웠습니다!").then(msg => {
                msg.delete({ timeout: 5000 })
              })
        }
	}
}