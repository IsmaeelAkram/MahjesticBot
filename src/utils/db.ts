import redis from 'redis';

var client = redis.createClient({
	host: process.env.REDIS_HOST,
	port: Number(process.env.REDIS_PORT),
});
