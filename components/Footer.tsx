import React from "react";
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Logo from "./Logo";
import Container from "./Container";
import { ModeSwitcher } from "./ModeSwitcher";
import { Droplets, Facebook, Instagram, Twitter } from "lucide-react";
const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Return Policy",
    href: "/return-policy",
  },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark dark:bg-black text-white pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center">
                <Droplets size={18} className="text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                DietStore
              </span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Dedicated to bringing you the purest, healthiest oil straight from nature to your kitchen. 
              Cold pressed, chemical-free, and always fresh.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors">
                 <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/products" className="hover:text-brand-gold transition-colors">All Products</Link></li>
              <li><Link href="/track-order" className="hover:text-brand-gold transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/return-policy" className="hover:text-brand-gold transition-colors">Return Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DietStore. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
