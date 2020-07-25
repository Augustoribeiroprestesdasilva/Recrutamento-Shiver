// caregando modulos da pagina principal
const express = require('express')
const router = express.Router()

    // PAGINA INICIAL DO SITE
    router.get("/", (req, res) => {
        res.render('home')
    })

      module.exports = router