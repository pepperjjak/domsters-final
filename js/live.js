// this function will stripe our tables using some css and math
function stripeTables() {
  // check browser smartness
  if (!document.getElementsByTagName) return false;
  // grab all tables
  var tables = document.getElementsByTagName('table');
  // loop through tables
  for (var i=0; i<tables.length; i++) {
    // set 'odd' variable initially to false
    var odd = false;
    // grab all TR elements and store in `rows` variable
    var rows = tables[i].getElementsByTagName('tr');
    // nested loop
    for (var j=0; j<rows.length; j++) {
      // is odd set to true?
      if (odd === true) {
        // yes so add a class named 'odd' to that TR
        addClass(rows[j],'odd');
        // set the odd variable equal to false
        odd = false;
      } else {
        // set odd to true
        odd = true;
        // when all is said and done this will happen
        // <tr class="odd"></tr>
        // <tr class></tr>
        // <tr class="odd"></tr>
        // <tr class></tr>
      }
    }
  }
}

// add simple highlight effect on rollover
function highlightRows() {
  // check browser smartness
  if(!document.getElementsByTagName) return false;
  // grab all TR elements
  var rows = document.getElementsByTagName('tr');
  // loop through TR elements
  for (var i=0; i<rows.length; i++) {
    // store the old class name
    rows[i].oldClassName = rows[i].className;
    // on mouseover of the row
    rows[i].onmouseover = function() {
      // add the highlight class
      addClass(this,'highlight');
    }
    // on mouseout, restore the old class name
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
}

function displayAbbreviations() {
  // using OR || to check smartness of three things used in this
  // function, leave function if any of the checks are true
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  // grab and store all 'abbr' tags
  var abbreviations = document.getElementsByTagName('abbr');
  // if any abbr's are emtpy leave function
  if (abbreviations.length < 1) return false;
  // create an empty array
  var defs = [];
  // loop through abbreviations
  for (var i=0; i<abbreviations.length; i++) {
    // store the current abbreviation
    var current_abbr = abbreviations[i];
    // if current abbreviation is empty, go to next iteration
    if (current_abbr.childNodes.length < 1) continue;
    // if not empty, grab title attribute of the abbreviation
    var definition = current_abbr.getAttribute('title');
    // grab the last value (should be the text inside the tag)
    // store the text inside the key variable
    var key = current_abbr.lastChild.nodeValue;
    // create an associative array with the key and associating
    // it with the long title collected earlier inside definition
    defs[key] = definition;
  }
  // grab all the DL elements
  var dlist = document.createElement('dl');
  // loop through the object
  for (key in defs) {
    // store teh object inside definition
    var definition = defs[key];
    // grab the dt element
    var dtitle = document.createElement('dt');
    // create a text node based on the key
    var dtitle_text = document.createTextNode(key);
    // append the title text to the DT
    dtitle.appendChild(dtitle_text);
    // create a DD element
    var ddesc = document.createElement('dd');
    // create a text node
    var ddesc_text = document.createTextNode(definition);
    // append the description text
    ddesc.appendChild(ddesc_text);
    // append the title
    dlist.appendChild(dtitle);
    // append the desc
    dlist.appendChild(ddesc);
  }
  // leave if the dlist has not children
  if (dlist.childNodes.length < 1) return false;
  // create an h3
  var header = document.createElement('h3');
  // store the word Abbreviations
  var header_text = document.createTextNode('Abbreviations');
  // append that word inside the h3
  header.appendChild(header_text);
  // grab the container by the 'content' ID
  var container = document.getElementById('basic-sidebar');
  // add the header to the container
  container.appendChild(header);
  // add the def list to the container
  container.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);