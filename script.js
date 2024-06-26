// Extrahiere die DOM-Manipulationen in eine separate Funktion
 function handleInputEvent() {
  const name = document.getElementById('name').value;
  const vorname = document.getElementById('vorname').value;
  const kurzbeschreibung = document.getElementById('kurzbeschreibung').value;
  const wohnort = document.getElementById('wohnort').value;
  const telefonnummer = document.getElementById('telefonnummer').value;
  const email = document.getElementById('email').value;
  const farbe = document.getElementById('farbe').value;
  const foto = document.getElementById('foto').files[0];
  const Projekte = document.getElementById('Projekte').value;
  const Programmiersprachen = document.getElementById('Programmiersprachen').value;
  const BeruflicheErfahrungen = document.getElementById('Berufliche Erfahrungen').value;

  const preview = document.getElementById('preview');
  preview.innerHTML = ''; 

  // Überprüfen, ob ein Bild hochgeladen wurde
  const fotoUrl = foto ? URL.createObjectURL(foto) : ''; // Wenn ein Bild hochgeladen wurde, erstelle die URL, sonst eine leere Zeichenkette

  const previewContent = `
    <img class="center circle" src="${fotoUrl}" alt="${name} ${vorname}" />
    <h1 class="center">${vorname} ${name}</h1>
    <p class="center">${kurzbeschreibung}</p>
    <p class="center">${wohnort}</p>
    <p class="center">${telefonnummer}</p>
    <p class="center">${email}</p>
    <h2 class="center">Projekte</h2>
    <p class="center">${Projekte}</p>
    <h2 class="center">Programmiersprachen</h2>
    <p class="center">${Programmiersprachen}</p>
    <h2 class="center">Berufliche Erfahrungen</h2>
    <p class="center">${BeruflicheErfahrungen}</p>
  `;

  preview.innerHTML = previewContent;
  preview.style.backgroundColor = farbe;

  document.getElementById('preview-button').addEventListener('click', () => {
    if (!validateForm()) {
      return;
    }
    preview.classList.remove('hidden');
    document.getElementById('download-button').classList.remove('hidden');
    document.getElementById('preview-button').classList.add('hidden');
  });

  document.getElementById('download-button').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = preview.outerHTML;
    link.download = 'portfolio.html';
    link.click();
  });
}

// Füge den Event-Listener hinzu und rufe die DOM-Manipulationsfunktion auf
document.getElementById('info-form').addEventListener('input', handleInputEvent);

// Funktion zur Validierung des Formulars
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const vorname = document.getElementById('vorname').value.trim();
  const Projekte = document.getElementById('Projekte').value.trim();

  // Überprüfen, ob Name, Vorname und Projekte ausgefüllt sind
  if (name === '' || vorname === '' || Projekte === '') {
    alert('Bitte geben Sie mindestens Ihren Namen, Vornamen und Projekte ein.');
    return false;
  }

    return true;
}

function showAlert(message) {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert-container');

  const alertMessage = document.createElement('p');
  alertMessage.textContent = message;
  alertContainer.appendChild(alertMessage);

  const okButton = document.createElement('button');
  okButton.textContent = 'OK';
  okButton.addEventListener('click', closeAlert);
  alertContainer.appendChild(okButton);

  document.body.appendChild(alertContainer);


}








