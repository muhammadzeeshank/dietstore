"use client";

import useCartStore from "@/store";
import { Droplets, Heart, Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeSwitcher } from "./ModeSwitcher";
import Link from "next/link";
import { ViewType } from "@/types";

const Header = ({ 
  wishlistCount,
}: { 
  wishlistCount: number,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const isCartOpen = useCartStore((state) => state.isCartOpen);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  const setIsWishlistOpen = useCartStore((state) => state.setIsWishlistOpen);
  const { getGroupedItems } = useCartStore();

  const cartCount = getGroupedItems().length;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: ViewType) => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  function onOpenWishlist(): void {
    setIsWishlistOpen(true);
  }

  function onOpenCart(): void {
    setIsCartOpen(true);
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => handleNav('home')}
        >
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <Droplets size={20} className="text-white" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-green dark:text-brand-gold">
            DietStore
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" onClick={() => handleNav('home')} className="text-brand-dark dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">Home</Link>
          <Link href="/" onClick={() => handleNav('products')} className="text-brand-dark dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">Shop All</Link>
          <Link href="/" onClick={() => handleNav('about')} className="text-brand-dark dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">About Us</Link>
          <Link href="/" onClick={() => handleNav('track-order')} className="text-brand-dark dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">Track Order</Link>
          <Link href="/" onClick={() => handleNav('contact')} className="text-brand-dark dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold transition-colors font-medium">Contact</Link>
          
          <div className="flex items-center gap-4 ml-4">
            {/* <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-brand-green dark:text-brand-gold hover:bg-brand-gold/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            <ModeSwitcher />

            <button 
              onClick={onOpenWishlist} 
              className="relative p-2 rounded-full text-brand-green dark:text-brand-gold hover:bg-brand-gold/10 transition-colors"
              aria-label="Open Wishlist"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-cream dark:border-neutral-900">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenCart}
              className="relative bg-brand-green text-white px-6 py-2 rounded-full hover:bg-brand-greenLight transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Cart <ShoppingBag size={18} />
              {(cartCount) > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-brand-dark">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {/* <button 
            onClick={toggleTheme} 
            className="p-2 text-brand-green dark:text-brand-gold"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button> */}
          <ModeSwitcher />
          <button onClick={onOpenWishlist} className="relative text-brand-dark dark:text-white">
            <Heart size={24} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          <button onClick={onOpenCart} className="relative text-brand-dark dark:text-white">
             <ShoppingBag size={24} />
             {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="text-brand-dark dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream dark:bg-neutral-900 absolute w-full p-6 shadow-xl border-t border-gray-100 dark:border-neutral-800 animate-fade-in">
          <div className="flex flex-col gap-4">
            <button className="text-left text-lg font-medium text-brand-dark dark:text-gray-200" onClick={() => handleNav('home')}>Home</button>
            <button className="text-left text-lg font-medium text-brand-dark dark:text-gray-200" onClick={() => handleNav('products')}>Shop All</button>
            <button className="text-left text-lg font-medium text-brand-dark dark:text-gray-200" onClick={() => handleNav('track-order')}>Track Order</button>
            <button className="text-left text-lg font-medium text-brand-dark dark:text-gray-200" onClick={() => handleNav('about')}>About Us</button>
            <div className="h-px bg-gray-200 dark:bg-neutral-700 my-2"></div>
            <button className="text-left text-lg font-medium text-brand-dark dark:text-gray-200" onClick={() => handleNav('contact')}>Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
