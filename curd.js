let customers = [];
let deleteIndex = null;

function openForm() {
  document.getElementById("formModal").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("formModal").classList.add("hidden");
}

function addCustomer() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!first) return;

  customers.push({ first, last, email, phone });

  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  closeForm();
  renderCustomers();
}

function renderCustomers() {
  const list = document.getElementById("customerList");
  const search = document.querySelector(".search").value.toLowerCase();

  list.innerHTML = "";

  customers
    .filter(c => c.first.toLowerCase().includes(search))
    .forEach((c, i) => {
      list.innerHTML += `
        <div class="card">
          <h4>${c.first} ${c.last}</h4>
          <p>${c.email}</p>
          <p>${c.phone}</p>
          <div class="actions">
            <button onclick="openDelete(${i})">🗑</button>
          </div>
        </div>
      `;
    });
}

function openDelete(index) {
  deleteIndex = index;
  document.getElementById("deleteModal").classList.remove("hidden");
}

function closeDelete() {
  deleteIndex = null;
  document.getElementById("deleteModal").classList.add("hidden");
}

function confirmDelete() {
  if (deleteIndex !== null) {
    customers.splice(deleteIndex, 1);
    closeDelete();
    renderCustomers();
  }
}