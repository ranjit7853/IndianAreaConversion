document.getElementById('inputValue').addEventListener('input', convertUnits);
document.getElementById('fromUnit').addEventListener('change', convertUnits);
document.getElementById('toUnit').addEventListener('change', convertUnits);

function convertUnits() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let convertedValue;

    // Conversion logic
    switch (fromUnit) {
        case 'acre':
            convertedValue = convertAcre(inputValue, toUnit);
            break;
        case 'sqft':
            convertedValue = convertSqFt(inputValue, toUnit);
            break;
        case 'sqmt':
            convertedValue = convertSqMt(inputValue, toUnit);
            break;
        case 'hectare':
            convertedValue = convertHectare(inputValue, toUnit);
            break;
	case 'sqyd':
            convertedValue = convertSqYd(inputValue, toUnit);
            break;
	case 'kanal':
            convertedValue = convertKanal(inputValue, toUnit);
            break;
	case 'marla':
            convertedValue = convertMarla(inputValue, toUnit);
            break;
	case 'bighahr':
            convertedValue = convertBighaHr(inputValue, toUnit);
            break;
	case 'bighapb':
            convertedValue = convertBighaPb(inputValue, toUnit);
            break;
case 'bighapb':
            convertedValue = convertBighaPb(inputValue, toUnit);
            break;

case 'bighaup':
            convertedValue = convertBighaUp(inputValue, toUnit);
            break;
case 'bighabh':
            convertedValue = convertBighaBh(inputValue, toUnit);
            break;
case 'bighamp':
            convertedValue = convertBighaMP(inputValue, toUnit);
            break;
case 'bighagj':
            convertedValue = convertBighaGJ(inputValue, toUnit);
            break;
case 'bighahp':
            convertedValue = convertBighaHP(inputValue, toUnit);
            break;
case 'bighauk':
            convertedValue = convertBighaUK(inputValue, toUnit);
            break;
case 'bighaas':
            convertedValue = convertBighaAS(inputValue, toUnit);
            break;
case 'bighawb':
            convertedValue = convertBighaWB(inputValue, toUnit);
            break;

case 'bigharjp':
            convertedValue = convertBighaRJP(inputValue, toUnit);
            break;
case 'bigharjk':
            convertedValue = convertBighaRJK(inputValue, toUnit);
            break;

        
default:
            convertedValue = 0;
    }

    // Display the result
    document.getElementById('outputValue').value = convertedValue.toFixed(5);
}

function convertAcre(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value;
        case 'sqft':
            return value * 43560;
        case 'sqmt':
            return value * 4046.86;
        case 'hectare':
            return value * 0.404686;
	case 'sqyd':
            return value*4840;
	case 'kanal':
            return value*8;
	case 'marla':
            return value*160;
case 'bighahr':
            return value*43560/27225;
case 'bighapb':
            return value*43560/9070;
case 'bighaup':
            return value*43560/27000;
case 'bighabh':
            return value*43560/27220;
case 'bighamp':
            return value*43560/12000;
case 'bighagj':
            return value*43560/17427;
case 'bighahp':
            return value*43560/8712;
case 'bighauk':
            return value*43560/6804;
case 'bighaas':
            return value*43560/14400;
case 'bighawb':
            return value*43560/14348.29;
case 'bigharjp':
            return value*43560/27225;
case 'bigharjk':
            return value*43560/17424;


        default:
            return 0;
    }
}

function convertSqFt(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value / 43560;
        case 'sqft':
            return value;
        case 'sqmt':
            return value / 10.764;
        case 'hectare':
            return value / 107639.104;
	case 'sqyd':
            return value/9;
	case 'kanal':
            return value/5445;
	case 'marla':
            return value/272.3;
case 'bighahr':
            return value/27225;
case 'bighapb':
            return value/9070;
case 'bighaup':
            return value/27000;
case 'bighabh':
            return value/27220;
case 'bighamp':
            return value/12000;
case 'bighagj':
            return value/17427;
case 'bighahp':
            return value/8712;
case 'bighauk':
            return value/6804;
case 'bighaas':
            return value/14400;
case 'bighawb':
            return value/14348.29;
case 'bigharjp':
            return value/27225;
case 'bigharjk':
            return value/17424;

        default:
            return 0;
    }
}

