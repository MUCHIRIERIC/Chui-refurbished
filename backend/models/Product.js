import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['Phone', 'Laptop', 'TV', 'Subwoofer', 'Other'], required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  specifications: { type: Map, of: String }, // e.g., {"RAM": "8GB", "Storage": "256GB"}
  images: [{ type: String }], // URLs from your local upload handler
  stockQuantity: { type: Number, default: 0 },
  isDailyOffer: { type: Boolean, default: false },
  isFlashSale: { type: Boolean, default: false },
  flashSaleEndsAt: { type: Date }
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', productSchema);