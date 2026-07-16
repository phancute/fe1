import { Routes } from '@angular/router';
<<<<<<< HEAD
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Stories } from './pages/stories/stories';
import { AddStory } from './add-story/add-story';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: About,
  },
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'add-story',
    component: AddStory,
  },
=======
import { Home} from './home/home'  ;
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
    {
        path:'home',
        component: Home  ,
    },
      {
        path:'home/page/about',
        component: About  ,
    },
    {
        path:'contact',
        component: Contact,
    },
>>>>>>> 3adbbfd0687d3c878eb2ae0f2b90b0887776c756
];
