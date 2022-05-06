/* Got the information from : http://www.ciclt.net/sn/clt/capitolimpact/gw_ziplist.aspx?FIPS=37183&stfips=&state=NC&stname= 
    no guarantees it is up to date. */
var express = require('express');
app = express();
    
app.get('/', function (req, res) {
    res.send(`
    <html>
    <head>
    <title>In Wake County?</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        html, body{
            background: url(https://www.researchtriangle.org/wp-content/uploads/2018/09/Screen-Shot-2020-09-09-at-12.12.34-PM-1536x1014.png) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            -o-background-size: cover;
        }
        .bodyody {
        position: fixed;
        text-align: center;
        width: 320px;
        height: auto;
        top: 5%;
        left: 75px;
        background-color: rgb(58, 137, 58);
        color: white;
        padding: 30px;
        border-radius: 12px 12px 12px 12px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        margin: auto;
    }
        .wake-text {
            text-decoration: underline;
            margin-bottom: 6px;
        }
        
        .button {
            padding: 8px;
            text-align: center;
            font-size: 1em;
            border-radius: 4px 4px 4px 4px;
            background-color: white;
            color:rgb(58, 137, 58);
        }
    
    
    </style>
    </head>
    <body>
    <div class="bodyody">
    <div class="rain">
        <h2 class="wake-text"> Where am I in Wake County?</h2><br>
    </div>
    <div class="location">
        <h3 class="location-area"> Enter the Zipcode: </h3>
        <input type="text" id="zipCoded" name="zipCoded"><br><br>
    
    <button onclick="getCity(document.getElementById('zipCoded').value)" class="button">Submit</button><br><br>
    <p id="ok">
    
    <script>
        function getCity(zipCoded) {
        if (zipCoded.length != 5) {
            alert('Please enter a valid zipcode.');
            return;}
    
        const zipcode = parseInt(zipCoded);
        let city;
    
        if (zipcode == 27502 | zipcode == 27523 | zipcode == 27539) {
            city=' in Apex';
        } else if (zipcode == 27604 | zipcode ==27616) {
            city=" either in Brentwood or Raleigh...it's complicated.";
        } else if (zipcode == 27511 | zipcode ==27513 | zipcode ==27518) {
            city=' in Cary';
        } else if (zipcode == 27591) {
            city=" either in Eagle Rock or Wendell...it's complicated.";    
        } else if (zipcode == 27526) {
            city=' in Fuquay Varina';    
        } else if (zipcode == 27529) {
            city=' in Garner';
        } else if (zipcode == 27540) {
            city=' in Holly Springs';
        } else if (zipcode == 27545) {
            city=' in Knightsdale';
        } else if ( zipcode == 27560) {
                city=' in Morrisville';
        } else if (zipcode == 27562) {
                city=' in New Hill';
        } else if ((zipcode >= 27601 && zipcode <= 27617) || (zipcode >= 27619 && zipcode <= 27629)|| zipcode == 
            27636 | zipcode == 27650 | zipcode == 27658 | zipcode == 27661 | zipcode == 27675) {
                city=' in Raleigh';
        } else if (zipcode == 27571) {
                city=' in Rolesville';
        } else if (zipcode == 27587 | zipcode == 27588) {
                city=' in Wake Forest';
        } else if (zipcode == 27676) {
                    city=" either in Raleigh or Westgate...it's complicated.";
        } else if (zipcode == 27592) {
            city=' in Willow Spring';
        } else if (zipcode == 27597) {
            city=' in Zebulon';
        } else if (zipcode == 27519) {
            city=" either in Apex, Cary, or Morrisville...it's complicated."
        } else {
             city='Not in Wake County.';
      }
        document.getElementById("ok").innerHTML = "You're " + city;
      }
    </script>
    </body>
    </html>
    `);
});

app.listen(8080, function () {
  console.log('Listening on port 8080');
});

app.listen(3000, ()=>{
    require('child_process').exec('start http://localhost:3000/');
});