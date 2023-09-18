function hesapla() {

    const radiusElInput = document.getElementById('radius');
    const uzunlugCavab = document.getElementById('uzunlug');
    const saheCavab = document.getElementById('sahe');

    const pi = Math.PI;
    const radius = parseFloat(radiusElInput.value);

    if(radius >= 10 && radius <= 100) {

        const daireUzunlug = 2 * pi * radius;
        const sahe = pi * radius * radius;

        uzunlugCavab.textContent = daireUzunlug.toFixed(2) + 'px';
        saheCavab.textContent = sahe.toFixed(2) + 'px^2';

    }
    else {

        alert('1-100 Arasinda Reqem Daxil Etmelisiniz!');
        uzunlugCavab.textContent = '';
        saheCavab.textContent = '';

    }

}