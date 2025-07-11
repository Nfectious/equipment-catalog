const machines = [
  { model: 'R10', weight: '1000kg', size: '1 Ton', price: '$9,999', image: '01_RippaR10 - Copy.jpg' },
  { model: 'R13', weight: '1300kg', size: '1.3 Ton', price: '$12,500', image: '02_RippaR13 - Copy.png' },
  { model: 'R13 2', weight: '1300kg', size: '1.5 Ton', price: '$12,449', image: '02_RippaR13_2.png' },
  { model: 'R18', weight: '1800kg', size: '1.8 Ton', price: '$18,799', image: '04_RippaR18.jpg' },
  { model: 'R22', weight: '2200kg', size: '2.5 Ton', price: '$21,499', image: '05RippaR22.JPG' },
  { model: 'R32', weight: '3200kg', size: '3 Ton', price: '$24,899', image: '06-RippaR32.jpg' },
  { model: 'R82', weight: '8200kg', size: '9 Ton', price: '$49,999', image: '07_RippaR82.jpg' },
  { model: 'Caterpillar 310', weight: '10000kg', size: '6.0x2.5x3.0m', price: '$59,999', image: 'Cat310_Excavator_02.jpg' },
  { model: 'Andeli MIG-250ME LED 110V/220', weight: 'N/A', size: 'IGBT MIG Welder', price: '$199', image: 'welder.jpg' },
  { model: '52cc Chainsaw Gasoline', weight: 'N/A', size: '20in', price: '$189', image: '52cc.jpg' },
  { model: 'Exclusive 4K Imfrared', weight: 'N/A', size: 'Thermal and Night Vision', price: '$699', image: 'Thremal.jpg' }];

const container = document.getElementById("catalog");

machines.forEach(machine => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-xl shadow p-4 flex flex-col items-center";
  card.innerHTML = `
    <img src="images/${machine.image}" alt="${machine.model}" class="w-full h-48 object-contain mb-4">
    <h2 class="text-xl font-semibold mb-2">Model: ${machine.model}</h2>
    <p><strong>Weight:</strong> ${machine.weight}</p>
    <p><strong>Size:</strong> ${machine.size}</p>
    <p class="mt-2 text-lg font-bold text-green-700">${machine.price}</p>
    <form action="https://formspree.io/f/xanjrjnd" method="POST" class="w-full">
      <input type="hidden" name="model" value="${machine.model}">
      <input type="hidden" name="price" value="${machine.price}">
      <input type="hidden" name="source" value="Excavator Web Catalog">
      <input type="email" name="email" placeholder="Your Email" required class="w-full p-2 border border-gray-300 rounded mb-2">
      <textarea name="message" placeholder="Request details or questions" class="w-full p-2 border border-gray-300 rounded mb-2"></textarea>
      <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        Request Info / Invoice
      </button>
    </form>
  `;
  container.appendChild(card);
});

fetch("https://discord.com/api/webhooks/1375755197825159228/qCPcxzzrDgM0joG3V0KDWckhrA0eKgjHpgwT3aQpPxVSmzKclVXHyyobvxV-V-6I81Iq", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ content: "New visitor opened the Excavator Catalog site." })
});
