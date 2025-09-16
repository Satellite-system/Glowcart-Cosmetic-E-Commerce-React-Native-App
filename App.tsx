
import { useColorScheme } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RootNavigator />
  );
}

export default App;
