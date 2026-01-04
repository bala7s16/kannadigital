import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <ServicesGrid />

            {/* CTA Section */}
            <section className="py-20 bg-brand-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2535&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Capture Your Memories?</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                        Whether it's a passport size photo or a giant A0 plan print, we deliver excellence every time.
                    </p>
                    <a href="/contact" className="inline-block bg-white text-brand-blue hover:bg-brand-yellow hover:text-slate-900 px-8 py-3 rounded-full font-bold transition-all shadow-lg">
                        Visit Our Studio
                    </a>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
