import { Droplets, Leaf, ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Droplets size={32} />,
      title: "Cold Pressed Extraction",
      desc: "We use mechanical pressure instead of heat, preserving natural antioxidants and Omega-3s."
    },
    {
      icon: <Leaf size={32} />,
      title: "100% Chemical Free",
      desc: "Absolutely no hexane, solvents, or artificial preservatives. Just pure oil."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Heart Healthy",
      desc: "Low in saturated fats and rich in Vitamin E, supporting a healthy cardiovascular system."
    }
  ];

  return (
    <section id="process" className="py-20 bg-brand-cream dark:bg-neutral-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-green dark:text-brand-gold font-bold mb-4">Why Cold Pressed?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Most commercial oils are extracted using high heat and harsh chemicals. 
            Our traditional cold-press method keeps the oil in its purest, most nutritious form.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-gold/10 dark:border-neutral-800 group">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-green dark:text-white mb-3">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Features