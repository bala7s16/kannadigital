import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, Globe } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="pt-24 pb-16 bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Visit our main studio in Thoothukudi or contact us for any printing and photography needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Contact Info (Main Branch Only) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="bg-brand-blue/10 p-4 rounded-full text-brand-blue shrink-0">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                                            <p className="text-slate-400 text-base leading-relaxed">{BUSINESS_DETAILS.branches[0].address}</p>
                                            <a href={BUSINESS_DETAILS.branches[0].mapUrl} target="_blank" rel="noopener noreferrer" className="text-brand-yellow text-sm font-medium hover:underline mt-3 inline-flex items-center gap-1">
                                                View on Google Maps <Globe size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="bg-brand-blue/10 p-4 rounded-full text-brand-blue shrink-0">
                                            <Phone size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                                            <p className="text-slate-400 text-base">{BUSINESS_DETAILS.branches[0].phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="bg-brand-blue/10 p-4 rounded-full text-brand-blue shrink-0">
                                            <Clock size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg mb-1">Opening Hours</h3>
                                            <div className="text-slate-400 space-y-1">
                                                {BUSINESS_DETAILS.branches[0].hours.map((h, i) => (
                                                    <p key={i}><span className="text-slate-300 font-medium inline-block w-28">{h.day}:</span> {h.time}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="mt-8 h-64 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.191630737482!2d78.1311843!3d8.8135934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef646561390d%3A0x530c1e3f370aeea2!2sKanna%20Photography!5e0!3m2!1sen!2sin!4v1709664657200!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm font-medium">Your Name</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-sm font-medium">Phone Number</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm font-medium">Service Interested</label>
                                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all">
                                    <option>Photography Session</option>
                                    <option>Large Format Printing</option>
                                    <option>Mug / T-Shirt Printing</option>
                                    <option>Banner Design</option>
                                    <option>E-Seva Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-slate-400 text-sm font-medium">Message</label>
                                <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button type="button" variant="primary" className="w-full">
                                Send Message <Send size={18} className="ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
