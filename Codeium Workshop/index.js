var listPro = [
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
    tenSP: "Saddle Backpack",
    motaSP: "Black Dior Oblique Jacquard and Black Grained Calfskin",
    giaSP: "3200",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp",
    tenSP: "Rider Backpack",
    motaSP: "Rider Backpack - Khaki Dior Oblique Jacquard",
    giaSP: "2600",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp",
    tenSP: "Safari Backpack",
    motaSP: "Safari Backpack - Beige and Black Dior Oblique Jacquard",
    giaSP: "2600",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp",
    tenSP: "Dior Buffalo Lace-Up Boot",
    motaSP: "Black Smooth Calfskin Debossed with Dior Oblique Motif",
    giaSP: "1500",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp",
    tenSP: "Dior Explorer Chelsea Boot",
    motaSP: "Black Smooth Calfskin and Dior Oblique Motif",
    giaSP: "1200",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp",
    tenSP: "Dior Evidence Ankle Boot",
    motaSP: "Dior Evidence Ankle Boot - Black Smooth Calfskin",
    giaSP: "2150",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp",
    tenSP: "CD Diamond Ring",
    motaSP: "CD Diamond Ring - Antique-Finish Silver",
    giaSP: "350",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
    tenSP: "CD Icon Thin Chain Link Bracelet",
    motaSP: "CD Icon Thin Chain Link Bracelet - Silver",
    giaSP: "620",
  },
  {
    anh: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp",
    tenSP: "CD Icon Thin Chain Link Necklace",
    motaSP: "CD Icon Thin Chain Link Necklace - Silver",
    giaSP: "880",
  },
];
var dem = 0;
for (let i = 0; i < listPro.length; i++) {
  if (dem % 3 == 0) {
    var row = document.createElement("div");
    row.classList.add("row");
    document.getElementById("product-list").appendChild(row);
  }
  var cot = document.createElement("div");
  row.style.padding = "30px 0";
  cot.classList.add("col-lg-4");
  var theSP = document.createElement("div");
  theSP.classList.add("card");
  theSP.style = "width : 22rem";
  var anhSP = document.createElement("img");
  anhSP.src = listPro[i].anh;
  row.appendChild(cot);
  cot.appendChild(theSP);
  theSP.appendChild(anhSP);
  var thanSP = document.createElement("div");
  thanSP.classList.add("card-body");
  thanSP.style = "text-align : center";
  theSP.appendChild(thanSP);
  var tenSP = document.createElement("h5");
  tenSP.classList.add("card-title");
  tenSP.innerHTML = listPro[i].tenSP;
  thanSP.appendChild(tenSP);
  var motaSP = document.createElement("p");
  motaSP.classList.add("card-text");
  motaSP.innerHTML = listPro[i].motaSP;
  thanSP.appendChild(motaSP);
  var giaSP = document.createElement("h5");
  giaSP.innerHTML = "$" + listPro[i].giaSP;
  var nutthem = document.createElement("button");
  nutthem.classList.add("btn");
  nutthem.classList.add("btn-primary");
  nutthem.innerHTML = "ADD TO CART";
  thanSP.appendChild(giaSP);
  thanSP.appendChild(nutthem);
  dem++;
}

// Lọc sản phẩm :
// Bước 1 : Xóa toàn bộ sản phẩm đang được hiển thị
// Bước 2 :Tạo ra một mảng sản phẩm mới và những sản phẩm trong mảng này sẽ thỏa mãn mức giá mà khách hàng tìm
// Bước 3 : Render ra sản phẩm dựa vào mảng trên
function locGia() {
  var canXoa = document.getElementById("product-list").childNodes;
  var xoa = canXoa.length;
  for (let i = 0; i < xoa; i++) {
    canXoa[0].remove();
  }
  var arrLoc = [];
  for (let i = 0; i < listPro.length; i++) {
    console.log(Number(listPro[i].giaSP));
    console.log(Number(document.getElementById("locGia1").value));
    console.log(Number(document.getElementById("locGia2").value));
    if (
      Number(listPro[i].giaSP) >=
        Number(document.getElementById("locGia1").value) &&
      Number(listPro[i].giaSP) <=
        Number(document.getElementById("locGia2").value)
    ) {
      arrLoc.push(listPro[i]);
      alert("hi");
    }
  }
  console.log(arrLoc);
  var dem = 0;
  for (let i = 0; i < arrLoc.length; i++) {
    if (dem % 3 == 0) {
      var row = document.createElement("div");
      row.classList.add("row");
      document.getElementById("product-list").appendChild(row);
    }
    var cot = document.createElement("div");
    row.style.padding = "30px 0";
    cot.classList.add("col-lg-4");
    var theSP = document.createElement("div");
    theSP.classList.add("card");
    theSP.style = "width : 22rem";
    var anhSP = document.createElement("img");
    anhSP.src = arrLoc[i].anh;
    row.appendChild(cot);
    cot.appendChild(theSP);
    theSP.appendChild(anhSP);
    var thanSP = document.createElement("div");
    thanSP.classList.add("card-body");
    theSP.appendChild(thanSP);
    var tenSP = document.createElement("h5");
    tenSP.classList.add("card-title");
    tenSP.innerHTML = arrLoc[i].tenSP;
    thanSP.appendChild(tenSP);
    var motaSP = document.createElement("p");
    motaSP.classList.add("card-text");
    motaSP.innerHTML = arrLoc[i].motaSP;
    thanSP.appendChild(motaSP);
    var giaSP = document.createElement("h5");
    giaSP.innerHTML = "$" + arrLoc[i].giaSP;
    var nutthem = document.createElement("button");
    nutthem.classList.add("btn");
    nutthem.classList.add("btn-primary");
    nutthem.innerHTML = "ADD TO CART";
    thanSP.appendChild(giaSP);
    thanSP.appendChild(nutthem);
    dem++;
  }
}
function locTen() {}
