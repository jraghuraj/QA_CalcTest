//document.querySelectorAll("button")[18].click()


var button9 = document.querySelectorAll("button")[10]
var button8 = document.querySelectorAll("button")[9]
var button7 = document.querySelectorAll("button")[8]
var button6 = document.querySelectorAll("button")[14]
var button5 = document.querySelectorAll("button")[13]
var button4 = document.querySelectorAll("button")[12]
var button3 = document.querySelectorAll("button")[18]
var button2 = document.querySelectorAll("button")[17]
var button1 = document.querySelectorAll("button")[16]
var button0 = document.querySelectorAll("button")[21]
var buttonDivision = document.querySelectorAll("button")[7]
var buttonMultiply = document.querySelectorAll("button")[11]
var buttonSubtraction = document.querySelectorAll("button")[15]
var buttonAddition = document.querySelectorAll("button")[19]
var buttonEqual = document.querySelectorAll("button")[23]
var buttonPosNeg = document.querySelectorAll("button")[20]
var buttonDecimal = document.querySelectorAll("button")[22]
var buttonBackspace = document.querySelectorAll("button")[6]
var buttonClear = document.querySelectorAll("button")[5]
var buttonClearMemory = document.querySelectorAll("button")[4]
var buttonNegativeExponent = document.querySelectorAll("button")[3]
var buttonSquared = document.querySelectorAll("button")[2]
var buttonSquareroot = document.querySelectorAll("button")[1]
var buttonPercentage = document.querySelectorAll("button")[0]


function positiveMultiplyPostiveTest (){
  buttonClear.click()
  button2.click()
  buttonMultiply.click()
  button3.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "6")
  return "You Passed!"
};

function negativeMultiplyPostiveTest (){
  buttonClear.click()
  button2.click()
  buttonPosNeg.click()
  buttonMultiply.click()
  button3.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "-6")
  return "You Passed!"
};

function negativeMultiplyNegativeTest (){
  buttonClear.click()
  button2.click()
  buttonPosNeg.click()
  buttonMultiply.click()
  button3.click()
  buttonPosNeg.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "6")
  return "You Passed!"
};

function positiveMultiplyZeroTest (){
  buttonClear.click()
  button2.click()
  buttonMultiply.click()
  button0.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "0")
  return "You Passed!"
};

function negativeMultiplyZeroTest (){
  buttonClear.click()
  button2.click()
  buttonPosNeg.click()
  buttonMultiply.click()
  button0.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "0")
  return "You Passed!"
};

function clearNumberTest (){
  buttonClear.click()
  var x = 0
  while (x < 5){
    button2.click()
    x++;
  }
  buttonClear.click()
  console.assert (document.querySelectorAll('input')[0].value == "0")
  return "You Passed!"
};

function backspaceTest (){
  buttonClear.click()
  var x = 0
  while (x < 5){
    button2.click()
    x++;
  }
  while (x < 6){
    buttonBackspace.click()
    x++;
  }
  console.assert (document.querySelectorAll('input')[0].value == "0")
  return "You Passed!"
};

function oneBackspaceTest (){
  buttonClear.click()
  var x = 0
  while (x < 5){
    button2.click()
    x++;
  }
  buttonBackspace.click()
  console.assert (document.querySelectorAll('input')[0].value == "222")
  return "You Passed!"
};

function clearMemoryTest (){
  buttonClear.click()
  button2.click()
  button3.click()
  buttonClearMemory.click()
  console.assert (document.querySelectorAll('input')[0].value == "0")
  return "You Passed!"
};

function percentageTest (){
  buttonClear.click()
  button4.click()
  button4.click()
  buttonPercentage.click()
  console.assert (document.querySelectorAll('input')[0].value == "0.44")
  return "You Passed!"
};

function decimalTest (){
  buttonClear.click()
  buttonDecimal.click()
  button4.click()
  button4.click()
  console.assert (document.querySelectorAll('input')[0].value == "0.44")
  return "You Passed!"
};

function squareRootTest (){
  buttonClear.click()
  button5.click()
  buttonMultiply.click()
  button5.click()
  buttonEqual.click()
  buttonSquareroot.click()
  console.assert (document.querySelectorAll('input')[0].value == "5")
  return "You Passed!"
};

function negativeSquareRootTest (){
  buttonClear.click()
  button5.click()
  buttonPosNeg.click()
  buttonMultiply.click()
  button5.click()
  buttonEqual.click()
  buttonSquareroot.click()
  console.assert (document.querySelectorAll('input')[0].value == "0")
  return "You Passed!"
};

function squareTest (){
  buttonClear.click()
  button6.click()
  buttonSquared.click()
  console.assert (document.querySelectorAll('input')[0].value == "36")
  return "You Passed!"
};

function negativeSquareTest (){
  buttonClear.click()
  button7.click()
  buttonPosNeg.click()
  buttonSquared.click()
  console.assert (document.querySelectorAll('input')[0].value == "49")
  return "You Passed!"
};

function negativeExponentTest (){
  buttonClear.click()
  button9.click()
  buttonNegativeExponent.click()
  console.assert (document.querySelectorAll('input')[0].value == "0.1111111")
  return "You Passed!"
};

function negativeBaseExponentTest (){
  buttonClear.click()
  button9.click()
  buttonPosNeg.click()
  buttonNegativeExponent.click()
  console.assert (document.querySelectorAll('input')[0].value == "-0.1111111")
  return "You Passed!"
};

function positveSubstractionTest (){
  buttonClear.click()
  button9.click()
  buttonSubtraction.click
  button5.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "4")
  return "You Passed!"
};

function negativeSubstractionTest (){
  buttonClear.click()
  button9.click()
  buttonPosNeg.click()
  buttonSubtraction.click
  button5.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "-14")
  return "You Passed!"
};

function negativeNegativeSubstractionTest (){
  buttonClear.click()
  button9.click()
  buttonPosNeg.click()
  buttonSubtraction.click
  button5.click()
  buttonPosNeg.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "-4")
  return "You Passed!"
};

function negativePositveSubstractionTest (){
  buttonClear.click()
  button5.click()
  buttonSubtraction.click
  button9.click()
  buttonPosNeg.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "-4")
  return "You Passed!"
};

function positiveAdditionTest (){
  buttonClear.click()
  button7.click()
  buttonAddition.click()
  button3.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "10")
  return "You Passed!"
};

function negativeAdditionTest (){
  buttonClear.click()
  button7.click()
  buttonPosNeg.click()
  buttonAddition.click()
  button3.click()
  buttonPosNeg.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "-10")
  return "You Passed!"
};

function positiveNegativeAdditionTest (){
  buttonClear.click()
  button7.click()
  buttonAddition.click()
  button3.click()
  buttonPosNeg.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "4")
  return "You Passed!"
};

function negativePositiveAdditionTest (){
  buttonClear.click()
  button7.click()
  buttonPosNeg.click()
  buttonAddition.click()
  button3.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "-4")
  return "You Passed!"
};

function positiveEightTest (){
  buttonClear.click()
  button8.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "8")
  return "Failed!"
};

function positiveDivisionTest (){
  buttonClear.click()
  button9.click()
  buttonDivision.click()
  button3.click()
  buttonEqual.click()
  console.assert (document.querySelectorAll('input')[0].value == "3")
  return "Failed!"
};