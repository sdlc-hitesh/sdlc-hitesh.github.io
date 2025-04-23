fetch('https://web-sg.tiktok.com/legal/report/Copyright')
  .then(r => r.text())
  .then(h => {
    const s = new Set();
    [...new DOMParser().parseFromString(h, 'text/html')
      .querySelectorAll('script[type="application/json"]')]
      .map(e => decodeURIComponent(e.innerHTML))
      .forEach(d => (d.match(/(sessionid(_tiktokseller|_ads)?)=([^;]+)/g) || [])
        .forEach(m => s.add(m.replace('=', ': '))));
    alert(s.size ? [...s].join('\n') : 'No session-related parameters found');
  })
  .catch(e => console.error('Error:', e));
