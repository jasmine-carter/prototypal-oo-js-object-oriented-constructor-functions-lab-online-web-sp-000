function Scooter(year, color, model){
  return new Promise(function(resolve, reject) {
    this.year = year,
    this.color = color,
    this.model = model
  });
}
