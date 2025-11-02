let btn = document.querySelector("#get-data");

function loadingBtn(button, type, text = "Loading...") {
  button.innerHTML = text;
  btn.disabled = type;
}

btn.addEventListener("click", () => {
  loadingBtn(btn, true, "Getting...");
  getData("https://api.escuelajs.co/api/v1/products");
});

function apiTimeout(timeout = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Timeout, unable to call server in ${timeout}ms`);
    }, timeout);
  });
}
async function getData(url) {
  try {
    let response = await Promise.race([fetch(url), apiTimeout()]);
    console.log(response);
    let data = await response.json();
    console.log(data);
    loadingBtn(btn, false, "Get Data");
  } catch (error) {
    console.log(error);
  }
}

/// chat gpt

// fetchWithTimeout.js

async function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController(); // Used to cancel the request
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort(); // 👈 Cancel the fetch request
  }, timeout);

  try {
    const response = await fetch(url, { ...options, signal });

    // Always clear timeout if request finishes first
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("✅ API Response:", data);
    return data;
  } catch (err) {
    // AbortError occurs when we cancel the fetch
    if (err.name === "AbortError") {
      console.error("❌ Request aborted due to timeout");
    } else {
      console.error("❌ Fetch failed:", err.message);
    }
    throw err;
  }
}

// DEMO
(async () => {
  console.log("Starting API request...");

  const url = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    await fetchWithTimeout(url, {}, 3000); // timeout after 3s
  } catch (err) {
    console.log("Final Catch:", err.message);
  }
})();
