import React, { useState } from "react";
import "../App.css";

const playersData = [
  { Name: "Paulo Diaz", Position: "Defensor", Number: 4, Club: "River Plate" },
 

  {
    Name: "Exequiel Barco",
    Position: "Mediocampista",
    Number: 10,
    Club: "River Plate",
  },
  {
    Name: "Enzo Perez",
    Position: "Mediocampista",
    Number: 5,
    Club: "Estudiantes LP",
  },
  { Name: "German Cano", Position: "Delantero", Number: 9, Club: "Fluminense" },
  {
    Name: "John Kennedy",
    Position: "Delantero",
    Number: 9,
    Club: "Fluminense",
  },
  { Name: "Catalan", Position: "Defensor", Number: 4, Club: "Talleres CBA" },
  {
    Name: "Cristian Carreta Lema",
    Position: "No se sabe",
    Number: 4,
    Club: "Boca Juniors",
  },
  {
    Name: "Gonzalez Pirez",
    Position: "Defensor",
    Number: 17,
    Club: "River Plate",
  },
];

function Cards() {
  const [players, setPlayers] = useState(playersData);
  const [editIndex, setEditIndex] = useState(-1);
  const [newPlayer, setNewPlayer] = useState({
    Name: "",
    Position: "",
    Number: "",
    Club: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPlayer({
      ...newPlayer,
      [name]: value,
    });
  };

  const handleDeletePlayer = (index) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers.splice(index, 1);
      return updatedPlayers;
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const player = players[index];
    setNewPlayer({ ...player });
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const prevState = undoStack.pop();
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setNewPlayer({
      Name: "",
      Position: "",
      Number: "",
      Club: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex === -1) {
      if (
        newPlayer.Name &&
        newPlayer.Position &&
        newPlayer.Number &&
        newPlayer.Club
      ) {
        setPlayers([...players, newPlayer]);
        setNewPlayer({
          Name: "",
          Position: "",
          Number: "",
          Club: "",
        });
      }
    } else {
      const updatedPlayers = [...players];
      updatedPlayers[editIndex] = newPlayer;
      setPlayers(updatedPlayers);
      handleCancelEdit();
    }
  };

  return (
    <>
      <div>
        <form className="formnew" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Nombre"
            value={newPlayer.Name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Position"
            placeholder="Posición"
            value={newPlayer.Position}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="Number"
            placeholder="Número"
            value={newPlayer.Number}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Club"
            placeholder="Club"
            value={newPlayer.Club}
            onChange={handleInputChange}
          />
          <button className="buttons" type="submit">
            {editIndex === -1 ? "➕ Agregar jugador" : "Guardar cambios"}
          </button>
          {editIndex !== -1 && (
            <button className="buttons" onClick={handleCancelEdit}>
              Cancelar
            </button>
          )}
        </form>
      </div>

      <div className="row">
        {players.map((player, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card bg-dark rounded-pill  text-light">
              <div className="card-body m-2 ">
                <h5 className="card-title m-3 fs-2">{player.Name}</h5>
                <p className="card-text-posicion m-2 fs-5 ">
                  Posición: {player.Position}
                </p>
                <p className="card-text-numero m-2 fs-4">
                  Número: {player.Number}
                </p>
                <p className="card-text-club m-2 fs-3">Club: {player.Club}</p>
                <div className="d-flex">
                  <button
                    className="btn btn-danger d-inline"
                    onClick={() => handleDeletePlayer(index)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-primary ml-2 d-inline"
                    onClick={() => handleEdit(index)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
