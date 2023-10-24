"use client";

import { FormspreeProvider } from "@formspree/react";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";

type GlobalData = {};

export const globalDataContext = createContext<GlobalData>(null as any);

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <globalDataContext.Provider value={{}}>
      <FormspreeProvider project="2017027895586717162">
        {children}
      </FormspreeProvider>
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
