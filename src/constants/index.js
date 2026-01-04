import { Camera, Printer, Image, FileText, CreditCard, Video, Frame, Scissors, PenTool, Gift } from 'lucide-react'; // Added icons

export const BUSINESS_DETAILS = {
    branches: [
        {
            id: "main",
            name: "Kanna Digital Studio (Main Branch)",
            address: "111/5G, Pol Pettai, TMC Colony, State Bank Colony, Ezhil Nagar, Thoothukudi, Tamil Nadu 628002",
            phone: "098422 46572",
            mapUrl: "https://www.google.com/maps/place/Kanna+Photography/@8.8135934,78.1311843,16z",
            hours: [
                { day: "Monday - Saturday", time: "8:00 AM - 10:00 PM" },
                { day: "Sunday", time: "8:00 AM - 2:00 AM" }
            ]
        },
        {
            id: "second",
            name: "Kanna Photography (2nd Branch)",
            address: "Perumal kovil, 54/4, st street, opposite Vatta Koil, Krishnarajapuram, Thoothukudi, Tamil Nadu 628002",
            phone: "099658 59460",
            mapUrl: "https://www.google.com/maps/place/Kanna+photography/@8.8192744,78.1479729,3a,75y",
            hours: [
                { day: "Monday - Sunday", time: "Open 24 Hours" }
            ]
        }
    ],
    email: "kannadigital@gmail.com" // Placeholder
};

export const SERVICES = [
    {
        icon: Camera,
        title: "Photography Studio",
        description: "Professional portraits, modeling shoots, outdoor shoots and family photography.",
        category: "Photography"
    },
    {
        icon: Video,
        title: "Video & Drone Coverage",
        description: "High-definition event videography and cinematic drone shots for weddings.",
        category: "Photography"
    },
    {
        icon: Printer,
        title: "Large Format Printing",
        description: "A0+, A1+, A2 quality printing for plans, drawings, and posters using Canon plotters.",
        category: "Printing"
    },
    {
        icon: Image,
        title: "Digital Banners",
        description: "High-quality flex and vinyl banner design and printing for events.",
        category: "Printing"
    },
    {
        icon: Gift,
        title: "Personalized Gifts",
        description: "Custom mug printing, t-shirt printing, and shields/momentos.",
        category: "Printing"
    },
    {
        icon: Frame,
        title: "Frame Works",
        description: "Custom photo lamination, digital album frames, and collage frame work.",
        category: "Finishing"
    },
    {
        icon: PenTool,
        title: "Graphic Design",
        description: "Creative design for brochures, visiting cards, advertisements, and invitations.",
        category: "Services"
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
    }
];

export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
];