function convertSqMt(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value / 4046.86;
        case 'sqft':
            return value * 10.764;
        case 'sqmt':
            return value;
        case 'hectare':
            return value / 10000;
	case 'sqyd':
            return value*1.196;
	case 'kanal':
            return value/505.9;
	case 'marla':
            return value/25.293;
case 'bighahr':
            return value*10.7639/27225;
case 'bighapb':
            return value*10.7639/9070;
case 'bighaup':
            return value*10.7639/27000;
case 'bighabh':
            return value*10.7639/27220;
case 'bighamp':
            return value*10.7639/12000;
case 'bighagj':
            return value*10.7639/17427;
case 'bighahp':
            return value*10.7639/8712;
case 'bighauk':
            return value*10.7639/6804;
case 'bighaas':
            return value*10.7639/14400;
case 'bighawb':
            return value*10.7639/14348.29;
case 'bigharjp':
            return value*10.7639/27225;
case 'bigharjk':
            return value*10.7639/17424;


        default:
            return 0;
    }
}

function convertHectare(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value * 2.47105;
        case 'sqft':
            return value * 107639.104;
        case 'sqmt':
            return value * 10000;
        case 'hectare':
            return value;
	case 'sqyd':
            return value*11960;
	case 'kanal':
            return value*19.7684;
	case 'marla':
            return value*395.368;
case 'bighahr':
            return value*107639/27225;
case 'bighapb':
            return value*107639/9070;
case 'bighaup':
            return value*107639/27000;
case 'bighabh':
            return value*107639/27220;
case 'bighamp':
            return value*107639/12000;
case 'bighagj':
            return value*107639/17427;
case 'bighahp':
            return value*107639/8712;
case 'bighauk':
            return value*107639/6804;
case 'bighaas':
            return value*107639/14400;
case 'bighawb':
            return value*107639/14348.29;

case 'bigharjp':
            return value*107639/27225;
case 'bigharjk':
            return value*107639/17424;

        default:
            return 0;
    }
}

function convertSqYd(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value/4840;
        case 'sqft':
            return value * 9;
        case 'sqmt':
            return value/1.196;
        case 'sqyd':
            return value;
	case 'kanal':
            return value/605;
	case 'hectare':
            return value/11960;
	case 'marla':
            return value/30.25;
case 'bighahr':
            return value*9/27225;
case 'bighapb':
            return value*9/9070;
case 'bighaup':
            return value*9/27000;
case 'bighabh':
            return value*9/27220;
case 'bighamp':
            return value*9/12000;
case 'bighagj':
            return value*9/17427;
case 'bighahp':
            return value*9/8712;
case 'bighauk':
            return value*9/6804;
case 'bighaas':
            return value*9/14400;
case 'bighawb':
            return value*9/14348.29;
case 'bigharjp':
            return value*9/27225;
case 'bigharjk':
            return value*9/17424;


        default:
            return 0;
    }
}


function convertKanal(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value/8;
        case 'sqft':
            return value *5445;
        case 'sqmt':
            return value*505.9;
        case 'sqyd':
            return value*605;
	case 'kanal':
            return value;
	case 'hectare':
            return value/19.768;
	case 'marla':
            return value*20;
case 'bighahr':
            return value*5445/27225;
case 'bighapb':
            return value*5445/9070;
case 'bighaup':
            return value*5445/27000;
case 'bighabh':
            return value*5445/27220;
case 'bighamp':
            return value*5445/12000;
case 'bighagj':
            return value*5445/17427;
case 'bighahp':
            return value*5445/8712;
case 'bighauk':
            return value*5445/6804;
case 'bighaas':
            return value*5445/14400;
case 'bighawb':
            return value*5445/14348.29;
case 'bigharjp':
            return value*5445/27225;
case 'bigharjk':
            return value*5445/17424;


        default:
            return 0;
    }
}

