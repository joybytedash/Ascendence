function randomStat(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cities = [
  "Houston", "New York City", "Los Angeles", "Chicago", "Atlanta",
  "Tokyo", "Osaka", "Kyoto", "Sapporo", "Fukuoka",
  "São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Recife",
  "Paris", "Lyon", "Marseille", "Toulouse", "Nice",
  "Lagos", "Abuja", "Ibadan", "Port Harcourt", "Kano",
  "Mumbai", "Delhi", "Bangalore", "Kolkata", "Hyderabad",
  "Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne",
  "Seoul", "Busan", "Incheon", "Daegu", "Daejeon",
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"
];

const birthplace = cities[Math.floor(Math.random() * cities.length)];

let stats = {
  happiness: randomStat(),
  health: randomStat(1, 100),
  looks: randomStat(),
  curiosity: randomStat(),
  empathy: randomStat(),
  risk: randomStat(),
  fame: randomStat()
};

function updateStats() {
  document.getElementById("stat-happiness").textContent = stats.happiness;
  document.getElementById("stat-health").textContent = stats.health;
  document.getElementById("stat-looks").textContent = stats.looks;
  document.getElementById("stat-curiosity").textContent = stats.curiosity;
  document.getElementById("stat-empathy").textContent = stats.empathy;
  document.getElementById("stat-risk").textContent = stats.risk;
  document.getElementById("stat-fame").textContent = stats.fame;
}

function startGame() {
  showEvent(`You’re born in ${birthplace}. Your family is middle class. What kind of child will you be?`, [
    {
      text: "Curious and kind",
      effect: () => {
        stats.curiosity += 10;
        stats.empathy += 10;
        stats.happiness += 5;
        nextEvent();
      }
    },
    {
      text: "Bold and wild",
      effect: () => {
        stats.risk += 15;
        stats.health = Math.max(stats.health - 5, 1);
        stats.happiness += 10;
        nextEvent();
      }
    },
    {
      text: "Quiet and observant",
      effect: () => {
        stats.curiosity += 15;
        stats.empathy += 5;
        stats.fame = Math.max(stats.fame - 5, 0);
        nextEvent();
      }
    }
  ]);
}

function showEvent(text, choices) {
  document.getElementById("event-text").textContent = text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      choice.effect();
      updateStats();
    };
    choicesDiv.appendChild(btn);
  });
}

function nextEvent() {
  showEvent("You’re starting school. What will you focus on?", [
    {
      text: "Science and math",
      effect: () => {
        stats.curiosity += 10;
        stats.health = Math.max(stats.health - 5, 1);
      }
    },
    {
      text: "Art and music",
      effect: () => {
        stats.fame += 10;
        stats.happiness += 5;
      }
    },
    {
      text: "Sports and fitness",
      effect: () => {
        stats.health += 10;
        stats.risk += 5;
      }
    }
  ]);
}

updateStats();
