const { Post } = require('../models');

const postData = [{
        title: 'This is a post.',
        content: 'There is text in this post.',
        user_id: 1

    },
    {
        title: 'This is also a post.',
        content: 'Look I dislike using the Lorem Ipsum script okay?',
        user_id: 2
    },
    {
        title: 'A third post.',
        content: 'I would rather display content I can read.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;