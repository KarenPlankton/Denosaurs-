const Park = function (name,ticketPrice, collectionOfDinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
    this.addDinosaur = function(newDinosaur) {
        collectionOfDinosaurs.push(newDinosaur);
    }
    this.removeDinosaur = function() {
        collectionOfDinosaurs.pop();
    }
    this.mostPopulalDinosaur = function() {
        let returnDino
        let maximumVisitors = 0
       for (let dinosaur of collectionOfDinosaurs ){
           let curentDinVis=dinosaur.guestsAttractedPerDay
        if ( curentDinVis>maximumVisitors ) {
            maximumVisitors=curentDinVis
            returnDino=dinosaur
        }   
       }
       return returnDino
    } 
    this.findSpecies = function(){
       

    }
  }

  
  
  module.exports = Park;
  

 