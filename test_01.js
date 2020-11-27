autowatch = 1;

inlets = 5;
outlets = 5;

var presenceNord = 0;
var presenceSud = 0;
var presenceEst = 0;
var presenceOuest = 0;

var emplacementActuelle;

var faceNord;
var faceSud;
var faceEst;
var faceOuest;
var faceTop;

var choixNord = 1;
var choixSud = 1;
var choixEst = 1;
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
            presenceSud = 1;
        }else{
            presenceSud = 0;
        }
    }
    if(inlet == 2){
        if(x == 1){
            presenceEst = 1;
        }else{
            presenceEst = 0;
        }
    }
    if(inlet == 3){
        if(x == 1){
            presenceOuest = 1;
        }else{
            presenceOuest = 0;
        }
    }
    var presenceTotal = presenceNord + " " + presenceSud + " " + presenceEst + " " + presenceOuest;
    var disponibleToggle = !presenceNord + " " + !presenceSud + " " + !presenceEst + " " + !presenceOuest;

    if(inlet == 4){
        if(x == 0){
            faceNord = 1;
            emplacementActuelle = "faceNord";
        }else{
            faceNord = 0;
        }

        if(x == 1){
            faceSud = 1;
            emplacementActuelle = "faceSud";
        }else{
            faceSud = 0;
        }

        if(x == 2){
            faceEst = 1;
            emplacementActuelle = "faceEst";
        }else{
            faceEst = 0;
        }

        if(x == 3){
            faceOuest = 1;
            emplacementActuelle = "faceOuest";
        }else{
            faceOuest = 0;
        }

        if(x == 4){
            faceTop = 1;
            emplacementActuelle = "faceTop";
        }else{
            faceTop = 0;
        }
        var disponibleRadio = !(x == 0) + " " + !(x == 1) + " " + !(x == 2) + " " + !(x == 3) + " " + !(x == 4);
        
        if(presenceNord || faceNord){
            choixNord = 0;
        }
        else{
            choixNord = 1;
        }
        if(presenceSud || faceSud){
            choixSud = 0;
        }
        else{
            choixSud = 1;
        }
        if(presenceEst || faceEst){
            choixEst = 0;
        }
        else{
            choixEst = 1;
        }
        if(presenceOuest || faceOuest){
            choixOuest = 0;
        }
        else{
            choixOuest = 1;
        }

        outlet(0, choixNord, choixSud, choixEst, choixOuest);
        outlet(1, choixSud);
        outlet(2, choixEst);
        outlet(3, choixOuest);

        sendMessage();
    }

    function sendMessage(){
        post("------------------------------------------------------------------ \n");
        post("L'emplacement actuelle est: " + emplacementActuelle + "\n");
        post("Avec l'emplacement actuelle, je peux donc aller à: " + disponibleRadio + "\n");
        post();
        post("Il y a présentement une présence à: " + presenceTotal + "\n");
        post("Avec les présences actuelles, je peux donc aller à: " +  disponibleToggle + "\n");
        post();
        if(!choixNord && !choixSud && !choixEst && !choixOuest){
            post("Je ne peux aller qu'en haut\n");  
        }
        else if(choixNord && !choixSud && !choixEst && !choixOuest){
            post("Je ne peux aller qu'au Nord\n");
        }
        else if(!choixNord && choixSud && !choixEst && !choixOuest){
            post("Je ne peux aller qu'au Sud\n");
        }
        else if(!choixNord && !choixSud && choixEst && !choixOuest){
            post("Je ne peux aller qu'au Est\n");
        }
        else if(!choixNord && !choixSud && !choixEst && choixOuest){
            post("Je ne peux aller qu'au Ouest\n");
        }
        else{
            post("Mes possibilités finales sont: " + choixNord + " " + choixSud + " " + choixEst + " " + choixOuest + "\n");
            //Math.floor(Math.random() * )
        }
        //post("Finalement, je vais à: " + choixFinal + "\n");
        post("------------------------------------------------------------------ \n");
    }

/*
    var tableauChoix = [0, 1, 2, 3];
    if (inlet == 4){
        var tableauIndex = tableauChoix.indexOf(x);
        if(tableauIndex != -1){
            tableauChoix.splice(tableauIndex, 1);
            Start();
        }
    }

    if(inlet == 0){
        if(x == 1){
            var tableauRemove = tableauChoix.indexOf(x);
            if(tableauRemove != -1){
                tableauChoix.splice(tableauRemove, 1);
                Start();
            }
        }
    }

    function Start(){
        post(tableauChoix + "\n");
    }
    */
}

