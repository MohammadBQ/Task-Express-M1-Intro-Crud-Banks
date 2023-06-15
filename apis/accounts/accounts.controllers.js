let accounts = require("../../accounts")
const gettAllAccounts =  (req, res) => {
    return res.status(200).json(accounts);
  };

  const AddnewAccount = (req, res) => {const newId = accounts[accounts.length - 1].id + 1;
  console.log();
  let newAccount = { id: newId, ...req.body, funds: 0 };
  accounts.push(newAccount);
  return res.status(201).json(accounts);
};


const deleteOneAccount = (req, res) => {
    const { accountId } = req.params;
    const foundAccount = accounts.find((account) => account.id === +accountId);
    if (foundAccount) {
      accounts = accounts.filter((account) => account.id !== +foundAccount.id);
      return res.status(201).json(accounts);
    } else {
      return res.status(404).json({ message: "not found" });
    }
  }

  const updateOneAccount = (req, res) => {
    const { accountId } = req.params;
    const foundAccount = accounts.find((account) => account.id === +accountId);
    if (foundAccount) {
      const accountIndex = accounts.indexOf(foundAccount);
      accounts[accountIndex] = { id: foundAccount.id, ...req.body };
      return res.status(201).json(accounts);
    } else {
      return res.status(404).json({ message: "not found" });
    }
  }

  module.exports = {
    gettAllAccounts,
    AddnewAccount,
    deleteOneAccount,
    updateOneAccount,
  }