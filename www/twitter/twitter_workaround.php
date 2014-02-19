<?php


//open connection
$ch = curl_init();

//set the url, including your parameters
curl_setopt($ch,CURLOPT_URL, 'https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name=shahmeernavid');

// add in the bearer token
$bearer = "AAAAAAAAAAAAAAAAAAAAANbBWAAAAAAAJX%2F8HtO2kpUQx5vBuPtRnviz0CU%3DSnoivN5rjaItdhzwbgSlLqteHEdE10dGIfKxiCZI0yIGw0c9P8"; 
curl_setopt($ch,CURLOPT_HTTPHEADER,array('Authorization: Bearer ' . $bearer));

curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

//execute request
$result = curl_exec($ch);

//close connection
curl_close($ch);

// Print out the JSON encoded response
echo $result	;

?>