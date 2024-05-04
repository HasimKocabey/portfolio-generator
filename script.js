document.getElementById('info-form').addEventListener('input', () => {
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

  const previewContent = `
    <img class="center circle" src="${URL.createObjectURL(foto)}" alt="${name} ${vorname}" />
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
});
