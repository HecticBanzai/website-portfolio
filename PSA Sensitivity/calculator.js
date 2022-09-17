const lower_button = document.getElementById("lower");
const higher_button = document.getElementById("higher");
const confirm_button = document.getElementById("confirm-base-sens");
const overlay = document.querySelector("#overlay");
const close_modal = document.querySelector("#close-modal");
var sens_table = document.getElementById("sens-table");

function add_sens_row(base_sens, lower_multiplier, higher_multiplier) {
  var table_length = sens_table.rows.length;
  
  var row = sens_table.insertRow(table_length);
  var lower = row.insertCell(0);
  var base = row.insertCell(1);
  var higher = row.insertCell(2);
  
  lower.innerHTML = parseFloat((Math.round(base_sens * lower_multiplier * 100) / 100)).toFixed(2) + "";
  base.innerHTML = parseFloat(base_sens).toFixed(2) + "";
  higher.innerHTML = parseFloat((Math.round(base_sens * higher_multiplier * 100) / 100)).toFixed(2) + "";
}

function reset() {
  lower_multiplier = 0.5;
  higher_multiplier = 1.5;

  if (sens_table.rows.length > 1) {
    for (var i = 1; i < sens_table.rows.length;){
      sens_table.deleteRow(i);
    }
  }
}

confirm_button.onclick = function() {
  var base_sens = document.getElementById("base-sens").value;

  reset()

  add_sens_row(base_sens, lower_multiplier, higher_multiplier)
}

close_modal.onclick = function() {
  overlay.style.display = "none";
  reset()
}

lower_button.addEventListener('click', () => {
  var table_length = sens_table.rows.length;
  var current_base_sens = parseFloat(sens_table.rows[table_length - 1].cells[1].innerHTML)
  var current_lower_sens = parseFloat(sens_table.rows[table_length - 1].cells[0].innerHTML)
  
  var average = Math.floor(100 * ((current_base_sens + current_lower_sens) / 2))/100;

  if (lower_multiplier != 1.0 && higher_multiplier != 1.0) {
    if (sens_table.rows.length > 1) {
      add_sens_row(average, lower_multiplier, higher_multiplier)
    }

    if (lower_multiplier < 0.9 && higher_multiplier > 1.1) {
      lower_multiplier += 0.10
      lower_multiplier = parseFloat((Math.round(lower_multiplier * 100) / 100).toFixed(2))
      higher_multiplier -= 0.10
      higher_multiplier = parseFloat((Math.round(higher_multiplier * 100) / 100).toFixed(2))
    }
  
    else {
      lower_multiplier += 0.05
      lower_multiplier = parseFloat((Math.round(lower_multiplier * 100) / 100).toFixed(2))
      higher_multiplier -= 0.05
      higher_multiplier = parseFloat((Math.round(higher_multiplier * 100) / 100).toFixed(2))
    }
  }

  else {
    overlay.style.display = "block";
    document.querySelector("#new-sens").innerHTML = ("Your perfect sensitivity is: <b>" + average + "</b>");
  }
})

higher_button.addEventListener('click', () => {
  var table_length = sens_table.rows.length;
  var current_base_sens = parseFloat(sens_table.rows[table_length - 1].cells[1].innerHTML)
  var current_higher_sens = parseFloat(sens_table.rows[table_length - 1].cells[2].innerHTML)

  var average = Math.floor(100 * ((current_base_sens + current_higher_sens) / 2))/100;

  if (lower_multiplier != 1.0 && higher_multiplier != 1.0) {
    if (sens_table.rows.length > 1) {
      add_sens_row(average, lower_multiplier, higher_multiplier)
    }

    if (lower_multiplier < 0.9 && higher_multiplier > 1.1) {
      lower_multiplier += 0.1
      lower_multiplier = parseFloat((Math.round(lower_multiplier * 100) / 100).toFixed(2))
      higher_multiplier -= 0.1
      higher_multiplier = parseFloat((Math.round(higher_multiplier * 100) / 100).toFixed(2))
    }
  
    else {
      lower_multiplier += 0.05
      lower_multiplier = parseFloat((Math.round(lower_multiplier * 100) / 100).toFixed(2))
      higher_multiplier -= 0.05
      higher_multiplier = parseFloat((Math.round(higher_multiplier * 100) / 100).toFixed(2))
    }
  }

  else {
    overlay.style.display = "block";
    document.querySelector("#new-sens").innerHTML = ("Your perfect sensitivity is: <b>" + average + "</b>");
  }
})