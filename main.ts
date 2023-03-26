info.onCountdownEnd(function () {
    game.gameOver(false)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(50, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    info.changeLifeBy(-1)
    mySprite3 = sprites.create(assets.image`enemigo de pakuman`, SpriteKind.Enemy)
    mySprite3.setPosition(randint(0, 160), randint(0, 120))
    mySprite3.follow(mySprite, 50)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`pakuman`, SpriteKind.Player)
mySprite.setPosition(80, 60)
mySprite2 = sprites.create(assets.image`comida de pakuman`, SpriteKind.Food)
mySprite2.setPosition(randint(0, 160), randint(0, 120))
mySprite3 = sprites.create(assets.image`enemigo de pakuman`, SpriteKind.Enemy)
mySprite3.setPosition(randint(0, 160), randint(0, 120))
mySprite3.follow(mySprite, 50)
info.setScore(0)
info.startCountdown(60)
controller.moveSprite(mySprite)
mySprite.setBounceOnWall(true)
info.setLife(3)
