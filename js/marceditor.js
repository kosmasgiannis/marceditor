var data_field_count_active;
var data_field_count;
var editorlang;
var recno = '';
var orgcode = '';
var templates_dir = '';
var valid = false;
var targets_dir = '';
var recordtype = 'bibliographic';
var zquery;
var zstart;
var znumber;
var ztargets;
var zpage;
var NEWLINE = '';

if(document.all) { // IE
  NEWLINE="\r\n";
} else { //Mozilla
  NEWLINE="\n";
}

function maxPages(totalhits, perpage) {
  return Math.ceil((totalhits*1.0) / (perpage * 1.0));
}

function z3950_reset() {
  document.copysearch.reset();
  var copytargets = $('#copytargets');
  copytargets.html('');
  var copyresults = $('#copyresults');
  copyresults.html('');
  return false;
}

function z3950_search() {
  zpage = 0;
  var v;
  var searchq = $.trim($('#searchq').val());
  var searchnumber = isNaN(v = parseInt($('#searchnumber').val(),10)) ? 1 : v;
  var searchstart = isNaN(v = parseInt($('#searchstart').val(),10)) ? 10 : v;
  var targets = '';
  $('input:checkbox:checked').each(function(index) { targets=targets+','+$(this).val();});
  targets=targets+',';
  ztargets=targets;
  zquery=searchq;
  zstart=searchstart;
  znumber=searchnumber;
  _z3950_search(searchq, searchnumber, searchstart, targets);
  return false;
}

function _z3950_search(searchq, searchnumber, searchstart, searchtargets) {

  var copytargets = $('#copytargets');
  copytargets.html('');
  var copyresults = $('#copyresults');
  copyresults.html('');
  copyresults.html('<p style="text-decoration:blink">'+editorMessages.please_wait+'</p>');
  if (searchq == '') {
    alert(editorMessages.query_empty);
    copyresults.html('');
  } else if (searchtargets == ',') {
    alert(editorMessages.no_targets_selected);
    copyresults.html('');
  } else {
  
    var Params = {
      "action": "z3950search",
      "path": targets_dir,
      "q": searchq,
      "number": searchnumber,
      "start": searchstart,
      "targets": searchtargets
    };
    servicehandler(Params, parse_z3950_search);
  }
  return false;
}

function z3950_page(pageno) {
  zstart = zstart + (pageno*znumber);
  zpage=zpage+pageno;
//FIXME : control page and zstart hits etc
  _z3950_search(zquery, znumber, zstart, ztargets);
  return false;
}

function download_record(i) {
  if (confirm(editorMessages.are_u_sure)) {
    var v = $("#r"+i).html();
    var textfield = document.getElementById("src_textarea");
    textfield.value = v;
    return_to_marceditor('copy_client');
  }
  return false;
}

function show_raw_record(i) {
  var v = $("#r"+i).html();
  $("#rawrecord").html(v);
  $("#rawrecord").dialog('open');
  return false;
}

function parse_z3950_search (xml) {
  var copyresults = $('#copyresults');
  var copytargets = $('#copytargets');
  var html = [];
  var thtml = [];
  var summary;
  var targets;
  var display;
  var n;
  var title;
  var author;
  var rdate;
  var totalhits = 0;
  var i;
  var j;
  var rawrec;

  copyresults.html('');
  copytargets.html('');
  if (xml != null) {
    //xml.documentElement.normalize();
    summary = xml.getElementsByTagName("summary");
    totalhits = summary[0].getAttribute("hits");
    qstart = summary[0].getAttribute("start");
    qnumber = summary[0].getAttribute("number");
    html.push('<p class="ui-state-highlight">');
    if (zpage > 0 ) {
      html.push('<a style="text-decoration:none; cursor:pointer;" onclick="javascript:return z3950_page(-1);"><span style="display:inline-block; vertical-align:middle" class="ui-icon ui-icon-circle-triangle-w"></span> '+editorMessages.prev+'</a>');
    } else {
      html.push('<span style="display:inline-block; vertical-align:middle" class="ui-icon ui-state-disabled ui-icon-circle-triangle-w"></span> '+editorMessages.prev);
    }
    html.push('&#xa0;&#xa0;&#xa0;&#xa0;');
    if (maxPages(totalhits,qnumber) > zpage+1) {
      html.push('<a style="text-decoration:none; cursor:pointer;" onclick="javascript:return z3950_page(1);">'+editorMessages.next+' <span style="display:inline-block; vertical-align:middle" class="ui-icon ui-icon-circle-triangle-e"></span></a>');
    } else {
      html.push(editorMessages.next+' <span style="display:inline-block; vertical-align:middle" class="ui-icon ui-state-disabled ui-icon-circle-triangle-e"></span>');
    }
    html.push('&#xa0;&#xa0;&#xa0;&#xa0;');
    html.push(editorMessages.page+' : '+Number(zpage+1));
    html.push(' '+editorMessages.of+' '+maxPages(totalhits,qnumber));
    html.push('&#xa0;&#xa0;&#xa0;&#xa0;');
    html.push(editorMessages.total_hits+' : '+totalhits);
    html.push('</p>');
    targets = xml.getElementsByTagName("target");
    thtml.push('<p>');
    for ( j=0; j < targets.length; j++ ) {
     thtml.push(targets[j].getAttribute("name")+' '+targets[j].getAttribute("hits")+'<br/>');
    }
    thtml.push('</p>');
    copytargets.html(thtml.join(''));
    results = xml.getElementsByTagName("result");
    if (results.length > 0) {
      html.push('<table class="resultstable">');
      for ( i=0; i < results.length; i++ ) {
        title = '';
        author = '';
        rdate = '';
        raw = results[i].getElementsByTagName("raw");
        if (raw.length >0) {
          if (raw[0].hasChildNodes) {
            n = raw[0].firstChild;
            rawrec=marcxml2form(n);
          }
        }
        display = results[i].getElementsByTagName("marc21_simple");
        if (display.length >0) {
          n = display[0].getElementsByTagName("title");
          if (n.length) {
            if (n[0].hasChildNodes) {
              title = getText(n[0]);
            }
          }
          n = display[0].getElementsByTagName("author");
          if (n.length) {
            if (n[0].hasChildNodes) {
              author = getText(n[0]);
            }
          }
          n = display[0].getElementsByTagName("date");
          if (n.length) {
            if (n[0].hasChildNodes) {
              rdate = getText(n[0]);
            }
          }
          html.push('<tr class="ui-state-active"><td><div id="r'+i+'" style="display:none">'+rawrec+'</div>'+Number(i+1)+'.</td>');
          html.push('<td><a onclick="javascript:return show_raw_record('+i+');" href="#"><span style="display:inline-block; vertical-align:middle" class="ui-icon ui-icon-zoomin"></span></a></td>');
          html.push('<td><a onclick="javascript:return download_record('+i+');" href="#"><span style="display:inline-block; vertical-align:middle" class="ui-icon ui-icon-disk"></span></a></td>');
          html.push('<td>'+title+'</td><td>'+author+'</td><td>'+rdate+'</td></tr>');
        }
      }
      html.push('</table>');
      html.push('<div id="rawrecord" style="display: none;" title="'+editorMessages.record_preview+'"/>');
    }
    
  }
  copyresults.html(html.join(''));
  if (results.length > 0) {
    $('#rawrecord').dialog({
        height: $(window).height() - 50,
        width: $(window).width() - 100,
        minHeight: 100,
        position: ['center',50],
        autoOpen: false,
        closeOnEscape: true,
        modal: true,
        zIndex: 1100,
        show: 'blind',
        hide: 'blind',
        dialogClass : 'rawrecord',
        buttons: [
                  {
                   text : editorMessages.back,
                   click: function() { $(this).dialog("close"); }
                  }
        ]
    });

  }
}

function copy_client () {
  var Params = {
    "action": "loadtargets",
    "path": targets_dir
  };
  servicehandler(Params, parse_target_list);
  return false;
}

