// A: live legend 🐱‍💻
const resimler = [
    'images/ali.jpg',
    "images/bedbext_developer.jpg",
    "images/duman.jpg",
    "images/js_oyrenen_shexs.jpg",
    "images/qarli_daglar.jpg"
];

// Dizi içindeki her bir resmi görüntülemek için bir döngü kullanabilirsiniz
for(let i=0; i<resimler.length; i++) {
    const img = document.createElement('img');
    img.src = resimler[i];
    document.body.appendChild(img)
}
