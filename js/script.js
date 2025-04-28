console.log("Hello Our Visitor");

// ================================================================= Copy Section URL
function copyHrefUrl(e) {
  e.preventDefault();
  const href = e.target.getAttribute('URLTarget');
  const path = window.location.origin + window.location.pathname;

  navigator.clipboard.writeText(path + href)
    .then(() => {
      alert('URL copied to clipboard!');
    })
    .catch((err) => {
      console.error('Error copying URL:', err);
    });
}

// ================================================================= Booking

function booking() {
  alert("This service is currently unavailable\nPlease contact us via Whatsapp on 01111-33-8461\nto make an appointment");
}
function bookingAR() {
  alert("هذه الخدمة غير متاحة حالياً\nالرجاء التواصل معنا عبر الواتساب على\n01111-33-8461");
}

// ================================================================= 404

// window.addEventListener('load', function () {
//   if (!document.querySelector('body').classList.contains('fonts-plus-jakarta-sans')) {
//     window.location.href = '/404.html';
//   }
// });

// ================================================================= Counter

const counters = document.querySelectorAll('#counter h6');
const speed = 100;
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = `${target}+`;
    }
  };
  updateCount();
});

// ================================================================================================= NAVBAR

const navbar = document.getElementById('navbar');

let smStyle = `w-screen h-screen bg-white fixed top-0 left-0 z-10 flex-col justify-center items-center gap-5 text-lg text-gray-950 hidden`
let lgStyle = `hidden lg:flex justify-center items-center gap-5 text-lg text-gray-950`

let navEN = `
<div class="container mx-auto flex justify-between items-center gap-5">
  <div class="">
    <a href="/">
      <img src="/media/logo.svg" alt="logo" class="h-14" />
    </a>
  </div>
  <ul id="n-list" class="hidden lg:flex justify-center items-center gap-5 text-lg text-gray-950">
    <i id="n-x" class="bi bi-x text-3xl text-black absolute top-5 right-5 block lg:hidden"></i>
    <a id="n-home" href="/en/" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">Home</a>
    <a id="n-about" href="/en/about.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">About us</a>
    <a id="n-services" href="/en/services.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">Services</a>
    <a id="n-contracts" href="/en/contracts.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">Contracts</a>
    <a id="n-contact" href="/en/contact.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">Contact us</a>
  </ul>
  <div class="flex justify-center items-center gap-2 lg:gap-5">
    <i class="bi bi-telephone-fill lg:text-xl text-white before:bg-blue-600 before:p-4 before:rounded-full"></i>
    <div class="flex flex-col justify-center items-start">
      <p class="text-sm lg:text-base font-medium text-gray-600">Need Help ?</p>
      <p class="text-sm lg:text-base font-bold text-black">(+20) 01111-33-8461</p>
    </div>
  </div>
  <button id="n-lang" onclick="toggleLang()" class="text-xl font-bold text-black">عربي</button>
  <i id="n-btn" class="bi bi-list text-3xl text-black lg:hidden"></i>
</div>
`
let navAR = `<div class="container mx-auto flex justify-between items-center gap-5">
  <div class="">
    <a href="/">
      <img src="/media/logo.svg" alt="logo" class="h-14" />
    </a>
  </div>
  <ul id="n-list" class="hidden lg:flex justify-center items-center gap-5 text-lg text-gray-950">
    <i id="n-x" class="bi bi-x text-3xl text-black absolute top-5 right-5 block lg:hidden"></i>
    <a id="n-home" href="/ar/" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">الرئيسية</a>
    <a id="n-about" href="/ar/about.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">عنا</a>
    <a id="n-services" href="/ar/services.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">خدماتنا</a>
    <a id="n-contracts" href="/ar/contracts.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">التعاقدات</a>
    <a id="n-contact" href="/ar/contact.html" class="cursor-pointer duration-300 flex justify-center items-center gap-2 hover:text-blue-600/80 px-1">تواصل معنا</a>
  </ul>
  <div class="flex justify-center items-center gap-2 lg:gap-5">
    <i class="bi bi-telephone-fill lg:text-xl text-white before:bg-blue-600 before:p-4 before:rounded-full"></i>
    <div class="flex flex-col justify-center items-start">
      <p class="text-sm lg:text-base font-medium text-gray-600">هل تحتاج لمساعدة؟</p>
      <p class="text-sm lg:text-base font-bold text-black">(+20) 01111-33-8461</p>
    </div>
  </div>
  <button id="n-lang" onclick="toggleLang()" class="text-xl font-bold text-black">EN</button>
  <i id="n-btn" class="bi bi-list text-3xl text-black lg:hidden"></i>
</div>
`

