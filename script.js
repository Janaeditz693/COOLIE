
javascript
Copy
Edit
function generateImage() {
  const prompt = document.getElementById('promptInput').value.trim();
  if (!prompt) {
    alert('Please enter a prompt first!');
    return;
  }
  alert(`Image generation for: "${prompt}" is starting... (Functionality coming soon!)`);
}
