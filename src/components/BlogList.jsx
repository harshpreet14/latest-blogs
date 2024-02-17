import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import { twitter } from "../assets";


const BlogList = () => {
    return(
        <>
        <Navbar/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <Footer/>
        </>
    )
}


const BlogCard = () =>{
    return(
        <div className="w-full flex items-center justify-center">
            <div className="flex gap-2 items-center mb-7">
                <img src={twitter} className="w-6 h-6 rounded-full"></img>
                <p className="line-clamp-1">Ayush Sharma</p>
                <p className="min-w-fit">date</p>
            </div>
            <h1 className="text-bold font-serif"> TITLE </h1>
            <p className="my-3 text-xl font-serif leading-7 max-sm:hidden md:max-[1100px]:hidden line-clamp-2">A short description</p>
        </div>   
    )
}


export default BlogList