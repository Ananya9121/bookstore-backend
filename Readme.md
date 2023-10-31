------------Instructions to set up and run the application locally----------------

1. Clone the repo or download zip file
Command: git clone <repository-url>

2. Ones Cloned, run below command to run the project
Command: npm install
Command: npm start


------------------API endpoints and their usage----------------------

1. Create a new book
URL: /bookStore/books
Method: POST
Request Body: {
    "title": "data1",
    "author": "Hello",
    "summary": "new"
}
Response: {
    "title": "data1",
    "author": "Hello",
    "summary": "new",
    "_id": "6540baf7e254ffefa87f25a4",
    "__v": 0
}

2. Get all books
URL: /bookStore
Method: GET
Response:[
    {
        "_id": "653fe1fda8617c5ef483cbad",
        "title": "data1",
        "author": "Hello",
        "summary": "new",
        "__v": 0
    },
    {
        "_id": "653fea9d23cd0f8964be8546",
        "title": "dataxdcfgvbhj",
        "author": "Hellojrythdg",
        "summary": "newryjnthergs",
        "__v": 0
    }
]

3. Get a specific book by ID
URL: /bookStore/:id
Method: GET
Request: /bookStore/653fea9d23cd0f8964be8546
Response: {
        "_id": "653fea9d23cd0f8964be8546",
        "title": "dataxdcfgvbhj",
        "author": "Hellojrythdg",
        "summary": "newryjnthergs",
        "__v": 0
    }

4. Update a book's details
URL: /bookStore/:id
Method: PUT
Request:  /bookStore/653fea9d23cd0f8964be8546
Request Body:{
    "title": "NewData",
    "author": "Hello",
    "summary": "new"
}
Response: {
        "_id": "653fea9d23cd0f8964be8546",
        "title": "NewData",
        "author": "Hello",
        "summary": "new",
        "__v": 0
    }

5. Delete a book
URL: /bookStore/:id
Method: DELETE
Request:  /bookStore/653fea9d23cd0f8964be8546
Request Body:{
    "title": "NewData",
    "author": "Hello",
    "summary": "new"
}
Response:{
    "message": "Book removed"
}
