import "reflect-metadata";
import express from "express";

const app = express();

app.listen(4000, function() {
	console.log("Server running on port 4000")
});