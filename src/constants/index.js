import { Camera, Printer, Image, FileText, CreditCard, Video, Frame, Scissors } from 'lucide-react';

export const BUSINESS_DETAILS = {
    name: "Kanna Photography & Digital Studio",
    address: "111/5G, Pol Pettai, TMC Colony, State Bank Colony, Ezhil Nagar, Thoothukudi, Tamil Nadu 628002",
    phone: "098422 46572",
    email: "kannadigital@gmail.com", // Placeholder
    mapUrl: "https://www.google.com/maps/place/Kanna+Photography/@8.8135934,78.1311843,16z",
    hours: [
        { day: "Manday - Saturday", time: "8:00 AM - 10:00 PM" },
        { day: "Sunday", time: "8:00 AM - 2:00 AM" }
    ]
};

export const SERVICES = [
    {
        icon: Camera,
        title: "Photography Studio",
        description: "Professional portraits, modeling shoots, and family photography.",
        category: "Photography"
    },
    {
        icon: Printer,
        title: "Large Format Printing",
        description: "A0+, A1+, A2 quality printing for plans, drawings, and posters.",
        category: "Printing"
    },
    {
        icon: Image,
        title: "Digital Banners",
        description: "High-quality banner design and printing for events and businesses.",
        category: "Printing"
    },
    {
        icon: Frame,
        title: "Frame Works",
        description: "Custom photo lamination, LED frames, and collage frames.",
        category: "Finishing"
    },
    {
        icon: FileText,
        title: "Xerox & Typing",
        description: "Bulk photocopying, thesis binding, and document preparation.",
        category: "Services"
    },
    {
        icon: CreditCard,
        title: "E-Seva Center",
        description: "Government online services, bill payments, and applications.",
        category: "Services"
    },
    {
        icon: Scissors,
        title: "Die Cut Stickers",
        description: "Custom vinyl stickers and precise die-cutting services.",
        category: "Printing"
    },
    {
        icon: Video,
        title: "Video Coverage",
        description: "Event videography for weddings and special occasions.",
        category: "Photography"
    }
];

export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
];
