require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request made to: ${req.url}`);
  next();
};
app.use(requestLogger);

app.use(express.static('public'));

// --- Base Routes ---
app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});


// --- Student Management API Database & Routes ---

let students = [
  {
    id: 1,
    name: "Amad Tech",
    email: "amaduconteh@gmail.com",
    date_of_birth: "23/12/2005",
    field_of_study: "Biology",
    enrolment_date: "5/01/2025",
    status: "Active"
  },
  {
    id: 2,
    name: "Abubakarr Lansana",
    email: "lansanabakarr@gmail.com",
    date_of_birth: "15/12/2005",
    field_of_study: "HFM",
    enrolment_date: "2025",
    status: "Active"
  },
  {
    id: 3,
    name: "Yakuba Kamara",
    email: "kamarajaluba770@gmail.com",
    date_of_birth: "6/11/2004",
    field_of_study: "B AM",
    enrolment_date: "2025",
    status: "Active"
  },
  {
    id: 4,
    name: "Kelvin A. Fornah",
    email: "kevinafornah226@gmail.com",
    date_of_birth: "24/9/2007",
    field_of_study: "B AM",
    enrolment_date: "2025",
    status: "Active"
  },
  {
    id: 5,
    name: "Reven Virel",
    email: "reubencirel@gmail.com",
    date_of_birth: "26/05/2003",
    field_of_study: "Physics",
    enrolment_date: "2025",
    status: "Active"
  }
];

// GET: Retrieve all students
app.get('/api/students', (req, res) => {
  res.json({
    success: true,
    count: students.length,
    data: students
  });
});

// POST: Register a new student
app.post('/api/students', (req, res) => {
  const { name, email, date_of_birth, field_of_study, enrolment_date } = req.body;

  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Missing required data: name and email are required.' 
    });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    date_of_birth: date_of_birth || 'N/A',
    field_of_study: field_of_study || 'Unassigned',
    enrolment_date: enrolment_date || '2025',
    status: 'Active'
  };

  students.push(newStudent);
  res.status(201).json({
    success: true,
    message: 'Student registered successfully',
    data: newStudent
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});