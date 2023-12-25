# RESTful API Documentation

This documentation provides details on how to use and interact with the RESTful API developed using Node.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>

## 
For Task 7 (Documentation), you need to create a README.md file that provides comprehensive information about your API. Here's a template to get you started:

markdown
Copy code
# RESTful API Documentation

This documentation provides details on how to use and interact with the RESTful API developed using Node.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
Install dependencies:

bash
Copy code
npm install
Running the Server
Start the server with the following command:

bash
Copy code
npm start
The server will be running at http://localhost:5000.

### Important 
Here I have presented List of products in form of artPieces as its title, year, artist and imageUrl.
The id of the artPieces are unique and auto incremented for every new art piece. It is not provided in the request for creating a new art piece.

# API Endpoints
1. Retrieve a List of Products(artPieces)
Endpoint: GET /api/artPieces

Description: Retrieve a list of all products(artPieces).

Example Request:

bash
Copy code
curl http://localhost:5000/api/artPieces
Example Response:

json
Copy code
[
 {
    "id": 2,
    "title": "coding ",
    "artist": "mohan",
    "year": "2023",
    "imageUrl": "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY327_FMwebp_QL65_.jpg"
}
  // ... other products
]
2. Retrieve Details of a Specific Product(artPieces)
Endpoint: GET /api/artPieces/:id

Description: Retrieve details of a specific product by ID.

Example Request:

bash
Copy code
curl http://localhost:5000/api/artPieces/1
Example Response:

json
Copy code
{
    "id": 1,
    "title": "coding251 ",
    "artist": "moha4n1",
    "year": "20241",
    "imageUrl": "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY327_FMwebp_QL65_.jpg"
}

3. Create a New Product(artPieces)
Endpoint: POST /api/artPieces

Description: Create a new product(artPieces).

Example Request:

bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{ "title" :" My coding ",
    "year":"2024",
    "artist":"rahul",
    "imageUrl": "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY327_FMwebp_QL65_.jpg"}' http://localhost:5000/api/artPieces
Example Response:

json
Copy code
{
   "title" :" My coding ",
    "year":"2024",
    "artist":"rahul",
    "imageUrl": "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY327_FMwebp_QL65_.jpg"
}
4. Update Details of a Specific Product(artPieces)
Endpoint: PUT /api/artPieces/:id

Description: Update details of a specific product(artPieces) by ID.

Example Request:

bash
Copy code
curl -X PUT -H "Content-Type: application/json" -d '{"artist": "mohan"}' http://localhost:5000/api/artPieces/2
Example Response:

json
Copy code
{
    "title" :" My coding ",
    "year":"2024",
    "artist":"mohan",
    "imageUrl": "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY327_FMwebp_QL65_.jpg"
}
5. Delete a Product(artPieces)
Endpoint: DELETE /api/artPieces/:id

Description: Delete a product(artPieces) by ID.

Example Request:

bash
Copy code
curl -X DELETE http://localhost:5000/api/artPieces/2
Example Response:

json
Copy code
{
    "title" :" My coding ",
    "year":"2024",
    "artist":"mohan",
    "imageUrl": "https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY327_FMwebp_QL65_.jpg"
}
### Middleware
A middleware function has been implemented to log the timestamp, HTTP method, and requested URL for every request.








