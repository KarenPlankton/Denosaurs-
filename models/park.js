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
    this.findSpecies = function(species){
       let dinosaurTempArray = collectionOfDinosaurs.filter(dino => dino.species === species)
       return dinosaurTempArray
    }
  }
  module.exports = Park;
 
  

 