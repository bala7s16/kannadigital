import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroPooja from '../../assets/hero-pooja.jpg';
import heroDrone from '../../assets/hero-drone.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.brand.blue/0.2),_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_theme(colors.brand.yellow/0.1),_transparent_50%)]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-brand-yellow text-sm font-medium mb-6">
                            Premier Photography & Printing Services
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Capturing Moments,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue">
                                Printing Perfection
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            From professional studio portraits and aerial drone shots to high-quality large format printing. We bring your vision to life.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

                    {/* Right Column: Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2 h-[400px] md:h-[500px] w-full flex items-center justify-center"
                    >
                        {/* Main Image (Drone Pilot) */}
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 md:w-2/3 md:h-4/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/50 z-10 transform translate-x-4">
                            <img
                                src={heroDrone}
                                alt="Professional Drone Photography"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Secondary Image (Pooja/Traditional) */}
                        <div className="absolute bottom-0 left-4 w-3/5 h-3/5 md:w-1/2 md:h-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/50 z-20 transform -translate-x-2 translate-y-4">
                            <img
                                src={heroPooja}
                                alt="Traditional Event Photography"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 left-10 w-20 h-20 bg-brand-yellow/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl animate-pulse delay-700" />
                    </motion.div>
                </div>
            </div>

            {/* Abstract Shapes/Glows */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-blue/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-yellow/20 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
};

export default Hero;
