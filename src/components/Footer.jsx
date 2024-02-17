import {github, overflow, linkedin, twitter, facebook, wordpress} from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className=" p-5 flex items-center justify-center border-b border-t mt-auto">
        <div className="flex items-center gap-5">
            <Link to="https://github.com/ayush-vibrant"><img className="w-5"src={github} /></Link>
            <Link to="https://www.linkedin.com/in/ayushsharma-/"><img className="w-5" src={linkedin} /></Link>
            <Link to="https://twitter.com/__ayushsharma"><img className="w-5" src={twitter} /></Link> 
            <Link to="https://stackexchange.com/users/9981158/ayush-sharma"><img className="w-5" src={overflow} /></Link>  
        </div>
        </div>
        <div className="m-1 mb-3 flex items-center justify-center">
            <p className="">Copyright &copy;2023</p>
        </div>
        </>
      
    );
  };
  
  export default Footer;