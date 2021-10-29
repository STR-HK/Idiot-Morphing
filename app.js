import {
    Mopping
} from './ball.js';


class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        window.requestAnimationFrame(this.animate.bind(this));

        // this.ap = [[100, 100], [200, 100], [100, 200], [200, 200]]
        // this.bp = [[200, 200], [100, 200], [200, 100], [100, 100]]
        // this.pieces = 1000

        this.ap = [
            [70, 40],
            [70, 0],
            [10, 0],
            [0, 20],
            [50, 20],
            [50, 60],
            [0, 60],
            [0, 20],
            [10, 0],
            [10, 40],
        ]
        this.bp = [
            [70, 40],
            [70, 0],
            [10, 0],
            [0, 20],
            [90, 20],
            [90, 60],
            [40, 60],
            [40, 20],
            [10, 0],
            [10, 40],
        ]
        this.pieces = 100

        this.mp = new Mopping(this.ap, this.bp, this.pieces)
    }


    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = (9 / 16) * document.body.clientWidth;
        if (this.stageHeight > document.body.clientHeight) {
            this.stageHeight = document.body.clientHeight
            this.stageWidth = (16 / 9) * document.body.clientHeight
        }

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        // console.log(this.ap[0], this.bp[0])

        
        
        // console.log(t)
        if (this.mp.terminate == false) {
            this.ctx.beginPath()
            this.ctx.rect(0, 0, this.stageWidth, this.stageHeight)
            this.ctx.fillStyle = 'white'
            this.ctx.fill()

            this.mp.calc()
            this.mp.draw(this.ctx)
            
        }

        // console.log(this.dxmove, this.dymove)

        // console.log(this.xmove, this.ymove)
    }

}

window.onload = () => {
    new App
}

