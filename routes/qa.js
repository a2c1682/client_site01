const express = require('express'),
	router = express.Router();

router.get('/', (req, res, next) => {
	var data = {
		title: 'Q&A',
		content: 'よくあるご質問'
	};
	res.render('qa', data);
});

module.exports = router;
