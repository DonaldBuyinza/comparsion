let stream;

function startCamera() {
  if (stream) {
    // Stop the current stream if it exists
    stream.getTracks().forEach(track => track.stop());
  }

  const selectedCamera = document.getElementById('cameraSelect').value;
  navigator.mediaDevices.getUserMedia({
    video: {
      deviceId: selectedCamera ? { exact: selectedCamera } : undefined,
      width: 1280,
      length: 720
    }
  })
  .then(newStream => {
    stream = newStream;
    document.getElementById('vid').srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing the camera:', error);
  });
}

document.getElementById('cameraSelect').addEventListener('change', startCamera);

// Start with the default camera
startCamera();
