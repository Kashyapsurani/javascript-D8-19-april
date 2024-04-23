var  ode = -11

if (ode % 2 == 0 && ode >0){
    console.log("even and posotive")
}else if (ode % 2 == 1 && ode > 0) {
    console.log("odd and Positiv ")
}else if (ode % 2 == 0 && ode <0){
    console.log("even and negetiv")
}else if (ode % 2 == -1 && ode < 0){
    console.log("odd and negetive")
}else{
    console.log("zero")
}