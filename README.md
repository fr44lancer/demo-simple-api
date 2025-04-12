# Armenian Data Management System

A comprehensive data management system for Armenian citizen data, featuring an admin panel with CRUD operations and a public API interface.

## Features

- **User-Friendly Admin Panel**: Manage person records, addresses, and documents
- **Armenian-Specific Data Model**: Supports fields relevant to Armenian citizens including patronymic names, passport details, and more
- **REST API for External Use**: Public API endpoints for integration with other systems
- **Producer/Consumer Architecture**: Separate interfaces for data management and data consumption
- **Responsive UI**: Works on desktop, tablet, and mobile devices

## Technology Stack

- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express.js (Node.js)
- **Database**: PostgreSQL with Drizzle ORM
- **API**: RESTful API with pagination, filtering, and sorting

## Screenshots

### Admin Panel (Producer Interface)
![Admin Panel - Person Management]
The admin panel provides a clean interface for managing person records with comprehensive filtering options.

### API Consumer Interface
![API Consumer Interface]
The API consumer interface allows for easy testing and integration with the system's API endpoints.

### Data Entry Form
![Data Entry Form]
Customized forms for Armenian data with specialized fields for passports, certificates, and personal information.

## Installation

### Prerequisites
- Node.js (v18 or newer)
- PostgreSQL (v14 or newer)
- npm or yarn package manager

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/armenian-data-management.git
   cd armenian-data-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/armenian_data_db
   ```
   (Replace with your own PostgreSQL credentials)

4. **Initialize Database**
   ```bash
   npm run db:push
   ```

5. **Seed the Database (Optional)**
   ```bash
   npm run seed
   ```

6. **Start the Application**
   ```bash
   npm run dev
   ```

7. **Access the Application**
   Open your browser and navigate to:
   - Admin Panel: http://localhost:5000
   - API Documentation: http://localhost:5000/documentation

## API Endpoints

### Producer API (External)

- `GET /api/producer/v1/persons` - Get a list of persons with pagination and filtering

Query parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search by name (first name, last name, patronymic)
- `genus` - Filter by genus ("male" or "female")
- `isDead` - Filter by living status (true/false)
- `sortBy` - Field to sort by (e.g., "firstName", "lastName")
- `sortOrder` - Sort order ("asc" or "desc")

### Admin API (Internal)

Comprehensive CRUD operations for the following resources:
- `/api/persons` - Person management
- `/api/addresses` - Address management 
- `/api/documents` - Document management

## License
MIT