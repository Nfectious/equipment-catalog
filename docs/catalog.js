const machines = [
  { model: "R319", weight: "850kg", size: "2.8x1.1x2.3m", price: "$3,380" },
  { model: "Caterpillar 1.6T", weight: "1600kg", size: "2.8x1.4x2.3m", price: "$6,800" }
];

window.onload = () => {
  const container = document.getElementById("catalog");
  machines.forEach(machine => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${machine.model}</h2><p>Weight: ${machine.weight}</p><p>Size: ${machine.size}</p><p>Price: ${machine.price}</p>`;
    container.appendChild(div);
  });
};