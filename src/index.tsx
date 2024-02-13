import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container!);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(<Root />);