import blank from "../assets/blank.png";
import warningPicture from "../assets/warning1.png";
import apparelPicture1 from "../assets/1218_cloth9.jpg";
import apparelPicture2 from "../assets/1218_cloth8.jpg";
import effectPicture from "../assets/effect1.png";

import { Building2, Shirt, EyeOff } from "lucide-react";
import { content } from "../../../tailwind.config";

export default [
  {
    name: "Warning",
    icon: <Building2 className="w-6 h-6" />,
    link: "/Services/warning",
    path: "warning",
    image: warningPicture,

    content:
      "The evolution of warfare has accompanied the development of human technology, transitioning from the age of cold weapons to the age of firearms, then to the mechanized infantry era, the information age, and today's era of unmanned and intelligent warfare. \nOver 2000 years ago, China's 'The Art of War' by Sun Tzu proposed interpretations of war strategy: 'To subdue the enemy without fighting is the supreme excellence,' which remains the best strategy in military affairs; 'Know the enemy and know yourself, and you will never be in peril,' which remains a secondary strategy. Therefore, throughout the history of human warfare, possessing the ability to have 'eyes that see a thousand miles and ears that hear the wind' has been one of the key measures for both sides to defeat each other.\nAs the form of warfare entered the information age, nations with the capability to sense the battlefield situation have advanced into integrating resources in multiple dimensions such as ground, surface, underwater, air, and space. War has transitioned from visible conventional warfare to invisible electromagnetic warfare. The side that loses the electromagnetic warfare will suffer a dimensional reduction strike.\nA typical example is the U.S. military from the Desert Storm in the Middle East to the Libyan War, to the wars in the Balkans in Europe. The use of the world's only 'Keyhole' optical imaging reconnaissance satellite as the 'eyes that see a thousand miles,' providing clear and precise, all-weather surveillance of target areas with an accuracy of less than 0.1 meters, and the 'Intruder' electronic reconnaissance satellite as the 'ears that hear the wind,' conducting all-weather detection and positioning of electromagnetic signals in target areas (with an accuracy of less than 0.1 meters), and decrypting communication information.\nCombined with the C4 neural network situational awareness system, it enables a dimensional reduction strike against the enemy, achieving the decapitation of the enemy's leadership from afar and the rapid realization of strategic and tactical objectives, which has shocked other major powers around the world!",
  },
  {
    name: "Apparel",
    icon: <Shirt className="w-6 h-6" />,
    link: "/Services/apparel-style",
    path: "apparel-style",
    image: apparelPicture1,

    content: "",
  },
  {
    name: "warning",
    icon: <EyeOff className="w-6 h-6" />,
    link: "/Services/effect-display",
    path: "effect-display",
    image: effectPicture,
    content: "",
  },
];
