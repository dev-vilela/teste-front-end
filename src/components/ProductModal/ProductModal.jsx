import { X } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import { FALLBACK_PHOTO } from '../../data/mockProducts';

export default function ProductModal({
  product,
  quantity,
  onClose,
  onIncrement,
  onDecrement,
}) {
  if (!product) return null;

  const handleBuy = () => {
    alert(`Produto ${product.productName} (${quantity}x) adicionado ao carrinho!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 md:p-8 z-10 flex flex-col md:flex-row gap-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Fechar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/*  Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 rounded-lg p-4">
          <img
            src={product.photo}
            alt={product.productName}
            className="max-h-64 object-contain"
            onError={(e) => {
              e.target.src = FALLBACK_PHOTO;
            }}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#2A2359] uppercase mb-2">
              {product.productName}
            </h3>

            <p className="text-2xl font-extrabold text-[#2A2359] mb-4">
              {formatCurrency(product.price)}
            </p>

            <p className="text-xs text-[#808080] leading-relaxed mb-4">
              {product.descriptionShort ||
                'Many desktop publishing packages and web page editors now many desktop publishing.'}
            </p>

            <a
              href="#detalhes"
              className="text-xs font-bold text-[#3442B5] hover:underline block mb-6"
            >
              Veja mais detalhes do produto &gt;
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                onClick={onDecrement}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition font-bold"
              >
                -
              </button>
              <span className="px-4 py-2 text-sm font-bold text-[#2A2359]">
                {quantity.toString().padStart(2, '0')}
              </span>
              <button
                onClick={onIncrement}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={handleBuy}
              className="flex-1 bg-[#F1CD31] hover:bg-yellow-400 text-[#2A2359] font-extrabold text-xs uppercase py-3 px-6 rounded transition shadow-sm text-center"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
