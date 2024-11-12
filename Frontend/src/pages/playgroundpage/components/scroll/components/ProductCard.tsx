// components/ProductCard.tsx
import React from 'react';
import { Product } from '../interfaces/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="flex-shrink-0 ml-[50%] snap-center w-full sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4">
    <div className="flex flex-col items-center">
      <img src={product.imageUrl} alt={product.name} className="rounded-lg" draggable="false" />
      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
    </div>
  </div>
);

export default ProductCard;