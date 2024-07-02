var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var productimage = document.getElementById("productimage");
var searchInput = document.getElementById("searchInput");
var addbtn = document.getElementById("addbtn");
var upbtn = document.getElementById("upbtn");

// console.log(productName,productPrice,productCat,productDesc,productimage);

var products = [];

if (localStorage.getItem("procont") !== null) {
  products = JSON.parse(localStorage.getItem("procont"));
  displayData();
}

function data() {
  // console.log( `images/${productimage.files[0].name}`);
  var product = {
    name: productName.value,
    price: productPrice.value,
    cat: productCat.value,
    disc: productDesc.value,
    img: productimage.files[0]?.name
      ? `images/${productimage.files[0]?.name}`
      : "images/1.jpg",
  };
  products.push(product);

  localStorage.setItem("procont", JSON.stringify(products));
  console.log(products);
  displayData();
  clear();
}

function displayData() {
  var cartona = "";
  for (var i = 0; i < products.length; i++) {
    cartona += `

  <div class=" col-lg-3 col-md-6 col-sm-12 ">
      
        <div class="card" >
          <img src="${products[i].img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5> Name : <span  class="fs-6">${products[i].name}</span></h5>
            <h5> Price : <span  class="fs-6">${products[i].price}</h5>
            <h5> Cat : <span  class="fs-6">${products[i].cat}</h5>
            <h5> des : <span  class="fs-6">${products[i].disc}</h5>
            <button onclick="setUPdate(${i})"  class="btn btn-pro w-100 my-2">Update</button>
            <button onclick=" deletProduct(${i})"  class="btn btn-pro w-100 my-2">Delete</button>
          </div>
        </div>
      
      
      </div>


`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

function clear() {
  productName.value = null;
  productPrice.value = null;
  productCat.value = null;
  productDesc.value = null;
  productimage.value = null;
}

function deletProduct(deletedIndex) {
  products.splice(deletedIndex, 1);

  localStorage.setItem("procont", JSON.stringify(products));
  console.log(products);
  displayData();
}

function searchProduct() {
  var term = searchInput.value;

  var cartona = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `

  <div class=" col-lg-3 col-md-6 col-sm-12 ">
      
        <div class="card" >
          <img src="images/1.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5> Name : <span  class="fs-6">${products[i].name}</span></h5>
            <h5> Price : <span  class="fs-6">${products[i].price}</h5>
            <h5> Cat : <span  class="fs-6">${products[i].cat}</h5>
            <h5> des : <span  class="fs-6">${products[i].disc}</h5>
            <button onclick="setUPdate(${i})"  class="btn btn-pro w-100 my-2">Update</button>
            <button onclick=" deletProduct(${i})"  class="btn btn-pro w-100 my-2">Delete</button>
          </div>
        </div>
      
      
      </div>


`;
    }
  }
  document.getElementById("rowData").innerHTML = cartona;
}
var updatedIndex;
function setUPdate(i) {
  updatedIndex = i;
  addbtn.classList.add("d-none");
  upbtn.classList.remove("d-none");

  productName.value = products[i].name;
  productPrice.value = products[i].price;
  productCat.value = products[i].cat;
  productDesc.value = products[i].disc;
}

function updateProduct() {
  addbtn.classList.remove("d-none");
  upbtn.classList.add("d-none");
  products[updatedIndex].name = productName.value;
  products[updatedIndex].price = productPrice.value;
  products[updatedIndex].cat = productCat.value;
  products[updatedIndex].disc = productDesc.value;

  localStorage.setItem("procont", JSON.stringify(products));
  console.log(products);
  displayData();

  clear();
}
