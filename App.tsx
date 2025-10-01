
import { useColorScheme } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { CartProvider } from './src/contexts/CartContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <CartProvider>
      <RootNavigator />
    </CartProvider>
  );
}

export default App;
