import NavLink from "@/component/NavLink";


const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard',
    },
    {
        path: '/dashboard/add-to-cart',
        title: 'Add to cart',
    },
    {
        path: '/dashboard/add-product-page',
        title: 'Add Product',
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage product',
    }
]

const Sidebar = () => {
    return (
        <div>
            <aside className="bg-gray-400 p-12 mr-6 h-screen">
                <h3 className="text-4xl text-rose-800">Dashboard</h3>
                <ul className="mt-4 space-y-2">
                    {
                        navLinks.map(({path, title})=> <li key={path}>
                            <NavLink exact activeClassName="text-rose-700" className=" hover:text-rose-700 duration-5000" href={path}>{title}</NavLink>
                        </li>)
                    }
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;