export const getSizes = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let html = `<h2> Which size would you like? </h2>`;

  for (const size of sizes) {
    html += `<input type="radio" name="size" value="${size.id}" /> ${size.carets} carats`;
  }

  return html;
};
