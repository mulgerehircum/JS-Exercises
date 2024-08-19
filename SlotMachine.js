/**
 *Assignment: YDKJSY Appendix B, Practicing Prototypes
 *
 *Problem description:Define a slot machine with three reels that can individually spin(), and then display() the current 
 *contents of all the reels. The basic behavior of a single reel is defined in the reel object below. But the slot machine 
 *needs individual reels—objects that delegate to reel, and which each have a position property.
 *A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel: the current slot (position), one slot above (position - 1), and one slot below (position + 1). So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.
 *
 * @param {number} max
 * @return {number} 
 */
function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [
    // this slot machine needs 3 separate reels
    // hint: Object.create(..)

    //Instantiating 3 separate reel objects
    Object.create(reel, { position: { value: 1, writable: true } }),
    Object.create(reel, { position: { value: 2, writable: true } }),
    Object.create(reel, { position: { value: 3, writable: true } }),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    // TODO

    //Instantiating 3 arrays to store reels for printing vertically
    const topPrint = [];
    const middlePrint = [];
    const bottomPrint = [];
    
    //Collect symbols for top, middle and bottom row
    this.reels.forEach((reel) => {
      let reelSymbols = reel.symbols;
      
      //Calculating the top and bottom symbols of reel, wrapping the result in case of array overflow
      let positionTop =
        (reel.position - 1 + reelSymbols.length) % reelSymbols.length; 
      let positionBottom = (reel.position + 1) % reelSymbols.length;
      //Populating the arrays with appropriate data
        topPrint.push(reelSymbols[positionTop]);
        middlePrint.push(reelSymbols[reel.position])
        bottomPrint.push(reelSymbols[positionBottom])

    });
    //Print the result 
console.log(`${topPrint.join('|')}`);    
console.log(`${middlePrint.join('|')}`);    
console.log(`${bottomPrint.join('|')}`);    
 

    
  },
};

//Example usage
slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
