import WeatherWidget from './../components/WeatherWidget';
import { Carousel } from '../components/Carousel';
import { SplitFlapText } from '../components/SplitFlapText';
import data from '../portfolio.json'

export const Home = () => {

  return (
    <div className="p-8 bg-amber-500">
      <SplitFlapText text= {data.name} />
      <h1 className="text-3xl font-bold text-slate-900">{ data.title_content }</h1>
      <div className="flex flex-col gap-8 mb-6">
        <WeatherWidget />
        <Carousel items={data.carousel} />
      </div>
    
    </div>
  )
}