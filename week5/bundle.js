/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/behaviors/player-behavior.ts":
/*!******************************************!*\
  !*** ./src/behaviors/player-behavior.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerMovingBehavior = /** @class */ (function () {
    function PlayerMovingBehavior(gameObject, velocityY) {
        if (velocityY === void 0) { velocityY = 0; }
        this.gameObject = gameObject;
    }
    PlayerMovingBehavior.prototype.move = function (direction) {
        if (direction === void 0) { direction = "right"; }
        if (this.gameObject.health === 0) {
            return;
        }
        if (direction === "right") {
            this.gameObject.body.x += PlayerMovingBehavior.MOVE_VELOCITY_X;
        }
        else if (direction === "left") {
            // this.gameObject.body.anchor.x = 1;
            // this.gameObject.body.scale.x *= -1;
            this.gameObject.body.x -= PlayerMovingBehavior.MOVE_VELOCITY_X;
        }
        else if (direction === "up") {
            this.gameObject.body.y -= PlayerMovingBehavior.WALK_VELOCITY_Y;
        }
        else {
            this.gameObject.body.y += PlayerMovingBehavior.WALK_VELOCITY_Y;
        }
    };
    PlayerMovingBehavior.prototype.dispose = function () {
        this.gameObject = null;
    };
    PlayerMovingBehavior.MOVE_VELOCITY_X = 15;
    PlayerMovingBehavior.WALK_VELOCITY_Y = 15;
    return PlayerMovingBehavior;
}());
exports.PlayerMovingBehavior = PlayerMovingBehavior;


/***/ }),

/***/ "./src/controllers/game-controller.ts":
/*!********************************************!*\
  !*** ./src/controllers/game-controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var game_settings_1 = __webpack_require__(/*! ../models/game-settings */ "./src/models/game-settings.ts");
var obstacles_view_1 = __webpack_require__(/*! ../views/obstacles-view */ "./src/views/obstacles-view.ts");
var world_1 = __webpack_require__(/*! ../models/world */ "./src/models/world.ts");
var player_controller_1 = __webpack_require__(/*! ./player-controller */ "./src/controllers/player-controller.ts");
var obstacles_controller_1 = __webpack_require__(/*! ./obstacles-controller */ "./src/controllers/obstacles-controller.ts");
var button_1 = __webpack_require__(/*! ../game-objects/button */ "./src/game-objects/button.ts");
var sky_1 = __webpack_require__(/*! ../game-objects/sky */ "./src/game-objects/sky.ts");
var GameController = /** @class */ (function () {
    function GameController(view, model) {
        world_1.World.getInstance().stage = view.stage;
        this._view = view;
        this._model = model;
        this.initGameBackground();
        this.initGameIntroButton();
        this.initGameTimerText();
        this.initObestacles();
        this.initPalyer();
        this.initPlayerHealth();
        this.showStartDialog();
        this.setupEvents();
        this._collisionCheckTicker = new pixi_js_1.Ticker();
        this._collisionCheckTicker.add(this.onCollisionCheckTick.bind(this));
        this._collisionCheckTicker.start();
    }
    GameController.prototype.initPalyer = function () {
        this._playerController = new player_controller_1.PlayerController();
    };
    GameController.prototype.restrictPlayer = function (sprite, container) {
        console.log("TCL: GameController -> restrictPlayer -> restrictPlayer");
        if (sprite.x < container.x) {
            sprite.x = container.x;
        }
        if (sprite.y < container.y) {
            sprite.y = container.y;
        }
        if (sprite.x + sprite.width > container.width) {
            sprite.x = container.width - sprite.width;
        }
        if (sprite.y + sprite.height > container.height) {
            sprite.y = container.height - sprite.height;
        }
    };
    GameController.prototype.initObestacles = function () {
        this._obstaclesView = new obstacles_view_1.ObstaclesView();
        this._obstaclesController = new obstacles_controller_1.ObstaclesController(this._obstaclesView);
    };
    GameController.prototype.initGameBackground = function () {
        new sky_1.Sky(world_1.World.getInstance().stage);
    };
    // 遊戲說明問號圖示
    GameController.prototype.initGameIntroButton = function () {
        var _this = this;
        var introIcon = pixi_js_1.Texture.from("icon-help.png");
        var introIconHover = pixi_js_1.Texture.from("icon-help-hover.png");
        var introButton = new pixi_js_1.Sprite(introIcon);
        introButton.scale.set(0.5, 0.5);
        introButton.x =
            game_settings_1.GameSettings.getInstance().gameWidth - introButton.width - 25;
        introButton.y = 25;
        introButton.interactive = true;
        introButton.buttonMode = true;
        introButton
            .on("pointerover", function () {
            introButton.texture = introIconHover;
        })
            .on("pointerout", function () {
            introButton.texture = introIcon;
        })
            .on("pointerdown", function () {
            _this.showGameIntro();
        });
        this._view.stage.addChild(introButton);
    };
    // 遊戲說明
    GameController.prototype.showGameIntro = function () {
        var gameIntro = new pixi_js_1.Sprite(pixi_js_1.Texture.from("./assets/bg-help.png"));
        gameIntro.scale.x = gameIntro.scale.y = this.getSpriteWidthScaleRatio(gameIntro.width * 1.05);
        this._view.stage.addChild(gameIntro);
    };
    // 右上角倒數計時
    GameController.prototype.initGameTimerText = function () {
        var timerBg = new pixi_js_1.Sprite(pixi_js_1.Texture.from("bg-timer.png"));
        timerBg.scale.set(0.5, 0.5);
        timerBg.x = game_settings_1.GameSettings.getInstance().gameWidth - timerBg.width - 50;
        timerBg.y = 50;
        this._gameTime = game_settings_1.GameSettings.getInstance().gameTotalTime;
        this._gameTimeText = new pixi_js_1.Text(this._gameTime.toString(), {
            fontSize: 70,
            fill: 0x34213f,
            fontWeight: "bold"
        });
        this._gameTimeText.anchor.set(0.5, 0.5);
        this._gameTimeText.x = timerBg.x + timerBg.width / 2;
        this._gameTimeText.y = timerBg.y + timerBg.height / 2;
        this._view.stage.addChild(timerBg, this._gameTimeText);
    };
    GameController.prototype.timerReducer = function (time, text) {
        var _this = this;
        var counter = setInterval(function () {
            console.log("TCL: GameController -> counter -> time", time);
            if (time > 1) {
                time -= 1;
                text.text = time.toString();
            }
            else {
                console.log("TCL: GameController -> counter -> time", time);
                _this.timerEnds();
            }
        }, 1000);
        return counter;
    };
    GameController.prototype.timerEnds = function () {
        clearInterval(this.timerReducer());
        this._obstaclesController.stopMoving();
    };
    GameController.prototype.initCountDownText = function () {
        this._gameStartCount = game_settings_1.GameSettings.getInstance().gameStartCount;
        this._gameStartCountText = new pixi_js_1.Text(this._gameStartCount.toString(), {
            fontSize: 250,
            fill: 0xffffff,
            fontWeight: "bold"
        });
        var gameWidth = game_settings_1.GameSettings.getInstance().gameWidth;
        var gameHeight = game_settings_1.GameSettings.getInstance().gameHeight;
        this._gameStartCountText.position.set(gameWidth / 2 - this._gameStartCountText.width / 2, gameHeight / 2 - this._gameStartCountText.height / 2);
        this._view.stage.addChild(this._gameStartCountText);
        this.updateCountDown();
    };
    GameController.prototype.onPlayerHit = function () {
        this._model.damageHealth(2);
    };
    GameController.prototype.updateCountDown = function () {
        var _this = this;
        var counter = setInterval(function () {
            if (_this._gameStartCount > 1) {
                _this._gameStartCount -= 1;
                _this._gameStartCountText.text = _this._gameStartCount.toString();
            }
            else {
                _this._gameStartCountText.visible = false;
                _this.startCountDownEnd();
            }
        }, 1000);
        return counter;
    };
    GameController.prototype.startCountDownEnd = function () {
        clearInterval(this.updateCountDown());
        this._gameOverlay.visible = false;
        this.timerReducer(this._gameTime, this._gameTimeText); // 開始倒數計時
        this._obstaclesController.startMoving(); // 障礙物開始移動
    };
    GameController.prototype.initGameOverlay = function () {
        // 遮罩
        this._gameOverlay = new pixi_js_1.Graphics();
        this._gameOverlay.beginFill(0x34213f, 0.9);
        this._gameOverlay.drawRect(0, 0, game_settings_1.GameSettings.getInstance().gameWidth, game_settings_1.GameSettings.getInstance().gameHeight);
        this._gameOverlay.endFill();
        this._view.stage.addChild(this._gameOverlay);
    };
    GameController.prototype.showStartDialog = function () {
        var _this = this;
        this.initGameOverlay();
        var dialogContainer = new pixi_js_1.Container();
        var dialog = new pixi_js_1.Sprite(pixi_js_1.Texture.from("message-bubble.png"));
        dialog.scale.set(0.5, 0.5);
        dialogContainer.x = game_settings_1.GameSettings.getInstance().gameWidth / 2;
        dialogContainer.y = game_settings_1.GameSettings.getInstance().gameHeight / 2;
        dialogContainer.pivot.x = dialog.width / 2;
        dialogContainer.pivot.y = dialog.height / 2;
        // 說明文字
        var startTextStyle = new pixi_js_1.TextStyle({
            fill: "#6C488B",
            lineHeight: 25,
            wordWrap: true,
            wordWrapWidth: dialogContainer.width,
            align: "center",
            letterSpacing: 5
        });
        var startText = new pixi_js_1.Text("也許是在世界惡意的捉弄下，\n一不小心投錯胎的你，\n才剛創角就出生在危機四伏的魔王城裡。\n別說是攻擊了，\n光是被魔物察覺到就足以讓人致命！\n萬幸的是你的存在感十分低落，\n90秒內想辦法避開路上的敵人，\n毫髮無傷地逃回新手村吧！", startTextStyle);
        startText.x = dialog.width / 2 - startText.width / 2;
        startText.y = dialog.height / 2 - startText.height / 2;
        // 開始遊戲按鈕
        var startButton = new button_1.Button(true, "開始遊戲");
        startButton.x = dialog.width / 2;
        startButton.y = dialog.height - startButton.height;
        startButton.pivot.set(startButton.width / 2, startButton.height);
        dialogContainer.addChild(dialog, startText, startButton);
        this._view.stage.addChild(dialogContainer);
        startButton.on("pointerdown", function () {
            dialogContainer.visible = false;
            _this.initCountDownText();
        });
    };
    GameController.prototype.initProgressBar = function () { };
    GameController.prototype.initPlayerHealth = function () {
        this._playerHealth = new pixi_js_1.Container();
        for (var i = 0; i < game_settings_1.GameSettings.getInstance().playerStartingHealth; i++) {
            var heart = new pixi_js_1.Sprite(pixi_js_1.Texture.from("icon-hp-on.png"));
            heart.scale.set(0.5, 0.5);
            heart.x =
                100 +
                    (i % game_settings_1.GameSettings.getInstance().playerStartingHealth) *
                        heart.width;
            heart.y = 100;
            this._playerHealth.addChild(heart);
        }
        this._view.stage.addChild(this._playerHealth);
    };
    GameController.prototype.updatePlayerHealth = function (point) {
        // 根據 model 內的 health render （剩餘的血量）
    };
    GameController.prototype.onCollisionCheckTick = function () {
        if (this._model.gameOver) {
            this._collisionCheckTicker.stop();
        }
        if (this._playerController.playerHealth !== 0) {
            // this._obstaclesView.groundObstacles.forEach(obstacle => {
            //     if (
            //         CollisionChecker.obstacleCollision(
            //             this._playerController.player,
            //             obstacle
            //         )
            //     ) {
            //         console.log(obstacle);
            //     }
            // });
            // if (CollisionChecker.obstacleCollision(this._playerController.player, this._collisionCheckTicker ))
        }
    };
    GameController.prototype.getSpriteWidthScaleRatio = function (spriteWidth) {
        return game_settings_1.GameSettings.getInstance().gameWidth / spriteWidth;
    };
    GameController.prototype.onKeyDown = function (key) {
        var keyDirectionMap = {
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        this._playerController.walk(true, keyDirectionMap[key.keyCode]);
    };
    GameController.prototype.onKeyUp = function (key) {
        this._playerController.walk(false);
    };
    GameController.prototype.setupEvents = function () {
        var _this = this;
        window.addEventListener("keydown", function (e) {
            _this.onKeyDown(e);
        });
        window.addEventListener("keyup", function (e) {
            _this.onKeyUp(e);
        });
    };
    return GameController;
}());
exports.GameController = GameController;


/***/ }),

