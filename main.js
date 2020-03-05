// Apple vs android
'use strict'
// Event Listeners
document.getElementById('android-btn').addEventListener('click', android);
document.getElementById('apple-btn').addEventListener('click', apple);

// Event Functions
function android () {
  document.getElementById('appleAndroid').src = 'images/Android-Logo.jpg';
  document.getElementById('explore-btn').innerHTML = 'Android Home';
  document.getElementById('explore-btn').style.backgroundColor = '#a4c93b';
  document.getElementById('explore-btn').href = 'https://www.android.com/';
  document.body.style.backgroundColor = '#a4c93b'
}

function apple () {
  document.getElementById('appleAndroid').src = 'images/Apple-Logo.jpg';
  document.getElementById('explore-btn').innerHTML = 'Apple Home';
  document.getElementById('explore-btn').style.backgroundColor = '#b6bcca';
  document.getElementById('explore-btn').href = 'https://www.apple.com/';
  document.body.style.backgroundColor = '#b6bcca'
}