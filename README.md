# IT Helpdesk System

This project is a self-hosted IT helpdesk system built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It is designed to operate on an intranet and is modular for future expansions, including inventory management, employee collaboration, and business process automation.

## Features

### Helpdesk Functionality
- **Ticket Management**: Users can create, track, and update tickets.
- **User Roles**: Role-specific functionalities for Admins, support agents, and end users.
- **Authentication**: Secure login using JWT with role-based access control (RBAC).

### IT Asset Tracking Module
- **Asset Information**: Track IT assets with unique IDs, specifications, purchase details, operational status, and repair history.
- **Clone PC Management**: Manage clone PCs as individual asset entries and track spare parts.
- **Repair Tracking**: Log repair details and operational locations.
- **User Assignment**: Assign users to assets and maintain historical records.

## Database Structure
The application uses MongoDB with the following collections:
- **Assets**: Metadata about IT assets and components.
- **Parts**: Spare parts for clone PCs.
- **Repairs**: Log of all repair activities.
- **Users**: Links assets to current and previous users.

## Frontend
The frontend is built with React.js and includes:
- Components for managing IT assets, repairs, and users.
- Context for authentication state management.
- Custom hooks for authentication logic.

## Backend
The backend is built with Express.js and Node.js, providing APIs for:
- CRUD operations on assets, spare parts, and repairs.
- Tracking asset transfers and fetching user assignments.

## Real-Time Features
Utilizes Socket.IO for notifications on asset status changes.

## Deployment
The application is containerized using Docker for self-hosting on an internal intranet with HTTPS for secure communication.

## Future Expansion
- **Inventory Management**: Manage consumable IT supplies.
- **Collaboration Tools**: Add chat functionality for asset-related discussions.
- **Business Process Automation**: Automate tasks like reminders for warranty expiration.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `client` and `server` directories and install dependencies using `npm install`.
3. Set up the MongoDB database and configure the connection in `server/src/utils/db.ts`.
4. Run the server and client applications.

## Usage Guidelines
- Access the application through the intranet URL.
- Use the provided login and registration forms to access the helpdesk functionalities.

## License
This project is licensed under the MIT License.