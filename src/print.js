function printOwing (invoice) {
  let outstanding = 0;
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  console.log(`***********************
  **** Customer Owes ****
  ***********************
  name: ${invoice.customer}
  amount: ${outstanding}
  amount: ${invoice.dueDate.toLocaleDateString()}`)
}
