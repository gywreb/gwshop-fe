import { motion, Variants } from "framer-motion";

type MotionName = "fadeIn" | "fadeOut" | "slideLeftIn" | "slideRightIn";
//   | "slideLeftOut"
//   | "slideRightOut"
//   | "scaleIn";

interface AnimationControlProps {
  motion: MotionName;
}

type AnimationVariants = {
  [key in MotionName]: Variants;
};

const animations: AnimationVariants = {
  fadeIn: {
    enter: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  fadeOut: {
    enter: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  slideLeftIn: {
    enter: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: -150,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
  slideRightIn: {
    enter: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: 150,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  },
};

const Animator: React.FC<AnimationControlProps> = (props) => {
  return (
    <motion.div
      initial="exit"
      animate="enter"
      exit="exit"
      variants={animations[props.motion]}
    >
      {props.children}
    </motion.div>
  );
};

export default Animator;
