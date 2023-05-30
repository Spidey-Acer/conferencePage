const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');

function showMobileMenu() {
  mobileMenu.style.display = 'flex';
}

function hideMobileMenu() {
  mobileMenu.style.display = 'none';
}

function toggleMobileMenu() {
  if (mobileMenu.style.display === 'none') {
    showMobileMenu();
  } else {
    hideMobileMenu();
  }
}

function handleMobileMenuItemClick(event) {
  const { target } = event;
  const sectionId = target.getAttribute('href').substring(1);

  hideMobileMenu();

  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

// Hide the mobile menu by default
hideMobileMenu();

menuButton.addEventListener('click', toggleMobileMenu);
closeButton.addEventListener('click', hideMobileMenu);

mobileMenuItem.forEach((item) => {
  item.addEventListener('click', handleMobileMenuItemClick);
});

// sticky mobile menu

const stickyMobileMenu = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    stickyMobileMenu.classList.add('sticky');
  } else {
    stickyMobileMenu.classList.remove('sticky');

    stickyMobileMenu.classList.remove('sticky');
  }
});


const stickyNavMenu = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    stickyNavMenu.classList.add('sticky');
  } else {
    stickyNavMenu.classList.remove('sticky');

    stickyNavMenu.classList.remove('sticky');
  }
});

const stickyTopBarMenu = document.querySelector('.top-bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    stickyTopBarMenu.classList.add('sticky');
  } else {
    stickyTopBarMenu.classList.remove('sticky');

    stickyTopBarMenu.classList.remove('sticky');
  }
});

// Get the speakers list element
const speakersList = document.getElementById('speakers-list');

// Array of speaker details
const speakers = [
  {
    name: 'Emily Anderson',
    imageSrc: './assets/images/speaker1.jpg',
    speakerTitle: 'Cybersecurity Analyst, SecureTech Solutions',
    speakerDescription:
        'Emily Anderson is a seasoned cybersecurity analyst at SecureTech Solutions. With over 10 years of experience in the industry, she specializes in network security and vulnerability assessment. She is passionate about helping organizations protect their digital assets from emerging threats.',
  },
  {
    name: 'Michael Carter',
    imageSrc: './assets/images/speaker2.jpg',
    speakerTitle: 'Senior Software Engineer, TechSoft',
    speakerDescription:
        'Michael Carter is a senior software engineer at TechSoft. He has over 15 years of experience in the industry and specializes in building scalable backend systems. He is passionate about building products that help people.',
  },
  {
    name: 'Sarah Patel',
    imageSrc: './assets/images/speaker3.jpg',
    speakerTitle: 'Director of Threat Intelligence, SecureNet Labs',
    speakerDescription:
        'Sarah Patel is the director of threat intelligence at SecureNet Labs. She has over 20 years of experience in the industry and specializes in threat detection and analysis. She is passionate about helping organizations stay ahead of the curve when it comes to cybersecurity.',
  },
  {
    name: 'John Reynolds',
    imageSrc: './assets/images/speaker4.png',
    speakerTitle: 'Senior Security Engineer, TechShield Solutions',
    speakerDescription:
        'John Reynolds is a senior security engineer at TechShield Solutions. He has over 15 years of experience in the industry and specializes in building secure systems. He is passionate about helping organizations build secure systems.',
  },
  {
    name: 'Michelle Lee',
    imageSrc: './assets/images/speaker5.jpg',
    speakerTitle: 'Cybersecurity Consultant, CyberDefense Consulting',
    speakerDescription:
        'Michelle Lee is a cybersecurity consultant at CyberDefense Consulting. She has over 10 years of experience in the industry and specializes in penetration testing and vulnerability assessment. She is passionate about helping organizations protect their digital assets from emerging threats.',
  },
  {
    name: 'Robert Thompson',
    imageSrc: './assets/images/speaker6.jpg',
    speakerTitle: 'Chief Technology Officer, SecureLink Solutions',
    speakerDescription:
        'Robert Thompson is the chief technology officer at SecureLink Solutions. He has over 20 years of experience in the industry and specializes in building secure systems. He is passionate about helping organizations build secure systems.',
  },
];

// Set the number of speakers to show initially (for mobile and tablet)
const initialNumberOfSpeakers = 2;

