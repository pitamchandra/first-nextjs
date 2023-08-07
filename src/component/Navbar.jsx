import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/contact',
        title: 'Contact',
    },
    {
        path: '/blogs',
        title: 'Blogs',
    },
    {
        path: '/profile',
        title: 'Profile',
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
    }
]

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-center shadow my-3 py-3 w-full bg-gray-500 ">
                <h2 className="text-5xl text-rose-500">Next js</h2>
                <ul className="flex">
                    {
                        navLinks.map(({path, title})=> <li key={path} className="mx-2">
                            <NavLink exact = {path === '/'} activeClassName='text-rose-500' href={path}>{title}</NavLink>
                        </li>)
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;