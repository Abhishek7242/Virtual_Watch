setInterval(()=>{


let a = new Date()
let hour= a.getHours()
document.getElementById('hour').innerHTML = hour+ ' :'
// setInterval(function(){
//     if(hour==13||hour>24){
//     hour=1

//         document.getElementById('hour').innerHTML = '0'+hour+ ' :'
        
//     }
 if (hour<10){
        document.getElementById('hour').innerHTML = '0'+hour+ ' :'
    
    }
    else{
          document.getElementById('hour').innerHTML = hour + ' :'
          
    }

    if(hour>=12){
        document.getElementById('am-pm').innerHTML = 'PM'
    }
    else{
        document.getElementById('am-pm').innerHTML = 'AM'

    }
  
//     },1000)

let min= a.getMinutes()
document.getElementById('min').innerHTML = min + ' :'
// setInterval(function(){

    
//     if(min==60){
//         min=1
//         hour++
//     document.getElementById('min').innerHTML = '00'+ ' :'
        
//     }
    if(min<10){

        document.getElementById('min').innerHTML = '0'+min+ ' :'
    
    }
    else{
    document.getElementById('min').innerHTML = min+ ' :'
          
    }
  
//     },1000)
          
let sec = a.getSeconds()
document.getElementById('sec').innerHTML = sec
// setInterval(function(){
//     if(sec==60){
//         sec=1
//         min++
//         document.getElementById('sec').innerHTML = '00'
        
//     }
 if(sec<10){

        document.getElementById('sec').innerHTML = '0'+sec
        
    }
    else{
          document.getElementById('sec').innerHTML = sec
     
    }

    
  
//     },1000)
//     let milsec= a.getMilliseconds()
// setInterval(function(){
//     // if(milsec==1000){
//     //     milsec=1
//     //     console.log(document.getElementById('milsec').innerHTML = '00')
        
//     // }
//      if(milsec<10){

//         console.log(document.getElementById('milsec').innerHTML = '0'+milsec)
//         milsec++
//     }
//     else{
//           console.log(document.getElementById('milsec').innerHTML = milsec)
//      milsec++
//     }
  
//     },0.01)

    // let startTime = Date.now();
    // setInterval(function() {
    //   let elapsedTime = Date.now() - startTime;
    // //   let seconds = Math.floor(elapsedTime / 1000);
    //   let milliseconds = elapsedTime % 1000;
    //   document.getElementById("milsec").innerHTML = milliseconds + "ms";
    // }, 100);
    

let date=a.getDate()
let date1=a.getTime()
date1 
// console.log(date1)

let month=a.getMonth()
let year=a.getFullYear()

// let daysToAdd = 7;
// let futureDate = new Date(a.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let futureDayName = daysOfWeek[a.getDay()];
// console.log(futureDayName); 
// outputs the name of the day that is 7 days from now

document.getElementById('day').innerHTML = futureDayName

// console.log(date)

// console.log(document.getElementById('year').innerHTML = year)
if(date<10){
    document.getElementById('date').innerHTML = '0'+date+' /'

}
else{

    document.getElementById('date').innerHTML = date+' /'
}
let monthname=['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','OCt','Nov','Dec']
document.getElementById('month').innerHTML = monthname[month]},1000)


// console.log(hour)
// console.log(min)
// console.log(milsec)

