let istiqamet = prompt("Istiqamet harayadir?: ");

switch(istiqamet) {
    case "up":
        console.log("Yuxari Get");
        break;
    case "right":
        console.log("Saga Get");
        break;
    case "down":
        console.log("Asagi Get");
        break;
    case "left":
        console.log("Sola Get");
        break;
    default:
        console.log("Acar sozler arasinda bunlar yoxdur");
}