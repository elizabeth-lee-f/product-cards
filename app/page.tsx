import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf2f4] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Кнопка "Смотреть всю коллекцию" */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#1a5f7a] text-white rounded-full px-8 py-3 text-sm uppercase tracking-wide hover:bg-[#145068] transition-colors duration-200">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}
