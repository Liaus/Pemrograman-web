function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // ubah tinggi dari cm ke meter
  
    if (isNaN(weight) || isNaN(height) || height === 0) {
      document.getElementById("bmi-result").innerHTML =
        "<p>Masukkan berat dan tinggi yang valid.</p>";
      return;
    }
  
    const bmi = weight / (height * height); // Rumus BMI
  
    let category = "";
  
    if (bmi < 18.5) {
      category = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Kelebihan Berat Badan";
    } else {
      category = "Obesitas";
    }
  
    document.getElementById("bmi-result").innerHTML = `
      <p>BMI Anda: ${bmi.toFixed(2)}</p>
      <p>Kategori: <strong>${category}</strong></p>
    `;

    
  }
  