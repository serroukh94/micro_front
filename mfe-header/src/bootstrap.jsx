import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';

const root = createRoot(document.getElementById('root'));
root.render(<Navbar notifications={0} />);
