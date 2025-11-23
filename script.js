const data = [

  { name: "Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60" },
  { name: "Forest", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60" },
  { name: "City", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60" },
  { name: "Car", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60" },
  { name: "Cat", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&auto=format&fit=crop&q=60" },
  { name: "Dog", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=60" },
  { name: "Food", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60" },
  { name: "Coding", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60" },
  { name: "Space", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=60" },
  { name: "Sunset", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60" },

  { name: "Desert", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60" },
  { name: "Bridge", image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600&auto=format&fit=crop&q=60" },
  { name: "Bike", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop&q=60" },
  { name: "Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60" },
  { name: "Burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60" },
  { name: "Pasta", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60" },


  { name: "Galaxy", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&auto=format&fit=crop&q=60" },
  { name: "Ocean", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60" },
  { name: "Autumn", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60" },
  { name: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60" },
  { name: "Laptop Desk", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60" },
  { name: "Architecture", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60" }
];

function showImages() {
  let count = "";
  data.forEach(obj => {
    count += `
      <div class="box">
        <img class="cursor-pointer" src="${obj.image}">
        <div class="caption">${obj.name}</div>
      </div>`;
  });
  document.querySelector('.pin_container').innerHTML = count;
};

function searchImages() {
  let val = document.querySelector('#search');


  val.addEventListener("focus", () => {
    document.querySelector('.overlay').style.display = "block";
  });
  val.addEventListener("blur", () => {
    document.querySelector('.overlay').style.display = "none";
  })
  val.addEventListener("input", () => {
    const filterArray = data.filter(obj => obj.name.toLocaleLowerCase().startsWith(val.value));
    var clutter = "";
    filterArray.forEach(function (obj) {
      clutter += ` <div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`
    });
    document.querySelector(".searchdata").style.display="block";
    document.querySelector(".searchdata").innerHTML=clutter;

  })
};

searchImages();

showImages();
