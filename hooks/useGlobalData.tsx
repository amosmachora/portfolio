"use client";

import LoadingAnimation from "@/components/LoadingAnimation";
import { Overlay } from "@/components/Overlay";
import { SmallScreenModal } from "@/components/SmallScreenModal";
import { Video } from "@/components/Video";
import { FormspreeProvider } from "@formspree/react";
import { createContext, useContext, useEffect, useState } from "react";

type GlobalData = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentYoutubeId: React.Dispatch<React.SetStateAction<string | null>>;
  setSmallScreenErrorModalLink: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  isLoading: boolean;
  currentYoutubeId: string | null;
  smallScreenErrorModalLink: string | null;
};

export const globalDataContext = createContext<GlobalData>(null as any);

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentYoutubeId, setCurrentYoutubeId] = useState<null | string>(null);
  const [smallScreenErrorModalLink, setSmallScreenErrorModalLink] = useState<
    null | string
  >(null);

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
        setCurrentYoutubeId,
        setSmallScreenErrorModalLink,
        currentYoutubeId,
        smallScreenErrorModalLink,
        isLoading,
      }}
    >
      <FormspreeProvider project="2017027895586717162">
        {isLoading && <LoadingAnimation />}
        {currentYoutubeId && (
          <Video
            id={currentYoutubeId}
            onClick={() => setCurrentYoutubeId(null)}
          />
        )}
        {smallScreenErrorModalLink && (
          <Overlay onClick={() => setSmallScreenErrorModalLink(null)}>
            <SmallScreenModal
              smallScreenErrorModalLink={smallScreenErrorModalLink}
            />
          </Overlay>
        )}
        {children}
      </FormspreeProvider>
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
