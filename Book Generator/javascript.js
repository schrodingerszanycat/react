var books = [
    "Murder on the Orient Express",
    "The Murder of Roger Ackroyd",
    "And Then There Were None",
    "Death on the Nile",
    "The ABC Murders",
    "The Mysterious Affair at Styles",
    "Curtain",
    "The Body in the Library",
    "Five Little Pigs",
    "Murder in the Cathedral",
    "Hercule Poirot's Christmas",
    "The Secret of Chimneys",
    "Peril at End House",
    "Appointment with Death",
    "Evil Under the Sun",
    "The Mirror Crack'd from Side to Side",
    "The Murder at the Vicarage",
    "Ordeal by Innocence",
    "A Murder is Announced",
    "The Hollow"
  ];

function newBook() {
    var randomBook = Math.floor(Math.random()*(books.length));
    document.getElementById('bookDisplay').innerHTML = books[randomBook];
}

  