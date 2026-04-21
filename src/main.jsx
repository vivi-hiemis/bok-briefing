import { createRoot } from 'react-dom/client';
import './deck-stage.js';
import './tokens.css';
import Cover from './slides/Cover.jsx';
import SlideStatus from './slides/SlideStatus.jsx';
import SlidePriorities from './slides/SlidePriorities.jsx';
import SlideOther from './slides/SlideOther.jsx';

function App() {
  return (
    <deck-stage width="1920" height="1080">
      <Cover />
      <SlideStatus />
      <SlidePriorities />
      <SlideOther />
    </deck-stage>
  );
}

createRoot(document.getElementById('root')).render(<App />);
