navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    const cameraSelect = document.getElementById('cameraSelect');
    videoDevices.forEach(device => {
      const option = document.createElement('option');
      option.value = device.deviceId;
      option.text = device.label || `Camera ${cameraSelect.options.length + 1}`;
      cameraSelect.appendChild(option);
    });
  });

function startCamera() {
  const selectedCamera = document.getElementById('cameraSelect').value;
  navigator.mediaDevices.getUserMedia({
    video: {
      deviceId: { exact: selectedCamera },
      width: 1280,
      length: 720
    }
  })
  .then(stream => {
    document.getElementById('vid').srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing the camera:', error);
  });
}

document.getElementById('cameraSelect').addEventListener('change', startCamera);

// Start with the default camera
startCamera();
