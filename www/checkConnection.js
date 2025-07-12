const REMOTE_URL = 'https://www.system.venus-lab.net';

async function isOnline() {
  try {
    const res = await fetch(`${REMOTE_URL}/ping.php`, { cache: 'no-store' });
    return res.ok;
  } catch (err) {
    return false;
  }
}

isOnline().then(online => {
  if (online) {
    // 🔁 Redirect to the live website inside the WebView
    window.location.href = REMOTE_URL;
  } else {
    // 📴 Stay on local offline interface (this file)
    document.body.innerHTML = `
      <h2>You are offline</h2>
      <p>This app requires internet connection.</p>
    `;
  }
});