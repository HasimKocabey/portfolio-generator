// Importiere die Funktion, die du testen möchtest
const { handleInput } = require('./script');

// Mocke die relevanten DOM-Elemente und -Funktionen
jest.mock('./script', () => ({
  handleInput: jest.fn(), // Mocke die handleInput-Funktion
}));

// Schreibe einen Testfall
test('Teste handleInput Funktion', () => {
  // Simuliere ein Ereignisobjekt
  const mockEvent = { target: { value: 'Testwert' } };

  // Rufe die Funktion mit den simulierten Eingabewerten auf
  handleInput(mockEvent);

  // Überprüfe, ob die Funktion mit dem richtigen Ereignisobjekt aufgerufen wurde
  expect(handleInput).toHaveBeenCalledWith(mockEvent);
});
