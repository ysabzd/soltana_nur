export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export const revealVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const viewportConfig = {
  once: true,
  margin: "-15%" as const,
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EDITORIAL_EASE } },
};
