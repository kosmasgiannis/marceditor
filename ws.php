<?
/*
   Copyright (C) 2012 Giannis Kosmas <kosmasgiannis@gmail.com>

   This file is part of MARCeditor.

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; version 2 dated June, 1991.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   A copy of the GNU General Public License is also available at
   <URL:http://www.gnu.org/copyleft/gpl.html>.  You may also obtain
   it by writing to the Free Software Foundation, Inc., 59 Temple
   Place - Suite 330, Boston, MA 02111-1307, USA.
*/
@session_start();
require_once (dirname(__FILE__) . "/lib/services.phpi");

global $lang;
global $actions;
global $action;
$actions = array(
    "new"         => array(),
    "loadtargets" => array("path"=>1),
    "z3950search" => array("path"=>1, "q"=>1, "targets"=>1, "start"=>2, "number"=>2),
    "templatelist"=> array("path"=>1),
    "loadtemplate"=> array("path"=>1,"name"=>1),
    "validate"    => array("marcxml"=>1, "recno"=>2, "recordtype"=>1),
    "convert"     => array("conv_in"=>1, "from"=>1),
    "fix"         => array("marcxml"=>1, "recno"=>2),
);

$responseXML = "";

$root_element = "marceditor";
$responseXML = '<?xml version="1.0" encoding="UTF-8"?>' ."\n";
$responseXML .= "<".$root_element.">";

$action = "";

switch($_SERVER['REQUEST_METHOD'])
{
  case 'GET': $method = "get";  break;
  case 'POST':$method = "post"; break;
  default: $method =""; $the_request = array(); break;
}
$the_request = array_merge($_GET, $_POST);
$the_session = $_SESSION;
foreach ($the_request as $key => $value) {
  $the_request[$key] = urldecode($value);
}
//logit($the_request);
$action = "";

if (($sanity_res = sanity_check($the_request)) === TRUE) {

//----
    foreach ($the_request as $key => $value) {
     //echo "$key = $value<br/>";
     switch ($key) {
       case "recno" : break;
       case "marcxml" : break;
       default:        break;
     }
    }
//----
     $responseXML .= "<action>$action</action>";
     $handler = $action."_cmd";
     //logit($action);
     //logit($handler());
     $responseXML .= $handler();

} else {
  $responseXML .= $sanity_res;
}
//if ($method !='') $responseXML .= "<method>$method</method>";
$responseXML .= "</".$root_element.">";

header("Status: 200");
header("Content-Type: text/xml");
echo $responseXML;
//logit($_SESSION);
//logit($responseXML);
@session_write_close();

//****************************************************************

function sanity_check($the_request) {
  global $actions;
  global $action;
  $responseXML = "";
  $action = "";
  //logit($actions);
  if (isset($the_request['action'])) { $action = escape($the_request['action']); }

  if ($action == "") {
    $responseXML .= "<status>error</status>";
    $responseXML .= '<errormsg>No action specified.</errormsg>';
    return $responseXML;
  } else {
    if (! isset($actions[$action])) {
      $responseXML .= "<status>error</status>";
      $responseXML .= '<errormsg>Unknown action specified.</errormsg>';
      return $responseXML;
    }


    $handler = $action."_cmd";

    if (!(is_array($actions[$action]) && function_exists($handler))) {
      $responseXML .= "<status>error</status>";
      $responseXML .= '<errormsg>Unknown action specified.</errormsg>';
      return $responseXML;
    }

    $required = $actions[$action];
    foreach ($required as $p => $type) {            // Check that required arguments are there
      if (($type == 1) && empty($_REQUEST[$p])) {
        $responseXML .= "<status>error</status>";
        $responseXML .= "<errormsg>Missing $p argument to $action</errormsg>";
        return $responseXML;
      }
    }
  }
  return TRUE;
}

// escape variables
function escape($val){
global $x;
  $val = trim($val);
  if(get_magic_quotes_gpc()) {
    $val = stripslashes($val);
  }
  return $val;
}

?>
