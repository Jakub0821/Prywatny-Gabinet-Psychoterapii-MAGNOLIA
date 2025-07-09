const toggleBtn = document.getElementById('toggle-family-info');
const infoContainer = document.getElementById('family-info');

const familyHTML = `
  
  <ul class="therapy-points">
    <li>komunikacja</li>
    <li>wyrażanie emocji</li>
    <li>granice i wzorce bliskości i dystansu</li>
    <li>relacje w rodzinie</li>
    <li>fazy cyklu życia</li>
    <li>hierarchia i struktura ról</li>
    <li>wypełnianie zadań</li>
    <li>wzorce rozwiązywania problemów i konfliktów</li>
    <li>przekonania w rodzinie</li>
    <li>zasoby rodziny</li>
    <li>obciążenia i czynniki stresujące</li>
  </ul>
`;

toggleBtn.addEventListener('click', () => {
  const isVisible = infoContainer.style.display === 'block';
  infoContainer.style.display = isVisible ? 'none' : 'block';
  toggleBtn.textContent = isVisible ? 'Pokaż więcej' : 'Pokaż mniej';

  if (!isVisible && !infoContainer.innerHTML.trim()) {
    infoContainer.innerHTML = familyHTML;
  }
});