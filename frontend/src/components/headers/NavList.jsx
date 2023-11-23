import { NavLink } from 'react-router-dom';

export default function NavList({ menuList }) {
    return (
        <div className='flex flex-col gap-4 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
            {menuList
                .sort((a, b) => a.sequence - b.sequence)
                .map((menu, index) => (
                    <NavLink
                        to={menu.link}
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary bg-gray-100 py-2 px-4 rounded-md text-sm'
                                : 'px-4 py-2 text-textSecondary text-sm'
                        }
                        key={index}
                    >
                        {menu.name}
                    </NavLink>
                ))}
        </div>
    );
}
