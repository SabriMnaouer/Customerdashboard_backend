const express = require("express");
const router = express.Router();

let customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    contactNumber: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    contactNumber: "987-654-3210",
  },
];

function getCustomers() {
  return customers;
}

function addCustomer(newCustomer) {
  newCustomer.id = customers.length + 1;
  customers.push(newCustomer);
  return newCustomer;
}

function updateCustomer(updatedCustomer) {
  customers = customers.map((customer) =>
    customer.id === updatedCustomer.id ? updatedCustomer : customer
  );
  return updatedCustomer;
}

function deleteCustomer(customerId) {
  customers = customers.filter((customer) => customer.id !== customerId);
  return { success: true };
}

// Get all customers
router.get("/customers", (req, res) => {
  res.json(getCustomers());
});

// Add a new customer
router.post("/customers", (req, res) => {
  const newCustomer = req.body;
  res.json(addCustomer(newCustomer));
});

// Update a customer
router.put("/customers/:id", (req, res) => {
  const updatedCustomer = req.body;
  res.json(updateCustomer(updatedCustomer));
});

// Delete a customer
router.delete("/customers/:id", (req, res) => {
  const customerId = parseInt(req.params.id);
  res.json(deleteCustomer(customerId));
});

module.exports = router;
