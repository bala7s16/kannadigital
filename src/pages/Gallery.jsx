import { motion } from 'framer-motion';

const Gallery = () => {
    // Enhanced placeholder images that match the services (Mugs, Prints, Studio, etc.)
    const images = [
        {
            url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop",
            title: "Professional Studio"
        },
        {
            url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop", // More printing relevant (Plotter/Design)
            title: "Large Format Printing"
        },
        {
            url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2564&auto=format&fit=crop",
            title: "Camera Equipment"
        },
        {
            url: "https://images.unsplash.com/photo-1513438205128-16af162ddc62?q=80&w=2670&auto=format&fit=crop", // Wedding/Album vibe
            title: "Wedding Albums"
        },
        {
            url: "https://images.unsplash.com/photo-1589330694653-4a8b243ea5aa?q=80&w=2670&auto=format&fit=crop", // Gov/Service center vibe
            title: "E-Seva Services"
        },
        {
            url: "https://images.unsplash.com/photo-1632515998522-8d769c36643c?q=80&w=2670&auto=format&fit=crop", // Mug/Gifts if possible, or generic design
            title: "Personalized Gifts"
        },
        {
            url: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2574&auto=format&fit=crop", // Frames
            title: "Custom Framing"
        },
        {
            url: "https://images.unsplash.com/photo-1452587925148-ce548e94a701?q=80&w=2574&auto=format&fit=crop", // Poster/Banner
            title: "Digital Banners"
        },
        {
            url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2669&auto=format&fit=crop", // Meeting/Business
            title: "Customer Support"
        }
    ];

    return (
        <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work Gallery</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Explore our portfolio of studio photography, custom prints, and personalized gifts.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className={`group relative rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-brand-blue/10 border border-slate-800/50 ${index === 3 || index === 6 ? 'md:col-span-2' : ''}`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-brand-yellow text-sm font-bold uppercase tracking-wider mb-1 block">Kanna Digital</span>
                                    <span className="text-white font-bold text-xl">{img.title}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
