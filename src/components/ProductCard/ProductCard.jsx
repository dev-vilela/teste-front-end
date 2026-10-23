import { formatCurrency } from '../../utils/formatCurrency';
import { FALLBACK_PHOTO } from '../../data/mockProducts';

export default function ProductCard({ product, onOpen, zoomOnHover = false }) {
  return (
    <div
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition cursor-pointer"
      onClick={() => onOpen(product)}
    >
      <div className="flex justify-center mb-4">
        <img
          src={product.photo}
          alt={product.productName}
          className={`h-44 object-contain ${
            zoomOnHover ? 'transition-transform duration-300 hover:scale-105' : ''
          }`}
          onError={(e) => {
            e.target.src = FALLBACK_PHOTO;
          }}
        />
      </div>

      <div>
        <p className="text-xs text-[#3F3F3F] font-normal mb-2 line-clamp-2">
          {product.descriptionShort || product.productName}
        </p>
        <p className="text-xs text-[#808080] line-through">
          {formatCurrency(product.price * 1.1)}
        </p>
        <p className="text-lg font-bold text-[#3F3F3F] mb-1">
          {formatCurrency(product.price)}
        </p>
        <p className="text-[11px] text-[#3F3F3F] mb-1">
          ou 2x de {formatCurrency(product.price / 2)} sem juros
        </p>
        <p className="text-[11px] font-bold text-[#3442B5] mb-4">Frete grátis</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpen(product);
        }}
        className="w-full bg-[#3442B5] hover:bg-[#2A2359] text-white text-xs font-bold uppercase py-3 rounded transition"
      >
        Comprar
      </button>
    </div>
  );
}