function parse_target_list (xml) {
  var targets = [];
  var tid;
  if (xml != null) {
    xml.documentElement.normalize();
    var Entries = xml.documentElement.childNodes;

    for(var i = 0; i < Entries.length; i++) {
      if ( Entries[i].nodeType == Node.ELEMENT_NODE ) {
        if ( Entries[i].nodeName.toLowerCase() == 'targets') {
          //var cnt = Entries[i].getAttribute("cnt");
          for(j = 0; j < Entries[i].childNodes.length; j++) {
            if ( Entries[i].childNodes[j].nodeType == Node.ELEMENT_NODE ) {
              if ( Entries[i].childNodes[j].nodeName.toLowerCase() == 'target') {
                tid = Entries[i].childNodes[j].getAttribute("id");
                targets.push(tid+' '+getText(Entries[i].childNodes[j]));
              }
            }
          }
        }
      }
    }
  }
  tid = '';
  if (targets.length) {
    var targetsDiv = $('#copy_client');
    targetsDiv.html('');
    var html = [];
    html.push('<p><form name="copysearch" action="#" onsubmit="javascript:return z3950_search();">');
    html.push('<table class="copysearch">');
    html.push('<tr>');
    html.push('<td style="width:25%">'+editorMessages.choose_targets+'</td>');
    html.push('<td style="width:75%">'+editorMessages.enter_query+'</td>');
    html.push('</tr>');
    html.push('<tr>');
    html.push('<td valign="top">');
    for (var k=0; k<targets.length; k++) {
      tid = targets[k].replace(/ .*$/gi, "");
      targets[k] = targets[k].substr(tid.length,targets[k].length);
      html.push(Number(k+1)+'. <input name="st" type="checkbox" value="'+tid+'" id="st'+tid+'" /><label for="st'+tid+'">'+targets[k]+'</label><br/>');
    }
    html.push('</td>');
    html.push('<td>');
    html.push('<input id="searchnumber" name="number" type="hidden" value="10" />');
    html.push('<input id="searchstart" name="start" type="hidden" value="1" />');
    html.push('<input id="searchq" name="q" type="text" size="80" value="" />');
    html.push('<br/>');
    html.push('<br/>');
    html.push('<a href="#" id="zsearch_button">'+editorMessages.search+'</a>');
    html.push('<a href="#" id="zreset_button">'+editorMessages.reset+'</a>');
    html.push('<a href="#" id="zcancel_button">'+editorMessages.cancel+'</a>');
    html.push('</td>');
    html.push('</tr>');
    html.push('<tr>');
    html.push('<td><div id="copytargets"/></td>');
    html.push('<td><div id="copyresults"/></td>');
    html.push('</tr>');
    html.push('</table><br/>');
    html.push('</form></p>');
    targetsDiv.html(html.join(''));
    $('#zsearch_button').button({icons : {primary:'ui-icon-search'}});
    $('#zsearch_button').click(function(){ z3950_search(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
    $('#zreset_button').button({icons : {primary:'ui-icon-bullet'}});
    $('#zreset_button').click(function(){ z3950_reset(); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
    $('#zcancel_button').button({icons : {primary:'ui-icon-cancel'}});
    $('#zcancel_button').click(function(){ return_to_marceditor('copy_client'); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
    var marceditor = $('#marceditor');
    marceditor.hide();
    targetsDiv.show();
  } else {
    alert(editorMessages.no_targets_defined);
  }
}

function save_record () {
  var textfield = document.getElementById("src_textarea");
  set_001();
  set_003();
  set_005();
  valid = false;
  validate_record();
  if (valid == true) {
    var marcxml = form2marcxml(textfield.value);
    var updtext = marcxml2form(marcxml);
    custom_save(marcxml, updtext);
  }
}

function fix_marcxmlstr(s,mode) {
  s = s.replace(/&amp;/gi, "&");
  s = s.replace(/&quot;/gi, '"');
  s = s.replace(/&lt;/gi, '<');
  s = s.replace(/&gt;/gi, '>');
  s = s.replace(/&apos;/gi, "'");

  if (mode == 'data') {
    var m = s.match(/&[^#]/gi);
    var i;
    var x;
    var n;
    var pat;
    if ( m !== null) {
      for (i=0; i<m.length; i++) {
        x = m[i];
        x = x.substr(1,1);
        pat = new RegExp("&"+x,"gi");
        n = '&amp;'+x;
        s = s.replace(pat, n);
      }
    }
    s = s.replace(/&$/, '&amp;');
    s = s.replace(/"/gi, "&quot;");
    s = s.replace(/</gi, "&lt;");
    s = s.replace(/>/gi, "&gt;");
    s = s.replace(/'/gi, "&apos;");
  } else {
    s = s.replace(/&/gi, " ");
    s = s.replace(/"/gi, " ");
    s = s.replace(/</gi, " ");
    s = s.replace(/>/gi, " ");
  }
  return s;
}

function merge_records(data1, data2) {
  var lines1, lines2;
  var lines3 = new Array();
  lines1=data1.split(NEWLINE);
  lines2=data2.split(NEWLINE);

  lines1.shift();
  newldr = lines2.shift();
  var k=0;
  for(var i=0; i<lines1.length; i++) {
    if (lines1[i] == '') continue;
    tag = lines1[i].substring(0,5);
    if (tag != '[008]') { lines3[k] = lines1[i]; k++;}
  }

  for (var i=0; i<lines2.length; i++) {
    if (lines2[i] == '') continue;
    tag = lines2[i].substring(0,5);
    if ((tag != '[001]') && (tag != '[005]') && (tag.substring(0,2) != '[9')) {
      lines3[k] = lines2[i];
      k++;
    }
  }
  lines3 = lines3.sort();
  lines3.splice(0,0,newldr);
  return lines3.join(NEWLINE);
}

function form2marcxml(data) {
  var lines;
  var line;
  var tag;
  var subfield;
  var subfield_code;
  var marcxml = '';
  var subfields = '';  
  var pos = 0;
  if(document.all) { // IE
    lines=data.split("\r\n");
  } else { //Mozilla
    lines=data.split("\n");
  }
  for(var i=0; i<lines.length; i++) {
    line = trim(lines[i]);
    if (line != '') {
      if (marcxml == '') marcxml='<record  xmlns="http://www.loc.gov/MARC21/slim">';
      if (line.substring(0,5) == '[LDR]') {
        marcxml=marcxml+"<leader>"+fix_marcxmlstr(line.substring(6),"control")+"</leader>";
        continue;
      }
      tag = line.substring(0,5).substring(1,4);
      itag = isNaN(v = parseInt(tag,10)) ? 0 : v;
      if ((itag > 0) && (itag < 10)) {
        marcxml=marcxml+'<controlfield tag="'+tag+'">'
                       +fix_marcxmlstr(line.substring(6),"control")+"</controlfield>";
      } else {
        marcxml = marcxml+'<datafield tag="'+tag
                         +'" ind1="'+fix_marcxmlstr(line.substring(6,7),"control")
                         +'" ind2="'+fix_marcxmlstr(line.substring(7,8),"control")+'">';
        help = line.substring(10);
        subfields = help.split("$");
        for(var j=0; j<subfields.length; j++) {
          subfield = trim(subfields[j]);
          if (subfield!='') {
            subfield_code = subfield.substring(0,1);
            subfield= trim(subfield.substring(1));
            if (subfield!='') {
              marcxml = marcxml+'<subfield code="'+fix_marcxmlstr(subfield_code,"control")+'">';
              marcxml = marcxml+ fix_marcxmlstr(subfield,"data")+ "</subfield>";
            }
          }
        }
        marcxml = marcxml+"</datafield>";
      }
    }
  }
  if (marcxml != '') marcxml=marcxml+'</record>';

  return marcxml;
}

function xmlstring_to_xml(xmlstring) {
  var xmlobject = (new DOMParser()).parseFromString(xmlstring, "text/xml");
  return xmlobject;
}

// This nested function extracts the text from a DOM node, recursing if necessary.
function getText(n) {
  switch(n.nodeType) {
    case 1: /* element */
            var s = "";
            if (n.hasChildNodes) {
              for(var c = n.firstChild; c != null; c = c.nextSibling) {
                s += getText(c);
              }
            }
            return s;
    case 2: /* attribute*/
    case 3: /* text */
    case 4: /* cdata */
            return n.nodeValue;
    default:
            return "";
  }
} 

function marcxml2form (marcxml) {
  var lines = new Array();
  var i =0;
  var j;
  var k;
  var myDocument; 

  if (typeof marcxml == "string")  {
    if (document.implementation.createDocument) { // Mozilla, create a new DOMParser 
      var parser = new DOMParser(); 
      myDocument = parser.parseFromString(marcxml, "text/xml"); 
    } else if (window.ActiveXObject) { // Internet Explorer, create a new XML document using ActiveX and use loadXML as a DOM parser. 
      myDocument = new ActiveXObject("Microsoft.XMLDOM") 
      myDocument.async="false"; 
      myDocument.loadXML(marcxml);
    } 
  } else {
    myDocument = marcxml;
  }

  var l = myDocument.getElementsByTagName("leader")[0].firstChild;
  text = getText(l);
  lines[i] = '[LDR] '+text;
  i++;
  var c = myDocument.getElementsByTagName("controlfield");
  for ( j=0; j < c.length; j++ ) {
    tag = c[j].getAttribute("tag");
    text= getText(c[j]);
    lines[i] = '['+tag+'] '+text;
    i++;
  }
  c = myDocument.getElementsByTagName("datafield");
  for ( j=0; j < c.length; j++ ) {
    tag = c[j].getAttribute("tag");
    ind1 = c[j].getAttribute("ind1");
    ind2 = c[j].getAttribute("ind2");
    lines[i] = '['+tag+'] '+ind1+ind2+' ';
    var s = c[j].getElementsByTagName("subfield");
    for ( k=0; k < s.length; k++ ) {
      sfc = s[k].getAttribute("code");
      text= getText(s[k]);
      lines[i]=lines[i]+'$'+sfc+text;
    }
    i++;
  }

 return lines.join(NEWLINE);
}

function change_textarea_line(textarea, lineno, value) {
  var s = '';

  lines=textarea.value.split(NEWLINE);
  s = '';
  for(var i=0; i<lines.length; i++) {
    if (i == lineno) {
      lines[i] = value;
    }
    s = s+lines[i];
    if (i != lines.length-1) s=s+NEWLINE;
  }

  textarea.value = s;
}

function textarea_line(textarea) {
  var lineno = textarea_line_pos(textarea);
  lines=textarea.value.split(NEWLINE);
  return lines[lineno];
}

function textarea_line_pos(textarea) {
  var t = textarea_pos(textarea);
  var s = t.sel_text_pre + t.sel_text;
  s = s.replace(/\s*$/,'');
  var line_break_count = 0;
  if(document.all) { // IE
    var line_breaks = s.match(/\r\n/g);
  } else { //Mozilla
    var line_breaks = s.match(/\n/g);
  }
  if (line_breaks != null) {
    line_break_count = line_breaks.length;
  }
  return line_break_count;
}

function textarea_pos(textarea) {
  var t = new Object();
  if (typeof(textarea.selectionStart) == 'number')
  {
    // get start and end points of selected text
    t.sel_start = textarea.selectionStart;
    t.sel_end = textarea.selectionEnd;
    // get selected and surrounding text
    t.sel_text = textarea.value.substring(t.sel_start, t.sel_end);
    t.sel_text_pre = textarea.value.substring(0, t.sel_start);
    t.sel_text_post = textarea.value.substring(t.sel_end, textarea.value.length);
  }
  else if (document.selection) // get selection in IE
  {
    // make sure it's the textarea's selection
    var range = document.selection.createRange();
    // create a selection of the whole textarea
    var range_all = document.body.createTextRange();
    range_all.moveToElementText(textarea);
    // calculate selection start point by moving beginning of range_all to beginning of range
    for (var sel_start = 0; range_all.compareEndPoints('StartToStart', range) < 0; sel_start ++)
      range_all.moveStart('character', 1);
    // get number of line breaks from textarea start to selection start and add them to sel_start
    for (var i = 0; i <= sel_start; i ++)
    {
      if (textarea.value.charAt(i) == '\n') {
        sel_start ++;
      }
    }
    t.sel_start = sel_start;
    // create a selection of the whole textarea
    var range_all = document.body.createTextRange();
    range_all.moveToElementText(textarea);
    // calculate selection end point by moving beginning of range_all to end of range
    for (var sel_end = 0; range_all.compareEndPoints('StartToEnd', range) < 0; sel_end ++)
      range_all.moveStart('character', 1);
    // get number of line breaks from textarea start to selection end and add them to sel_end
    for (var i = 0; i <= sel_end; i ++)
    {
      if (textarea.value.charAt(i) == '\n') {
        sel_end ++;
      }
    }
    t.sel_end = sel_end;
    // get selected and surrounding text
    t.sel_text = range.text;
    t.sel_text_pre = textarea.value.substring(0, t.sel_start);
    t.sel_text_post = textarea.value.substring(t.sel_end, textarea.value.length);
  }
  else
  {
    t.sel_start = 0;
    t.sel_end = 0;
    t.sel_text = '';
    t.sel_text_pre = '';
    t.sel_text_post = textarea.value;
  }
  return t;
}

function servicehandler(params, callback) {
    var enc_params = encodeParams(params);
    $.ajax( {
             type: "POST",
             async: false,
             cache: false,
             contentType: "application/x-www-form-urlencoded",
             dataType: "xml",
             url : "./ws.php?"+enc_params,
             accepts:  { xml: "text/xml"},
             success: callback
            }
    );
}

function type_of_material(textarea) {
 var s = '';
 var ldr ='';

 lines=textarea.value.split(NEWLINE);
 s = '';
 for(var i=0; i<lines.length; i++) {
  if (lines[i] != '') {
   if (lines[i].substring(0,5) == '[LDR]') { ldr = fix_marcxmlstr(lines[i].substring(6),"control"); break; }
   }
 }

 var LCtom = new Array();
 var LCtomvals = new Array();
 LCtom[0] = 'BK'; LCtomvals[0] = ',aa,ac,ad,am,ta,tc,td,tm,';
 LCtom[1] = 'CR'; LCtomvals[1] = ',ab,ai,as,tb,ti,ts,';
 LCtom[2] = 'CF'; LCtomvals[2] = ',ma,mb,mc,md,mi,mm,ms,';
 LCtom[3] = 'MP'; LCtomvals[3] = ',ea,eb,ec,ed,ei,em,es,fa,fb,fc,fd,fi,fm,fs,';
 LCtom[4] = 'MU'; LCtomvals[4] = ',ca,cb,cc,cd,ci,cm,cs,da,db,dc,dd,di,dm,ds,ia,ib,ic,id,ii,im,is,ja,jb,jc,jd,ji,jm,js,';
 LCtom[5] = 'VM'; LCtomvals[5] = ',ga,gb,gc,gd,gi,gm,gs,ka,kb,kc,kd,ki,km,ks,oa,ob,oc,od,oi,om,os,ra,rb,rc,rd,ri,rm,rs,';
 LCtom[6] = 'MX'; LCtomvals[6] = ',pa,pb,pc,pd,pi,pm,ps,';

 var ldr_6_7 = ","+ldr.substr(6,2)+",";
 for (i=0; i<7; i++) {
  if (LCtomvals[i].indexOf(ldr_6_7) >= 0) return LCtom[i];
 }
 return '';
}

function handle_textarea_dblClick(textarea) {
  var lineno = textarea_line_pos(textarea);
  var line = textarea_line(textarea);
  var tag = line.substr(1,3);
  var itag = parseInt(tag, 10)
  var text = line.substr(6);
  var tom = type_of_material(textarea);
  if ((tom == '') || (tom == 'LDR')) {
    tom = 'BK';
  }
  var field = tag;
  if (tag == 'LDR') {
    field = 'leader';
  }

  var marceditor = $('#marceditor');
  var fieldeditor = $('#fieldeditor');

  fieldeditor.html('');
  var helpurl = '';
  var html = [];
  var ind1 = ' ';
  var ind2 = ' ';
  var fcnt = 0;
  if (tag == 'LDR') {
    html.push('<form name="ctrl_form" onsubmit="javascript:return false;" action="#">');
    html.push('<h3>'+editorMessages.editing+' Leader</h3>');
    html.push(make_controlfield('leader', text, lineno, tom));
    html.push('<a href="#" id="field_ok_button" title="OK">OK</a>');
    html.push('<a href="#" id="field_cancel_button" title="'+editorMessages.cancel+'">'+editorMessages.cancel+'</a>');
    helpurl = 'http://www.loc.gov/marc/bibliographic/bdleader.html';
    html.push('<a href="#" id="field_help_button" title="'+editorMessages.help+'">'+editorMessages.help+'</a>');
    html.push('</form>');
  } else if (( tag == '008') || ( tag == '006')) {
    html.push('<form name="ctrl_form" onsubmit="javascript:return false;" action="#">');
    html.push('<h3>'+editorMessages.editing+' ['+tag+']</h3>');
    html.push(make_controlfield(tag , text, lineno, tom));
    html.push('<a href="#" id="field_ok_button" title="OK">OK</a>');
    html.push('<a href="#" id="field_cancel_button" title="'+editorMessages.cancel+'">'+editorMessages.cancel+'</a>');
    helpurl = 'http://www.loc.gov/marc/bibliographic/bd'+tag+'.html';
    html.push('<a href="#" id="field_help_button" title="'+editorMessages.help+'">'+editorMessages.help+'</a>');
    html.push('</form>');
  } else if ( tag == '007') {
    html.push('<form name="ctrl_form" onsubmit="javascript:return false;" action="#">');
    html.push('<h3>'+editorMessages.editing+' ['+tag+']</h3>');
    var firstchar = '';
    if (trim(text) !== '') {
      firstchar = text.substr(0,1);
    }
    html.push(make_controlfield(tag+firstchar , text, lineno, tom));
    html.push('<a href="#" id="field_ok_button" title="OK">OK</a>');
    html.push('<a href="#" id="field_cancel_button" title="'+editorMessages.cancel+'">'+editorMessages.cancel+'</a>');
    helpurl = 'http://www.loc.gov/marc/bibliographic/bd'+tag+firstchar+'.html';
    html.push('<a href="#" id="field_help_button" title="'+editorMessages.help+'">'+editorMessages.help+'</a>');
    html.push('</form>');
  } else if (( itag >= 10) && (itag <= 999)) {
    var tlen = text.length;
    if (tlen > 0) {
      ind1 = text.substr(0,1);
    }
    if (tlen > 1) {
      ind2 = text.substr(1,1);
    }
    if (tlen > 3) {
      text = text.substr(3,tlen);
    } else {
      text = '';
    }
    var farr = text.split('$');
    var f;
    var sf;
    var ff;
    html.push('<form name="ctrl_form" onsubmit="javascript:return false;" action="#">');
    html.push('<h3>'+editorMessages.editing+' ['+tag+']</h3>');

    html.push('<ul>');
    html.push('<li>'+editorMessages.indicator+' 1 : &#xa0;&#xa0;<input name="ind1" size="1" maxlength="1" value="'+ind1+'" type="text"/>');
    html.push('<li>'+editorMessages.indicator+' 2 : &#xa0;&#xa0;<input name="ind2" size="1" maxlength="1" value="'+ind2+'" type="text"/>');
    html.push('</ul>');
    html.push('<ul id="subfield_list">');

    for (var j=0; j<farr.length; j++) {
      f = trim(farr[j]);
      if (f !== '') {
        sf = f.substr(0,1);
        ff = trim(f.substr(1,f.length));
        html.push('<li id="fli_'+fcnt+'">');
        html.push('<input id="sf_'+fcnt+'" name="sf_'+fcnt+'" size="1" maxlength="1" value="'+sf+'" type="text"/>&#xa0;&#xa0;');
        html.push('<input id="ff_'+fcnt+'" name="ff_'+fcnt+'" size="75" value="'+ff+'" type="text"/>&#xa0;');
        html.push('&#xa0;<a class="ui-state-active" title="'+editorMessages.delete_subfield+'" href="#" onclick="del_field('+fcnt+');return false;"><span style="display:inline-block; vertical-align:middle" class="ui-state-active ui-icon ui-icon-circle-minus"></span></a>&#xa0;');
        html.push('&#xa0;<a class="ui-state-highlight" href="#" title="'+editorMessages.add_subfield+'" onclick="add_field('+fcnt+');return false;"><span style="display:inline-block; vertical-align:middle" class="ui-state-default ui-icon ui-icon-circle-plus"></a>');
        html.push('</li>');
        fcnt = fcnt + 1;
      }
    }
    if (fcnt == 0) {
      html.push('<li id="fli_0">');
      html.push('<input id="sf_0" name="sf_0" size="1" maxlength="1" value=" " type="text"/>&#xa0;&#xa0;');
      html.push('<input id="ff_0" name="ff_0" size="75" value="" type="text"/>&#xa0;');
      html.push('&#xa0;<a class="ui-state-active" title="'+editorMessages.delete_subfield+'" href="#" onclick="del_field(0);return false;"><span style="display:inline-block; vertical-align:middle" class="ui-state-active ui-icon ui-icon-circle-minus"></span></a>&#xa0;');
      html.push('&#xa0;<a href="#" class="ui-state-highlight" title="'+editorMessages.add_subfield+'" onclick="add_field(0);return false;"><span style="display:inline-block; vertical-align:middle" class="ui-state-highlight ui-icon ui-icon-circle-plus"></a>');
      html.push('</li>');
      fcnt = 1;
    }

    html.push('</ul>');
    html.push('<a href="#" id="field_ok_button" title="OK">OK</a>');
    html.push('<a href="#" id="field_cancel_button" title="'+editorMessages.cancel+'">'+editorMessages.cancel+'</a>');
    helpurl = 'http://www.loc.gov/marc/bibliographic/bd'+tag+'.html';
    html.push('<a href="#" id="field_help_button" title="'+editorMessages.help+'">'+editorMessages.help+'</a>');
    data_field_count = fcnt;
    data_field_count_active = fcnt;

    html.push('</form>');
  } else {
    html.push('<h3>'+editorMessages.not_supported+'</h3>');
    html.push('<p>'+editorMessages.special_editing+' ['+tag+'] '+editorMessages.is_not_supported+'</p>');
    html.push('<p><form name="closeme" action="#">');
    html.push('<a href="#" id="field_cancel_button" title="'+editorMessages.cancel+'">'+editorMessages.cancel+'</a>');
    html.push('</form></p>');
  }
  fieldeditor.html(html.join(''));
  if ($('#field_ok_button')) {
    $('#field_ok_button').button({icons : {primary:'ui-icon-check'}});
    $('#field_ok_button').click(function(){ 
        if ( tag == 'LDR') {
          return_leader(lineno);
        } else if ( tag == '008') {
          return_008(lineno,tom);
        } else if ( tag == '007') {
          return_007(firstchar,lineno);
        } else if ( tag == '006') {
          return_006(lineno,tom);
        } else if (( itag >= 10) && (itag <= 999)) {
          return_datafield(tag,lineno);
        }
        $(this).removeClass('ui-state-focus ui-state-hover ui-state-active');
        return false;
    });
  }
  if ($('#field_help_button')) {
    $('#field_help_button').button({icons : {primary:'ui-icon-help'}});
    $('#field_help_button').click(function(){  $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); window.open(helpurl); return false; });
  }
  if ($('#field_cancel_button')) {
    $('#field_cancel_button').button({icons : {primary:'ui-icon-cancel'}});
    $('#field_cancel_button').click(function(){ return_to_marceditor('fieldeditor'); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
  }
  marceditor.hide();
  fieldeditor.show();
}

function return_to_marceditor(from) {
  var marceditor = $('#marceditor');
  var fieldeditor = $('#'+from);
  fieldeditor.hide();
  marceditor.show();
}

function  is_valid_indicator (s) {
  if (s=='') {
    return false;
  }
  var validchars="0123456789 ";
  var p = validchars.indexOf(s);
  if (p  === -1) {
    return false;
  }
  return true;
}

function  is_valid_subfield_code (s) {
  if (s=='') {
    return false;
  }
  var validchars="0123456789abcdefghijklmnopqrstuvwxyz";
  var p = validchars.indexOf(s);
  if (p  === -1) {
    return false;
  }
  return true;
}

function are_valid_ctrlfield_chars (s) {
 if (s=='') {
   return false;
 }
 var validchars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -^|";
 var p;
 var c;
 for (var i=0; i< s.length; i++) {
   c = s.charAt(i);
   p = validchars.indexOf(c);
   if (p  === -1) {
     return false;
   }
 }
 return true;
}

function replaceHtml(el, html) {
  var oldEl = typeof el === "string" ? document.getElementById(el) : el;
  /*@cc_on // Pure innerHTML is slightly faster in IE
    oldEl.innerHTML = html;
    return oldEl;
  @*/
  var newEl = oldEl.cloneNode(false);
  newEl.innerHTML = html;
  oldEl.parentNode.replaceChild(newEl, oldEl);
  /* Since we just removed the old element from the DOM, return a reference
  to the new element, which can be used to restore variable references. */
  return newEl;
}

function del_field(fid) {
  var fli = document.getElementById('fli_'+fid);
  var sfi = document.getElementById('sf_'+fid);
  var ffi = document.getElementById('ff_'+fid);
  if (data_field_count_active > 1) { 
    if (fli !== null) {
      fli.parentNode.removeChild(fli);
      data_field_count_active--;
    }
  } else {
    sfi.value='';
    ffi.value='';
  }
}

function add_field(fid) {
  var linode = document.createElement('li');
  var fli = document.getElementById('fli_'+fid);
  linode.id = 'fli_'+data_field_count; //linode.className = "details";
  html = [];
  html.push('<input id="sf_'+data_field_count+'" name="sf_'+data_field_count+'" size="1" maxlength="1" value="" type="text"/>&#xa0;&#xa0;');
  html.push('<input id="ff_'+data_field_count+'" name="ff_'+data_field_count+'" size="75" value="" type="text"/>&#xa0;&#xa0;');

  html.push('<a class="ui-state-active" title="'+editorMessages.delete_subfield+'" href="#" onclick="del_field('+data_field_count+');return false;"><span style="display:inline-block; vertical-align:middle" class="ui-state-active ui-icon ui-icon-circle-minus"></span></a>&#xa0;&#xa0;');
  html.push('<a href="#" class="ui-state-highlight" title="'+editorMessages.add_subfield+'" onclick="add_field('+data_field_count+');return false;"><span style="display:inline-block; vertical-align:middle" class="ui-state-highlight ui-icon ui-icon-circle-plus"></a>&#xa0;');

  if(fli.nextSibling) {
    fli.parentNode.insertBefore(linode, fli.nextSibling);
  } else {
    fli.parentNode.appendChild(linode);
  }
  replaceHtml(linode, html.join(''));
  data_field_count_active++;
  data_field_count++;
}

function trim (s) { 
  return s.replace(/^\s*/,'').replace(/\s*$/,'');
}

function pad(s,l) {
  var pad = '';
  if (s.length < l) {
    var padLength = l - s.length;
    for (var i = 0; i < l - s.length; i++) {
      pad += ' ';
    }
    s += pad;
  } else {
    s = s.substring(0, l);
  }
  return s;
}

if (!window['Node']) {
  window.Node = new Object();
  Node.ELEMENT_NODE = 1;
  Node.ATTRIBUTE_NODE = 2;
  Node.TEXT_NODE = 3;
  Node.CDATA_SECTION_NODE = 4;
  Node.ENTITY_REFERENCE_NODE = 5;
  Node.ENTITY_NODE = 6;
  Node.PROCESSING_INSTRUCTION_NODE = 7;
  Node.COMMENT_NODE = 8;
  Node.DOCUMENT_NODE = 9;
  Node.DOCUMENT_TYPE_NODE = 10;
  Node.DOCUMENT_FRAGMENT_NODE = 11;
  Node.NOTATION_NODE = 12;
}

function return_datafield(field, lineno) {
  if (is_valid_indicator(document.ctrl_form.ind1.value) == false) {
    alert(editorMessages.invalid1stind);
    return false;
  }
  if (is_valid_indicator(document.ctrl_form.ind2.value) == false) {
    alert(editorMessages.invalid2ndind);
    return false;
  }
  var sfi;
  var ffi;
  var val='';
  ul = document.getElementById('subfield_list');
  for(var j=0; j < ul.childNodes.length; j++) {
    var li = ul.childNodes[j];
    if ( li.nodeType == Node.ELEMENT_NODE ) {
      if ( li.nodeName.toLowerCase() == 'li') {
        var i = li.id;
        i = i.replace(/^.*_/,'');
        sfi = document.getElementById('sf_'+i);
        ffi = document.getElementById('ff_'+i);
        if (sfi) {
          if (is_valid_subfield_code(sfi.value) == false) {
            alert(editorMessages.invalidsubfield);
            val='';
            return false;
            break;
          }
          if (trim(ffi.value) != '') {
            val=val+'$'+sfi.value+' '+trim(ffi.value);
          }
        }
      }
    }
  }
  if (val !== '') {;
    val = '['+field+'] '+document.ctrl_form.ind1.value+document.ctrl_form.ind2.value+' '+val;
    var textfield = document.getElementById("src_textarea");
    change_textarea_line(textfield, lineno, val);
    return_to_marceditor('fieldeditor');
  }
  return false;
}

function return_leader(lineno) {
  var val;

  if (recordtype == 'bibliographic') {
    val = document.ctrl_form.f01.value+
            document.ctrl_form.f06.value+
            document.ctrl_form.f07.value+
            document.ctrl_form.f08.value+
            document.ctrl_form.f09.value+
            document.ctrl_form.f10.value+
            document.ctrl_form.f11.value+
            document.ctrl_form.f18.value+
            document.ctrl_form.f19.value+
            document.ctrl_form.f20.value+
            document.ctrl_form.f21.value;
  } else {
    val = document.ctrl_form.f01.value+
            document.ctrl_form.f06.value+
            document.ctrl_form.f07.value+
            document.ctrl_form.f08.value+
            document.ctrl_form.f10.value+
            document.ctrl_form.f11.value+
            document.ctrl_form.f18.value+
            document.ctrl_form.f19.value+
            document.ctrl_form.f21.value;
  }
  if (are_valid_ctrlfield_chars(val) === true) {
    val = '[LDR] '+val;
    var field = document.getElementById("src_textarea");
    change_textarea_line(field, lineno, val);
    return_to_marceditor('fieldeditor');
  } else {
    alert(editorMessages.invalidchars);
  }
  return false;
}

function return_007(firstchar, lineno) {
    var val = document.ctrl_form.f01.value;
    switch (firstchar) {
      case ''  : break;
      case 'o' : 
      case 'q' : 
      case 't' : 
      case 'z' :
                 val = val + document.ctrl_form.f02.value;
                 break;
      case 'c' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             (document.ctrl_form.f07.value.match(/^\s*$/) ? "   " : pad(document.ctrl_form.f07.value,3) )+
                             document.ctrl_form.f10.value +
                             document.ctrl_form.f11.value +
                             document.ctrl_form.f12.value +
                             document.ctrl_form.f13.value +
                             document.ctrl_form.f14.value;
                 break;
      case 'd' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value;
                 break;
      case 'f' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             document.ctrl_form.f07.value +
                             document.ctrl_form.f08.value +
                             document.ctrl_form.f09.value +
                             document.ctrl_form.f10.value;
                 break;
      case 'g' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             document.ctrl_form.f07.value +
                             document.ctrl_form.f08.value +
                             document.ctrl_form.f09.value;
                 break;
      case 'h' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             (document.ctrl_form.f07.value.match(/^\s*$/) ? "   " : pad(document.ctrl_form.f07.value,3) )+
                             document.ctrl_form.f10.value +
                             document.ctrl_form.f11.value +
                             document.ctrl_form.f12.value +
                             document.ctrl_form.f13.value;
                 break;
      case 'k' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value;
                 break;
      case 'm' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             document.ctrl_form.f07.value +
                             document.ctrl_form.f08.value +
                             document.ctrl_form.f09.value +
                             document.ctrl_form.f10.value +
                             document.ctrl_form.f11.value +
                             document.ctrl_form.f12.value +
                             document.ctrl_form.f13.value +
                             document.ctrl_form.f14.value +
                             document.ctrl_form.f15.value +
                             document.ctrl_form.f16.value +
                             document.ctrl_form.f17.value +
                             (document.ctrl_form.f18.value.match(/^\s*$/) ? "      " : pad(document.ctrl_form.f18.value,6) );
                 break;
      case 'r' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             document.ctrl_form.f07.value +
                             document.ctrl_form.f08.value +
                             document.ctrl_form.f09.value +
                             (document.ctrl_form.f10.value.match(/^\s*$/) ? "  " : pad(document.ctrl_form.f10.value,2) );
                 break;
      case 's' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             document.ctrl_form.f07.value +
                             document.ctrl_form.f08.value +
                             document.ctrl_form.f09.value +
                             document.ctrl_form.f10.value +
                             document.ctrl_form.f11.value +
                             document.ctrl_form.f12.value +
                             document.ctrl_form.f13.value +
                             document.ctrl_form.f14.value;
                 break;
      case 'v' :
                 val = val + document.ctrl_form.f02.value +
                             document.ctrl_form.f03.value +
                             document.ctrl_form.f04.value +
                             document.ctrl_form.f05.value +
                             document.ctrl_form.f06.value +
                             document.ctrl_form.f07.value +
                             document.ctrl_form.f08.value +
                             document.ctrl_form.f09.value;
                 break;
      default  : break;
    }
    if (are_valid_ctrlfield_chars(val) === true) {
        val = '[007] '+val;
        var field = document.getElementById("src_textarea");
        change_textarea_line(field, lineno, val);
        return_to_marceditor('fieldeditor');
        if (firstchar == '') {
          handle_textarea_dblClick(field);
        }
    } else {
        alert(editorMessages.invalidchars);
    }
    return false;
}

function return_008(lineno, tom) {
    var val;

    if (recordtype == 'bibliographic') {
      val = document.ctrl_form.f01.value+
            document.ctrl_form.f07.value+
            (document.ctrl_form.f08.value.match(/^\s*$/) ? "    " : pad(document.ctrl_form.f08.value,4) )+
            (document.ctrl_form.f12.value.match(/^\s*$/) ? "    " : pad(document.ctrl_form.f12.value,4) )+
            (document.ctrl_form.f16.value.match(/^\s*$/) ? "   " : pad(document.ctrl_form.f16.value,3) );

      switch (tom) {
        case 'BK' : val = val +
                  document.ctrl_form.f19.value+
                  document.ctrl_form.f20.value+
                  document.ctrl_form.f21.value+
                  document.ctrl_form.f22.value+
                  document.ctrl_form.f23.value+
                  document.ctrl_form.f24.value+
                  document.ctrl_form.f25.value+
                  document.ctrl_form.f26.value+
                  document.ctrl_form.f27.value+
                  document.ctrl_form.f28.value+
                  document.ctrl_form.f29.value+
                  document.ctrl_form.f30.value+
                  document.ctrl_form.f31.value+
                  document.ctrl_form.f32.value+
                  document.ctrl_form.f33.value+
                  document.ctrl_form.f34.value+
                  document.ctrl_form.f35.value;
        break;
        case 'CR':val = val +
                  document.ctrl_form.f19.value+
                  document.ctrl_form.f20.value+
                  document.ctrl_form.f21.value+
                  document.ctrl_form.f22.value+
                  document.ctrl_form.f23.value+
                  document.ctrl_form.f24.value+
                  document.ctrl_form.f25.value+
                  document.ctrl_form.f26.value+
                  document.ctrl_form.f27.value+
                  document.ctrl_form.f28.value+
                  document.ctrl_form.f29.value+
                  document.ctrl_form.f30.value+
                  document.ctrl_form.f31.value+
                  document.ctrl_form.f34.value+
                  document.ctrl_form.f35.value;
        break;
        case 'CF':val = val +
                  document.ctrl_form.f19.value+
                  document.ctrl_form.f23.value+
                  document.ctrl_form.f24.value+
                  document.ctrl_form.f27.value+
                  document.ctrl_form.f28.value+
                  document.ctrl_form.f29.value+
                  document.ctrl_form.f39.value;
        break;
        case 'MP':val = val +
                  document.ctrl_form.f19.value+
                  document.ctrl_form.f20.value+
                  document.ctrl_form.f21.value+
                  document.ctrl_form.f22.value+
                  document.ctrl_form.f23.value+
                  document.ctrl_form.f25.value+
                  document.ctrl_form.f26.value+
                  document.ctrl_form.f27.value+
                  document.ctrl_form.f29.value+
                  document.ctrl_form.f30.value+
                  document.ctrl_form.f31.value+
                  document.ctrl_form.f32.value+
                  document.ctrl_form.f33.value+
                  document.ctrl_form.f34.value+
                  document.ctrl_form.f35.value;
        break;
        case 'MX':val = val +
                 "     "+
                  document.ctrl_form.f24.value+
                 "           ";
        break;
        case 'VM':val = val +
                 (document.ctrl_form.f19.value.match(/^\s*$/) ? "   " : pad(document.ctrl_form.f19.value,3) )+
                  document.ctrl_form.f22.value+
                  document.ctrl_form.f23.value+
                  document.ctrl_form.f24.value+
                  document.ctrl_form.f29.value+
                  document.ctrl_form.f30.value+
                  document.ctrl_form.f31.value+
                  document.ctrl_form.f34.value+
                  document.ctrl_form.f35.value;
        break;
        case 'MU':val = val +
                  document.ctrl_form.f19.value+
                  document.ctrl_form.f21.value+
                  document.ctrl_form.f22.value+
                  document.ctrl_form.f23.value+
                  document.ctrl_form.f24.value+
                  document.ctrl_form.f25.value+
                  document.ctrl_form.f26.value+
                  document.ctrl_form.f27.value+
                  document.ctrl_form.f28.value+
                  document.ctrl_form.f29.value+
                  document.ctrl_form.f30.value+
                  document.ctrl_form.f31.value+
                  document.ctrl_form.f32.value+
                  document.ctrl_form.f33.value+
                  document.ctrl_form.f34.value+
                  document.ctrl_form.f35.value;
        break;
        default : break;
      }
      val = val +  (document.ctrl_form.f36.value.match(/^\s*$/) ? "   " : pad(document.ctrl_form.f36.value,3) )+
                    document.ctrl_form.f39.value+
                    document.ctrl_form.f40.value;
    } else {
      val = document.ctrl_form.f01.value+
            document.ctrl_form.f07.value+
            document.ctrl_form.f08.value+
            document.ctrl_form.f09.value+
            document.ctrl_form.f10.value+
            document.ctrl_form.f11.value+
            document.ctrl_form.f12.value+
            document.ctrl_form.f13.value+
            document.ctrl_form.f14.value+
            document.ctrl_form.f15.value+
            document.ctrl_form.f16.value+
            document.ctrl_form.f17.value+
            document.ctrl_form.f18.value+
            (document.ctrl_form.f19.value.match(/^\s*$/) ? "          " : pad(document.ctrl_form.f19.value,10) )+
            document.ctrl_form.f29.value+
            document.ctrl_form.f30.value+
            document.ctrl_form.f31.value+
            document.ctrl_form.f32.value+
            document.ctrl_form.f33.value+
            document.ctrl_form.f34.value+
            (document.ctrl_form.f35.value.match(/^\s*$/) ? "    " : pad(document.ctrl_form.f35.value,4) )+
            document.ctrl_form.f39.value+
            document.ctrl_form.f40.value;
    }
    if (are_valid_ctrlfield_chars(val) === true) {
        val = '[008] '+val;
        var field = document.getElementById("src_textarea");
        change_textarea_line(field, lineno, val);
        return_to_marceditor('fieldeditor');
    } else {
        alert(editorMessages.invalidchars);
    }
    return false;
}

function sortconf(a,b) {
  return ( ( a.f == b.f ) ? 0 : ( ( a.f > b.f ) ? 1 : -1 ) );
}

function make_controlfield(tag, value, lineno, tom) {
 var i;
 var html = [];
 var cfdefs;
 if (recordtype == 'bibliographic') { 
    definitions = cf.defs;
 } else {
    definitions = cf.authdefs;
 }
 
 for (i=0; i<=definitions.length-1; i++) {
  if (definitions[i].tag == tag) {
   var toms = definitions[i].toms;
   var list = [];
   for (var j=0; j<= toms.length-1; j++) {
    if ((toms[j].tom == "common") || (toms[j].tom == tom)) {
     list = list.concat(toms[j].list);
     //$.extend(list, toms[j].list);
    }
   }
   if (list.length) {
    html.push('<table>');
    list = list.sort(sortconf);
    for (var j=0; j <= list.length-1; j++) {
      html.push('<tr>');
      var field = list[j].f;
      var defs = list[j].def;
      var start = field.substr(1);
      var auto = defs.d;
      start = parseInt(start,10);
      var len = defs.l;
      var curval = value.substr(start-1,len);
      if (curval.length =0 ) {
        curval=defs.d;
      }
      html.push('<td>'+defs.s+'</td>');
      html.push('<td>');

      if (defs.d == '%d') {
        if (curval == '') {
          auto = '';
          var date = new Date();
          var yy = String(date.getFullYear());
          var m = date.getMonth() + 1;
          var d  = date.getDate();
          auto = yy.substr(2);
          auto = auto + ((m < 10) ? '0' + m : m);
          auto = auto + ((d < 10) ? '0' + d : d);
        } else {
          auto = curval;
        }
      }

      if (typeof defs.v == 'string') {
        if (defs.v.search(/auto-filled/) > 0 ) {
          curval = auto;
        }
        html.push('<input name="'+field+'" size="'+len+'" maxlength="'+len+'" value="'+curval+'" type="');
        if (defs.v.search(/auto-filled/) > 0 ) {
          html.push('hidden');
        } else {
          html.push('text');
        }
        html.push('" />');
        html.push(defs.v);

      } else {
        html.push('<select name="'+field+'" size="'+len+'">');
        for (var x=0; x<=defs.v.length-1; x++) {
          html.push('<option value="'+defs.v[x].v+'"');
          if (curval == defs.v[x].v) {
            html.push(' selected="selected" ');
          }
          html.push('>'+defs.v[x].d+'</option>');
        }
        html.push('</select>');
      }
      html.push('</td>');
      html.push('</tr>');
    }
    html.push('</table>');
   }
  }
 }
 return html.join('');
}

function make_005 () {
  var res = '';
  var x;
  var date = new Date();
  res = String(date.getFullYear());
  x = date.getMonth() + 1;
  res = res + ((x < 10) ? '0' + x : x);
  x  = date.getDate();
  res = res + ((x < 10) ? '0' + x : x);
  x  = date.getHours();
  res = res + ((x < 10) ? '0' + x : x);
  x  = date.getMinutes();
  res = res + ((x < 10) ? '0' + x : x);
  x  = date.getSeconds();
  res = res + ((x < 10) ? '0' + x : x);
  return (res+'.0');
}

function zap_textarea_field(textarea, tag) {
  var s = '';
  var ctag;
  var ictag;
  var field;

  lines=textarea.value.split(NEWLINE);
  field = '['+tag+']';
  var itag = isNaN(v = parseInt(tag,10)) ? 0 : v;
  for(var i=0; i<lines.length; i++) {
    ctag = lines[i].substr(1,3);
    ictag = isNaN(cv = parseInt(ctag,10)) ? 0 : cv;
    if (lines[i].substr(0,5) !== field) {
      s = s+lines[i]+NEWLINE;
    }
  }
  textarea.value = s;
}

function add_or_replace_textarea_field(textarea, tag, value) {
  var s = '';

  lines=textarea.value.split(NEWLINE);
  var v;
  var cv;
  var ctag;
  var ictag;
  var field;
  var flag = true;
  field = '['+tag+']';
  var itag = isNaN(v = parseInt(tag,10)) ? 0 : v;
  for(var i=0; i<lines.length; i++) {
    ctag = lines[i].substr(1,3);
    ictag = isNaN(cv = parseInt(ctag,10)) ? 0 : cv;
    if ((flag) && (lines[i].substr(0,5) == field)) {
      lines[i] = field+' '+value;
      flag = false;
    }
    if ((flag) && (ictag > itag)) {
      lines.splice(i,0,field+' '+value);
      flag = false;
    }
    s = s+lines[i];
    if (i != lines.length-1) s=s+NEWLINE;
  }
  textarea.value = s;
}

function set_001 () {
  var textfield = document.getElementById("src_textarea");
  recno = trim(recno);
  zap_textarea_field(textfield, '001');
  if (recno.length > 0) {
    add_or_replace_textarea_field(textfield, '001', recno);
  }
}

function set_003 () {
  var textfield = document.getElementById("src_textarea");
  orgcode = trim(orgcode);
  zap_textarea_field(textfield, '003');
  if (orgcode.length > 0) {
    add_or_replace_textarea_field(textfield, '003', orgcode);
  }
}

function set_005 () {
  var textfield = document.getElementById("src_textarea");
  add_or_replace_textarea_field(textfield, '005', make_005());
}

function encodeParams(params) {
  var sep = "";
  var encoded = "";
  for (var key in params) {
    if (params[key] != null) {
      encoded += sep + key + '=' + escape(encodeURI(params[key]));
      sep = '&';
    }
  }
  return encoded;
}

function validate_record () {
  valid = false;
  var textfield = document.getElementById("src_textarea");
  var Params = {
    "action": "validate",
    "recno": recno,
    "recordtype": recordtype,
    "marcxml" : form2marcxml(textfield.value)
  };
  servicehandler(Params, parse_validate_record);
  return false;
}

function parse_validate_record (xml) {
  var errors = [];
  var warnings = [];
  if (xml != null) {
    xml.documentElement.normalize();
    var Entries = xml.documentElement.childNodes;

    for(var i = 0; i < Entries.length; i++) {
      if ( Entries[i].nodeType == Node.ELEMENT_NODE ) {
        if ( Entries[i].nodeName.toLowerCase() == 'message') {
          for(var j = 0; j < Entries[i].childNodes.length; j++) {
            if ( Entries[i].childNodes[j].nodeType == Node.ELEMENT_NODE ) {
              if ( Entries[i].childNodes[j].nodeName.toLowerCase() == 'error') {
                errors.push(getText(Entries[i].childNodes[j]));
              } else if ( Entries[i].childNodes[j].nodeName.toLowerCase() == 'warning') {
                warnings.push(getText(Entries[i].childNodes[j]));
              }
            }
          }
        }
      }
    }
  }
  var html = [];
  var marcconsole = $('#marcconsole');
  marcconsole.html('');
  if (errors.length == 0) {
    valid = true;
  } else {
    html.push('<p class="error">');
    for (var k=0; k<errors.length;  k++) {
      html.push('Error : '+errors[k]+'<br/>');
    }
    html.push('</p>');
  }
  if (warnings.length != 0) {
    html.push('<p class="warning">');
    for (var k=0; k<warnings.length;  k++) {
      html.push('Warning : '+warnings[k]+'<br/>');
    }
    html.push('</p>');
  }
  if ((warnings.length == 0) && (errors.length ==0)) {
    html.push('<p class="valid">Record is valid</p>');
    var t=setTimeout("clear_console();",3000);
  }
  marcconsole.html(html.join(''));
}

function clear_console() {
  var marcconsole = $('#marcconsole');
  if (marcconsole) {
    $('#marcconsole p').fadeOut();
    marcconsole.html('');
  }
}

function load_template(name) {
  var Params = {
    "action": "loadtemplate",
    "path": templates_dir,
    "name": name
  };
  servicehandler(Params, parse_load_template);
  return false;
}

function parse_load_template (xml) {
  var textarealines = [];
  if (xml != null) {
    xml.documentElement.normalize();
    var Entries = xml.documentElement.childNodes;
            
    for(var i = 0; i < Entries.length; i++) {
      if ( Entries[i].nodeType == Node.ELEMENT_NODE ) {
        if ( Entries[i].nodeName.toLowerCase() == 'template') {
          var linecount = Entries[i].getAttribute("lines");
          var name = Entries[i].getAttribute("name");
          for(var j = 0; j < Entries[i].childNodes.length; j++) {
            if ( Entries[i].childNodes[j].nodeType == Node.ELEMENT_NODE ) {
              if ( Entries[i].childNodes[j].nodeName.toLowerCase() == 'line') {
                textarealines.push(getText(Entries[i].childNodes[j]));
              }
            }
          }
        }
      }
    }
  }
  if (textarealines.length) {
    var textfield = document.getElementById("src_textarea");
    textfield.value = textarealines.join(NEWLINE);
    alert(editorMessages.template_loaded);
  } else {
    alert(editorMessages.template_failed_to_load);
  }
}

function template_list () {
  var Params = {
    "action": "templatelist",
    "path": templates_dir
  };
  servicehandler(Params, parse_template_list);
  return false;
}

function parse_template_list (xml) {
  var templates = [];
  if (xml != null) {
    xml.documentElement.normalize();
    var Entries = xml.documentElement.childNodes;

    for(var i = 0; i < Entries.length; i++) {
      if ( Entries[i].nodeType == Node.ELEMENT_NODE ) {
        if ( Entries[i].nodeName.toLowerCase() == 'templates') {
          //var cnt = Entries[i].getAttribute("cnt");
          for(var j = 0; j < Entries[i].childNodes.length; j++) {
            if ( Entries[i].childNodes[j].nodeType == Node.ELEMENT_NODE ) {
              if ( Entries[i].childNodes[j].nodeName.toLowerCase() == 'template') {
                var ctemplate = Entries[i].childNodes[j];
                var filename = ctemplate.getAttribute("filename");
                var title = ctemplate.getAttribute("title");
                var atemplate = {};
                atemplate.title = title;
                atemplate.filename = filename;
                var lines = [];
                for(var k = 0; k < ctemplate.childNodes.length; k++) {
                  if ( ctemplate.childNodes[k].nodeType == Node.ELEMENT_NODE ) {
                    if ( ctemplate.childNodes[k].nodeName.toLowerCase() == 'line') {
                      lines.push(getText(ctemplate.childNodes[k]));
                    }
                  }
                }
                atemplate.lines = lines;
                templates.push(atemplate);
              }
            }
          }
        }
      }
    }
  }
  if (templates.length) {
    var templateDiv = $("#template_selector");
    templateDiv.html('');
    var html = [];
    html.push('<h3>Select one of the following templates</h3>');
    html.push('<div id="template_accordion">');
    for (var k=0; k<templates.length; k++) {
      html.push('<h3><a href="#">'+templates[k].title+'</a></h3>');
      html.push('<div>');
      html.push('<pre>');
      for (var x=0; x<templates[k].lines.length; x++) {
        html.push(templates[k].lines[x]+NEWLINE);
      }
      html.push('</pre>');
      html.push('<a href="#" id="template_select_button_'+k+'">'+editorMessages.select+'</a><br/>');
      html.push('</div>');
    }
    html.push('</div>');
    html.push('<div><p style="text-align:right"><a href="#" id="tcancel_button">'+editorMessages.cancel+'</a></p></div>');
    templateDiv.html(html.join(''));
    $('#tcancel_button').button({icons : {primary:'ui-icon-cancel'}});
    $('#tcancel_button').click(function(){ return_to_marceditor('template_selector'); $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); return false;});
    $('#template_accordion').accordion({autoHeight: false});
    for (var k=0; k<templates.length; k++) {
      var f = '#template_select_button_'+k;
      $(f).button({icons : {primary:'ui-icon-check'}});
      $(f).click([templates[k].filename], function(d){ $(this).removeClass('ui-state-focus ui-state-hover ui-state-active'); load_template(d.data[0]); return_to_marceditor('template_selector'); return false; });
    }
    var marceditor = $('#marceditor');
    marceditor.hide();
    templateDiv.show();
  } else {
    alert(editorMessages.no_templates);
  }
}

function return_006(lineno, tom) {
  var val = document.ctrl_form.f01.value;

  switch (tom) {
    case 'BK' : val = val +
                  document.ctrl_form.f02.value+
                  document.ctrl_form.f03.value+
                  document.ctrl_form.f04.value+
                  document.ctrl_form.f05.value+
                  document.ctrl_form.f06.value+
                  document.ctrl_form.f07.value+
                  document.ctrl_form.f08.value+
                  document.ctrl_form.f09.value+
                  document.ctrl_form.f10.value+
                  document.ctrl_form.f11.value+
                  document.ctrl_form.f12.value+
                  document.ctrl_form.f13.value+
                  document.ctrl_form.f14.value+
                  document.ctrl_form.f15.value+
                  document.ctrl_form.f16.value+
                  document.ctrl_form.f17.value+
                  document.ctrl_form.f18.value;
    break;
    case 'CR':val = val +
                  document.ctrl_form.f02.value+
                  document.ctrl_form.f03.value+
                  document.ctrl_form.f04.value+
                  document.ctrl_form.f05.value+
                  document.ctrl_form.f06.value+
                  document.ctrl_form.f07.value+
                  document.ctrl_form.f08.value+
                  document.ctrl_form.f09.value+
                  document.ctrl_form.f10.value+
                  document.ctrl_form.f11.value+
                  document.ctrl_form.f12.value+
                  document.ctrl_form.f13.value+
                  document.ctrl_form.f14.value+
                  document.ctrl_form.f17.value+
                  document.ctrl_form.f18.value;
    break;
    case 'CF':val = val +
                  document.ctrl_form.f02.value+
                  document.ctrl_form.f06.value+
                  document.ctrl_form.f07.value+
                  document.ctrl_form.f08.value+
                  document.ctrl_form.f10.value+
                  document.ctrl_form.f11.value+
                  document.ctrl_form.f12.value+
                  document.ctrl_form.f13.value;
    break;
    case 'MP':val = val +
                  document.ctrl_form.f02.value+
                  document.ctrl_form.f03.value+
                  document.ctrl_form.f04.value+
                  document.ctrl_form.f05.value+
                  document.ctrl_form.f06.value+
                  document.ctrl_form.f08.value+
                  document.ctrl_form.f09.value+
                  document.ctrl_form.f10.value+
                  document.ctrl_form.f12.value+
                  document.ctrl_form.f13.value+
                  document.ctrl_form.f14.value+
                  document.ctrl_form.f15.value+
                  document.ctrl_form.f16.value+
                  document.ctrl_form.f17.value+
                  document.ctrl_form.f18.value;
    break;
    case 'MX':val = val +
                 "     "+
                  document.ctrl_form.f07.value+
                 "           ";
    break;
    case 'VM':val = val +
                 (document.ctrl_form.f02.value.match(/^\s*$/) ? "   " : pad(document.ctrl_form.f02.value,3) )+
                  document.ctrl_form.f05.value+
                  document.ctrl_form.f06.value+
                  document.ctrl_form.f07.value+
                  document.ctrl_form.f12.value+
                  document.ctrl_form.f13.value+
                  document.ctrl_form.f14.value+
                  document.ctrl_form.f17.value+
                  document.ctrl_form.f18.value;
    break;
    case 'MU':val = val +
                  document.ctrl_form.f02.value+
                  document.ctrl_form.f04.value+
                  document.ctrl_form.f05.value+
                  document.ctrl_form.f06.value+
                  document.ctrl_form.f07.value+
                  document.ctrl_form.f08.value+
                  document.ctrl_form.f09.value+
                  document.ctrl_form.f10.value+
                  document.ctrl_form.f11.value+
                  document.ctrl_form.f12.value+
                  document.ctrl_form.f13.value+
                  document.ctrl_form.f14.value+
                  document.ctrl_form.f15.value+
                  document.ctrl_form.f16.value+
                  document.ctrl_form.f17.value+
                  document.ctrl_form.f18.value;
    break;
    default : break;
  }
  if (are_valid_ctrlfield_chars(val) === true) {
    val = '[006] '+val;
    var field = document.getElementById("src_textarea");
    change_textarea_line(field, lineno, val);
    return_to_marceditor('fieldeditor');
  } else {
    alert(editorMessages.invalidchars);
  }
  return false;
}

function clear_src_textarea() {
  if (confirm(editorMessages.are_u_sure)) {
    $('#src_textarea').val('');
  }
  return false;
}

