// Accessing the current URL
const currentURL = window.location.href;
console.log('Current URL:', currentURL);

// Alerting the user
window.alert('Hello, World!');

// Opening a new window
const newWindow = window.open('https://www.example.com', '_blank', 'width=500,height=500');
// This will open a new window with Example.com and set its dimensions.

// Accessing the screen dimensions
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log('Screen Width:', screenWidth, 'Screen Height:', screenHeight);

// Handling resize event
window.addEventListener('resize', () => {
  console.log('Window resized!');
});

// Setting a timeout
window.setTimeout(() => {
  console.log('Timeout completed!');
}, 2000);
