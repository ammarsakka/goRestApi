import { Body } from './component/Body';
import { Header } from './component/Header';

export const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-100 dark:bg-zinc-900">
      <Header />
      <Body />
    </div>
  );
}
