import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImageIcon from '@mui/icons-material/Image';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WorkIcon from '@mui/icons-material/Work';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export const pagesAdmin = [
    {
        name: 'Person',
        link: '/admin/person',
        icon: <PersonIcon/>
    },
    {
        name: 'Social Network',
        link: '/admin/socialNetworks',
        icon: <PublicIcon/>

    },
    {
        name: 'Skills',
        link: '/admin/skills',
        icon: <CodeIcon/>

    },
    {
        name: 'Project',
        link: '/admin/project',
        icon: <WorkIcon/>

    },
    {
        name: 'Resume',
        link: '/admin/resume',
        icon: <LibraryBooksIcon/>

    },
    {
        name: 'Images',
        link: '/admin/images',
        icon: <ImageIcon/>
    }
    ,
    {
        name: 'Services',
        link: '/admin/services',
        icon: <DesignServicesIcon/>

    },
    {
      name: 'Section',
      link: '/admin/section',
      icon: <BookmarksIcon/>

    }
];
