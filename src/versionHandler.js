const versions = ['v1.0.0', 'v1.0.1'];

const defaultVersion = versions[0];

const changeVersionBtn = document.getElementById('cv-cv');
changeVersionBtn.addEventListener('click', () => {
  
  let newVersion = '';
  if (localStorage.getItem('version') === 'v1.0.0') {
    newVersion = 'v1.0.1';
  } else {
    newVersion = 'v1.0.0';
  }
  
  const searchParams = new URLSearchParams();
  searchParams.append('v', newVersion);
  window.location = window.location.origin + '?' + searchParams.toString();
});

document.addEventListener('DOMContentLoaded', () => {
  let version = '';

  if (window.location.search !== '') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('v') && versions.includes(urlParams.get('v'))) {
      version = urlParams.get('v');
    }
  } else {
    version = defaultVersion;
  }

  localStorage.setItem('version', version);

  const script = document.createElement('script');
  script.src = `/build/${version}/app.js`;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `/build/${version}/app.css`;

  document.head.appendChild(script);
  document.head.appendChild(link);
});
