navigator.mediaDevices.getUserMedia({
  video: {
    facingMode: 'user', // Access the user (front) camera
    width: 1280,
    height: 720
  }
})
.then(stream => {
  document.getElementById('vid').srcObject = stream;
})
.catch(error => {
  console.error('Error accessing the camera:', error);
});
