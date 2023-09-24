import {Button, Label, TextInput} from 'flowbite-react';
import {getFinalGear, getGears, getGearsCount, updateCount, updateFinal, updateGear} from "./reducers/gears";
import {useDispatch, useSelector} from "react-redux";
import {
    getAspectRatio,
    getDriveWheels,
    getRimSize,
    getTireWidth,
    updateAspectRatio,
    updateDriveWheels,
    updateRimSize,
    updateTireWidth
} from "./reducers/wheels";

export default function Form() {
    const tireWidth = useSelector(getTireWidth);
    const aspectRatio = useSelector(getAspectRatio);
    const rimSize = useSelector(getRimSize);
    const driveWheels = useSelector(getDriveWheels);
    const gearsCount = useSelector(getGearsCount);
    const finalGear = useSelector(getFinalGear);
    const gears = useSelector(getGears);
    const dispatch = useDispatch();

    function handleDriveWheelsChange(event) {
        dispatch(updateDriveWheels(event.target.value))
    }

    function handleTireWidthChange(event) {
        dispatch(updateTireWidth(event.target.value))
    }

    function handleAspectRatioChange(event) {
        dispatch(updateAspectRatio(event.target.value))
    }

    function handleRimSizeChange(event) {
        dispatch(updateRimSize(event.target.value))
    }

    function handleGearsChange(event) {
        dispatch(updateCount(event.target.value))
    }

    function handleFinalChange(event) {
        dispatch(updateFinal(event.target.value))
    }

    function handleFirstChange(event) {
        dispatch(updateGear({gear: 1, value: event.target.value}))
    }

    function handleSecondChange(event) {
        dispatch(updateGear({gear: 2, value: event.target.value}))
    }

    function handleThirdChange(event) {
        dispatch(updateGear({gear: 3, value: event.target.value}))
    }

    function handleFourthChange(event) {
        dispatch(updateGear({gear: 4, value: event.target.value}))
    }

    function handleFifthChange(event) {
        dispatch(updateGear({gear: 5, value: event.target.value}))
    }

    function handleSixthChange(event) {
        dispatch(updateGear({gear: 6, value: event.target.value}))
    }

    function handleSeventhChange(event) {
        dispatch(updateGear({gear: 7, value: event.target.value}))
    }

    function handleEigthChange(event) {
        dispatch(updateGear({gear: 8, value: event.target.value}))
    }

    function handleNinthChange(event) {
        dispatch(updateGear({gear: 9, value: event.target.value}))
    }

    function handleTenthChange(event) {
        dispatch(updateGear({gear: 10, value: event.target.value}))
    }

    return (
        <form className="flex max-w-xl flex-col gap-4">
            <div className="flex flex-row">
                <div className="mr-2">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="tireWidth"
                            value="Tire Width"
                        />
                    </div>
                    <TextInput
                        onChange={handleTireWidthChange}
                        value={tireWidth}
                        id="tireWidth"
                        placeholder="265"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-2">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="aspectRatio"
                            value="Aspect Ratio"
                        />
                    </div>
                    <TextInput
                        onChange={handleAspectRatioChange}
                        value={aspectRatio}
                        id="aspectRatio"
                        placeholder="55"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rimSize"
                            value="Rim Size"
                        />
                    </div>
                    <TextInput
                        onChange={handleRimSizeChange}
                        value={rimSize}
                        id="rimSize"
                        placeholder="17"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="mr-4">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="driveWheels"
                            value="# of driven wheels"
                        />
                    </div>
                    <TextInput
                        onChange={handleDriveWheelsChange}
                        value={driveWheels}
                        id="driveWheels"
                        placeholder="4"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-4">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="gearsCount"
                            value="# of gears"
                        />
                    </div>
                    <TextInput
                        onChange={handleGearsChange}
                        value={gearsCount}
                        id="gearsCount"
                        placeholder="7"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="finalGear"
                            value="Final Drive"
                        />
                    </div>
                    <TextInput
                        onChange={handleFinalChange}
                        value={finalGear}
                        id="finalGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
            </div>

            <div className="grid grid-cols-10">

                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="firstGear"
                            value="1ST"
                        />
                    </div>
                    <TextInput
                        onChange={handleFirstChange}
                        value={gears[0]}
                        id="firstGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="secondGear"
                            value="2ND"
                        />
                    </div>
                    <TextInput
                        onChange={handleSecondChange}
                        value={gears[1]}
                        id="secondGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="thirdGear"
                            value="3RD"
                        />
                    </div>
                    <TextInput
                        onChange={handleThirdChange}
                        value={gears[2]}
                        id="thirdGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="fourthGear"
                            value="4TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleFourthChange}
                        value={gears[3]}
                        id="fourthGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="fifthGear"
                            value="5TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleFifthChange}
                        value={gears[4]}
                        id="fifthGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="sixthGear"
                            value="6TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleSixthChange}
                        value={gears[5]}
                        id="sixthGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="seventhGear"
                            value="7TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleSeventhChange}
                        value={gears[6]}
                        id="seventhGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="eigthGear"
                            value="8TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleEigthChange}
                        value={gears[7]}
                        id="eigthGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="ninthGear"
                            value="9TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleNinthChange}
                        value={gears[8]}
                        id="ninthGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
                <div className="mr-1">
                    <div className="mb-2 block text-center">
                        <Label
                            htmlFor="tenthGear"
                            value="10TH"
                        />
                    </div>
                    <TextInput
                        onChange={handleTenthChange}
                        value={gears[9]}
                        id="tenthGear"
                        placeholder="3.2"
                        required
                        type="text"
                        inputMode="numeric"
                    />
                </div>
            </div>

            <Button type="submit">
                Submit
            </Button>
        </form>
    )
}


