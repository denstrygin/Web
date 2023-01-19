"use strict";
import '../src/styles/styles.css'
import './babel.js'
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("./post");
const post = new post_1.Post('Webpack post title');
console.log('Post to String: ', post.toString());
