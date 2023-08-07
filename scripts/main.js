import { getMetals } from "./metals.js";
import { getSizes } from "./sizes.js";
import { getStyles } from "./styles.js";

const render = async () => {
  const metalsHTML = await getMetals();
  const sizesHTML = await getSizes();
  const stylesHTML = await getStyles();

  const container = document.querySelector("#container");

  const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
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

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `;

  container.innerHTML = composedHTML;
};

render();
