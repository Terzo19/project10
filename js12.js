// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random()*4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

const pAequorFactory = (specimenNum,dna) => {
  return {  // first we need to create a factory function "pAequorFactory" with two parameters 'specimenNum' and 'dna' (dna has 15 elements)
      specimenNum,
      dna, 
      mutate(){  // then , we create the first method which mutates(changes) one random element out of the 15 in dna and returns the mutated dna
         let newArr = [];
         let tcg = ['T','C','G'];
         let acg = ['A','C','G'];
         let act = ['A','C','T'];
         let agt = ['A','G','T'];
         let oldIndex = Math.floor(Math.random()*this.dna.length);
         for(let i = 0 ; i < this.dna.length ; i++){
           if(this.dna[i] === 'A'){
             this.dna.splice(oldIndex,1,tcg[Math.floor(Math.random()*3)]);
           } else if (this.dna[i] === 'T'){
             this.dna.splice(oldIndex,1,acg[Math.floor(Math.random()*3)]); 
           } else if (this.dna[i] === 'G'){
             this.dna.splice(oldIndex,1,act[Math.floor(Math.random()*3)]);
           } else if (this.dna[i] === 'C'){
             this.dna.splice(oldIndex,1,agt[Math.floor(Math.random()*3)]);
           }
         }

        return this.dna;  
      },
      compare(pAequor){   // the second method is used to compare two dna samples that were created by the factory function and return the percentage DNA they have in common
         let counter = 0;
         let percentage = 0;
         for(let i = 0; i < pAequor.dna.length ; i++){
             if(pAequor.dna[i] === this.dna[i]){
               counter++;
             }
           }
         percentage = ((counter/15)*100).toFixed(2);
         console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`);
      },
      willLikelySurvive(){ // the third method is created to establish which DNA has the liklier chance of survival. If the DNA contains at least 60% 'C's or 'G' the method returns true, otherwise it will return false
        let occurence = 0;
        let result = 0;
        for(let i = 0 ; i < this.dna.length ; i++){
           if (this.dna[i] === 'C' || this.dna[i] === 'G' ){
             occurence++;
           }
        }
        result = ((occurence/15)*100).toFixed(2); 

        if(result >= 60){
          return true;
        }else {
          return false;
        }      
      }
  }
}

//Creating new samples using the factory function
const pAequor1 = pAequorFactory(1,mockUpStrand());
const pAequor2 = pAequorFactory(2,mockUpStrand());

//logging the new samples dna results on the console
console.log(pAequor1.dna);
console.log(pAequor2.dna);

//logging the mutated dna samples of the created objects 
console.log(pAequor1.mutate());
console.log(pAequor2.mutate());

//comparing the two objects dna samples
console.log(pAequor1.compare(pAequor2));

//logging what is the chance of survival of the two object's dna samples.
console.log(pAequor1.willLikelySurvive());
console.log(pAequor2.willLikelySurvive());