import { motion } from 'framer-motion';

const Gallery = () => {
    // Placeholders using Unsplash since we don't have real images yet
    const images = [
        { url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop", title: "Studio Photography" },
        { url: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=2670&auto=format&fit=crop", title: "Frame Works" },
        { url: "https://plus.unsplash.com/premium_photo-1664112065842-1660f9e31d4d?q=80&w=2669&auto=format&fit=crop", title: "Digital Printing" },
        { url: "https://images.unsplash.com/photo-1576618148400-f54bed99fcf8?q=80&w=2680&auto=format&fit=crop", title: "Wedding Album" },
        { url: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2662&auto=format&fit=crop", title: "ID Cards" },
        { url: "https://images.unsplash.com/photo-1589330694653-4a8b243ea5aa?q=80&w=2670&auto=format&fit=crop", title: "Common Service Center" },
    ];

    return (
        <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Gallery</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A glimpse into our studio atmosphere and the quality of work we deliver.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" // Reduced initial opacity for darker vibe
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
