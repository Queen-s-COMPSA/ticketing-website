# Ticketing API Documentation

## Tickets

### **Create New Ticket**

- **Endpoint**: `/ticket`
- **Method**: `POST`
- **Parameters**:
  - `eventId`: The ID of the event for which the ticket is being created (required).
  - `email`: Email of the person buying the ticket (required).
  - `name`: Name of the person buying the ticket (required).
- **Response**:
  - A JSON object representing the newly created ticket.
- **Possible Errors**:
  - `400`: Event not available or tickets sold out.
  - `500`: Error creating ticket.

### **Get Existing Tickets by Email**

- **Endpoint**: `/ticket`
- **Method**: `GET`
- **Query Parameters**:
  - `email`: Email of the ticket holder (required).
- **Response**:
  - A JSON array of tickets associated with the given email.
- **Possible Errors**:
  - `500`: Error fetching tickets.

### **Validate Ticket**

- **Endpoint**: `/ticket/:id/validate`
- **Method**: `PUT`
- **Path Parameters**:
  - `id`: The ID of the ticket to be validated.
- **Response**:
  - A JSON object with a success message, ticket owner name, and ticket owner email.
- **Possible Errors**:
  - `400`: Ticket already validated.
  - `404`: Ticket not found.
  - `500`: Error validating ticket.

## Events

### **Create New Event**

- **Endpoint**: `/event`
- **Method**: `POST`
- **Parameters**: Event object including properties like name, description, date, location, price, totalTickets, etc.
- **Response**:
  - A JSON object representing the newly created event.
- **Possible Errors**:
  - `500`: Error creating event.

### **Change Event Status**

- **Endpoint**: `/event/:id/status`
- **Method**: `PUT`
- **Path Parameters**:
  - `id`: The ID of the event to be updated.
- **Parameters**:
  - `status`: The new status for the event (required).
- **Response**:
  - A JSON object representing the updated event.
- **Possible Errors**:
  - `404`: Event not found.
  - `500`: Error updating event status.

### **Delete Existing Event**

- **Endpoint**: `/event/:id`
- **Method**: `DELETE`
- **Path Parameters**:
  - `id`: The ID of the event to be deleted.
- **Response**:
  - A success message.
- **Possible Errors**:
  - `404`: Event not found.
  - `500`: Error deleting event.

### **Get All Events**

- **Endpoint**: `/events`
- **Method**: `GET`
- **Response**:
  - A JSON array representing all events.
- **Possible Errors**:
  - `500`: Error fetching events.

### **Get Specific Event by ID**

- **Endpoint**: `/event/:id`
- **Method**: `GET`
- **Path Parameters**:
  - `id`: The ID of the event to be retrieved.
- **Response**:
  - A JSON object representing the event.
- **Possible Errors**:
  - `404`: Event not found.
  - `500`: Error fetching event.
