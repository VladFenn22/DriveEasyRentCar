function updateTextInput(val) {
    let dollarUSLocale = Intl.NumberFormat('en-US');
    
    if(parseInt(val) < 3000000) {
        document.getElementById('textInput').value= '₡' + dollarUSLocale.format(val); 
    } else {
        document.getElementById('textInput').value = '₡3,000,000+'
    }
  }