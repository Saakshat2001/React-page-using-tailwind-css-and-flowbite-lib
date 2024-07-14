import { Button, DarkThemeToggle, Flowbite , Navbar} from "flowbite-react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
export default function MyPage() {
  return (
    <Navbar fluid className="bg-black h-20">

    <Navbar.Brand as={Link} href="https://flowbite-react.com" className="ml-32">
      <img src="https://growcify.com/images/logo.png" className=" h-10 sm:h-100 bg-black-500" alt="Flowbite React Logo" />
      <span className="self-center text-white whitespace-nowrap text-xl font-semibold dark:text-white">Grocify</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="#" className="text-white" active> 
        Home
      </Navbar.Link>
      <Navbar.Link className="text-white" as={Link} href="#" >
        About
      </Navbar.Link>
      <Navbar.Link  className="text-white" href="#">Features</Navbar.Link>
      <Navbar.Link href="#" className="text-white dark:text-gray-300 hover:text-gray-600 mr-54">Contact</Navbar.Link>
    </Navbar.Collapse>
    <Navbar.Brand as={Link} href="https://flowbite-react.com">
    <img src="data:image/png;base64,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" 
    className=" h-12 sm:h-100 mr-20" alt="Flowbite React Logo" />
    </Navbar.Brand>
  </Navbar>



  );
}