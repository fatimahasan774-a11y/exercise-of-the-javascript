let car={
    make: "china",
    model : "old",
    year: "2025",
    star: function(){
        console.log('the car has started' , this.year);
    }
}
car.star()