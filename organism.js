// Returns a random DNA base. base code provided by Codecademy
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
    }
  
// Returns a random single strand of DNA containing 15 bases. base code provided by Codecademy
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
    }

// create an object factory with 2 attributes and 3 methods
// dna strand stored in an array
// returns an organism object
const organismFactory = (num, arr) => {
    return {
        specimenNum: num, 
        dna: arr, 
        
        // this method will mutate the dna strand at one location
        mutate() {   
            let random = returnRandBase();
            let randIndex = Math.floor(Math.random() * 15);
            let value = this.dna[randIndex];
            // need to ensure that the base does get changed to a different value
            while (random === value) {
                randIndex = Math.floor(Math.random() * 15);
                value = this.dna[randIndex];
            }
            this.dna[randIndex] = random;
            }, 
        
        // this method compares the DNA strands of 2 organisms
        // looks at the value and the location and checks sameness
        // logs a message to the console about the percentage of DNA in common
        compareDNA(organism) {
            let same = 0;
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] === organism.dna[i]) {
                    same++;
                }
                }
            let percent = same / 15 * 100;
            console.log("specimen #" + this.specimenNum + " and specimen #" + organism.specimenNum + " have " + percent.toFixed(0) + "% DNA in common");
            },
        
        // this method calculates the likelihood of the organism surviving
        // if 60% or more of DNA strand includes 'C' or 'G' elements
        // then it is more likely to survive
        willLikelySurvive() {
            let survive = 0;
            this.dna.forEach((element) => {
                if (element === 'C' || element === 'G') {
                survive++;
                }
            });
            return (survive / 15 * 100) >= 60;
      }
    }
  }
 

// creating an array of 30 organisms likely to survive
canSurvive = [];
iter = 1;
while (canSurvive.length <= 30) {
    let strand = mockUpStrand();
    let org = organismFactory(iter, strand);
    if (org.willLikelySurvive()) {
      canSurvive.push(org.dna);
      iter++;
    }
  }
  

  
  
  
  
  
