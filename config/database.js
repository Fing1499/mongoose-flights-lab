const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`CONNECTED TO MONGODB ${db.name} AT ${db.host}:${db.port}`)
});