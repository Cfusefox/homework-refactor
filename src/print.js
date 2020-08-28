const calOutstanding = (borderSpacing) => {
  let outstanding = 0
  for (const o of borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding
}

const recodeDueDate = () => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString();
}

function printOwing (invoice) {
  return `***********************
  **** Customer Owes ****
  ***********************
  name: ${invoice.customer}
  amount: ${calOutstanding(invoice.borderSpacing)}
  amount: ${recodeDueDate()}`
}

module.exports = {
  printOwing,
  recodeDueDate
}


