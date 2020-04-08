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


// Grab all the nav a's
const navLinks = document.querySelectorAll('a');

// Set them all acourdingly.
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}

// Setup the  cta image
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// Setup the cta h1
const ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent['cta']['h1'];

// Set up the 'Get Started' button
const getStarted = document.querySelector('button');
getStarted.textContent = siteContent['cta']['button'];

// Grab all the h4's
const header4 = document.querySelectorAll('.text-content h4');
// Get all content p's
const content = document.querySelectorAll('.text-content p');
// Get middle image
const midImage = document.querySelector('.middle-img');

// Set up the main content ******
let headerIndex = 0;
let contentIndex = 0;
for (let key in siteContent['main-content']) {
  if (key.search('h4') != -1) {
    // Set the h4 header text
    header4[headerIndex].textContent = siteContent['main-content'][key];
    headerIndex++;

  } else if (key.search('content') != -1) {
    //Set the text for p 
    content[contentIndex].textContent = siteContent['main-content'][key];
    contentIndex++;

  } else if (key === 'middle-img-src') {
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

