import { Button } from '@/components/ui/button';
import image from '@/assets/Test-Logo-Circle-black-transparent.png';
import { content } from '../content/navbarContent';

const Navbar = () => {
  return (
    <nav
      id="navbar"
      tabIndex={-1}
      className="fixed z-50 w-screen bg-[#1E1C1B] lg:static"
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between	">
        <img src={image} width={60} className="bg-white-100" />
        <li className="list-none">
          <ul>
            {content.map((item) => {
              return (
                <Button variant="secondary" className="mx-3">
                  {item.name}
                </Button>
              );
            })}
          </ul>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
