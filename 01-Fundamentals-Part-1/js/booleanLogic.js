// AND OR NOT
const hasDrivenLicense = true;
const hasGoodVision = true;

console.log(hasDrivenLicense && hasGoodVision);

console.log(hasDrivenLicense || hasGoodVision);

console.log(!hasDrivenLicense);

let shouldDrive = hasDrivenLicense && hasGoodVision;

if (shouldDrive) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

const isTired = false;

shouldDrive = hasDrivenLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}
