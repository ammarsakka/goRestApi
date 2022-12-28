import { Body } from './component/Body';
import { ThemeProvider } from 'next-themes';

export const App = () => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Body />
      </div>
    </ThemeProvider>
  );
}
