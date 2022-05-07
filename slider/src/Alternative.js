import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevState) => {
      let index = prevState + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((prevState) => {
      let index = prevState - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  //Verifica se o index não ultrapasse o tamanho real da array People
  //   useEffect(() => {
  //     const lastIndex = people.length - 1;
  //     if (index < 0) {
  //       setIndex(lastIndex);
  //     }

  //     if (index > lastIndex) {
  //       setIndex(0);
  //     }
  //     //esse Effect funciona nas seguintes dependencias
  //   }, [index, people]);

  //Colocando o efeito infinito no slide, sem precisar clicar nos botões
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevState) => {
        let index = prevState - 1;
        if (index < 0) {
          index = people.length - 1;
        }
        return index;
      });
    }, 4000);
    //cleanup function - sem isso, entramos em loop
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <span>/</span> reviews
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          //Propriedades CSS
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && person === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="test">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        {/*Funcionalidade dos botões*/}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
