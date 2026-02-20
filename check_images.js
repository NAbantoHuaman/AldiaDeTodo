const https = require('https');

const urls = [
  "https://www.sopitas.com/wp-content/uploads/2025/12/oscars-2026.png",
  "https://www.infobae.com/resizer/v2/FZSC4OI54BEGJNJ3LJZBTDUB7Q.jpg?auth=9f280dbf1aeb3f32036d308e060d24a6806d6bf64064fe2b322c78d72f05c78d&height=1080&smart=true&width=1920",
  "https://images.milenio.com/tDX0T2lzcKLfFjdrgUR_YQTxKpY=/345x194/uploads/media/2026/01/11/marcelo-bravo-especial.jpg",
  "https://media.laopinionline.ar/p/1782f1a1c13203dda37229a0332e54e4/adjuntos/370/imagenes/100/073/0100073460/1200x675/smart/intentaron-robar-una-moto-centro-monitoreo-desplego-moviles-patrulla-urbana-municipal-pergamino-010203.jpg",
  "https://media.elancasti.com.ar/p/a48e5f3052844254cd24ebeb518626a3/adjuntos/325/imagenes/000/402/0000402546/1200x675/smart/image.png",
  "https://www.reuters.com/resizer/v2/XM54UOGCWNMHDJPYQNSCXYZNKU.jpg?auth=d5f3fc3507ac67231377834a941916661e6d4324a82a081357bb2ce3d882f8cb&quality=80&width=1920",
  "https://www.elheraldo.co/resizer/v2/EXA3LANSRVASJFUPVXQ6B4ZUJ4.png?auth=7c797ad7fb20377f8ddcf026c161291821582308ddb69c124d8565fee5ddfba5&height=675&smart=true&width=1200"
];

urls.forEach(url => {
  const req = https.get(url, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  });
  
  req.on('error', (e) => {
    console.error(`Error: ${e.message} - ${url}`);
  });
});
