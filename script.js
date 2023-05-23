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
  }
});

// // Get the speakers list and show more button elements
// const speakersList = document.getElementById("speakers-list");
// const showMoreButton = document.getElementById("show-more-button");

// // Set the initial number of speakers to show on mobile
// const initialNumberOfSpeakers = 2;

// // Check if the number of speakers exceeds the initial number
// if (speakersList.children.length > initialNumberOfSpeakers) {
//   // Show the show more button on mobile
//   showMoreButton.style.display = "block";
//   hideAdditionalSpeakers();

//   // Show the additional speakers when the button is clicked
//   showMoreButton.addEventListener("click", handleShowMoreButtonClick);
// }

// function hideAdditionalSpeakers() {
//   const additionalSpeakers = Array.from(speakersList.children).slice(
//     initialNumberOfSpeakers
//   );

//   // Hide additional speakers
//   additionalSpeakers.forEach((speaker) => {
//     speaker.style.display = "none";
//   });
// }

// function handleShowMoreButtonClick() {
//   const additionalSpeakers = Array.from(speakersList.children).slice(
//     initialNumberOfSpeakers
//   );

//   // Show additional speakers
//   additionalSpeakers.forEach((speaker) => {
//     speaker.style.display = "block";
//   });

//   // Hide the show more button
//   showMoreButton.style.display = "none";
// }

// Get the speakers list element
const speakersList = document.getElementById('speakers-list');

// Array of speaker details
const speakers = [
  {
    name: 'Emily Anderson',
    imageSrc: './assets/images/speaker1.jpg',
  },
  {
    name: 'Michael Carter',
    imageSrc: './assets/images/speaker2.jpg',
  },
  {
    name: 'Sarah Patel',
    imageSrc: './assets/images/speaker3.jpg',
  },
  {
    name: 'John Reynolds',
    imageSrc: './assets/images/speaker4.jpg',
  },
  {
    name: 'Michelle Lee',
    imageSrc: './assets/images/speaker5.jpg',
  },
  {
    name: 'Robert Thompson',
    imageSrc: './assets/images/speaker6.jpg',
  },
];

// Set the number of speakers to show initially (for mobile and tablet)
const initialNumberOfSpeakers = 2;

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
  speakerName.textContent = speaker.name;
  speakerDetails.appendChild(speakerName);

  speakerTile.appendChild(speakerImg);
  speakerTile.appendChild(speakerDetails);

  return speakerTile;
}

// Show more button click event handler
function handleShowMoreButtonClick() {
  const additionalSpeakers = Array.from(speakersList.children).filter(
    (_, index) => index >= initialNumberOfSpeakers,
  );

  // Toggle display of additional speakers
  additionalSpeakers.forEach((speaker) => {
    speaker.style.display = speaker.style.display === 'none' ? 'block' : 'none';
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
