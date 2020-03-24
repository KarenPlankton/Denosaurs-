const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {

    let dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    let dinosaur2 = new Dinosaur('stegosaurus','herbivore',45);
    let dinosaur3 = new Dinosaur('triceratops','herbivore',55);
    let dinosaurArray = [dinosaur1,dinosaur2,dinosaur3]
     park = new Park('hollywoodPark', 10 , dinosaurArray);
    

  })

  it('should have a name',function() {
    const actual = park.name;
    assert.strictEqual(actual, 'hollywoodPark');

  });

  it('should have a ticket price',function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual,10)

  });

  it('should have a collection of dinosaurs',function() {
    const actual = park.collectionOfDinosaurs;
    assert.strictEqual(actual.length,3)
  });

  it('should be able to add a dinosaur to its collection',function() {
    let dinosaur4 = new Dinosaur('velociraptor','carnivore',50);
    park.addDinosaur(dinosaur4);
    const actual = park.collectionOfDinosaurs;
    assert.strictEqual(actual.length,4)
  });

  it('should be able to remove a dinosaur from its collection',function() {
    park.removeDinosaur();
    const actual = park.collectionOfDinosaurs;
    assert.strictEqual(actual.length,2)

  });
   

  it('should be able to find the dinosaur that attracts the most visitors',function() {
    
    
    assert.strictEqual(actual,dinosaur3)

  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
