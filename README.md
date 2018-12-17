# -Pico-y-Placa-predictor

Pico y Placa rules
This code will help us to predict weather or not  your car can be on the road according to the "Pico y Placa" vehicular laws in Quito-Ecuador. The laws stablished that a cars will be restrincted to be on the road at the most transited  hours a day and it will apply to different cars per day depending on the last number of their license plate.

The Pico y Placa vehicular restrinctions apply all days except Saturdays, Sundays and holidays. The hours of transit restrinction are the following:
7:00 am to 9:30 am
4:00 pm to 7:30 pm

The vehicular restrinction are organized by days and last license plate number in the following order:
Mondays: 1,2.
Tuesdays: 3,4.
Wednesday: 5,6.
Thursday: 7, 8.
Friday: 9,0. 

Code Set Up: 

In this code you will be asked to input your complete license plate number and the output will be weather or not you can be on the road. The code will receive as a input Full License Plate number, Date, and Time. 

For the Licences Plate number it will use a split and length functions to read only the last number needed for the analysis.
For the Date it will inserted as ISO format and performed a getDay() function into an Array that contains the day names to determine which day is being selected
For the time is gonna be selected and taken in hh:mm format.






