import Link from "next/link";

type NavItem_PROPS = {
  name: string;
  link: string;
  loginState: boolean;
  isLogin: boolean;
};

const NavItem: React.FC<NavItem_PROPS> = ({
  name,
  link,
  loginState,
  isLogin,
}) => {
  return (
    <div>
      {isLogin === loginState && (
        <Link href={link}>
          <a className="text-white font-semibold text-sm border-2 px-5 py-2 ml-4 rounded-3xl hover:bg-gray-100 hover:text-blue-500">
            {name}
          </a>
        </Link>
      )}
    </div>
  );
};

export default NavItem;
