let currentLanguage = 'en';

function setLanguage(newLanguage) {
    const oldLanguageElements = document.getElementsByClassName(currentLanguage);

    for (element of oldLanguageElements) {
        element.style.display = 'none';
    }

    currentLanguage = newLanguage;
    const newLanguageElements = document.getElementsByClassName(currentLanguage);

    for (element of newLanguageElements) {
        element.style.display = 'block';
    }
}

setLanguage('es');