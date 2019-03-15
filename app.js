const noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

scanner.onadvertisement = (advertisement) => {
    //var beacon = advertisement["iBeacon"];
    console.log(JSON.stringify(advertisement, null, "   "));
}

scanner.startScan().then(( ) =>{
    console.log("Scanning started");
}).catch(error => {
    console.error(error);
});