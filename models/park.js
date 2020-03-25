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

  Park.prototype.popularDinosaur = function() {
         let maxGuests=0
         let mostPopularDino=""
      for(const dino of this.collectionOfDinosaurs){
         if (dino.guestsAttractedPerDay > maxGuests) {
              maxGuests=dino.guestsAttractedPerDay
              mostPopularDino = dino.species
         }

         
      }
      return mostPopularDino

  }
  Park.prototype.dailyVisitors= function(){
    let totalVisitors=0
  for (const dino of this.collectionOfDinosaurs) {
        totalVisitors=totalVisitors + dino.guestsAttractedPerDay ;
    }
    return totalVisitors

}

  Park.prototype.yearlyVisitors= function(){
     return 365 * this.dailyVisitors()
  }

  Park.prototype.totalRevenue = function(){
      return this.yearlyVisitors() * this.ticketPrice
  }

  Park.prototype.remove_all_dino_species = function(species){
    let dinosaurTempArray = this.collectionOfDinosaurs.filter(dino => dino.species !== species)
      
    }
   
    return this.dino_ary;
  }
  module.exports = Park;
 
  
//   let dinosaurTempArray = this.collectionOfDinosaurs.filter(dino => dino.species === species)
//   return dinosaurTempArray
// }
 