/***/ "./src/controllers/obstacles-controller.ts":
/*!*************************************************!*\
  !*** ./src/controllers/obstacles-controller.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var obstacle_1 = __webpack_require__(/*! ../game-objects/obstacle */ "./src/game-objects/obstacle.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var game_settings_1 = __webpack_require__(/*! ../models/game-settings */ "./src/models/game-settings.ts");
var world_1 = __webpack_require__(/*! ../models/world */ "./src/models/world.ts");
var ground_1 = __webpack_require__(/*! ../game-objects/ground */ "./src/game-objects/ground.ts");
var boss_1 = __webpack_require__(/*! ../game-objects/boss */ "./src/game-objects/boss.ts");
var ObstaclesController = /** @class */ (function (_super) {
    __extends(ObstaclesController, _super);
    function ObstaclesController(view) {
        var _this = _super.call(this) || this;
        _this.OBSTACLE_COUNT = 1500;
        _this.SMALL_BOSS_COUNT = 5; // [2,3,5]
        _this.BIG_BOSS_COUNT = 3; // [0,2,4]
        _this._gameSettings = game_settings_1.GameSettings.getInstance();
        _this._view = view;
        //  view 有判斷式判斷鳥已經飛過障礙（加分）
        // this._view.onObstaclesView.PIPE_PASSED, this.onPipePassed, this)
        _this._moveObstaclesTicker = new pixi_js_1.Ticker();
        _this._moveObstaclesTicker.add(function () { return _this.moveObstacles(); });
        _this.addObstacles();
        _this.addBosses(true);
        _this.addBosses(false);
        _this.addGround();
        return _this;
    }
    ObstaclesController.prototype.moveObstacles = function () {
        this.moveGroud();
    };
    ObstaclesController.prototype.moveGroud = function () {
        this._view.moveGround();
    };
    ObstaclesController.prototype.startMoving = function () {
        this._moveObstaclesTicker.start();
    };
    ObstaclesController.prototype.stopMoving = function () {
        this._moveObstaclesTicker.stop();
    };
    ObstaclesController.prototype.addGround = function () {
        var ground = (world_1.World.getInstance().ground = new ground_1.Ground());
        ground.scale.x = ground.scale.y =
            this._gameSettings.gameWidth / ground.width;
        ground.y = this._gameSettings.gameHeight - ground.height;
        ground.anchor.set(0, 0);
        world_1.World.addObjectToWorld(ground);
    };
    ObstaclesController.prototype.addBosses = function (small) {
        if (small === void 0) { small = true; }
        var number = small ? this.SMALL_BOSS_COUNT : this.BIG_BOSS_COUNT;
        for (var i = 0; i < number; i++) {
            var boss = new boss_1.Boss(small);
            boss.scale.set(0.5, 0.5);
            boss.anchor.set(0, 1);
            boss.x =
                this._gameSettings.playerStartingXPosition +
                    (this._gameSettings.gameTotalTime / 3) *
                        1000 *
                        this._gameSettings.obstaclesSpeed *
                        Math.random() *
                        1;
            var containHeight = this._gameSettings.gameHeight - 300 - 100;
            boss.y = 300 + containHeight * Math.random() * 1;
            world_1.World.addObjectToWorld(boss);
            this._view.groundObstacles.push(boss);
        }
    };
    ObstaclesController.prototype.addObstacles = function () {
        this._view.groundObstacles = [];
        for (var i = 0; i < this.OBSTACLE_COUNT; i++) {
            var groundObstacle = new obstacle_1.Obstacle();
            groundObstacle.scale.set(0.5, 0.5);
            groundObstacle.anchor.set(0, 1);
            groundObstacle.x =
                this._gameSettings.playerStartingXPosition +
                    (this._gameSettings.gameTotalTime / 3) *
                        1000 *
                        this._gameSettings.obstaclesSpeed *
                        Math.random() *
                        1;
            // FIXME: 300 是天空的高度, 150 為粗估地板的高度
            var containHeight = this._gameSettings.gameHeight - 300 - 100;
            groundObstacle.y = 300 + containHeight * Math.random() * 1;
            world_1.World.addObjectToWorld(groundObstacle);
            this._view.groundObstacles.push(groundObstacle);
        }
    };
    return ObstaclesController;
}(pixi_js_1.utils.EventEmitter));
exports.ObstaclesController = ObstaclesController;


/***/ }),

/***/ "./src/controllers/player-controller.ts":
/*!**********************************************!*\
  !*** ./src/controllers/player-controller.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_settings_1 = __webpack_require__(/*! ../models/game-settings */ "./src/models/game-settings.ts");
var player_1 = __webpack_require__(/*! ../game-objects/player */ "./src/game-objects/player.ts");
var world_1 = __webpack_require__(/*! ../models/world */ "./src/models/world.ts");
var PlayerController = /** @class */ (function () {
    function PlayerController() {
        this._gameSettings = game_settings_1.GameSettings.getInstance();
        this._player = new player_1.Player();
        world_1.World.addObjectToWorld(this.player);
        this.resetPlayer();
    }
    Object.defineProperty(PlayerController.prototype, "player", {
        get: function () {
            return this._player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerController.prototype, "playerHealth", {
        set: function (value) {
            if (value === 0) {
                this.onPlayerDie();
            }
            this.player.health = value;
        },
        enumerable: true,
        configurable: true
    });
    PlayerController.prototype.walk = function (animate, direction) {
        if (animate === void 0) { animate = false; }
        this.player.walk(animate, direction);
    };
    PlayerController.prototype.resetPlayer = function () {
        this.player.x = this._gameSettings.playerStartingXPosition;
        this.player.y = this._gameSettings.playerStartingYPosition;
        this.playerHealth = this._gameSettings.playerStartingHealth;
    };
    PlayerController.prototype.onPlayerDie = function () { };
    return PlayerController;
}());
exports.PlayerController = PlayerController;


/***/ }),

/***/ "./src/game-objects/boss.ts":
/*!**********************************!*\
  !*** ./src/game-objects/boss.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(small) {
        if (small === void 0) { small = true; }
        var _this = this;
        var smallTextures = [];
        for (var i = 1; i <= 2; i++) {
            smallTextures.push(pixi_js_1.Texture.from("small_boss_" + i + ".png"));
        }
        var bigTextures = [];
        for (var i = 1; i <= 3; i++) {
            bigTextures.push(pixi_js_1.Texture.from("bigboss_" + i + ".png"));
        }
        _this = _super.call(this, small ? smallTextures : bigTextures) || this;
        var speed = small
            ? Boss.SMALL_ANIMATION_SPEED
            : Boss.BIG_ANIMATION_SPEED;
        _this.animationSpeed = speed;
        _this.play();
        return _this;
    }
    Object.defineProperty(Boss.prototype, "body", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Boss.SMALL_ANIMATION_SPEED = 3 / 60;
    Boss.BIG_ANIMATION_SPEED = 1 / 60;
    return Boss;
}(pixi_js_1.AnimatedSprite));
exports.Boss = Boss;


/***/ }),

/***/ "./src/game-objects/button.ts":
/*!************************************!*\
  !*** ./src/game-objects/button.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(visible, text) {
        var _this = _super.call(this) || this;
        _this.interactive = true;
        _this.buttonMode = true;
        _this.setupText(text);
        _this.setupButton(visible);
        _this.buttonText.x = _this.button.width / 2 - _this.buttonText.width / 2;
        _this.buttonText.y = _this.button.height / 2 - _this.buttonText.height / 2;
        _this.addChild(_this.button, _this.buttonText);
        _this.setupEvents();
        return _this;
    }
    Button.prototype.setupText = function (text) {
        this.textStyle = new pixi_js_1.TextStyle({
            fill: "#ffffff",
            align: "center"
        });
        this.buttonText = new pixi_js_1.Text(text, this.textStyle);
    };
    Button.prototype.setupButton = function (visible) {
        this.button = new pixi_js_1.Graphics()
            .lineStyle(4, 0x6c488b, 1)
            .beginFill(0x6c488b)
            .drawRoundedRect(0, 0, this.buttonText.width + 40, this.buttonText.height + 10, 16)
            .endFill();
        this.button.interactive = true;
        this.button.buttonMode = true;
        this.button.visible = visible;
    };
    Button.prototype.setupEvents = function () {
        // this.button
        //     .on("pointerdown", function onDown() {
        //         console.log("pointerdown");
        //     })
        //     .on("pointerup", function() {
        //         console.log("TCL: createButton -> pointerup");
        //     })
        //     .on("pointerupoutside", function() {
        //         console.log("TCL: createButton -> pointerupoutside");
        //     })
        //     .on("pointerover", function onHover() {
        //         console.log("TCL: onHover -> pointerover");
        //         this.beginFill(0xffffff).endFill();
        //         buttonText.tint = 0x6c488b;
        //     })
        //     .on("pointerout", function() {
        //         console.log("TCL: createButton -> pointerout");
        //         this.beginFill(0x6c488b).endFill();
        //         buttonText.tint = 0xffffff;
        //     });
    };
    return Button;
}(pixi_js_1.Container));
exports.Button = Button;


/***/ }),

/***/ "./src/game-objects/ground.ts":
/*!************************************!*\
  !*** ./src/game-objects/ground.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Ground = /** @class */ (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        return _super.call(this, pixi_js_1.Texture.from("bg-bottom.png")) || this;
    }
    Object.defineProperty(Ground.prototype, "body", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    return Ground;
}(pixi_js_1.Sprite));
exports.Ground = Ground;


/***/ }),

/***/ "./src/game-objects/obstacle.ts":
/*!**************************************!*\
  !*** ./src/game-objects/obstacle.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Obstacle = /** @class */ (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        return _super.call(this, pixi_js_1.Texture.from("obstacle_" + (Math.floor(Math.random() * 5) + 1) + ".png")) || this;
    }
    Object.defineProperty(Obstacle.prototype, "body", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    return Obstacle;
}(pixi_js_1.Sprite));
exports.Obstacle = Obstacle;


/***/ }),

/***/ "./src/game-objects/player.ts":
/*!************************************!*\
  !*** ./src/game-objects/player.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var player_behavior_1 = __webpack_require__(/*! ../behaviors/player-behavior */ "./src/behaviors/player-behavior.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = this;
        var phaseTexturesMap = {
            walk: {
                frameCount: 4,
                filePrefix: "player_walk_"
            },
            buff: {
                frameCount: 5,
                filePrefix: "player_buff_"
            },
            dying: {
                frameCount: 5,
                filePrefix: "player_die_"
            }
        };
        var _walkingTextures = [];
        for (var i = 1; i < 5; i++) {
            _walkingTextures.push(pixi_js_1.Texture.from("player_walk_" + i + ".png"));
        }
        _this = _super.call(this, _walkingTextures) || this;
        _this._walkingTextures = _walkingTextures;
        _this.animationSpeed = Player.ANIMATION_SPEED;
        _this.scale.set(0.5, 0.5);
        // this.anchor.x = this.anchor.y = 0.5;
        _this._buffingTextures = [];
        for (var i = 1; i < 6; i++) {
            _this._buffingTextures.push(pixi_js_1.Texture.from("player_buff_" + i + ".png"));
        }
        _this._dyingTextures = [];
        for (var i = 1; i < 6; i++) {
            _this._dyingTextures.push(pixi_js_1.Texture.from("player_die_" + i + ".png"));
        }
        _this._playerPhase = "walk";
        _this.changeTexture(_this._walkingTextures);
        _this._movingBehavior = new player_behavior_1.PlayerMovingBehavior(_this);
        return _this;
    }
    Object.defineProperty(Player.prototype, "body", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.startAnimating = function () {
        this._playerAnimating = true;
    };
    Player.prototype.walk = function (animation, direction) {
        this._playerPhase = "walk";
        this._playerAnimating = animation;
        if (this._playerAnimating) {
            this.playAnimation();
            this._movingBehavior.move(direction);
        }
        else {
            this.stopAnimation();
        }
    };
    Player.prototype.buff = function () {
        this.changeTexture(this._buffingTextures, false);
    };
    Player.prototype.hit = function () {
        // this.changeTexture(this.)
    };
    Player.prototype.die = function () {
        this.changeTexture(this._dyingTextures, false);
    };
    Player.prototype.playAnimation = function () {
        this.play();
    };
    Player.prototype.stopAnimation = function () {
        this.stop();
    };
    Player.prototype.changeTexture = function (textures, loop) {
        if (loop === void 0) { loop = true; }
        this.body.textures = textures;
        if (!loop) {
            this.body.loop = loop;
        }
    };
    Player.ANIMATION_SPEED = 4 / 60;
    return Player;
}(pixi_js_1.AnimatedSprite));
exports.Player = Player;


