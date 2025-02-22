addCustomer();

function addCustomer() {
  let name = document.getElementById("txtname").value;
  let address = document.getElementById("txtAddress").value;
  let salary = document.getElementById("txtSalary").value;

  console.log(name, address, salary);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: name,
    address: address,
    salary: salary,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
