let products = [];
const form = document.getElementById("productForm");
const productTable = document.getElementById("productTable");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    products.push({ name, price });
    form.reset();
    renderProduct();
})

function renderProduct() {
    productTable.innerHTML = "";
    products.forEach((products, index) => {
        productTable.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${products.name}</td>
        <td>${products.price}</td>
        <td>
        <button onclick="deleteProduct(${index})">Delete</button>
        <button onclick="editProduct(${index})">Edit</button>
        </td>
        </tr>
        `;
    })
}
function deleteProduct(index) {
    products.splice(index, 1);
    renderProduct()
}
function editProduct(index) {
    const product = products[index]
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    deleteProduct(index);
}
