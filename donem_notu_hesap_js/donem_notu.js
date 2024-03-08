// Öğrencinin vize ve final notları
var vize = 70;
var final = 100;

// Vize notunun %30'unu ve final notunun %70'ini hesaplayarak dönem sonu notunu bulma
var donemNotu = vize * 0.3 + final * 0.7;

// Dönem sonu notuna göre harf notunu belirleme
var harfNotu;
if (donemNotu >= 90) {
    harfNotu = 'A';
} else if (donemNotu >= 80) {
    harfNotu = 'B';
} else if (donemNotu >= 70) {
    harfNotu = 'C';
} else if (donemNotu >= 60) {
    harfNotu = 'D';
} else if (donemNotu >= 50) {
    harfNotu = 'E';
} else {
    harfNotu = 'F';
}

// Sonucu konsola yazdırma
console.log("Vize Notu:", vize);
console.log("Final Notu:", final);
console.log("Dönem Sonu Notu:", donemNotu);
console.log("Harf Notu:", harfNotu);
