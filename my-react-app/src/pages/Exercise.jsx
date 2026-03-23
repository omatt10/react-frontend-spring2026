import { useState } from "react";
import ExerciseCard from "../components/ExerciseCard.jsx";
import "../css/Exercise.css";

const exercises = [
  {
    image: "./images/running.webp",
    title: "Running",
    linkTo: "/exercise/running",
  },
  { image: "./images/walking.webp", title: "Walking" },
  { image: "./images/swimming.png", title: "Swimming" },
  { image: "./images/othercardio.png", title: "Other Cardio" },
];

const galleryImages = [
  { src: "./images/running.webp", label: "Running" },
  { src: "./images/walking.webp", label: "Walking" },
  { src: "./images/swimming.png", label: "Swimming" },
  { src: "./images/othercardio.png", label: "Other Cardio" },
  { src: "./images/bodyMassIndex.webp", label: "BMI Tracking" },
  { src: "./images/BMR.webp", label: "BMR Monitoring" },
];

const Exercise = () => {
  const [lightbox, setLightbox] = useState(null);

  const prev = () =>
    setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox((i) => (i + 1) % galleryImages.length);

  return (
    <main id="exercise">
      <section className="page-header">
        <h1>Exercise Activities</h1>
        <p>Track your workouts and activities</p>
      </section>

      <section className="exercise-grid">
        {exercises.map((ex) => (
          <ExerciseCard
            key={ex.title}
            image={ex.image}
            title={ex.title}
            linkTo={ex.linkTo}
          />
        ))}
      </section>

      <section className="gallery-section">
        <h2>Workout Gallery</h2>
        <p>Click any image to view it in full screen</p>
        <div className="gallery-grid">
          {galleryImages.map((item, idx) => (
            <div
              className="gallery-item"
              key={item.label}
              onClick={() => setLightbox(idx)}
            >
              <img src={item.src} alt={item.label} />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
            >
              &times;
            </button>
            <button className="lightbox-prev" onClick={prev}>
              &#10094;
            </button>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].label}
            />
            <p className="lightbox-caption">{galleryImages[lightbox].label}</p>
            <button className="lightbox-next" onClick={next}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Exercise;
