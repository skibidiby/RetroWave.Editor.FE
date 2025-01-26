import './App.css'
import Navigation from './navigation/Navigation'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  const theme = createTheme({
  // colorScheme: 'dark',
  primaryColor: 'blue',
  fontFamily: 'Verdana, sans-serif',
  headings: {
    fontFamily: 'Georgia, serif',
    sizes: {
      h1: { fontSize: '2.5rem' },
      h2: { fontSize: '2rem' },
    },
  },
  });
  return (
    <>
      <MantineProvider theme={createTheme(theme)}>
        <Navigation />
      </MantineProvider >
    </>
  )
}
export default App
