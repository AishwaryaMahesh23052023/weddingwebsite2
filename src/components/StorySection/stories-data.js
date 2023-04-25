
import MEHNDI from '../../assets/images/mehndi_img.png';
import ENGAGMENT from '../../assets/images/engagement_img.jpg';
import SANGEET from '../../assets/images/sangeet_img.jpg';
import HALDI from '../../assets/images/haldi_img.jpg';
import WEDDING from '../../assets/images/wedding_img.jpg';
import RECEPTION from '../../assets/images/reception-couple.png'
import { EventsInfo } from '../../constants';

export const stories = [
  {
    title: EventsInfo[0].title,
    date: EventsInfo[0].date,
    description:
      EventsInfo[0].description,
    
    venue : EventsInfo[4].venue,
    image: MEHNDI,
    show : EventsInfo[0].show,
  },
  {
    title: EventsInfo[1].title,
    date: EventsInfo[1].date,
    description:
      EventsInfo[1].description,
    venue : EventsInfo[1].venue,
    image: ENGAGMENT,
    show : EventsInfo[1].show,
  },
  {
    title: EventsInfo[2].title,
    date: EventsInfo[2].date,
    description:
      EventsInfo[2].description,
      
    venue : EventsInfo[2].venue,
    image: SANGEET,
    show : EventsInfo[2].show,
  },
  {
    title: EventsInfo[3].title,
    date: EventsInfo[3].date,
    description:
      EventsInfo[3].description,
    venue : EventsInfo[3].venue,
    image: HALDI,
    show : EventsInfo[3].show,
  },
  {
    title: EventsInfo[4].title,
    date: EventsInfo[4].date,
    description:
      EventsInfo[4].description,
    venue : EventsInfo[4].venue,
    image: WEDDING,
    show : EventsInfo[4].show,
  },
  
  {
    title: EventsInfo[5].title,
    date: EventsInfo[5].date,
    description:
      EventsInfo[5].description,
    venue : EventsInfo[5].venue,
    image: RECEPTION,
    show : EventsInfo[5].show,
  },
];
