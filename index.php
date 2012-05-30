<?php
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
ob_start();

header("Content-Type: text/html; charset=utf-8");

if (function_exists('spl_autoload_register')) {
    if (!(spl_autoload_functions()) || !in_array('marceditor_autoload', spl_autoload_functions())) {
        spl_autoload_register('marceditor_autoload');
        if (function_exists('__autoload') && !in_array('__autoload', spl_autoload_functions())) {
            // __autoload() was being used, but now would be ignored, add
            // it to the autoload stack
            spl_autoload_register('__autoload');
        }
    }
} elseif (!function_exists('__autoload')) {
    function __autoload($class) {
        return marceditor_autoload($class);
    }
}

function marceditor_autoload($className) {
    $classPath = dirname(__FILE__). '/lib/';
    $classExt= '.phpi';
    $classFile = $classPath . $className . $classExt;
    if(file_exists($classFile)) {
        require_once($classFile);
    }
}

$admin_lang='en'; // Default admin lang, can be set with html parameter.

$default_plugin = 'dummy';

$basedir = '';

$marceditorTools = new marceditorTools();

$marceditorTools->html_get_parameters();
$marceditorTools->load_message_dictionary();

if ((isset($config) && strlen($config)) ) {
  $basedir = dirname($config);
  if (! $marceditorTools->parseConfig($config)) {
    die("Valid config file should be specified.");
  }
} else {
  die("Valid config file should be specified.");
}

$marceditorTools->paramSanityCheck();

$plugin_config = $marceditorTools->loadPlugin($plugin);

if ($plugin_config !== FALSE) {
  if  (isset($plugin_config['phpinclude'])) {
    foreach ($plugin_config['phpinclude'] as $inc ) {
      if ($inc !== '') {
        require $inc;
      }
    }
  }
} else {
  die("Valid plugin should be specified.");
}

if (isset($plugin_config['phpinit_routine'])) {
  if (function_exists($plugin_config['phpinit_routine']['name'])) {
   $params = array();
   foreach ($plugin_config['phpinit_routine']['args'] as $argname => $argvalue) {
     if (isset($$argname)) {
       $params[] = $$argname;
     } else {
       $params[] = $argvalue;
     }
   }
   call_user_func_array($plugin_config['phpinit_routine']['name'], $params);
  } else {
    die ('Fatal error: Function '.$plugin_config['phpinit_routine']['name'].' does not exist');
  }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title><?php echo $marceditorTools->show_message('title');?></title>
  <link href="css/jquery-ui-1.8.18.custom.css" rel="stylesheet" type="text/css" media="screen, all">
  <link href="css/marceditor.min.css" rel="stylesheet" type="text/css" media="screen, all">
  <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
  <script type="text/javascript" src="js/jquery-ui-1.8.18.custom.min.js"></script>
  <script type="text/javascript" src="js/marceditor_control_fields_conf.min.js"></script>
  <script type="text/javascript" src="js/marceditor_messages.<?php echo $admin_lang;?>.js"></script>
  <script type="text/javascript" src="js/marceditor.min.js"></script>
<?php
  if  (isset($plugin_config['jsinclude'])) {
    foreach ($plugin_config['jsinclude'] as $inc ) {
      echo '  <script type="text/javascript" src="'. $inc . '"></script>'."\n";
    }
  }
  if (isset($plugin_config['php2js_routine'])) {
    if (function_exists($plugin_config['php2js_routine']['name'])) {
     $params = array();
     foreach ($plugin_config['php2js_routine']['args'] as $argname => $argvalue) {
       if (isset($$argname)) {
         $params[] = $$argname;
       } else {
         $params[] = $argvalue;
       }
     }
     call_user_func_array($plugin_config['php2js_routine']['name'], $params);
    } else {
      die ('Fatal error: Function '.$plugin_config['php2js_routine']['name'].' does not exist');
    }
  }
?>
  <script type="text/javascript">

    editorlang = '<?php echo "$admin_lang"; ?>';
    recordtype = '<?php echo "$recordtype"; ?>';
    recno = '<?php echo "$recno"; ?>';
    orgcode = '<?php echo "$orgcode"; ?>';
    targets_dir = '<?php echo "$targets_dir"; ?>';
    templates_dir = '<?php echo "$templates_dir"; ?>';

    $(document).ready(function(){
      var source_value = custom_load();

      $('#save_button').button({ icons: {primary:'ui-icon-disk'}});
      $('#save_button').click( function() { save_record(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
      $('#validate_button').button({ icons: {primary:'ui-icon-alert'}});
      $('#validate_button').click( function() { validate_record(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
      $('#clear_button').button({ icons: {primary:'ui-icon-bullet'}});
      $('#clear_button').click( function() { clear_src_textarea(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});

      if ($('#templates_button')) {
        $('#templates_button').button({ icons: {primary:'ui-icon-folder-open'}});
        $('#templates_button').click( function() { template_list(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
      }

      if ($('#download_button')) {
        $('#download_button').button({ icons: {primary:'ui-icon-search'}});
        $('#download_button').click( function() { copy_client(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
      }

      $('#cancel_button').button({ icons: {primary:'ui-icon-cancel'}});
      $('#cancel_button').click( function() { window.close(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});

      $('#src_textarea').val(source_value);
      $('#marcconsole').width( $('#src_textarea').width());
      $('#marceditor_toolbar').width( $('#src_textarea').width());
    });
  </script>
<?php

$xml = '';
print_xhtml( $xml);

// ------------ function definitions --------------

function print_xhtml($xml) 
{
global $admin_lang, $marceditorTools;

print '
  </head>
  <body>
    <h2>'.  $marceditorTools->show_message('title') .'</h2>
    <div id="marceditor">'.make_toolbar().'

      <form action="#" method="post" name="marceditorForm">
          <br/>
          <textarea id="src_textarea" class="editor" wrap="off" name="sourcetext" cols="120" rows="25" onDblClick="handle_textarea_dblClick(this);"></textarea>
          <br/>
      </form>

      <div id="marcconsole" class="ui-state-highlight"></div>';

echo $xml;

// echo make_toolbar().
print '
    </div>
    <div id="fieldeditor"></div>
    <div id="template_selector"></div>
    <div id="copy_client"></div>
  </body>
</html>';
}

function make_toolbar() {
global $admin_lang;
global $templates_dir;
global $targets_dir;
global $recordtype;
global $marceditorTools;
//$res = '<!--<p style="font-weight:bold">'.$marceditorTools->show_message('title').'</p>-->';
$res = '
      <div id="marceditor_toolbar">
        <p>
          <a href="#" id="save_button">'.$marceditorTools->show_message('save').'</a>
          <a href="#" id="validate_button">'.$marceditorTools->show_message('check').'</a>
          <a href="#" id="clear_button">'.$marceditorTools->show_message('clear').'</a>';

if (isset($templates_dir) && strlen($templates_dir)){
$res .='
          <a href="#" id="templates_button">'.$marceditorTools->show_message('templates').'</a>';
}
if (isset($targets_dir) && strlen($targets_dir)){
$res .='
          <a href="#" id="download_button">'.$marceditorTools->show_message('search').'</a>';
}
$res .= ' <a href="#" id="cancel_button">'.$marceditorTools->show_message('cancel').'</a>
        </p> 
      </div>';
return $res;
}

ob_flush();
?>
