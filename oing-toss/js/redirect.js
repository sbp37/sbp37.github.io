// Fixed destination only; retain old challenge (?vs=), language and fragments.
if (location.pathname === '/oing-toss/' || location.pathname === '/oing-toss/index.html') {
  location.replace('https://new-oing-toss.web.app/' + location.search + location.hash);
}
