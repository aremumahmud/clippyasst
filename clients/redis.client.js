const redis = require('ioredis')

const redisClient = redis.createClient(process.env.REDISCLIENT || null);

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});


redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});


module.exports = redisClient