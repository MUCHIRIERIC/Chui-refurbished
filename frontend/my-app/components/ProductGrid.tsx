import { ShoppingCart } from 'lucide-react';

// Sample data - This will eventually be fetched from your MongoDB database
const products = [
  { id: 1, name: 'Redmi Note 13 Pro', price: 35000, specs: '8GB RAM • 256GB • 200MP Camera', category: 'Phone' },
  { id: 2, name: 'MacBook Air M2', price: 145000, specs: '8-Core CPU • 256GB SSD', category: 'Laptop' },
  { id: 3, name: 'Sony 55" 4K Smart TV', price: 68000, specs: '4K Ultra HD • Google TV', category: 'TV' },
  { id: 4, name: 'JBL Bar 5.1 Subwoofer', price: 55000, specs: '510W • Wireless Sub', category: 'Subwoofer' },
  // ... expand to 40 items in your database
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-cyan-500/50 transition group cursor-pointer flex flex-col justify-between">
          <div>
            <div className="aspect-square bg-black/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              {/* Product Image Tag */}
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <h4 className="font-bold text-lg leading-tight mb-1 group-hover:text-cyan-400 transition">{product.name}</h4>
            <p className="text-xs text-gray-400 mb-3 h-8">{product.specs}</p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <span className="font-black text-xl text-green-400">Ksh {product.price.toLocaleString()}</span>
            <button className="bg-white/10 p-2 rounded-lg hover:bg-cyan-500 hover:text-white transition">
              <ShoppingCart size="{20}"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}