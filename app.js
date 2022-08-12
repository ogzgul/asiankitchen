const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

document.addEventListener("DOMContentLoaded", function (event) {
  //we ready baby
  console.log("fhfd");
  buttonInit();
  allDOM();
  allButton();
});

function buttonInit() {
  console.log("çalıştı");
  let btnDOM = document.querySelector(".btn-container");
  let buttonDOM = document.createElement("div");
  buttonDOM.innerHTML = `<button class="btn btn-outline-dark btn-item" data-id="All">All</button>
  <button class="btn btn-outline-dark btn-item" data-id="Korea">Korea</button>
  <button class="btn btn-outline-dark btn-item" data-id="Japan">Japan</button>
  <button class="btn btn-outline-dark btn-item" data-id="China">China</button>
  `;
  btnDOM.append(buttonDOM);
}

function allDOM(ggg) {
  let divDOM = document.querySelector(".section-center");
  console.log(menu.filter((item) => item.category == ggg || !ggg));
  let menuList = menu
    .filter((item) => item.category == ggg || !ggg)
    .map((item) => {
      let secDOM = document.createElement("div");
      let menuInfoDOM = document.createElement("div");
      let menuTıtleDOM = document.createElement("div");

      secDOM.classList.add("menu-items", "col-lg-6", "col-sm-12");
      let img1 = document.createElement("img");
      img1.src = item.img;
      img1.height = "100";
      img1.width = "100";
      menuInfoDOM.classList.add("menu-info");
      menuTıtleDOM.classList.add("menu-title");
      let hDOM = document.createElement("h4");

      hDOM.innerText = item.title;

      let h4DOM = document.createElement("h4");
      h4DOM.classList.add("price");
      h4DOM.innerText = item.price;

      let textDOM = document.createElement("div");
      textDOM.classList.add("menu-text");
      textDOM.innerText = item.desc;

      secDOM.append(img1);
      secDOM.append(menuInfoDOM);
      menuInfoDOM.append(menuTıtleDOM);
      menuTıtleDOM.append(hDOM);
      menuTıtleDOM.append(h4DOM);
      menuInfoDOM.append(textDOM);

      divDOM.append(secDOM);
    });
}

function allButton() {
  let all = document.querySelector('[data-id="All"]');
  console.log("geldi");
  all.addEventListener("click", () => {
    document.querySelector(".section-center").innerHTML = "";
    allDOM();
  });

  let korea = document.querySelector('[data-id="Korea"]');
  korea.addEventListener("click", () => {
    document.querySelector(".section-center").innerHTML = "";

    allDOM("Korea");
  });

  let Japan = document.querySelector('[data-id="Japan"]');
  Japan.addEventListener("click", () => {
    document.querySelector(".section-center").innerHTML = "";

    allDOM("Japan");
  });

  let China = document.querySelector('[data-id="China"]');
  China.addEventListener("click", () => {
    document.querySelector(".section-center").innerHTML = "";

    allDOM("China");
  });
}
