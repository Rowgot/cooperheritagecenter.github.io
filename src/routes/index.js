import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import VisitView from '../views/VisitView';
import ExhibitView from '../views/ExhibitView';
import StaffView from '../views/StaffView';
import VolunteersView from '../views/VolunteersView';
import ContactView from '../views/ContactView';
import OralHistoriesView from '../views/OralHistoriesView';
import LiveQuizView from '../views/LiveQuizView';
import QuizView from '../views/QuizView';
import ContentView from 'views/ContentView';

export const defaultRoutes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/visit',
        name: 'Visit',
        component: VisitView
    },
    {
        path: '/exhibit',
        name: 'Exhibit',
        component: ExhibitView
    },
    {
        path: '/staff',
        name: 'Staff',
        component: StaffView
    },
    {
        path: '/volunteers',
        name: 'Volunteers',
        component: VolunteersView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    },
];

export const hiddenRoutes = [{
        path: '/oral-histories',
        name: 'OralHistories',
        component: OralHistoriesView
    },
    {
        path: '/live-quiz',
        name: 'LiveQuiz',
        component: LiveQuizView
    },
    {
        path: '/quiz/:id',
        name: 'Quiz',
        component: QuizView
    },
    {
        path: '/content/:id',
        name: 'Content',
        component: ContentView
    },
];