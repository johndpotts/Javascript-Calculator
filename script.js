$(document).ready(function() {
  var display=document.getElementById('display'),
oneButton = document.getElementById('one'),
twoButton= document.getElementById('two'),
threeButton= document.getElementById('three'),
fourButton = document.getElementById('four'),
fiveButton= document.getElementById('five'),
sixButton= document.getElementById('six'),
sevenButton= document.getElementById('seven'),
eightButton= document.getElementById('eight'),
nineButton = document.getElementById('nine'),
zeroButton= document.getElementById('zero'),
plusButton= document.getElementById('plus'),
minusButton= document.getElementById('minus'),
dividedButton= document.getElementById('divided'),
equalsButton = document.getElementById('equals'),
timesButton= document.getElementById('times'),
clearButton= document.getElementById('clear'),
clearEntryButton= document.getElementById('clearEntry'),
decimalButton= document.getElementById('decimal'),
deleteButton = document.getElementById('delete'),
percentButton = document.getElementById('percent'),
squareButton = document.getElementById('square'),
sqrtButton = document.getElementById('sqrt'),
posNegButton = document.getElementById('pos_neg'),
reciprocalButton = document.getElementById('reciprocal'),
value="",plusValue=0, minusValue=0,dividedValue=0,timesValue=0;



var plusFunction = function(){
  if (plusValue!=0){
      plusValue= Number(value)+plusValue;
      value="";
      updateDisplay();
  }
  else if(minusValue!=0){
    plusValue=minusValue-Number(value);
      value= "";
      minusValue=0;
        updateDisplay();
    }
    else if(dividedValue!=0){
      plusValue= dividedValue/Number(value);
value="";
dividedValue=0;
          updateDisplay();
    }
      else if(timesValue!=0){
        plusValue= timesValue*Number(value);
value="";
timesValue=0;
            updateDisplay();
         }
         else
         {plusValue=Number(value); value=""; updateDisplay();}
       }


var minusFunction = function(){
  if (plusValue!=0){
      minusValue= Number(value)+plusValue;
      value="";
        plusValue=0;
      updateDisplay();
  }
  else if(minusValue!=0){
    minusValue=minusValue-Number(value);
      value= "";
        updateDisplay();
    }
    else if(dividedValue!=0){
      minusValue= dividedValue/Number(value);
value="";
dividedValue=0;
          updateDisplay();
    }
      else if(timesValue!=0){
        minusValue= timesValue*Number(value);
value="";
timesValue=0;
            updateDisplay();
         }
         else
         {minusValue=Number(value); value=""; updateDisplay();}
       }

var dividedFunction =function(){
         if (plusValue!=0){
             dividedValue= Number(value)+plusValue;
             value="";
               plusValue=0;
             updateDisplay();
         }
         else if(minusValue!=0){
           dividedValue=minusValue-Number(value);
             value= "";
             minusValue=0;
               updateDisplay();
           }
           else if(dividedValue!=0){
             dividedValue= dividedValue/Number(value);
       value="";
                 updateDisplay();
           }
             else if(timesValue!=0){
               dividedValue= timesValue*Number(value);
       value="";
       timesValue=0;
                   updateDisplay();
                }
                else
                {dividedValue=Number(value); value=""; updateDisplay();}
              }

var timesFunction = function(){

  if (plusValue!=0){
      timesValue= Number(value)+plusValue;
      plusValue=0;
      value="";
      updateDisplay();
  }
  else if(minusValue!=0){
    timesValue=minusValue-Number(value);
      value= "";
      minusValue=0;
        updateDisplay();
    }
    else if(dividedValue!=0){
      timesValue= dividedValue/Number(value);
value="";
dividedValue=0;
          updateDisplay();
    }
      else if(timesValue!=0){
        timesValue= timesValue*Number(value);
value="";
            updateDisplay();
         }
         else
         {timesValue=Number(value); value=""; updateDisplay();}
       }
var equalsFunction = function(){
              if (plusValue!=0){
                  value= (Number(value)+plusValue).toString();
                  updateDisplay();
                plusValue=0;
              }
              else if(minusValue!=0){
                value= (minusValue-Number(value)).toString();
                    updateDisplay();
                minusValue=0;  }
                else if(dividedValue!=0){
                  value= (dividedValue/Number(value)).toString();
                      updateDisplay();
                dividedValue=0;  }
                  else if(timesValue!=0){
                    value= (timesValue*Number(value)).toString();
                        updateDisplay();
                    timesValue=0;  }
            }
var posNegFunction= function(){if (value.charAt(0)=="-"){
  value=value.slice(1,value.length)
}
else{value="-"+value}; updateDisplay();}

var clearFunction = function(){
  value=""; plusValue=0; minusValue=0;dividedValue=0;timesValue=0;updateDisplay();
}
var clearEntryFunction= function(){
  value=""; updateDisplay();
};

var delFunction= function delFunction(){ value= value.substring(0,value.length-1); updateDisplay();};

var squareFunction = function(){value = Math.pow(Number(value),2).toString(); updateDisplay();};

var sqrtFunction = function(){value=Math.sqrt(Number(value)).toString(); updateDisplay();};

var reciprocalFunction = function(){value = (1/Number(value)).toString(); updateDisplay();};

var percentFunction = function(){value = (Number(value)/100).toString(); updateDisplay();};

posNegButton.onclick=function(){
  window.navigator.vibrate(150); posNegFunction();};
percentButton.onclick=function(){
  window.navigator.vibrate(150); percentFunction();};
squareButton.onclick=function(){
  window.navigator.vibrate(150); squareFunction();};
reciprocalButton.onclick=function(){
  window.navigator.vibrate(150); reciprocalFunction();};
sqrtButton.onclick=function(){
  window.navigator.vibrate(150); sqrtFunction();};
deleteButton.onclick=function(){delFunction();};
oneButton.onclick=function(){
  window.navigator.vibrate(150); value +="1"; updateDisplay();}
twoButton.onclick=function(){
  window.navigator.vibrate(150); value +="2"; updateDisplay();}
threeButton.onclick=function(){
  window.navigator.vibrate(150); value +="3"; updateDisplay();}
fourButton.onclick=function(){
  window.navigator.vibrate(150); value +="4"; updateDisplay();}
fiveButton.onclick=function(){
  window.navigator.vibrate(150); value +="5"; updateDisplay();}
sixButton.onclick=function(){
  window.navigator.vibrate(150); value +="6"; updateDisplay();}
sevenButton.onclick=function(){
  window.navigator.vibrate(150); value +="7"; updateDisplay();}
eightButton.onclick=function(){
  window.navigator.vibrate(150); value +="8"; updateDisplay();}
nineButton.onclick=function(){
  window.navigator.vibrate(150); value +="9"; updateDisplay();}
zeroButton.onclick=function(){
  window.navigator.vibrate(150); value +="0"; updateDisplay();}
plusButton.onclick=function(){
  window.navigator.vibrate(150); plusFunction();};
minusButton.onclick=function(){
  window.navigator.vibrate(150); minusFunction();};
dividedButton.onclick= function(){
  window.navigator.vibrate(150); dividedFunction();};
timesButton.onclick=function(){
  window.navigator.vibrate(150); timesFunction();};
equalsButton.onclick=function(){
  window.navigator.vibrate(150); equalsFunction();};
clearButton.onclick=function(){
  window.navigator.vibrate(150); clearFunction();};
clearEntryButton.onclick=function(){
  window.navigator.vibrate(150); clearEntryFunction();};
decimalButton.onclick=function(){
  window.navigator.vibrate(150); value +="."; updateDisplay();};





function updateDisplay(){
  if(value){
    if (value.length>6){
      let shortenedValue=value.slice((value.length-6),value.length);
      display.innerHTML=shortenedValue;
    }
    else{display.innerHTML=(value);}
  }
  else if (plusValue!=0){display.innerHTML=(plusValue);}
  else if (minusValue!=0){display.innerHTML=(minusValue);}
  else if (dividedValue!=0){display.innerHTML=(dividedValue);}
  else if (timesValue!=0){display.innerHTML=(timesValue);}
  else{display.innerHTML="0";}
}

$(document).keydown(function(event){
  switch(event.which){
    case 48:
    case 96:
    value +="0"; updateDisplay();
    break;
    case 49:
    case 97:
    value +="1"; updateDisplay();
    break;
    case 50:
    case 98:
    value +="2"; updateDisplay();
    break;
    case 51:
    case 99:
    value +="3"; updateDisplay();
    break;
    case 52:
    case 100:
    value +="4"; updateDisplay();
    break;
    case 53:
    case 101:
    value +="5"; updateDisplay();
    break;
    case 54:
    case 102:
    value +="6"; updateDisplay();
    break;
    case 55:
    case 103:
    value +="7"; updateDisplay();
    break;
    case 56:
    case 104:
    value +="8"; updateDisplay();
    break;
    case 57:
    case 105:
    value +="9"; updateDisplay();
    break;
    case 13:
    case 187:
    equalsFunction();
    break;
    case 110:
    case 190:
    value+="."; updateDisplay();
    break;
    case 106:
    case 88:
    timesFunction();
    break;
    case 107:
    case 80:
    plusFunction();
    break;
    case 109:
    case 189:
    case 77:
    minusFunction();
    break;
    case 111:
    case 191:
    case 68:
    dividedFunction();
    break;
    case 8:
    case 46:
    delFunction();
    break;
    case 9:
    posNegFunction();
    break;
    case 70:
    percentFunction();
    break;
    case 67:
    clearFunction();
    break;
    case 69:
    clearEntryFunction();
    break;
    case 81:
    sqrtFunction();
    break;
    case 83:
    squareFunction();
    break;
    case 82:
    reciprocalFunction();
    break;
    default:
    alert(event.which);
    break;
  }
});

});
