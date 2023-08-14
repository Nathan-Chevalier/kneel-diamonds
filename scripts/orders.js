export const getOrders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type"
  );
  const orders = await response.json();

  let html = `<h2> Current Orders</h2>`;
  const ordersArray = orders.map((order) => {
    let orderPrice = order.metal.price + order.style.price + order.size.price;
    orderPrice = orderPrice * order.type.multiplier;
    let convertedPrice = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `<div><section class="order"> Order #${order.id} costs ${convertedPrice}</section></div>`;
  });
  html += ordersArray.join("");

  return html;
};
