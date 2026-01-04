import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.brand.blue/0.2),_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_theme(colors.brand.yellow/0.1),_transparent_50%)]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-brand-yellow text-sm font-medium mb-6">
                        Premier Photography & Printing Services in Thoothukudi
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Capturing Moments,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue">
                            Printing Perfection
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        From professional studio portraits to large format plan printing and digital banners. We bring your vision to life with precision and quality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Book a Session <ChevronRight className="ml-2" size={18} />
                            </Button>
                        </Link>
                        <Link to="/services">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Explore Services
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Abstract Shapes/Glows */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-blue/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-yellow/20 rounded-full blur-[100px]" />
        </section>
    );
};

export default Hero;
