"use client";

import AnimationProvider from "@/components/common/AnimationProvider";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";


const Wrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimationProvider />
      {children}
    </>
  );
};

export default Wrapper;