/***/ }),

/***/ "./src/game-objects/sky.ts":
/*!*********************************!*\
  !*** ./src/game-objects/sky.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var game_settings_1 = __webpack_require__(/*! ../models/game-settings */ "./src/models/game-settings.ts");
var Sky = /** @class */ (function (_super) {
    __extends(Sky, _super);
    function Sky(stage) {
        var _this = _super.call(this) || this;
        _this._stage = stage;
        // 天空
        var sky = new pixi_js_1.Sprite(pixi_js_1.Texture.from("bg-top-sky.png"));
        sky.scale.x = sky.scale.y = _this.getSpriteWidthScaleRatio(sky.width);
        sky.anchor.set(0, 0);
        // 遠山
        var mountainBack = new pixi_js_1.Sprite(pixi_js_1.Texture.from("bg-top-mountain-back.png"));
        mountainBack.scale.x = mountainBack.scale.y = _this.getSpriteWidthScaleRatio(mountainBack.width);
        mountainBack.anchor.set(0, 0);
        mountainBack.y = sky.height - mountainBack.height;
        // 近山
        var mountainFront = pixi_js_1.Texture.from("bg-top-mountain-front.png");
        var mountainFrontTiling = new pixi_js_1.TilingSprite(mountainFront, mountainFront.width, mountainFront.height);
        mountainFrontTiling.scale.x = mountainFrontTiling.scale.y = _this.getSpriteWidthScaleRatio(mountainFrontTiling.width);
        mountainFrontTiling.position.x = 0;
        mountainFrontTiling.position.y =
            sky.height - mountainFrontTiling.height / 2;
        mountainFrontTiling.tilePosition.x = 0;
        mountainFrontTiling.tilePosition.y = 0;
        mountainFrontTiling.anchor.set(0, 0);
        // 雲朵們
        var clouds = new pixi_js_1.Sprite(pixi_js_1.Texture.from("bg-top-clouds.png"));
        clouds.scale.x = clouds.scale.y = _this.getSpriteWidthScaleRatio(clouds.width);
        clouds.anchor.set(0, 0);
        _this.stage.addChild(sky, mountainBack, mountainFrontTiling, clouds);
        return _this;
    }
    Object.defineProperty(Sky.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    Sky.prototype.getSpriteWidthScaleRatio = function (spriteWidth) {
        return game_settings_1.GameSettings.getInstance().gameWidth / spriteWidth;
    };
    return Sky;
}(pixi_js_1.Container));
exports.Sky = Sky;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var game_settings_1 = __webpack_require__(/*! ./models/game-settings */ "./src/models/game-settings.ts");
var game_controller_1 = __webpack_require__(/*! ./controllers/game-controller */ "./src/controllers/game-controller.ts");
var game_view_1 = __webpack_require__(/*! ./views/game-view */ "./src/views/game-view.ts");
var game_model_1 = __webpack_require__(/*! ./models/game-model */ "./src/models/game-model.ts");
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.gameSettings = game_settings_1.GameSettings.getInstance();
        window.onload = function () {
            _this.createRenderer();
            _this.startLoadingAssets();
        };
    }
    Main.prototype.startLoadingAssets = function () {
        var _this = this;
        var loader = pixi_js_1.Loader.shared;
        loader
            .add([
            "./assets/spritesheet/background.json",
            "./assets/spritesheet/labels.json",
            "./assets/spritesheet/message.json",
            "./assets/spritesheet/icons.json",
            "./assets/spritesheet/player_walk.json",
            "./assets/spritesheet/player_buff.json",
            "./assets/spritesheet/player_crash.json",
            "./assets/spritesheet/player_die.json",
            "./assets/spritesheet/obstacle.json",
            "./assets/spritesheet/smallboss.json",
            "./assets/spritesheet/bigboss.json",
            "./assets/spritesheet/magic_hand.json",
            "./assets/bg-help.png" // 遊戲說明背景圖
        ])
            .on("complete", function () {
            _this.onAssetsLoaded();
        })
            .load();
    };
    Main.prototype.onAssetsLoaded = function () {
        var gameView = new game_view_1.GameView(this.game.stage);
        var gameModel = new game_model_1.GameModel();
        var gameController = new game_controller_1.GameController(gameView, gameModel);
        window.F2EChallange = {
            Main: this,
            GameController: gameController,
            GameView: gameView
        };
    };
    Main.prototype.createRenderer = function () {
        var gameContainer = document.getElementById("app");
        this.game = new pixi_js_1.Application({
            width: this.gameSettings.gameWidth,
            height: this.gameSettings.gameHeight,
            antialias: true,
            backgroundColor: 0xf7e0ab,
            autoDensity: true,
            resolution: 2
        });
        gameContainer.appendChild(this.game.view);
        this.game.stage.interactive = true;
        this.game.renderer.view.style.position = "absolute";
        this.game.renderer.view.style.top = "50%";
        this.game.renderer.view.style.left = "50%";
        this.game.renderer.view.style.transform = "translate(-50%, -50%)";
    };
    return Main;
}());
exports.Main = Main;
(function () {
    var game = new Main();
})();


/***/ }),

/***/ "./src/models/game-model.ts":
/*!**********************************!*\
  !*** ./src/models/game-model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_settings_1 = __webpack_require__(/*! ../models/game-settings */ "./src/models/game-settings.ts");
var GameModel = /** @class */ (function () {
    function GameModel() {
        this.initPropsWithDefaultValues();
    }
    Object.defineProperty(GameModel.prototype, "gameHealth", {
        get: function () {
            return this._gameHealth;
        },
        enumerable: true,
        configurable: true
    });
    GameModel.prototype.damageHealth = function (demageValue) {
        this._gameHealth = this._gameHealth - demageValue;
    };
    GameModel.prototype.resetModel = function () {
        this.initPropsWithDefaultValues();
    };
    GameModel.prototype.initPropsWithDefaultValues = function () {
        this.gameOver = false;
        this._gameHealth = game_settings_1.GameSettings.getInstance().playerStartingHealth;
    };
    return GameModel;
}());
exports.GameModel = GameModel;


/***/ }),

/***/ "./src/models/game-settings.ts":
/*!*************************************!*\
  !*** ./src/models/game-settings.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameSettings = /** @class */ (function () {
    function GameSettings() {
        // game resolution
        this.gameWidth = 1280;
        this.gameHeight = 700;
        this.gameStartCount = 5;
        this.gameTotalTime = 90; // seconds
        // player settings
        this.playerStartingHealth = 4;
        this.playerStartingXPosition = 50;
        this.playerStartingYPosition = this.gameHeight / 2; //FIXME: 要再往下一點
        //obstacles settings
        this.obstaclesDistance = 45;
        this.obstaclesSpeed = 7; // microseconds
        this.groundMoveSpeed = 2;
        if (GameSettings.instance) {
            throw new Error("Error: Instantiation failed: Use GameSettings.getInstance() instead of new.");
        }
        GameSettings.instance = this;
    }
    GameSettings.getInstance = function () {
        return GameSettings.instance;
    };
    GameSettings.instance = new GameSettings();
    return GameSettings;
}());
exports.GameSettings = GameSettings;


/***/ }),

/***/ "./src/models/world.ts":
/*!*****************************!*\
  !*** ./src/models/world.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var World = /** @class */ (function () {
    function World() {
        if (World.instance) {
            throw new Error("Error: Instantiation failed: Use World.getInstance() instead of new.");
        }
        World.instance = this;
        this.gameObjects = [];
    }
    World.getInstance = function () {
        return World.instance;
    };
    Object.defineProperty(World, "WorldInstance", {
        get: function () {
            return World.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    World.addToWorld = function (gameObject) {
        this.WorldInstance.stage.addChild(gameObject);
    };
    World.addObjectToWorld = function (gameObject) {
        this.WorldInstance.gameObjects.push(gameObject);
        this.WorldInstance.stage.addChild(gameObject);
    };
    World.instance = new World();
    return World;
}());
exports.World = World;


/***/ }),

/***/ "./src/views/game-view.ts":
/*!********************************!*\
  !*** ./src/views/game-view.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
// import { PixiConsole, PixiConsoleConfig } from "pixi-console";
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView(stage) {
        var _this = _super.call(this) || this;
        _this._stage = stage;
        stage.addChild(_this);
        return _this;
        // this.addChild(PixiConsole.getInstance());
    }
    Object.defineProperty(GameView.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: true,
        configurable: true
    });
    return GameView;
}(pixi_js_1.Container));
exports.GameView = GameView;


/***/ }),

/***/ "./src/views/obstacles-view.ts":
/*!*************************************!*\
  !*** ./src/views/obstacles-view.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var game_settings_1 = __webpack_require__(/*! ../models/game-settings */ "./src/models/game-settings.ts");
