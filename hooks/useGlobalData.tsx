"use client";

import LoadingAnimation from "@/components/LoadingAnimation";
import { FormspreeProvider } from "@formspree/react";
import { createContext, useContext, useEffect, useState } from "react";

type GlobalData = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
};

export const globalDataContext = createContext<GlobalData>(null as any);

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <globalDataContext.Provider
      value={{
        setIsLoading,
        isLoading,
      }}
    >
      <FormspreeProvider project="2017027895586717162">
        {isLoading && <LoadingAnimation />}

        {children}
      </FormspreeProvider>
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
