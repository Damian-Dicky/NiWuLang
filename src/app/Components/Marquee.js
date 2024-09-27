import Image from "next/image";
import Clients from "../static/Clients";
import "../CSS/Components/Marquee.css";
import Box from "../Components/Box";


export default function MarqueeCard(props) {
  
    return (
        
      <div className="marquee-container">
        
      <div className="marquee">
       
        {Clients.map((item, index) => (
          <div className="marquee-item" key={index}>
          
            <Image src={item.image} alt={item.name} className="marquee-image" width={180} height={150}/>
            {/* <span className="marquee-name">{item.name}</span> */}
            
          </div>
        ))}
        {Clients.map((item, index) => (
            <div className="marquee-item" key={index + Clients.length}>
            
              <Image src={item.image} alt={item.name} className="marquee-image" width={180} height={150}/>
              <span className="marquee-name">{item.name}</span>
              
            </div>
          ))}
      </div>
    </div>
    )
}