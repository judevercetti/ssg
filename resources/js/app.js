import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

createInertiaApp({
    title: title => `${title} | SPILLZILLA`,
    resolve: async (name) => {
        return (await import(`./Pages/${name}.jsx`)).default
    },
    setup({el, App, props}) {
        const container = document.getElementById('app');
        const root = createRoot(container, el);
        root.render(React.createElement(App, props));
    },
    });