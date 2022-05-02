import express from 'express';
import CreateCourseService from './CreateCourseService';
import { createCourse } from './routes';

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "Hello World Ignite!"});
});

app.get("/create", createCourse);

app.listen(3333);