const { User } = require('../models');

const userData = [{
        username: 'smoroney',
        password: 'password'

    },
    {
        username: 'coliwack',
        password: 'Lifewillbegood-1'
    },
    {
        username: 'Jeff',
        password: 'mynamejeff'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers;