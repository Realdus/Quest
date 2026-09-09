import { GatewayDispatchEvents } from 'discord-api-types/v10';
import { Client } from './src/client';
import { Utils } from './src/utils';

let currentUserId: string | null = null;

const client = new Client(process.env.TOKEN!);

/*
client.on(
	GatewayDispatchEvents.MessageCreate,
	async ({ data: message, api }) => {
console.log('ได้รับข้อความ:', message.content);
		if (message.content === 'ping' && message.author.id === currentUserId) {
			await api.channels.createMessage(message.channel_id, {
content: 'ปอง',
			});
		}
	},
);
*/

client.once(GatewayDispatchEvents.Ready, async ({ data, api }) => {
	currentUserId = data.user.id;
	if (process.env.GITHUB_ACTIONS === 'true') {
console.log('เข้าสู่ระบบแล้ว!');
	} else {
console.log(`เข้าสู่ระบบในชื่อ @${data.user.username}`);
	}

	await client.fetchQuests(false);
	const questsValid = client.questManager!.filterQuestsValidToDo();
console.log(`พบเควสต์ที่ทำได้ ${questsValid.length} รายการ`);
	await Promise.allSettled(
		questsValid.map((quest) => client.questManager!.doingQuest(quest)),
	);

// ! แลกรางวัลสำหรับเควสต์ที่ทำสำเร็จ
// TODO: แคชข้อมูลเควสต์
	/*
	await client.fetchQuests(false);
	const questsToRedeem = client.questManager!.filterQuestsValidToRedeem();
console.log(`พบเควสต์ที่สามารถแลกรางวัลได้ ${questsToRedeem.length} รายการ`);
	for (const quest of questsToRedeem) {
		await client.questManager!.redeemQuest(quest);
	}
	*/
// ตัดการเชื่อมต่อ
console.log('ประมวลผลเควสต์ทั้งหมดแล้ว กำลังตัดการเชื่อมต่อ...');
	await client.destroy();
});

process.on('unhandledRejection', (reason, promise) => {
console.error('[ข้อผิดพลาด:] Promise rejection ที่ไม่ได้จัดการ');
});

process.on('uncaughtException', (error) => {
console.error('เกิดข้อยกเว้นที่ไม่ได้ดักจับ:', error.message);
});

client.connect();
