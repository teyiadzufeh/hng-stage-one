# Stage Two

## Description

This is a Node.js project created by Teyi Adzufeh for the HNG Stage One and Two of the Backend Track.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/teyiadzufeh/hng-stage-one.git`
2. Navigate to the project directory: `cd hng-stage-one`
3. Install the dependencies: `npm install`

## Usage

To start the development server, use the following command:

```
npm run dev
```

This will start the server on `http://localhost:3000`.

The hosted server is: `https://hng-stage-one-4vem.onrender.com`.

## Scripts

- `npm run dev`: Starts the development server using `nodemon` for automatic restart on file changes.
- `npm start`: Starts the production server

## Dependencies Explained
- express: NodeJS Framework used for creating Web APIs
- mongoose and mongodb: Used for connecting to the database as well as managing the database
- nanoid: For generating a random string used in creating the "user_id"
- dotenv: Provides the option of using a file (.env) to store sensitive variables

## API Documentation
Each route can be found in the [routes/index.js](./routes/index.js) file.
A Postman Doc has also been created, with further details on each endpoint provided :
[Teyi Adzufeh's Stage Two Doc](https://documenter.getpostman.com/view/20140877/2s9YC2ytCS)

The UML Diagram for this task can be found in this link: [Teyi Adzufeh's Stage Two UML Diagram](https://drive.google.com/file/d/13IEnQ_NXOnjiG5MiDUD-Qv24m9clpLM4/view?usp=sharing)

## Author

This project is authored by Teyi Adzufeh.

## License

This project is licensed under the ISC License.