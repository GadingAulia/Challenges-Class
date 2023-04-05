// Menggunakan getElementById
const title = document.getElementById("title");
title.style.color = "blue";

// Menggunakan getElementsByName
const namaDepan = document.getElementsByName("nama_depan")[0];
const namaBelakang = document.getElementsByName("nama_belakang")[0];
namaDepan.value = "John";
namaBelakang.value = "Doe";

// Menggunakan getElementsByTagName
const paragraf = document.getElementsByTagName("p");
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].className = "red";
}

// Menggunakan getElementsByClassName
const content = document.getElementsByClassName("red");
for (let i = 0; i < content.length; i++) {
    content[i].style.backgroundColor = "yellow";
}

// Menggunakan querySelector
const btnClick = document.querySelector("#btn-click");
btnClick.addEventListener("click", function() {
    alert("Tombol diklik!");
});