 console.log(1 + 2);
function moveElement( elementID, final_x, final_y, interval ) {
  if ( !document.getElementById )
    return false;
  if (!document.getElementById( elementID ))
    return false;
  var elem = document.getElementById( elementID );
  var dist;
  if ( elem.movement ) {
    clearTimeout( elem.movement );
  }
  if ( !elem.style.left ) {
    elem.style.left = '0px';
  }
  if ( !elem.style.top ) {
    elem.style.top = '0px';
  }
  var xpos = parseInt( elem.style.left );
  var ypos = parseInt( elem.style.top );
  if ( xpos == final_x && ypos == final_y ) {
    return true;
  }
  if ( xpos < final_x ) {
    dist = Math.ceil( ( final_x - xpos ) / 10 );
    xpos = xpos + dist;
  }
  if ( xpos > final_x ) {
    dist = Math.ceil( ( xpos - final_x ) / 10 );
    xpos = xpos - dist;
  }
  if ( ypos < final_y ) {
    dist = Math.ceil( ( final_y - ypos ) / 10 );
    ypos = ypos + dist;
  }
  if ( ypos > final_y ) {
    dist = Math.ceil( ( ypos - final_y ) / 10 );
    ypos = ypos - dist;
  }
  elem.style.left = xpos + 'px';
  elem.style.top = ypos + 'px';
  var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
  elem.movement = setTimeout( repeat, interval );
}

function prepareSlideshow( ) {
  if ( !document.getElementsByTagName )
    return false;
  if ( !document.getElementById )
    return false;
  if (!document.getElementById( 'aside' ))
    return false;
  var aside = document.getElementById( 'aside' );
  var slideshow = document.createElement( 'div' );
  slideshow.setAttribute( 'id', 'slideshow' );
  var frame = document.createElement( 'img' );

  // console.log( wsd_home.template_url );
  frame.setAttribute( 'src', wsd_home.template_url + '/images/frame.gif' );
  frame.setAttribute( 'alt', '' );
  frame.setAttribute( 'id', 'frame' );
  slideshow.appendChild( frame );
  var preview = document.createElement( 'img' );
  preview.setAttribute( 'src', wsd_home.template_url + '/images/slideshow.gif' );
  preview.setAttribute( 'alt', 'a glimpse of what awaits you' );
  preview.setAttribute( 'id', 'preview' );
  slideshow.appendChild( preview );
  // insertAfter( slideshow, aside );
  aside.appendChild( slideshow );
  var links = document.getElementsByTagName( 'a' );
  for ( var i = 0; i < links.length; i++ ) {
    links[i].onmouseover = function ( ) {
      var destination = this.getAttribute( 'href' );
      if ( destination.indexOf( 'blog' ) != -1 ) {
        moveElement( 'preview', 0, 0, 5 );
      }
      if ( destination.indexOf( 'about' ) != -1 ) {
        moveElement( 'preview', -150, 0, 5 );
      }
      if ( destination.indexOf( 'photos' ) != -1 ) {
        moveElement( 'preview', -300, 0, 5 );
      }
      if ( destination.indexOf( 'live' ) != -1 ) {
        moveElement( 'preview', -450, 0, 5 );
      }
      if ( destination.indexOf( 'contact' ) != -1 ) {
        moveElement( 'preview', -600, 0, 5 );
      }
    };
  }
}

addLoadEvent( prepareSlideshow );
