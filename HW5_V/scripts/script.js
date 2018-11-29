;(function () {
        function Display() {
        }

        Display.prototype.displayMessage = function (str) {
            let message = document.getElementById("message-result");
            message.innerText = str;
            // message.dialog();
        };

        Display.prototype.displayHit = function (location) {
            let element = document.getElementById(location);
            element.setAttribute("class", "hit")
        };

        Display.prototype.displayMiss = function (location) {
            let element = document.getElementById(location);
            element.setAttribute("class", "miss")
        };

        function Ships() {
            this.boardSize = 7;
            this.numShips = 3;
            this.shipLength = 3;
            this.shipsSunk = 0;
            this.ships = [
                // {locations: ["06", "16", "26"], hits: ["", "", ""]},
                // {locations: ["24", "34", "44"], hits: ["", "", ""]},
                // {locations: ["10", "11", "12"], hits: ["", "", ""]}
                {locations: [0, 0, 0], hits: ["", "", ""]},
                {locations: [0, 0, 0], hits: ["", "", ""]},
                {locations: [0, 0, 0], hits: ["", "", ""]}
            ];
        }

        Ships.prototype.fire = function (guess) {
            for (let i = 0; i < this.numShips; i++) {
                let ship = this.ships[i];
                let index = ship.locations.indexOf(guess);
                if (index >= 0) {
                    ship.hits[index] = 'hit';
                    Display.prototype.displayHit(guess);
                    Display.prototype.displayMessage("Hit!");
                    if (this._isSunk(ship)) {
                        Display.prototype.displayMessage("You sunk my battleship!");
                        this.shipsSunk++;
                    }
                    return true;
                }
            }
            Display.prototype.displayMiss(guess);
            Display.prototype.displayMessage("You missed.");
            return false;
        };

        Ships.prototype._isSunk = function (ship) {
            for (let i = 0; i < this.shipLength; i++) {
                if (ship.hits[i] !== 'hit') {
                    return false
                }
            }
            return true
        };

        Ships.prototype.generateShipLocation = function () {
            let locations;
            for (let i = 0; i < this.numShips; i++) {
                do {
                    locations = this._generateShip();
                } while (this._intersection(locations));
                this.ships[i].locations = locations;
            }
            console.log("Ships array: ");
            console.log(this.ships);
        };

        Ships.prototype._generateShip = function () {
            let direction = Math.floor(Math.random() * 2);
            let row, col;
            let newPosition = [];
            if (direction === 1) {
                row = Math.floor(Math.random() * this.boardSize);
                col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            } else {
                row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
                col = Math.floor(Math.random() * this.boardSize);
            }
            for (let i = 0; i < this.shipLength; i++) {
                if (direction === 1) {
                    newPosition.push(row + "" + (col + i));
                } else {
                    newPosition.push((row + i) + "" + col);
                }
            }
            return newPosition;
        };

        Ships.prototype._intersection = function (locations) {
            for (let i = 0; i < this.numShips; i++) {
                let ship = this.ships[i];
                for (let j = 0; j < locations.length; j++) {
                    if (ship.locations.indexOf(locations[j]) >= 0) {
                        return true;
                    }
                }
            }
            return false;
        };

        function Controller(ship) {
            this.guesses = 0;
            this.ship = ship;
        }

        Controller.prototype.processGuess = function (location) {
            if (location) {
                this.guesses++;
                let hit = this.ship.fire(location);
                if (hit && this.ship.shipsSunk === this.ship.numShips) {
                    // Display.prototype.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
                    let message = document.getElementById("dialog");
                    message.innerText = "You sank all my battleships, in " + this.guesses + " guesses";
                    $("#dialog").dialog();
                }
            }
        };

        // let display = new Display();
        let ships = new Ships();
        let controller = new Controller(ships);

        let generateShips = document.getElementById('generate-new-ship-location');
        generateShips.onclick = function () {
            ships.generateShipLocation();
        };
        let table = document.getElementById('table');
        table.onclick = function (event) {
            let target = event.target;
            if (target.tagName !== 'TD') {
                return;
            }
            let id = target.getAttribute('id');
            controller.processGuess(id);
        }
    }
)();
