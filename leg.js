// Input

document.getElementById("legBtn").addEventListener("click", legClicked);

// Process

function legClicked() {
    
    let leg = +document.getElementById("leg").value;
    let hypot = +document.getElementById("hypot").value;

    let leg2 = Math.sqrt((hypot**2) - (leg**2));
    // Output
    document.getElementById("output").innerHTML = leg2;
}