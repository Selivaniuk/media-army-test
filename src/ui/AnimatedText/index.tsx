import { motion } from "framer-motion";

const container = {
  visible: (custom: { staggerChildren: number }) => ({
    transition: {
      //   ...custom,
      delay: 10,
    },
  }),
};

const item = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: ({
    index,
    delay,
    staggerChildren,
  }: {
    index: number;
    delay: number;
    staggerChildren: number;
  }) => ({
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.6,
      delay: delay + index * staggerChildren,
    },
  }),
};

type PopsType = {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
};

const AnimatedText: React.FC<PopsType> = ({
  text,
  className,
  delay = 0,
  staggerChildren = 0.015,
}) => {
  const splitWords = text.split(" ");

  const words = [] as any[];

  //@ts-ignore
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      variants={container}
      custom={{ staggerChildren }}
      viewport={{ once: true }}
    >
      {words.map((_, index) =>
        words[index].flat().map((e: string, i: number) => (
          <span
            key={i}
            style={{
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <motion.span
              className={className}
              custom={{ index: i, delay, staggerChildren }}
              variants={item}
              style={{ display: "inline-block" }}
            >
              {e}
            </motion.span>
          </span>
        ))
      )}
    </motion.p>
  );
};

export default AnimatedText;
