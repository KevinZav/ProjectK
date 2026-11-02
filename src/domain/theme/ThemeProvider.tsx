import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "./themes";

type ThemeMode = 'light' | 'dark';


type ThemeContextValue = {
  theme: typeof lightTheme | typeof darkTheme;
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext =
  createContext<ThemeContextValue | undefined>(
    undefined,
  );

export function ThemeProvider({ children }: PropsWithChildren) {

    const [mode, setMode] = useState<ThemeMode>('light');
    
    const theme = mode === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const value = useMemo(() => ({ theme, mode, toggleTheme }), [theme, mode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}