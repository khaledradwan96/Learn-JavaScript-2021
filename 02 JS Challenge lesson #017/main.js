let titleName = "Elzero",
  descriptionValue = "Elzero Web School",
  dateTime = "25/10";

let card = `
<div class="card">
<h3>Hello ${titleName}</h3>
<p>${descriptionValue}</p>
<span>${dateTime}</span>
</div>
`;

document.write(card.repeat(4));
