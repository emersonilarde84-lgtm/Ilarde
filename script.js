const form = document.getElementById("enrollmentForm");
const course = document.getElementById("course");
const majorBox = document.getElementById("majorBox");

course.addEventListener("change", function() {
    if (course.value === "BSIT") {
        majorBox.style.display = "block";
    } else {
        majorBox.style.display = "none";
        document.getElementById("major").value = "";
    }
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;

    const studentId = document.getElementById("studentId").value.trim();
    const prefix = document.getElementById("prefix").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const suffix = document.getElementById("suffix").value.trim();
    const email = document.getElementById("email").value.trim();
    const major = document.getElementById("major").value;
    const yearLevel = document.getElementById("yearLevel").value;

    document.querySelectorAll("small").forEach(function(error) {
        error.textContent = "";
    });

    if (studentId.length < 5) {
        document.getElementById("studentIdError").textContent =
            "Student ID must be at least 5 characters.";
        valid = false;
    }

    if (prefix !== "" && prefix.length < 2) {
        document.getElementById("prefixError").textContent =
            "Prefix must be at least 2 characters.";
        valid = false;
    }

    if (firstName.length < 3) {
        document.getElementById("firstNameError").textContent =
            "First name must be at least 3 characters.";
        valid = false;
    }

    if (middleName !== "" && middleName.length < 2) {
        document.getElementById("middleNameError").textContent =
            "Middle name must be at least 2 characters.";
        valid = false;
    }

    if (lastName.length < 2) {
        document.getElementById("lastNameError").textContent =
            "Last name must be at least 2 characters.";
        valid = false;
    }

    if (suffix !== "" && suffix.length < 2) {
        document.getElementById("suffixError").textContent =
            "Suffix must be at least 2 characters.";
        valid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email.";
        valid = false;
    }

    if (course.value === "") {
        document.getElementById("courseError").textContent =
            "Please select a course.";
        valid = false;
    }

    if (course.value === "BSIT" && major === "") {
        document.getElementById("majorError").textContent =
            "Please select a major.";
        valid = false;
    }

    if (yearLevel === "") {
        document.getElementById("yearError").textContent =
            "Please select a year level.";
        valid = false;
    }

    if (!valid) {
        return;
    }

    let fullName = "";

    if (prefix !== "") {
        fullName += prefix + " ";
    }

    fullName += firstName + " ";

    if (middleName !== "") {
        fullName += middleName + " ";
    }

    fullName += lastName;

    if (suffix !== "") {
        fullName += " " + suffix;
    }

    const row = document.createElement("tr");

    row.innerHTML =
        "<td>" + studentId + "</td>" +
        "<td>" + fullName + "</td>" +
        "<td>" + email + "</td>" +
        "<td>" + course.value + "</td>" +
        "<td>" + (course.value === "BSIT" ? major : "N/A") + "</td>" +
        "<td>" + yearLevel + "</td>";

    document.getElementById("tableBody").appendChild(row);

    document.getElementById("successMessage").textContent =
        "Enrollment submitted successfully!";

    form.reset();
    majorBox.style.display = "none";
});
