// Replace this with your Render backend URL
const backendURL = "https://airbnb-6-u57l.onrender.com";

async function checkBackend() {
  try {
    const response = await fetch(backendURL, { method: "GET" });
    if (response.ok) {
      // Redirect once backend is awake
      window.location.href = backendURL;
    } else {
      console.log("Server not ready yet...");
      setTimeout(checkBackend, 4000);
    }
  } catch (err) {
    console.log("Server still waking up...");
    setTimeout(checkBackend, 4000); // retry every 4s
  }
}

checkBackend();
