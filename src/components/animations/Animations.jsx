import { motion } from "framer-motion";

export function FadeInUp({children, ...props}){
    return (<motion.div
    initial={{ y: 30, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    {...props}
    >
        {children}
    </motion.div>)
}

export function FadeInRight({children, ...props}){
    return (<motion.div
    {...props}
    initial={{ x: 100, opacity: 0, }}
    whileInView={{ x: 0, opacity: 1, }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    >
        {children}
    </motion.div>)
}

export function FadeInLeft({children, ...props}){
    return (<motion.div
    {...props}
    initial={{ x: -100, opacity: 0, }}
    whileInView={{ x: 0, opacity: 1, }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    >
        {children}
    </motion.div>)
}

export function FadeIn({children, ...props}){
    return (<motion.div
    {...props}
    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1, }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    >
        {children}
    </motion.div>)
}