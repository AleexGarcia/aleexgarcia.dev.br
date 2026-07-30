import { Variants } from 'framer-motion'; // 👈 Importe o tipo Variants

// Aplique o tipo ': Variants' aqui
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Aplique o tipo ': Variants' aqui também
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut" // 👈 Agora o TypeScript aceita perfeitamente!
        }
    },
};

export { containerVariants, cardVariants }