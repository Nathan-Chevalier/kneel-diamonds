export const getStyles = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let html = `<h2> Which style would you like?</h2>`;

  for (const style of styles) {
    html += `<input type="radio" name="style" value="${style.id}" /> ${style.style}`;
  }

  return html;
};
