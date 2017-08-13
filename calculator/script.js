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

$('.btn-fx').hover(function(){$(this).toggleClass('button_hover');});

posNegButton.onclick=function(){if (value.charAt(0)=="-"){
  value=value.slice(1,value.length)
}
else{value="-"+value}; updateDisplay();}
percentButton.onclick=function(){value = (Number(value)/100).toString(); updateDisplay();}
squareButton.onclick=function(){value = Math.pow(Number(value),2).toString(); updateDisplay();}
reciprocalButton.onclick=function(){value = (1/Number(value)).toString(); updateDisplay();}
sqrtButton.onclick=function(){value=Math.sqrt(Number(value)).toString(); updateDisplay();}
deleteButton.onclick=function(){ value= value.substring(0,value.length-1); updateDisplay();}
oneButton.onclick=function(){value +="1"; updateDisplay();}
twoButton.onclick=function(){value +="2"; updateDisplay();}
threeButton.onclick=function(){value +="3"; updateDisplay();}
fourButton.onclick=function(){value +="4"; updateDisplay();}
fiveButton.onclick=function(){value +="5"; updateDisplay();}
sixButton.onclick=function(){value +="6"; updateDisplay();}
sevenButton.onclick=function(){value +="7"; updateDisplay();}
eightButton.onclick=function(){value +="8"; updateDisplay();}
nineButton.onclick=function(){value +="9"; updateDisplay();}
zeroButton.onclick=function(){value +="0"; updateDisplay();}

plusButton.onclick=function(){
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

minusButton.onclick=function(){
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
dividedButton.onclick=function(){
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
timesButton.onclick=function(){
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
equalsButton.onclick=function(){
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
clearButton.onclick=function(){
  value=""; plusValue=0; minusValue=0;dividedValue=0;timesValue=0;updateDisplay();
}
clearEntryButton.onclick=function(){
  value=""; updateDisplay();
}
decimalButton.onclick=function(){value +="."; updateDisplay();}

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

});
