describe('Check for dead links', function(){

      var links = ['https://jumpcut.com',
    'https://jumpcut.com/reviews','https://jumpcut.com/about',
    'https://jumpcut.com/enroll/va','https://jumpcut.com/enroll/bvaazi',
    'https://jumpcut.com/enrollment/va','https://jumpcut.com/enroll/gd5vbvp',
    'https://jumpcut.com/enroll/s3oygo', 'https://jumpcut.com/enroll/tfxtdr5h',
    'http://jumpcut.com/enroll/jt6m7b6r6x', 'https://jumpcut.com/enroll/sf8wyj', 
    'https://jumpcut.com/enroll/ne9jp9m', 'https://jumpcut.com/enroll/ws1jl7',
    'https://jumpcut.com/enroll/c8ztp9', 'https://jumpcut.com/enroll/dt4w9gf',
    'https://jumpcut.com/enroll/m513mp', 'https://jumpcut.com/enroll/0iwqfp8',
    'https://jumpcut.com/enroll/cf0upgq', 'https://jumpcut.com/enroll/ct7bnsp', 
    'https://jumpcut.com/automated-income-machine','https://jumpcut.com/contagious-content',
    'https://jumpcut.com/viral-academy', 'https://jumpcut.com/viral-academy-1',
    'https://jumpcut.com/viral-academy-2', 'https://jumpcut.com/money-back',
    'https://jumpcut.com/careers', 'https://jumpcut.com/1/aimvpa/optin',
    'https://jumpcut.com/1/skz6okb/optin']
    
    links.forEach(element => {
        it('Check for '+ element, function(){
          cy.request(element, {'failOnStatusCode': true})
      });
  });
});