function convertMarla(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value/160;
        case 'sqft':
            return value *272.251;
        case 'sqmt':
            return value*25.293;
        case 'sqyd':
            return value*30.2501;
	case 'kanal':
            return value/20;
	case 'hectare':
            return value/395.4;
	case 'marla':
            return value;
case 'bighahr':
            return value*272.3/27225;
case 'bighapb':
            return value*272.3/9070;
case 'bighaup':
            return value*272.3/27000;
case 'bighabh':
            return value*272.3/27220;
case 'bighamp':
            return value*272.3/12000;
case 'bighagj':
            return value*272.3/17427;
case 'bighagj':
            return value*272.3/8712;
case 'bighauk':
            return value*272.3/6804;
case 'bighaas':
            return value*272.3/14400;
case 'bighawb':
            return value*272.3/14348.29;
case 'bigharjp':
            return value*272.3/27225;
case 'bigharjk':
            return value*272.3/17424;


        default:
            return 0;
    }
}


function convertBighaHr(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*27225/43560;
        case 'sqft':
            return value *27225;
        case 'sqmt':
            return value*27225/10.764;
        case 'sqyd':
            return value*27225/9;
	case 'kanal':
            return value*27225/5445;
	case 'hectare':
            return value*27225/107639.104;
	case 'marla':
            return value*27225/272.3;
case 'bighahr':
            return value;
case 'bighapb':
            return value*27225/9070;
case 'bighaup':
            return value*27225/27000;
case 'bighabh':
            return value*27225/27220;
case 'bighamp':
            return value*27225/12000;
case 'bighagj':
            return value*27225/17427;
case 'bighahp':
            return value*27225/8712;
case 'bighauk':
            return value*27225/6804;
case 'bighaas':
            return value*27225/14400;
case 'bighawb':
            return value*27225/14348.29;
case 'bigharjp':
            return value*27225/27225;
case 'bigharjk':
            return value*27225/17424;

        default:
            return 0;
    }
}


function convertBighaPb(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*9070/43560;
        case 'sqft':
            return value *9070;
        case 'sqmt':
            return value*9070/10.764;
        case 'sqyd':
            return value*9070/9;
	case 'kanal':
            return value*9070/5445;
	case 'hectare':
            return value*9070/107639.104;
	case 'marla':
            return value*9070/272.3;
case 'bighapb':
            return value;
case 'bighahr':
            return value*9070/27225;
case 'bighaup':
            return value*9070/27000;
case 'bighabh':
            return value*9070/27220;
case 'bighamp':
            return value*9070/12000;
case 'bighagj':
            return value*9070/17427;
case 'bighahp':
            return value*9070/8712;
case 'bighauk':
            return value*9070/6804;
case 'bighaas':
            return value*9070/14400;
case 'bighawb':
            return value*9070/14348.29;
case 'bigharjp':
            return value*9070/27225;
case 'bigharjk':
            return value*9070/17424;



        default:
            return 0;
    }
}

function convertBighaUp(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*27000/43560;
        case 'sqft':
            return value *27000;
        case 'sqmt':
            return value*27000/10.764;
        case 'sqyd':
            return value*27000/9;
	case 'kanal':
            return value*27000/5445;
	case 'hectare':
            return value*27000/107639.104;
	case 'marla':
            return value*27000/272.3;
case 'bighapb':
            return value*27000/9070;
case 'bighahr':
            return value*27000/27225;
case 'bighaup':
            return value*27000/27000;
case 'bighabh':
            return value*27000/27220;
case 'bighamp':
            return value*27000/12000;
case 'bighagj':
            return value*27000/17427;
case 'bighahp':
            return value*27000/8712;
case 'bighauk':
            return value*27000/6804;
case 'bighaas':
            return value*27000/14400;
case 'bighawb':
            return value*27000/14348.29;
case 'bigharjp':
            return value*27000/27225;
case 'bigharjk':
            return value*27000/17424;



        default:
            return 0;
    }
}

function convertBighaBh(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*27220/43560;
        case 'sqft':
            return value *27220;
        case 'sqmt':
            return value*27220/10.764;
        case 'sqyd':
            return value*27220/9;
	case 'kanal':
            return value*27220/5445;
	case 'hectare':
            return value*27220/107639.104;
	case 'marla':
            return value*27220/272.3;
case 'bighapb':
            return value*27220/9070;
case 'bighahr':
            return value*27220/27225;
case 'bighaup':
            return value*27220/27000;
case 'bighabh':
            return value*27220/27220;
case 'bighamp':
            return value*27220/12000;
case 'bighagj':
            return value*27220/17427;
case 'bighahp':
            return value*27220/8712;
case 'bighauk':
            return value*27220/6804;
case 'bighaas':
            return value*27220/14400;
case 'bighawb':
            return value*27220/14348.29;
case 'bigharjp':
            return value*27220/27225;
case 'bigharjk':
            return value*27220/17424;


            default:
return 0;
    }
}

