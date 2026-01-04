import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_DETAILS, NAV_LINKS } from '../../constants';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div>
                        <div className="mb-6">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-yellow to-brand-blue">
                                KANNA
                            </span>
                            <span className="text-white block font-medium">DIGITAL STUDIO</span>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Your one-stop destination for premium photography, large format printing, and digital services in Thoothukudi.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-brand-blue transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-brand-blue transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate-400 hover:text-brand-yellow transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li>Wedding Photography</li>
                            <li>A0/A1 Plan Printing</li>
                            <li>Digital Banners</li>
                            <li>Mug & T-Shirt Printing</li>
                            <li>Frame Works</li>
                            <li>E-Seva Services</li>
                        </ul>
                    </div>

                    {/* Contact Info (Main Only) */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <div className="space-y-4 text-slate-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-brand-yellow shrink-0 mt-1" size={18} />
                                <p>{BUSINESS_DETAILS.branches[0].address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-brand-yellow shrink-0" size={18} />
                                <p>{BUSINESS_DETAILS.branches[0].phone}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="text-brand-yellow shrink-0" size={18} />
                                <div className="text-sm">
                                    {BUSINESS_DETAILS.branches[0].hours.map((h, i) => (
                                        <p key={i}><span className="text-slate-300">{h.day}:</span> {h.time}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Kanna Digital Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
