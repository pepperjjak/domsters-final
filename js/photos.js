function showPic(whichpic) {
  if (!document.getElementById('placeholder')) return true;
  var source = whichpic.getAttribute('href');
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute('src',source);
  if (!document.getElementById('description')) return false;
  if (whichpic.getAttribute('title')) {
    var text = whichpic.getAttribute('title');
  } else {
    var text = '';
  }
  var description = document.getElementById('description');
  if (description.firstChild.nodeType === 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

// add an image to the page when it loads
// this image is the placeholder image for the gallery
function preparePlaceholder() {
  // check the brains of the browser
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  // is there an id of image-gallery?
  if (!document.getElementById('image-gallery')) return false;
  var placeholder = document.createElement('img');
  placeholder.setAttribute('id','placeholder');
  placeholder.setAttribute('src', wsd_photos.template_url + '/images/placeholder.gif');
  placeholder.setAttribute('alt','my image gallery');
  var description = document.createElement('p');
  description.setAttribute('id','description');
  var desctext = document.createTextNode('Choose an image');
  description.appendChild(desctext);
  var gallery = document.getElementById('image-gallery');
  insertAfter(description,gallery);
  insertAfter(placeholder,description);
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('image-gallery')) return false;
  var gallery = document.getElementById('image-gallery');
  var links = gallery.getElementsByTagName('a');
  for ( var i=0; i < links.length; i++) {
    links[i].onclick = function() {
      return showPic(this);
    }
  }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
