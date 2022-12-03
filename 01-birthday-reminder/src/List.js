import React from 'react';

const List = ({ people }) => {

  
  
  let personasFiltradas = people.filter((person) => person.month == "Noviembre");
  
//   let mes = people[0].month;
  
//   switch(mes) {
//     case 0:
//         mes = "Enero";
//         break;
//     case 1:
//         mes = "Febrero";
//         break;
//     case 2:
//         mes = "Marzo";
//         break;
//     case 3:
//         mes = "Abril";
//         break;
//     case 4:
//         mes = "Mayo";
//         break;
//     case 5:
//         mes = "Junio";
//         break;
//     case 6:
//         mes = "Julio";
//         break;
//     case 7:
//         mes = "Agosto";
//         break;
//     case 8:
//         mes = "Septiembre";
//         break;
//     case 9:
//         mes = "Octubre";
//         break;
//     case 10:
//         mes = "Noviembre";
//         break;
//     case 11:
//         mes = "Diciembre";
//         break;
// }
  return (
    <>
      { 
      
      personasFiltradas.map((person) => {
    
        const { id, name, age, image, month } = person;
          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} años</p>
              </div>
            </article>
          )
        })}
    </>
  );
};

export default List;