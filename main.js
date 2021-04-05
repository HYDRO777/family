var images= [
    "Dad Anime.jpg",
    "Mom Anime.jpg",
    "Sister Anime.jpg",
    "Veer Anime.jpg"
];
  
  var images = 0;
  function nextslide() {
    images=images+1
    if( images == 4 )
      {
        images=0;
      }
    document.getElementById("Family").src = images;
    images++;
  }
  console.log(images);
  console.log= nextslide();

  var identity= [
    "Binoy Parekh",
    "Priya Parekh",
    "Maanya Parekkh",
    "Veer Parekh"
  ];
  var identity = 0;
  function nextslide() {
    identity=identity+1
    if( identity == 4 )
      {
        identity=0;
      }
    document.getElementById("Family").src = identity;
    identity++;}
    console.log(identity);
    console.log= nextslide();