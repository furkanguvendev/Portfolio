import { useSelector } from "react-redux"
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import { RootState } from "../store/store"

const defaultInfo = {
  about: {
    title: "Default Title",
    content1: "Default Content 1",
    content2: "Default Content 2",
  },
};

export const Home = () => {

  const info = useSelector((state: RootState)=>(state.myData));

  console.log(info);

  return (
    <div className="w-full h-full flex flex-col md:gap-6 justify-between md:items-center">
        <Header/>
        <div className="flex flex-col md:flex-row my-28 gap-20 items-center md:w-3/5">
          <img
            src="https://i.pinimg.com/736x/03/32/91/033291a5a8fb1fd56071e57774fc630c.jpg"
            className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 aspect-square object-cover border-4 rounded-xl border-lime-600"
          />
          <div className="flex flex-col gap-3 font-serif text-white px-6 md:px-0">
            <h1 className="text-2xl md:text-4xl">{info.about.title}</h1>
            <p className="text-lg md:text-2xl">{info.about.content1}</p>
            <p className="text-lg md:text-2xl">{info.about.content2}</p>
          </div>
        </div>
        <Footer/>
    </div> 
  )
}
