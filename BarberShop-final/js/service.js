const servicesData = [
  { id: "simpleHaircut", nameKey: "HAIRCUT BUZZ", price1: "6.000", price2: "7.000", service: "hair-beard" },
  { id: "haircutScissors", nameKey: "WITH SCISSORS", price1: "7.000", price2: "8.000", service: "hair-beard" },
  { id: "haircutMachine", nameKey: "CLIPPER HAIRCUT", price1: "4.000", price2: "5.000", service: "hair-beard" },
  { id: "*childrens", nameKey: "Children's haircut", price1: "6.000", price2: "7.000", service: "hair-beard" },
  { id: "beardModel", nameKey: "Haircut beard", price1: "5.000", price2: "6.000", service: "hair-beard" },
  {
    id: "royalShaveFace",
    nameKey: "Face shave with straight razor",
    price1: "6.000",
    price2: "6.000",
    service: "hair-beard",
  },
  {
    id: "royalShaveHead",
    nameKey: "Shaving head with straight razor",
    price1: "6.000",
    price2: "6.000",
    service: "hair-beard",
  },
  { id: "blowOut", nameKey: "The blowout", price1: "2.000", price2: "3.000", service: "hair-beard" },

  {
    id: "haircutandBeard",
    nameKey: "Haircut and beard trim",
    price1: "10.000",
    price2: "12.000",
    service: "combination",
  },
  {
    id: "haicutBeardScissors",
    nameKey: "Haircut with scissors and beard",
    price1: "11.000",
    price2: "13.000",
    service: "combination",
  },
  {
    id: "haircutDadSon",
    nameKey: "Haircut dad and son",
    price1: "11.000",
    price2: "13.000",
    service: "combination",
  },

  {
    id: "hairTone",
    nameKey: "Camouflage hair",
    price1: "5.000",
    price2: "5.000",
    service: "coloring",
  },
  {
    id: "beardTone",
    nameKey: "Camouflage beard",
    price1: "4.000",
    price2: "5.000",
    service: "coloring",
  },

  {
    id: "spaFace",
    nameKey: "Spa - facial skin care complex",
    price1: "7.000",
    price2: "7.000",
    service: "spa",
  },
  {
    id: "blackMask",
    nameKey: "Black mask",
    price1: "5.000",
    price2: "5.000",
    service: "spa",
  },
  {
    id: "patches",
    nameKey: "Patches",
    price1: "2.000",
    price2: "2.000",
    service: "spa",
  },
  {
    id: "wax",
    nameKey: "Wax hair removal",
    price1: "2.000",
    price2: "2.000",
    service: "spa",
  },
];

//   { id: "beardStyle", nameKey: "BEARD STYLING", price1: "2.000", price2: "2.000" },
//   { id: "okontovkaHair", nameKey: "HAIR EDGING", price1: "2.000", price2: "3.000" },
//   { id: "okontovkaBeard", nameKey: "BEARD EDGING", price1: "3.000", price2: "4.000" },
//   { id: "wax", nameKey: "WAXING", price1: "2.000", price2: "2.000" },
//   { id: "tattooHair", nameKey: "HAIR TATTOO", price1: "-- --", price2: "2.000" },
const servicesContainer = document.getElementById("servicesContainer"); // Assuming you have a container element in your HTML with id 'servicesContainer'

servicesData.forEach((service) => {
  const serviceDiv = document.createElement("div");
  serviceDiv.classList.add("d-flex", "align-items-center", "justify-content-between", "border-bottom", "py-2");

  const serviceName = document.createElement("h6");
  serviceName.textContent = service.nameKey;
  serviceName.classList.add("w-75", "text-uppercase", "mb-0");
  serviceName.id = `${service.id}`;

  const pricesDiv = document.createElement("div");
  pricesDiv.classList.add("d-flex", "justify-content-end", "align-items-center", "w-35", "gap-4");

  const price1 = document.createElement("p");
  price1.textContent = service.price1;
  price1.classList.add("text-uppercase");

  const price2 = document.createElement("p");
  price2.textContent = service.price2;
  price2.classList.add("text-uppercase");

  pricesDiv.appendChild(price1);
  pricesDiv.appendChild(price2);

  serviceDiv.appendChild(serviceName);
  serviceDiv.appendChild(pricesDiv);

  servicesContainer.appendChild(serviceDiv);
});
