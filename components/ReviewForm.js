app.component("review-form", {
  template:
    /*html*/
    `
    <form class-=review-form @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model='name' />

    <label for="review" >Review:</label>
    <textarea id="review" v-model='review'></textarea>

    <label for="rating" >Rating:</label>
    <select for="rating" v-model.number='rating'>
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <label for="suggestion" >Would you recommand this product?:</label>
    <select  for="suggestion" v-model.string='suggestion'>
    <option>Yes</option>
    <option>No</option>
   </select>

    <input class="button" type="submit" value="Submit" />
    
    </form>
    `,
  data() {
    return {
      name: "",
      review: "",
      suggestion: "",
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === null ||
        this.suggestion === ""
      ) {
        return alert("Please fill out every field");
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        suggestion: this.suggestion,
      };
      console.log(productReview);
      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.suggestion = "";
    },
  },
});
