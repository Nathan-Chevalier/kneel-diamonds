export const getMetals = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let html = `<h2> Which type of metal would you like?</h2>`;

  for (const metal of metals) {
    html += `<input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}`;
  }

  return html;
};
