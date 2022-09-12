let turno = "X";
let juegoFinalizado = false;

function colocar(id) {
  if (!juegoFinalizado) {
    if (document.getElementById(id).innerHTML.length === 0) {
      document.getElementById(id).innerHTML = turno;
      obtenerGanador();
      cambiarTurno();
    }
  }
}

function cambiarTurno() {
  if (turno === "X") {
    turno = "O";
  } else {
    turno = "X";
  }
  document.getElementById("turno").innerHTML = turno;
}

function verificarGanador(a, b, c) {
  if (
    document.getElementById(a).innerHTML.length !== 0 &&
    document.getElementById(b).innerHTML.length !== 0 &&
    document.getElementById(c).innerHTML.length !== 0
  ) {
    if (
      document.getElementById(a).innerHTML ===
        document.getElementById(b).innerHTML &&
      document.getElementById(a).innerHTML ===
        document.getElementById(c).innerHTML
    ) {
      document.getElementById(a).className = "rojo";
      document.getElementById(b).className = "rojo";
      document.getElementById(c).className = "rojo";
      return true;
    }
  }
}

function obtenerGanador() {
  //horizontales
  if (
    verificarGanador("pos1", "pos2", "pos3") ||
    verificarGanador("pos4", "pos5", "pos6") ||
    verificarGanador("pos7", "pos8", "pos9") ||
    //verticales
    verificarGanador("pos1", "pos4", "pos7") ||
    verificarGanador("pos2", "pos5", "pos8") ||
    verificarGanador("pos3", "pos6", "pos9") ||
    //diagonales
    verificarGanador("pos1", "pos5", "pos9") ||
    verificarGanador("pos3", "pos5", "pos7")
  ) {
    document.getElementById("ganador").innerHTML = turno;
    juegoFinalizado = true;
    document.getElementById("btnReset").disabled = false;
  } else if (
    document.getElementById("pos1").innerHTML.length === 1 &&
    document.getElementById("pos2").innerHTML.length === 1 &&
    document.getElementById("pos3").innerHTML.length === 1 &&
    document.getElementById("pos4").innerHTML.length === 1 &&
    document.getElementById("pos5").innerHTML.length === 1 &&
    document.getElementById("pos6").innerHTML.length === 1 &&
    document.getElementById("pos7").innerHTML.length === 1 &&
    document.getElementById("pos8").innerHTML.length === 1 &&
    document.getElementById("pos9").innerHTML.length === 1
  ) {
    turno = "Empate";
    document.getElementById("ganador").innerHTML = turno;
    juegoFinalizado = true;
    document.getElementById("btnReset").disabled = false;
  }
}

function reset() {
  window.location.href = window.location.href;
}