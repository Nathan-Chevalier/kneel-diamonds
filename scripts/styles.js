export const getStyles = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let html = `<h2> Which style would you like?</h2>`;

  const styleArray = styles.map((style) => {
    return `<div>
                <input type="radio" name="style" value="${style.id}" />
                ${style.style}
                </div>`;
  });

  html += styleArray.join("");
  //   for (const style of styles) {
  //     html += `<div>
  //         <input type="radio" name="style" value="${style.id}" />
  //         ${style.style}
  //         </div>`;
  //   }

  return html;
};
