
// weather
const selectW = document.getElementById('wether-choice');
const para = document.querySelector("p");
  

selectW.addEventListener("change", setWeather);

function setWeather() {

  const info = selectW.value;

switch (info) {
case "Sunny":
para.textContent ="It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
break;

case "Rainy":
para.textContent =  "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
break;

case "Snowing":
para.textContent =  "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
break;

case "Overcast":
para.textContent =   "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
break;
default: 
para.textContent = "";
}
}














// Calendar
const Select = document.getElementById('theme');
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

Select.addEventListener("change", () => {
  const choice = Select.value;
  let day = 31;
  if (choice == "February") {
    day = 28;
  }
  else if (choice == "Appril" || choice == "June" || choice == 'September' || choice == 'November') {
    day = 30;
  }
  

  creatCalendar( day, choice);
});


function creatCalendar(day, choice) {
  list.innerHTML = "";
  h1.textContent = choice;
  for (let i = 1; i<=day; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
creatCalendar( 31, "January");








let shoppingDone = true;
let childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  
  console.log("hjjhhhhhhhh");
  
} else {
  childsAllowance = 5;
}

console.log(2 + 2);