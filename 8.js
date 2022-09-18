let toRemoveLanguages = [];
let languages = document.querySelector("#SIvCob").children;
for (i = 0; i < languages.length; i++) {
  if (i % 2 == 0) {
    toRemoveLanguages.push(languages[i].innerText);
  }
}
for (let removeLang of toRemoveLanguages) {
  for (let lang of languages) {
    if (lang.innerText == removeLang) {
      lang.remove();
    }
  }
}
