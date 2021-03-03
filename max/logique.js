autowatch = 1;

inlets = 5;

outlets = 3;

var presenceNord = 0;
var presenceEst = 0;
var presenceSud = 0;
var presenceOuest = 0;

var emplacementActuelle;

var faceNord;
var faceEst;
var faceSud;
var faceOuest;
var faceTop;

var choixNord = 1;
var choixEst = 1;
var choixSud = 1;
var choixOuest = 1;

function msg_int(x){
    if(inlet == 0){
        if(x == 1){
            presenceNord = 1;
        }else{
            presenceNord = 0;
        }
    }
    if(inlet == 1){
        if(x == 1){
            presenceEst = 1;
        }else{
            presenceEst = 0;
        }
    }
    if(inlet == 2){
        if(x == 1){
            presenceSud = 1;
        }else{
            presenceSud = 0;
        }
    }
    if(inlet == 3){
        if(x == 1){
            presenceOuest = 1;
        }else{
            presenceOuest = 0;
        }
    }
    var presenceTotal = presenceNord + " " + presenceEst + " " + presenceSud + " " + presenceOuest;
    var disponibleToggle = !presenceNord + " " + !presenceEst + " " + !presenceSud + " " + !presenceOuest;
	
    if(inlet == 4){
        outlet(0, !presenceNord, !presenceEst, !presenceSud, !presenceOuest);
    }
}