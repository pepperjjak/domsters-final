// The purpose of all this code is to show/hide content

// we call this function from our other function
// and this function takes one argument which is the sectionId
function showSection( id ) {
  // grab all the div elemements in the document
  var divs = document.getElementsByTagName( 'div' );
  // loop through them
  for ( var i = 0; i < divs.length; i++ ) {
    // if they have a class name with 'section'
    // go to line #
    // if no 'section' class name, go to next iteration
    if ( divs[i].className.indexOf( 'section' ) === -1 )
      continue;

    // we have a section class name so grab it's ID
    // and if that ID is equal to the ID passed to this
    // function then the condition passed and do what's
    // inside the curly braces
    if ( divs[i].getAttribute( 'id' ) != id ) {
      // we DO NOT have an ID match, make display none
      // so element and it's contents are hidden
      divs[i].style.display = 'none';
    } else {
      // we have an ID match so show the element
      // and it's content
      divs[i].style.display = 'block';
    }
  }
}

function prepareInternalNav( ) {
  // first we check if the browser is smart
  // does it understand getElementsByTagName?
  //  if not, leave function
  if ( !document.getElementsByTagName )
    return false;

  // does it understand the getElementById() method?
  // if not leave function
  if ( !document.getElementById )
    return false;

  // does the document have and ID of 'internalNav'
  // if not, leave the function
  if (!document.getElementById( 'internalNav' ))
    return false;

  // store the element with an ID of internalNav inside the
  //   `nav` variable
  var nav = document.getElementById( 'internalNav' );
  // inside that `nav` variable, store all the anchor tags
  //  inside an array named `links`
  var links = nav.getElementsByTagName( 'a' );
  // loop through all the links
  for ( var i = 0; i < links.length; i++ ) {
    // use the link href attribute and grab everything after
    //  the # sign
    var sectionId = links[i].getAttribute( 'href' ).split( '#' )[ 1 ];
    // console.log(sectionId);
    // the above console.log() will output 'jay' and 'domsters'
    // the reason is because of this fragment of html
    // <ul id="internalNav">
    //   <li><a href="#jay">Jay Skript</a></li>
    //   <li><a href="#domsters">The Domsters</a></li>
    // </ul>
    // the JavaScript split() method will grab everything after
    // the # starting with the [1] first character and return
    // the rest. So we loop and get 'jay' and 'domsters'
    // check this next line out
    // we then use those values (we are still in the loop)
    // and we are looking for 'jay' and 'domsters'
    // if we DO NOT find them, we continue onto the next
    // iteration of the loop
    // but if we DO find them, we go to the next line of code
    // that follows this if statement (line #58)
    if (!document.getElementById( sectionId ))
      continue;

    // so we have jay and domsters and all we do with this next
    // line is use javascript to change the css of those elements
    // and we set their initial values to display: none
    // which means they will initially be hidden when the page
    // loads
    document.getElementById( sectionId ).style.display = 'none';
    // we run into a scope issue so we need to store the value
    // of `sectionId` inside a property of the `links` array
    // we use the i iterator of our loop and store inside it
    // a property of destination
    links[i].destination = sectionId;
    // we then can use the onclick method to store an anonomous
    // function and call our other function and passing it
    // our sectionId value that is now stored inside links array
    links[i].onclick = function ( ) {
      // and we then can use the `this` since this will be the element
      // that is clicked
      showSection( this.destination );
      // this stops the link from going to another page
      // we essentionally are turning off it's default behavior
      return false;
    };
  }
}

addLoadEvent( prepareInternalNav );