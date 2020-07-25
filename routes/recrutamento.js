const express = require('express')
const router = express.Router()

    // PAGINA INICIAL DO SITE
    router.get("/", (req, res) => {
        res.render('recrutamento')
    })

      module.exports = router
      