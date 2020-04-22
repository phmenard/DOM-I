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
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street<br>Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// end example start code. ***

// Setup some new text for the button click
var newh1 = "Lambda<br> Lambda<br> Lambda";

// Grab all the nav a's
var navLinks = document.querySelectorAll('nav a');

// Set them all acourdingly.
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navLinks[i].style.color = 'green'; // Change the color to green
  
}

// Grab the full nav
const myNav = document.querySelector('nav');

// Create a two new nav item 
const newNav1 = document.createElement('a');
newNav1.href = '#';
newNav1.textContent = 'Lambda';
newNav1.style.color = 'green';

const newNav2 = document.createElement('a');
newNav2.href = '#';
newNav2.textContent = 'Omega';
newNav2.style.color = 'green';

// Add the new nav items
myNav.appendChild(newNav1);
myNav.prepend(newNav2);

// Setup the  cta image
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// Setup the cta h1
const ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent['cta']['h1'];

// Setup the 'Get Started' button
const getStarted = document.querySelector('button');
getStarted.textContent = siteContent['cta']['button'];
getStarted.style.borderRadius = '8px'; // Change the button radius 
getStarted.addEventListener('click', updateH1);

// Grab all the h4's
const header4 = document.querySelectorAll('.text-content h4');
// Get all content p's
const content = document.querySelectorAll('.text-content p');
// Get middle image
const midImage = document.querySelector('.middle-img');

// Setup the main content ******
let headerIndex = 0;
let contentIndex = 0;
for (let key in siteContent['main-content']) {
  if (key.search('h4') != -1) { // Find the h4's
    // Set the h4 header text
    header4[headerIndex].textContent = siteContent['main-content'][key];
    headerIndex++;

  } else if (key.search('content') != -1) { // Find the content
    //Set the text for p 
    content[contentIndex].textContent = siteContent['main-content'][key];
    contentIndex++;

  } else if (key === 'middle-img-src') { // Find the middle img
    // Setup the middle image
    midImage.setAttribute('src', siteContent['main-content'][key]);
  }
}
// end main content setup ******

// Setup contact info ******
const contact_h4 = document.querySelector('.contact h4');
const contact_p = document.querySelectorAll('.contact p');

// Setup the contact h4
contact_h4.textContent = siteContent['contact']['contact-h4'];
// Setup address
contact_p[0].textContent = siteContent['contact']['address'];
// Setup phone
contact_p[1].textContent = siteContent['contact']['phone'];
// Setup emial
contact_p[2].textContent = siteContent['contact']['email'];

// End setup contact info

// Setup footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

// End setup footer

function updateH1() {
  if (ctaText.innerHTML.search('DOM') != -1) {
    ctaText.innerHTML = newh1;
    ctaImg.setAttribute('src', 'img/nerds.bmp');
    ctaImg.setAttribute('alt', "Classic 80's Movie");
    midImage.setAttribute('src', 'img/nerds2.bmp');
    midImage.setAttribute('alt', "A great moment for them all.");
  } else {
    ctaText.innerHTML = siteContent['cta']['h1'];
    ctaImg.setAttribute('src', siteContent['cta']['img-src']);
    ctaImg.setAttribute('alt', "Image of a code snippet.");
    midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
    midImage.setAttribute('alt', "Image of code snippets across the screen");
  }

}

