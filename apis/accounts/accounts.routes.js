const express = require("express")
const router = express.Router()
const {
    gettAllAccounts,
    AddnewAccount,
    deleteOneAccount,
    updateOneAccount,
} = require("./accounts.controllers")


router.get("/", gettAllAccounts)
router.post("/", AddnewAccount)
router.delete("/:accountId", deleteOneAccount)
router.put("/:accountId", updateOneAccount)


module.exports = router