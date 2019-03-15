var Noble = require("noble");
var BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

scanner.onadvertisement = (advertisement) => {
 //   var beacon = advertisement["iBeacon"];
 //   beacon.rssi = advertisement["rssi"];
    var beacon = { "hallo" : "hi" };
    console.log(JSON.stringify(beacon, null, "    "));
};

scanner.startScan().then(() => {
    console.log("Scanning for BLE devices...")  ;
}).catch((error) => {
    console.error(error);
});