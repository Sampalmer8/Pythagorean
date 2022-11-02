// Input

document.getElementById("hypotBtn").addEventListener("click", hypotClicked);

// Process

function hypotClicked() {
    
    let leg1 = +document.getElementById("leg1").value;
    let leg2 = +document.getElementById("leg2").value;

    let hypot = Math.sqrt((leg1**2) + (leg2**2));
    // Output
    document.getElementById("output").innerHTML = hypot;
}
