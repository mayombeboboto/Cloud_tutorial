const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
<<<<<<< HEAD
  host: 'redis-server',
  port: 6379
=======
  host: 'redis-server' // This points to the redis-server defined in docker-compose
>>>>>>> 6df5b592273053968c7d75e1b0e4522b19214d75
});
client.set('visits', 0); 

app.get('/', (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