function convertBighaMP(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*12000/43560;
        case 'sqft':
            return value *12000;
        case 'sqmt':
            return value*12000/10.764;
        case 'sqyd':
            return value*12000/9;
	case 'kanal':
            return value*12000/5445;
	case 'hectare':
            return value*12000/107639.104;
	case 'marla':
            return value*12000/272.3;
case 'bighapb':
            return value*12000/9070;
case 'bighahr':
            return value*12000/27225;
case 'bighaup':
            return value*12000/27000;
case 'bighabh':
            return value*12000/27220;
case 'bighamp':
            return value*12000/12000;
case 'bighagj':
            return value*12000/17427;
case 'bighahp':
            return value*12000/8712;
case 'bighauk':
            return value*12000/6804;
case 'bighaas':
            return value*12000/14400;
case 'bighawb':
            return value*12000/14348.29;
case 'bigharjp':
            return value*12000/27225;
case 'bigharjk':
            return value*12000/17424;

default:
            return 0;
    }
}

function convertBighaGJ(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*17427/43560;
        case 'sqft':
            return value *17427;
        case 'sqmt':
            return value*17427/10.764;
        case 'sqyd':
            return value*17427/9;
	case 'kanal':
            return value*17427/5445;
	case 'hectare':
            return value*17427/107639.104;
	case 'marla':
            return value*17427/272.3;
case 'bighapb':
            return value*17427/9070;
case 'bighahr':
            return value*17427/27225;
case 'bighaup':
            return value*17427/27000;
case 'bighabh':
            return value*17427/27220;
case 'bighamp':
            return value*17427/12000;
case 'bighagj':
            return value*17427/17427;
case 'bighahp':
            return value*17427/8712;
case 'bighauk':
            return value*17427/6804;
case 'bighaas':
            return value*17427/14400;
case 'bighawb':
            return value*17427/14348.29;
case 'bigharjp':
            return value*17427/27225;
case 'bigharjk':
            return value*17427/17424;

        default:
            return 0;
    }
}

function convertBighaHP(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*8712/43560;
        case 'sqft':
            return value *8712;
        case 'sqmt':
            return value*8712/10.764;
        case 'sqyd':
            return value*8712/9;
	case 'kanal':
            return value*8712/5445;
	case 'hectare':
            return value*8712/107639.104;
	case 'marla':
            return value*8712/272.3;
case 'bighapb':
            return value*8712/9070;
case 'bighahr':
            return value*8712/27225;
case 'bighaup':
            return value*8712/27000;
case 'bighabh':
            return value*8712/27220;
case 'bighamp':
            return value*8712/12000;
case 'bighagj':
            return value*8712/17427;
case 'bighahp':
            return value*8712/8712;
case 'bighauk':
            return value*8712/6804;
case 'bighaas':
            return value*8712/14400;
case 'bighawb':
            return value*8712/14348.29;
case 'bigharjp':
            return value*8712/27225;
case 'bigharjk':
            return value*8712/17424;

        default:
            return 0;
    }
}


function convertBighaUK(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*6804/43560;
        case 'sqft':
            return value *6804;
        case 'sqmt':
            return value*6804/10.764;
        case 'sqyd':
            return value*6804/9;
	case 'kanal':
            return value*6804/5445;
	case 'hectare':
            return value*6804/107639.104;
	case 'marla':
            return value*6804/272.3;
case 'bighapb':
            return value*6804/9070;
case 'bighahr':
            return value*6804/27225;
case 'bighaup':
            return value*6804/27000;
case 'bighabh':
            return value*6804/27220;
case 'bighamp':
            return value*6804/12000;
case 'bighagj':
            return value*6804/17427;
case 'bighahp':
            return value*6804/8712;
case 'bighauk':
            return value*6804/6804;
case 'bighaas':
            return value*6804/14400;
case 'bighawb':
            return value*6804/14348.29;
case 'bigharjp':
            return value*6804/27225;
case 'bigharjk':
            return value*6804/17424;

        default:
            return 0;
    }
}