const currentPath = window.location.pathname
const currentLang = currentPath.startsWith("/ar") ? "ar" : "en"
navbar.innerHTML = currentLang == "en" ? navEN : navAR

function toggleLang() {
  const newLang = currentLang == "en" ? "ar" : "en"
  const newUrl = currentPath.replace(`/${currentLang}`, `/${newLang}`)
  window.location.href = newUrl
}

const nLang = document.getElementById('n-lang');

const nBtn = document.getElementById('n-btn');
const nBtnX = document.getElementById('n-x');

nBtn.addEventListener('click', () => { // Open
  const nList = document.getElementById('n-list');
  nList.classList.value = smStyle
  nList.classList.toggle('hidden');
  nList.classList.toggle('flex');
})

nBtnX.addEventListener('click', () => { // Close
  const nList = document.getElementById('n-list');
  nList.classList.toggle('hidden');
  nList.classList.toggle('flex');
  nList.classList.value = lgStyle
});

function activeNav() {
  const nList = document.getElementById('n-list');
  const navLinks = nList.querySelectorAll('a');
  const path = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('text-blue-600');
    } else {
      link.classList.remove('text-blue-600');
    }
  });
}
window.addEventListener('load', activeNav);

// ================================================================================================= FOOTER

const FOOTER = document.getElementById('footer');

window.addEventListener('load', (e) => {

  let footerEN = `<div class="container mx-auto px-5 flex flex-col justify-center items-center gap-10">
    <!-------------- Part 1 -------------->
    <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
      <div class="w-full lg:w-1/3 flex flex-col justify-center items-start gap-10">
        <a href="/">
          <img src="../media/logo.png" alt="logo" class="h-16 brightness-[1000%]" />
        </a>
        <p class="">First dental clinic in Aswan accredited by GAHAR</p>
        <div class="flex flex-col justify-center items-start gap-5">
          <p class="font-bold">Support@PrimeDentalClinic.net</p>
          <p class="font-bold">(+20) 01111-33-8461</p>
        </div>
      </div>
      <!---------------------->
      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-2xl font-bold">Quick Links</h3>
        <a href="/en/" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Home</a>
        <a href="/en/about.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">About Us</a>
        <a href="/en/services.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Services</a>
        <a href="/en/contact.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Contact Us</a>
      </div>
      <!---------------------->
      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-2xl font-bold">Socials</h3>
        <a href="https://www.facebook.com/primedentalmas" target="_blank" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Facebook</a>
        <a href="https://www.instagram.com/primedentalmas" target="_blank" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Instagram</a>
        <a href="http://wa.me/+201111338461" target="_blank" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Whatsapp</a>
        <button onclick="alert('Coming Soon')" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Youtube</button>
      </div>
      <!---------------------->
      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-2xl font-bold">Our Services</h3>
        <a href="" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Restorative Dentistry</a>
        <a href="" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Root Canal Treatment</a>
        <a href="" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Removable Dentures</a>
        <a href="" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">Children Dentistry</a>
      </div>
    </div>
    <span class="w-full h-px bg-gray-600/30"></span>
    <!-------------- Part 2 -------------->
    <div class="w-full flex flex-col lg:flex-row justify-between items-center gap-5">
      <h3 class="">Copyright © 2023-2025 All Rights Reserved.</h3>
    </div>
  </div>
  `

  let footerAR = `<div class="container mx-auto px-5 flex flex-col justify-center items-center gap-10">
    <!-------------- الجزء 1 -------------->
    <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
      <div class="w-full lg:w-1/3 flex flex-col justify-center items-start gap-10">
        <a href="/">
          <img src="../media/logo.png" alt="logo" class="h-16 brightness-[1000%]" />
        </a>
        <p class="">أول عيادة أسنان في أسوان معتمدة من قبل GAHAR</p>
        <div class="flex flex-col justify-center items-start gap-5">
          <p class="font-bold">Support@PrimeDentalClinic.net</p>
          <p class="font-bold">(+20) 01111-33-8461</p>
        </div>
      </div>
      <!---------------------->
      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-2xl font-bold">روابط سريعة</h3>
        <a href="/ar/" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">الصفحة الرئيسية</a>
        <a href="/ar/about.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">عنا</a>
        <a href="/ar/services.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">خدماتنا</a>
        <a href="/ar/contact.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">تواصل معنا</a>
      </div>
      <!---------------------->
      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-2xl font-bold">الشبكات الاجتماعية</h3>
        <a href="https://www.facebook.com/primedentalmas" target="_blank" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">فيسبوك</a>
        <a href="https://www.instagram.com/primedentalmas" target="_blank" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">إنستغرام</a>
        <a href="http://wa.me/+201111338461" target="_blank" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">واتساب</a>
        <button onclick="alert('Coming Soon')" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">يوتيوب</button>
      </div>
      <!---------------------->
      <div class="flex flex-col justify-start items-start gap-5">
        <h3 class="text-2xl font-bold">خدماتنا</h3>
        <a href="services.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">علاج الأسنان الترميمي</a>
        <a href="services.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">علاج قناة الجذر</a>
        <a href="services.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">الاطقم المتحركة</a>
        <a href="services.html" class="border-s border-blue-600 hover:text-blue-600 duration-300 ps-3">علاج أطفال</a>
      </div>

    </div>
    <span class="w-full h-px bg-gray-600/30"></span>
    <!-------------- الجزء 2 -------------->
    <div class="w-full flex flex-col lg:flex-row justify-between items-center gap-5">
      <h3 class="">Copyright © 2023-2025 All Rights Reserved.</h3>
    </div>
  </div>
  `
  FOOTER.innerHTML = currentLang == "en" ? footerEN : footerAR



})

