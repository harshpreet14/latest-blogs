import Navbar from "./Navbar"
import Footer from "./Footer"

const Home = () => {
    return(
        <div >
            <Navbar/>
            <div className="md:max-w-[1000px] max-w-[500px] m-auto w-full h-full mt-10 md:px-0 px-4" > 
            {/* experiences*/}
            <div className="flex flex-col gap-5 mb-5">
            <p className="text-4xl text-blue-700 tracking-wide mb-3"> Experience</p>
            <div className="flex flex-row gap-10">
                <div className="text-lg font-semibold"> • Olx Group, Software Engineer</div>
                <div className="text-lg italic">Jan. 2020 – Present</div>
            </div>
            <div className="flex flex-row gap-10">
                <div className="text-lg font-semibold"> • Supermind, Tech and Product Consultant </div>
                <div className="text-lg italic ">Apr. 2022 – Sep 2022</div>
            </div>
            <div className="flex flex-row gap-10">
                <div className="text-lg font-semibold"> • Laxmicoin Mart Pvt Ltd, Blockchain Engineer </div>
                <div className="text-lg italic ">May 2018 – July. 2018</div>
            </div>
            </div>
            <div className="flex flex-col gap-5 mb-5">
            <p className="text-4xl text-blue-700 tracking-wide mb-3"> Built</p>
            <div className="flex flex-col">
                <div className="text-lg font-semibold text-blue-500"> Fleet </div>
                <div className="text-md italic"> • Lets you read faster by focusing only on the most important words in a text. (600+ Installs, 5 star rating)</div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold text-blue-500"> Write My SOP : SOP review system (350+ Users) (Website) </div>
                <div className="text-md"> • Developed an AI-driven SOP review pipeline using GPT-4 and Claude. Used RAGs, AI agents, prompt stuffing,function calling and fine-tuning to improve human efficiency by 60% </div>
                <div className="text-md"> • Clients received admits from the likes of CMU, Berkeley, ASU etc.</div>
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-semibold text-blue-500"> PDF Question-Answer tool (400+ Users) </div>
                <div className="text-md">• AI-powered PDF QA tool to overcome the limitations of traditional keyword-based search.</div>
                <div className="text-md"> • Implemented vector embeddings and semantic search techniques to provide highly accurate and efficient results..</div>
            </div>
            </div>
             {/* projects*/}
            
            </div>
            <Footer/>
        </div>
    )
    
    
}

export default Home