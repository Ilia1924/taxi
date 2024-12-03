import economyIcon from '../../../accets/images/options/taxi.png';
import busIcon from '../../../accets/images/options/charter.png';
import comfortIcon from '../../../accets/images/options/minivan-taxi.png';
import partyBusIcon from '../../../accets/images/options/taxibus.png';
import limusinIcon from '../../../accets/images/options/limousine.png';

interface IList {
    id: string,
    title: string,
    img: string,
    multiplier: number
}

export const optionList: IList[] = [
    {
        id: 'econom-1',
        title: "Economy",
        img: economyIcon.src,
        multiplier: 12
    }, 
    {
        id: 'comfort-1',
        title: "Comfort",
        img: comfortIcon.src,
        multiplier: 20
    }, 
    {
        id: 'bus-1',
        title: "Bus",
        img: busIcon.src,
        multiplier: 32
    }, 
    {
        id: 'partybus-1',
        title: "Party Bus",
        img: partyBusIcon.src,
        multiplier: 41
    }, 
    {
        id: 'limusin-1',
        title: "LUX",
        img: limusinIcon.src,
        multiplier: 140
    }
]