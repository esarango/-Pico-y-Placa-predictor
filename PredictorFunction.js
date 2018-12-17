function picoyplaca(lastPN, wd, t)
{
    var lastPN = numLP;// Last Plate Number
    var day = wd; // Consulted week day
    var time = t; // Consulted time 
  

    if (time >= "7:00" && time <= "9:30") //Morning Pico y Placa stands from 7:00 am to 9:30 am
    {
        switch (day) {
            case "Monday":

                if (lastPN == 1 || lastPN == 2) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;
            case "Tuesday":

                if (lastPN == 3 || lastPN == 4) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;
            case "Wednesday":

                if (lastPN == 5 || lastPN == 6) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;

            case "Thursday":

                if (lastPN == 7 || lastPN == 8) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;

            case "Friday":

                if (lastPN == 0 || lastPN == 9) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;
            default:

                alert("Your car can be on the road");


        }

    }
    else if (time >= "16:00" && time <= "19:30") //Afternoon Pico y Placa stands from 16:00 am to 19:30 am

    {
        switch (day) {
            case "Monday":

                if (lastPN == 1 || lastPN == 2) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;
            case "Tuesday":

                if (lastPN == 3 || lastPN == 4) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;
            case "Wednesday":

                if (lastPN == 5 || lastPN == 6) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;

            case "Thursday":

                if (lastPN == 7 || lastPN == 8) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }
                break;
            case "Friday":

                if (lastPN == 0 || lastPN == 9) {
                    alert("Your car cannot be on the road");
                }
                else {
                    alert("Your car can be on the road");
                }

                break;
            default:

                alert("Your car can be on the road");
        }

    }

    else {

        alert("Your car can be on the road");
    }
}