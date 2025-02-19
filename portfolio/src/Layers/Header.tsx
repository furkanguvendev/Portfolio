import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { language } from "../store/actions/action";
import { Dropdown } from "../Elements/Dropdown";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const lang = useSelector((state: RootState) => (state.language));
  
  const onClick = ():void => {
    if(lang == "english"){
      dispatch(language("turkish"));
    } else if (lang == "turkish") {
      dispatch(language("english"));
    }
  }

  const navClick = (url: string):void => {
    navigate(url);
  }

  return (
    <div className="w-full flex items-center justify-between p-6 md:px-16 md:py-12 border-b-2 border-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-lime-500 to-transparent animate-border-glow"></div>
      <h1 className="bg-gradient-to-r from-lime-500 to-lime-700 p-4 font-mono text-xl lg:text-4xl text-white rounded-full shadow-lg">
  Furkan Güven
</h1>

      {/* <div className="flex items-center gap-2">
        <p className="flex items-center justify-center text-white font-[Ribeye] w-12 h-12 text-2xl md:w-14 md:h-14 md:text-4xl rounded-full bg-blue-500">F</p>
        <p className="text-2xl md:text-4xl text-white font-[Poppins]"><span className="font-bold">Fur</span>kan</p>
      </div> */}
      <div className="flex gap-3 lg:gap-8 items-center justify-between">
        <div className="hidden md:flex flex-row gap-3 lg:gap-8">
          <button type="button" className="headerBtn" onClick={()=>(navClick("/"))}>{lang == "english" ? "Home" : "Ana Sayfa"}</button>
          <button type="button" className="headerBtn" onClick={()=>(navClick("/skills"))}>{lang == "english" ? "Skills" : "Yetenekler"}</button>
          <button type="button" className="headerBtn" onClick={()=>(navClick("/projects"))}>{lang == "english" ? "Projects" : "Projeler"}</button>
          <button type="button" className="headerBtn" onClick={()=>(navClick("/aboutme"))}>{lang == "english" ? "About Me" : "Hakkımda"}</button>
        </div>
        <button 
          onClick={onClick}
          className="px-4 py-2 rounded-full bg-white text-gray-800 border border-gray-300 
                    hover:bg-gray-50 hover:border-gray-400 
                    transition-all duration-300 ease-in-out
                    shadow-sm hover:shadow
                    flex items-center space-x-1 text-sm font-medium font-mono"
        >
          <span>{lang === "english" ? "TR" : "ENG"}</span>
        </button>        <div className="flex md:hidden items center">
          <Dropdown lang={lang} navClick={navClick}/>
        </div>
      </div>
    </div>
  )
}
