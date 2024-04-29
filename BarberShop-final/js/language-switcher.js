const LANGUAGES = {
  en: { name: "English", flag: "./img/flags/united_kingdom_256.png" },
  ru: { name: "Russian", flag: "./img/flags/russia_256.png" },
  am: { name: "Armenian", flag: "./img/flags/armenia_256.png" },
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

  // Workin Hours
  const workingHours = document.getElementById("working-hours");
  const barberWaiting = document.getElementById("barber-waiting");
  const monday = document.getElementById("monday");
  const tuesday = document.getElementById("tuesday");
  const wednesday = document.getElementById("wednesday");
  const thursday = document.getElementById("thursday");
  const friday = document.getElementById("friday");
  const sat = document.getElementById("sat");
  const sun = document.getElementById("sun");

  const servicesTitle = document.getElementById("services-title");
  const childrens = document.getElementById("childrens");
  const pricePlanTitle = document.getElementById("price-plan-title");
  const haircutandBeard = document.getElementById("haircutandBeard");
  const haicutBeardScissors = document.getElementById("haicutBeardScissors");
  const haircutDadSon = document.getElementById("haircutDadSon");

  const simpleHaircut = document.getElementById("simpleHaircut");
  const haircutMachine = document.getElementById("haircutMachine");
  const haircutScissors = document.getElementById("haircutScissors");
  const beardModel = document.getElementById("beardModel");
  const royalShaveFace = document.getElementById("royalShaveFace");
  const royalShaveHead = document.getElementById("royalShaveHead");
  const hairTone = document.getElementById("hairTone");
  const beardTone = document.getElementById("beardTone");
  const blowOut = document.getElementById("blowOut");
  const spaFace = document.getElementById("spaFace");
  const blackMask = document.getElementById("blackMask");
  const patches = document.getElementById("patches");
  const wax = document.getElementById("wax");

  const bookOnline = document.getElementById("book-button-h6");
  const complex = document.getElementById("complex");
  const getInTouch = document.getElementById("getInTouch");
  const address = document.getElementById("address");

  const translations = {
    en: {
      phoneCallConfirmation: "Do you want to call ",
      // Address
      vardanats: "Vardanants",
      floor_2: "-2nd floor",
      // Working Hours
      workingHours: "Working Hours",
      barberWaiting: "Professional Barbers Are Waiting For You",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      sat: "Saturday",
      sun: "Sunday",

      servicesTitle: "Check Out Our Barber Services And Prices",
      childrens: "Children's haircut",
      pricePlanTitle: "Price & Plan",
      //կոմպլեքս կտրվածքներ
      haircutandBeard: "Haircut and beard trim",
      haicutBeardScissors: "Haircut with scissors and beard",
      haircutDadSon: "HAIRCUT DAD AND SON",
      toneBeardandHair: "HAIR AND BEARD TONING",
      complexHaircutTone: "COMPLEX HAIRCUT AND COMPLEX TONING",
      okontovkaBeardHair: "HAIR AND BEARD EDGING",
      // կտրվածքներ
      simpleHaircut: "HAIRCUT BUZZ",
      haircutMachine: "CLIPPER HAIRCUT",
      haircutScissors: "WITH SCISSORS",
      beardModel: "Haircut beard",
      royalShaveFace: "Face shave with straight razor",
      royalShaveHead: "Shaving head with straight razor",
      blowOut: "The blowout",
      hairTone: "CAMOUFLAGE HAIR",
      beardTone: "CAMOUFLAGE BEARD",

      spaFace: "Spa - facial skin care complex",
      blackMask: "BLACK MASK",
      patches: "PATCHES",
      wax: "WAX HAIR REMOVAL",

      bookOnline: "Book Online Now!",
      unlockStyle: "UNLOCK YOUR TRUE STYLE POTENTIAL WITH LEVEL BARBERSHOP",
      priceList: "Price List",
      complex: "Complex",
      contact: "Contact",
      getInTouch: "GET IN TOUCH",
      address: "ADDRESS",
    },
    ru: {
      phoneCallConfirmation: "Вы хотите позвонить ",
      // Address
      vardanats: "ул. Вардананц",
      floor_2: "этаж -2",
      // Working Hours
      workingHours: "Рабочее время",
      barberWaiting: "Профессиональные барберы ждут Вас",
      monday: "Понедельник",
      tuesday: "Вторник",
      wednesday: "Среда",
      thursday: "Четверг",
      friday: "Пятница",
      sat: "Суббота",
      sun: "Воскресенье",

      servicesTitle: "Ознакомьтесь с нашими услугами и ценами парикмахера",
      childrens: "Детская стрижка",
      pricePlanTitle: "Цены и план",
      // կոմպլեքս կտրվածքներ
      haircutandBeard: "Стрижка + Моделирование бороды", //PRO 10000 TOP  12000
      haicutBeardScissors: "Стрижка ножницами + Моделирование бороды", //PRO 11000  TOP 15000
      haircutDadSon: "СТРИЖКА ПАПА И СЫН", //PRO 11000  TOP 14000
      toneBeardandHair: "ТОНИРОВАНИЕ БОРОДЫ И ВОЛОС", //PRO 8000  TOP 12000
      complexHaircutTone: "КОМПЛЕККС СТРИЖКА И КОМПЛЕКС ТОНИРОВАНИЕ", //PRO 17000  TOP 19000
      okontovkaBeardHair: "ОКАНТОВКА БОРОДЫ И ВОЛОС", //PRO 4000  TOP 6000
      // կտրվածքներ
      simpleHaircut: "Стрижка", //PRO 6000  TOP 8000
      haircutMachine: "СТРИЖКА МАШИНКОЙ", //PRO 4000 TOP 6000
      haircutScissors: "СТРИЖКА НОЖНИЦАМИ", //PRO  7000 TOP 9000
      beardModel: "Моделирование бороды", //PRO  5000 TOP 7000
      royalShaveFace: "Бритье лица опасной бритвой", //PRO 6000  TOP  6000
      royalShaveHead: "Бритье головы опасной бритвой", //PRO 8000 TOP 10000
      hairTone: "Камуфляж волос", //PRO 5000   TOP  7000
      beardTone: "Камуфляж бороды", //PRO 4000  TOP 6000
      blowOut: "УКЛАДКА ВОЛОС", //PRO 2000  TOP 3000
      spaFace: "Spa - комплекс по уходу за кожей лица", //PRO 7000 TOP 7000
      blackMask: "ЧЕРНАЯ МАСКА", //PRO 5000  TOP 5000
      patches: "ПАТЧИ", //PRO 2000  TOP 2000
      wax: "ВОСКОВАЯ депиляция", //PRO 2000 TOP 2000

      bookOnline: "Забронировать Онлайн Сейчас!",
      unlockStyle: "РАСКРОЙТЕ СВОЙ ИСТИННЫЙ ПОТЕНЦИАЛ СТИЛЯ С LEVEL БАРБЕРШОП",
      priceList: "Прайс-лист",
      contact: "Контакт",
      complex: "Комплекс",
      getInTouch: "СВЯЗЫВАТЬСЯ",
      address: "АДРЕС",
    },
    am: {
      phoneCallConfirmation: "Do you want to call ",

      vardanats: "Վարդանանց",
      floor_2: "հարկ -2",
      // Working Hours
      workingHours: "Աշխատանքային ժամեր",
      barberWaiting: "Պրոֆեսիոնալ բարբերները սպասում են Ձեզ",
      monday: "Երկուշաբթի",
      tuesday: "Երեքշաբթի",
      wednesday: "Չորեքշաբթի",
      thursday: "Հինգշաբթի",
      friday: "Ուրբաթ",
      sat: "Շաբաթ",
      sun: "Կիրակի",

      pricePlanTitle: "Գներ և Ծառայություններ",
      servicesTitle: "ԾԱՆՈԹԱՑԵՔ ՄԵՐ ԲԱՐԲԵՐՆԵՐԻ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ԵՒ ԳՆԵՐԻ ՀԵՏ",
      //կոմպլեքս կտրվածքներ
      haircutandBeard: "Կտրվածք + Մորուքի ուղղում",
      haicutBeardScissors: "Կտրվածք մկրատով + Մորուքի ուղղում",
      haircutDadSon: "ԿՏՐՎԱԾՔ ՀԱՅՐ ԵՎ ՈՐԴԻ",
      toneBeardandHair: "ՄԱԶԵՐԻ ԵՎ ՄՈՐՈՒՔԻ ՏՈՆԱՎՈՐՈՒՄ",
      complexHaircutTone: "ԿՈՄՊԼԵՔՍ ԿՏՐՎԱԾՔ ԵՎ ԿՈՄՊԼԵՔՍ ՏՈՆԱՎՈՐՈՒՄ",
      okontovkaBeardHair: "ՄԱԶԵՐԻ ԵՎ ՄՈՐՈՒՔԻ ԵԶՐԱԳԾՈՒՄ",
      // կտրվածքներ
      simpleHaircut: "ԿՏՐՎԱԾՔ",
      haircutMachine: "ԿՏՐՎԱԾՔ ՄԵՔԵՆԱՅՈՎ",
      haircutScissors: "ԿՏՐՎԱԾՔ ՄԿՐԱՏՈՎ",
      childrens: "Մանկական կտրվածք",
      beardModel: "Մորուքի կտրվածք",
      royalShaveFace: "Սափրում ածելիով դեմքի ",
      royalShaveHead: "Սափրում ածելիով գլխի",
      hairTone: "ՄԱԶԵՐԻ ՏՈՆԱՎՈՐՈԻՄ",
      beardTone: "ՄՈՐՈՒՔԻ ՏՈՆԱՎՈՐՈԻՄ",
      blowOut: "ՄԱԶԵՐԻ ՀԱՐԴԱՐՈՒՄ",
      spaFace: "ՍՊԱ - ԴԵՄՔԻ ՀԱՄԱՐ",
      blackMask: "ՍԵՎ ԴԻՄԱԿ",
      patches: "ՊԱՏՉԻ",
      wax: "ՈՍԿՈՎ ՄԱԶԱՀԵՌԱՑՈՒՄ",

      bookOnline: "Ամրագրեք հիմա",
      unlockStyle: "ԲԱՑԱՀԱՅՏԵՔ ՁԵՐ ԻՐԱԿԱՆ ՈՃԻ ՊՈՏԵՆՑԻԱԼԸ LEVEL ԲԱՐԲԵՐՇՈՓԻ ՀԵՏ",
      priceList: "Գնացուցակ",
      contact: "Կապ մեզ հետ",
      complex: "Կոմպլեքս",
      getInTouch: "ԿԱՊ ՀԱՍՏԱՏԵԼ",
      address: "ՀԱՍՑԵ",
    },
  };

  function updateContent(language) {
    const translation = translations[language];

    if (!translation) {
      console.error(`Translation not found for language: ${language}`);
      return;
    }

    if (translation) {
      vardanatsId.forEach((element) => {
        element.textContent = translation.vardanats;
      });
      floor_2Id.forEach((element) => {
        element.textContent = translation.floor_2;
      });

      // Navbar Items
      navWorkingHours.textContent = translation.workingHours;
      navPriceList.textContent = translation.priceList;
      navContact.textContent = translation.contact;

      // Working Hours
      workingHours.textContent = translation.workingHours;
      barberWaiting.textContent = translation.barberWaiting;
      monday.textContent = translation.monday;
      tuesday.textContent = translation.tuesday;
      wednesday.textContent = translation.wednesday;
      thursday.textContent = translation.thursday;
      friday.textContent = translation.friday;
      sun.textContent = translation.sun;
      sat.textContent = translation.sat;

      unlockStyle.textContent = translation.unlockStyle;
      servicesTitle.textContent = translation.servicesTitle;
      childrens.textContent = translation.childrens;
      pricePlanTitle.textContent = translation.pricePlanTitle;
      haircutandBeard.textContent = translation.haircutandBeard;
      haicutBeardScissors.textContent = translation.haicutBeardScissors;
      haircutDadSon.textContent = translation.haircutDadSon;
      simpleHaircut.textContent = translation.simpleHaircut;
      haircutMachine.textContent = translation.haircutMachine;
      haircutScissors.textContent = translation.haircutScissors;
      beardModel.textContent = translation.beardModel;
      royalShaveFace.textContent = translation.royalShaveFace;
      royalShaveHead.textContent = translation.royalShaveHead;
      hairTone.textContent = translation.hairTone;
      beardTone.textContent = translation.beardTone;
      blowOut.textContent = translation.blowOut;
      spaFace.textContent = translation.spaFace;
      blackMask.textContent = translation.blackMask;
      patches.textContent = translation.patches;
      wax.textContent = translation.wax;
      bookOnline.textContent = translation.bookOnline;
      complex.textContent = translation.complex;
      getInTouch.textContent = translation.getInTouch;
      address.textContent = translation.address;
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
