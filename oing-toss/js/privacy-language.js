const requested = new URLSearchParams(location.search).get('lang');
const useEnglish = requested === 'en'
  || (requested !== 'ko' && !navigator.language.toLowerCase().startsWith('ko'));
document.documentElement.lang = useEnglish ? 'en' : 'ko';
document.title = useEnglish ? 'Privacy Policy — OING' : '개인정보 처리방침 — 오잉';
document.querySelector('#policy-ko').hidden = useEnglish;
document.querySelector('#policy-en').hidden = !useEnglish;
