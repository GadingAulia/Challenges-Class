# Challenges-Class


### Section 02
###### getElementById() digunakan untuk mendapatkan elemen dengan id title dan btn-click dari dokumen HTML dan menyimpannya dalam variabel title dan button menggunakan JavaScript. Kemudian, textContent digunakan untuk mengubah teks pada elemen title. Selain itu, addEventListener() digunakan untuk menambahkan event click pada elemen button dan menampilkan pesan alert ketika elemen tersebut diklik.
###### Metode yang digunakan di dalam kode tersebut antara lain:
###### - getElementById() untuk memilih elemen dengan ID tertentu dan mengubah warna teks menjadi biru.
###### - getElementsByName() untuk memilih elemen dengan nama tertentu dan mengisi nilai pada input field "Nama Depan" dan "Nama Belakang".
###### - getElementsByTagName() untuk memilih elemen dengan tag tertentu dan menambahkan kelas CSS "red" pada paragraf.
###### - getElementsByClassName() untuk memilih elemen dengan kelas tertentu dan mengubah warna latar belakang menjadi kuning.
###### - querySelector() untuk memilih elemen dengan selector CSS tertentu dan menambahkan event listener pada tombol "Kirim" untuk menampilkan alert ketika tombol tersebut diklik.

### Section 03
###### getElementById() digunakan untuk mendapatkan elemen induk dengan ID "parent". Kemudian, dengan menggunakan properti children untuk mendapatkan semua elemen anak dari elemen induk. Metode previousElementSibling dan nextElementSibling untuk mendapatkan elemen saudara kandung sebelum dan sesudah elemen tertentu.

### Section 04
###### Kode tersebut membuat variabel untuk beberapa elemen HTML dengan mengambilnya melalui ID menggunakan metode getElementById(). Kemudian, kode menambahkan event listener untuk setiap elemen tombol, dan pada saat diklik, memanipulasi konten dari halaman HTML dengan membuat, menambahkan, menyisipkan, mengganti, mengkloning, atau menghapus elemen.

### Section 05
###### Dalam program ini memiliki elemen header dengan kelas dan elemen judul dengan atribut data-type. Dan juga memiliki elemen tombol dengan atribut disabled pada awalnya. Di halaman CSS, akan diberi gaya elemen header dan elemen judul dengan warna dan ukuran font. Di JavaScript, akan mengambil elemen header dan judul berdasarkan ID mereka dan menambahkan kelas ke elemen header. Menetapkan atribut data-subtype baru pada elemen judul dan mendapatkan nilai atribut data-type. Kemudian, menghapus atribut disabled dari elemen tombol dan memeriksa apakah elemen tombol tersebut memiliki atribut disabled.

### Section 06
###### Dalam program ini, saat tombol "Change Style" diklik, fungsi changeStyle() dipanggil. Di dalam fungsi tersebut, yang mana akan mengambil elemen div menggunakan document.getElementById(), kemudian mengubah beberapa gaya inline pada elemen tersebut menggunakan properti style. Selain itu, juga menambahkan kelas CSS ke elemen menggunakan classList.add(). Kemudian, menggunakan getComputedStyle() untuk mendapatkan nilai yang dihitung dari properti gaya yang diatur pada elemen. Akhirnya, mendapatkan dan mengatur lebar dan tinggi elemen menggunakan offsetWidth dan offsetHeight.

### Section 07
###### Program ini membuat wadah dengan beberapa kotak, yang masing-masing memiliki click event listener yang mengubah warna latar belakangnya saat diklik. Kemudian membuat MutationObserver yang memantau perubahan pada container's child nodes dan mencatat pesan ke konsol ketika sebuah kotak ditambahkan atau dihapus. Terakhir, kotak baru ditambahkan ke container setelah 3 detik.

### Section 08
###### Dalam program ini, pertama-tama mengambil referensi ke formulir dan input field-nya menggunakan getElementById(). Kemudian menambahkan event listener ke formulir untuk event submit. Ketika pengguna mengirimkan formulir, akan mencegah pengiriman formulir default dengan menggunakan preventDefault(). Selanjutnya, melakukan validasi pada field formulir. Jika ada field yang kosong, akan menampilkan pesan peringatan kepada pengguna dan keluar dari fungsi. Jika field email tidak valid, akan menambahkan kelas error ke field input email untuk menunjukkan bahwa input tersebut tidak valid. Terakhir, jika validasi berhasil, maka akan menampilkan pesan peringatan kepada pengguna dan mengirimkan formulir. Dan juga mendefinisikan sebuah fungsi validateEmail() dengan menggunakan regular expression untuk memvalidasi alamat email. Lalu menambahkan event listener ke field input email untuk event input, yang akan terpicu setiap kali nilai dari field tersebut berubah. Ketika pengguna memperbaiki alamat emailnya, kemudian akan menghapus kelas error dari field input email jika kelas tersebut ada dan nilai baru yang dimasukkan adalah alamat email yang valid.





