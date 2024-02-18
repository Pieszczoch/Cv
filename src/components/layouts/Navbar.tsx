import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav
      id="navbar"
      tabIndex={-1}
      className="fixed z-50 w-screen bg-[#DDCECD] lg:static"
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center">
        <Button>chujjj</Button>
      </div>
    </nav>
  );
};

export default Navbar;
