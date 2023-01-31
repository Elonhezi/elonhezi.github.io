function makeWish() {
    var wishes = ["Success", "Happiness", "Love", "Peace", "Health"];
    var wish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("wish").innerHTML = "You wished for: " + wish;
}
  