function googleTranslateElementInit() {
  console.log('googleTranslateElementInit called');
  new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'en,es',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

function translatePage(language) {
  console.log('translatePage called with language:', language);
  var translateDropdown = document.querySelector(".goog-te-combo");
  if (translateDropdown) {
      translateDropdown.value = language;
      translateDropdown.dispatchEvent(new Event("change"));
      console.log('Language changed to', language);
  } else {
      console.error('Translation dropdown not found');
  }
}
