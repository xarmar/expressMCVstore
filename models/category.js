var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    title: {type: String, required: true, maxLength: 40},
    description: {type: String, required: true, maxLength: 120},
    imgUrl: {type: String, required: true},
  }
);

// Virtual for machine title
CategorySchema.virtual('machine_title')
.get(function() {
  return this.title.toLowerCase().split(" ").join("")
});

// Virtual for category's URL
CategorySchema.virtual('url')
.get(function() {
  return `/inventory/category/${this.machine_title}/${this._id}`
});



//Export model
module.exports = mongoose.model('Category', CategorySchema);