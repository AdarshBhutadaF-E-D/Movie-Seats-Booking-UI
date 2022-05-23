const Container = document.querySelector(".container") ;
const Seats = document.querySelectorAll(".row .seat:not(occupied)");
const Count = document.getElementById("count");
const Total = document.getElementById("total");
const MovieSelect = document.getElementById("movie");
let ticketPrice = +MovieSelect.value;

function  updateSelectedCount(){
    const SelectedSeats = document.querySelectorAll(".row .seat.selected");

    const SelectedSeatsCount = SelectedSeats.length;
    Count.innerHTML = SelectedSeatsCount;
    Total.innerHTML = SelectedSeatsCount * ticketPrice;

}

//Movie Select Event

MovieSelect.addEventListener("change" , (e)=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

//Seat click Event
Container.addEventListener("click" , function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
   // console.log(e.target);
   e.target.classList.toggle("selected");

   updateSelectedCount();
    }
})


