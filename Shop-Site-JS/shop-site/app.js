// ========== Shop-Site Application Logic ==========
// NOTE TO STUDENTS:
// You must implement ALL the functions below.
// The HTML, CSS, and products.js files are already provided.
// DO NOT modify those files — only edit this file (app.js).

// ========== Navigation ==========

/**
 * goToProducts(category)
 * ----------------------
 * Redirect user to products.html with the selected category.
 * Example: products.html?category=Fruits
 */
function goToProducts(category) {
  // TODO: Implement redirection logic
  const encodedCategory=encodeURIComponent(category);
  console.log(encodedCategory);
  window.location.href=`products.html?category=${category}`

}

// ========== Rendering Products ==========

/**
 * renderProducts(list)
 * --------------------
 * Display all products in the given list as cards inside #product-list.
 * Each card should contain:
 *  - Product image
 *  - Product name
 *  - Product brand
 *  - Product cost
 *  - "Add to Cart" button (button should call addToCart(index))
 */
function renderProducts(list) {
  // TODO: Implement product rendering
  const productList=document.getElementById("product-list")
  productList.innerHTML="";
  if(!list || list.length==0){
    productList.innerHTML=`<p>No products found</p>`;
    return;
  }
  list.forEach((product,i)=>{
    const div=document.createElement("div");
    div.className="item";
    div.innerHTML=`<img src=${product.image} alt=${product.name}>
    <h3 class="product-name">${product.name}</h3>
    <p class="product-category">${product.category}</p>
    <p class="product-cost">${product.cost}</p>
    <button class="add-to-cart"onclick=addToCart(${i})>Add To Cart</button>
    
    `;
    productList.append(div);
  })
  console.log(list);

}

// ========== Sorting ==========

/**
 * sortProducts()
 * --------------
 * Sort the current product list based on the selected option:
 *  - Name (A-Z)
 *  - Price (Low to High)
 *  - Price (High to Low)
 * Then re-render the products.
 */
function sortProducts() {
  // TODO: Implement sorting
  const sortValue=document.getElementById("sort-select").value;
  console.log(sortValue)
  if(sortValue=="name"){
  filteredByCategory.sort((a,b)=>a.name.localeCompare(b.name));
  }
  else if(sortValue=="price-asc"){
    filteredByCategory.sort((a,b)=>a.cost-b.cost);
  }
  else if(sortValue=="price-desc"){
    filteredByCategory.sort((a,b)=>b.cost-a.cost);
  }
  renderProducts(filteredByCategory)
}

// ========== Filtering ==========

/**
 * filterProducts()
 * ----------------
 * Filter the product list by brand based on the dropdown value (#filter-select).
 * If "all" is selected, show all products for the current category.
 * Otherwise, show only products of the chosen brand.
 */
function filterProducts() {
  // TODO: Implement filtering
  const filterValue=document.getElementById("filter-select").value;
  console.log(filterValue);
  if(filterValue=="all"){
    filteredByCategory=products.filter(p=>p.category===category);
  }
  else{
    filteredByCategory=products.filter(p=>p.category==category && p.brand===filterValue);
  }
  renderProducts(filteredByCategory);

}

// ========== Cart Management ==========

let cart = [];

/**
 * addToCart(index)
 * ----------------
 * Add the product at the given index (from filteredByCategory) to the cart.
 * If the product is already in the cart, increase its quantity.
 * Otherwise, add it with quantity = 1.
 */
function addToCart(index) {
  // TODO: Implement add-to-cart logic
  // HINT: Use cart.find() to check if the item exists
  const product=filteredByCategory[index];
  console.log("inside",product);
  const existingItem=cart.find(item=>item.name==product.name);
  if(existingItem){
    existingItem.quantity++;
  }
  else{
    cart.push({...product,quantity:1});
  }
  renderCart();
}

/**
 * renderCart()
 * ------------
 * Render the cart table inside #cart-items.
 * Each row should show:
 *  - Product image
 *  - Product name
 *  - Product brand
 *  - Product cost
 *  - Quantity
 *  - Total (cost × quantity)
 */
function renderCart() {
  console.log(cart);
  const cartItems=document.getElementById("cart-items");
  cartItems.innerHTML="";
  cart.forEach((item,i)=>{
    const row=document.createElement("tr");
    row.innerHTML=`<td><img src=${item.image} alt=${item.name} class="cart-img"></td>
    <td>${item.name}</td>
    <td>${item.brand}</td>
    <td>${item.cost}</td>
    <td>${item.quantity}
    <button onclick=increment(${i})>+</button>
    <button onclick=decrement(${i})>-</button>
    </td>
    <td>$${item.cost*item.quantity}</td>

`
cartItems.appendChild(row);
  })

  // TODO: Implement cart rendering
}
function increment(i){
  cart[i].quantity++;
  renderCart();
}
function decrement(i){
  cart[i].quantity--;
  if(cart[i].quantity==0){
    cart.splice(i,i+1);
  }
  renderCart();
}

// ========== Initialization ==========

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

let filteredByCategory = [];

/**
 * On page load:
 *  - If a category is selected (from URL), set the page title
 *  - Load products of that category into filteredByCategory
 *  - Render them using renderProducts()
 */
// window.addEventListener('DOMContentLoaded',()=>{
  
// })
if (category) {
    document.getElementById("category-title").textContent=category;
    filteredByCategory=products.filter(p=>p.category===category);
    console.log(filteredByCategory);
    renderProducts(filteredByCategory);

  // TODO: Implement initial category setup
}
