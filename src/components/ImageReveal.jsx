import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ImageReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Crisp cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

