import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImageIcon from '@mui/icons-material/Image';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WorkIcon from '@mui/icons-material/Work';

export const pagesAdmin = [
    {
        name: 'Person',
        link: '/admin',
        icon: <PersonIcon/>
    },
    {
        name: 'Social Network',
        link: '/proyectos',
        icon: <PublicIcon/>

    },
    {
        name: 'Skills',
        link: '/proyectos',
        icon: <CodeIcon/>

    },
    {
        name: 'Project',
        link: '/proyectos',
        icon: <WorkIcon/>

    },
    {
        name: 'Resume',
        link: '/proyectos',
        icon: <LibraryBooksIcon/>

    },
    {
        name: 'Images',
        link: '/contacto',
        icon: <ImageIcon/>
    }
    ,
    {
        name: 'Services',
        link: '/proyectos',
        icon: <DesignServicesIcon/>

    }
];
