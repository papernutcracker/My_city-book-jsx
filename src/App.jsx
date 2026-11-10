import React, { useState, useEffect } from 'react';
import dunePoster from './dune.jpg';
import avatar from './avatar.jpg'; 
import petPhoto from './pet.jpg';

// компонентт для фільму
const MoviePoster = (props) => (
  <div><img src={props.posterUrl} alt="Афіша" width="220" /></div>
);

const MovieInfo = (props) => (
  <div>
    <h2>{props.title}</h2>
    <p><strong>Режисер:</strong> {props.director}</p>
    <p><strong>Рік:</strong> {props.year}</p>
    <p><strong>Жанр:</strong> {props.genre}</p>
  </div>
);

const MovieCard = (props) => (
  <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
    <MoviePoster posterUrl={props.posterUrl} />
    <MovieInfo {...props} />
  </div>
);

// компоненти для персональної сторінки
const ProfilePhoto = (props) => (
  <div><img src={props.photoUrl} alt="Моє фото" style={{ width: '200px', borderRadius: '10px' }} /></div>
);

const ProfileInfo = (props) => (
  <div>
    <h2>{props.fullName}</h2>
    <p><strong>Місто:</strong> {props.city}</p>
    <p><strong>Email:</strong> {props.email}</p>
  </div>
);

const SkillsSection = (props) => (
  <div>
    <h3>Навички та досвід</h3>
    <p><strong>Освіта:</strong> {props.education}</p>
    <p><strong>Frontend (JS):</strong> {props.jsSkills}</p>
    <p><strong>Backend (.NET):</strong> {props.dotnetSkills}</p>
  </div>
);

const PersonalPage = () => (
  <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
    <ProfilePhoto photoUrl={avatar} />
    <div>
      <ProfileInfo fullName="Діана Присяжнюк" city="Вінниця" email="papernutcracker@gmail.com" />
      <SkillsSection 
        education="IT STEP Academy (Software Development)"
        jsSkills="JavaScript, React, HTML5 & CSS3"
        dotnetSkills="C# / .NET, SQL, OOP, SOLID"
      />
    </div>
  </div>
);

// компоненти для годинника
const TimeDisplay = (props) => (
  <div style={{ marginTop: '20px', fontSize: '24px' }}>
    <h2>Поточний час:</h2>
    <p style={{ fontWeight: 'bold', color: '#007BFF' }}>{props.time}</p>
  </div>
);

const ClockPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect запускає таймер, який щосекунди оновлює стан time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <TimeDisplay time={time} />;
};

// компоненти для улюбленця
const PetPhoto = (props) => (
  <div><img src={props.photoUrl} alt="Улюбленець" style={{ width: '200px', borderRadius: '50%' }} /></div>
);

const PetInfo = (props) => (
  <div>
    <h2>{props.name}</h2>
    <p><strong>Вид:</strong> {props.species}</p>
    <p><strong>Вік:</strong> {props.age}</p>
    <p><strong>Улюблена їжа:</strong> {props.food}</p>
    <p><strong>Особливість:</strong> {props.feature}</p>
  </div>
);

const PetCard = (props) => (
  <div style={{ display: 'flex', gap: '20px', marginTop: '20px', alignItems: 'center' }}>
    <PetPhoto photoUrl={props.photoUrl} />
    <PetInfo 
      name={props.name} 
      species={props.species} 
      age={props.age} 
      food={props.food} 
      feature={props.feature} 
    />
  </div>
);

// головний компонент App
function App() {
  const [currentPage, setCurrentPage] = useState('personal');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <nav style={{ marginBottom: '30px', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
        <button onClick={() => setCurrentPage('personal')} style={{ marginRight: '10px', padding: '10px' }}>Персональна сторінка</button>
        <button onClick={() => setCurrentPage('movie')} style={{ marginRight: '10px', padding: '10px' }}>Улюблений фільм</button>
        <button onClick={() => setCurrentPage('clock')} style={{ marginRight: '10px', padding: '10px' }}>Годинник</button>
        <button onClick={() => setCurrentPage('pet')} style={{ padding: '10px' }}>Улюбленець</button>
      </nav>

      {currentPage === 'personal' && <PersonalPage />}
      
      {currentPage === 'movie' && (
        <MovieCard 
          title="Дюна (Dune)"
          director="Дені Вільнев"
          year="2021"
          genre="Наукова фантастика"
          posterUrl={dunePoster} 
        />
      )}

      {currentPage === 'clock' && <ClockPage />}

      {currentPage === 'pet' && (
        <PetCard 
          name="Пес Патрон"
          species="пес-розміновувач"
          age="7 років"
          food="твердий сир"
          feature="Пес Патрон тримає район, крутіше за айфон"
          photoUrl={petPhoto}
        />
      )}
      
    </div>
  );
}

export default App;