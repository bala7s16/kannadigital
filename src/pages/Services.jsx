import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
    const categories = [...new Set(SERVICES.map(s => s.category))];

    return (
        <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        We provide a complete range of digital and printing services using state-of-the-art technology.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-brand-yellow mb-8 border-b border-slate-800 pb-2 inline-block">
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {SERVICES.filter(s => s.category === category).map((service, index) => (
                                    <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-brand-blue/30 transition-all shadow-lg hover:shadow-brand-blue/5">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-slate-800 rounded-lg text-brand-blue">
                                                <service.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                                                <ul className="space-y-2">
                                                    {['High Quality', 'Fast Delivery', 'Affordable'].map((tag, i) => ( // Generic tags for now
                                                        <li key={i} className="flex items-center text-xs text-slate-500">
                                                            <CheckCircle2 size={12} className="text-brand-yellow mr-2" />
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
