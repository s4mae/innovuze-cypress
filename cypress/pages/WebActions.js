class POM {
    getCareerCombinedWords(index) {
      return cy.get('section.careers > div > div.background-green > div.container-fluid > div.row > div:nth-child(2) > div:nth-child(1) a')
        .eq(index)
        .invoke('text')
        .then((text) => {
          const wordsArray = text.split(/\s+/);
          return `${wordsArray[0]} ${wordsArray[1]} ${wordsArray[2]}`;
        });
    }
    getCareerSecondCombinedWords(index) {
        return cy.get('.accordion-button')
          .eq(index)
          .invoke('text')
          .then((text) => {
            const wordsArray = text.split(/\s+/);
            return `${wordsArray[1]} ${wordsArray[2]} ${wordsArray[3]}`;
          });
      }
  }

  export default new POM();
