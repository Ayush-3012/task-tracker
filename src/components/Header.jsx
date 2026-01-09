/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Header = () => {
  const today = new Date().toLocaleString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      className="w-full mx-10 rounded-lg py-4
      bg-linear-to-r from-emerald-400 via-emerald-200 to-emerald-600
      text-center text-slate-900 font-mono font-bold max-md:py-3 max-sm:py-2"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl max-md:text-xl">Task Tracker</h1>
      <p className="text-sm font-medium">{today}</p>
    </motion.div>
  );
};

export default Header;
