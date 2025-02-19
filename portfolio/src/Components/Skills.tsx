import { useSelector } from "react-redux"
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import { RootState } from "../store/store"

interface defaultSkills {
    skills: [
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        },
        {
            name:"",
            iconLink:""
        }
    ];
};

export const Skills = () => {

    const skillData = useSelector((state: RootState)=>(state.myData)) as defaultSkills;

  return (
    <div className="w-full h-full flex flex-col min-h-screen justify-between md:items-center">
        <Header/>
        <div className="grid grid-flow-row grid-cols-3 md:grid-flow-row md:grid-cols-5 gap-9 px-1 py-9 md:py-6 md:gap-x-14 xl:gap-x-28">
            {Object.entries(skillData.skills).map((item)=>(
                <div className="flex flex-col gap-4 items-center group">
                <img
                  className="w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125"
                  src={item[1].iconLink}
                />
                <p className="text-white text-xl transition-all duration-300 group-hover:text-lime-500 group-hover:opacity-100 opacity-80">
                  {item[1].name}
                </p>
              </div>
              
            ))}
        </div>
        <Footer/>
    </div>
  )
}
