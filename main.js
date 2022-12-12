// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	};

	return newChassisObject;
}

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4;

    return chassisObject;
}

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L";

    return chassisObject;
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting";

    return chassisObject;
}

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever";

	// Return the chassis that now has a body property on it
	return chassisObject;
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive";

    return chassisObject;
}

let chassis = createChassis();
console.log(chassis);

let chassisWheels = addWheels(chassis);
console.log(chassisWheels);

let chassisEngine = addEngine(chassis);
console.log(chassisEngine);

let chassisSteeringWheel = addSteeringWheel(chassis);
console.log(chassisSteeringWheel);

let chassisBody = addBody(chassis);
console.log(chassisBody);

let chassisDriveTrain = addDriveTrain(chassis);
console.log(chassisDriveTrain);