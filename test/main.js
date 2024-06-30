const kaarten = [
    { titel: 'Berg Uitzicht', beschrijving: 'Bekijk al deze prachtige bergreizen met mooie uitzichten op, je raadt het al, de bergen', knop: 'Bekijk Reizen' },
    { titel: 'Naar Het Strand', beschrijving: 'Plan je volgende strandreis met deze geweldige bestemmingen', knop: 'Bekijk Reizen' },
    { titel: 'Woestijnbestemmingen', beschrijving: 'Het is de woestijn waar je altijd van hebt gedroomd', knop: 'Boek Nu' },
    { titel: 'Verken Het Heelal', beschrijving: 'Serieus, gewoon direct de ruimte in schieten vandaag', knop: 'Boek Nu' }
  ];
  
  function maakKaart(titel, beschrijving, knop) {
    const kaartDiv = document.createElement('div');
    kaartDiv.classList.add('kaart');
  
    const inhoudDiv = document.createElement('div');
    inhoudDiv.classList.add('inhoud');
  
    const titelElement = document.createElement('h2');
    titelElement.classList.add('titel');
    titelElement.textContent = titel;
  
    const beschrijvingElement = document.createElement('p');
    beschrijvingElement.classList.add('beschrijving');
    beschrijvingElement.textContent = beschrijving;
  
    const knopElement = document.createElement('button');
    knopElement.classList.add('btn', 'knop');
    knopElement.textContent = knop;
  
    inhoudDiv.appendChild(titelElement);
    inhoudDiv.appendChild(beschrijvingElement);
    inhoudDiv.appendChild(knopElement);
    kaartDiv.appendChild(inhoudDiv);
  
    document.querySelector('.pagina-inhoud').appendChild(kaartDiv);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    kaarten.forEach(kaart => {
      maakKaart(kaart.titel, kaart.beschrijving, kaart.knop);
    });
  });
  