function convertBighaAS(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*14400/43560;
        case 'sqft':
            return value *14400;
        case 'sqmt':
            return value*14400/10.764;
        case 'sqyd':
            return value*14400/9;
	case 'kanal':
            return value*14400/5445;
	case 'hectare':
            return value*14400/107639.104;
	case 'marla':
            return value*14400/272.3;
case 'bighapb':
            return value*14400/9070;
case 'bighahr':
            return value*14400/27225;
case 'bighaup':
            return value*14400/27000;
case 'bighabh':
            return value*14400/27220;
case 'bighamp':
            return value*14400/12000;
case 'bighagj':
            return value*14400/17427;
case 'bighahp':
            return value*14400/8712;
case 'bighauk':
            return value*14400/6804;
case 'bighaas':
            return value*14400/14400;
case 'bighawb':
            return value*14400/14348.29;
case 'bigharjp':
            return value*14400/27225;
case 'bigharjk':
            return value*14400/17424;




        default:
            return 0;
    }
}

function convertBighaWB(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*14348.29/43560;
        case 'sqft':
            return value *14348.29;
        case 'sqmt':
            return value*14348.29/10.764;
        case 'sqyd':
            return value*14348.29/9;
	case 'kanal':
            return value*14348.29/5445;
	case 'hectare':
            return value*14348.29/107639.104;
	case 'marla':
            return value*14348.29/272.3;
case 'bighapb':
            return value*14348.29/9070;
case 'bighahr':
            return value*14348.29/27225;
case 'bighaup':
            return value*14348.29/27000;
case 'bighabh':
            return value*14348.29/27220;
case 'bighamp':
            return value*14348.29/12000;
case 'bighagj':
            return value*14348.29/17427;
case 'bighahp':
            return value*14348.29/8712;
case 'bighauk':
            return value*14348.29/6804;
case 'bighaas':
            return value*14348.29/14400;
case 'bighawb':
            return value*14348.29/14348.29;
case 'bigharjp':
            return value*14348.29/27225;

case 'bigharjk':
            return value*14348.29/17424;

        default:
            return 0;
    }
}




function convertBighaRJP(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*27225/43560;
        case 'sqft':
            return value *27225;
        case 'sqmt':
            return value*27225/10.764;
        case 'sqyd':
            return value*27225/9;
	case 'kanal':
            return value*27225/5445;
	case 'hectare':
            return value*27225/107639.104;
	case 'marla':
            return value*27225/272.3;
case 'bighapb':
            return value*27225/9070;
case 'bighahr':
            return value*27225/27225;
case 'bighaup':
            return value*27225/27000;
case 'bighabh':
            return value*27225/27220;
case 'bighamp':
            return value*27225/12000;
case 'bighagj':
            return value*27225/17427;
case 'bighahp':
            return value*27225/8712;
case 'bighauk':
            return value*27225/6804;
case 'bighaas':
            return value*27225/14400;
case 'bighawb':
            return value*27225/14348.29;
case 'bigharjp':
            return value*27225/27225;
case 'bigharjk':
            return value*27225/17424;

        default:
            return 0;
    }
}


function convertBighaRJK(value, toUnit) {
    switch (toUnit) {
        case 'acre':
            return value*17424/43560;
        case 'sqft':
            return value *17424;
        case 'sqmt':
            return value*17424/10.764;
        case 'sqyd':
            return value*17424/9;
	case 'kanal':
            return value*17424/5445;
	case 'hectare':
            return value*17424/107639.104;
	case 'marla':
            return value*17424/272.3;
case 'bighapb':
            return value*17424/9070;
case 'bighahr':
            return value*17424/27225;
case 'bighaup':
            return value*17424/27000;
case 'bighabh':
            return value*17424/27220;
case 'bighamp':
            return value*17424/12000;
case 'bighagj':
            return value*17424/17427;
case 'bighahp':
            return value*17424/8712;
case 'bighauk':
            return value*17424/6804;
case 'bighaas':
            return value*17424/14400;
case 'bighawb':
            return value*17424/14348.29;
case 'bigharjp':
            return value*17424/27225;
case 'bigharjk':
            return value*17424/17424;

        default:
            return 0;
    }
}