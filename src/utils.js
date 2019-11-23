export function getRandom(min, max) {
	return Math.floor(Math.random()*(max + 1 - min) + min); // 提供一个[min, max]的一个随机数
}