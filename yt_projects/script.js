const carProducts = [
  {
    name: "Red Sports Car",
    desc: "High-performance red sports car designed for speed.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Luxury Black Sedan",
    desc: "Premium black sedan with luxury leather interior.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80",
    price: "4000000"
  },
  {
    name: "White Family SUV",
    desc: "Spacious SUV ideal for long family trips.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    price: "6000000"
  },
  {
    name: "Blue Sports Coupe",
    desc: "Aerodynamic blue coupe built for performance.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    price: "7000000"
  },
  {
    name: "Electric Car",
    desc: "Modern electric vehicle with eco-friendly design.",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
    price: "1000000"
  },
  {
    name: "Vintage Classic",
    desc: "Retro vintage car with chrome details.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    price: "2000000"
  },
  {
    name: "Yellow Convertible",
    desc: "Stylish yellow convertible for open-top driving.",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    price: "9000000"
  },
  {
    name: "SUV Off-Road",
    desc: "Powerful SUV built for off-road terrain.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    price: "8000000"
  },
  {
    name: "Black Sports Car",
    desc: "Aggressive black sports machine with turbo engine.",
    image: "https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Red Hatchback",
    desc: "Compact urban hatchback with great fuel efficiency.",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Luxury White Coupe",
    desc: "Premium white coupe with sporty looks.",
    image: "https://images.unsplash.com/photo-1485463611416-67467d09e61b?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Black SUV",
    desc: "Bold black SUV with rugged design.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b48b5de9?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Race Track Car",
    desc: "Car designed for high-speed track racing.",
    image: "https://images.unsplash.com/photo-1518552781961-08ed2b5a76af?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Pickup Truck",
    desc: "Strong pickup truck with large cargo space.",
    image: "https://images.unsplash.com/photo-1597009591506-0e8a07f657df?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  },
  {
    name: "Silver Crossover",
    desc: "Balanced crossover blending comfort and utility.",
    image: "https://images.unsplash.com/photo-1621135802920-133df55f7f29?auto=format&fit=crop&w=1200&q=80",
    price: "5000000"
  }
];

const topCars = [
  {
    name: "Lamborghini Aventador",
    price: "₹5.10 Crore",
    desc: "A V12-powered Italian supercar known for extreme performance and aggressive styling.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Ferrari 488 GTB",
    price: "₹3.90 Crore",
    desc: "Twin-turbo V8 Ferrari famous for precision handling and breathtaking acceleration.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Porsche 911 Turbo S",
    price: "₹3.10 Crore",
    desc: "Iconic German sports car offering unmatched balance, speed, and daily usability.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Mercedes AMG GT",
    price: "₹2.70 Crore",
    desc: "A front-engine powerhouse from AMG, mixing luxury with track-capable performance.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Audi R8 V10 Plus",
    price: "₹2.50 Crore",
    desc: "Naturally aspirated V10 supercar known for comfort + supercar-level thrill.",
    image: "https://images.unsplash.com/photo-1518552781961-08ed2b5a76af?auto=format&fit=crop&w=1200&q=80"
  }
];


function showProducts() {
  let crs = "";
  carProducts.forEach(function (val) {
    crs += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img class="w-full h-full object-cover"
                            src="${val.image}"
                            alt="">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${val.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20 text-wrap">${val.desc}</h3>
                            <h4 class="font-semibold mt-2">₹ ${val.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`

    document.querySelector('.products').innerHTML = crs;

  });
};

function topProducts() {
  let crs = "";
  topCars.forEach((val) => {
    crs += `<div class="popular bg-white p-2 rounded-2xl text-wrap flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${val.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${val.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${val.desc}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${val.price}</h4>
                    </div>
                </div>`
    document.querySelector('.populars').innerHTML=crs;

  });

}


topProducts();
showProducts();