const express = require('express');
const fetch = require('node-fetch');
const config = require('../../../config/default')
const {getSubjects} = require('./subjectsGQL');

const router = express.Router();

router.get('/:code',  (req, res) => {
    fetch(config.strapi.baseUrl, {
        headers: config.strapi.headers,
        method: config.strapi.method,
        body: JSON.stringify({        // very Imp : Always give body like this else you will run into exceptions
            query: getSubjects,
            variables: {code: req.params.code}
        })
    })
        .then(result => {
            return result.json();
        })
        .then(data => {
            res.send(data);
        });
});

module.exports = router;