const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String },
    rate: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', Product);