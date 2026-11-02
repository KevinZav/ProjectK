import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/domain/theme/ThemeProvider";
import { HomeScreen } from "./src/domain";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
    return (
        <ThemeProvider>
            <HomeScreen/>
        </ThemeProvider>
    );
}

export default App;