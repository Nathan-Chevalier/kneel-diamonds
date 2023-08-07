export const getMetals = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let html = `<h2> Which type of metal would you like?</h2>`;

  const metalArray = metals.map((metal) => {
    return `<div>
                <input type="radio" name="metal" value="${metal.id}" />
                ${metal.metal}
                </div>`;
  });

  html += metalArray.join("");

  //   for (const metal of metals) {
  //     html += `<div>
  //             <input type="radio" name="metal" value="${metal.id}" />
  //             ${metal.metal}
  //             </div>`;
  //   }

  return html;
};
