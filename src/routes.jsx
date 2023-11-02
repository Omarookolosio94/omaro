import Home from './views/home';
import Projects from './views/projects';

const routes = [
  {
    name: 'Home',
    layout: '/',
    path: 'home',
    icon: '',
    component: <Home />,
  },
  {
    name: 'Projects',
    layout: '/',
    path: 'projects',
    icon: '',
    component: <Projects />,
  },
];

export default routes;
