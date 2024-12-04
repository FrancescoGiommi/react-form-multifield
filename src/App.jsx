//! Giorno 1
/* 
Creare un semplice form con un campo input per il titolo di un articolo del blog.

Al submit del form, mostrare la lista degli articoli inseriti.

Infine dare la possibilità di cancellare ciascun articolo utilizzando un'icona.

BONUS

    Implementare la funzionalità di modifica del titolo di un post.
    Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore) */

//! Giorno 2

/* Ampliare l'esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto,
categoria (select) e uno stato per pubblicare o meno l'articolo. 

Utilizzare un unico oggetto per gestire tutti i dati del form.

BONUS
Aggiungere uno useEffect che mostri un alert quando l’utente clicca sull’apposita checkbox per pubblicare un articolo.
Aggiungere l'associazione con dei possibili tags (lista di checkbox) */

/* Importo useState  */
import { useState } from "react";

import "./App.css";

function App() {
  /* Uso lo use state per settare l'input  */
  const [formData, setformData] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    status: false,
  });

  /* Blocco l'invio del form con l'handler */
  const handleSubmit = (event) => {
    event.preventDefault();
    setformData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.image]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.category]: e.target.value,
      [e.target.status]: e.target.value,
    }));
  };

  /* Funzione per cancellare l'elemento */
  const removeData = (id) => {
    const deleteData = formData.filter((item, index) => {
      return index !== id;
    });
    setformData(deleteData);
  };

  return (
    <>
      <div className="container">
        <h1>My blog</h1>
        <form onSubmit={() => handleSubmit()} className="row d-inline-flex">
          <div className="col-3 form-control">
            {/* Titolo */}
            <label for="title-form" className="form-label">
              Titolo
            </label>
            <input
              id="title-form"
              type="text"
              value={formData.title}
              onChange={(e) => {
                setformData(e.target.value);
              }}
            />
            <button className="btn btn-primary mx-2">Invia</button>
          </div>
          <div className="col-3 form-control">
            {/* Immagine */}
            <label for="image-form" className="form-label">
              Immagine
            </label>
            <input
              id="image-form"
              type="text"
              value={formData.image}
              onChange={(e) => {
                setformData(e.target.value);
              }}
            />
            <button className="btn btn-primary mx-2">Invia</button>
          </div>
          <div className="col-3 form-control">
            {/* Descrizione */}
            <label for="description-form" className="form-label">
              Descrizione
            </label>
            <input
              id="description-form"
              type="text"
              value={formData.description}
              onChange={(e) => {
                setformData(e.target.value);
              }}
            />
            <button className="btn btn-primary mx-2">Invia</button>
          </div>
          <div className="col-3 form-control">
            {/* Categoria */}
            <label for="description-form" className="form-label">
              Descrizione
            </label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => {
                setformData(e.target.value);
              }}
            />
            <button className="btn btn-primary mx-2">Invia</button>
          </div>
        </form>
        <hr />
        {/* Creo una copia con il map e aggiunngo l'elemento al DOM */}

        <div className="row">
          <div className="col d-flex">
            <input className="form-control" type="text" />
            <input className="form-control" type="text" />
            <input className="form-control" type="text" />

            <button
              onClick={() => removeData(id)}
              className="btn btn-danger mx-2"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
