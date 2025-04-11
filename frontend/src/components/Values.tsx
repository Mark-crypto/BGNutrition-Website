import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  UsersRound,
  Lightbulb,
  Medal,
  Smile,
  Sun,
} from "lucide-react";

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

const values = [
  {
    title: "Integrity",
    desc: "We do the right thing.",
    content:
      "We will demonstrate the highest ethical standards in all interactions",
    icon: <HeartHandshake />,
    footer: "",
  },
  {
    title: "Stewardship",
    desc: "We are open and transparent in all actions",
    content:
      "We will be accountable to all through the efficient and environmentally responsible use of resources.",
    icon: <Sun />,
    footer: "",
  },
  {
    title: "Teamwork",
    desc: "We work together.",
    content:
      "We will foster cooperation and a sense of empowerment amongst our diverse staff, volunteers, and community partners.",
    icon: <UsersRound />,
    footer: "",
  },
  {
    title: "Innovation",
    desc: "We think outside the box.",
    content:
      "We will continually seek to provide excellent service through the development of new and improved methods to reduce hunger and malnutrition.",
    icon: <Lightbulb />,
    footer: "",
  },
  {
    title: "Professionalism",
    desc: "Our work ethic speaks volumes.",
    content:
      "We will maintain the highest standards and demonstrate collegiality and respect in all actions.",
    icon: <Medal />,
    footer: "",
  },
  {
    title: "Respect",
    desc: "We regard everyone highly",
    content: "We will treat all of our relationships with respect.",
    icon: <Smile />,
    footer: "",
  },
];
const Values = () => {
  return (
    <div className="flex flex-col items-center gap-8 mb-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 h-50 bg-gradient-to-br from-green-500 via-teal-400 to-blue-500 text-white">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription className="font-semibold">
                  {card.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Values;
