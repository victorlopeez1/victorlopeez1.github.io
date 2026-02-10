function assessRisk() {
    const text = document.getElementById("inputData").value.toLowerCase();
    let score = 0;

    const indicators = [
        "crack", "keygen", "exe", "powershell",
        "macro", "admin", "payload", "backdoor"
    ];

    indicators.forEach(word => {
        if (text.includes(word)) score++;
    });

    let result = "🟢 Riesgo Bajo";
    if (score >= 2) result = "🟡 Riesgo Medio";
    if (score >= 4) result = "🔴 Riesgo Alto";

    document.getElementById("result").innerText =
        `Resultado del análisis: ${result} (indicadores detectados: ${score})`;
}
