// Компонент моє місто
function CityInfo() {
  const cityName = "Вінниця";
  const country = "Україна";
  const foundedYear = 1363;

  return (
    <div>
      <h1>Місто: {cityName}</h1>
      <p><b>Країна:</b> {country}</p>
      <p><b>Рік заснування:</b> {foundedYear}</p>

      <h3>Пам'ятки міста:</h3>
      <div>
        <p>1. Водонапірна вежа</p>
<img src="/vintower.jpg" alt="Водонапірна вежа" width="300" />

<p>2. Національний музей-садиба М. І. Пирогова</p>
<img src="/pyrogov.jpg" alt="Садиба Пирогова" width="300" />

<p>3. Спасо-Преображенський собор</p>
<img src="/sobor.jpg" alt="Спасо-Преображенський собор" width="300" />
      </div>
    </div>
  );
}

// Компонент улюблена книга
function FavoriteBook() {
  const title = "Віщі сестри";
  const author = "Сер Теренс Девід Джон Пратчетт (Террі Пратчетт)";
  const genre = "Гумористичне фентезі";
  const pages = 352;

  return (
    <div>
      <h1>Улюблена книга: {title}</h1>
      <img src="/wyrdsis.jpg" alt="Обкладинка книги Віщі сестри" width="220" />
      <p><b>Автор:</b> {author}</p>
      <p><b>Жанр:</b> {genre}</p>
      <p><b>Кількість сторінок:</b> {pages}</p>

      <h3>Рецензії:</h3>
      <ul>
        <li>Блискуча і дотепна пародія на шекспірівського «Макбета» та театральне мистецтво.</li>
        <li>Тріо відьом — Бабуня Дощевіск, Тітуня Оґґ та Маґрат Часник — просто неперевершені, кожен діалог хочеться розібрати на цитати.</li>
        <li>Ідеальне поєднання фірмового британського гумору, гострої сатири та глибоких думок про силу слова.</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CityInfo />
      <hr />
      <FavoriteBook />
    </div>
  );
}