const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 600;
canvas.height = 800;

// Game state variables
let player;
let bullets = [];
let enemies = [];
let enemyBullets = [];
let score = 0;

// Key press tracking
const keys = {
    left: false,
    right: false,
    space: false
};

