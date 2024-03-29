###  ->Attendance System<-
We need an attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have a timesheet of attendace.Student can see their own time logs and attend button when enabled.

**Functional Requriements:**

**Admin**
- Admin can create student
- Admin can delete, update or check students information
- Admin can change status of a student
- Admin can check time sheet of a student
- Admin can enable or disable attendance button
- Admin can check stats of a given day

**Student**
- Student can register themselve
- There will be following account status for a students -
    - Pending
    - Active
    - Reject
- User can login with their credentials
- Pending & Rejected users won’t have anything in their profile
- Active users can update their profile info
    - First Name
    - Last Name
    - Email
    - Phone No
    - Profile Picture
- Active users can change / update password
- Active users can see their timesheet
    - Calendar view
    - List View
    - Table View
- Active users can participate in attendance system
- User can logout


## Requirement Analysis

**Models:**

*User*
- Name
- Email
- Password
- Roles
- AccountStatus

*Profile*
- First Name
- Last Name
- Phone No
- Profile Picture
- UserId

*StudentAttandance*
- UserId
- CreatedAt: DateTime
- AdminAttandanceID

*AdminAttandance*
- CreatedAt: DateTime
- Status
- TimeLimit

**Endpoints**

**Student Endpoints**

- POST /auth/login [public]
- POST /auth/register [public]
- PATCH /profiles [private]
- PATCH /profiles/avatar [private]
- PUT /auth/change-password [private]
- GET /timesheet [private]
- GET /attendance [private]
- GET /attendanceStatus [private]

**Admin Endpoints:**

- GET /users [private]
- POST /users [private]
- PATCH /users/userId [private]
- DELETE /users/userId [private]
- GET /users/userId [private]
- GET /profiles [private]
- POST /profiles [private]
- PATCH /profiles/profileId [private]
- DELETE /profiles/profileId [private]
- GET /profiles/profileId [private]
- GET /timesheet/userId [private]
- GET /timesheet/stats
- POST /attendace/enable [private]
- GET /attendance/disabled/:attendanceId [private]

## Technology that I used in this project:
 - I used Expressjs as a backend server 
 - Mongoose with MongoDB database
 - JWT for authentication validator
 - Bcryptjs for hashing and verify password
 - Date-fns for date and time stamps
 - Nodemon for automatically server restart when it detects any changes
Pagination, sorting, filtering and frontend will implement later..

## install and run this project:
 - Clone this repository and run in GitBush or command window git clone <repo-link>
 - cd <project-name>
 - yarn
 - yarn run dev
 

