function checkLight() {

    // Get the values selected by the user
    let motion = document.getElementById("motion").value;
    let night = document.getElementById("night").value;

    // Propositional logic:
    // (P AND N) -> L

    if (motion === "true" && night === "true") {

        document.getElementById("result").innerHTML =
            "✓ Both P and N are TRUE → Light will turn ON.";

    } else {

        document.getElementById("result").innerHTML =
            "✗ P ∧ N is FALSE → Light will remain OFF.";
    }
}