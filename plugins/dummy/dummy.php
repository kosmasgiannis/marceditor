<?php

function phpinit($key1) {

}

function php2js($key1, $key2) {
 echo '<script type="text/javascript">'."\n";
 echo "  var $key1='$key2';\n";
 echo "</script>\n";
}
