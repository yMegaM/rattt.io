const prefix = '';

const paths = {
    index: prefix + '/',
    main: prefix + '/main',
    tradicional: prefix + '/ttt',
    nf: prefix + '/404'
};

export const NavData = [
    {
        label: "TTT",
        href: paths.tradicional
    },
    {
        label: 'Intro',
        href: paths.index,
        onClick: (e) => {
            window.localStorage.setItem('firstEnter', 'true');
        }
    },
    {
        label: 'GitHub',
        href: 'https://github.com/'
    }
]

export default paths;