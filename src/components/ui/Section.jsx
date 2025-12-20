import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.section>
    );
};

export default Section;
