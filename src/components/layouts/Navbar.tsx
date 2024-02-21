import { Button } from '@/components/ui/components/button';
import image from '@/assets/test-logo.png';
import { content } from '../content/navbarContent';

const Navbar = () => {
  return (
    <nav
      id="navbar"
      tabIndex={-1}
      className="fixed z-50 bg-[#14110f] lg:static"
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between">
        <img src={image} width={60} alt="test-logo" className="bg-white-100" />
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
