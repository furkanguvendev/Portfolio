import { useSelector } from "react-redux"
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import { RootState } from "../store/store"
import foto from "../assets/me2.jpg";

interface defaultInfo {
  about: {
    title: "Default Title",
    content1: "Default Content 1",
    content2: "Default Content 2",
  },
};

export const Home = () => {

  const info = useSelector((state: RootState)=>(state.myData)) as defaultInfo;

  return (
    <div className="w-full h-full flex flex-col min-h-screen justify-between md:items-center">
        <Header/>
        <div className="flex flex-col 2xl:flex-row my-8 gap-20 items-center md:w-3/5">
          <img
            src={foto}
            className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 aspect-square object-cover border-4 rounded-full border-lime-600"
          />
          {info != null ?  <div className="flex flex-col gap-3 font-serif text-white px-6 md:px-0">
            <h1 className="text-2xl md:text-4xl">{info.about.title}</h1>
            <p className="text-lg md:text-2xl">{info.about.content1}</p>
            <p className="text-lg md:text-2xl">{info.about.content2}</p>
          </div> : <p>Henüz işlem tamamlanmadı!</p>}
        </div>
        <Footer/>
    </div> 
  )
}
