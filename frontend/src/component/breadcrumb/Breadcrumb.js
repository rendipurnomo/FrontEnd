import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom"; 

export default function Breadcrumb({list}) {
  return (
    <Breadcrumbs className='pt-16 bg-blue-200'>
    <Link to="/" className="opacity- 60 text-xl">
        Home
      </Link>
      <Link to="/cart" className="opacity- 60 text-xl">
        Cart
      </Link>
    </Breadcrumbs>
      )
};

