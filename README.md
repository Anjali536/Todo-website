#  Todo Manager — Simple & Smart Task Organizer

A clean and functional **React + Recoil** based Todo application to manage daily tasks efficiently.  
You can **add, search, archive, and delete tasks** with a simple and responsive UI, powered by a Django REST API backend.

---

## Features
-  **Add & View Todos** — Keep track of tasks with titles & descriptions.
-  **Search Filter** — Quickly find todos by title.
-  **Archive Feature** — Hide completed or old tasks without deleting them.
-  **Delete Function** — Remove tasks permanently with one click.
-  **Responsive UI** — Works smoothly across devices.
-  **Real-time Updates** — Task list updates instantly after any action.

---

## 🛠 Tech Stack
**Frontend:**
- React.js
- HTML
- CSS
- JavaScript
- Json
- Tailwind CSS
- Recoil (state management)
- Material UI Icons

**Backend:**
- Django
- Django REST Framework
- Python
- dbSqlite3
- SQL

**API Communication:**
- Fetch API

## 📂 Project Structure
frontend/
├── src/
│ ├── components/
│ ├── recoil/
│ ├── App.js
│ ├── index.js

backend/
├── manage.py
├── app/
│ ├── models.py
│ ├── views.py
│ ├── urls.py

## Setup Backend (Django)
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

## Setup Frontend (React)
cd frontend
npm install
npm start


