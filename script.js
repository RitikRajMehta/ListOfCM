// Array of objects representing states, capitals, chief ministers, and photo URLs
var states = [
    { sno: "1.", name: "Andhra Pradesh", capital: "Amaravati", governor: "Biswabhushan Harichandan", cm: "Y.S jagan Mohan Reddy", photo: "andhra.jpg" },
    { sno: "2.", name: "Bihar", capital: "Patna", governor: "Phagu Chauchan", cm: "Nitish Kumar", photo: "bihar.webp" },
    { sno: "3.", name: "Karnataka", capital: "Bengaluru", governor: "Thawar Chand Gehlot", cm: "Basavaraj Bommai", photo: "karanatka.jpg" },
    { sno: "4.", name: "Chhattisgarh", capital: "Raipur", governor: "Anusuiya Uikey", cm: "Bhupesh Bhagel", photo: "chattish.webp" },
    { sno: "5.", name: "Goa", capital: "Panji", governor: "PS Sreedharan Pillai", cm: "Pramod Saswant", photo: "goa.jpg" },
    { sno: "6.", name: "Gujarat", capital: "Gandhinagar", governor: "Acharya Devvrat", cm: "Vijay Rupani", photo: "gujrat.jpg" },
    { sno: "7.", name: "West Bengal", capital: "Kolkata", governor: "Jagdeep Dhankar", cm: "Mamata Banerjee", photo: "wb.jpg" },
    { sno: "8.", name: "Arunachal Pradesh", capital: "Itanagar", governor: "Brigadier B.D B.D Mishra", cm: "Prema Khandu", photo: "arunachal.jpg" },
    { sno: "9.", name: "Assam", capital: "Dispur", governor: "Jagdish Mukhi", cm: "Himanta Biswa Sharma", photo: "assam.webp" },
    { sno: "10.", name: "Haryana", capital: "Chandigarh", governor: "Bandaru Dattatreya", cm: "Manohar Lal Kattar", photo: "haryana.jpg" },
    { sno: "11.", name: "Himachal Pradesh", capital: "Shimla", governor: "Rajendra Vishwanath Arlekar", cm: "JAi Ram Thakur", photo: "himachal.webp" },
    { sno: "12.", name: "Jharkhand", capital: "Ranchi", governor: "Ramesh Bais", cm: "Hemant Soren", photo: "jharkhand.jpg" },
    { sno: "13.", name: "Uttrakhand", capital: "Dehradun", governor: "Baby Rani Maurya", cm: "Shri Pushkar Singh Dhami", photo: "uttrakhand.jpg" },
    { sno: "14.", name: "Kerala", capital: "Thiruvananthpuram", governor: "Arif Mohammed Khan", cm: "Pinarayi Vijayan", photo: "kerla.webp" },
    { sno: "15.", name: "Madhya Pradesh", capital: "Bhopal", governor: "Mangubhai Changanbhai Patel", cm: "Shivraj Singh Chohan", photo: "mp.jpg" },
    { sno: "16.", name: "Maharashtra", capital: "Mumbai", governor: "Bhagat Singh Koshyari", cm: "Uddhav Thackeray", photo: "maharastra.avif" },
    { sno: "17.", name: "Manipur", capital: "Imphal", governor: "Shri La. Ganesan", cm: "N. Biren Singh", photo: "manipur.jpg" },
    { sno: "18.", name: "Meghalaya", capital: "Shillong", governor: "Satya Pal Malik", cm: "Conrad Kongkal Sangma", photo: "meghalaya.avif" },
    { sno: "19.", name: "Mizoram", capital: "Aizwal", governor: "Dr. Kambhampati Haribabu", cm: "Zoramthanga", photo: "mizoram.jpg" },
    { sno: "20.", name: "Nagland", capital: "Kohima", governor: "R.N Ravi", cm: "Neiphiu Rio", photo: "nagland.jpg" },
    { sno: "21.", name: "Odisha", capital: "Bhubneshwar", governor: "Prof. Ganeshi Lal Mathur", cm: "Naveen Patnaik", photo: "oddisa.avif" },
    { sno: "22.", name: "Punjab", capital: "Chandhigarh", governor: "Shri Banwarilal Puohit", cm: "Captain Amrinder Singh", photo: "punjab.webp" },
    { sno: "23.", name: "Rajasthan", capital: "Jaipur", governor: "Kalraj Mishra", cm: "Ashok Gehlot", photo: "rajsthan.jpg" },
    { sno: "24.", name: "Sikkim", capital: "Gangtok", governor: "Ganga Prasad", cm: "Prem Singh Tamang(PS Golay)", photo: "sikkim.jpg" },
    { sno: "25.", name: "Tamil Nadu", capital: "Chennai", governor: "Banwarilal Purohit", cm: "M.K. Stalin", photo: "tamil.jpg" },
    { sno: "26.", name: "Telangana", capital: "Hyderabad", governor: "Dr Tamilisai Soundararajan", cm: "K. Chandrashekhar Rao", photo: "telengana.webp" },
    { sno: "27.", name: "Tripura", capital: "Agartala", governor: "Satyadev Narayan Arya", cm: "Biplab Kumar Deb", photo: "tripura.webp" },
    { sno: "28.", name: "Uttar Pradesh", capital: "Lucknow", governor: "Anandiben Patel", cm: "Yogi Adityanath", photo: "up.avif" },


    // Add more objects as needed
];

// Generate the table rows for states, capitals, chief ministers, and photos
var tableBody = document.getElementById("stateTableBody");

states.forEach(function (state) {
    // Create a table row for each state
    var row = document.createElement("tr");

    var snoCell = document.createElement("td");
    snoCell.textContent = state.sno;
    row.appendChild(snoCell);


    // Create a table cell for the state name
    var stateCell = document.createElement("td");
    stateCell.textContent = state.name;
    row.appendChild(stateCell);

    // Create a table cell for the capital
    var capitalCell = document.createElement("td");
    capitalCell.textContent = state.capital;
    row.appendChild(capitalCell);

    var governorCell = document.createElement("td");
    governorCell.textContent = state.governor;
    row.appendChild(governorCell);

    // Create a table cell for the chief minister
    var cmCell = document.createElement("td");
    cmCell.textContent = state.cm;
    row.appendChild(cmCell);

    // Create a table cell for the photo
    var photoCell = document.createElement("td");
    var photo = document.createElement("img");
    photo.src = state.photo;
    photo.alt = state.cm;
    photo.className = "photo";
    photoCell.appendChild(photo);
    row.appendChild(photoCell);

    // Append the row to the table body
    tableBody.appendChild(row);
});
