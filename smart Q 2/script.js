let cart = [];
let totalAmount = 0;

// LOGIN
function login() {
  const id = document.getElementById("studentId").value;
  if (!id) {
    alert("Enter Student ID");
    return;
  }
  localStorage.setItem("studentId", id);
  window.location.href = "app.html";
}

// LOAD STUDENT
if (document.getElementById("displayStudent")) {
  document.getElementById("displayStudent").innerText =
    "ID: " + localStorage.getItem("studentId");
}

// NAVIGATION
function showSection(section) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(section).classList.remove("hidden");
}

// CART
function addToCart(item, price) {
  cart.push({ item, price });
  totalAmount += price;
  alert(item + " added to cart");
}

function confirmOrder() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  cart.forEach(c => {
    const li = document.createElement("li");
    li.innerText = c.item + " - ₹" + c.price;
    list.appendChild(li);
  });
  document.getElementById("total").innerText = "Total: ₹" + totalAmount;
  showSection("status");
  document.getElementById("orderStatus").innerText = "Order Confirmed. Preparing...";
}

// RFID SIMULATION
function simulateRFID() {
  document.getElementById("orderStatus").innerText =
    "Payment Successful via RFID. Order Ready!";
}

// NAV LINKS
function goCanteen() {
  window.location.href = "canteen.html";
}

function goStudent() {
  window.location.href = "app.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
