let allCustomers = []; 

function loadCustomer() {
  fetch("http://localhost:8080/customer/get-all")
    .then((res) => res.json())
    .then((data) => {
      allCustomers = data; 
      renderTable(data); 

      //  search bar
      const searchBar = document.getElementById("searchBar");
      searchBar.addEventListener("input", handleSearch);
    });
}

function renderTable(data) {
  let tablerows = `
    <caption>Customers</caption>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Salary</th>
    </tr>
  `;

  data.forEach((customer) => {
    tablerows += `
      <tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.salary}</td>
      </tr>
    `;
  });

  const customerTable = document.getElementById("tblCustomers");
  customerTable.innerHTML = tablerows;
}

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestions");

  if (searchTerm === "") {
    suggestionsContainer.innerHTML = "";
    renderTable(allCustomers); 
    return;
  }

  // Filter data
  const filteredCustomers = allCustomers.filter(
    (customer) =>
      customer.id.toString().includes(searchTerm) ||
      customer.name.toLowerCase().includes(searchTerm)
  );

  // Display data
  suggestionsContainer.innerHTML = filteredCustomers
    .map(
      (customer) => `
      <div class="list-group-item">
        ${customer.id} - ${customer.name}
      </div>
    `
    )
    .join("");


  renderTable(filteredCustomers);
}

loadCustomer();