var ObstaclesView = /** @class */ (function (_super) {
    __extends(ObstaclesView, _super);
    function ObstaclesView() {
        return _super.call(this) || this;
    }
    ObstaclesView.prototype.moveGround = function () {
        for (var i = 0; i < this.groundObstacles.length; i += 1) {
            this.groundObstacles[i].x -= this._gameSettings.obstaclesSpeed;
        }
    };
    Object.defineProperty(ObstaclesView.prototype, "_gameSettings", {
        get: function () {
            return game_settings_1.GameSettings.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return ObstaclesView;
}(pixi_js_1.utils.EventEmitter));
exports.ObstaclesView = ObstaclesView;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9ycy9wbGF5ZXItYmVoYXZpb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2dhbWUtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvb2JzdGFjbGVzLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3BsYXllci1jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvYm9zcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL2dyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL29ic3RhY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvc2t5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2dhbWUtbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9nYW1lLXNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvd29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dhbWUtdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvb2JzdGFjbGVzLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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Q0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLHNEQUFTO0FBQ2pDLHNCQUFzQixtQkFBTyxDQUFDLDhEQUF5QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUNBQWlDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQbGF5ZXJNb3ZpbmdCZWhhdmlvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJNb3ZpbmdCZWhhdmlvcihnYW1lT2JqZWN0LCB2ZWxvY2l0eVkpIHtcbiAgICAgICAgaWYgKHZlbG9jaXR5WSA9PT0gdm9pZCAwKSB7IHZlbG9jaXR5WSA9IDA7IH1cbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0ID0gZ2FtZU9iamVjdDtcbiAgICB9XG4gICAgUGxheWVyTW92aW5nQmVoYXZpb3IucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkgeyBkaXJlY3Rpb24gPSBcInJpZ2h0XCI7IH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU9iamVjdC5oZWFsdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdC5ib2R5LnggKz0gUGxheWVyTW92aW5nQmVoYXZpb3IuTU9WRV9WRUxPQ0lUWV9YO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZU9iamVjdC5ib2R5LmFuY2hvci54ID0gMTtcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZU9iamVjdC5ib2R5LnNjYWxlLnggKj0gLTE7XG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QuYm9keS54IC09IFBsYXllck1vdmluZ0JlaGF2aW9yLk1PVkVfVkVMT0NJVFlfWDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0LmJvZHkueSAtPSBQbGF5ZXJNb3ZpbmdCZWhhdmlvci5XQUxLX1ZFTE9DSVRZX1k7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3QuYm9keS55ICs9IFBsYXllck1vdmluZ0JlaGF2aW9yLldBTEtfVkVMT0NJVFlfWTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGxheWVyTW92aW5nQmVoYXZpb3IucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdCA9IG51bGw7XG4gICAgfTtcbiAgICBQbGF5ZXJNb3ZpbmdCZWhhdmlvci5NT1ZFX1ZFTE9DSVRZX1ggPSAxNTtcbiAgICBQbGF5ZXJNb3ZpbmdCZWhhdmlvci5XQUxLX1ZFTE9DSVRZX1kgPSAxNTtcbiAgICByZXR1cm4gUGxheWVyTW92aW5nQmVoYXZpb3I7XG59KCkpO1xuZXhwb3J0cy5QbGF5ZXJNb3ZpbmdCZWhhdmlvciA9IFBsYXllck1vdmluZ0JlaGF2aW9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XG52YXIgZ2FtZV9zZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL21vZGVscy9nYW1lLXNldHRpbmdzXCIpO1xudmFyIG9ic3RhY2xlc192aWV3XzEgPSByZXF1aXJlKFwiLi4vdmlld3Mvb2JzdGFjbGVzLXZpZXdcIik7XG52YXIgd29ybGRfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvd29ybGRcIik7XG52YXIgcGxheWVyX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL3BsYXllci1jb250cm9sbGVyXCIpO1xudmFyIG9ic3RhY2xlc19jb250cm9sbGVyXzEgPSByZXF1aXJlKFwiLi9vYnN0YWNsZXMtY29udHJvbGxlclwiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9nYW1lLW9iamVjdHMvYnV0dG9uXCIpO1xudmFyIHNreV8xID0gcmVxdWlyZShcIi4uL2dhbWUtb2JqZWN0cy9za3lcIik7XG52YXIgR2FtZUNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIodmlldywgbW9kZWwpIHtcbiAgICAgICAgd29ybGRfMS5Xb3JsZC5nZXRJbnN0YW5jZSgpLnN0YWdlID0gdmlldy5zdGFnZTtcbiAgICAgICAgdGhpcy5fdmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMuaW5pdEdhbWVCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuaW5pdEdhbWVJbnRyb0J1dHRvbigpO1xuICAgICAgICB0aGlzLmluaXRHYW1lVGltZXJUZXh0KCk7XG4gICAgICAgIHRoaXMuaW5pdE9iZXN0YWNsZXMoKTtcbiAgICAgICAgdGhpcy5pbml0UGFseWVyKCk7XG4gICAgICAgIHRoaXMuaW5pdFBsYXllckhlYWx0aCgpO1xuICAgICAgICB0aGlzLnNob3dTdGFydERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldHVwRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX2NvbGxpc2lvbkNoZWNrVGlja2VyID0gbmV3IHBpeGlfanNfMS5UaWNrZXIoKTtcbiAgICAgICAgdGhpcy5fY29sbGlzaW9uQ2hlY2tUaWNrZXIuYWRkKHRoaXMub25Db2xsaXNpb25DaGVja1RpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX2NvbGxpc2lvbkNoZWNrVGlja2VyLnN0YXJ0KCk7XG4gICAgfVxuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5pbml0UGFseWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9wbGF5ZXJDb250cm9sbGVyID0gbmV3IHBsYXllcl9jb250cm9sbGVyXzEuUGxheWVyQ29udHJvbGxlcigpO1xuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLnJlc3RyaWN0UGxheWVyID0gZnVuY3Rpb24gKHNwcml0ZSwgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVENMOiBHYW1lQ29udHJvbGxlciAtPiByZXN0cmljdFBsYXllciAtPiByZXN0cmljdFBsYXllclwiKTtcbiAgICAgICAgaWYgKHNwcml0ZS54IDwgY29udGFpbmVyLngpIHtcbiAgICAgICAgICAgIHNwcml0ZS54ID0gY29udGFpbmVyLng7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNwcml0ZS55IDwgY29udGFpbmVyLnkpIHtcbiAgICAgICAgICAgIHNwcml0ZS55ID0gY29udGFpbmVyLnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNwcml0ZS54ICsgc3ByaXRlLndpZHRoID4gY29udGFpbmVyLndpZHRoKSB7XG4gICAgICAgICAgICBzcHJpdGUueCA9IGNvbnRhaW5lci53aWR0aCAtIHNwcml0ZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ByaXRlLnkgKyBzcHJpdGUuaGVpZ2h0ID4gY29udGFpbmVyLmhlaWdodCkge1xuICAgICAgICAgICAgc3ByaXRlLnkgPSBjb250YWluZXIuaGVpZ2h0IC0gc3ByaXRlLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLmluaXRPYmVzdGFjbGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9vYnN0YWNsZXNWaWV3ID0gbmV3IG9ic3RhY2xlc192aWV3XzEuT2JzdGFjbGVzVmlldygpO1xuICAgICAgICB0aGlzLl9vYnN0YWNsZXNDb250cm9sbGVyID0gbmV3IG9ic3RhY2xlc19jb250cm9sbGVyXzEuT2JzdGFjbGVzQ29udHJvbGxlcih0aGlzLl9vYnN0YWNsZXNWaWV3KTtcbiAgICB9O1xuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5pbml0R2FtZUJhY2tncm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBza3lfMS5Ta3kod29ybGRfMS5Xb3JsZC5nZXRJbnN0YW5jZSgpLnN0YWdlKTtcbiAgICB9O1xuICAgIC8vIOmBiuaIsuiqquaYjuWVj+iZn+WcluekulxuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5pbml0R2FtZUludHJvQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaW50cm9JY29uID0gcGl4aV9qc18xLlRleHR1cmUuZnJvbShcImljb24taGVscC5wbmdcIik7XG4gICAgICAgIHZhciBpbnRyb0ljb25Ib3ZlciA9IHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJpY29uLWhlbHAtaG92ZXIucG5nXCIpO1xuICAgICAgICB2YXIgaW50cm9CdXR0b24gPSBuZXcgcGl4aV9qc18xLlNwcml0ZShpbnRyb0ljb24pO1xuICAgICAgICBpbnRyb0J1dHRvbi5zY2FsZS5zZXQoMC41LCAwLjUpO1xuICAgICAgICBpbnRyb0J1dHRvbi54ID1cbiAgICAgICAgICAgIGdhbWVfc2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nYW1lV2lkdGggLSBpbnRyb0J1dHRvbi53aWR0aCAtIDI1O1xuICAgICAgICBpbnRyb0J1dHRvbi55ID0gMjU7XG4gICAgICAgIGludHJvQnV0dG9uLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaW50cm9CdXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIGludHJvQnV0dG9uXG4gICAgICAgICAgICAub24oXCJwb2ludGVyb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbnRyb0J1dHRvbi50ZXh0dXJlID0gaW50cm9JY29uSG92ZXI7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJwb2ludGVyb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGludHJvQnV0dG9uLnRleHR1cmUgPSBpbnRyb0ljb247XG4gICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJwb2ludGVyZG93blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zaG93R2FtZUludHJvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl92aWV3LnN0YWdlLmFkZENoaWxkKGludHJvQnV0dG9uKTtcbiAgICB9O1xuICAgIC8vIOmBiuaIsuiqquaYjlxuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5zaG93R2FtZUludHJvID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2FtZUludHJvID0gbmV3IHBpeGlfanNfMS5TcHJpdGUocGl4aV9qc18xLlRleHR1cmUuZnJvbShcIi4vYXNzZXRzL2JnLWhlbHAucG5nXCIpKTtcbiAgICAgICAgZ2FtZUludHJvLnNjYWxlLnggPSBnYW1lSW50cm8uc2NhbGUueSA9IHRoaXMuZ2V0U3ByaXRlV2lkdGhTY2FsZVJhdGlvKGdhbWVJbnRyby53aWR0aCAqIDEuMDUpO1xuICAgICAgICB0aGlzLl92aWV3LnN0YWdlLmFkZENoaWxkKGdhbWVJbnRybyk7XG4gICAgfTtcbiAgICAvLyDlj7PkuIrop5LlgJLmlbjoqIjmmYJcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUuaW5pdEdhbWVUaW1lclRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aW1lckJnID0gbmV3IHBpeGlfanNfMS5TcHJpdGUocGl4aV9qc18xLlRleHR1cmUuZnJvbShcImJnLXRpbWVyLnBuZ1wiKSk7XG4gICAgICAgIHRpbWVyQmcuc2NhbGUuc2V0KDAuNSwgMC41KTtcbiAgICAgICAgdGltZXJCZy54ID0gZ2FtZV9zZXR0aW5nc18xLkdhbWVTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdhbWVXaWR0aCAtIHRpbWVyQmcud2lkdGggLSA1MDtcbiAgICAgICAgdGltZXJCZy55ID0gNTA7XG4gICAgICAgIHRoaXMuX2dhbWVUaW1lID0gZ2FtZV9zZXR0aW5nc18xLkdhbWVTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdhbWVUb3RhbFRpbWU7XG4gICAgICAgIHRoaXMuX2dhbWVUaW1lVGV4dCA9IG5ldyBwaXhpX2pzXzEuVGV4dCh0aGlzLl9nYW1lVGltZS50b1N0cmluZygpLCB7XG4gICAgICAgICAgICBmb250U2l6ZTogNzAsXG4gICAgICAgICAgICBmaWxsOiAweDM0MjEzZixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9nYW1lVGltZVRleHQuYW5jaG9yLnNldCgwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuX2dhbWVUaW1lVGV4dC54ID0gdGltZXJCZy54ICsgdGltZXJCZy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuX2dhbWVUaW1lVGV4dC55ID0gdGltZXJCZy55ICsgdGltZXJCZy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLl92aWV3LnN0YWdlLmFkZENoaWxkKHRpbWVyQmcsIHRoaXMuX2dhbWVUaW1lVGV4dCk7XG4gICAgfTtcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUudGltZXJSZWR1Y2VyID0gZnVuY3Rpb24gKHRpbWUsIHRleHQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRDTDogR2FtZUNvbnRyb2xsZXIgLT4gY291bnRlciAtPiB0aW1lXCIsIHRpbWUpO1xuICAgICAgICAgICAgaWYgKHRpbWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgdGltZSAtPSAxO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dCA9IHRpbWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVENMOiBHYW1lQ29udHJvbGxlciAtPiBjb3VudGVyIC0+IHRpbWVcIiwgdGltZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZXJFbmRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICByZXR1cm4gY291bnRlcjtcbiAgICB9O1xuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS50aW1lckVuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclJlZHVjZXIoKSk7XG4gICAgICAgIHRoaXMuX29ic3RhY2xlc0NvbnRyb2xsZXIuc3RvcE1vdmluZygpO1xuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLmluaXRDb3VudERvd25UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9nYW1lU3RhcnRDb3VudCA9IGdhbWVfc2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5nYW1lU3RhcnRDb3VudDtcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXJ0Q291bnRUZXh0ID0gbmV3IHBpeGlfanNfMS5UZXh0KHRoaXMuX2dhbWVTdGFydENvdW50LnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAyNTAsXG4gICAgICAgICAgICBmaWxsOiAweGZmZmZmZixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZ2FtZVdpZHRoID0gZ2FtZV9zZXR0aW5nc18xLkdhbWVTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLmdhbWVXaWR0aDtcbiAgICAgICAgdmFyIGdhbWVIZWlnaHQgPSBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZUhlaWdodDtcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXJ0Q291bnRUZXh0LnBvc2l0aW9uLnNldChnYW1lV2lkdGggLyAyIC0gdGhpcy5fZ2FtZVN0YXJ0Q291bnRUZXh0LndpZHRoIC8gMiwgZ2FtZUhlaWdodCAvIDIgLSB0aGlzLl9nYW1lU3RhcnRDb3VudFRleHQuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuX3ZpZXcuc3RhZ2UuYWRkQ2hpbGQodGhpcy5fZ2FtZVN0YXJ0Q291bnRUZXh0KTtcbiAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcbiAgICB9O1xuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5vblBsYXllckhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbW9kZWwuZGFtYWdlSGVhbHRoKDIpO1xuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZUNvdW50RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2dhbWVTdGFydENvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lU3RhcnRDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgIF90aGlzLl9nYW1lU3RhcnRDb3VudFRleHQudGV4dCA9IF90aGlzLl9nYW1lU3RhcnRDb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2dhbWVTdGFydENvdW50VGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRDb3VudERvd25FbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBjb3VudGVyO1xuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLnN0YXJ0Q291bnREb3duRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlQ291bnREb3duKCkpO1xuICAgICAgICB0aGlzLl9nYW1lT3ZlcmxheS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXJSZWR1Y2VyKHRoaXMuX2dhbWVUaW1lLCB0aGlzLl9nYW1lVGltZVRleHQpOyAvLyDplovlp4vlgJLmlbjoqIjmmYJcbiAgICAgICAgdGhpcy5fb2JzdGFjbGVzQ29udHJvbGxlci5zdGFydE1vdmluZygpOyAvLyDpmpznpJnnianplovlp4vnp7vli5VcbiAgICB9O1xuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5pbml0R2FtZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOmBrue9qVxuICAgICAgICB0aGlzLl9nYW1lT3ZlcmxheSA9IG5ldyBwaXhpX2pzXzEuR3JhcGhpY3MoKTtcbiAgICAgICAgdGhpcy5fZ2FtZU92ZXJsYXkuYmVnaW5GaWxsKDB4MzQyMTNmLCAwLjkpO1xuICAgICAgICB0aGlzLl9nYW1lT3ZlcmxheS5kcmF3UmVjdCgwLCAwLCBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZVdpZHRoLCBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZUhlaWdodCk7XG4gICAgICAgIHRoaXMuX2dhbWVPdmVybGF5LmVuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5fdmlldy5zdGFnZS5hZGRDaGlsZCh0aGlzLl9nYW1lT3ZlcmxheSk7XG4gICAgfTtcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUuc2hvd1N0YXJ0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmluaXRHYW1lT3ZlcmxheSgpO1xuICAgICAgICB2YXIgZGlhbG9nQ29udGFpbmVyID0gbmV3IHBpeGlfanNfMS5Db250YWluZXIoKTtcbiAgICAgICAgdmFyIGRpYWxvZyA9IG5ldyBwaXhpX2pzXzEuU3ByaXRlKHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJtZXNzYWdlLWJ1YmJsZS5wbmdcIikpO1xuICAgICAgICBkaWFsb2cuc2NhbGUuc2V0KDAuNSwgMC41KTtcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLnggPSBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZVdpZHRoIC8gMjtcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLnkgPSBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZUhlaWdodCAvIDI7XG4gICAgICAgIGRpYWxvZ0NvbnRhaW5lci5waXZvdC54ID0gZGlhbG9nLndpZHRoIC8gMjtcbiAgICAgICAgZGlhbG9nQ29udGFpbmVyLnBpdm90LnkgPSBkaWFsb2cuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy8g6Kqq5piO5paH5a2XXG4gICAgICAgIHZhciBzdGFydFRleHRTdHlsZSA9IG5ldyBwaXhpX2pzXzEuVGV4dFN0eWxlKHtcbiAgICAgICAgICAgIGZpbGw6IFwiIzZDNDg4QlwiLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMjUsXG4gICAgICAgICAgICB3b3JkV3JhcDogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRXcmFwV2lkdGg6IGRpYWxvZ0NvbnRhaW5lci53aWR0aCxcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogNVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHN0YXJ0VGV4dCA9IG5ldyBwaXhpX2pzXzEuVGV4dChcIuS5n+ioseaYr+WcqOS4lueVjOaDoeaEj+eahOaNieW8hOS4i++8jFxcbuS4gOS4jeWwj+W/g+aKlemMr+iDjueahOS9oO+8jFxcbuaJjeWJm+WJteinkuWwseWHuueUn+WcqOWNseapn+Wbm+S8j+eahOmtlOeOi+WfjuijoeOAglxcbuWIpeiqquaYr+aUu+aTiuS6hu+8jFxcbuWFieaYr+iiq+mtlOeJqeWvn+imuuWIsOWwsei2s+S7peiuk+S6uuiHtOWRve+8gVxcbuiQrOW5uOeahOaYr+S9oOeahOWtmOWcqOaEn+WNgeWIhuS9juiQve+8jFxcbjkw56eS5YWn5oOz6L6m5rOV6YG/6ZaL6Lev5LiK55qE5pW15Lq677yMXFxu5q+r6auu54Sh5YK35Zyw6YCD5Zue5paw5omL5p2R5ZCn77yBXCIsIHN0YXJ0VGV4dFN0eWxlKTtcbiAgICAgICAgc3RhcnRUZXh0LnggPSBkaWFsb2cud2lkdGggLyAyIC0gc3RhcnRUZXh0LndpZHRoIC8gMjtcbiAgICAgICAgc3RhcnRUZXh0LnkgPSBkaWFsb2cuaGVpZ2h0IC8gMiAtIHN0YXJ0VGV4dC5oZWlnaHQgLyAyO1xuICAgICAgICAvLyDplovlp4vpgYrmiLLmjInpiJVcbiAgICAgICAgdmFyIHN0YXJ0QnV0dG9uID0gbmV3IGJ1dHRvbl8xLkJ1dHRvbih0cnVlLCBcIumWi+Wni+mBiuaIslwiKTtcbiAgICAgICAgc3RhcnRCdXR0b24ueCA9IGRpYWxvZy53aWR0aCAvIDI7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnkgPSBkaWFsb2cuaGVpZ2h0IC0gc3RhcnRCdXR0b24uaGVpZ2h0O1xuICAgICAgICBzdGFydEJ1dHRvbi5waXZvdC5zZXQoc3RhcnRCdXR0b24ud2lkdGggLyAyLCBzdGFydEJ1dHRvbi5oZWlnaHQpO1xuICAgICAgICBkaWFsb2dDb250YWluZXIuYWRkQ2hpbGQoZGlhbG9nLCBzdGFydFRleHQsIHN0YXJ0QnV0dG9uKTtcbiAgICAgICAgdGhpcy5fdmlldy5zdGFnZS5hZGRDaGlsZChkaWFsb2dDb250YWluZXIpO1xuICAgICAgICBzdGFydEJ1dHRvbi5vbihcInBvaW50ZXJkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NvbnRhaW5lci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5pbml0Q291bnREb3duVGV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEdhbWVDb250cm9sbGVyLnByb3RvdHlwZS5pbml0UHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLmluaXRQbGF5ZXJIZWFsdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllckhlYWx0aCA9IG5ldyBwaXhpX2pzXzEuQ29udGFpbmVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZV9zZXR0aW5nc18xLkdhbWVTZXR0aW5ncy5nZXRJbnN0YW5jZSgpLnBsYXllclN0YXJ0aW5nSGVhbHRoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBoZWFydCA9IG5ldyBwaXhpX2pzXzEuU3ByaXRlKHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJpY29uLWhwLW9uLnBuZ1wiKSk7XG4gICAgICAgICAgICBoZWFydC5zY2FsZS5zZXQoMC41LCAwLjUpO1xuICAgICAgICAgICAgaGVhcnQueCA9XG4gICAgICAgICAgICAgICAgMTAwICtcbiAgICAgICAgICAgICAgICAgICAgKGkgJSBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkucGxheWVyU3RhcnRpbmdIZWFsdGgpICpcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LndpZHRoO1xuICAgICAgICAgICAgaGVhcnQueSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllckhlYWx0aC5hZGRDaGlsZChoZWFydCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdmlldy5zdGFnZS5hZGRDaGlsZCh0aGlzLl9wbGF5ZXJIZWFsdGgpO1xuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZVBsYXllckhlYWx0aCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICAvLyDmoLnmk5ogbW9kZWwg5YWn55qEIGhlYWx0aCByZW5kZXIg77yI5Ymp6aSY55qE6KGA6YeP77yJXG4gICAgfTtcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUub25Db2xsaXNpb25DaGVja1RpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9tb2RlbC5nYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5fY29sbGlzaW9uQ2hlY2tUaWNrZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJDb250cm9sbGVyLnBsYXllckhlYWx0aCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcy5fb2JzdGFjbGVzVmlldy5ncm91bmRPYnN0YWNsZXMuZm9yRWFjaChvYnN0YWNsZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFxuICAgICAgICAgICAgLy8gICAgICAgICBDb2xsaXNpb25DaGVja2VyLm9ic3RhY2xlQ29sbGlzaW9uKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fcGxheWVyQ29udHJvbGxlci5wbGF5ZXIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBvYnN0YWNsZVxuICAgICAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgICAgICAvLyAgICAgKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG9ic3RhY2xlKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vIGlmIChDb2xsaXNpb25DaGVja2VyLm9ic3RhY2xlQ29sbGlzaW9uKHRoaXMuX3BsYXllckNvbnRyb2xsZXIucGxheWVyLCB0aGlzLl9jb2xsaXNpb25DaGVja1RpY2tlciApKVxuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUuZ2V0U3ByaXRlV2lkdGhTY2FsZVJhdGlvID0gZnVuY3Rpb24gKHNwcml0ZVdpZHRoKSB7XG4gICAgICAgIHJldHVybiBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZVdpZHRoIC8gc3ByaXRlV2lkdGg7XG4gICAgfTtcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUub25LZXlEb3duID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIga2V5RGlyZWN0aW9uTWFwID0ge1xuICAgICAgICAgICAgMzc6IFwibGVmdFwiLFxuICAgICAgICAgICAgMzg6IFwidXBcIixcbiAgICAgICAgICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICA0MDogXCJkb3duXCJcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcGxheWVyQ29udHJvbGxlci53YWxrKHRydWUsIGtleURpcmVjdGlvbk1hcFtrZXkua2V5Q29kZV0pO1xuICAgIH07XG4gICAgR2FtZUNvbnRyb2xsZXIucHJvdG90eXBlLm9uS2V5VXAgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuX3BsYXllckNvbnRyb2xsZXIud2FsayhmYWxzZSk7XG4gICAgfTtcbiAgICBHYW1lQ29udHJvbGxlci5wcm90b3R5cGUuc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMub25LZXlEb3duKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMub25LZXlVcChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZUNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0cy5HYW1lQ29udHJvbGxlciA9IEdhbWVDb250cm9sbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG9ic3RhY2xlXzEgPSByZXF1aXJlKFwiLi4vZ2FtZS1vYmplY3RzL29ic3RhY2xlXCIpO1xudmFyIHBpeGlfanNfMSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xudmFyIGdhbWVfc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvZ2FtZS1zZXR0aW5nc1wiKTtcbnZhciB3b3JsZF8xID0gcmVxdWlyZShcIi4uL21vZGVscy93b3JsZFwiKTtcbnZhciBncm91bmRfMSA9IHJlcXVpcmUoXCIuLi9nYW1lLW9iamVjdHMvZ3JvdW5kXCIpO1xudmFyIGJvc3NfMSA9IHJlcXVpcmUoXCIuLi9nYW1lLW9iamVjdHMvYm9zc1wiKTtcbnZhciBPYnN0YWNsZXNDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnN0YWNsZXNDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic3RhY2xlc0NvbnRyb2xsZXIodmlldykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5PQlNUQUNMRV9DT1VOVCA9IDE1MDA7XG4gICAgICAgIF90aGlzLlNNQUxMX0JPU1NfQ09VTlQgPSA1OyAvLyBbMiwzLDVdXG4gICAgICAgIF90aGlzLkJJR19CT1NTX0NPVU5UID0gMzsgLy8gWzAsMiw0XVxuICAgICAgICBfdGhpcy5fZ2FtZVNldHRpbmdzID0gZ2FtZV9zZXR0aW5nc18xLkdhbWVTZXR0aW5ncy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBfdGhpcy5fdmlldyA9IHZpZXc7XG4gICAgICAgIC8vICB2aWV3IOacieWIpOaWt+W8j+WIpOaWt+mzpeW3sue2k+mjm+mBjumanOekme+8iOWKoOWIhu+8iVxuICAgICAgICAvLyB0aGlzLl92aWV3Lm9uT2JzdGFjbGVzVmlldy5QSVBFX1BBU1NFRCwgdGhpcy5vblBpcGVQYXNzZWQsIHRoaXMpXG4gICAgICAgIF90aGlzLl9tb3ZlT2JzdGFjbGVzVGlja2VyID0gbmV3IHBpeGlfanNfMS5UaWNrZXIoKTtcbiAgICAgICAgX3RoaXMuX21vdmVPYnN0YWNsZXNUaWNrZXIuYWRkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1vdmVPYnN0YWNsZXMoKTsgfSk7XG4gICAgICAgIF90aGlzLmFkZE9ic3RhY2xlcygpO1xuICAgICAgICBfdGhpcy5hZGRCb3NzZXModHJ1ZSk7XG4gICAgICAgIF90aGlzLmFkZEJvc3NlcyhmYWxzZSk7XG4gICAgICAgIF90aGlzLmFkZEdyb3VuZCgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9ic3RhY2xlc0NvbnRyb2xsZXIucHJvdG90eXBlLm1vdmVPYnN0YWNsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW92ZUdyb3VkKCk7XG4gICAgfTtcbiAgICBPYnN0YWNsZXNDb250cm9sbGVyLnByb3RvdHlwZS5tb3ZlR3JvdWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3ZpZXcubW92ZUdyb3VuZCgpO1xuICAgIH07XG4gICAgT2JzdGFjbGVzQ29udHJvbGxlci5wcm90b3R5cGUuc3RhcnRNb3ZpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21vdmVPYnN0YWNsZXNUaWNrZXIuc3RhcnQoKTtcbiAgICB9O1xuICAgIE9ic3RhY2xlc0NvbnRyb2xsZXIucHJvdG90eXBlLnN0b3BNb3ZpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21vdmVPYnN0YWNsZXNUaWNrZXIuc3RvcCgpO1xuICAgIH07XG4gICAgT2JzdGFjbGVzQ29udHJvbGxlci5wcm90b3R5cGUuYWRkR3JvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ3JvdW5kID0gKHdvcmxkXzEuV29ybGQuZ2V0SW5zdGFuY2UoKS5ncm91bmQgPSBuZXcgZ3JvdW5kXzEuR3JvdW5kKCkpO1xuICAgICAgICBncm91bmQuc2NhbGUueCA9IGdyb3VuZC5zY2FsZS55ID1cbiAgICAgICAgICAgIHRoaXMuX2dhbWVTZXR0aW5ncy5nYW1lV2lkdGggLyBncm91bmQud2lkdGg7XG4gICAgICAgIGdyb3VuZC55ID0gdGhpcy5fZ2FtZVNldHRpbmdzLmdhbWVIZWlnaHQgLSBncm91bmQuaGVpZ2h0O1xuICAgICAgICBncm91bmQuYW5jaG9yLnNldCgwLCAwKTtcbiAgICAgICAgd29ybGRfMS5Xb3JsZC5hZGRPYmplY3RUb1dvcmxkKGdyb3VuZCk7XG4gICAgfTtcbiAgICBPYnN0YWNsZXNDb250cm9sbGVyLnByb3RvdHlwZS5hZGRCb3NzZXMgPSBmdW5jdGlvbiAoc21hbGwpIHtcbiAgICAgICAgaWYgKHNtYWxsID09PSB2b2lkIDApIHsgc21hbGwgPSB0cnVlOyB9XG4gICAgICAgIHZhciBudW1iZXIgPSBzbWFsbCA/IHRoaXMuU01BTExfQk9TU19DT1VOVCA6IHRoaXMuQklHX0JPU1NfQ09VTlQ7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib3NzID0gbmV3IGJvc3NfMS5Cb3NzKHNtYWxsKTtcbiAgICAgICAgICAgIGJvc3Muc2NhbGUuc2V0KDAuNSwgMC41KTtcbiAgICAgICAgICAgIGJvc3MuYW5jaG9yLnNldCgwLCAxKTtcbiAgICAgICAgICAgIGJvc3MueCA9XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVNldHRpbmdzLnBsYXllclN0YXJ0aW5nWFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX2dhbWVTZXR0aW5ncy5nYW1lVG90YWxUaW1lIC8gMykgKlxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCAqXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lU2V0dGluZ3Mub2JzdGFjbGVzU3BlZWQgKlxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAxO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5IZWlnaHQgPSB0aGlzLl9nYW1lU2V0dGluZ3MuZ2FtZUhlaWdodCAtIDMwMCAtIDEwMDtcbiAgICAgICAgICAgIGJvc3MueSA9IDMwMCArIGNvbnRhaW5IZWlnaHQgKiBNYXRoLnJhbmRvbSgpICogMTtcbiAgICAgICAgICAgIHdvcmxkXzEuV29ybGQuYWRkT2JqZWN0VG9Xb3JsZChib3NzKTtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuZ3JvdW5kT2JzdGFjbGVzLnB1c2goYm9zcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic3RhY2xlc0NvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic3RhY2xlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fdmlldy5ncm91bmRPYnN0YWNsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLk9CU1RBQ0xFX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBncm91bmRPYnN0YWNsZSA9IG5ldyBvYnN0YWNsZV8xLk9ic3RhY2xlKCk7XG4gICAgICAgICAgICBncm91bmRPYnN0YWNsZS5zY2FsZS5zZXQoMC41LCAwLjUpO1xuICAgICAgICAgICAgZ3JvdW5kT2JzdGFjbGUuYW5jaG9yLnNldCgwLCAxKTtcbiAgICAgICAgICAgIGdyb3VuZE9ic3RhY2xlLnggPVxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVTZXR0aW5ncy5wbGF5ZXJTdGFydGluZ1hQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLl9nYW1lU2V0dGluZ3MuZ2FtZVRvdGFsVGltZSAvIDMpICpcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVNldHRpbmdzLm9ic3RhY2xlc1NwZWVkICpcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgMTtcbiAgICAgICAgICAgIC8vIEZJWE1FOiAzMDAg5piv5aSp56m655qE6auY5bqmLCAxNTAg54K657KX5Lyw5Zyw5p2/55qE6auY5bqmXG4gICAgICAgICAgICB2YXIgY29udGFpbkhlaWdodCA9IHRoaXMuX2dhbWVTZXR0aW5ncy5nYW1lSGVpZ2h0IC0gMzAwIC0gMTAwO1xuICAgICAgICAgICAgZ3JvdW5kT2JzdGFjbGUueSA9IDMwMCArIGNvbnRhaW5IZWlnaHQgKiBNYXRoLnJhbmRvbSgpICogMTtcbiAgICAgICAgICAgIHdvcmxkXzEuV29ybGQuYWRkT2JqZWN0VG9Xb3JsZChncm91bmRPYnN0YWNsZSk7XG4gICAgICAgICAgICB0aGlzLl92aWV3Lmdyb3VuZE9ic3RhY2xlcy5wdXNoKGdyb3VuZE9ic3RhY2xlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE9ic3RhY2xlc0NvbnRyb2xsZXI7XG59KHBpeGlfanNfMS51dGlscy5FdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuT2JzdGFjbGVzQ29udHJvbGxlciA9IE9ic3RhY2xlc0NvbnRyb2xsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnYW1lX3NldHRpbmdzXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2dhbWUtc2V0dGluZ3NcIik7XG52YXIgcGxheWVyXzEgPSByZXF1aXJlKFwiLi4vZ2FtZS1vYmplY3RzL3BsYXllclwiKTtcbnZhciB3b3JsZF8xID0gcmVxdWlyZShcIi4uL21vZGVscy93b3JsZFwiKTtcbnZhciBQbGF5ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllckNvbnRyb2xsZXIoKSB7XG4gICAgICAgIHRoaXMuX2dhbWVTZXR0aW5ncyA9IGdhbWVfc2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IHBsYXllcl8xLlBsYXllcigpO1xuICAgICAgICB3b3JsZF8xLldvcmxkLmFkZE9iamVjdFRvV29ybGQodGhpcy5wbGF5ZXIpO1xuICAgICAgICB0aGlzLnJlc2V0UGxheWVyKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyLnByb3RvdHlwZSwgXCJwbGF5ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyLnByb3RvdHlwZSwgXCJwbGF5ZXJIZWFsdGhcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBsYXllckRpZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaGVhbHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFBsYXllckNvbnRyb2xsZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAoYW5pbWF0ZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChhbmltYXRlID09PSB2b2lkIDApIHsgYW5pbWF0ZSA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMucGxheWVyLndhbGsoYW5pbWF0ZSwgZGlyZWN0aW9uKTtcbiAgICB9O1xuICAgIFBsYXllckNvbnRyb2xsZXIucHJvdG90eXBlLnJlc2V0UGxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXllci54ID0gdGhpcy5fZ2FtZVNldHRpbmdzLnBsYXllclN0YXJ0aW5nWFBvc2l0aW9uO1xuICAgICAgICB0aGlzLnBsYXllci55ID0gdGhpcy5fZ2FtZVNldHRpbmdzLnBsYXllclN0YXJ0aW5nWVBvc2l0aW9uO1xuICAgICAgICB0aGlzLnBsYXllckhlYWx0aCA9IHRoaXMuX2dhbWVTZXR0aW5ncy5wbGF5ZXJTdGFydGluZ0hlYWx0aDtcbiAgICB9O1xuICAgIFBsYXllckNvbnRyb2xsZXIucHJvdG90eXBlLm9uUGxheWVyRGllID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIHJldHVybiBQbGF5ZXJDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydHMuUGxheWVyQ29udHJvbGxlciA9IFBsYXllckNvbnRyb2xsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XG52YXIgQm9zcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm9zcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3NzKHNtYWxsKSB7XG4gICAgICAgIGlmIChzbWFsbCA9PT0gdm9pZCAwKSB7IHNtYWxsID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc21hbGxUZXh0dXJlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAyOyBpKyspIHtcbiAgICAgICAgICAgIHNtYWxsVGV4dHVyZXMucHVzaChwaXhpX2pzXzEuVGV4dHVyZS5mcm9tKFwic21hbGxfYm9zc19cIiArIGkgKyBcIi5wbmdcIikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiaWdUZXh0dXJlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGJpZ1RleHR1cmVzLnB1c2gocGl4aV9qc18xLlRleHR1cmUuZnJvbShcImJpZ2Jvc3NfXCIgKyBpICsgXCIucG5nXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNtYWxsID8gc21hbGxUZXh0dXJlcyA6IGJpZ1RleHR1cmVzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgc3BlZWQgPSBzbWFsbFxuICAgICAgICAgICAgPyBCb3NzLlNNQUxMX0FOSU1BVElPTl9TUEVFRFxuICAgICAgICAgICAgOiBCb3NzLkJJR19BTklNQVRJT05fU1BFRUQ7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvblNwZWVkID0gc3BlZWQ7XG4gICAgICAgIF90aGlzLnBsYXkoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm9zcy5wcm90b3R5cGUsIFwiYm9keVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJvc3MuU01BTExfQU5JTUFUSU9OX1NQRUVEID0gMyAvIDYwO1xuICAgIEJvc3MuQklHX0FOSU1BVElPTl9TUEVFRCA9IDEgLyA2MDtcbiAgICByZXR1cm4gQm9zcztcbn0ocGl4aV9qc18xLkFuaW1hdGVkU3ByaXRlKSk7XG5leHBvcnRzLkJvc3MgPSBCb3NzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBpeGlfanNfMSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbih2aXNpYmxlLCB0ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIF90aGlzLnNldHVwVGV4dCh0ZXh0KTtcbiAgICAgICAgX3RoaXMuc2V0dXBCdXR0b24odmlzaWJsZSk7XG4gICAgICAgIF90aGlzLmJ1dHRvblRleHQueCA9IF90aGlzLmJ1dHRvbi53aWR0aCAvIDIgLSBfdGhpcy5idXR0b25UZXh0LndpZHRoIC8gMjtcbiAgICAgICAgX3RoaXMuYnV0dG9uVGV4dC55ID0gX3RoaXMuYnV0dG9uLmhlaWdodCAvIDIgLSBfdGhpcy5idXR0b25UZXh0LmhlaWdodCAvIDI7XG4gICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLmJ1dHRvbiwgX3RoaXMuYnV0dG9uVGV4dCk7XG4gICAgICAgIF90aGlzLnNldHVwRXZlbnRzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXR1cFRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICB0aGlzLnRleHRTdHlsZSA9IG5ldyBwaXhpX2pzXzEuVGV4dFN0eWxlKHtcbiAgICAgICAgICAgIGZpbGw6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IG5ldyBwaXhpX2pzXzEuVGV4dCh0ZXh0LCB0aGlzLnRleHRTdHlsZSk7XG4gICAgfTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNldHVwQnV0dG9uID0gZnVuY3Rpb24gKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgcGl4aV9qc18xLkdyYXBoaWNzKClcbiAgICAgICAgICAgIC5saW5lU3R5bGUoNCwgMHg2YzQ4OGIsIDEpXG4gICAgICAgICAgICAuYmVnaW5GaWxsKDB4NmM0ODhiKVxuICAgICAgICAgICAgLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCB0aGlzLmJ1dHRvblRleHQud2lkdGggKyA0MCwgdGhpcy5idXR0b25UZXh0LmhlaWdodCArIDEwLCAxNilcbiAgICAgICAgICAgIC5lbmRGaWxsKCk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnV0dG9uLnZpc2libGUgPSB2aXNpYmxlO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS5zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhpcy5idXR0b25cbiAgICAgICAgLy8gICAgIC5vbihcInBvaW50ZXJkb3duXCIsIGZ1bmN0aW9uIG9uRG93bigpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBvaW50ZXJkb3duXCIpO1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC5vbihcInBvaW50ZXJ1cFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlRDTDogY3JlYXRlQnV0dG9uIC0+IHBvaW50ZXJ1cFwiKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAub24oXCJwb2ludGVydXBvdXRzaWRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiVENMOiBjcmVhdGVCdXR0b24gLT4gcG9pbnRlcnVwb3V0c2lkZVwiKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAub24oXCJwb2ludGVyb3ZlclwiLCBmdW5jdGlvbiBvbkhvdmVyKCkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiVENMOiBvbkhvdmVyIC0+IHBvaW50ZXJvdmVyXCIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVnaW5GaWxsKDB4ZmZmZmZmKS5lbmRGaWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnV0dG9uVGV4dC50aW50ID0gMHg2YzQ4OGI7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLm9uKFwicG9pbnRlcm91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlRDTDogY3JlYXRlQnV0dG9uIC0+IHBvaW50ZXJvdXRcIik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWdpbkZpbGwoMHg2YzQ4OGIpLmVuZEZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBidXR0b25UZXh0LnRpbnQgPSAweGZmZmZmZjtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0ocGl4aV9qc18xLkNvbnRhaW5lcikpO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XG52YXIgR3JvdW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHcm91bmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdW5kKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcGl4aV9qc18xLlRleHR1cmUuZnJvbShcImJnLWJvdHRvbS5wbmdcIikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcm91bmQucHJvdG90eXBlLCBcImJvZHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gR3JvdW5kO1xufShwaXhpX2pzXzEuU3ByaXRlKSk7XG5leHBvcnRzLkdyb3VuZCA9IEdyb3VuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwaXhpX2pzXzEgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcbnZhciBPYnN0YWNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2JzdGFjbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzdGFjbGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwaXhpX2pzXzEuVGV4dHVyZS5mcm9tKFwib2JzdGFjbGVfXCIgKyAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkgKyAxKSArIFwiLnBuZ1wiKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic3RhY2xlLnByb3RvdHlwZSwgXCJib2R5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE9ic3RhY2xlO1xufShwaXhpX2pzXzEuU3ByaXRlKSk7XG5leHBvcnRzLk9ic3RhY2xlID0gT2JzdGFjbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XG52YXIgcGxheWVyX2JlaGF2aW9yXzEgPSByZXF1aXJlKFwiLi4vYmVoYXZpb3JzL3BsYXllci1iZWhhdmlvclwiKTtcbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBsYXllciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQbGF5ZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwaGFzZVRleHR1cmVzTWFwID0ge1xuICAgICAgICAgICAgd2Fsazoge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnQ6IDQsXG4gICAgICAgICAgICAgICAgZmlsZVByZWZpeDogXCJwbGF5ZXJfd2Fsa19cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1ZmY6IHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvdW50OiA1LFxuICAgICAgICAgICAgICAgIGZpbGVQcmVmaXg6IFwicGxheWVyX2J1ZmZfXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkeWluZzoge1xuICAgICAgICAgICAgICAgIGZyYW1lQ291bnQ6IDUsXG4gICAgICAgICAgICAgICAgZmlsZVByZWZpeDogXCJwbGF5ZXJfZGllX1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBfd2Fsa2luZ1RleHR1cmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBfd2Fsa2luZ1RleHR1cmVzLnB1c2gocGl4aV9qc18xLlRleHR1cmUuZnJvbShcInBsYXllcl93YWxrX1wiICsgaSArIFwiLnBuZ1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfd2Fsa2luZ1RleHR1cmVzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fd2Fsa2luZ1RleHR1cmVzID0gX3dhbGtpbmdUZXh0dXJlcztcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3BlZWQgPSBQbGF5ZXIuQU5JTUFUSU9OX1NQRUVEO1xuICAgICAgICBfdGhpcy5zY2FsZS5zZXQoMC41LCAwLjUpO1xuICAgICAgICAvLyB0aGlzLmFuY2hvci54ID0gdGhpcy5hbmNob3IueSA9IDAuNTtcbiAgICAgICAgX3RoaXMuX2J1ZmZpbmdUZXh0dXJlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgX3RoaXMuX2J1ZmZpbmdUZXh0dXJlcy5wdXNoKHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJwbGF5ZXJfYnVmZl9cIiArIGkgKyBcIi5wbmdcIikpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLl9keWluZ1RleHR1cmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBfdGhpcy5fZHlpbmdUZXh0dXJlcy5wdXNoKHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJwbGF5ZXJfZGllX1wiICsgaSArIFwiLnBuZ1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX3BsYXllclBoYXNlID0gXCJ3YWxrXCI7XG4gICAgICAgIF90aGlzLmNoYW5nZVRleHR1cmUoX3RoaXMuX3dhbGtpbmdUZXh0dXJlcyk7XG4gICAgICAgIF90aGlzLl9tb3ZpbmdCZWhhdmlvciA9IG5ldyBwbGF5ZXJfYmVoYXZpb3JfMS5QbGF5ZXJNb3ZpbmdCZWhhdmlvcihfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFBsYXllci5wcm90b3R5cGUsIFwiYm9keVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFBsYXllci5wcm90b3R5cGUuc3RhcnRBbmltYXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3BsYXllckFuaW1hdGluZyA9IHRydWU7XG4gICAgfTtcbiAgICBQbGF5ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAoYW5pbWF0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fcGxheWVyUGhhc2UgPSBcIndhbGtcIjtcbiAgICAgICAgdGhpcy5fcGxheWVyQW5pbWF0aW5nID0gYW5pbWF0aW9uO1xuICAgICAgICBpZiAodGhpcy5fcGxheWVyQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX21vdmluZ0JlaGF2aW9yLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQbGF5ZXIucHJvdG90eXBlLmJ1ZmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVGV4dHVyZSh0aGlzLl9idWZmaW5nVGV4dHVyZXMsIGZhbHNlKTtcbiAgICB9O1xuICAgIFBsYXllci5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVRleHR1cmUodGhpcy4pXG4gICAgfTtcbiAgICBQbGF5ZXIucHJvdG90eXBlLmRpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VUZXh0dXJlKHRoaXMuX2R5aW5nVGV4dHVyZXMsIGZhbHNlKTtcbiAgICB9O1xuICAgIFBsYXllci5wcm90b3R5cGUucGxheUFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfTtcbiAgICBQbGF5ZXIucHJvdG90eXBlLnN0b3BBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH07XG4gICAgUGxheWVyLnByb3RvdHlwZS5jaGFuZ2VUZXh0dXJlID0gZnVuY3Rpb24gKHRleHR1cmVzLCBsb29wKSB7XG4gICAgICAgIGlmIChsb29wID09PSB2b2lkIDApIHsgbG9vcCA9IHRydWU7IH1cbiAgICAgICAgdGhpcy5ib2R5LnRleHR1cmVzID0gdGV4dHVyZXM7XG4gICAgICAgIGlmICghbG9vcCkge1xuICAgICAgICAgICAgdGhpcy5ib2R5Lmxvb3AgPSBsb29wO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQbGF5ZXIuQU5JTUFUSU9OX1NQRUVEID0gNCAvIDYwO1xuICAgIHJldHVybiBQbGF5ZXI7XG59KHBpeGlfanNfMS5BbmltYXRlZFNwcml0ZSkpO1xuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XG52YXIgZ2FtZV9zZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL21vZGVscy9nYW1lLXNldHRpbmdzXCIpO1xudmFyIFNreSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2t5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNreShzdGFnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fc3RhZ2UgPSBzdGFnZTtcbiAgICAgICAgLy8g5aSp56m6XG4gICAgICAgIHZhciBza3kgPSBuZXcgcGl4aV9qc18xLlNwcml0ZShwaXhpX2pzXzEuVGV4dHVyZS5mcm9tKFwiYmctdG9wLXNreS5wbmdcIikpO1xuICAgICAgICBza3kuc2NhbGUueCA9IHNreS5zY2FsZS55ID0gX3RoaXMuZ2V0U3ByaXRlV2lkdGhTY2FsZVJhdGlvKHNreS53aWR0aCk7XG4gICAgICAgIHNreS5hbmNob3Iuc2V0KDAsIDApO1xuICAgICAgICAvLyDpgaDlsbFcbiAgICAgICAgdmFyIG1vdW50YWluQmFjayA9IG5ldyBwaXhpX2pzXzEuU3ByaXRlKHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJiZy10b3AtbW91bnRhaW4tYmFjay5wbmdcIikpO1xuICAgICAgICBtb3VudGFpbkJhY2suc2NhbGUueCA9IG1vdW50YWluQmFjay5zY2FsZS55ID0gX3RoaXMuZ2V0U3ByaXRlV2lkdGhTY2FsZVJhdGlvKG1vdW50YWluQmFjay53aWR0aCk7XG4gICAgICAgIG1vdW50YWluQmFjay5hbmNob3Iuc2V0KDAsIDApO1xuICAgICAgICBtb3VudGFpbkJhY2sueSA9IHNreS5oZWlnaHQgLSBtb3VudGFpbkJhY2suaGVpZ2h0O1xuICAgICAgICAvLyDov5HlsbFcbiAgICAgICAgdmFyIG1vdW50YWluRnJvbnQgPSBwaXhpX2pzXzEuVGV4dHVyZS5mcm9tKFwiYmctdG9wLW1vdW50YWluLWZyb250LnBuZ1wiKTtcbiAgICAgICAgdmFyIG1vdW50YWluRnJvbnRUaWxpbmcgPSBuZXcgcGl4aV9qc18xLlRpbGluZ1Nwcml0ZShtb3VudGFpbkZyb250LCBtb3VudGFpbkZyb250LndpZHRoLCBtb3VudGFpbkZyb250LmhlaWdodCk7XG4gICAgICAgIG1vdW50YWluRnJvbnRUaWxpbmcuc2NhbGUueCA9IG1vdW50YWluRnJvbnRUaWxpbmcuc2NhbGUueSA9IF90aGlzLmdldFNwcml0ZVdpZHRoU2NhbGVSYXRpbyhtb3VudGFpbkZyb250VGlsaW5nLndpZHRoKTtcbiAgICAgICAgbW91bnRhaW5Gcm9udFRpbGluZy5wb3NpdGlvbi54ID0gMDtcbiAgICAgICAgbW91bnRhaW5Gcm9udFRpbGluZy5wb3NpdGlvbi55ID1cbiAgICAgICAgICAgIHNreS5oZWlnaHQgLSBtb3VudGFpbkZyb250VGlsaW5nLmhlaWdodCAvIDI7XG4gICAgICAgIG1vdW50YWluRnJvbnRUaWxpbmcudGlsZVBvc2l0aW9uLnggPSAwO1xuICAgICAgICBtb3VudGFpbkZyb250VGlsaW5nLnRpbGVQb3NpdGlvbi55ID0gMDtcbiAgICAgICAgbW91bnRhaW5Gcm9udFRpbGluZy5hbmNob3Iuc2V0KDAsIDApO1xuICAgICAgICAvLyDpm7LmnLXlgJFcbiAgICAgICAgdmFyIGNsb3VkcyA9IG5ldyBwaXhpX2pzXzEuU3ByaXRlKHBpeGlfanNfMS5UZXh0dXJlLmZyb20oXCJiZy10b3AtY2xvdWRzLnBuZ1wiKSk7XG4gICAgICAgIGNsb3Vkcy5zY2FsZS54ID0gY2xvdWRzLnNjYWxlLnkgPSBfdGhpcy5nZXRTcHJpdGVXaWR0aFNjYWxlUmF0aW8oY2xvdWRzLndpZHRoKTtcbiAgICAgICAgY2xvdWRzLmFuY2hvci5zZXQoMCwgMCk7XG4gICAgICAgIF90aGlzLnN0YWdlLmFkZENoaWxkKHNreSwgbW91bnRhaW5CYWNrLCBtb3VudGFpbkZyb250VGlsaW5nLCBjbG91ZHMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTa3kucHJvdG90eXBlLCBcInN0YWdlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNreS5wcm90b3R5cGUuZ2V0U3ByaXRlV2lkdGhTY2FsZVJhdGlvID0gZnVuY3Rpb24gKHNwcml0ZVdpZHRoKSB7XG4gICAgICAgIHJldHVybiBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCkuZ2FtZVdpZHRoIC8gc3ByaXRlV2lkdGg7XG4gICAgfTtcbiAgICByZXR1cm4gU2t5O1xufShwaXhpX2pzXzEuQ29udGFpbmVyKSk7XG5leHBvcnRzLlNreSA9IFNreTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBpeGlfanNfMSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xudmFyIGdhbWVfc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9nYW1lLXNldHRpbmdzXCIpO1xudmFyIGdhbWVfY29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvZ2FtZS1jb250cm9sbGVyXCIpO1xudmFyIGdhbWVfdmlld18xID0gcmVxdWlyZShcIi4vdmlld3MvZ2FtZS12aWV3XCIpO1xudmFyIGdhbWVfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9nYW1lLW1vZGVsXCIpO1xudmFyIE1haW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFpbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nYW1lU2V0dGluZ3MgPSBnYW1lX3NldHRpbmdzXzEuR2FtZVNldHRpbmdzLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgX3RoaXMuc3RhcnRMb2FkaW5nQXNzZXRzKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIE1haW4ucHJvdG90eXBlLnN0YXJ0TG9hZGluZ0Fzc2V0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGxvYWRlciA9IHBpeGlfanNfMS5Mb2FkZXIuc2hhcmVkO1xuICAgICAgICBsb2FkZXJcbiAgICAgICAgICAgIC5hZGQoW1xuICAgICAgICAgICAgXCIuL2Fzc2V0cy9zcHJpdGVzaGVldC9iYWNrZ3JvdW5kLmpzb25cIixcbiAgICAgICAgICAgIFwiLi9hc3NldHMvc3ByaXRlc2hlZXQvbGFiZWxzLmpzb25cIixcbiAgICAgICAgICAgIFwiLi9hc3NldHMvc3ByaXRlc2hlZXQvbWVzc2FnZS5qc29uXCIsXG4gICAgICAgICAgICBcIi4vYXNzZXRzL3Nwcml0ZXNoZWV0L2ljb25zLmpzb25cIixcbiAgICAgICAgICAgIFwiLi9hc3NldHMvc3ByaXRlc2hlZXQvcGxheWVyX3dhbGsuanNvblwiLFxuICAgICAgICAgICAgXCIuL2Fzc2V0cy9zcHJpdGVzaGVldC9wbGF5ZXJfYnVmZi5qc29uXCIsXG4gICAgICAgICAgICBcIi4vYXNzZXRzL3Nwcml0ZXNoZWV0L3BsYXllcl9jcmFzaC5qc29uXCIsXG4gICAgICAgICAgICBcIi4vYXNzZXRzL3Nwcml0ZXNoZWV0L3BsYXllcl9kaWUuanNvblwiLFxuICAgICAgICAgICAgXCIuL2Fzc2V0cy9zcHJpdGVzaGVldC9vYnN0YWNsZS5qc29uXCIsXG4gICAgICAgICAgICBcIi4vYXNzZXRzL3Nwcml0ZXNoZWV0L3NtYWxsYm9zcy5qc29uXCIsXG4gICAgICAgICAgICBcIi4vYXNzZXRzL3Nwcml0ZXNoZWV0L2JpZ2Jvc3MuanNvblwiLFxuICAgICAgICAgICAgXCIuL2Fzc2V0cy9zcHJpdGVzaGVldC9tYWdpY19oYW5kLmpzb25cIixcbiAgICAgICAgICAgIFwiLi9hc3NldHMvYmctaGVscC5wbmdcIiAvLyDpgYrmiLLoqqrmmI7og4zmma/lnJZcbiAgICAgICAgXSlcbiAgICAgICAgICAgIC5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm9uQXNzZXRzTG9hZGVkKCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAubG9hZCgpO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUub25Bc3NldHNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnYW1lVmlldyA9IG5ldyBnYW1lX3ZpZXdfMS5HYW1lVmlldyh0aGlzLmdhbWUuc3RhZ2UpO1xuICAgICAgICB2YXIgZ2FtZU1vZGVsID0gbmV3IGdhbWVfbW9kZWxfMS5HYW1lTW9kZWwoKTtcbiAgICAgICAgdmFyIGdhbWVDb250cm9sbGVyID0gbmV3IGdhbWVfY29udHJvbGxlcl8xLkdhbWVDb250cm9sbGVyKGdhbWVWaWV3LCBnYW1lTW9kZWwpO1xuICAgICAgICB3aW5kb3cuRjJFQ2hhbGxhbmdlID0ge1xuICAgICAgICAgICAgTWFpbjogdGhpcyxcbiAgICAgICAgICAgIEdhbWVDb250cm9sbGVyOiBnYW1lQ29udHJvbGxlcixcbiAgICAgICAgICAgIEdhbWVWaWV3OiBnYW1lVmlld1xuICAgICAgICB9O1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuY3JlYXRlUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBwaXhpX2pzXzEuQXBwbGljYXRpb24oe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2FtZVNldHRpbmdzLmdhbWVXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nYW1lU2V0dGluZ3MuZ2FtZUhlaWdodCxcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogMHhmN2UwYWIsXG4gICAgICAgICAgICBhdXRvRGVuc2l0eTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc29sdXRpb246IDJcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5nYW1lLnZpZXcpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIudmlldy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnZpZXcuc3R5bGUudG9wID0gXCI1MCVcIjtcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnZpZXcuc3R5bGUubGVmdCA9IFwiNTAlXCI7XG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci52aWV3LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCI7XG4gICAgfTtcbiAgICByZXR1cm4gTWFpbjtcbn0oKSk7XG5leHBvcnRzLk1haW4gPSBNYWluO1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2FtZSA9IG5ldyBNYWluKCk7XG59KSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2FtZV9zZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL21vZGVscy9nYW1lLXNldHRpbmdzXCIpO1xudmFyIEdhbWVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lTW9kZWwoKSB7XG4gICAgICAgIHRoaXMuaW5pdFByb3BzV2l0aERlZmF1bHRWYWx1ZXMoKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEdhbWVNb2RlbC5wcm90b3R5cGUsIFwiZ2FtZUhlYWx0aFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVIZWFsdGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEdhbWVNb2RlbC5wcm90b3R5cGUuZGFtYWdlSGVhbHRoID0gZnVuY3Rpb24gKGRlbWFnZVZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2dhbWVIZWFsdGggPSB0aGlzLl9nYW1lSGVhbHRoIC0gZGVtYWdlVmFsdWU7XG4gICAgfTtcbiAgICBHYW1lTW9kZWwucHJvdG90eXBlLnJlc2V0TW9kZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5pdFByb3BzV2l0aERlZmF1bHRWYWx1ZXMoKTtcbiAgICB9O1xuICAgIEdhbWVNb2RlbC5wcm90b3R5cGUuaW5pdFByb3BzV2l0aERlZmF1bHRWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZ2FtZUhlYWx0aCA9IGdhbWVfc2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKS5wbGF5ZXJTdGFydGluZ0hlYWx0aDtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lTW9kZWw7XG59KCkpO1xuZXhwb3J0cy5HYW1lTW9kZWwgPSBHYW1lTW9kZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHYW1lU2V0dGluZ3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2FtZVNldHRpbmdzKCkge1xuICAgICAgICAvLyBnYW1lIHJlc29sdXRpb25cbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSAxMjgwO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSA3MDA7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0Q291bnQgPSA1O1xuICAgICAgICB0aGlzLmdhbWVUb3RhbFRpbWUgPSA5MDsgLy8gc2Vjb25kc1xuICAgICAgICAvLyBwbGF5ZXIgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5wbGF5ZXJTdGFydGluZ0hlYWx0aCA9IDQ7XG4gICAgICAgIHRoaXMucGxheWVyU3RhcnRpbmdYUG9zaXRpb24gPSA1MDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTdGFydGluZ1lQb3NpdGlvbiA9IHRoaXMuZ2FtZUhlaWdodCAvIDI7IC8vRklYTUU6IOimgeWGjeW+gOS4i+S4gOm7nlxuICAgICAgICAvL29ic3RhY2xlcyBzZXR0aW5nc1xuICAgICAgICB0aGlzLm9ic3RhY2xlc0Rpc3RhbmNlID0gNDU7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzU3BlZWQgPSA3OyAvLyBtaWNyb3NlY29uZHNcbiAgICAgICAgdGhpcy5ncm91bmRNb3ZlU3BlZWQgPSAyO1xuICAgICAgICBpZiAoR2FtZVNldHRpbmdzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvcjogSW5zdGFudGlhdGlvbiBmYWlsZWQ6IFVzZSBHYW1lU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkIG9mIG5ldy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVNldHRpbmdzLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG4gICAgR2FtZVNldHRpbmdzLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gR2FtZVNldHRpbmdzLmluc3RhbmNlO1xuICAgIH07XG4gICAgR2FtZVNldHRpbmdzLmluc3RhbmNlID0gbmV3IEdhbWVTZXR0aW5ncygpO1xuICAgIHJldHVybiBHYW1lU2V0dGluZ3M7XG59KCkpO1xuZXhwb3J0cy5HYW1lU2V0dGluZ3MgPSBHYW1lU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb3JsZCgpIHtcbiAgICAgICAgaWYgKFdvcmxkLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvcjogSW5zdGFudGlhdGlvbiBmYWlsZWQ6IFVzZSBXb3JsZC5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBXb3JsZC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcbiAgICB9XG4gICAgV29ybGQuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBXb3JsZC5pbnN0YW5jZTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXb3JsZCwgXCJXb3JsZEluc3RhbmNlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gV29ybGQuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgV29ybGQuYWRkVG9Xb3JsZCA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuV29ybGRJbnN0YW5jZS5zdGFnZS5hZGRDaGlsZChnYW1lT2JqZWN0KTtcbiAgICB9O1xuICAgIFdvcmxkLmFkZE9iamVjdFRvV29ybGQgPSBmdW5jdGlvbiAoZ2FtZU9iamVjdCkge1xuICAgICAgICB0aGlzLldvcmxkSW5zdGFuY2UuZ2FtZU9iamVjdHMucHVzaChnYW1lT2JqZWN0KTtcbiAgICAgICAgdGhpcy5Xb3JsZEluc3RhbmNlLnN0YWdlLmFkZENoaWxkKGdhbWVPYmplY3QpO1xuICAgIH07XG4gICAgV29ybGQuaW5zdGFuY2UgPSBuZXcgV29ybGQoKTtcbiAgICByZXR1cm4gV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5Xb3JsZCA9IFdvcmxkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBpeGlfanNfMSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xuLy8gaW1wb3J0IHsgUGl4aUNvbnNvbGUsIFBpeGlDb25zb2xlQ29uZmlnIH0gZnJvbSBcInBpeGktY29uc29sZVwiO1xudmFyIEdhbWVWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHYW1lVmlldyhzdGFnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fc3RhZ2UgPSBzdGFnZTtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQoUGl4aUNvbnNvbGUuZ2V0SW5zdGFuY2UoKSk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHYW1lVmlldy5wcm90b3R5cGUsIFwic3RhZ2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFnZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEdhbWVWaWV3O1xufShwaXhpX2pzXzEuQ29udGFpbmVyKSk7XG5leHBvcnRzLkdhbWVWaWV3ID0gR2FtZVZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV9qc18xID0gcmVxdWlyZShcInBpeGkuanNcIik7XG52YXIgZ2FtZV9zZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL21vZGVscy9nYW1lLXNldHRpbmdzXCIpO1xudmFyIE9ic3RhY2xlc1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9ic3RhY2xlc1ZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzdGFjbGVzVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9ic3RhY2xlc1ZpZXcucHJvdG90eXBlLm1vdmVHcm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ncm91bmRPYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kT2JzdGFjbGVzW2ldLnggLT0gdGhpcy5fZ2FtZVNldHRpbmdzLm9ic3RhY2xlc1NwZWVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzdGFjbGVzVmlldy5wcm90b3R5cGUsIFwiX2dhbWVTZXR0aW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVfc2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE9ic3RhY2xlc1ZpZXc7XG59KHBpeGlfanNfMS51dGlscy5FdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuT2JzdGFjbGVzVmlldyA9IE9ic3RhY2xlc1ZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9