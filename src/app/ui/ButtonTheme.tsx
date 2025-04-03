import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/app/store/LightStore";

const ButtonTheme = () => {
  const { toggleTheme } = useThemeStore();
  const [position, setPosition] = useState(true);
  const changeTheme = () => {
    setPosition(!position);
    toggleTheme();
  };
  return (
    <div>
      <button
        className={`w-[40px] h-[20px] rounded-[16px] relative bg-white`}
        onClick={() => changeTheme()}
      >
        <motion.span
          className={`min-w-[16px] min-h-[16px] top-[2px] rounded-full absolute ${
            position ? "bg-gray-500" : "bg-dark"
          }`}
          animate={{ x: position ? -16 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
      </button>
    </div>
  );
};

export default ButtonTheme;
