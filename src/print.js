const calOutstanding = (borderSpacing) => {
  let outstanding = 0
  for (const o of borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding
}

function printOwing (invoice) {
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  console.log(`***********************
  **** Customer Owes ****
  ***********************
  name: ${invoice.customer}
  amount: ${calOutstanding(invoice.borderSpacing)}
  amount: ${invoice.dueDate.toLocaleDateString()}`)
}


