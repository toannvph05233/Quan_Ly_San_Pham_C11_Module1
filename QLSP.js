

let nyCong = new Product("Người yêu Công", "https://openseauserdata.com/files/7ca0a95534b6c0041c2dfb3445a67af4.jpg",500);
let nyLoc = new Product("Người yêu Lộc", "https://i.seadn.io/gae/08Opr1gynjrZwgma4Tc5y7E9yAznDomnJCdPMASrYt6twbpGH6IjO7KDU4U58SQYT_50Hd1lQOQNjIop3-FCCSKa68hOG6Rv0xEdWEA?auto=format&dpr=1&w=1000",1000);
let nyBinh = new Product("Người yêu Bình", "https://biztime.com.vn/upload/photos/2019/05/xtNWdVWaVDGDPuH7IN1n_31_c8c20cf5237587dd4a00ad1a72b494f8_image.jpg",600);

let products = [nyCong, nyLoc, nyBinh];

display();

function addProduct() {
    let name = prompt("input name")
    let img = prompt("input url image")
    let price = prompt("input price")
    let product = new Product(name,img,price);
    products.push(product);
    display();
}
function editProduct(index) {
    let name = prompt("input name")
    let img = prompt("input url image")
    let price = prompt("input price")
    let product = new Product(name,img,price);

    products[index] = product;

    display();
}


function deleteProduct(index) {
    products.splice(index,1);
    display();
}

function display() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `<tr>
            <td>${i+1}</td>
            <td>${products[i].name}</td>
            <td>
                <img src='${products[i].image}' width="120" height="140">
            </td>
            <td style="color: chartreuse">${products[i].price}</td>
            <td>
                <button onclick="editProduct(${i})">Edit</button>
            </td>
            <td>
                <button onclick="deleteProduct(${i})">delete</button>
            </td>
        </tr>`
    }
    document.getElementById("display").innerHTML = str;
}


