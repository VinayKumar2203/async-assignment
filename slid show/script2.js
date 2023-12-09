let goNext=document.getElementById('next2');
let goPrev=document.getElementById('prev2');
let Start=document.getElementById('Start');
let stop=document.getElementById('stop');


let slideImage=[
  "https://www.bing.com/th?id=OIP.iAhcp6m_91O-ClK79h8EQQHaFj&w=154&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
  "https://www.bing.com/th?id=OIP.Z7JiQaFe5xBABL7QsL8kSAHaE8&w=173&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" ,
  "https://www.bing.com/th?id=OIP.GshhbMJsX_pdShJOBoxEfQHaFj&w=155&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
   "https://www.bing.com/th?id=OIP.EpE63i_LcbNSSSk1v--MfAHaHa&w=120&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
   "https://www.bing.com/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&w=196&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.6nsKk7mIkSKvYZD_APa8-AHaFk&w=148&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.AcZVLHA4MZA62kD6_JMIIAHaFj&w=148&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.87rC-vQdkf1I5qv74_2LjwHaHp&w=110&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    "https://www.bing.com/th?id=OIP.w0fCUe4n63FiQ2imwwX81gHaE8&w=136&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
   "https://www.bing.com/th?id=OIP.Gf-MiDHTv_xkelVbwA3F2wHaKl&w=69&h=98&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
   "https://www.bing.com/th?id=OIP.0AnkEFW0bDeZGRP5UT5Z7AAAAA&w=196&h=98&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
   "https://www.bing.com/th?id=OIP.xd96tWS7X19cp5_gFcNJcAHaJ4&w=73&h=98&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",

]
let image =document.querySelector('#img3');
let currentImg=0;

image.setAttribute('src',slideImage[currentImg]);

 goNext.addEventListener('click',function () {
     currentImg++;
     if (currentImg>=slideImage.length) {
          currentImg=0;
     }
     image.setAttribute('src',slideImage[currentImg]);
});

goPrev.addEventListener('click',function () {
     currentImg--;
     if (currentImg<0) {
          currentImg=slideImage.length-1;
     }
     image.setAttribute('src',slideImage[currentImg]);
})


//  stop and start button here....



  Start.addEventListener('click',function() {
   alert()

  })
 
  stop.addEventListener('click',function () {
     alert()
     
  })