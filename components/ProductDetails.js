app.component("product-details", {
  props: {
    details: {
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="product-details">
    <ul>
    <li v-for="detail in details">{{ detail }}</li>
      </ul>
      </div> `,
});
