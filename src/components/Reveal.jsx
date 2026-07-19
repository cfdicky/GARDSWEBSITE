import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  zoom: { hidden: { opacity: 0, scale: 1.06 }, visible: { opacity: 1, scale: 1 } },
}

/**
 * Scroll-triggered reveal animation. Wrap any block of content:
 * <Reveal direction="up" delay={0.1}><Card /></Reveal>
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
  as: Component = motion.div,
}) {
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}

export { variants as revealVariants }
