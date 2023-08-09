export const getOrders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type"
  );
  const orders = await response.json();

  let html = `<h2> Current Orders</h2>`;
  const ordersArray = orders.map((order) => {
    const orderPrice = order.metal.price + order.style.price + order.size.price;
    return `<div><section class="order"> Order #${order.id} costs $${orderPrice}</section></div>`;
  });
  html += ordersArray.join("");

  return html;
};
