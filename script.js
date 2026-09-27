* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 30px;
}

.container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

h2 {
    text-align: center;
    margin-top: 35px;
}

.form-row {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
}

.form-group {
    flex: 1;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input,
select {
    width: 100%;
    height: 40px;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}

small {
    display: block;
    min-height: 18px;
    color: red;
    font-size: 12px;
}

button {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

#successMessage {
    text-align: center;
    color: green;
    font-weight: bold;
}

#majorBox {
    display: none;
}

.table-container {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
}

th,
td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
}

th {
    background-color: #333;
    color: white;
}

@media (max-width: 700px) {

    body {
        padding: 10px;
    }

    .container {
        padding: 20px;
    }

    .form-row {
        flex-direction: column;
        gap: 0;
    }

    .form-group {
        width: 100%;
    }
}
