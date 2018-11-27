;(function () {
        function Display() {
        };

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
                {locations: ["06", "16", "26"], hits: ["", "", ""]},
                {locations: ["24", "34", "44"], hits: ["", "", ""]},
                {locations: ["10", "11", "12"], hits: ["", "", ""]}
            ];

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

        }

        function Controller(ship) {
            this.guesses = 0;
            this.ship = ship;
        }

        Controller.prototype.processGuess = function (location) {
            if (location) {
                this.guesses++;
                let hit = this.ship.fire(location);
                if (hit && this.ship.shipsSunk === this.ship.numShips) {
                    Display.prototype.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
                }
            }
        };

        let display = new Display();
        let ships = new Ships();
        let controller = new Controller(ships);



        let table = document.getElementById('table');
        table.onclick = function (event) {
            // alert("table");
            let target = event.target;

            if (target.tagName !== 'TD') {
                return;
            }

            let id = target.getAttribute('id');

            controller.processGuess(id);
            // ships.fire(id);
        }


    }
)();
