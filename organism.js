// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
    }
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
const pAequorFactory = (num, arr) => {
    return {
        specimenNum: num, 
        dna: arr, 
    mutate() {
      let random = returnRandBase();
      let randIndex = Math.floor(Math.random() * 15);
      let value = this.dna[randIndex];
      while (random === value) {
        randIndex = Math.floor(Math.random() * 15);
        value = this.dna[randIndex];
      }
      this.dna[randIndex] = random;
    }, 
    compareDNA(pAequor) {
      let same = 0;
      for (let i = 0; i < 15; i++) {
        let one = this.dna[i];
        let two = pAequor.dna[i];
        if (one === two) {
            same++;
          }
        }
      let percent = same / 15 * 100;
      console.log("specimen #" + this.specimenNum + " and specimen #" + pAequor.specimenNum + " have " + percent.toFixed(0) + "% DNA in common");
      },
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
  
canSurvive = [];
it = 0;
while (canSurvive.length < 30) {
    let strand = mockUpStrand();
    let org = pAequorFactory(it, strand);
    if (org.willLikelySurvive()) {
      canSurvive.push(org.dna);
      it++;
    }
  }
  
console.log(canSurvive.length);
console.log(canSurvive[2]);
  
  
  
  
  