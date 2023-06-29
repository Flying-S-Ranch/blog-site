const { Blog } = require('../models');

const blogData = [
    {
        blog_title: 'IT Dept',
        date_created: 'June 27, 2023',
        blog_content: 'Have you tried turning it off and on again?',
    },
    {
        blog_title: 'Tetris',
        date_created: 'June 27, 2023',
        blog_content: 'Tetris is a great game for the following reasons...',
    },
    {
        blog_title: 'CSS Frameworks',
        date_created: 'June 27, 2023',
        blog_content: 'Bootstrap will make your life easier, promise',
    },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog