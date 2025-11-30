"use client"
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";
import QuantityButtons from "./QuantityButtons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const CartDrawer = () => {
    const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
    setIsCartOpen
  } = useCartStore();
  const cartItems = useCartStore((state) => state.getGroupedItems());
  const router = useRouter();
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your Cart?");
    if (confirmed) {
      resetCart();
      // toast.success("Your cart reset successfully!");
    }
  };
  const handleCheckout = async () => {
    router.push("/checkout");
  };
  const onClose = () => {
    setIsCartOpen(false);
  }
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const onRemove = (id: string) => {
    deleteCartProduct(id);
    // toast.success("Product deleted successfully!");
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream dark:bg-neutral-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-neutral-900">
            <h2 className="font-serif text-2xl text-brand-green dark:text-brand-gold font-bold">Your Basket</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 bg-brand-cream dark:bg-neutral-950">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                <ShoppingBag size={48} className="mb-4 opacity-20" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <button onClick={onClose} className="mt-4 text-brand-gold font-medium hover:underline">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.product?._id} className="flex gap-4 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700">
                      {item.product?.images && <Image src={urlFor(item.product.images[0]).url()} alt="productImage" width={500} height={500} className="w-20 h-20 object-cover rounded-lg bg-gray-50 dark:bg-neutral-700" />} 
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-bold text-brand-green dark:text-gray-100 leading-tight">{item.product.name}</h3>
                        <button onClick={() => onRemove(item.product._id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-brand-gold font-bold mb-3">PKR{item.product.price.toFixed(2)}</p>
                      
                      <QuantityButtons product={item.product} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="text-2xl font-bold text-brand-green dark:text-brand-gold">PKR{subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout</p>
              <button 
                onClick={handleCheckout}
                className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-greenLight transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer