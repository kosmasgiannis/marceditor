var cf = 
{
 "defs" : [
  {"tag" : "leader",
   "toms" : [
             {
              "tom" : "common",
              "list": [
                       {
                        "f": "f01",
                        "def" : {
                                 "s" : "0-4 Record size",
                                 "l" : 5,
                                 "d" : "     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "5 Record status",
                                 "l" : 1,
                                 "d" : "n",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Increase in encoding level"},
                                        {"v" : "c", "d" : "c- Corrected or revised"},
                                        {"v" : "d", "d" : "d- Deleted"},
                                        {"v" : "n", "d" : "n- New"},
                                        {"v" : "p", "d" : "p- Increase in encoding level from prepublication"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "6 Type of record", 
                                 "l" : 1, 
                                 "d" : "a", 
                                 "v" : [
                                        {"v" : "a", "d" : "a- Language material"}, 
                                        {"v" : "c", "d" : "c- Notated music"}, 
                                        {"v" : "d", "d" : "d- Manuscript notated music"}, 
                                        {"v" : "e", "d" : "e- Cartographic material"}, 
                                        {"v" : "f", "d" : "f- Manuscript cartographic material"}, 
                                        {"v" : "g", "d" : "g- Projected medium"}, 
                                        {"v" : "i", "d" : "i- Nonmusical sound recording"}, 
                                        {"v" : "j", "d" : "j- Musical sound recording"}, 
                                        {"v" : "k", "d" : "k- Two-dimensional nonprojectable graphic"}, 
                                        {"v" : "m", "d" : "m- Computer file"}, 
                                        {"v" : "o", "d" : "o- Kit"}, 
                                        {"v" : "p", "d" : "p- Mixed materials"}, 
                                        {"v" : "r", "d" : "r- Three-dimensional artifact or naturally occurring object"}, 
                                        {"v" : "t", "d" : "t- Manuscript language material"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "7 Bibliographic level", 
                                 "l" : 1, 
                                 "d" : "m", 
                                 "v" : [
                                        {"v" : "a", "d" : "a- Monographic component part"}, 
                                        {"v" : "b", "d" : "b- Serial component part"}, 
                                        {"v" : "c", "d" : "c- Collection"}, 
                                        {"v" : "d", "d" : "d- Subunit"}, 
                                        {"v" : "i", "d" : "i- Integrating resource"}, 
                                        {"v" : "m", "d" : "m- Monograph/item"}, 
                                        {"v" : "s", "d" : "s- Serial"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "8 Type of control", 
                                 "l" : 1, 
                                 "d" : " ", 
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specific type"}, 
                                        {"v" : "a", "d" : "a- Archival"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "9 Character coding scheme", 
                                 "l" : 1, 
                                 "d" : "a", 
                                 "v" : "a- UCS/Unicode (auto-filled)"
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10-16 indicator/subfields/size", 
                                 "l" : 7, 
                                 "d" : "22     ", 
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Encoding level", 
                                 "l" : 1, 
                                 "d" : " ", 
                                 "v" : [
                                        {"v" : " ", "d" : "#- Full level"},
                                        {"v" : "1", "d" : "1- Full level, material not examined"},
                                        {"v" : "2", "d" : "2- Less-than-full level, material not examined"},
                                        {"v" : "3", "d" : "3- Abbreviated level"},
                                        {"v" : "4", "d" : "4- Core level"},
                                        {"v" : "5", "d" : "5- Partial (preliminary) level"},
                                        {"v" : "7", "d" : "7- Minimal level"},
                                        {"v" : "8", "d" : "8- Prepublication level"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Not applicable"}
                                       ]
                                }
                       },
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18 Descriptive cataloging form", 
                                 "l" : 1, 
                                 "d" : "a", 
                                 "v" : [
                                        { "v" : " ", "d" : "#- Non-ISBD"}, 
                                        { "v" : "a", "d" : "a- AACR 2"}, 
                                        { "v" : "i", "d" : "i- ISBD"}, 
                                        { "v" : "u", "d" : "u- Unknown"}
                                       ]
                                }
                       },
                       {
                        "f" : "f20",
                        "def" : {
                                 "s" : "19 Multipart resource record level", 
                                 "l" : 1, 
                                 "d" : " ", 
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified or not applicable "}, 
                                        {"v" : "a", "d" : "a- Set"}, 
                                        {"v" : "b", "d" : "b- Part with independent title"}, 
                                        {"v" : "c", "d" : "c- Part with dependent title"}
                                       ]
                                }
                       },
                       {
                        "f" : "f21",
                        "def" : {
                                 "s" : "20-23 entry map and lengths", 
                                 "l" : 4, 
                                 "d" : "4500", 
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "008",
   "toms" : [
             {
              "tom" : "BK",
              "list" :[
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" :  "#- No illustrations"},
                                        {"v" : "a", "d" :  "a- Illustrations"},
                                        {"v" : "b", "d" :  "b- Maps"},
                                        {"v" : "c", "d" :  "c- Portraits"},
                                        {"v" : "d", "d" :  "d- Charts"},
                                        {"v" : "e", "d" :  "e- Plans"},
                                        {"v" : "f", "d" :  "f- Plates"},
                                        {"v" : "g", "d" :  "g- Music"},
                                        {"v" : "h", "d" :  "h- Facsimiles"},
                                        {"v" : "i", "d" :  "i- Coats of arms"},
                                        {"v" : "j", "d" :  "j- Genealogical tables"},
                                        {"v" : "k", "d" :  "k- Forms"},
                                        {"v" : "l", "d" :  "l- Samples"},
                                        {"v" : "m", "d" :  "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" :  "o- Photographs"},
                                        {"v" : "p", "d" :  "p- Illuminations"},
                                        {"v" : "|", "d" :  "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f20",
                        "def" : {
                                 "s" : "19 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No illustrations"},
                                        {"v" : "a", "d" : "a- Illustrations"},
                                        {"v" : "b", "d" : "b- Maps"},
                                        {"v" : "c", "d" : "c- Portraits"},
                                        {"v" : "d", "d" : "d- Charts"},
                                        {"v" : "e", "d" : "e- Plans"},
                                        {"v" : "f", "d" : "f- Plates"},
                                        {"v" : "g", "d" : "g- Music"},
                                        {"v" : "h", "d" : "h- Facsimiles"},
                                        {"v" : "i", "d" : "i- Coats of arms"},
                                        {"v" : "j", "d" : "j- Genealogical tables"},
                                        {"v" : "k", "d" : "k- Forms"},
                                        {"v" : "l", "d" : "l- Samples"},
                                        {"v" : "m", "d" : "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" : "o- Photographs"},
                                        {"v" : "p", "d" : "p- Illuminations"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f21",
                        "def" : {
                                 "s" : "20 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No illustrations"},
                                        {"v" : "a", "d" : "a- Illustrations"},
                                        {"v" : "b", "d" : "b- Maps"},
                                        {"v" : "c", "d" : "c- Portraits"},
                                        {"v" : "d", "d" : "d- Charts"},
                                        {"v" : "e", "d" : "e- Plans"},
                                        {"v" : "f", "d" : "f- Plates"},
                                        {"v" : "g", "d" : "g- Music"},
                                        {"v" : "h", "d" : "h- Facsimiles"},
                                        {"v" : "i", "d" : "i- Coats of arms"},
                                        {"v" : "j", "d" : "j- Genealogical tables"},
                                        {"v" : "k", "d" : "k- Forms"},
                                        {"v" : "l", "d" : "l- Samples"},
                                        {"v" : "m", "d" : "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" : "o- Photographs"},
                                        {"v" : "p", "d" : "p- Illuminations"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f22",
                        "def" : {
                                 "s" : "21 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No illustrations"},
                                        {"v" : "a", "d" : "a- Illustrations"},
                                        {"v" : "b", "d" : "b- Maps"},
                                        {"v" : "c", "d" : "c- Portraits"},
                                        {"v" : "d", "d" : "d- Charts"},
                                        {"v" : "e", "d" : "e- Plans"},
                                        {"v" : "f", "d" : "f- Plates"},
                                        {"v" : "g", "d" : "g- Music"},
                                        {"v" : "h", "d" : "h- Facsimiles"},
                                        {"v" : "i", "d" : "i- Coats of arms"},
                                        {"v" : "j", "d" : "j- Genealogical tables"},
                                        {"v" : "k", "d" : "k- Forms"},
                                        {"v" : "l", "d" : "l- Samples"},
                                        {"v" : "m", "d" : "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" : "o- Photographs"},
                                        {"v" : "p", "d" : "p- Illuminations"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f23",
                        "def" : {
                                 "s" : "22 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f24",
                        "def" : {
                                 "s" : "23 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f25",
                        "def" : {
                                 "s" : "24 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f26",
                        "def" : {
                                 "s" : "25 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f27",
                        "def" : {
                                 "s" : "26 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f28",
                        "def" : {
                                 "s" : "27 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f29",
                        "def" : {
                                 "s" : "28 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" :"|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29 Conference publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not a conference publication"},
                                        {"v" : "1", "d" : "1- Conference publication"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f31",
                        "def" : {
                                 "s" : "30 Festschrift",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not a festschrift"},
                                        {"v" : "1", "d" : "1- Festschrift"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f32",
                        "def" : {
                                 "s" : "31 Index",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- No index"},
                                        {"v" : "1", "d" : "1- Index present"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f33",
                        "def" : {
                                 "s" : "32 Undefined",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Undefined"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f34",
                        "def" : {
                                 "s" : "33 Literary form",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not fiction (not further specified)"},
                                        {"v" : "1", "d" : "1- Fiction (not further specified)"},
                                        {"v" : "d", "d" : "d- Dramas"},
                                        {"v" : "e", "d" : "e- Essays"},
                                        {"v" : "f", "d" : "f- Novels"},
                                        {"v" : "h", "d" : "h- Humor, satires, etc."},
                                        {"v" : "i", "d" : "i- Letters"},
                                        {"v" : "j", "d" : "j- Short stories"},
                                        {"v" : "m", "d" : "m- Mixed forms"},
                                        {"v" : "p", "d" : "p- Poetry"},
                                        {"v" : "s", "d" : "s- Speeches"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f35",
                        "def" : {
                                 "s" : "34 Biography",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No biographical material"},
                                        {"v" : "a", "d" : "a- Autobiography"},
                                        {"v" : "b", "d" : "b- Individual biography"},
                                        {"v" : "c", "d" : "c- Collective biography"},
                                        {"v" : "d", "d" : "d- Contains biographical information"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "CF",
              "list": [
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18-21 Undefined",
                                 "l" : 4,
                                 "d" : "    ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f23",
                        "def" : {
                                 "s" : "22 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f24",
                        "def" : {
                                 "s" : "23-25 Undefined",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f27",
                        "def" : {
                                 "s" : "26 Type of computer file",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Numeric data"},
                                        {"v" : "b", "d" : "b- Computer program"},
                                        {"v" : "c", "d" : "c- Representational"},
                                        {"v" : "d", "d" : "d- Document"},
                                        {"v" : "e", "d" : "e- Bibliographic data"},
                                        {"v" : "f", "d" : "f- Font"},
                                        {"v" : "g", "d" : "g- Game"},
                                        {"v" : "h", "d" : "h- Sound"},
                                        {"v" : "i", "d" : "i- Interactive multimedia"},
                                        {"v" : "j", "d" : "j- Online system or service"},
                                        {"v" : "m", "d" : "m- Combination"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f28",
                        "def" : {
                                 "s" : "27 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                       "f" : "f29",
                        "def" : {
                                 "s" : "28 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29-34 Undefined",
                                 "l" : 6,
                                 "d" : "      ",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             },
             {
              "tom" : "CR",
              "list": [
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18 Frequency",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No determinable frequency"},
                                        {"v" : "a", "d" : "a- Annual"},
                                        {"v" : "b", "d" : "b- Bimonthly"},
                                        {"v" : "c", "d" : "c- Semiweekly"},
                                        {"v" : "d", "d" : "d- Daily"},
                                        {"v" : "e", "d" : "e- Biweekly"},
                                        {"v" : "f", "d" : "f- Semiannual"},
                                        {"v" : "g", "d" : "g- Biennial"},
                                        {"v" : "h", "d" : "h- Triennial"},
                                        {"v" : "i", "d" : "i- Three times a week"},
                                        {"v" : "j", "d" : "j- Three times a month"},
                                        {"v" : "k", "d" : "k- Continuously updated"},
                                        {"v" : "m", "d" : "m- Monthly"},
                                        {"v" : "q", "d" : "q- Quarterly"},
                                        {"v" : "s", "d" : "s- Semimonthly"},
                                        {"v" : "t", "d" : "t- Three times a year"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "w", "d" : "w- Weekly"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f20",
                        "def" : {
                                 "s" : "19 Regularity",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "n", "d" : "n- Normalized irregular"},
                                        {"v" : "r", "d" : "r- Regular"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "x", "d" : "x- Completely irregular"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f21",
                        "def" : {
                                 "s" : "20 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f22",
                        "def" : {
                                 "s" : "21 Type of continuing resource",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "d", "d" : "d- Updating database"},
                                        {"v" : "l", "d" : "l- Updating loose-leaf"},
                                        {"v" : "m", "d" : "m- Monographic series"},
                                        {"v" : "n", "d" : "n- Newspaper"},
                                        {"v" : "p", "d" : "p- Periodical"},
                                        {"v" : "w", "d" : "w- Updating Web site"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f23",
                        "def" : {
                                 "s" : "22 Form of original item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "e", "d" : "e- Newspaper format"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f24",
                        "def" : {
                                 "s" : "23 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f25",
                        "def" : {
                                 "s" : "24 Nature of entire work",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f26",
                        "def" : {
                                 "s" : "25 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f27",
                        "def" : {
                                 "s" : "26 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f28",
                        "def" : {
                                 "s" : "27 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f29",
                        "def" : {
                                 "s" : "28 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29 Conference publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not a conference publication"},
                                        {"v" : "1", "d" : "1- Conference publication"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f31",
                        "def" : {
                                 "s" : "30-32 Undefined",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f34",
                        "def" : {
                                 "s" : "33 Original alphabet or script of title",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No alphabet or script given/No key title"},
                                        {"v" : "a", "d" : "a- Basic Roman"},
                                        {"v" : "b", "d" : "b- Extended Roman"},
                                        {"v" : "c", "d" : "c- Cyrillic"},
                                        {"v" : "d", "d" : "d- Japanese"},
                                        {"v" : "e", "d" : "e- Chinese"},
                                        {"v" : "f", "d" : "f- Arabic"},
                                        {"v" : "g", "d" : "g- Greek"},
                                        {"v" : "h", "d" : "h- Hebrew"},
                                        {"v" : "i", "d" : "i- Thai"},
                                        {"v" : "j", "d" : "j- Devanagari"},
                                        {"v" : "k", "d" : "k- Korean"},
                                        {"v" : "l", "d" : "l- Tamil"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f35",
                        "def" : {
                                 "s" : "34 Entry convention",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Successive entry"},
                                        {"v" : "1", "d" : "1- Latest entry"},
                                        {"v" : "2", "d" : "2- Integrated entry"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "MP",
              "list": [
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f20",
                        "def" : {
                                 "s" : "19 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f21",
                        "def" : {
                                 "s" : "20 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f22",
                        "def" : {
                                 "s" : "21 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f23",
                        "def" : {
                                 "s" : "22-23 Projection",
                                 "l" : 2,
                                 "d" : "||",
                                 "v" : [
                                        {"v" : "  ", "d" : "##- Projection not specified"},
                                        {"v" : "aa", "d" : "aa- Aitoff"},
                                        {"v" : "ab", "d" : "ab- Gnomic"},
                                        {"v" : "ac", "d" : "ac- Lambert's azimuthal equal area"},
                                        {"v" : "ad", "d" : "ad- Orthographic"},
                                        {"v" : "ae", "d" : "ae- Azimuthal equidistant"},
                                        {"v" : "af", "d" : "af- Stereographic"},
                                        {"v" : "ag", "d" : "ag- General vertical near-sided"},
                                        {"v" : "am", "d" : "am- Modified stereographic for Alaska"},
                                        {"v" : "an", "d" : "an- Chamberlin trimetric"},
                                        {"v" : "ap", "d" : "ap- Polar stereographic"},
                                        {"v" : "au", "d" : "au- Azimuthal, specific type unknown"},
                                        {"v" : "az", "d" : "az- Azimuthal, other"},
                                        {"v" : "ba", "d" : "ba- Gall"},
                                        {"v" : "bb", "d" : "bb- Goode's homolographic"},
                                        {"v" : "bc", "d" : "bc- Lambert's cylindrical equal area"},
                                        {"v" : "bd", "d" : "bd- Mercator"},
                                        {"v" : "be", "d" : "be- Miller"},
                                        {"v" : "bf", "d" : "bf- Mollweide"},
                                        {"v" : "bg", "d" : "bg- Sinusoidal"},
                                        {"v" : "bh", "d" : "bh- Transverse Mercator"},
                                        {"v" : "bi", "d" : "bi- Gauss-Kruger"},
                                        {"v" : "bj", "d" : "bj- Equirectangular"},
                                        {"v" : "bo", "d" : "bo- Oblique Mercator"},
                                        {"v" : "br", "d" : "br- Robinson"},
                                        {"v" : "bs", "d" : "bs- Space oblique Mercator"},
                                        {"v" : "bu", "d" : "bu- Cylindrical, specific type unknown"},
                                        {"v" : "bz", "d" : "bz- Cylindrical, other"},
                                        {"v" : "ca", "d" : "ca- Alber's equal area"},
                                        {"v" : "cb", "d" : "cb- Bonne"},
                                        {"v" : "cc", "d" : "cc- Lambert's conformal conic"},
                                        {"v" : "ce", "d" : "ce- Equidistant conic"},
                                        {"v" : "cp", "d" : "cp- Polyconic"},
                                        {"v" : "cu", "d" : "cu- Conic, specific type unknown"},
                                        {"v" : "cz", "d" : "cz- Conic, other"},
                                        {"v" : "da", "d" : "da- Armadillo"},
                                        {"v" : "db", "d" : "db- Butterfly"},
                                        {"v" : "dc", "d" : "dc- Eckert"},
                                        {"v" : "dd", "d" : "dd- Goode's homolosine"},
                                        {"v" : "de", "d" : "de- Miller's bipolar oblique conformal conic"},
                                        {"v" : "df", "d" : "df- Van Der Grinten"},
                                        {"v" : "dg", "d" : "dg- Dimaxion"},
                                        {"v" : "dh", "d" : "dh- Cordiform"},
                                        {"v" : "dl", "d" : "dl- Lambert conformal"},
                                        {"v" : "zz", "d" : "zz- Other"},
                                        {"v" : "||", "d" : "||- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f25",
                        "def" : {
                                 "s" : "24 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f26",
                        "def" : {
                                 "s" : "25 Type of cartographic material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Single map"},
                                        {"v" : "b", "d" : "b- Map series"},
                                        {"v" : "c", "d" : "c- Map serial"},
                                        {"v" : "d", "d" : "d- Globe"},
                                        {"v" : "e", "d" : "e- Atlas"},
                                        {"v" : "f", "d" : "f- Separate supplement to another work"},
                                        {"v" : "g", "d" : "g- Bound as part of another work"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f27",
                        "def" : {
                                 "s" : "26-27 Undefined",
                                 "l" : 2,
                                 "d" : "  ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f29",
                        "def" : {
                                 "s" : "28 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f31",
                        "def" : {
                                 "s" : "30 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f32",
                        "def" : {
                                 "s" : "31 Index",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- No index"},
                                        {"v" : "1", "d" : "1- Index present"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f33",
                        "def" : {
                                 "s" : "32 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f34",
                        "def" : {
                                 "s" : "33 Special format characteristics",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified special format characteristics"},
                                        {"v" : "e", "d" : "e- Manuscript"},
                                        {"v" : "j", "d" : "j- Picture card, post card"},
                                        {"v" : "k", "d" : "k- Calendar"},
                                        {"v" : "l", "d" : "l- Puzzle"},
                                        {"v" : "n", "d" : "n- Game"},
                                        {"v" : "o", "d" : "o- Wall map"},
                                        {"v" : "p", "d" : "p- Playing cards"},
                                        {"v" : "r", "d" : "r- Loose-leaf"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f35",
                        "def" : {
                                 "s" : "34 Special format characteristics",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified special format characteristics"},
                                        {"v" : "e", "d" : "e- Manuscript"},
                                        {"v" : "j", "d" : "j- Picture card, post card"},
                                        {"v" : "k", "d" : "k- Calendar"},
                                        {"v" : "l", "d" : "l- Puzzle"},
                                        {"v" : "n", "d" : "n- Game"},
                                        {"v" : "o", "d" : "o- Wall map"},
                                        {"v" : "p", "d" : "p- Playing cards"},
                                        {"v" : "r", "d" : "r- Loose-leaf"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "MU",
              "list": [
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18-19 Form of composition",
                                 "l" : 2,
                                 "d" : "||",
                                 "v" : [
                                        {"v" : "an", "d" : "an- Anthems"},
                                        {"v" : "bd", "d" : "bd- Ballads"},
                                        {"v" : "bg", "d" : "bg- Bluegrass music"},
                                        {"v" : "bl", "d" : "bl- Blues"},
                                        {"v" : "bt", "d" : "bt- Ballets"},
                                        {"v" : "ca", "d" : "ca- Chaconnes"},
                                        {"v" : "cb", "d" : "cb- Chants, Other religions"},
                                        {"v" : "cc", "d" : "cc- Chant, Christian"},
                                        {"v" : "cg", "d" : "cg- Concerti grossi"},
                                        {"v" : "ch", "d" : "ch- Chorales"},
                                        {"v" : "cl", "d" : "cl- Chorale preludes"},
                                        {"v" : "cn", "d" : "cn- Canons and rounds"},
                                        {"v" : "co", "d" : "co- Concertos"},
                                        {"v" : "cp", "d" : "cp- Chansons, polyphonic"},
                                        {"v" : "cr", "d" : "cr- Carols"},
                                        {"v" : "cs", "d" : "cs- Chance compositions"},
                                        {"v" : "ct", "d" : "ct- Cantatas"},
                                        {"v" : "cy", "d" : "cy- Country music"},
                                        {"v" : "cz", "d" : "cz- Canzonas"},
                                        {"v" : "df", "d" : "df- Dance forms"},
                                        {"v" : "dv", "d" : "dv- Divertimentos, serenades, cassations, divertissements, and notturni"},
                                        {"v" : "fg", "d" : "fg- Fugues"},
                                        {"v" : "fm", "d" : "fm- Folk music"},
                                        {"v" : "ft", "d" : "ft- Fantasias"},
                                        {"v" : "gm", "d" : "gm- Gospel music"},
                                        {"v" : "hy", "d" : "hy- Hymns"},
                                        {"v" : "jz", "d" : "jz- Jazz"},
                                        {"v" : "mc", "d" : "mc- Musical revues and comedies"},
                                        {"v" : "md", "d" : "md- Madrigals"},
                                        {"v" : "mi", "d" : "mi- Minuets"},
                                        {"v" : "mo", "d" : "mo- Motets"},
                                        {"v" : "mp", "d" : "mp- Motion picture music"},
                                        {"v" : "mr", "d" : "mr- Marches"},
                                        {"v" : "ms", "d" : "ms- Masses"},
                                        {"v" : "mu", "d" : "mu- Multiple forms"},
                                        {"v" : "mz", "d" : "mz- Mazurkas"},
                                        {"v" : "nc", "d" : "nc- Nocturnes"},
                                        {"v" : "nn", "d" : "nn- Not applicable"},
                                        {"v" : "op", "d" : "op- Operas"},
                                        {"v" : "or", "d" : "or- Oratorios"},
                                        {"v" : "ov", "d" : "ov- Overtures"},
                                        {"v" : "pg", "d" : "pg- Program music"},
                                        {"v" : "pm", "d" : "pm- Passion music"},
                                        {"v" : "po", "d" : "po- Polonaises"},
                                        {"v" : "pp", "d" : "pp- Popular music"},
                                        {"v" : "pr", "d" : "pr- Preludes"},
                                        {"v" : "ps", "d" : "ps- Passacaglias"},
                                        {"v" : "pt", "d" : "pt- Part-songs"},
                                        {"v" : "pv", "d" : "pv- Pavans"},
                                        {"v" : "rc", "d" : "rc- Rock music"},
                                        {"v" : "rd", "d" : "rd- Rondos"},
                                        {"v" : "rg", "d" : "rg- Ragtime music"},
                                        {"v" : "ri", "d" : "ri- Ricercars"},
                                        {"v" : "rp", "d" : "rp- Rhapsodies"},
                                        {"v" : "rq", "d" : "rq- Requiems"},
                                        {"v" : "sd", "d" : "sd- Square dance music"},
                                        {"v" : "sg", "d" : "sg- Songs"},
                                        {"v" : "sn", "d" : "sn- Sonatas"},
                                        {"v" : "sp", "d" : "sp- Symphonic poems"},
                                        {"v" : "st", "d" : "st- Studies and exercises"},
                                        {"v" : "su", "d" : "su- Suites"},
                                        {"v" : "sy", "d" : "sy- Symphonies"},
                                        {"v" : "tc", "d" : "tc- Toccatas"},
                                        {"v" : "ts", "d" : "ts- Trio-sonatas"},
                                        {"v" : "uu", "d" : "uu- Unknown"},
                                        {"v" : "vr", "d" : "vr- Variations"},
                                        {"v" : "wz", "d" : "wz- Waltzes"},
                                        {"v" : "zz", "d" : "zz- Other"},
                                        {"v" : "||", "d" : "||- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f21",
                        "def" : {
                                 "s" : "20 Format of music",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Full score"},
                                        {"v" : "b", "d" : "b- Full score, miniature or study size"},
                                        {"v" : "c", "d" : "c- Accompaniment reduced for keyboard"},
                                        {"v" : "d", "d" : "d- Voice score"},
                                        {"v" : "e", "d" : "e- Condensed score or piano-conductor score"},
                                        {"v" : "g", "d" : "g- Close score"},
                                        {"v" : "h", "d" : "h- Chorus score"},
                                        {"v" : "i", "d" : "i- Condensed score"},
                                        {"v" : "j", "d" : "j- Performer-conductor part"},
                                        {"v" : "k", "d" : "k- Vocal score"},
                                        {"v" : "l", "d" : "l- Score"},
                                        {"v" : "m", "d" : "m- Multiple score formats"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f22",
                        "def" : {
                                 "s" : "21 Music parts",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No parts in hand or not specified"},
                                        {"v" : "d", "d" : "d- Instrumental and vocal parts"},
                                        {"v" : "e", "d" : "e- Instrumental parts"},
                                        {"v" : "f", "d" : "f- Vocal parts"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f23",
                        "def" : {
                                 "s" : "22 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f24",
                        "def" : {
                                 "s" : "23 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f25",
                        "def" : {
                                 "s" : "24 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f26",
                        "def" : {
                                 "s" : "25 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f27",
                        "def" : {
                                 "s" : "26 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f28",
                        "def" : {
                                 "s" : "27 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f29",
                        "def" : {
                                 "s" : "28 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f31",
                        "def" : {
                                 "s" : "30 Literary text for sound recordings",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Item is a music sound recording"},
                                        {"v" : "a", "d" : "a- Autobiography"},
                                        {"v" : "b", "d" : "b- Biography"},
                                        {"v" : "c", "d" : "c- Conference proceedings"},
                                        {"v" : "d", "d" : "d- Drama"},
                                        {"v" : "e", "d" : "e- Essays"},
                                        {"v" : "f", "d" : "f- Fiction"},
                                        {"v" : "g", "d" : "g- Reporting"},
                                        {"v" : "h", "d" : "h- History"},
                                        {"v" : "i", "d" : "i- Instruction"},
                                        {"v" : "j", "d" : "j- Language instruction"},
                                        {"v" : "k", "d" : "k- Comedy"},
                                        {"v" : "l", "d" : "l- Lectures, speeches"},
                                        {"v" : "m", "d" : "m- Memoirs"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "o", "d" : "o- Folktales"},
                                        {"v" : "p", "d" : "p- Poetry"},
                                        {"v" : "r", "d" : "r- Rehearsals"},
                                        {"v" : "s", "d" : "s- Sounds"},
                                        {"v" : "t", "d" : "t- Interviews"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f32",
                        "def" : {
                                 "s" : "31 Literary text for sound recordings",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Item is a music sound recording"},
                                        {"v" : "a", "d" : "a- Autobiography"},
                                        {"v" : "b", "d" : "b- Biography"},
                                        {"v" : "c", "d" : "c- Conference proceedings"},
                                        {"v" : "d", "d" : "d- Drama"},
                                        {"v" : "e", "d" : "e- Essays"},
                                        {"v" : "f", "d" : "f- Fiction"},
                                        {"v" : "g", "d" : "g- Reporting"},
                                        {"v" : "h", "d" : "h- History"},
                                        {"v" : "i", "d" : "i- Instruction"},
                                        {"v" : "j", "d" : "j- Language instruction"},
                                        {"v" : "k", "d" : "k- Comedy"},
                                        {"v" : "l", "d" : "l- Lectures, speeches"},
                                        {"v" : "m", "d" : "m- Memoirs"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "o", "d" : "o- Folktales"},
                                        {"v" : "p", "d" : "p- Poetry"},
                                        {"v" : "r", "d" : "r- Rehearsals"},
                                        {"v" : "s", "d" : "s- Sounds"},
                                        {"v" : "t", "d" : "t- Interviews"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f33",
                        "def" : {
                                 "s" : "32 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f34",
                        "def" : {
                                 "s" : "33 Transposition and arrangement",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not arrangement or transposition or not specified"},
                                        {"v" : "a", "d" : "a- Transposition"},
                                        {"v" : "b", "d" : "b- Arrangement"},
                                        {"v" : "c", "d" : "c- Both transposed and arranged"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f35",
                        "def" : {
                                 "s" : "34 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             },
             {
              "tom" : "MX",
              "list": [
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18-22 Undefined",
                                 "l" : 5,
                                 "d" : "     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f24",
                        "def" : {
                                 "s" : "23 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f25",
                        "def" : {
                                 "s" : "24-34 Undefined",
                                 "l" : 11,
                                 "d" : "           ",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             },
             {
              "tom" : "VM",
              "list": [
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18-20 Running time for motion pictures and videorecordings",
                                 "l" : 3,
                                 "d" : "|||",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f22",
                        "def" : {
                                 "s" : "21 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f23",
                        "def" : {
                                 "s" : "22 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f24",
                        "def" : {
                                 "s" : "23-27 Undefined",
                                 "l" : 5,
                                 "d" : "     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f29",
                        "def" : {
                                 "s" : "28 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f31",
                        "def" : {
                                 "s" : "30-32 Undefined",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f34",
                        "def" : {
                                 "s" : "33 Type of visual material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Art original"},
                                        {"v" : "b", "d" : "b- Kit"},
                                        {"v" : "c", "d" : "c- Art reproduction"},
                                        {"v" : "d", "d" : "d- Diorama"},
                                        {"v" : "f", "d" : "f- Filmstrip"},
                                        {"v" : "g", "d" : "g- Game"},
                                        {"v" : "i", "d" : "i- Picture"},
                                        {"v" : "k", "d" : "k- Graphic"},
                                        {"v" : "l", "d" : "l- Technical drawing"},
                                        {"v" : "m", "d" : "m- Motion picture"},
                                        {"v" : "n", "d" : "n- Chart"},
                                        {"v" : "o", "d" : "o- Flash card"},
                                        {"v" : "p", "d" : "p- Microscope slide"},
                                        {"v" : "q", "d" : "q- Model"},
                                        {"v" : "r", "d" : "r- Realia"},
                                        {"v" : "s", "d" : "s- Slide"},
                                        {"v" : "t", "d" : "t- Transparency"},
                                        {"v" : "v", "d" : "v- Videorecording"},
                                        {"v" : "w", "d" : "w- Toy"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f35",
                        "def" : {
                                 "s" : "34 Technique",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Animation"},
                                        {"v" : "c", "d" : "c- Animation and live action"},
                                        {"v" : "l", "d" : "l- Live action"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "common",
              "list": [
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "0-5 Date entered on file",
                                 "l" : 6,
                                 "d" : "%d",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "6 Type of date/Publication status",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "b", "d" : "b- No dates given; B.C. date involved"},
                                        {"v" : "c", "d" : "c- Continuing resource currently published"},
                                        {"v" : "d", "d" : "d- Continuing resource ceased publication"},
                                        {"v" : "e", "d" : "e- Detailed date"},
                                        {"v" : "i", "d" : "i- Inclusive dates of collection"},
                                        {"v" : "k", "d" : "k- Range of years of bulk of collection"},
                                        {"v" : "m", "d" : "m- Multiple dates"},
                                        {"v" : "n", "d" : "n- Dates unknown"},
                                        {"v" : "p", "d" : "p- Date of distribution/release/issue and production/recording session when different"},
                                        {"v" : "q", "d" : "q- Questionable date"},
                                        {"v" : "r", "d" : "r- Reprint/reissue date and original date"},
                                        {"v" : "s", "d" : "s- Single known date/probable date"},
                                        {"v" : "t", "d" : "t- Publication date and copyright date"},
                                        {"v" : "u", "d" : "u- Continuing resource status unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "7-10 Date 1",
                                 "l" : 4,
                                 "d" : "    ",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11-14 Date 2",
                                 "l" : 4,
                                 "d" : "    ",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f16",
                        "def" : {
                                 "s" : "15-17 Place of publication, production, or execution",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f36",
                        "def" : {
                                 "s" : "35-37 Language",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f39",
                        "def" : {
                                 "s" : "38 Modified record",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not modified"},
                                        {"v" : "d", "d" : "d- Dashed-on information omitted"},
                                        {"v" : "o", "d" : "o- Completely romanized/printed cards romanized"},
                                        {"v" : "r", "d" : "r- Completely romanized/printed cards in script"},
                                        {"v" : "s", "d" : "s- Shortened"},
                                        {"v" : "x", "d" : "x- Missing characters"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f40",
                        "def" : {
                                 "s" : "39 Modified record",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- National bibliographic agency"},
                                        {"v" : "c", "d" : "c- Cooperative cataloging program"},
                                        {"v" : "d", "d" : "d- Other"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                      }
                     ]
             }
            ]
  },
  {"tag" : "006",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Form of material ",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Language material"},
                                        {"v" : "c", "d" : "c - Notated music"},
                                        {"v" : "d", "d" : "d - Manuscript notated music"},
                                        {"v" : "e", "d" : "e - Cartographic material"},
                                        {"v" : "f", "d" : "f - Manuscript cartographic material"},
                                        {"v" : "g", "d" : "g - Projected medium"},
                                        {"v" : "i", "d" : "i - Nonmusical sound recording"},
                                        {"v" : "j", "d" : "j - Musical sound recording"},
                                        {"v" : "k", "d" : "k - Two-dimensional nonprojectable graphic"},
                                        {"v" : "m", "d" : "m - Computer file/Electronic resource"},
                                        {"v" : "o", "d" : "o - Kit"},
                                        {"v" : "p", "d" : "p - Mixed material"},
                                        {"v" : "r", "d" : "r - Three-dimensional artifact or naturally occurring object"},
                                        {"v" : "s", "d" : "s - Serial/Integrating resource"},
                                        {"v" : "t", "d" : "t - Manuscript language material"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "BK",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" :  "#- No illustrations"},
                                        {"v" : "a", "d" :  "a- Illustrations"},
                                        {"v" : "b", "d" :  "b- Maps"},
                                        {"v" : "c", "d" :  "c- Portraits"},
                                        {"v" : "d", "d" :  "d- Charts"},
                                        {"v" : "e", "d" :  "e- Plans"},
                                        {"v" : "f", "d" :  "f- Plates"},
                                        {"v" : "g", "d" :  "g- Music"},
                                        {"v" : "h", "d" :  "h- Facsimiles"},
                                        {"v" : "i", "d" :  "i- Coats of arms"},
                                        {"v" : "j", "d" :  "j- Genealogical tables"},
                                        {"v" : "k", "d" :  "k- Forms"},
                                        {"v" : "l", "d" :  "l- Samples"},
                                        {"v" : "m", "d" :  "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" :  "o- Photographs"},
                                        {"v" : "p", "d" :  "p- Illuminations"},
                                        {"v" : "|", "d" :  "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No illustrations"},
                                        {"v" : "a", "d" : "a- Illustrations"},
                                        {"v" : "b", "d" : "b- Maps"},
                                        {"v" : "c", "d" : "c- Portraits"},
                                        {"v" : "d", "d" : "d- Charts"},
                                        {"v" : "e", "d" : "e- Plans"},
                                        {"v" : "f", "d" : "f- Plates"},
                                        {"v" : "g", "d" : "g- Music"},
                                        {"v" : "h", "d" : "h- Facsimiles"},
                                        {"v" : "i", "d" : "i- Coats of arms"},
                                        {"v" : "j", "d" : "j- Genealogical tables"},
                                        {"v" : "k", "d" : "k- Forms"},
                                        {"v" : "l", "d" : "l- Samples"},
                                        {"v" : "m", "d" : "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" : "o- Photographs"},
                                        {"v" : "p", "d" : "p- Illuminations"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No illustrations"},
                                        {"v" : "a", "d" : "a- Illustrations"},
                                        {"v" : "b", "d" : "b- Maps"},
                                        {"v" : "c", "d" : "c- Portraits"},
                                        {"v" : "d", "d" : "d- Charts"},
                                        {"v" : "e", "d" : "e- Plans"},
                                        {"v" : "f", "d" : "f- Plates"},
                                        {"v" : "g", "d" : "g- Music"},
                                        {"v" : "h", "d" : "h- Facsimiles"},
                                        {"v" : "i", "d" : "i- Coats of arms"},
                                        {"v" : "j", "d" : "j- Genealogical tables"},
                                        {"v" : "k", "d" : "k- Forms"},
                                        {"v" : "l", "d" : "l- Samples"},
                                        {"v" : "m", "d" : "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" : "o- Photographs"},
                                        {"v" : "p", "d" : "p- Illuminations"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Illustration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No illustrations"},
                                        {"v" : "a", "d" : "a- Illustrations"},
                                        {"v" : "b", "d" : "b- Maps"},
                                        {"v" : "c", "d" : "c- Portraits"},
                                        {"v" : "d", "d" : "d- Charts"},
                                        {"v" : "e", "d" : "e- Plans"},
                                        {"v" : "f", "d" : "f- Plates"},
                                        {"v" : "g", "d" : "g- Music"},
                                        {"v" : "h", "d" : "h- Facsimiles"},
                                        {"v" : "i", "d" : "i- Coats of arms"},
                                        {"v" : "j", "d" : "j- Genealogical tables"},
                                        {"v" : "k", "d" : "k- Forms"},
                                        {"v" : "l", "d" : "l- Samples"},
                                        {"v" : "m", "d" : "m- Phonodisc, phonowire, etc."},
                                        {"v" : "o", "d" : "o- Photographs"},
                                        {"v" : "p", "d" : "p- Illuminations"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified nature of contents"},
                                        {"v" : "2", "d" : "2- Offprints"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "j", "d" : "j- Patent document"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" :"|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Conference publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not a conference publication"},
                                        {"v" : "1", "d" : "1- Conference publication"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 Festschrift",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not a festschrift"},
                                        {"v" : "1", "d" : "1- Festschrift"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f15",
                        "def" : {
                                 "s" : "14 Index",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- No index"},
                                        {"v" : "1", "d" : "1- Index present"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f16",
                        "def" : {
                                 "s" : "15 Undefined",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Undefined"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 Literary form",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not fiction (not further specified)"},
                                        {"v" : "1", "d" : "1- Fiction (not further specified)"},
                                        {"v" : "d", "d" : "d- Dramas"},
                                        {"v" : "e", "d" : "e- Essays"},
                                        {"v" : "f", "d" : "f- Novels"},
                                        {"v" : "h", "d" : "h- Humor, satires, etc."},
                                        {"v" : "i", "d" : "i- Letters"},
                                        {"v" : "j", "d" : "j- Short stories"},
                                        {"v" : "m", "d" : "m- Mixed forms"},
                                        {"v" : "p", "d" : "p- Poetry"},
                                        {"v" : "s", "d" : "s- Speeches"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Biography",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No biographical material"},
                                        {"v" : "a", "d" : "a- Autobiography"},
                                        {"v" : "b", "d" : "b- Individual biography"},
                                        {"v" : "c", "d" : "c- Collective biography"},
                                        {"v" : "d", "d" : "d- Contains biographical information"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "CF",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01-04 Undefined",
                                 "l" : 4,
                                 "d" : "    ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07-08 Undefined",
                                 "l" : 2,
                                 "d" : "  ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Type of computer file",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Numeric data"},
                                        {"v" : "b", "d" : "b- Computer program"},
                                        {"v" : "c", "d" : "c- Representational"},
                                        {"v" : "d", "d" : "d- Document"},
                                        {"v" : "e", "d" : "e- Bibliographic data"},
                                        {"v" : "f", "d" : "f- Font"},
                                        {"v" : "g", "d" : "g- Game"},
                                        {"v" : "h", "d" : "h- Sound"},
                                        {"v" : "i", "d" : "i- Interactive multimedia"},
                                        {"v" : "j", "d" : "j- Online system or service"},
                                        {"v" : "m", "d" : "m- Combination"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                       "f" : "f12",
                        "def" : {
                                 "s" : "11 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12-17 Undefined",
                                 "l" : 6,
                                 "d" : "      ",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             },
             {
              "tom" : "CR",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Frequency",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No determinable frequency"},
                                        {"v" : "a", "d" : "a- Annual"},
                                        {"v" : "b", "d" : "b- Bimonthly"},
                                        {"v" : "c", "d" : "c- Semiweekly"},
                                        {"v" : "d", "d" : "d- Daily"},
                                        {"v" : "e", "d" : "e- Biweekly"},
                                        {"v" : "f", "d" : "f- Semiannual"},
                                        {"v" : "g", "d" : "g- Biennial"},
                                        {"v" : "h", "d" : "h- Triennial"},
                                        {"v" : "i", "d" : "i- Three times a week"},
                                        {"v" : "j", "d" : "j- Three times a month"},
                                        {"v" : "k", "d" : "k- Continuously updated"},
                                        {"v" : "m", "d" : "m- Monthly"},
                                        {"v" : "q", "d" : "q- Quarterly"},
                                        {"v" : "s", "d" : "s- Semimonthly"},
                                        {"v" : "t", "d" : "t- Three times a year"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "w", "d" : "w- Weekly"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Regularity",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "n", "d" : "n- Normalized irregular"},
                                        {"v" : "r", "d" : "r- Regular"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "x", "d" : "x- Completely irregular"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Type of continuing resource",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "d", "d" : "d- Updating database"},
                                        {"v" : "l", "d" : "l- Updating loose-leaf"},
                                        {"v" : "m", "d" : "m- Monographic series"},
                                        {"v" : "n", "d" : "n- Newspaper"},
                                        {"v" : "p", "d" : "p- Periodical"},
                                        {"v" : "w", "d" : "w- Updating Web site"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Form of original item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "e", "d" : "e- Newspaper format"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Nature of entire work",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Nature of contents",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not specified"},
                                        {"v" : "5", "d" : "5- Calendars"},
                                        {"v" : "6", "d" : "6- Comics/graphic novels"},
                                        {"v" : "a", "d" : "a- Abstracts/summaries"},
                                        {"v" : "b", "d" : "b- Bibliographies"},
                                        {"v" : "c", "d" : "c- Catalogs"},
                                        {"v" : "d", "d" : "d- Dictionaries"},
                                        {"v" : "e", "d" : "e- Encyclopedias"},
                                        {"v" : "f", "d" : "f- Handbooks"},
                                        {"v" : "g", "d" : "g- Legal articles"},
                                        {"v" : "h", "d" : "h- Biography"},
                                        {"v" : "i", "d" : "i- Indexes"},
                                        {"v" : "k", "d" : "k- Discographies"},
                                        {"v" : "l", "d" : "l- Legislation"},
                                        {"v" : "m", "d" : "m- Theses"},
                                        {"v" : "n", "d" : "n- Surveys of literature in a subject area"},
                                        {"v" : "o", "d" : "o- Reviews"},
                                        {"v" : "p", "d" : "p- Programmed texts"},
                                        {"v" : "q", "d" : "q- Filmographies"},
                                        {"v" : "r", "d" : "r- Directories"},
                                        {"v" : "s", "d" : "s- Statistics"},
                                        {"v" : "t", "d" : "t- Technical reports"},
                                        {"v" : "u", "d" : "u- Standards/specifications"},
                                        {"v" : "v", "d" : "v- Legal cases and case notes"},
                                        {"v" : "w", "d" : "w- Law reports and digests"},
                                        {"v" : "y", "d" : "y- Yearbooks"},
                                        {"v" : "z", "d" : "z- Treaties"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Conference publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Not a conference publication"},
                                        {"v" : "1", "d" : "1- Conference publication"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13-15 Undefined",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 Original alphabet or script of title",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No alphabet or script given/No key title"},
                                        {"v" : "a", "d" : "a- Basic Roman"},
                                        {"v" : "b", "d" : "b- Extended Roman"},
                                        {"v" : "c", "d" : "c- Cyrillic"},
                                        {"v" : "d", "d" : "d- Japanese"},
                                        {"v" : "e", "d" : "e- Chinese"},
                                        {"v" : "f", "d" : "f- Arabic"},
                                        {"v" : "g", "d" : "g- Greek"},
                                        {"v" : "h", "d" : "h- Hebrew"},
                                        {"v" : "i", "d" : "i- Thai"},
                                        {"v" : "j", "d" : "j- Devanagari"},
                                        {"v" : "k", "d" : "k- Korean"},
                                        {"v" : "l", "d" : "l- Tamil"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Entry convention",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- Successive entry"},
                                        {"v" : "1", "d" : "1- Latest entry"},
                                        {"v" : "2", "d" : "2- Integrated entry"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "MP",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Relief",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No relief shown"},
                                        {"v" : "a", "d" : "a- Contours"},
                                        {"v" : "b", "d" : "b- Shading"},
                                        {"v" : "c", "d" : "c- Gradient and bathymetric tints"},
                                        {"v" : "d", "d" : "d- Hachures"},
                                        {"v" : "e", "d" : "e- Bathymetry/soundings"},
                                        {"v" : "f", "d" : "f- Form lines"},
                                        {"v" : "g", "d" : "g- Spot heights"},
                                        {"v" : "i", "d" : "i- Pictorially"},
                                        {"v" : "j", "d" : "j- Land forms"},
                                        {"v" : "k", "d" : "k- Bathymetry/isolines"},
                                        {"v" : "m", "d" : "m- Rock drawings"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05-06 Projection",
                                 "l" : 2,
                                 "d" : "||",
                                 "v" : [
                                        {"v" : "  ", "d" : "##- Projection not specified"},
                                        {"v" : "aa", "d" : "aa- Aitoff"},
                                        {"v" : "ab", "d" : "ab- Gnomic"},
                                        {"v" : "ac", "d" : "ac- Lambert's azimuthal equal area"},
                                        {"v" : "ad", "d" : "ad- Orthographic"},
                                        {"v" : "ae", "d" : "ae- Azimuthal equidistant"},
                                        {"v" : "af", "d" : "af- Stereographic"},
                                        {"v" : "ag", "d" : "ag- General vertical near-sided"},
                                        {"v" : "am", "d" : "am- Modified stereographic for Alaska"},
                                        {"v" : "an", "d" : "an- Chamberlin trimetric"},
                                        {"v" : "ap", "d" : "ap- Polar stereographic"},
                                        {"v" : "au", "d" : "au- Azimuthal, specific type unknown"},
                                        {"v" : "az", "d" : "az- Azimuthal, other"},
                                        {"v" : "ba", "d" : "ba- Gall"},
                                        {"v" : "bb", "d" : "bb- Goode's homolographic"},
                                        {"v" : "bc", "d" : "bc- Lambert's cylindrical equal area"},
                                        {"v" : "bd", "d" : "bd- Mercator"},
                                        {"v" : "be", "d" : "be- Miller"},
                                        {"v" : "bf", "d" : "bf- Mollweide"},
                                        {"v" : "bg", "d" : "bg- Sinusoidal"},
                                        {"v" : "bh", "d" : "bh- Transverse Mercator"},
                                        {"v" : "bi", "d" : "bi- Gauss-Kruger"},
                                        {"v" : "bj", "d" : "bj- Equirectangular"},
                                        {"v" : "bo", "d" : "bo- Oblique Mercator"},
                                        {"v" : "br", "d" : "br- Robinson"},
                                        {"v" : "bs", "d" : "bs- Space oblique Mercator"},
                                        {"v" : "bu", "d" : "bu- Cylindrical, specific type unknown"},
                                        {"v" : "bz", "d" : "bz- Cylindrical, other"},
                                        {"v" : "ca", "d" : "ca- Alber's equal area"},
                                        {"v" : "cb", "d" : "cb- Bonne"},
                                        {"v" : "cc", "d" : "cc- Lambert's conformal conic"},
                                        {"v" : "ce", "d" : "ce- Equidistant conic"},
                                        {"v" : "cp", "d" : "cp- Polyconic"},
                                        {"v" : "cu", "d" : "cu- Conic, specific type unknown"},
                                        {"v" : "cz", "d" : "cz- Conic, other"},
                                        {"v" : "da", "d" : "da- Armadillo"},
                                        {"v" : "db", "d" : "db- Butterfly"},
                                        {"v" : "dc", "d" : "dc- Eckert"},
                                        {"v" : "dd", "d" : "dd- Goode's homolosine"},
                                        {"v" : "de", "d" : "de- Miller's bipolar oblique conformal conic"},
                                        {"v" : "df", "d" : "df- Van Der Grinten"},
                                        {"v" : "dg", "d" : "dg- Dimaxion"},
                                        {"v" : "dh", "d" : "dh- Cordiform"},
                                        {"v" : "dl", "d" : "dl- Lambert conformal"},
                                        {"v" : "zz", "d" : "zz- Other"},
                                        {"v" : "||", "d" : "||- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Type of cartographic material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Single map"},
                                        {"v" : "b", "d" : "b- Map series"},
                                        {"v" : "c", "d" : "c- Map serial"},
                                        {"v" : "d", "d" : "d- Globe"},
                                        {"v" : "e", "d" : "e- Atlas"},
                                        {"v" : "f", "d" : "f- Separate supplement to another work"},
                                        {"v" : "g", "d" : "g- Bound as part of another work"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09-10 Undefined",
                                 "l" : 2,
                                 "d" : "  ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f15",
                        "def" : {
                                 "s" : "14 Index",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0- No index"},
                                        {"v" : "1", "d" : "1- Index present"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f16",
                        "def" : {
                                 "s" : "15 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 Special format characteristics",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified special format characteristics"},
                                        {"v" : "e", "d" : "e- Manuscript"},
                                        {"v" : "j", "d" : "j- Picture card, post card"},
                                        {"v" : "k", "d" : "k- Calendar"},
                                        {"v" : "l", "d" : "l- Puzzle"},
                                        {"v" : "n", "d" : "n- Game"},
                                        {"v" : "o", "d" : "o- Wall map"},
                                        {"v" : "p", "d" : "p- Playing cards"},
                                        {"v" : "r", "d" : "r- Loose-leaf"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Special format characteristics",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No specified special format characteristics"},
                                        {"v" : "e", "d" : "e- Manuscript"},
                                        {"v" : "j", "d" : "j- Picture card, post card"},
                                        {"v" : "k", "d" : "k- Calendar"},
                                        {"v" : "l", "d" : "l- Puzzle"},
                                        {"v" : "n", "d" : "n- Game"},
                                        {"v" : "o", "d" : "o- Wall map"},
                                        {"v" : "p", "d" : "p- Playing cards"},
                                        {"v" : "r", "d" : "r- Loose-leaf"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             },
             {
              "tom" : "MU",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01-02 Form of composition",
                                 "l" : 2,
                                 "d" : "||",
                                 "v" : [
                                        {"v" : "an", "d" : "an- Anthems"},
                                        {"v" : "bd", "d" : "bd- Ballads"},
                                        {"v" : "bg", "d" : "bg- Bluegrass music"},
                                        {"v" : "bl", "d" : "bl- Blues"},
                                        {"v" : "bt", "d" : "bt- Ballets"},
                                        {"v" : "ca", "d" : "ca- Chaconnes"},
                                        {"v" : "cb", "d" : "cb- Chants, Other religions"},
                                        {"v" : "cc", "d" : "cc- Chant, Christian"},
                                        {"v" : "cg", "d" : "cg- Concerti grossi"},
                                        {"v" : "ch", "d" : "ch- Chorales"},
                                        {"v" : "cl", "d" : "cl- Chorale preludes"},
                                        {"v" : "cn", "d" : "cn- Canons and rounds"},
                                        {"v" : "co", "d" : "co- Concertos"},
                                        {"v" : "cp", "d" : "cp- Chansons, polyphonic"},
                                        {"v" : "cr", "d" : "cr- Carols"},
                                        {"v" : "cs", "d" : "cs- Chance compositions"},
                                        {"v" : "ct", "d" : "ct- Cantatas"},
                                        {"v" : "cy", "d" : "cy- Country music"},
                                        {"v" : "cz", "d" : "cz- Canzonas"},
                                        {"v" : "df", "d" : "df- Dance forms"},
                                        {"v" : "dv", "d" : "dv- Divertimentos, serenades, cassations, divertissements, and notturni"},
                                        {"v" : "fg", "d" : "fg- Fugues"},
                                        {"v" : "fm", "d" : "fm- Folk music"},
                                        {"v" : "ft", "d" : "ft- Fantasias"},
                                        {"v" : "gm", "d" : "gm- Gospel music"},
                                        {"v" : "hy", "d" : "hy- Hymns"},
                                        {"v" : "jz", "d" : "jz- Jazz"},
                                        {"v" : "mc", "d" : "mc- Musical revues and comedies"},
                                        {"v" : "md", "d" : "md- Madrigals"},
                                        {"v" : "mi", "d" : "mi- Minuets"},
                                        {"v" : "mo", "d" : "mo- Motets"},
                                        {"v" : "mp", "d" : "mp- Motion picture music"},
                                        {"v" : "mr", "d" : "mr- Marches"},
                                        {"v" : "ms", "d" : "ms- Masses"},
                                        {"v" : "mu", "d" : "mu- Multiple forms"},
                                        {"v" : "mz", "d" : "mz- Mazurkas"},
                                        {"v" : "nc", "d" : "nc- Nocturnes"},
                                        {"v" : "nn", "d" : "nn- Not applicable"},
                                        {"v" : "op", "d" : "op- Operas"},
                                        {"v" : "or", "d" : "or- Oratorios"},
                                        {"v" : "ov", "d" : "ov- Overtures"},
                                        {"v" : "pg", "d" : "pg- Program music"},
                                        {"v" : "pm", "d" : "pm- Passion music"},
                                        {"v" : "po", "d" : "po- Polonaises"},
                                        {"v" : "pp", "d" : "pp- Popular music"},
                                        {"v" : "pr", "d" : "pr- Preludes"},
                                        {"v" : "ps", "d" : "ps- Passacaglias"},
                                        {"v" : "pt", "d" : "pt- Part-songs"},
                                        {"v" : "pv", "d" : "pv- Pavans"},
                                        {"v" : "rc", "d" : "rc- Rock music"},
                                        {"v" : "rd", "d" : "rd- Rondos"},
                                        {"v" : "rg", "d" : "rg- Ragtime music"},
                                        {"v" : "ri", "d" : "ri- Ricercars"},
                                        {"v" : "rp", "d" : "rp- Rhapsodies"},
                                        {"v" : "rq", "d" : "rq- Requiems"},
                                        {"v" : "sd", "d" : "sd- Square dance music"},
                                        {"v" : "sg", "d" : "sg- Songs"},
                                        {"v" : "sn", "d" : "sn- Sonatas"},
                                        {"v" : "sp", "d" : "sp- Symphonic poems"},
                                        {"v" : "st", "d" : "st- Studies and exercises"},
                                        {"v" : "su", "d" : "su- Suites"},
                                        {"v" : "sy", "d" : "sy- Symphonies"},
                                        {"v" : "tc", "d" : "tc- Toccatas"},
                                        {"v" : "ts", "d" : "ts- Trio-sonatas"},
                                        {"v" : "uu", "d" : "uu- Unknown"},
                                        {"v" : "vr", "d" : "vr- Variations"},
                                        {"v" : "wz", "d" : "wz- Waltzes"},
                                        {"v" : "zz", "d" : "zz- Other"},
                                        {"v" : "||", "d" : "||- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Format of music",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Full score"},
                                        {"v" : "b", "d" : "b- Full score, miniature or study size"},
                                        {"v" : "c", "d" : "c- Accompaniment reduced for keyboard"},
                                        {"v" : "d", "d" : "d- Voice score"},
                                        {"v" : "e", "d" : "e- Condensed score or piano-conductor score"},
                                        {"v" : "g", "d" : "g- Close score"},
                                        {"v" : "m", "d" : "m- Multiple score formats"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Music parts",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No parts in hand or not specified"},
                                        {"v" : "d", "d" : "d- Instrumental and vocal parts"},
                                        {"v" : "e", "d" : "e- Instrumental parts"},
                                        {"v" : "f", "d" : "f- Vocal parts"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Accompanying matter",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- No accompanying matter"},
                                        {"v" : "a", "d" : "a- Discography"},
                                        {"v" : "b", "d" : "b- Bibliography"},
                                        {"v" : "c", "d" : "c- Thematic index"},
                                        {"v" : "d", "d" : "d- Libretto or text"},
                                        {"v" : "e", "d" : "e- Biography of composer or author"},
                                        {"v" : "f", "d" : "f- Biography of performer or history of ensemble"},
                                        {"v" : "g", "d" : "g- Technical and/or historical information on instruments"},
                                        {"v" : "h", "d" : "h- Technical information on music"},
                                        {"v" : "i", "d" : "i- Historical information"},
                                        {"v" : "k", "d" : "k- Ethnological information"},
                                        {"v" : "r", "d" : "r- Instructional materials"},
                                        {"v" : "s", "d" : "s- Music"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 Literary text for sound recordings",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Item is a music sound recording"},
                                        {"v" : "a", "d" : "a- Autobiography"},
                                        {"v" : "b", "d" : "b- Biography"},
                                        {"v" : "c", "d" : "c- Conference proceedings"},
                                        {"v" : "d", "d" : "d- Drama"},
                                        {"v" : "e", "d" : "e- Essays"},
                                        {"v" : "f", "d" : "f- Fiction"},
                                        {"v" : "g", "d" : "g- Reporting"},
                                        {"v" : "h", "d" : "h- History"},
                                        {"v" : "i", "d" : "i- Instruction"},
                                        {"v" : "j", "d" : "j- Language instruction"},
                                        {"v" : "k", "d" : "k- Comedy"},
                                        {"v" : "l", "d" : "l- Lectures, speeches"},
                                        {"v" : "m", "d" : "m- Memoirs"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "o", "d" : "o- Folktales"},
                                        {"v" : "p", "d" : "p- Poetry"},
                                        {"v" : "r", "d" : "r- Rehearsals"},
                                        {"v" : "s", "d" : "s- Sounds"},
                                        {"v" : "t", "d" : "t- Interviews"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f15",
                        "def" : {
                                 "s" : "14 Literary text for sound recordings",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Item is a music sound recording"},
                                        {"v" : "a", "d" : "a- Autobiography"},
                                        {"v" : "b", "d" : "b- Biography"},
                                        {"v" : "c", "d" : "c- Conference proceedings"},
                                        {"v" : "d", "d" : "d- Drama"},
                                        {"v" : "e", "d" : "e- Essays"},
                                        {"v" : "f", "d" : "f- Fiction"},
                                        {"v" : "g", "d" : "g- Reporting"},
                                        {"v" : "h", "d" : "h- History"},
                                        {"v" : "i", "d" : "i- Instruction"},
                                        {"v" : "j", "d" : "j- Language instruction"},
                                        {"v" : "k", "d" : "k- Comedy"},
                                        {"v" : "l", "d" : "l- Lectures, speeches"},
                                        {"v" : "m", "d" : "m- Memoirs"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "o", "d" : "o- Folktales"},
                                        {"v" : "p", "d" : "p- Poetry"},
                                        {"v" : "r", "d" : "r- Rehearsals"},
                                        {"v" : "s", "d" : "s- Sounds"},
                                        {"v" : "t", "d" : "t- Interviews"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f16",
                        "def" : {
                                 "s" : "15 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 Transposition and arrangement",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not arrangement or transposition or not specified"},
                                        {"v" : "a", "d" : "a- Transposition"},
                                        {"v" : "b", "d" : "b- Arrangement"},
                                        {"v" : "c", "d" : "c- Both transposed and arranged"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             },
             {
              "tom" : "MX",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01-05 Undefined",
                                 "l" : 5,
                                 "d" : "     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07-17 Undefined",
                                 "l" : 11,
                                 "d" : "           ",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             },
             {
              "tom" : "VM",
              "list": [
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01-03 Running time for motion pictures and videorecordings",
                                 "l" : 3,
                                 "d" : "|||",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Target audience",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Unknown or not specified"},
                                        {"v" : "a", "d" : "a- Preschool"},
                                        {"v" : "b", "d" : "b- Primary"},
                                        {"v" : "c", "d" : "c- Pre-adolescent"},
                                        {"v" : "d", "d" : "d- Adolescent"},
                                        {"v" : "e", "d" : "e- Adult"},
                                        {"v" : "f", "d" : "f- Specialized"},
                                        {"v" : "g", "d" : "g- General"},
                                        {"v" : "j", "d" : "j- Juvenile"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06-10 Undefined",
                                 "l" : 5,
                                 "d" : "     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Government publication",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- Not a government publication"},
                                        {"v" : "a", "d" : "a- Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c- Multilocal"},
                                        {"v" : "f", "d" : "f- Federal/national"},
                                        {"v" : "i", "d" : "i- International intergovernmental"},
                                        {"v" : "l", "d" : "l- Local"},
                                        {"v" : "m", "d" : "m- Multistate"},
                                        {"v" : "o", "d" : "o- Government publication-level undetermined"},
                                        {"v" : "s", "d" : "s- State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u- Unknown if item is government publication"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Form of item",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "#- None of the following"},
                                        {"v" : "a", "d" : "a- Microfilm"},
                                        {"v" : "b", "d" : "b- Microfiche"},
                                        {"v" : "c", "d" : "c- Microopaque"},
                                        {"v" : "d", "d" : "d- Large print"},
                                        {"v" : "f", "d" : "f- Braille"},
                                        {"v" : "r", "d" : "r- Regular print reproduction"},
                                        {"v" : "s", "d" : "s- Electronic"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13-15 Undefined",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 Type of visual material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Art original"},
                                        {"v" : "b", "d" : "b- Kit"},
                                        {"v" : "c", "d" : "c- Art reproduction"},
                                        {"v" : "d", "d" : "d- Diorama"},
                                        {"v" : "f", "d" : "f- Filmstrip"},
                                        {"v" : "g", "d" : "g- Game"},
                                        {"v" : "i", "d" : "i- Picture"},
                                        {"v" : "k", "d" : "k- Graphic"},
                                        {"v" : "l", "d" : "l- Technical drawing"},
                                        {"v" : "m", "d" : "m- Motion picture"},
                                        {"v" : "n", "d" : "n- Chart"},
                                        {"v" : "o", "d" : "o- Flash card"},
                                        {"v" : "p", "d" : "p- Microscope slide"},
                                        {"v" : "q", "d" : "q- Model"},
                                        {"v" : "r", "d" : "r- Realia"},
                                        {"v" : "s", "d" : "s- Slide"},
                                        {"v" : "t", "d" : "t- Transparency"},
                                        {"v" : "v", "d" : "v- Videorecording"},
                                        {"v" : "w", "d" : "w- Toy"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Technique",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Animation"},
                                        {"v" : "c", "d" : "c- Animation and live action"},
                                        {"v" : "l", "d" : "l- Live action"},
                                        {"v" : "n", "d" : "n- Not applicable"},
                                        {"v" : "u", "d" : "u- Unknown"},
                                        {"v" : "z", "d" : "z- Other"},
                                        {"v" : "|", "d" : "|- No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "z",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Map"},
                                        {"v" : "c", "d" : "c - Electronic resource"},
                                        {"v" : "d", "d" : "d - Globe"},
                                        {"v" : "f", "d" : "f - Tactile material"},
                                        {"v" : "g", "d" : "g - Projected graphic"},
                                        {"v" : "h", "d" : "h - Microform"},
                                        {"v" : "k", "d" : "k - Nonprojected graphic"},
                                        {"v" : "m", "d" : "m - Motion picture"},
                                        {"v" : "o", "d" : "o - Kit"},
                                        {"v" : "q", "d" : "q - Notated music"},
                                        {"v" : "r", "d" : "r - Remote-sensing image"},
                                        {"v" : "s", "d" : "s - Sound recording"},
                                        {"v" : "t", "d" : "t - Text"},
                                        {"v" : "v", "d" : "v - Videorecording"},
                                        {"v" : "z", "d" : "z - Unspecified"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007a",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "a",
                                 "v" : "a - Map (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "d", "d" : "d - Atlas"},
                                        {"v" : "g", "d" : "g - Diagram"},
                                        {"v" : "j", "d" : "j - Map"},
                                        {"v" : "k", "d" : "k - Profile"},
                                        {"v" : "q", "d" : "q - Model"},
                                        {"v" : "r", "d" : "r - Remote-sensing image"},
                                        {"v" : "s", "d" : "s - Section"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "y", "d" : "y - View"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One color"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Physical medium",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Paper"},
                                        {"v" : "b", "d" : "b - Wood"},
                                        {"v" : "c", "d" : "c - Stone"},
                                        {"v" : "d", "d" : "d - Metal"},
                                        {"v" : "e", "d" : "e - Synthetic"},
                                        {"v" : "f", "d" : "f - Skin"},
                                        {"v" : "g", "d" : "g - Textiles"},
                                        {"v" : "i", "d" : "i - Plastic"},
                                        {"v" : "j", "d" : "j - Glass"},
                                        {"v" : "l", "d" : "l - Vinyl"},
                                        {"v" : "n", "d" : "n - Vellum"},
                                        {"v" : "p", "d" : "p - Plaster"},
                                        {"v" : "q", "d" : "q - Flexible base photographic, positive"},
                                        {"v" : "r", "d" : "r - Flexible base photographic, negative"},
                                        {"v" : "s", "d" : "s - Non-flexible base photographic, positive"},
                                        {"v" : "t", "d" : "t - Non-flexible base photographic, negative"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - Leather"},
                                        {"v" : "w", "d" : "w - Parchment"},
                                        {"v" : "y", "d" : "y - Other photographic medium"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Type of reproduction",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "f", "d" : "f - Facsimile"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Production/reproduction details",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Photocopy, blueline print"},
                                        {"v" : "b", "d" : "b - Photocopy"},
                                        {"v" : "c", "d" : "c - Pre-production"},
                                        {"v" : "d", "d" : "d - Film"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Positive/negative aspect",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Positive"},
                                        {"v" : "b", "d" : "b - Negative"},
                                        {"v" : "m", "d" : "m - Mixed polarity"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007c",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "c",
                                 "v" : "c - Electronic resource (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Tape cartridge"},
                                        {"v" : "b", "d" : "b - Chip cartridge"},
                                        {"v" : "c", "d" : "c - Computer optical disc cartridge"},
                                        {"v" : "d", "d" : "d - Computer disc, type unspecified"},
                                        {"v" : "e", "d" : "e - Computer disc cartridge, type unspecified"},
                                        {"v" : "f", "d" : "f - Tape cassette"},
                                        {"v" : "h", "d" : "h - Tape reel"},
                                        {"v" : "j", "d" : "j - Magnetic disk"},
                                        {"v" : "k", "d" : "k - Computer card"},
                                        {"v" : "m", "d" : "m - Magneto-optical disc"},
                                        {"v" : "o", "d" : "o - Optical disc"},
                                        {"v" : "r", "d" : "r - Remote"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One color"},
                                        {"v" : "b", "d" : "b - Black-and-white"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "g", "d" : "g - Gray scale"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Dimensions",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - 3 1/2 in."},
                                        {"v" : "e", "d" : "e - 12 in."},
                                        {"v" : "g", "d" : "g - 4 3/4 in. or 12 cm."},
                                        {"v" : "i", "d" : "i - 1 1/8 x 2 3/8 in."},
                                        {"v" : "j", "d" : "j - 3 7/8 x 2 1/2 in."},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "o", "d" : "o - 5 1/4 in."},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - 8 in."},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Sound",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Sound"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06-08 Image bit depth",
                                 "l" : 3,
                                 "d" : "|||",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 File formats",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One file format"},
                                        {"v" : "m", "d" : "m - Multiple file formats"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Quality assurance target(s)",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Absent"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "p", "d" : "p - Present"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Antecedent/Source",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - File reproduced from original"},
                                        {"v" : "b", "d" : "b - File reproduced from microform"},
                                        {"v" : "c", "d" : "c - File reproduced from an electronic resource"},
                                        {"v" : "d", "d" : "d - File reproduced from an intermediate (not microform)"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Antecedent/Source",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Uncompressed"},
                                        {"v" : "b", "d" : "b - Lossless"},
                                        {"v" : "d", "d" : "d - Lossy"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 Reformatting Quality",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Access"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "p", "d" : "p - Preservation"},
                                        {"v" : "r", "d" : "r - Replacement"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007d",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "d",
                                 "v" : "d - Globe (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Celestial globe"},
                                        {"v" : "b", "d" : "b - Planetary or lunar globe"},
                                        {"v" : "c", "d" : "c - Terrestrial globe"},
                                        {"v" : "e", "d" : "e - Earth moon globe"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One color"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Physical medium",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Paper"},
                                        {"v" : "b", "d" : "b - Wood"},
                                        {"v" : "c", "d" : "c - Stone"},
                                        {"v" : "d", "d" : "d - Metal"},
                                        {"v" : "e", "d" : "e - Synthetic"},
                                        {"v" : "f", "d" : "f - Skin"},
                                        {"v" : "g", "d" : "g - Textiles"},
                                        {"v" : "i", "d" : "i - Plastic"},
                                        {"v" : "j", "d" : "j - Glass"},
                                        {"v" : "l", "d" : "l - Vinyl"},
                                        {"v" : "n", "d" : "n - Vellum"},
                                        {"v" : "p", "d" : "p - Plaster"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - Leather"},
                                        {"v" : "w", "d" : "w - Parchment"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Type of reproduction",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "f", "d" : "f - Facsimile"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007f",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "f",
                                 "v" : "f - Tactile material (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Moon"},
                                        {"v" : "b", "d" : "b - Braille"},
                                        {"v" : "c", "d" : "c - Combination"},
                                        {"v" : "d", "d" : "d - Tactile, with no writing system"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Class of braille writing",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No specified class of braille writing"},
                                        {"v" : "a", "d" : "a - Literary braille"},
                                        {"v" : "b", "d" : "b - Format code braille"},
                                        {"v" : "c", "d" : "c - Mathematics and scientific braille"},
                                        {"v" : "d", "d" : "d - Computer braille"},
                                        {"v" : "e", "d" : "e - Music braille"},
                                        {"v" : "m", "d" : "m - Multiple braille types"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Class of braille writing",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No specified class of braille writing"},
                                        {"v" : "a", "d" : "a - Literary braille"},
                                        {"v" : "b", "d" : "b - Format code braille"},
                                        {"v" : "c", "d" : "c - Mathematics and scientific braille"},
                                        {"v" : "d", "d" : "d - Computer braille"},
                                        {"v" : "e", "d" : "e - Music braille"},
                                        {"v" : "m", "d" : "m - Multiple braille types"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Level of contraction",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Uncontracted"},
                                        {"v" : "b", "d" : "b - Contracted"},
                                        {"v" : "c", "d" : "c - Combination"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Braille music format",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No specified braille music format"},
                                        {"v" : "a", "d" : "a - Bar over bar"},
                                        {"v" : "b", "d" : "b - Bar by bar"},
                                        {"v" : "c", "d" : "c - Line over line"},
                                        {"v" : "d", "d" : "d - Paragraph"},
                                        {"v" : "e", "d" : "e - Single line"},
                                        {"v" : "f", "d" : "f - Section by section"},
                                        {"v" : "g", "d" : "g - Line by line"},
                                        {"v" : "h", "d" : "h - Open score"},
                                        {"v" : "i", "d" : "i - Spanner short form scoring"},
                                        {"v" : "j", "d" : "j - Short form scoring"},
                                        {"v" : "k", "d" : "k - Outline"},
                                        {"v" : "l", "d" : "l - Vertical score"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Braille music format",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No specified braille music format"},
                                        {"v" : "a", "d" : "a - Bar over bar"},
                                        {"v" : "b", "d" : "b - Bar by bar"},
                                        {"v" : "c", "d" : "c - Line over line"},
                                        {"v" : "d", "d" : "d - Paragraph"},
                                        {"v" : "e", "d" : "e - Single line"},
                                        {"v" : "f", "d" : "f - Section by section"},
                                        {"v" : "g", "d" : "g - Line by line"},
                                        {"v" : "h", "d" : "h - Open score"},
                                        {"v" : "i", "d" : "i - Spanner short form scoring"},
                                        {"v" : "j", "d" : "j - Short form scoring"},
                                        {"v" : "k", "d" : "k - Outline"},
                                        {"v" : "l", "d" : "l - Vertical score"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Braille music format",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No specified braille music format"},
                                        {"v" : "a", "d" : "a - Bar over bar"},
                                        {"v" : "b", "d" : "b - Bar by bar"},
                                        {"v" : "c", "d" : "c - Line over line"},
                                        {"v" : "d", "d" : "d - Paragraph"},
                                        {"v" : "e", "d" : "e - Single line"},
                                        {"v" : "f", "d" : "f - Section by section"},
                                        {"v" : "g", "d" : "g - Line by line"},
                                        {"v" : "h", "d" : "h - Open score"},
                                        {"v" : "i", "d" : "i - Spanner short form scoring"},
                                        {"v" : "j", "d" : "j - Short form scoring"},
                                        {"v" : "k", "d" : "k - Outline"},
                                        {"v" : "l", "d" : "l - Vertical score"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Special physical characteristics",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Print/braille"},
                                        {"v" : "b", "d" : "b - Jumbo or enlarged braille"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007g",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "g",
                                 "v" : "g - Projected graphic (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "c", "d" : "c - Filmstrip cartridge"},
                                        {"v" : "d", "d" : "d - Filmslip"},
                                        {"v" : "f", "d" : "f - Filmstrip, type unspecified"},
                                        {"v" : "o", "d" : "o - Filmstrip roll"},
                                        {"v" : "s", "d" : "s - Slide"},
                                        {"v" : "t", "d" : "t - Transparency"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One color"},
                                        {"v" : "b", "d" : "b - Black-and-white"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "h", "d" : "h - Hand colored"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Base of emulsion",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "d", "d" : "d - Glass"},
                                        {"v" : "e", "d" : "e - Synthetic"},
                                        {"v" : "j", "d" : "j - Safety film"},
                                        {"v" : "k", "d" : "k - Film base, other than safety film"},
                                        {"v" : "m", "d" : "m - Mixed collection"},
                                        {"v" : "o", "d" : "o - Paper"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Sound on medium or separate",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Sound on medium"},
                                        {"v" : "b", "d" : "b - Sound separate from medium"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Medium for sound",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Optical sound track on motion picture film"},
                                        {"v" : "b", "d" : "b - Magnetic sound track on motion picture film"},
                                        {"v" : "c", "d" : "c - Magnetic audio tape in cartridge"},
                                        {"v" : "d", "d" : "d - Sound disc"},
                                        {"v" : "e", "d" : "e - Magnetic audio tape on reel"},
                                        {"v" : "f", "d" : "f - Magnetic audio tape in cassette"},
                                        {"v" : "g", "d" : "g - Optical and magnetic sound track on motion picture film"},
                                        {"v" : "h", "d" : "h - Videotape"},
                                        {"v" : "i", "d" : "i - Videodisc"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Dimensions",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Standard 8 mm. film width"},
                                        {"v" : "b", "d" : "b - Super 8 mm./single 8 mm. film width"},
                                        {"v" : "c", "d" : "c - 9.5 mm. film width"},
                                        {"v" : "d", "d" : "d - 16 mm. film width"},
                                        {"v" : "e", "d" : "e - 28 mm. film width"},
                                        {"v" : "f", "d" : "f - 35 mm. film width"},
                                        {"v" : "g", "d" : "g - 70 mm. film width"},
                                        {"v" : "j", "d" : "j - 2x2 in. or 5x5 cm. slide"},
                                        {"v" : "k", "d" : "k - 2 1/4 x 2 1/4 in. or 6x6 cm. slide"},
                                        {"v" : "s", "d" : "s - 4x5 in. or 10x13 cm. transparency"},
                                        {"v" : "t", "d" : "t - 5x7 in. or 13x18 cm. transparency"},
                                        {"v" : "v", "d" : "v - 8x10 in. or 21x26 cm. transparency"},
                                        {"v" : "w", "d" : "w - 9x9 in. or 23x23 cm. transparency"},
                                        {"v" : "x", "d" : "x - 10x10 in. or 26x26 cm. transparency"},
                                        {"v" : "y", "d" : "y - 7x7 in. or 18x18 cm. transparency"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Secondary support material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No secondary support"},
                                        {"v" : "c", "d" : "c - Cardboard"},
                                        {"v" : "d", "d" : "d - Glass"},
                                        {"v" : "e", "d" : "e - Synthetic"},
                                        {"v" : "h", "d" : "h - Metal"},
                                        {"v" : "j", "d" : "j - Metal and glass"},
                                        {"v" : "k", "d" : "k - Synthetic and glass"},
                                        {"v" : "m", "d" : "m - Mixed collection"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007h",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "h",
                                 "v" : "h - Microform (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Aperture card"},
                                        {"v" : "b", "d" : "b - Microfilm cartridge"},
                                        {"v" : "c", "d" : "c - Microfilm cassette"},
                                        {"v" : "d", "d" : "d - Microfilm reel"},
                                        {"v" : "e", "d" : "e - Microfiche"},
                                        {"v" : "f", "d" : "f - Microfiche cassette"},
                                        {"v" : "g", "d" : "g - Microopaque"},
                                        {"v" : "h", "d" : "h - Microfilm slip"},
                                        {"v" : "j", "d" : "j - Microfilm roll"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Positive/negative aspect",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Positive"},
                                        {"v" : "b", "d" : "b - Negative"},
                                        {"v" : "m", "d" : "m - Mixed polarity"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Dimensions",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - 8 mm."},
                                        {"v" : "d", "d" : "d - 16 mm."},
                                        {"v" : "f", "d" : "f - 35 mm."},
                                        {"v" : "g", "d" : "g - 70 mm."},
                                        {"v" : "h", "d" : "h - 105 mm."},
                                        {"v" : "l", "d" : "l - 3x5 in. or 8x13 cm."},
                                        {"v" : "m", "d" : "m - 4x6 in. or 11x15 cm."},
                                        {"v" : "o", "d" : "o - 6x9 in. or 16x23 cm."},
                                        {"v" : "p", "d" : "p - 3 1/4 x 7 3/8 in. or 9x19 cm."},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Reduction ratio range",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Low reduction ratio"},
                                        {"v" : "b", "d" : "b - Normal reduction"},
                                        {"v" : "c", "d" : "c - High reduction"},
                                        {"v" : "d", "d" : "d - Very high reduction"},
                                        {"v" : "e", "d" : "e - Ultra high reduction"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - Reduction rate varies"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06-08 Reduction ratio",
                                 "l" : 3,
                                 "d" : "   ",
                                 "v" : ""
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "b", "d" : "b - Black-and-white"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Emulsion on film",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Silver halide"},
                                        {"v" : "b", "d" : "b - Diazo"},
                                        {"v" : "c", "d" : "c - Vesicular"},
                                        {"v" : "m", "d" : "m - Mixed emulsion"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Generation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - First generation (master)"},
                                        {"v" : "b", "d" : "b - Printing master"},
                                        {"v" : "c", "d" : "c - Service copy"},
                                        {"v" : "m", "d" : "m - Mixed generation"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Base of film",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Safety base, undetermined"},
                                        {"v" : "c", "d" : "c - Safety base, acetate undetermined"},
                                        {"v" : "d", "d" : "d - Safety base, diacetate"},
                                        {"v" : "i", "d" : "i - Nitrate base"},
                                        {"v" : "m", "d" : "m - Mixed base (nitrate and safety)"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "p", "d" : "p - Safety base, polyester"},
                                        {"v" : "r", "d" : "r - Safety base, mixed"},
                                        {"v" : "t", "d" : "t - Safety base, triacetate"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }

                      ]
             }
            ]
  },
  {"tag" : "007k",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "k",
                                 "v" : "k - Nonprojected graphic (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Activity card"},
                                        {"v" : "c", "d" : "c - Collage"},
                                        {"v" : "d", "d" : "d - Drawing"},
                                        {"v" : "e", "d" : "e - Painting"},
                                        {"v" : "f", "d" : "f - Photomechanical print"},
                                        {"v" : "g", "d" : "g - Photonegative"},
                                        {"v" : "h", "d" : "h - Photoprint"},
                                        {"v" : "i", "d" : "i - Picture"},
                                        {"v" : "j", "d" : "j - Print"},
                                        {"v" : "k", "d" : "k - Poster"},
                                        {"v" : "l", "d" : "l - Technical drawing"},
                                        {"v" : "n", "d" : "n - Chart"},
                                        {"v" : "o", "d" : "o - Flash card"},
                                        {"v" : "p", "d" : "p - Postcard"},
                                        {"v" : "q", "d" : "q - Icon"},
                                        {"v" : "r", "d" : "r - Radiograph"},
                                        {"v" : "s", "d" : "s - Study print"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "v", "d" : "v - Photograph, type unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One color"},
                                        {"v" : "b", "d" : "b - Black-and-white"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "h", "d" : "h - Hand colored"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Primary support material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Canvas"},
                                        {"v" : "b", "d" : "b - Bristol board"},
                                        {"v" : "c", "d" : "c - Cardboard/illustration board"},
                                        {"v" : "d", "d" : "d - Glass"},
                                        {"v" : "e", "d" : "e - Synthetic"},
                                        {"v" : "f", "d" : "f - Skin"},
                                        {"v" : "g", "d" : "g - Textile"},
                                        {"v" : "h", "d" : "h - Metal"},
                                        {"v" : "i", "d" : "i - Plastic"},
                                        {"v" : "l", "d" : "l - Vinyl"},
                                        {"v" : "m", "d" : "m - Mixed collection"},
                                        {"v" : "n", "d" : "n - Vellum"},
                                        {"v" : "o", "d" : "o - Paper"},
                                        {"v" : "p", "d" : "p - Plaster"},
                                        {"v" : "q", "d" : "q - Hardboard"},
                                        {"v" : "r", "d" : "r - Porcelain"},
                                        {"v" : "s", "d" : "s - Stone"},
                                        {"v" : "t", "d" : "t - Wood"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - Leather"},
                                        {"v" : "w", "d" : "w - Parchment"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Secondary support material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No secondary support"},
                                        {"v" : "a", "d" : "a - Canvas"},
                                        {"v" : "b", "d" : "b - Bristol board"},
                                        {"v" : "c", "d" : "c - Cardboard/illustration board"},
                                        {"v" : "d", "d" : "d - Glass"},
                                        {"v" : "e", "d" : "e - Synthetic"},
                                        {"v" : "f", "d" : "f - Skin"},
                                        {"v" : "g", "d" : "g - Textile"},
                                        {"v" : "h", "d" : "h - Metal"},
                                        {"v" : "i", "d" : "i - Plastic"},
                                        {"v" : "l", "d" : "l - Vinyl"},
                                        {"v" : "m", "d" : "m - Mixed collection"},
                                        {"v" : "n", "d" : "n - Vellum"},
                                        {"v" : "o", "d" : "o - Paper"},
                                        {"v" : "p", "d" : "p - Plaster"},
                                        {"v" : "q", "d" : "q - Hardboard"},
                                        {"v" : "r", "d" : "r - Porcelain"},
                                        {"v" : "s", "d" : "s - Stone"},
                                        {"v" : "t", "d" : "t - Wood"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - Leather"},
                                        {"v" : "w", "d" : "w - Parchment"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007m",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "m",
                                 "v" : "m - Motion picture (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "c", "d" : "c - Film cartridge"},
                                        {"v" : "f", "d" : "f - Film cassette"},
                                        {"v" : "o", "d" : "o - Film roll"},
                                        {"v" : "r", "d" : "r - Film reel"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "b", "d" : "b - Black-and-white"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "h", "d" : "h - Hand colored"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Motion picture presentation format",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Standard sound aperture (reduced frame)"},
                                        {"v" : "b", "d" : "b - Nonanamorphic (wide-screen)"},
                                        {"v" : "c", "d" : "c - 3D"},
                                        {"v" : "d", "d" : "d - Anamorphic (wide-screen)"},
                                        {"v" : "e", "d" : "e - Other wide-screen format"},
                                        {"v" : "f", "d" : "f - Standard silent aperture (full frame)"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Sound on medium or separate",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Sound on medium"},
                                        {"v" : "b", "d" : "b - Sound separate from medium"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Medium for sound",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Optical sound track on motion picture film"},
                                        {"v" : "b", "d" : "b - Magnetic sound track on motion picture film"},
                                        {"v" : "c", "d" : "c - Magnetic audio tape in cartridge"},
                                        {"v" : "d", "d" : "d - Sound disc"},
                                        {"v" : "e", "d" : "e - Magnetic audio tape on reel"},
                                        {"v" : "f", "d" : "f - Magnetic audio tape in cassette"},
                                        {"v" : "g", "d" : "g - Optical and magnetic sound track on motion picture film"},
                                        {"v" : "h", "d" : "h - Videotape"},
                                        {"v" : "i", "d" : "i - Videodisc"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }

                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Dimensions",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Standard 8 mm."},
                                        {"v" : "b", "d" : "b - Super 8 mm./single 8 mm."},
                                        {"v" : "c", "d" : "c - 9.5 mm."},
                                        {"v" : "d", "d" : "d - 16 mm."},
                                        {"v" : "e", "d" : "e - 28 mm."},
                                        {"v" : "f", "d" : "f - 35 mm."},
                                        {"v" : "g", "d" : "g - 70 mm."},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Configuration of playback channels",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "k", "d" : "k - Mixed"},
                                        {"v" : "m", "d" : "m - Monaural"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "q", "d" : "q - Quadraphonic, multichannel, or surround"},
                                        {"v" : "s", "d" : "s - Stereophonic"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Production elements",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Workprint"},
                                        {"v" : "b", "d" : "b - Trims"},
                                        {"v" : "c", "d" : "c - Outtakes"},
                                        {"v" : "d", "d" : "d - Rushes"},
                                        {"v" : "e", "d" : "e - Mixing tracks"},
                                        {"v" : "f", "d" : "f - Title bands/inter-title rolls"},
                                        {"v" : "g", "d" : "g - Production rolls"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Positive/negative aspect",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Positive"},
                                        {"v" : "b", "d" : "b - Negative"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Generation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "d", "d" : "d - Duplicate"},
                                        {"v" : "e", "d" : "e - Master"},
                                        {"v" : "o", "d" : "o - Original"},
                                        {"v" : "r", "d" : "r - Reference print/viewing copy"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Base of film",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Safety base, undetermined"},
                                        {"v" : "c", "d" : "c - Safety base, acetate undetermined"},
                                        {"v" : "d", "d" : "d - Safety base, diacetate"},
                                        {"v" : "i", "d" : "i - Nitrate base"},
                                        {"v" : "m", "d" : "m - Mixed base (nitrate and safety)"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "p", "d" : "p - Safety base, polyester"},
                                        {"v" : "r", "d" : "r - Safety base, mixed"},
                                        {"v" : "t", "d" : "t - Safety base, triacetate"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 Refined categories of color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - 3 layer color"},
                                        {"v" : "b", "d" : "b - 2 color, single strip"},
                                        {"v" : "c", "d" : "c - Undetermined 2 color"},
                                        {"v" : "d", "d" : "d - Undetermined 3 color"},
                                        {"v" : "e", "d" : "e - 3 strip color"},
                                        {"v" : "f", "d" : "f - 2 strip color"},
                                        {"v" : "g", "d" : "g - Red strip"},
                                        {"v" : "h", "d" : "h - Blue or green strip"},
                                        {"v" : "i", "d" : "i - Cyan strip"},
                                        {"v" : "j", "d" : "j - Magenta strip"},
                                        {"v" : "k", "d" : "k - Yellow strip"},
                                        {"v" : "l", "d" : "l - S E N 2"},
                                        {"v" : "m", "d" : "m - S E N 3"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "p", "d" : "p - Sepia tone"},
                                        {"v" : "q", "d" : "q - Other tone"},
                                        {"v" : "r", "d" : "r - Tint"},
                                        {"v" : "s", "d" : "s - Tinted and toned"},
                                        {"v" : "t", "d" : "t - Stencil color"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - Hand colored"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f15",
                        "def" : {
                                 "s" : "14 Kind of color stock or print",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Imbibition dye transfer prints"},
                                        {"v" : "b", "d" : "b - Three-layer stock"},
                                        {"v" : "c", "d" : "c - Three layer stock, low fade"},
                                        {"v" : "d", "d" : "d - Duplitized stock"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f16",
                        "def" : {
                                 "s" : "15 Deterioration stage",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - None apparent"},
                                        {"v" : "b", "d" : "b - Nitrate: suspicious odor"},
                                        {"v" : "c", "d" : "c - Nitrate: pungent odor"},
                                        {"v" : "d", "d" : "d - Nitrate: brownish, discoloration, fading, dusty"},
                                        {"v" : "e", "d" : "e - Nitrate: sticky"},
                                        {"v" : "f", "d" : "f - Nitrate: frothy, bubbles, blisters"},
                                        {"v" : "g", "d" : "g - Nitrate: congealed"},
                                        {"v" : "h", "d" : "h - Nitrate: powder"},
                                        {"v" : "k", "d" : "k - Non-nitrate: detectable deterioration"},
                                        {"v" : "l", "d" : "l - Non-nitrate: advanced deterioration"},
                                        {"v" : "m", "d" : "m - Non-nitrate: disaster"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 Completeness",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "c", "d" : "c - Complete"},
                                        {"v" : "i", "d" : "i - Incomplete"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17-22 - Film inspection date",
                                 "l" : 6,
                                 "d" : "      ",
                                 "v" : ""
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007o",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "o",
                                 "v" : "o - Kit (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007q",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "q",
                                 "v" : "q - Notated music (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007r",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "r",
                                 "v" : "r - Remote-sensing image (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Altitude of sensor",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Surface"},
                                        {"v" : "b", "d" : "b - Airborne"},
                                        {"v" : "c", "d" : "c - Spaceborne"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Attitude of sensor",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Low oblique"},
                                        {"v" : "b", "d" : "b - High oblique"},
                                        {"v" : "c", "d" : "c - Vertical"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Cloud cover",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "0", "d" : "0 - 0-9%"},
                                        {"v" : "1", "d" : "1 - 10-19%"},
                                        {"v" : "2", "d" : "2 - 20-29%"},
                                        {"v" : "3", "d" : "3 - 30-39%"},
                                        {"v" : "4", "d" : "4 - 40-49%"},
                                        {"v" : "5", "d" : "5 - 50-59%"},
                                        {"v" : "6", "d" : "6 - 60-69%"},
                                        {"v" : "7", "d" : "7 - 70-79%"},
                                        {"v" : "8", "d" : "8 - 80-89%"},
                                        {"v" : "9", "d" : "9 - 90-100%"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Platform construction type",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Balloon"},
                                        {"v" : "b", "d" : "b - Aircraft--low altitude"},
                                        {"v" : "c", "d" : "c - Aircraft--medium altitude"},
                                        {"v" : "d", "d" : "d - Aircraft--high altitude"},
                                        {"v" : "e", "d" : "e - Manned spacecraft"},
                                        {"v" : "f", "d" : "f - Unmanned spacecraft"},
                                        {"v" : "g", "d" : "g - Land-based remote-sensing device"},
                                        {"v" : "h", "d" : "h - Water surface-based remote-sensing device"},
                                        {"v" : "i", "d" : "i - Submersible remote-sensing device"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Platform use category",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Meteorological"},
                                        {"v" : "b", "d" : "b - Surface observing"},
                                        {"v" : "c", "d" : "c - Space observing"},
                                        {"v" : "m", "d" : "m - Mixed uses"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Sensor type",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Active"},
                                        {"v" : "b", "d" : "b - Passive"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09-10 Data type",
                                 "l" : 2,
                                 "d" : "||",
                                 "v" : [
                                        {"v" : "aa", "d" : "aa - Visible light"},
                                        {"v" : "da", "d" : "da - Near infrared"},
                                        {"v" : "db", "d" : "db - Middle infrared"},
                                        {"v" : "dc", "d" : "dc - Far infrared"},
                                        {"v" : "dd", "d" : "dd - Thermal infrared"},
                                        {"v" : "de", "d" : "de - Shortwave infrared (SWIR)"},
                                        {"v" : "df", "d" : "df - Reflective infrared"},
                                        {"v" : "dv", "d" : "dv - Combinations"},
                                        {"v" : "dz", "d" : "dz - Other infrared data"},
                                        {"v" : "ga", "d" : "ga - Sidelooking airborne radar (SLAR)"},
                                        {"v" : "gb", "d" : "gb - Synthetic aperture radar (SAR)-Single frequency"},
                                        {"v" : "gc", "d" : "gc - SAR-multi-frequency (multichannel)"},
                                        {"v" : "gd", "d" : "gd - SAR-like polarization"},
                                        {"v" : "ge", "d" : "ge - SAR-cross polarization"},
                                        {"v" : "gf", "d" : "gf - Infometric SAR"},
                                        {"v" : "gg", "d" : "gg - polarmetric SAR"},
                                        {"v" : "gu", "d" : "gu - Passive microwave mapping"},
                                        {"v" : "gz", "d" : "gz - Other microwave data"},
                                        {"v" : "ja", "d" : "ja - Far ultraviolet"},
                                        {"v" : "jb", "d" : "jb - Middle ultraviolet"},
                                        {"v" : "jc", "d" : "jc - Near ultraviolet"},
                                        {"v" : "jv", "d" : "jv - Ultraviolet combinations"},
                                        {"v" : "jz", "d" : "jz - Other ultraviolet data"},
                                        {"v" : "ma", "d" : "ma - Multi-spectral, multidata"},
                                        {"v" : "mb", "d" : "mb - Multi-temporal"},
                                        {"v" : "mm", "d" : "mm - Combination of various data types"},
                                        {"v" : "nn", "d" : "nn - Not applicable"},
                                        {"v" : "pa", "d" : "pa - Sonar--water depth"},
                                        {"v" : "pb", "d" : "pb - Sonar--bottom topography images, sidescan"},
                                        {"v" : "pc", "d" : "pc - Sonar--bottom topography, near-surface"},
                                        {"v" : "pd", "d" : "pd - Sonar--bottom topography, near-bottom"},
                                        {"v" : "pe", "d" : "pe - Seismic surveys"},
                                        {"v" : "pz", "d" : "pz - Other acoustical data"},
                                        {"v" : "ra", "d" : "ra - Gravity anomalies (general)"},
                                        {"v" : "rb", "d" : "rb - Free-air"},
                                        {"v" : "rc", "d" : "rc - Bouger"},
                                        {"v" : "rd", "d" : "rd - Isostatic"},
                                        {"v" : "sa", "d" : "sa - Magnetic field"},
                                        {"v" : "ta", "d" : "ta - radiometric surveys"},
                                        {"v" : "uu", "d" : "uu - Unknown"},
                                        {"v" : "zz", "d" : "zz - Other"},
                                        {"v" : "||", "d" : "|| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007s",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "s",
                                 "v" : "s - Sound recording (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "d", "d" : "d - Sound disc"},
                                        {"v" : "e", "d" : "e - Cylinder"},
                                        {"v" : "g", "d" : "g - Sound cartridge"},
                                        {"v" : "i", "d" : "i - Sound-track film"},
                                        {"v" : "q", "d" : "q - Roll"},
                                        {"v" : "s", "d" : "s - Sound cassette"},
                                        {"v" : "t", "d" : "t - Sound-tape reel"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "w", "d" : "w - Wire recording"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Speed",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - 16 rpm (discs)"},
                                        {"v" : "b", "d" : "b - 33 1/3 rpm (discs)"},
                                        {"v" : "c", "d" : "c - 45 rpm (discs)"},
                                        {"v" : "d", "d" : "d - 78 rpm (discs)"},
                                        {"v" : "e", "d" : "e - 8 rpm (discs)"},
                                        {"v" : "f", "d" : "f - 1.4 m. per second (discs)"},
                                        {"v" : "h", "d" : "h - 120 rpm (cylinders)"},
                                        {"v" : "i", "d" : "i - 160 rpm (cylinders)"},
                                        {"v" : "k", "d" : "k - 15/16 ips (tapes)"},
                                        {"v" : "l", "d" : "l - 1 7/8 ips (tapes)"},
                                        {"v" : "m", "d" : "m - 3 3/4 ips (tapes)"},
                                        {"v" : "o", "d" : "o - 7 1/2 ips (tapes)"},
                                        {"v" : "p", "d" : "p - 15 ips (tapes)"},
                                        {"v" : "r", "d" : "r - 30 ips (tape)"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Configuration of playback channels",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "m", "d" : "m - Monaural"},
                                        {"v" : "q", "d" : "q - Quadraphonic"},
                                        {"v" : "s", "d" : "s - Stereophonic"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Groove width/groove pitch",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "m", "d" : "m - Microgroove/fine"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "s", "d" : "s - Coarse/standard"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Dimensions",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - 3 in. diameter"},
                                        {"v" : "b", "d" : "b - 5 in. diameter"},
                                        {"v" : "c", "d" : "c - 7 in. diameter"},
                                        {"v" : "d", "d" : "d - 10 in. diameter"},
                                        {"v" : "e", "d" : "e - 12 in. diameter"},
                                        {"v" : "f", "d" : "f - 16 in. diameter"},
                                        {"v" : "g", "d" : "g - 4 3/4 in. or 12 cm. diameter"},
                                        {"v" : "j", "d" : "j - 3 7/8 x 2 1/2 in."},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "o", "d" : "o - 5 1/4 x 3 7/8 in."},
                                        {"v" : "s", "d" : "s - 2 3/4 x 4 in."},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }

                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Tape width",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "l", "d" : "l - 1/8 in."},
                                        {"v" : "m", "d" : "m - 1/4 in."},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "o", "d" : "o - 1/2 in."},
                                        {"v" : "p", "d" : "p - 1 in."},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Tape Configuration",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Full (1) track"},
                                        {"v" : "b", "d" : "b - Half (2) track"},
                                        {"v" : "c", "d" : "c - Quarter (4) track"},
                                        {"v" : "d", "d" : "d - Eight track"},
                                        {"v" : "e", "d" : "e - Twelve track"},
                                        {"v" : "f", "d" : "f - Sixteen track"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Kind of disc, cylinder or tape",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Master tape"},
                                        {"v" : "b", "d" : "b - Tape duplication master"},
                                        {"v" : "d", "d" : "d - Disc master (negative)"},
                                        {"v" : "i", "d" : "i - Instantaneous (recorded on the spot)"},
                                        {"v" : "m", "d" : "m - Mass-produced"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "r", "d" : "r - Mother (positive)"},
                                        {"v" : "s", "d" : "s - Stamper (negative)"},
                                        {"v" : "t", "d" : "t - Test pressing"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 Kind of material",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Lacquer coating"},
                                        {"v" : "b", "d" : "b - Cellulose nitrate"},
                                        {"v" : "c", "d" : "c - Acetate tape with ferrous oxide"},
                                        {"v" : "g", "d" : "g - Glass with lacquer"},
                                        {"v" : "i", "d" : "i - Aluminum with lacquer"},
                                        {"v" : "l", "d" : "l - Metal"},
                                        {"v" : "m", "d" : "m - Plastic with metal"},
                                        {"v" : "p", "d" : "p - Plastic"},
                                        {"v" : "r", "d" : "r - Paper with lacquer or ferrous oxide"},
                                        {"v" : "s", "d" : "s - Shellac"},
                                        {"v" : "w", "d" : "w - Wax"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 Kind of cutting",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "h", "d" : "h - Hill-and-dale cutting"},
                                        {"v" : "l", "d" : "l - Lateral or combined cutting"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 Special playback characteristics",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - NAB standard"},
                                        {"v" : "b", "d" : "b - CCIR standard"},
                                        {"v" : "c", "d" : "c - Dolby-B encoded"},
                                        {"v" : "d", "d" : "d - dbx encoded"},
                                        {"v" : "e", "d" : "e - Digital recording"},
                                        {"v" : "f", "d" : "f - Dolby-A encoded"},
                                        {"v" : "g", "d" : "g - Dolby-C encoded"},
                                        {"v" : "h", "d" : "h - CX encoded"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 Capture and storage technique",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Acoustical capture, direct storage"},
                                        {"v" : "b", "d" : "b - Direct storage, not acoustical"},
                                        {"v" : "d", "d" : "d - Digital storage"},
                                        {"v" : "e", "d" : "e - Analog electrical storage"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007t",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "t",
                                 "v" : "t - Text (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Regular print"},
                                        {"v" : "b", "d" : "b - Large print"},
                                        {"v" : "c", "d" : "c - Braille"},
                                        {"v" : "d", "d" : "d - Loose-leaf"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007v",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "v",
                                 "v" : "v - Videorecording (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "c", "d" : "c - Videocartridge"},
                                        {"v" : "d", "d" : "d - Videodisc"},
                                        {"v" : "f", "d" : "f - Videocassette"},
                                        {"v" : "r", "d" : "r - Videoreel"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f03",
                        "def" : {
                                 "s" : "02 Undefined",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f04",
                        "def" : {
                                 "s" : "03 Color",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - One color"},
                                        {"v" : "b", "d" : "b - Black-and-white"},
                                        {"v" : "c", "d" : "c - Multicolored"},
                                        {"v" : "m", "d" : "m - Mixed"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f05",
                        "def" : {
                                 "s" : "04 Videorecording format",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Beta (1/2 in., videocassette)"},
                                        {"v" : "b", "d" : "b - VHS (1/2 in., videocassette)"},
                                        {"v" : "c", "d" : "c - U-matic (3/4 in., videocasstte)"},
                                        {"v" : "d", "d" : "d - EIAJ (1/2 in., reel)"},
                                        {"v" : "e", "d" : "e - Type C (1 in., reel)"},
                                        {"v" : "f", "d" : "f - Quadruplex (1 in. or 2 in., reel)"},
                                        {"v" : "g", "d" : "g - Laserdisc"},
                                        {"v" : "h", "d" : "h - CED (Capacitance Electronic Disc) videodisc"},
                                        {"v" : "i", "d" : "i - Betacam (1/2 in., videocassette)"},
                                        {"v" : "j", "d" : "j - Betacam SP (1/2 in., videocassette)"},
                                        {"v" : "k", "d" : "k - Super-VHS (1/2 in., videocassette)"},
                                        {"v" : "m", "d" : "m - M-II (1/2 in., videocassette)"},
                                        {"v" : "o", "d" : "o - D-2 (3/4 in., videocassette)"},
                                        {"v" : "p", "d" : "p - 8 mm."},
                                        {"v" : "q", "d" : "q - Hi-8 mm."},
                                        {"v" : "s", "d" : "s - Blu-ray disc"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "v", "d" : "v - DVD"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Sound on medium or separate",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Sound on medium"},
                                        {"v" : "b", "d" : "b - Sound separate from medium"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Medium for sound",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No sound (silent)"},
                                        {"v" : "a", "d" : "a - Optical sound track on motion picture film"},
                                        {"v" : "b", "d" : "b - Magnetic sound track on motion picture film"},
                                        {"v" : "c", "d" : "c - Magnetic audio tape in cartridge"},
                                        {"v" : "d", "d" : "d - Sound disc"},
                                        {"v" : "e", "d" : "e - Magnetic audio tape on reel"},
                                        {"v" : "f", "d" : "f - Magnetic audio tape in cassette"},
                                        {"v" : "g", "d" : "g - Optical and magnetic sound track on motion picture film"},
                                        {"v" : "h", "d" : "h - Videotape"},
                                        {"v" : "i", "d" : "i - Videodisc"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }

                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 Dimensions",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - 8 mm."},
                                        {"v" : "m", "d" : "m - 1/4 in."},
                                        {"v" : "o", "d" : "o - 1/2 in."},
                                        {"v" : "p", "d" : "p - 1 in."},
                                        {"v" : "q", "d" : "q - 2 in."},
                                        {"v" : "r", "d" : "r - 3/4 in."},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 Configuration of playback channels",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "k", "d" : "k - Mixed"},
                                        {"v" : "m", "d" : "m - Monaural"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "q", "d" : "q - Quadraphonic, multichannel, or surround"},
                                        {"v" : "s", "d" : "s - Stereophonic"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "007z",
   "toms" : [
             {
              "tom" : "common",
              "list" :[
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "00 Category of material ",
                                 "l" : 1,
                                 "d" : "z",
                                 "v" : "z - Unspecified (auto-filled)"
                                }
                       },
                       {
                        "f" : "f02",
                        "def" : {
                                 "s" : "01 Specific material designation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "m", "d" : "m - Multiple physical forms"},
                                        {"v" : "u", "d" : "u - Unspecified"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       }
                      ]
             }
            ]
  }
  
 ],
 "authdefs" : [
  {"tag" : "leader",
   "toms" : [
             {
              "tom" : "common",
              "list": [
                       {
                        "f": "f01",
                        "def" : {
                                 "s" : "0-4 Record size",
                                 "l" : 5,
                                 "d" : "     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f06",
                        "def" : {
                                 "s" : "05 Record status",
                                 "l" : 1,
                                 "d" : "n",
                                 "v" : [
                                        {"v" : "a", "d" : "a- Increase in encoding level"},
                                        {"v" : "c", "d" : "c- Corrected or revised"},
                                        {"v" : "d", "d" : "d- Deleted"},
                                        {"v" : "n", "d" : "n- New"},
                                        {"v" : "o", "d" : "o- Obsolete"},
                                        {"v" : "s", "d" : "s- Deleted; heading split into two or more headings"},
                                        {"v" : "x", "d" : "x- Deleted; heading replaced by another heading"}
                                       ]
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 Type of record",
                                 "l" : 1,
                                 "d" : "z",
                                 "v" : "z - Authority data (auto-filled)"
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07-08 Undefined",
                                 "l" : 2,
                                 "d" : "  ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 Character coding scheme",
                                 "l" : 1,
                                 "d" : "a",
                                 "v" : "a- UCS/Unicode (auto-filled)"
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10-16 indicator/subfields/size",
                                 "l" : 7,
                                 "d" : "22     ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 Encoding level",
                                 "l" : 1,
                                 "d" : "n",
                                 "v" : [
                                        {"v" : "n", "d" : "n- Complete authority record"},
                                        {"v" : "o", "d" : "o- Incomplete authority record"}
                                       ]
                                }
                       },
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18-19 Undefined character positions",
                                 "l" : 2,
                                 "d" : "  ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f21",
                        "def" : {
                                 "s" : "20-23 entry map and lengths",
                                 "l" : 4,
                                 "d" : "4500",
                                 "v" : "(auto-filled)"
                                }
                       }
                      ]
             }
            ]
  },
  {"tag" : "008",
   "toms" : [
             {
              "tom" : "common",
              "list": [
                       {
                        "f" : "f01",
                        "def" : {
                                 "s" : "0-5 Date entered on file",
                                 "l" : 6,
                                 "d" : "%d",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f07",
                        "def" : {
                                 "s" : "06 - Direct or indirect geographic subdivision",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - Not subdivided geographically"},
                                        {"v" : "d", "d" : "d - Subdivided geographically-direct"},
                                        {"v" : "i", "d" : "i - Subdivided geographically-indirect"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f08",
                        "def" : {
                                 "s" : "07 - Romanization scheme",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - International standard"},
                                        {"v" : "b", "d" : "b - National standard"},
                                        {"v" : "c", "d" : "c - National library association standard"},
                                        {"v" : "d", "d" : "d - National library or bibliographic agency standard"},
                                        {"v" : "e", "d" : "e - Local standard"},
                                        {"v" : "f", "d" : "f - Standard of unknown origin"},
                                        {"v" : "g", "d" : "g - Conventional romanization or conventional form of name in language of cataloging agency"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f09",
                        "def" : {
                                 "s" : "08 - Language of catalog",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - No information provided"},
                                        {"v" : "b", "d" : "b - English and French"},
                                        {"v" : "e", "d" : "e - English only"},
                                        {"v" : "f", "d" : "f - French only"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f10",
                        "def" : {
                                 "s" : "09 - Kind of record",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Established heading"},
                                        {"v" : "b", "d" : "b - Untraced reference"},
                                        {"v" : "c", "d" : "c - Traced reference"},
                                        {"v" : "d", "d" : "d - Subdivision"},
                                        {"v" : "e", "d" : "e - Node label"},
                                        {"v" : "f", "d" : "f - Established heading and subdivision"},
                                        {"v" : "g", "d" : "g - Reference and subdivision"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f11",
                        "def" : {
                                 "s" : "10 - Descriptive cataloging rules",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Earlier rules"},
                                        {"v" : "b", "d" : "b - AACR 1"},
                                        {"v" : "c", "d" : "c - AACR 2"},
                                        {"v" : "d", "d" : "d - AACR 2 compatible heading"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f12",
                        "def" : {
                                 "s" : "11 - Subject heading system/thesaurus",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Library of Congress Subject Headings"},
                                        {"v" : "b", "d" : "b - LC subject headings for children's literature"},
                                        {"v" : "c", "d" : "c - Medical Subject Headings"},
                                        {"v" : "d", "d" : "d - National Agricultural Library subject authority file"},
                                        {"v" : "k", "d" : "k - Canadian Subject Headings"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "r", "d" : "r - Art and Architecture Thesaurus"},
                                        {"v" : "s", "d" : "s - Sears List of Subject Heading"},
                                        {"v" : "v", "d" : "v - Répertoire de vedettes-matière"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f13",
                        "def" : {
                                 "s" : "12 - Type of series",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Monographic series"},
                                        {"v" : "b", "d" : "b - Multipart item"},
                                        {"v" : "c", "d" : "c - Series-like phrase"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f14",
                        "def" : {
                                 "s" : "13 - Numbered or unnumbered series",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Numbered"},
                                        {"v" : "b", "d" : "b - Unnumbered"},
                                        {"v" : "c", "d" : "c - Numbering varies"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f15",
                        "def" : {
                                 "s" : "14 - Heading use-main or added entry",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Appropriate"},
                                        {"v" : "b", "d" : "b - Not appropriate"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f16",
                        "def" : {
                                 "s" : "15 - Heading use-subject added entry",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Appropriate"},
                                        {"v" : "b", "d" : "b - Not appropriate"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f17",
                        "def" : {
                                 "s" : "16 - Heading use-series added entry",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Appropriate"},
                                        {"v" : "b", "d" : "b - Not appropriate"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f18",
                        "def" : {
                                 "s" : "17 - Type of subject subdivision",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Topical"},
                                        {"v" : "b", "d" : "b - Form"},
                                        {"v" : "c", "d" : "c - Chronological"},
                                        {"v" : "d", "d" : "d - Geographic"},
                                        {"v" : "e", "d" : "e - Language"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f19",
                        "def" : {
                                 "s" : "18-27 - Undefined character positions",
                                 "l" : 10,
                                 "d" : "          ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f29",
                        "def" : {
                                 "s" : "28 - Type of government agency",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - Not a government agency"},
                                        {"v" : "a", "d" : "a - Autonomous or semi-autonomous component"},
                                        {"v" : "c", "d" : "c - Multilocal"},
                                        {"v" : "f", "d" : "f - Federal/national"},
                                        {"v" : "i", "d" : "i - International intergovernmental"},
                                        {"v" : "l", "d" : "l - Local"},
                                        {"v" : "m", "d" : "m - Multistate"},
                                        {"v" : "o", "d" : "o - Government agency-type undetermined"},
                                        {"v" : "s", "d" : "s - State, provincial, territorial, dependent, etc."},
                                        {"v" : "u", "d" : "u - Unknown if heading is government agency"},
                                        {"v" : "z", "d" : "z - Other"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f30",
                        "def" : {
                                 "s" : "29 - Reference evaluation",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Tracings are consistent with the heading"},
                                        {"v" : "b", "d" : "b - Tracings are not necessarily consistent with the heading"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f31",
                        "def" : {
                                 "s" : "30 - Undefined character position",
                                 "l" : 1,
                                 "d" : " ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f32",
                        "def" : {
                                 "s" : "31 - Record update in process",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Record can be used"},
                                        {"v" : "b", "d" : "b - Record is being updated"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f33",
                        "def" : {
                                 "s" : "32 - Undifferentiated personal name",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Differentiated personal name"},
                                        {"v" : "b", "d" : "b - Undifferentiated personal name"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f34",
                        "def" : {
                                 "s" : "33 - Level of establishment",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : "a", "d" : "a - Fully established"},
                                        {"v" : "b", "d" : "b - Memorandum"},
                                        {"v" : "c", "d" : "c - Provisional"},
                                        {"v" : "d", "d" : "d - Preliminary"},
                                        {"v" : "n", "d" : "n - Not applicable"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f35",
                        "def" : {
                                 "s" : "34-37 - Undefined character positions",
                                 "l" : 4,
                                 "d" : "    ",
                                 "v" : "(auto-filled)"
                                }
                       },
                       {
                        "f" : "f39",
                        "def" : {
                                 "s" : "38 - Modified record",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - Not modified"},
                                        {"v" : "s", "d" : "s - Shortened"},
                                        {"v" : "x", "d" : "x - Missing characters"},
                                        {"v" : "|", "d" : "| - No attempt to code"}
                                       ]
                                }
                       },
                       {
                        "f" : "f40",
                        "def" : {
                                 "s" : "39 - Cataloging source",
                                 "l" : 1,
                                 "d" : "|",
                                 "v" : [
                                        {"v" : " ", "d" : "# - National bibliographic agency"},
                                        {"v" : "c", "d" : "c - Cooperative cataloging program"},
                                        {"v" : "d", "d" : "d - Other"},
                                        {"v" : "u", "d" : "u - Unknown"},
                                        {"v" : "|", "d" : "| - No attempt to code "}
                                       ]
                                }
                       }
                      ]
             }
            ]
  }
 ]
}
