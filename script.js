const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Sona'; // Gizli kod (burada 'Sona' olarak belirledim)
const nextPageUrl = 'main.html'; // Yeni sayfa bağlantısı

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();  // Kullanıcı girişindeki gereksiz boşlukları temizle
    if (userInput.toLowerCase() === secretCode.toLowerCase()) {  // Küçük/büyük harf duyarsız karşılaştırma
        resultDiv.innerHTML = 'Baby'; // Doğru giriş yapıldığında 'Baby' mesajı verilir
        window.location.href = nextPageUrl; // Yeni sayfaya yönlendirme
    } else {
        resultDiv.innerHTML = 'Naa, sen benim baby’im değilsin! Konuştuğum kişi nereye gitti? Merhaba, Sona!'; // Yanlış giriş yapıldığında Türkçe mesaj
    }
});
