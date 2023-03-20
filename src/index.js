const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const links = document.querySelectorAll("a");
const namess =[
  "Servisler","Ürünler","Vizyon","Özellikler","Hakkımızda","İletişim"
];
for (let i=0;i<namess.length;i++){
  links[i].textContent=namess[i];
}
const butt=document.querySelector("button");
butt.textContent=("Başlayın");
const firsts=document.querySelector("h1");
firsts.textContent=("BU DOOM MÜKEMMEL");

const first=document.querySelectorAll(".text-content h4")
const firstpage=["Özellikler","Hakkında","Servisler","Ürünler","vizyon"];
for(let i=0;i<firstpage.length;i++){
first[i].textContent=firstpage[i];
}
const firstp=document.querySelectorAll(".text-content p")
const firstppage=["Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.","Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.","Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.","Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.","Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."];
for (let i=0;i<firstppage.length;i++){
  firstp[i].textContent=firstppage[i];
}
const last =document.querySelector(".contact h4");
last.textContent=("İletişim");
const lastp=document.querySelectorAll(".contact p");
const lastarray=["100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye","+90 (123) 456-7899","satis@birsirketsitesi.com.tr"];
for(let i=0;i<lastarray.length;i++){
  lastp[i].textContent=lastarray[i];
}
const lastword=document.querySelector("footer a")
lastword.textContent=("Copyright Bir Şirket Sitesi 2022");


const img1=document.querySelector(".logo");
img1.src=("../mocks/img/logo.png");
const img2=document.querySelector(".cta img");
img2.src=("../mocks/img/cta.png");

const img3=document.querySelector(".middle-img");
img3.src=("../mocks/img/accent.png");