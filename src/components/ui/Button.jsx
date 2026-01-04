import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";

    const variants = {
        primary: "bg-brand-yellow text-slate-900 hover:bg-yellow-400 focus:ring-brand-yellow shadow-[0_0_20px_-5px_theme(colors.brand.yellow)]",
        secondary: "bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-500 border border-slate-700",
        outline: "bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow/10 focus:ring-brand-yellow"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
