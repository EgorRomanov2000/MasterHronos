function addRows(){
   	var table = document.getElementById('emptbl');
	var rowCount = table.rows.length;
	var cellCount = table.rows[1].cells.length;
	var row = table.insertRow(rowCount);
	for(var i =0; i < cellCount; i++){
		var cell = 'cell'+i;
		cell = row.insertCell(i);
		var copycel = document.getElementById('col'+i).innerHTML;
		cell.innerHTML=copycel;
     }
    addInputFieldListeners();
}

function deleteRows(){
	var table = document.getElementById('emptbl');
	var rowCount = table.rows.length;
	if(rowCount > '11'){
		var row = table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		alert('По умолчанию минимум 10 полей с деятельностью');
	}
}

function perehodvp(){
    document.getElementById('chislo1').textContent = '16';
    document.getElementById('chislo2').textContent = '17';
    document.getElementById('chislo3').textContent = '18';
    document.getElementById('chislo4').textContent = '19';
    document.getElementById('chislo5').textContent = '20';
    document.getElementById('chislo6').textContent = '21';
    document.getElementById('chislo7').textContent = '22';
    document.getElementById('chislo8').textContent = '23';
    document.getElementById('chislo9').textContent = '24';
    document.getElementById('chislo10').textContent = '25';
    document.getElementById('chislo11').textContent = '26';
    document.getElementById('chislo12').textContent = '27';
    document.getElementById('chislo13').textContent = '28';
    document.getElementById('chislo14').textContent = '29';
    document.getElementById('chislo15').textContent = '30';
}

