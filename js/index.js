const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nav = document.querySelector('nav');

const navItems = document.querySelectorAll('nav > a');
for (let i = 0; i < 6; i++) {
  navItems[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
  navItems[i].style.color = 'green';
}

const navHome = document.createElement('a');
navHome.textContent = 'Home';
navHome.style.color = 'green';
nav.prepend(navHome);

const navOther = document.createElement('a');
navOther.textContent = 'Other';
navOther.style.color = 'green';
nav.appendChild(navOther);

const logoImg = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const ctaH1 = document.querySelector('.cta-text > h1');
ctaH1.innerHTML = 'DOM<br> IS<br> AWESOME';

const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const textContents = document.querySelectorAll('.text-content');
console.log(textContents);

textContents[0].children[0].textContent = siteContent['main-content']['features-h4'];
textContents[0].children[1].textContent = siteContent['main-content']['features-content'];

textContents[1].children[0].textContent = siteContent['main-content']['about-h4'];
textContents[1].children[1].textContent = siteContent['main-content']['about-content'];

textContents[2].children[0].textContent = siteContent['main-content']['services-h4'];
textContents[2].children[1].textContent = siteContent['main-content']['services-content'];

textContents[3].children[0].textContent = siteContent['main-content']['product-h4'];
textContents[3].children[1].textContent = siteContent['main-content']['product-content'];

textContents[4].children[0].textContent = siteContent['main-content']['vision-h4'];
textContents[4].children[1].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactPs = document.querySelectorAll('.contact > p');
contactPs[0].textContent = siteContent['contact']['address'];
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

const copyright = document.querySelector('footer > p');
copyright.textContent = siteContent['footer']['copyright'];