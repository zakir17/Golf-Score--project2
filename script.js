let name = window.prompt("what is your name?");

let games= window.prompt("Would you like to play 3 or 6 holes?"); 
console.log(name);
console.log(games);


if (games === "3") {
    document.write("Hello "+ name + ", you are playing 3 games!");
    document.write("<br>");

 
    score = 0
    for ( let x = 1; x <= 3; x++){
        let round3 = prompt("How many putts for hole " + x + "?");
        document.write("<br>");
        document.write( "Putts for hole " + x + ": ")
        document.write(round3);
        console.log(round3);Z
        score += parseInt(round3);
        document.write("<br>") ;
        }
    total = score - 9    
    console.log(score);
     if (total > 0){
        document.write( 'Nice try, ' + name + '. Your total par was:+' +total) ;
     }
    else if (total < 0 ){
        document.write("Great job, "+name+"! Your total par was: "+total );
    }
     else {
        // if toatl === 0 //
        document.write( "Good Game, "+name+ ". Your total par was: 0" )
     }
     
}
else if (games === "6") {
    document.write("Hello "+ name + ", you are playing 6 games!");
    document.write("<br>")
    score1 = 0
    for ( let x = 1; x <= 6; x++){
        let round6 = prompt("How many putts for hole " + x + "?");
        document.write("<br>");
        document.write( "Putts for hole " + x + ": ")
        document.write(round6);
        console.log(round6);
        score1 += parseInt(round6);
        document.write("<br>") ;
        }
    total1 = score1 - 18    
    console.log(score1);

    if (total1 > 0) {
        document.write( 'Nice try, ' + name + '. Your total par was:+' +total1) ;
     }
    else if (total1 < 0 ){
        document.write("Great job, "+name+"! Your total par was: "+total1 );
    }
     else {
        // if toatl === 0 //
        document.write( "Good Game, "+name+ ". Your total par was: 0" )
     }

}
else {
    alert (window.prompt( "Invalid entry") );
}

