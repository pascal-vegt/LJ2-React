import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  // Stap 2: Maak een useState met message en setMessage
  const [message, setMessage] = useState('');

  // Stap 3: Importeer useEffect en gebruik het om het bericht te updaten op basis van het tijdstip van de dag
  useEffect(() => {
    // Maak een variabele aan om de huidige tijd op te halen
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage = '';

    // Bepaal of het ochtend, middag of avond is
    if (hours < 12) {
      newMessage = 'Goedemorgen';
    } else if (hours >= 12 && hours < 18) {
      newMessage = 'Goedemiddag';
    } else {
      newMessage = 'Goedenavond';
    }

    // Gebruik useState om de status van message bij te werken
    setMessage(newMessage);
  }, []); // Lege array als tweede parameter zorgt ervoor dat useEffect alleen bij de eerste render wordt uitgevoerd

  // Stap 4: Toon het bericht in de WelcomeMessage-component
  return (
    <div>
      <h1>{message}, welkom!</h1>
      {/* Hier kun je eventueel andere content van de welkomstboodschap toevoegen */}
    </div>
  );
};

export default WelcomeMessage;