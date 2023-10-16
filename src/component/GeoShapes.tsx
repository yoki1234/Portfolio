export interface GeoShapesPorps{
    parentStyle: string;
    circleStyle: string[];
}


function GeoShapes({
    parentStyle,
    circleStyle,
}: GeoShapesPorps){


const circles = circleStyle.map((item,index)=>
        <div key={`${index+item}`} className={`absolute ${item} rounded-full shadow-lg shadow-black animate-spin`}/>
    )

return(
     <div className={`flex items-center justify-center absolute ${parentStyle} z-10`}>
       {circles}
      </div>
)

}

export default GeoShapes;