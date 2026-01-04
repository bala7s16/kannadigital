import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
    // Display only first 6 services on home page
    const featuredServices = SERVICES.slice(0, 6);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
                    <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mb-6" />
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        We offer a comprehensive range of digital and printing solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-blue/50 hover:bg-slate-900 transition-all group"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-brand-yellow group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link to="/services" className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-yellow transition-colors">
                                Learn more <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/services" className="text-white hover:text-brand-yellow font-medium border-b border-brand-yellow/50 hover:border-brand-yellow transition-all pb-1">
                        View all services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
