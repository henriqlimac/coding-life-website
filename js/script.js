function navOpen() {
    if ( document.getElementById("navbar").classList.contains('closed') ) {
        document.getElementById("navbar").classList.remove('closed');
    } else {
        document.getElementById("navbar").classList.add('closed');
    }
  }