import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Header } from "../Layers/Header";
import { Footer } from "../Layers/Footer";
import { Award, MapPin, GraduationCap, User, Calendar } from "lucide-react";

interface AboutData {
  personal: {
    aboutMe: string;
    aboutMe1: string;
    nameText: string;
    fullName: string;
    bornText: string;
    born: string;
    liveText: string;
    live: string;
    educationText: string;
    education: string;
    certificate: string[];
  };
}

export const Aboutme = () => {
  const aboutData = useSelector((state: RootState) => state.myData) as AboutData;

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5f941a]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-[#5f941a] opacity-10 rounded-3xl"></div>
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#5f941a]/20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {aboutData.personal.aboutMe}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.personal.aboutMe1}
            </p>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#5f941a] mb-6 flex items-center gap-2">
              <User className="w-6 h-6" />
              Personal Information
            </h2>
            <div className="space-y-4 flex flex-col items-center">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <User className="w-5 h-5 text-[#5f941a] mt-1" />
                <div>
                  <span className="font-medium text-[#222222] block">
                    {aboutData.personal.nameText}
                  </span>
                  <span className="text-gray-600">
                    {aboutData.personal.fullName}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="w-5 h-5 text-[#5f941a] mt-1" />
                <div>
                  <span className="font-medium text-[#222222] block">
                    {aboutData.personal.bornText}
                  </span>
                  <span className="text-gray-600">{aboutData.personal.born}</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin className="w-5 h-5 text-[#5f941a] mt-1" />
                <div>
                  <span className="font-medium text-[#222222] block">
                    {aboutData.personal.liveText}
                  </span>
                  <span className="text-gray-600">{aboutData.personal.live}</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <GraduationCap className="w-5 h-5 text-[#5f941a] mt-1" />
                <div>
                  <span className="font-medium text-[#222222] block">
                    {aboutData.personal.educationText}
                  </span>
                  <span className="text-gray-600">
                    {aboutData.personal.education}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#5f941a] mb-6 flex items-center gap-2 justify-center">
              <Award className="w-6 h-6" />
              Certificates
            </h2>
            <div className="space-y-4 flex flex-col items-center">
              {aboutData.personal.certificate.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Award className="w-5 h-5 text-[#5f941a] flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};