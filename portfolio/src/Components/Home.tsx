import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
        <Header/>
        <Footer/>
    </div>
  )
}
