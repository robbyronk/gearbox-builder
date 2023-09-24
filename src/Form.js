import {Button, Label, TextInput} from 'flowbite-react';
import {getGearsCount, updateCount} from "./reducers/gears";
import {useDispatch, useSelector} from "react-redux";

export default function Form() {
    const gearsCount = useSelector(getGearsCount)
    const dispatch = useDispatch();

    function handleGearsChange(event) {
        dispatch(updateCount(event.target.value))
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


