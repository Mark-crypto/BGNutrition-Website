import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const cardData = [
  {
    title: "Integrity",
    desc: "We do the right thing.",
    content: "Content about integrity.",
    footer: "Learn more",
  },
  {
    title: "Innovation",
    desc: "We think outside the box.",
    content: "Content about innovation.",
    footer: "Explore",
  },
  {
    title: "Empathy",
    desc: "We care deeply.",
    content: "Content about empathy.",
    footer: "Understand",
  },
  {
    title: "Excellence",
    desc: "We aim high.",
    content: "Content about excellence.",
    footer: "Pursue",
  },
  {
    title: "Collaboration",
    desc: "We work together.",
    content: "Content about collaboration.",
    footer: "Join us",
  },
  {
    title: "Transparency",
    desc: "We are open and honest.",
    content: "Content about transparency.",
    footer: "Trust",
  },
];

const Values = () => {
  return (
    <div className="flex flex-col items-center gap-8 mb-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
              <CardFooter>
                <p className="text-green-600 font-semibold">{card.footer}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
