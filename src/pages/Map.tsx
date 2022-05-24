import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ComingTimer from "./Upcoming/ComingTimer";
import ComingYellow from "./Upcoming/ComingYellow";
import StayTuned from "./Upcoming/StayTuned";

const Map = () => {


    const [randomNumber, setRandomNumber] = useState(0);
    const location = useLocation();

    useEffect(() => {
        let numberRand = Math.ceil(Math.random() * 100);
        setRandomNumber(numberRand);
    }, [location])

    if (randomNumber > 0 && randomNumber < 30) {
        return <StayTuned />
    } else if (randomNumber > 30 && randomNumber < 60) {
        return <ComingYellow />
    } else if (randomNumber > 60 && randomNumber < 90) {
        return <ComingTimer />
    } else {
        return <StayTuned />
    }

}

export default Map;