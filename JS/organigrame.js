
var jsTreeJson=[
       { "id" : "jsmith", "parent" : "#", "text" : "John Smith" },
       { "id" : "mgiroux", "parent" : "#", "text" : "Monique Giroux" },
       { "id" : "gtremblay", "parent" : "#", "text" : "Gérard Tremblay" },
       { "id" : "alanglois", "parent" : "#", "text" : "Annie Langlois" },
       { "id" : "fgagne", "parent" : "#", "text" : "Felix Gagné" },
       { "id" : "ajson6", "parent" : "mgiroux", "text" : "Child 1" },
       { "id" : "ajson7", "parent" : "mgiroux", "text" : "Child 2" },
       { "id" : "ajson8", "parent" : "mgiroux", "text" : "Child 1" },
       { "id" : "ajson9", "parent" : "gtremblay", "text" : "Child 2" },
       { "id" : "ajson10", "parent" : "alanglois", "text" : "Child 1" },
       { "id" : "ajson11", "parent" : "alanglois", "text" : "Child 2" },
       { "id" : "ajson12", "parent" : "alanglois", "text" : "Child 1"},
       { "id" : "ajson13", "parent" : "jsmith", "text" : "Child 2" },
       { "id" : "ajson14", "parent" : "jsmith", "text" : "Child 1" },
       { "id" : "ajson15", "parent" : "jsmith", "text" : "Child 2" },
       { "id" : "ajson16", "parent" : "jsmith", "text" : "Child 1" },
       { "id" : "ajson17", "parent" : "gtremblay", "text" : "Child 2" },


    ];


$(document).ready(function() {
   $('#tree').jstree({ "core" :{   'data' : jsTreeJson } });
} );

