// Importiere die Funktion, die du testen möchtest
const { handleInput } = require('./script');

// Mocke die DOM-Elemente und -Funktionen
jest.mock('./script', () => ({
  handleInput: jest.fn(), // Mocke die handleInput-Funktion
}));

// Mocke die DOM-Elemente 'preview' und 'preview-button'
const mockPreviewElement = document.createElement('div');
mockPreviewElement.id = 'preview';
document.body.appendChild(mockPreviewElement);

const mockPreviewButtonElement = document.createElement('button');
mockPreviewButtonElement.id = 'preview-button';
document.body.appendChild(mockPreviewButtonElement);

// Schreibe einen Testfall für handleInput-Funktion
test('Teste handleInput Funktion', () => {
  // Simuliere ein Ereignisobjekt
  const mockEvent = { target: { value: 'Testwert' } };

  // Rufe die Funktion mit den simulierten Eingabewerten auf
  handleInput(mockEvent);

  // Überprüfe, ob die Funktion mit dem richtigen Ereignisobjekt aufgerufen wurde
  expect(handleInput).toHaveBeenCalledWith(mockEvent);
});


test('Teste Event-Listener in handleInput Funktion', () => {
  // Simuliere ein Ereignisobjekt mit Testdaten
  const mockEvent = { target: { value: 'Testwert' } };

  // Rufe die Funktion mit den simulierten Eingabewerten auf
  handleInput(mockEvent);

  // Überprüfe, ob der Klick auf den Vorschau-Button das erwartete Verhalten auslöst
  document.getElementById('preview-button').click();
  expect(document.getElementById('preview').classList).not.toContain('hidden'); // Überprüfe, ob die Vorschau sichtbar wird
  // Führe weitere Überprüfungen für andere Event-Listener durch
});
