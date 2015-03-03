function traverse(selector){
  
  function parseSingleSelector(parent,atr){
    var selectorType = atr.charAt(0);    
    var selectorName = atr.slice(1, atr.length);
    if(selectorType == "."){      
      return parent.getElementsByClassName(selectorName);
    }else if(selectorType == "#"){      
      return parent.getElementById(selectorName);
    }else{
      return parent.getElementsByTagName(atr);
    };      
  };
  function parseSelector(selector){
    if(selector.indexOf(" ") == -1){
      return parseSingleSelector(document, selector);
    }else {
      var multiAtr = selector.split(" ")
       return parseMultipleSelector(document, multiAtr);
    };
  };
  function parseMultipleSelector(parent, multiAtr){
      var arrayCollection = parseSingleSelector(parent, multiAtr[0]);
      console.log(arrayCollection);
      if(multiAtr.length>1){
        var result = [];
        for(var i=0; i<arrayCollection.length; i++){
          var temp = multiAtr.slice(1,multiAtr.length);
          result += parseMultipleSelector(arrayCollection[i],temp);
        };
        return result;
      }else{
        return arrayCollection;
      };
  };
  return parseSelector(selector);
  };