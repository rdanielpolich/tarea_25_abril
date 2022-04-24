// Generar un arreglo de películas (3), donde cada película deberá contener las propiedades
//  (título, género, año, sinopsis).
// Crear una función que recorra toda
// las películas imprimiendo la información de las películas por pantalla
// (incluir un título que diga CARTELERA).

let peliculas = [
  {
    título: "Morbius",
    género: "Ciencia Ficcion",
    anio: "2022",
    sinapsis:
      "Ambientada en el universo de Spider Man, se centra en uno de sus villanos más icónicos, Morbius, un doctor que tras sufrir una enfermedad en la sangre y fallar al intentar curarse, se convirtió en un vampiro.",
  },
  {
    título: "Jack en la caja maldita",
    género: "Terror",
    anio: "2022",
    sinapsis:
      "Los amigos de Casey empiezan a morir desde que llegó al museo una antigua caja con un muñeco dentro. Casey empieza a sospechar que este espeluznante juguete tiene vida propia y es el culpable de los horrores que se están sucediendo",
  },
  {
    título: "Animales Fantásticos: Los secretos de Dumbledore",
    género: "Fantasía",
    anio: "2022",
    sinapsis:
      "Ante una severa amenaza, el magizoólogo Newt Scamander lidera a un valiente grupo de magos y brujas que busca detener al malvado Gellert Grindelwald.",
  },
];

function obtDetalles() {
  document.write(
    "<b>------------------------CARTELERA------------------------</b><br/><br/>"
  );
  for (let i = 0; i < peliculas.length; i++) {
    document.write(`<b>Título:</b> ${peliculas[i].título}<br/>`);
    document.write(`<b>Género:</b> ${peliculas[i].género}<br/>`);
    document.write(`<b>Año:</b> ${peliculas[i].anio}<br/>`);
    document.write(`<b>Sinápsis:</b> ${peliculas[i].sinapsis}<br/><br/>`);
  }
}
