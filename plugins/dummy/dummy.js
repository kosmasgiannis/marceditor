function custom_load() {
  var nl;

  if(document.all) { // IE
    nl="\r\n";
  } else { //Mozilla
    nl="\n";
  }

  return '[LDR]      nam a22     7a 4500' +nl+
         '[008] 100201m18971930fr a     b    001 0 fre d' +nl+
         '[100] 1  $a' +nl+
         '[245] 10 $a';
}

function custom_save(marcxml, marctxt) {
  alert('Saved');
}
