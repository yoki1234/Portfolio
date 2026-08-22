import WeatherWidget from './../components/WeatherWidget';
import img from '../assets/gratisography-cool-cat-800x525.jpg'
import { Carousel } from '../components/Carousel';

export const Home = () => {

  const projects = [
    { title: 'NHS Waiting Time Dashboard', description: 'Power BI dashboard analyzing NHS Scotland wait times.', imageUrl: img },
    { title: 'Kerala Flood Prediction', description: '98% accuracy model with SHAP explainability.', imageUrl: img },
    { title: 'Netflix Clone', description: 'React + TypeScript clone using TMDB API.', imageUrl: img },
  ]


  return (
    <div className="p-8 bg-amber-500">
      <h1 className="text-3xl font-bold text-slate-900">Welcome to My Portfolio</h1>
      <div className="flex flex-col gap-8 mb-6">
        <WeatherWidget />
        <Carousel items={projects} />
      </div>
    
    </div>
  )
}