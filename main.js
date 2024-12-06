function createCalculator() {
    // Kalkulyator konteyneri
    const calculatorContainer = document.createElement('div');
    calculatorContainer.style.fontFamily = 'Arial, sans-serif';
    calculatorContainer.style.background = 'linear-gradient(135deg, #84fab0, #8fd3f4)';
    calculatorContainer.style.padding = '100px';
    calculatorContainer.style.borderRadius = '20px';
    calculatorContainer.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    calculatorContainer.style.textAlign = 'center';
    calculatorContainer.style.width = '90%';
    calculatorContainer.style.maxWidth = '800px';
    calculatorContainer.style.margin = 'auto';
    calculatorContainer.style.marginTop = '50px';
    calculatorContainer.style.opacity = 0; // Yashirish
    calculatorContainer.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; // Animatsiya qo'shish
    calculatorContainer.style.transform = 'scale(0.8)'; // Kichiklashtirib qo'yish
    document.body.appendChild(calculatorContainer);

    // Kalkulyatorni paydo qilish animatsiyasi
    setTimeout(() => {
        calculatorContainer.style.opacity = 1;
        calculatorContainer.style.transform = 'scale(1)';
    }, 100); // Kalkulyatorni 100ms dan keyin ko'rsatsin

    // Sarlavha
    const title = document.createElement('h1');
    title.textContent = 'Kalkulyator';
    title.style.fontSize = '50px';
    title.style.color = 'white';
    title.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
    title.style.marginBottom = '30px';
    calculatorContainer.appendChild(title);

    // Hisoblash tugmasi
    const button = document.createElement('button');
    button.textContent = 'Hisoblash';
    button.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
    button.style.color = '#fff';
    button.style.padding = '20px 50px';
    button.style.border = 'none';
    button.style.borderRadius = '25px';
    button.style.fontSize = '18px';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
    button.style.transition = 'transform 0.2s ease'; // Tugma uchun animatsiya
    calculatorContainer.appendChild(button);

    // Tugma bosilganda animatsiya
    button.addEventListener('click', function () {
        button.style.transform = 'scale(0.95)';
        setTimeout(function () {
            button.style.transform = 'scale(1)';
        }, 200);

        let num1 = parseFloat(prompt("1-raqamni kiriting:"));
        if (isNaN(num1)) {
            alert("Iltimos, raqam kiriting!");
            return;
        }

        let choice = prompt("Amalni tanlang: \n1) +\n2) -\n3) *\n4) /");
        if (!["1", "2", "3", "4"].includes(choice)) {
            alert("Noto'g'ri amal tanlandi!");
            return;
        }

        let num2 = parseFloat(prompt("2-raqamni kiriting:"));
        if (isNaN(num2)) {
            alert("Iltimos, raqam kiriting!");
            return;
        }

        let result;
        let operation = "";
        let description = "";

        switch (choice) {
            case "1":
                result = num1 + num2;
                operation = "+";
                description = "Biz bularni qo'shdik";
                break;
            case "2":
                result = num1 - num2;
                operation = "-";
                description = "Biz bularni ayirdik";
                break;
            case "3":
                result = num1 * num2;
                operation = "*";
                description = "Biz bularni ko'paytirdik";
                break;
            case "4":
                if (num2 === 0) {
                    alert("0 ga bo'lish mumkin emas!");
                    return;
                }
                result = num1 / num2;
                operation = "/";
                description = "Biz bularni bo'ldik";
                break;
        }

        // Natijani ko'rsatish
        const resultContainer = document.createElement('div');
        resultContainer.style.marginTop = '20px';
        resultContainer.style.padding = '20px';
        resultContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        resultContainer.style.borderRadius = '10px';
        resultContainer.style.display = 'none'; // Yashirish
        resultContainer.style.opacity = 0;
        resultContainer.style.transition = 'opacity 0.5s ease-out';
        calculatorContainer.appendChild(resultContainer);
        const resultText = document.createElement('p');
        resultText.style.fontSize = '20px';
        resultText.style.color = '#333';
        resultText.style.fontWeight = 'bold';
        resultContainer.appendChild(resultText);

        resultText.textContent = `${num1} ${operation} ${num2} = ${result}`;
        resultContainer.style.display = "block";
        setTimeout(function () {
            resultContainer.style.opacity = 1;
        }, 100); // Natijani paydo qilish

        // Amalni tarixga qo'shish
        const historyContainer = document.createElement('div');
        historyContainer.style.marginTop = '20px';
        historyContainer.style.textAlign = 'left';
        historyContainer.style.padding = '15px';
        historyContainer.style.backgroundColor = '#f9f9f9';
        historyContainer.style.borderRadius = '10px';
        historyContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        calculatorContainer.appendChild(historyContainer);

        const historyTitle = document.createElement('h3');
        historyTitle.textContent = 'Amallar tarixi:';
        historyTitle.style.fontSize = '20px';
        historyTitle.style.color = '#333';
        historyContainer.appendChild(historyTitle);

        const historyList = document.createElement('ul');
        historyList.style.listStyle = 'none';
        historyList.style.padding = '0';
        historyContainer.appendChild(historyList);

        const historyItem = document.createElement('li');
        historyItem.textContent = `${description}: ${num1} ${operation} ${num2} = ${result}`;
        historyItem.style.marginBottom = '10px';
        historyItem.style.fontSize = '16px';
        historyItem.style.opacity = 0;
        historyItem.style.transition = 'opacity 0.5s ease-out';
        historyList.appendChild(historyItem);

        // Tarix ro'yxatidagi elementni paydo qilish animatsiyasi
        setTimeout(function () {
            historyItem.style.opacity = 1;
        }, 100);
    });

    // Kalkulyatorni ekranda joylash
    document.body.appendChild(calculatorContainer);
}

createCalculator();
