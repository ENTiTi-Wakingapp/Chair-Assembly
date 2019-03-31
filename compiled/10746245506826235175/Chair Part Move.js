/// <reference path="../wakingapp.d.ts" />
var userVariables = {};
function update(deltaTime)
{let pos = (Space.local == Space.world) ? findObjectByName("Chair").transform.getChildByName(userVariables["Chair Part Number"].toString(), false).transform.position : findObjectByName("Chair").transform.getChildByName(userVariables["Chair Part Number"].toString(), false).transform.localPosition;
let dirToMove = Vector3.subtract(new Vector3(0.000000,0.000000,0.000000), pos);
dirToMove.normalize();
dirToMove.multiply((deltaTime*50));
Vector3.distance(pos, new Vector3(0.000000,0.000000,0.000000)) > dirToMove.length ? 
findObjectByName("Chair").transform.getChildByName(userVariables["Chair Part Number"].toString(), false).transform.translate(dirToMove, Space.local) : ((Space.local == Space.world)  ? findObjectByName("Chair").transform.getChildByName(userVariables["Chair Part Number"].toString(), false).transform.position = new Vector3(new Vector3(0.000000,0.000000,0.000000)) : findObjectByName("Chair").transform.getChildByName(userVariables["Chair Part Number"].toString(), false).transform.localPosition = new Vector3(new Vector3(0.000000,0.000000,0.000000)));
}
function onTouchStarted()
{if((userVariables["Chair Part Number"] < 14)) {
if((findObjectByName("Chair").transform.getChildByName(userVariables["Chair Part Number"].toString(), false).transform.localPosition.length == 0)) {
userVariables["Chair Part Number"]=(userVariables["Chair Part Number"]+1);


} else{

}



} else{

}
}
function start()
{userVariables["Chair Part Number"]=0;

}
