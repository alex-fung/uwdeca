<?php

require('twitteroauth.php'); // path to twitteroauth library



$consumerkey = 'JQZc3frqKUWglr3YwsRODw';
$consumersecret = '6KP8GZE7j79tEJvABB8ifEJ7y5h45i4tuOLl5lKjrg';
$accesstoken = '1405604718-UfYoffiwmvk9KTjBnprkGS2i2kNsUtrHYnkvvtm';
$accesstokensecret = 'sVdLY40vGhiLe49UH3gBdNtUojZBEfbyotD4yQuMCnymN';

$twitter = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$repsonse = $twitter->post('statuses/update', array('status' => "OAUTH API"));;
//$test =  $twitter->getXAuthToken(shahmeernavid, Silvermouse@1);
echo "hello";
?>