// Show less button click event handler
function handleShowLessButtonClick() {
  const additionalSpeakers = Array.from(speakersList.children).filter(
    (_, index) => index >= initialNumberOfSpeakers,
  );

  // Hide the additional speakers
  additionalSpeakers.forEach((speaker) => {
    speaker.style.display = 'none';
  });

  // Remove the "Show Less" button
  const showLessButton = document.getElementById('show-less-button');
  showLessButton.parentNode.removeChild(showLessButton);

  // Show the "Show More" button
  const showMoreButton = document.getElementById('show-more-button');
  showMoreButton.style.display = 'block';
}

// Show more button click event handler
function handleShowMoreButtonClick() {
  const additionalSpeakers = Array.from(speakersList.children).filter(
    (_, index) => index >= initialNumberOfSpeakers,
  );

  // Toggle display of additional speakers
  additionalSpeakers.forEach((speaker) => {
    speaker.style.display = speaker.style.display === 'none' ? 'flex' : 'none';
  });

  // Check if all speakers are visible
  const allSpeakersVisible = additionalSpeakers.every(
    (speaker) => speaker.style.display === 'flex',
  );

  if (allSpeakersVisible) {
    // Hide the "Show More" button
    const showMoreButton = document.getElementById('show-more-button');
    showMoreButton.style.display = 'none';

    // Create and append the "Show Less" button
    const showLessButton = document.createElement('button');
    showLessButton.id = 'show-less-button';
    showLessButton.textContent = 'Show Less';
    speakersList.parentNode.insertBefore(
      showLessButton,
      speakersList.nextSibling,
    );

    // Show less button click event handler
    showLessButton.addEventListener('click', handleShowLessButtonClick);
  }
}

// Function to create a speaker tile element
function createSpeakerTile(speaker) {
  const speakerTile = document.createElement('li');
  speakerTile.classList.add('speaker-tile');

  const speakerImg = document.createElement('div');
  speakerImg.classList.add('speaker-img');
  const img = document.createElement('img');
  img.src = speaker.imageSrc;
  img.alt = speaker.name;
  speakerImg.appendChild(img);

  const speakerDetails = document.createElement('div');
  speakerDetails.classList.add('speaker-details');
  const speakerName = document.createElement('h3');
  speakerName.classList.add('speaker-name');
  speakerName.textContent = speaker.name;
  speakerDetails.appendChild(speakerName);

  const speakerTitle = document.createElement('div');
  speakerTitle.classList.add('speaker-title');
  speakerTitle.textContent = speaker.speakerTitle;
  speakerDetails.appendChild(speakerTitle);

  const speakerDescription = document.createElement('div');
  speakerDescription.classList.add('speaker-description');
  speakerDescription.textContent = speaker.speakerDescription;
  speakerDetails.appendChild(speakerDescription);

  speakerTile.appendChild(speakerImg);
  speakerTile.appendChild(speakerDetails);

  return speakerTile;
}

// Dynamically generate speaker tiles
speakers.forEach((speaker, index) => {
  const speakerTile = createSpeakerTile(speaker);
  speakersList.appendChild(speakerTile);

  // Hide additional speakers if index is greater than or equal to initialNumberOfSpeakers
  if (index >= initialNumberOfSpeakers) {
    speakerTile.style.display = 'none';
  }
});

// Check if the screen width is less than 750 pixels
if (window.innerWidth < 750) {
  // Hide the additional speakers initially
  const additionalSpeakers = Array.from(speakersList.children).filter(
    (_, index) => index >= initialNumberOfSpeakers,
  );
  additionalSpeakers.forEach((speaker) => {
    speaker.style.display = 'none';
  });

  // Create and append the "Show More" button
  const showMoreButton = document.createElement('button');
  showMoreButton.id = 'show-more-button';
  showMoreButton.textContent = 'Show More';
  speakersList.parentNode.insertBefore(
    showMoreButton,
    speakersList.nextSibling,
  );

  // Show additional speakers when the "Show More" button is clicked
  showMoreButton.addEventListener('click', handleShowMoreButtonClick);
} else {
  // Display all speakers in desktop mode
  const allSpeakers = Array.from(speakersList.children);
  allSpeakers.forEach((speaker) => {
    speaker.style.display = 'flex';
  });
}
