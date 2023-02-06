import { useEffect, useRef, useState } from "react";

function Timer(props) {
    const [time, setTime] = useState(45);

    useEffect(() => {
        let x = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            } else {
                clearInterval(x)
                props.timeHasRunOutCallback()
            }

        }, 1000);

        return () => clearTimeout(x)
    })



    const display = time > 0 ? <p style={{ fontFamily: "HarryP-MVZ6w" }} className="timer">
        {time} seconds remaining
    </p> : <p style={{ fontFamily: "HarryP-MVZ6w" }} className="timer">You've run out of time</p>

    return display;
}

export default Timer;