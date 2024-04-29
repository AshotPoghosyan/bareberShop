import translations from "./translation.js";

const LANGUAGES = {
  en: { name: "English", flag: "./img/flags/united_kingdom_256.png" },
  ru: { name: "Russian", flag: "./img/flags/russia_256.png" },
  am: { name: "Armenian", flag: "./img/flags/armenia_256.png" },
};

const SELECTORS = {
  unlockStyle: "unlockStyle",

  // Workin Hours
  workingHours: "working-hours",
  barberWaiting: "barber-waiting",
  monday: "monday",
  tuesday: "tuesday",
  wednesday: "wednesday",
  thursday: "thursday",
  friday: "friday",
  sat: "sat",
  sun: "sun",
  servicesTitle: "services-title",
  childrens: "childrens",
  pricePlanTitle: "price-plan-title",
  haircutandBeard: "haircutandBeard",
  haicutBeardScissors: "haicutBeardScissors",
  haircutDadSon: "haircutDadSon",

  simpleHaircut: "simpleHaircut",
  haircutMachine: "haircutMachine",
  haircutScissors: "haircutScissors",
  beardModel: "beardModel",
  royalShaveFace: "royalShaveFace",
  royalShaveHead: "royalShaveHead",
  hairTone: "hairTone",
  beardTone: "beardTone",
  blowOut: "blowOut",
  spaFace: "spaFace",
  blackMask: "blackMask",
  patches: "patches",
  wax: "wax",

  bookOnline: "book-button-h6",
  complex: "complex",
  getInTouch: "getInTouch",
  address: "address",
};

document.addEventListener("DOMContentLoaded", function () {
  const languageButtons = document.querySelectorAll(".language-button");
  const languageDropdown = document.querySelector(".language-dropdown");

  // Address
  const vardanatsId = document.querySelectorAll("#vardanats");
  const floor_2Id = document.querySelectorAll("#floor_2");
  const navWorkingHours = document.getElementById("nav-working-hours");
  const navContact = document.getElementById("nav-contact");
  const navPriceList = document.getElementById("nav-price-list");

  function updateContent(language) {
    const translation = translations[language];

    if (!translation) {
      console.error(`Translation not found for language: ${language}`);
      return;
    }
    if (translation) {
      Object.keys(SELECTORS).forEach((selectorKey) => {
        vardanatsId.forEach((element) => {
          element.textContent = translation.vardanats;
        });
        floor_2Id.forEach((element) => {
          element.textContent = translation.floor_2;
        });
        navWorkingHours.textContent = translation.workingHours;
        navPriceList.textContent = translation.priceList;
        navContact.textContent = translation.contact;

        const element = document.getElementById(SELECTORS[selectorKey]);
        element.textContent = translation[selectorKey];
      });
    }

    localStorage.setItem("userLanguage", language);
  }

  function updateFlagImage(language) {
    const languageData = LANGUAGES[language];

    const selectedFlagImage = document.getElementById("selected-flag-image");
    selectedFlagImage.src = languageData.flag;
    selectedFlagImage.alt = languageData.name;

    selectedFlagImage.setAttribute("data-lang", language);
  }

  function updateDropdown() {
    const selectedLanguage = localStorage.getItem("userLanguage") || "ru";

    languageButtons.forEach((button) => {
      const langCode = button.getAttribute("data-lang");

      if (langCode === selectedLanguage) {
        button.style.display = "none";
      } else {
        button.style.display = "block";
      }
    });
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      languageDropdown.classList.toggle("active");
    });
  });

  languageDropdown.addEventListener("click", (e) => {
    const selectedLanguage = e.target.getAttribute("data-lang");
    languageButtons.forEach((button) => {
      button.style.display = "block";
    });

    updateContent(selectedLanguage);
    updateFlagImage(selectedLanguage);
    updateDropdown();

    languageDropdown.classList.remove("active");
  });

  const userLanguage = localStorage.getItem("userLanguage") || "ru";
  updateContent(userLanguage);
  updateFlagImage(userLanguage);
  updateDropdown();
});
