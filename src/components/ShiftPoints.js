import {useSelector} from "react-redux";
import {getShiftPoints} from "../reducers/gears";
import {round} from "lodash";

export default function ShiftPoints() {
    const shiftPoints = useSelector(getShiftPoints)

    return (
        <div className="mt-5">
            {shiftPoints.map(
                ({gear, engineRpm, speed}) => (
                    <div key={gear}>Shift to {gear} at {round(engineRpm, -2)} ({speed} km/h)</div>
                )
            )
            }
        </div>
    )
}