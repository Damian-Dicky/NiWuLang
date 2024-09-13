import earthFilling from '../assets/earth-filling.jpg'
import excavationWorks from '../assets/excavation.jpg'
import damWorks from '../assets/dam.jpg'
import seaPortWorks from '../assets/sea-port.jpg'
import canalWorks from '../assets/canal.jpg'
import roadAndHighwayConstruction from '../assets/road-construction.jpg'
import sezDevelopment from '../assets/railway.png'
import hillCutting from '../assets/hill-cutting.jpg'    
import townshipDevelopment from '../assets/township.jpg'
import shippingCorporationWorks from '../assets/shipping.jpg'
import containerYards from '../assets/container.png'
import jettiesAndCoalFieldWorks from '../assets/jettis.jpg'
import miningTransportationWorks from '../assets/minning-transport.jpg'
import heavyDutyTransportation from '../assets/heavy-transport.jpg'
import ecoFriendlyCompaction from '../assets/lake-beautification.png'
import mgpPipelineWorks from '../assets/pipeline.jpg'
import generalCivilWorks from '../assets/highway.jpg'
import { Building2, Truck, Leaf } from "lucide-react";

export default [
    { 
        name: "Earth-Filling and Earth-Cutting", 
        icon: <Building2 className="w-6 h-6" />, 
        link:"/Services/earth-filling-and-earth-cutting" , 
        path : "earth-filling-and-earth-cutting",
        image: earthFilling
    },
    { 
        name: "Excavation Works", 
        icon: <Truck className="w-6 h-6" /> , 
        link:"/Services/excavation-works", 
        path : "excavation-works",
        image: excavationWorks
    },
    { name: "Dam Works", icon: <Building2 className="w-6 h-6" />, link:"/Services/dam-works" , path : "dam-works", image: damWorks},
    { name: "Sea Port Works", icon: <Building2 className="w-6 h-6" />, link:"/Services/sea-port-works" , path : "sea-port-works", image: seaPortWorks},
    { name: "Canal Works", icon: <Building2 className="w-6 h-6" /> , link:"/Services/canal-works", path : "canal-works",  image: canalWorks},
    { name: "Road and Highway Construction", icon: <Truck className="w-6 h-6" /> , link:"/Services/road-and-highway-construction", path : "road-and-highway-construction", image: roadAndHighwayConstruction},
    { name: "SEZ's Development", icon: <Building2 className="w-6 h-6" />, link:"/Services/sezs-development", path : "sezs-development", image: sezDevelopment},
    { name: "Hill Cutting", icon: <Truck className="w-6 h-6" />, link:"/Services/hill-cutting", path : "hill-cutting", image: hillCutting},
    { name: "Township Development", icon: <Building2 className="w-6 h-6" />, link:"/Services/township-development" , path : "township-development", image: townshipDevelopment},
    { name: "Shipping Corporation Works", icon: <Truck className="w-6 h-6" /> , link:"/Services/shipping-corporation-works", path : "shipping-corporation-works", image: shippingCorporationWorks},
    { name: "Container Yards", icon: <Building2 className="w-6 h-6" />, link:"/Services/container-yards", path : "container-yards", image: containerYards},
    { name: "Jetties and Coal Field Works", icon: <Building2 className="w-6 h-6" /> , link:"/Services/jetties-and-coal-field-works", path : "jetties-and-coal-field-works", image: jettiesAndCoalFieldWorks},
    { name: "Mining Transportation Works", icon: <Truck className="w-6 h-6" /> , link:"/Services/mining-transportation-works", path : "mining-transportation-works", image: miningTransportationWorks},
    { name: "Heavy Duty Transportation", icon: <Truck className="w-6 h-6" />, link:"/Services/heavy-duty-transportation" , path : "heavy-duty-transportation", image: heavyDutyTransportation},
    { name: "Eco-Friendly Compaction", icon: <Leaf className="w-6 h-6" />, link:"/Services/eco-friendly-compaction" , path : "eco-friendly-compaction", image: ecoFriendlyCompaction},
    { name: "MGP Pipeline Works", icon: <Building2 className="w-6 h-6" /> , link:"/Services/mgp-pipeline-works", path : "mgp-pipeline-works", image: mgpPipelineWorks},
    { name: "General Civil Works", icon: <Building2 className="w-6 h-6" />, link:"/Services/general-civil-works" , path : "general-civil-works", image: generalCivilWorks},

]