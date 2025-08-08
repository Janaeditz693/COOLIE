function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");
  
  if (!prompt) {
    alert("Please enter a prompt!");
    return;
  }

  result.innerHTML = `<p>Generating image for: <strong>${prompt}</strong></p>
                      <p><em>(This is a static mockup - connect backend API to generate real images)</em></p>
                      <img src="https://placehold.co/600x400?text=${encodeURIComponent(prompt)}" alt="Generated Image" />`;
}
