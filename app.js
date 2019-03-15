var Noble = require("noble");
var BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

scanner.onadvertisement = (advertisement) => {
    var beacon = advertisement["iBeacon"];
    beacon.rssi = advertisement["rssi"];

    var dist = calculateDistance(beacon.rssi);
    console.log(dist);
    
    //console.log(JSON.stringify(beacon, null, "    "));
};

scanner.startScan().then(() => {
    console.log("Scanning for BLE devices...")  ;
}).catch((error) => {
    console.error(error);
});

function calculateDistance(rssi) {
    var txPower = -59 //hard coded power value. Usually ranges between -59 to -65
    if (rssi == 0) {
      return -1.0; 
    }
    var ratio = rssi*1.0/txPower;
    if (ratio < 1.0) {
      return Math.pow(ratio,10);
    }
    else {
      var distance =  (0.89976)*Math.pow(ratio,7.7095) + 0.111;    
      return distance;
    }
  } 