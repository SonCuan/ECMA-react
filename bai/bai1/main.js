console.log("Djtt mE y5 (main.js)");
const myInfor = {
  name: "Nguyen Son Quan",
  age: 20,
  email: "quannsph45143@fpt.edu.vn",
  gender: "Nam",
  address: "Ha Noi",
  company: "FPT Polytechnic",
};

// ! Template string
const content = `
  <h2>Name: ${myInfor.name}</h2>
  <p>Age: ${myInfor.age}</p>
  <p>Email: ${myInfor.email} </p>
  <p>Company: ${myInfor.company}</p>
  <p>Gender: ${myInfor.gender}</p>
  <p>Address: ${myInfor.address}</p>
`;

// ! Cach 1:
const inforElement = document.getElementById("student");
// inforElement.innerHTML = content;

// ! Cach 2:
const inforElement2 = document.createElement("div");
// inforElement2.innerHTML = content;
// document.body.style.color = "white"; chuyển màu chữ
// document.body.style.background = "black";


// Cach 3:
const showButton = document.getElementById("btnShow");
function show(){
    const inforElement = document.getElementById("student");
    inforElement.innerHTML = content;

}
showButton.addEventListener("click", show);
