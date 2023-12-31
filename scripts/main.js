import { getMetals } from "./metals.js";
import { getSizes } from "./sizes.js";
import { getStyles } from "./styles.js";
import { save } from "./save.js";
import { getOrders } from "./orders.js";
import { getTypes } from "./type.js";

export const render = async () => {
  const metalsHTML = await getMetals();
  const sizesHTML = await getSizes();
  const stylesHTML = await getStyles();
  const saveHTML = await save();
  const ordersHTML = await getOrders();
  const typeHTML = await getTypes();

  const container = document.querySelector("#container");

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__types options">
                ${typeHTML}
            </section>
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizesHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesHTML}
            </section>
        </article>

        <article class="order">
            ${saveHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `;

  container.innerHTML = composedHTML;
};

document.addEventListener("orderSaved", render);

render();
