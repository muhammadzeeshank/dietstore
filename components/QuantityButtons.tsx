import React from "react";
import useCartStore from "@/store";
import { Product } from "@/sanity.types";
import { Minus, Plus } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityButtons = ({ product }: Props) => {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => removeItem(product?._id)}
        className="w-8 h-8 rounded-full border border-gray-200 dark:border-neutral-600 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:border-brand-green hover:text-brand-green dark:hover:text-brand-gold dark:hover:border-brand-gold transition-colors"
      >
        <Minus size={14} />
      </button>
      <span className="font-medium w-4 text-center dark:text-white">
        {itemCount}
      </span>
      <button
        onClick={() => addItem(product)}
        className="w-8 h-8 rounded-full border border-gray-200 dark:border-neutral-600 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:border-brand-green hover:text-brand-green dark:hover:text-brand-gold dark:hover:border-brand-gold transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantityButtons;