function fun1() {
    var chbox1 = document.getElementById('check1');
    var inputs1 = document.querySelectorAll('.stolb1');
    var total1 = parseFloat(document.getElementById('total1').innerHTML);
    if (total1 <= 24) {
        if (total1 >= 8) {
	        for (var i = 0; i < inputs1.length; i++) {
                    inputs1[i].readOnly = chbox1.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox1.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox1.checked = false;
    }
}

function updateTotal1() {
  var inputs1 = document.querySelectorAll('.stolb1');
  var total1 = document.getElementById('total1');
  var sum1 = 0;
  for (var i = 0; i < inputs1.length; i++) {
    var value1 = parseFloat(inputs1[i].value);
    if (!isNaN(value1)) {
      sum1 += value1;
    }
  }
  total1.innerHTML = sum1;
}

function fun2() {
    var chbox2 = document.getElementById('check2');
    var inputs2 = document.querySelectorAll('.stolb2');
    var total2 = parseFloat(document.getElementById('total2').innerHTML);
    if (total2 <= 24) {
        if (total2 >= 8) {
	        for (var i = 0; i < inputs2.length; i++) {
                    inputs2[i].readOnly = chbox2.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox2.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox2.checked = false;
    }
}

function updateTotal2() {
  var inputs2 = document.querySelectorAll('.stolb2');
  var total2 = document.getElementById('total2');
  var sum2 = 0;
  for (var i = 0; i < inputs2.length; i++) {
    var value2 = parseFloat(inputs2[i].value);
    if (!isNaN(value2)) {
      sum2 += value2;
    }
  }
  total2.innerHTML = sum2;
}

function fun3() {
    var chbox3 = document.getElementById('check3');
    var inputs3 = document.querySelectorAll('.stolb3');
    var total3 = parseFloat(document.getElementById('total3').innerHTML);
    if (total3 <= 24) {
        if (total3 >= 8) {
	        for (var i = 0; i < inputs3.length; i++) {
                    inputs3[i].readOnly = chbox3.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox3.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox3.checked = false;
    }
}

function updateTotal3() {
  var inputs3 = document.querySelectorAll('.stolb3');
  var total3 = document.getElementById('total3');
  var sum3 = 0;
  for (var i = 0; i < inputs3.length; i++) {
    var value3 = parseFloat(inputs3[i].value);
    if (!isNaN(value3)) {
      sum3 += value3;
    }
  }
  total3.innerHTML = sum3;
}

function fun4() {
    var chbox4 = document.getElementById('check4');
    var inputs4 = document.querySelectorAll('.stolb4');
    var total4 = parseFloat(document.getElementById('total4').innerHTML);
    if (total4 <= 24) {
        if (total4 >= 8) {
	        for (var i = 0; i < inputs4.length; i++) {
                    inputs4[i].readOnly = chbox4.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox4.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox4.checked = false;
    }
}

function updateTotal4() {
  var inputs4 = document.querySelectorAll('.stolb4');
  var total4 = document.getElementById('total4');
  var sum4 = 0;
  for (var i = 0; i < inputs4.length; i++) {
    var value4 = parseFloat(inputs4[i].value);
    if (!isNaN(value4)) {
      sum4 += value4;
    }
  }
  total4.innerHTML = sum4;
}

function fun5() {
    var chbox5 = document.getElementById('check5');
    var inputs5 = document.querySelectorAll('.stolb5');
    var total5 = parseFloat(document.getElementById('total5').innerHTML);
    if (total5 <= 24) {
        if (total5 >= 8) {
	        for (var i = 0; i < inputs5.length; i++) {
                    inputs5[i].readOnly = chbox5.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox5.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox5.checked = false;
    }
}

function updateTotal5() {
  var inputs5 = document.querySelectorAll('.stolb5');
  var total5 = document.getElementById('total5');
  var sum5 = 0;
  for (var i = 0; i < inputs5.length; i++) {
    var value5 = parseFloat(inputs5[i].value);
    if (!isNaN(value5)) {
      sum5 += value5;
    }
  }
  total5.innerHTML = sum5;
}

function fun6() {
    var chbox6 = document.getElementById('check6');
    var inputs6 = document.querySelectorAll('.stolb6');
    var total6 = parseFloat(document.getElementById('total6').innerHTML);
    if (total6 <= 24) {
        if (total6 >= 8) {
	        for (var i = 0; i < inputs6.length; i++) {
                    inputs6[i].readOnly = chbox6.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox6.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox6.checked = false;
    }
}

function updateTotal6() {
  var inputs6 = document.querySelectorAll('.stolb6');
  var total6 = document.getElementById('total6');
  var sum6 = 0;
  for (var i = 0; i < inputs6.length; i++) {
    var value6 = parseFloat(inputs6[i].value);
    if (!isNaN(value6)) {
      sum6 += value6;
    }
  }
  total6.innerHTML = sum6;
}

function fun7() {
    var chbox7 = document.getElementById('check7');
    var inputs7 = document.querySelectorAll('.stolb7');
    var total7 = parseFloat(document.getElementById('total7').innerHTML);
    if (total7 <= 24) {
        if (total7 >= 8) {
	        for (var i = 0; i < inputs7.length; i++) {
                    inputs7[i].readOnly = chbox7.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox7.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox7.checked = false;
    }
}

function updateTotal7() {
  var inputs7 = document.querySelectorAll('.stolb7');
  var total7 = document.getElementById('total7');
  var sum7 = 0;
  for (var i = 0; i < inputs7.length; i++) {
    var value7 = parseFloat(inputs7[i].value);
    if (!isNaN(value7)) {
      sum7 += value7;
    }
  }
  total7.innerHTML = sum7;
}

function fun8() {
    var chbox8 = document.getElementById('check8');
    var inputs8 = document.querySelectorAll('.stolb8');
    var total8 = parseFloat(document.getElementById('total8').innerHTML);
    if (total8 <= 24) {
        if (total8 >= 8) {
	        for (var i = 0; i < inputs8.length; i++) {
                    inputs8[i].readOnly = chbox8.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox8.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox8.checked = false;
    }
}

function updateTotal8() {
  var inputs8 = document.querySelectorAll('.stolb8');
  var total8 = document.getElementById('total8');
  var sum8 = 0;
  for (var i = 0; i < inputs8.length; i++) {
    var value8 = parseFloat(inputs8[i].value);
    if (!isNaN(value8)) {
      sum8 += value8;
    }
  }
  total8.innerHTML = sum8;
}

function fun9() {
    var chbox9 = document.getElementById('check9');
    var inputs9 = document.querySelectorAll('.stolb9');
    var total9 = parseFloat(document.getElementById('total9').innerHTML);
    if (total9 <= 24) {
        if (total9 >= 8) {
	        for (var i = 0; i < inputs9.length; i++) {
                    inputs9[i].readOnly = chbox9.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox9.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox9.checked = false;
    }
}

function updateTotal9() {
  var inputs9 = document.querySelectorAll('.stolb9');
  var total9 = document.getElementById('total9');
  var sum9 = 0;
  for (var i = 0; i < inputs9.length; i++) {
    var value9 = parseFloat(inputs9[i].value);
    if (!isNaN(value9)) {
      sum9 += value9;
    }
  }
  total9.innerHTML = sum9;
}

function fun10() {
    var chbox10 = document.getElementById('check10');
    var inputs10 = document.querySelectorAll('.stolb10');
    var total10 = parseFloat(document.getElementById('total10').innerHTML);
    if (total10 <= 24) {
        if (total10 >= 8) {
	        for (var i = 0; i < inputs10.length; i++) {
                    inputs10[i].readOnly = chbox10.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox10.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox10.checked = false;
    }
}

function updateTotal10() {
  var inputs10 = document.querySelectorAll('.stolb10');
  var total10 = document.getElementById('total10');
  var sum10 = 0;
  for (var i = 0; i < inputs10.length; i++) {
    var value10 = parseFloat(inputs10[i].value);
    if (!isNaN(value10)) {
      sum10 += value10;
    }
  }
  total10.innerHTML = sum10;
}

function fun11() {
    var chbox11 = document.getElementById('check11');
    var inputs11 = document.querySelectorAll('.stolb11');
    var total11 = parseFloat(document.getElementById('total11').innerHTML);
    if (total11 <= 24) {
        if (total11 >= 8) {
	        for (var i = 0; i < inputs11.length; i++) {
                    inputs11[i].readOnly = chbox11.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox11.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox11.checked = false;
    }
}

function updateTotal11() {
  var inputs11 = document.querySelectorAll('.stolb11');
  var total11 = document.getElementById('total11');
  var sum11 = 0;
  for (var i = 0; i < inputs11.length; i++) {
    var value11 = parseFloat(inputs11[i].value);
    if (!isNaN(value11)) {
      sum11 += value11;
    }
  }
  total11.innerHTML = sum11;
}

function fun12() {
    var chbox12 = document.getElementById('check12');
    var inputs12 = document.querySelectorAll('.stolb12');
    var total12 = parseFloat(document.getElementById('total12').innerHTML);
    if (total12 <= 24) {
        if (total12 >= 8) {
	        for (var i = 0; i < inputs12.length; i++) {
                    inputs12[i].readOnly = chbox12.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox12.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox12.checked = false;
    }
}

function updateTotal12() {
  var inputs12 = document.querySelectorAll('.stolb12');
  var total12 = document.getElementById('total12');
  var sum12 = 0;
  for (var i = 0; i < inputs12.length; i++) {
    var value12 = parseFloat(inputs12[i].value);
    if (!isNaN(value12)) {
      sum12 += value12;
    }
  }
  total12.innerHTML = sum12;
}

function fun13() {
    var chbox13 = document.getElementById('check13');
    var inputs13 = document.querySelectorAll('.stolb13');
    var total13 = parseFloat(document.getElementById('total13').innerHTML);
    if (total13 <= 24) {
        if (total13 >= 8) {
	        for (var i = 0; i < inputs13.length; i++) {
                    inputs13[i].readOnly = chbox13.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox13.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox13.checked = false;
    }
}

function updateTotal13() {
  var inputs13 = document.querySelectorAll('.stolb13');
  var total13 = document.getElementById('total13');
  var sum13 = 0;
  for (var i = 0; i < inputs13.length; i++) {
    var value13 = parseFloat(inputs13[i].value);
    if (!isNaN(value13)) {
      sum13 += value13;
    }
  }
  total13.innerHTML = sum13;
}

function fun14() {
    var chbox14 = document.getElementById('check14');
    var inputs14 = document.querySelectorAll('.stolb14');
    var total14 = parseFloat(document.getElementById('total14').innerHTML);
    if (total14 <= 24) {
        if (total14 >= 8) {
	        for (var i = 0; i < inputs14.length; i++) {
                    inputs14[i].readOnly = chbox14.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox14.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox14.checked = false;
    }
}

function updateTotal14() {
  var inputs14 = document.querySelectorAll('.stolb14');
  var total14 = document.getElementById('total14');
  var sum14 = 0;
  for (var i = 0; i < inputs14.length; i++) {
    var value14 = parseFloat(inputs14[i].value);
    if (!isNaN(value14)) {
      sum14 += value14;
    }
  }
  total14.innerHTML = sum14;
}

function fun15() {
    var chbox15 = document.getElementById('check15');
    var inputs15 = document.querySelectorAll('.stolb15');
    var total15 = parseFloat(document.getElementById('total15').innerHTML);
    if (total15 <= 24) {
        if (total15 >= 8) {
	        for (var i = 0; i < inputs15.length; i++) {
                    inputs15[i].readOnly = chbox15.checked;
            }
        }
        else {
            alert('Минимум 8 отработанных часов за день');
            chbox15.checked = false;
        }
    }
    else {
         alert('Не более 24 отработанных часов за день');
         chbox15.checked = false;
    }
}

function updateTotal15() {
  var inputs15 = document.querySelectorAll('.stolb15');
  var total15 = document.getElementById('total15');
  var sum15 = 0;
  for (var i = 0; i < inputs15.length; i++) {
    var value15 = parseFloat(inputs15[i].value);
    if (!isNaN(value15)) {
      sum15 += value15;
    }
  }
  total15.innerHTML = sum15;
}

function confirm() {
    var chbox1 = document.getElementById('check1');
    var inputs1 = document.querySelectorAll('.stolb1');
    for (var i = 0; i < inputs1.length; i++) {
                inputs1[i].disabled = chbox1.checked;
             }
    chbox1.disabled= chbox1.checked;
    var chbox2 = document.getElementById('check2');
    var inputs2 = document.querySelectorAll('.stolb2');
    for (var i = 0; i < inputs2.length; i++) {
                inputs2[i].disabled = chbox2.checked;
             }
    chbox2.disabled= chbox2.checked;
    var chbox3 = document.getElementById('check3');
    var inputs3 = document.querySelectorAll('.stolb3');
    for (var i = 0; i < inputs3.length; i++) {
                inputs3[i].disabled = chbox3.checked;
             }
    chbox3.disabled= chbox3.checked;
    var chbox4 = document.getElementById('check4');
    var inputs4 = document.querySelectorAll('.stolb4');
    for (var i = 0; i < inputs4.length; i++) {
                inputs4[i].disabled = chbox4.checked;
             }
    chbox4.disabled= chbox4.checked;
    var chbox5 = document.getElementById('check5');
    var inputs5 = document.querySelectorAll('.stolb5');
    for (var i = 0; i < inputs5.length; i++) {
                inputs5[i].disabled = chbox5.checked;
             }
    chbox5.disabled= chbox5.checked;
    var chbox6 = document.getElementById('check6');
    var inputs6 = document.querySelectorAll('.stolb6');
    for (var i = 0; i < inputs6.length; i++) {
                inputs6[i].disabled = chbox6.checked;
             }
    chbox6.disabled= chbox6.checked;
    var chbox7 = document.getElementById('check7');
    var inputs7 = document.querySelectorAll('.stolb7');
    for (var i = 0; i < inputs7.length; i++) {
                inputs7[i].disabled = chbox7.checked;
             }
    chbox7.disabled= chbox7.checked;
    var chbox8 = document.getElementById('check8');
    var inputs8 = document.querySelectorAll('.stolb8');
    for (var i = 0; i < inputs8.length; i++) {
                inputs8[i].disabled = chbox8.checked;
             }
    chbox8.disabled= chbox8.checked;
    var chbox9 = document.getElementById('check9');
    var inputs9 = document.querySelectorAll('.stolb9');
    for (var i = 0; i < inputs9.length; i++) {
                inputs9[i].disabled = chbox9.checked;
             }
    chbox9.disabled= chbox9.checked;
    var chbox10 = document.getElementById('check10');
    var inputs10 = document.querySelectorAll('.stolb10');
    for (var i = 0; i < inputs10.length; i++) {
                inputs10[i].disabled = chbox10.checked;
             }
    chbox10.disabled= chbox10.checked;
    var chbox11 = document.getElementById('check11');
    var inputs11 = document.querySelectorAll('.stolb11');
    for (var i = 0; i < inputs11.length; i++) {
                inputs11[i].disabled = chbox11.checked;
             }
    chbox11.disabled= chbox11.checked;
    var chbox12 = document.getElementById('check12');
    var inputs12 = document.querySelectorAll('.stolb12');
    for (var i = 0; i < inputs12.length; i++) {
                inputs12[i].disabled = chbox12.checked;
             }
    chbox12.disabled= chbox12.checked;
    var chbox13 = document.getElementById('check13');
    var inputs13 = document.querySelectorAll('.stolb13');
    for (var i = 0; i < inputs13.length; i++) {
                inputs13[i].disabled = chbox13.checked;
             }
    chbox13.disabled= chbox13.checked;
    var chbox14 = document.getElementById('check14');
    var inputs14 = document.querySelectorAll('.stolb14');
    for (var i = 0; i < inputs14.length; i++) {
                inputs14[i].disabled = chbox14.checked;
             }
    chbox14.disabled= chbox14.checked;
    var chbox15 = document.getElementById('check15');
    var inputs15 = document.querySelectorAll('.stolb15');
    for (var i = 0; i < inputs15.length; i++) {
                inputs15[i].disabled = chbox15.checked;
             }
    chbox15.disabled= chbox15.checked;
}

function deyat1(input) {
    input.setAttribute("readonly", true);
}
function deyat2(input) {
    input.setAttribute("readonly", true);
}
function deyat3(input) {
    input.setAttribute("readonly", true);
}
function deyat4(input) {
    input.setAttribute("readonly", true);
}
function deyat5(input) {
    input.setAttribute("readonly", true);
}
function deyat6(input) {
    input.setAttribute("readonly", true);
}
function deyat7(input) {
    input.setAttribute("readonly", true);
}
function deyat8(input) {
    input.setAttribute("readonly", true);
}
function deyat9(input) {
    input.setAttribute("readonly", true);
}
function deyat10(input) {
    input.setAttribute("readonly", true);
}

function addInputFieldListeners() {
    var inputFields = document.querySelectorAll('input[type="number"]');
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            } else if (this.value > 24) {
                this.value = 24;
            }
        });
    }
}
