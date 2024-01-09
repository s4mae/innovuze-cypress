class POM {
    
    getFirstThreeWords(field){
      return cy.get(field)
               .invoke('text')
               .then((text) => {
                const wordsArray = text.trim().split(/\s+/);
                return `${wordsArray[0]} ${wordsArray[1]} ${wordsArray[2]}`;
               });
   }

   getFirstThreeLetters(field){
    return cy.get(field)
             .invoke('text')
             .then((text) => {
              const wordsArray = text.split(/\s+/);
              const firstThreeLetters = wordsArray[0].slice(0, 3);
              return `${firstThreeLetters} ${wordsArray[1]}`;
             });
  }

  getFirstWord(field){
    return cy.get(field)
             .invoke('text')
             .then((text) => {
              const wordsArray = text.trim().toLowerCase().split(/\s+/);
              if (wordsArray[0] == 'project'){
                wordsArray[0] = 'pm';
              } 
              else if(wordsArray[0] == 'ui/ux'){
                wordsArray[0] = 'uiux'
              }
              return `${wordsArray[0]}`;
             });
 }
  }

  export default new POM();
