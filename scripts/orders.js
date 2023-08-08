export const getOrders = async () => {
  const response = await fetch("http://localhost:8088/orders");
  const orders = await response.json();

  let html = `<h2> Current Orders</h2>`;
  const ordersArray = orders.map((order) => {
    return `<div><section class="order"> Order #${order.id} </section></div>`;
  });
  html += ordersArray.join("");

  return html;
};
