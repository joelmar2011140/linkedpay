'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react"
import { IRootComponent } from "../global.types";

const boxVariant = {
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1 }
  },
  hidden: { 
    opacity: 0, 
    x: -100, 
  }
};

export default function FadeRight({ children }: IRootComponent) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      { children }
      </motion.div>
  )
}
