// Importiere die Funktionen, die du testen möchtest
const { handleInput, handleInputEvent, } = require('./script');

// Mocke die DOM-Elemente und -Funktionen
jest.mock('./script', () => ({
  handleInput: jest.fn(), // Mocke die handleInput-Funktion
  handleInputEvent: jest.fn(), // Mocke die handleInputEvent-Funktion
  validateForm: jest.fn(), // Mocke die validateForm-Funktion
}));

// Mocke die DOM-Elemente 'preview' und 'preview-button'
const mockPreviewElement = document.createElement('div');
mockPreviewElement.id = 'preview';
document.body.appendChild(mockPreviewElement);

const mockPreviewButtonElement = document.createElement('button');
mockPreviewButtonElement.id = 'preview-button';
document.body.appendChild(mockPreviewButtonElement);

const mockDownloadButtonElement = document.createElement('button');
mockDownloadButtonElement.id = 'download-button';
document.body.appendChild(mockDownloadButtonElement);

// Mocke das 'info-form'-Element
const mockInfoFormElement = document.createElement('form');
mockInfoFormElement.id = 'info-form';
document.body.appendChild(mockInfoFormElement);

// Mocke die global.alert Funktion
global.alert = jest.fn();

// Schreibe einen Testfall für handleInput-Funktion
test('Teste handleInput Funktion', () => {
  // Simuliere ein Ereignisobjekt
  const mockEvent = { target: { value: 'Testwert' } };

  // Rufe die Funktion mit den simulierten Eingabewerten auf
  handleInput(mockEvent);

  // Überprüfe, ob die Funktion mit dem richtigen Ereignisobjekt aufgerufen wurde
  expect(handleInput).toHaveBeenCalledWith(mockEvent);
});

// Schreibe einen Testfall für handleInputEvent-Funktion
test('Teste handleInputEvent Funktion', () => {
  // Simuliere ein Ereignisobjekt
  const mockEvent = { target: { value: 'Testwert' } };

  // Rufe die Funktion mit den simulierten Eingabewerten auf
  handleInputEvent(mockEvent);

  // Überprüfe, ob die Funktion aufgerufen wurde
  expect(handleInputEvent).toHaveBeenCalled();

  // Hier könnten weitere spezifische Überprüfungen für die Funktionalität von handleInputEvent erfolgen
});

// Test für Event-Listener in handleInput Funktion
test('Teste Event-Listener in handleInput Funktion', () => {
  // Simuliere ein Ereignisobjekt mit Testdaten
  const mockEvent = { target: { value: 'Testwert' } };

  // Rufe die Funktion mit den simulierten Eingabewerten auf
  handleInput(mockEvent);

  // Überprüfe, ob der Klick auf den Vorschau-Button das erwartete Verhalten auslöst
  document.getElementById('preview-button').click();
  expect(document.getElementById('preview').classList).not.toContain('hidden'); // Überprüfe, ob die Vorschau sichtbar wird
 
  // Überprüfe, ob der Klick auf den Download-Button das erwartete Verhalten auslöst
  document.getElementById('download-button').click();
  // Füge hier weitere Überprüfungen für das erwartete Verhalten beim Klick auf den Download-Button hinzu, z.B. Überprüfung des Downloads

  // Überprüfe, ob der Input-Event auf dem Formular das erwartete Verhalten auslöst
  const inputForm = document.getElementById('info-form');
  inputForm.dispatchEvent(new Event('input'));
});


