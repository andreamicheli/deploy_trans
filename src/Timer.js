import * as React from 'react'
import Countdown from './Countdown';

const Timer = () => {
    const initialTimer = localStorage.getItem("timer") ?? 2400;
    const timeoutId = React.useRef(null);
    const [timer, setTimer] = React.useState(initialTimer);

    const countTimer = React.useCallback(() => {
        if (timer <= 0) {
            localStorage.clear("timer");
            return alert('hai perso, l\'evento è iniziato!')
        } else {
            setTimer(timer - 1);
            localStorage.setItem("timer", timer);
        }
    }, [timer]);

    React.useEffect(() => {
        timeoutId.current = window.setTimeout(countTimer, 1000);
        // cleanup function
        return () => window.clearTimeout(timeoutId.current);
    }, [timer, countTimer]);

    return (
        <>
        <Countdown seconds={timer}></Countdown>
        </>
        );
}

export default Timer
