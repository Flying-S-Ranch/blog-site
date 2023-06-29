const router = require('express').Router();
const { Blog, Comment } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include: [
                {
                    model: Blog,
                    attributes: ['blog_title', 'date_created']
                },
            ],
        })
        res.status(200).json(dbBlogData)
        // const blogHome = dbBlogData.map((blog) =>
        //   blog.get({ plain: true })
        // )
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;