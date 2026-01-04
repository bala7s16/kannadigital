import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_DETAILS, NAV_LINKS } from '../../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-blue">
                            KANNA
                        </span>
                        <span className="text-white font-medium hidden sm:block">DIGITAL STUDIO</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-brand-yellow ${location.pathname === link.path ? 'text-brand-yellow' : 'text-slate-300'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href={`tel:${BUSINESS_DETAILS.phone.replace(/ /g, '')}`} className="flex items-center gap-2 bg-brand-blue hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors font-medium">
                            <Phone size={18} />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-t border-slate-800"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand-yellow' : 'text-slate-300'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href={`tel:${BUSINESS_DETAILS.phone.replace(/ /g, '')}`} className="flex items-center gap-2 text-brand-blue font-bold pt-4">
                                <Phone size={20} />
                                {BUSINESS_DETAILS.phone}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
