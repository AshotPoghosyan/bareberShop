const userLanguage = localStorage.getItem("userLanguage") || "ru";

document.addEventListener("DOMContentLoaded", function () {
  const languageButtons = document.querySelectorAll(".language-button");
  const languageDropdown = document.querySelector(".language-dropdown");
  const selectedFlagImage = document.getElementById("selected-flag-image");

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
  // const royalShave = document.getElementById("royalShave");
  // const toneBeardandHair = document.getElementById("toneBeardandHair");
  // const complexHaircutTone = document.getElementById("complexHaircutTone");
  // const okontovkaBeardHair = document.getElementById("okontovkaBeardHair");
  // const beardStyle = document.getElementById("beardStyle");
  // const okontovkaHair = document.getElementById("okontovkaHair");
  // const okontovkaBeard = document.getElementById("okontovkaBeard");
  // const tattooHair = document.getElementById("tattooHair");

  // const priceList = document.getElementById("priceList");
  const bookOnline = document.getElementById("book-button-h6");
  // const contact = document.getElementById("contact");
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
      haircutandBeard: "HAIRCUT AND BEARD TRIM",
      haicutBeardScissors: "HAIRCUT WITH SCISSORS AND BEARD TRIM",
      royalShave: "ROYAL SHAVE OF THE FACE AND HEAD WITH A STRAIGHT RAZOR",
      haircutDadSon: "HAIRCUT DAD AND SON (FAMILY)",
      toneBeardandHair: "HAIR AND BEARD TONING",
      complexHaircutTone: "COMPLEX HAIRCUT AND COMPLEX TONING",
      okontovkaBeardHair: "HAIR AND BEARD EDGING",
      // կտրվածքներ
      simpleHaircut: "HAIRCUT BUZZ",
      haircutMachine: "CLIPPER HAIRCUT",
      haircutScissors: "WITH SCISSORS",
      beardModel: "BEARD STYLING",
      royalShaveFace: "ROYAL SHAVE OF THE FACE WITH A STRAIGHT RAZOR",
      royalShaveHead: "ROYAL SHAVE OF THE HEAD WITH A STRAIGHT RAZOR",
      hairTone: "CAMOUFLAGE HAIR",
      beardTone: "CAMOUFLAGE BEARD",
      blowOut: "HAIRCUT STYLING",
      beardStyle: "BEARD STYLING",
      okontovkaHair: "HAIR EDGING",
      okontovkaBeard: "BEARD EDGING",
      spaFace: "SPA FACIAL SKIN CARE",
      blackMask: "BLACK MASK",
      patches: "PATCHES",
      wax: "WAX HAIR REMOVAL",
      tattooHair: "HAIR TATTOO",

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
      haircutandBeard: "СТРИЖКА И МОДЕЛИРОВАНИЕ БОРОДЫ", //PRO 10000 TOP  14000
      haicutBeardScissors: "СТРИЖКА НОЖНИЦАМИ И МОДЕЛИРОВАНИЕ БОРОДЫ", //PRO 11000  TOP 15000
      royalShave: "КОРОЛЕВСКОЕ БРИТЬЕ ЛИЦА И ГОЛОВЫ ОПАСНОЙ БРИТВОЙ", //PRO 13000 TOP 15000
      haircutDadSon: "СТРИЖКА ПАПА И СЫН(СЕМЕЙНАЯ)", //PRO 11000  TOP 14000
      toneBeardandHair: "ТОНИРОВАНИЕ БОРОДЫ И ВОЛОС", //PRO 8000  TOP 12000
      complexHaircutTone: "КОМПЛЕККС СТРИЖКА И КОМПЛЕКС ТОНИРОВАНИЕ", //PRO 17000  TOP 19000
      okontovkaBeardHair: "ОКАНТОВКА БОРОДЫ И ВОЛОС", //PRO 4000  TOP 6000
      // կտրվածքներ
      simpleHaircut: "СТРИЖКА ВОЛОС", //PRO 6000  TOP 8000
      haircutMachine: "СТРИЖКА ВОЛОС МАШИНКОЙ", //PRO 4000 TOP 6000
      haircutScissors: "СТРИЖКА НОЖНИЦАМИ", //PRO  7000 TOP 9000
      beardModel: "МОДЕЛИРОВАНИЕ БОРОДЫ", //PRO  5000 TOP 7000
      royalShaveFace: "КОРОЛЕВСКОЕ БРИТЬЕ ЛИЦА ОПАСНОЙ БРИТВОЙ", //PRO 7000  TOP  9000
      royalShaveHead: "КОРОЛЕВСКОЕ БРИТЬЕ ГОЛОВЫ ОПАСНОЙ БРИТВОЙ", //PRO 8000 TOP 10000
      hairTone: "ТОНИРОВАНИЕ ВОЛОС", //PRO 5000   TOP  7000
      beardTone: "ТОНИРОВАНИЕ БОРОДЫ", //PRO 4000  TOP 6000
      blowOut: "УКЛАДКА ВОЛОС", //PRO 2000  TOP 3000
      beardStyle: "УКЛАДКА БОРОДЫ", //PRO 2000  TOP 2000
      okontovkaHair: "ОКАНТОВКА ВОЛОС", //PRO  2000 TOP 3000
      okontovkaBeard: "ОКАНТОВКА БОРОДЫ", // PRO 3000  TOP  4000
      spaFace: "СПА ДЛЯ ЛИЦА", //PRO 7000 TOP 7000
      blackMask: "ЧЕРНАЯ МАСКА", //PRO 5000  TOP 5000
      patches: "ПАТЧИ", //PRO 2000  TOP 2000
      wax: "ВОСКОВАЯ ЭПИЛЯЦИЯ", //PRO 2000 TOP 2000
      tattooHair: "РИСУНОК НА ВОЛОСАХ", //2000 MIAYN PRO

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
      childrens: "Մանկական կտրվածք",
      //կոմպլեքս կտրվածքներ
      haircutandBeard: "ԿՏՐՎԱԾՔ ԵՎ ՄՈՐՈՒՔԻ ՈՒՂՂՈՒՄ",
      haicutBeardScissors: "ԿՏՐՎԱԾՔ ՄԿՐԱՏՈՎ ԵՎ ՄՈՐՈՒՔԻ ՄՈԴԵԼԱՎՈՐՈՒՄ",
      royalShave: "ԹԱԳԱՎՈՐԱԿԱՆ ՍԱՓՐՈՒՄ ԱԾԵԼԻՈՎ ԳԼԽԻ ԵՎ ԴԵՄՔԻ",
      haircutDadSon: "ԿՏՐՎԱԾՔ ՀԱՅՐ ԵՎ ՈՐԴԻ (ԸՆՏԱՆԻՔ)",
      toneBeardandHair: "ՄԱԶԵՐԻ ԵՎ ՄՈՐՈՒՔԻ ՏՈՆԱՎՈՐՈՒՄ",
      complexHaircutTone: "ԿՈՄՊԼԵՔՍ ԿՏՐՎԱԾՔ ԵՎ ԿՈՄՊԼԵՔՍ ՏՈՆԱՎՈՐՈՒՄ",
      okontovkaBeardHair: "ՄԱԶԵՐԻ ԵՎ ՄՈՐՈՒՔԻ ԵԶՐԱԳԾՈՒՄ",
      // կտրվածքներ
      simpleHaircut: "ԿՏՐՎԱԾՔ",
      haircutMachine: "ԿՏՐՎԱԾՔ ՄԵՔԵՆԱՅՈՎ",
      haircutScissors: "ԿՏՐՎԱԾՔ ՄԿՐԱՏՈՎ",
      beardModel: "ՄՈՐՈՒՔԻ ՄՈԴԵԼԱՎՈՐՈԻՄ",
      royalShaveFace: "ԹԱԳԱՎՈՐԱԿԱՆ ՍԱՓՐՈՒՄ ԱԾԵԼԻՈՎ ԴԵՄՔԻ",
      royalShaveHead: "ԹԱԳԱՎՈՐԱԿԱՆ ՍԱՓՐՈՒՄ ԱԾԵԼԻՈՎ ԳԼԽԻ",
      hairTone: "ՄԱԶԵՐԻ ՏՈՆԱՎՈՐՈԻՄ",
      beardTone: "ՄՈՐՈՒՔԻ ՏՈՆԱՎՈՐՈԻՄ",
      blowOut: "ՄԱԶԵՐԻ ՀԱՐԴԱՐՈՒՄ",
      beardStyle: "ՄՈՐՈՒՔԻ ՀԱՐԴԱՐՈՒՄ",
      okontovkaHair: "ՄԱԶԵՐԻ ԵԶՐԱԳԾՈՒՄ",
      okontovkaBeard: "ՄՈՐՈՒՔԻ ԵԶՐԱԳԾՈՒՄ",
      spaFace: "ՍՊԱ ԴԵՄՔԻ ՀԱՄԱՐ",
      blackMask: "ՍԵՎ ԴԻՄԱԿ",
      patches: "ՊԱՏՉԻ",
      wax: "ՈՍԿՈՎ ՄԱԶԱՀԵՌԱՑՈՒՄ",
      tattooHair: "ՄԱԶԵՐԻ ԴԱՋՎԱԾՔ",

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
      // royalShave.textContent = translation.royalShave;
      // toneBeardandHair.textContent = translation.toneBeardandHair;
      // complexHaircutTone.textContent = translation.complexHaircutTone;
      // okontovkaBeardHair.textContent = translation.okontovkaBeardHair;
      // beardStyle.textContent = translation.beardStyle;
      // okontovkaHair.textContent = translation.okontovkaHair;
      // okontovkaBeard.textContent = translation.okontovkaBeard;
      // tattooHair.textContent = translation.tattooHair;
    }

    localStorage.setItem("userLanguage", language);
  }

  function updateFlagImage(language) {
    switch (language) {
      case "en":
        selectedFlagImage.src = "./img/flags/united_kingdom_256.png";
        selectedFlagImage.alt = "United Kingdom";
        break;
      case "ru":
        selectedFlagImage.src = "./img/flags/russia_256.png";
        selectedFlagImage.alt = "Russian";
        break;
      case "am":
        selectedFlagImage.src = "./img/flags/armenia_256.png";
        selectedFlagImage.alt = "Armenia";
        break;
    }
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

  updateContent(userLanguage);
  updateFlagImage(userLanguage);
  updateDropdown();
});
