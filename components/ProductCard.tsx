import { Product } from '@/data/products';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[28px] p-4 shadow-sm">
      {/* Подложка изображения */}
      <div className="bg-[#e8edf2] rounded-[24px] aspect-square flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-cover object-center"
        />
      </div>

      {/* Название */}
      <h3 className="text-[20px] font-bold mt-4 mb-1 lowercase">
        {product.title}
      </h3>

      {/* Описание */}
      <p className="text-[14px] text-gray-500 leading-snug mb-2">
        {product.description}
      </p>

      {/* Цена и кнопка */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-[14px] text-gray-500">
          {product.price} ₽
        </span>
        <button className="bg-[#1a5f7a] text-white rounded-full px-5 py-2 text-xs uppercase tracking-wide">
          в корзину
        </button>
      </div>
    </div>
  );
}