// ================================================================= REVIEWS

// Get the review elements
const review = document.getElementById('review');
const nextButton = document.getElementById('next-review');
const previousButton = document.getElementById('previous-review');

// Define the reviews data
const reviews = [
  {
    text: "بصراحة وعن تجربة شخصية أفضل عيادة في اسوان، تعقيم على اعلى مستوى واهتمام دكتور اسلام بشرح الحالة وخيارات العلاج اكثر من ممتاز مع خبرة طويلة في المجال لجميع انواع الحالات سواءً اطفال او كبار.",
    author: 'Khaled',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWY8w8UnkaW9lMGneXR_G-q9kKOVRkCxAlAckJ7k98Bs7qGwaI=w36-h36-p-rp-mo-br100'
  },
  {
    text: "العياده تحفه بجد من بدايه موقعها لغاية الدكتور المكان ميتوهش وصلت بسهوله دخلت العياده المكان لوحده يريح نفسيا اصلا دا غير الاستقبال المكان كله متعقم بطريقه بجد تحفه والدكتور الله واكبر عليه من تعقيم ومعدات واول مره محسش لما اقلع ضرس وكنت خايفه جدا بس الدكتور والمكان ريحونى نفسيا بجد تسلم ايده ع كل حاجه ع المكان وع الاستاذه إلى ف الاستقبال تحفه بجد مهما قولت مش هوفى حقه 🥰😍🤩🥰😍",
    author: 'Nesren Mahmoud',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocK0fWm4entnwPWBukSbrQldicuiefF3Nu8IV0O2EGC6jTJK7Q=w36-h36-p-rp-mo-br100'
  },
  {
    text: "非常棒的体验，完美，体贴，下一次还会到访",
    author: 'Zhehao Jin',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKZKh1fnVVeAyfc8SRH-_qPFPK61o5GVP6DBgCRw5Bm88TEIQ=w36-h36-p-rp-mo-br100'
  },
  {
    text: "I think that is right place.lhave been finding that cure l search about it and the instrument that use in my treatment it very improve. When in the clinic the staff is very useful spasialy DR Islam. Am so satisfy in that place and thank",
    author: 'Romisa Hassan',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJr2k2cVfJeq3KkURg5LOFsPQFApFzJBa_CZmIzA3da8zXlTw=w36-h36-p-rp-mo-br100'
  },
  {
    text: "المكان تحفه و التعامل جميل جدا 💖 من احسن العيادات للاسنان Thank you very much, doctor. The treatment is very nice and their work is very nice and there is no pain Доктор очень добрый, лечение очень хорошее. Большое спасибо❤️ …",
    author: 'Chrsten Kamal',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjU17URRHos95pRu7iz7uDToVYtPFceXyB8c7Pcd8uN4DUnpWto=w36-h36-p-rp-mo-br100'
  },
];

// Initialize the current review index
let currentReviewIndex = 0;

// Function to update the review

function updateReview() {
  const reviewText = reviews[currentReviewIndex].text;
  const reviewAuthor = reviews[currentReviewIndex].author;
  const reviewImage = reviews[currentReviewIndex].image;

  review.querySelector('p').textContent = reviewText;
  review.querySelector('img').src = reviewImage;
  review.querySelector('.author').textContent = reviewAuthor;
}

// Add event listeners to the buttons
if (nextButton) nextButton.addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  updateReview();
});

if (previousButton) previousButton.addEventListener('click', () => {
  currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  updateReview();
});

// Initialize the review
if (nextButton) updateReview();

// ================================================================================================= FAQs

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});
