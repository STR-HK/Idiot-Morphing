export class Mopping {
    constructor(ap, bp, piece) {
        this.points = []
        this.ap = ap
        this.bp = bp

        this.rp = []

        for (var i = 0; i < this.ap.length; i++) {
            this.points.push(i)
        }

        this.piece = piece

        this.xmove = []
        this.ymove = []

        this.dx = []
        this.dy = []
    
        this.points.forEach(element => {
            this.xmove[element] = this.bp[element][0] - this.ap[element][0]
            this.ymove[element] = this.bp[element][1] - this.ap[element][1]
        });
        
        this.terminate = false
        this.counter = 0
    }

    calc(){
        this.points.forEach(element => {
            this.dx[element] = this.xmove[element] / this.piece * this.counter
            this.dy[element] = this.ymove[element] / this.piece * this.counter

            this.rp[element] = [
                parseFloat(this.dx[element]) + parseFloat(this.ap[element]),
                parseFloat(this.dy[element]) + parseFloat(this.ap[element])
            ]

            console.log(this.rp)
        });

        this.counter += 1
        if (this.counter == this.piece) {
            this.terminate = true
        }
    }

    draw(ctx) {
        this.points.forEach(element => {

            if (element + 1 != this.points.length) {
                this.lineA = this.rp[element]
                this.lineB = this.rp[element + 1]
            } else {
                this.lineA = this.rp[element]
                this.lineB = this.rp[0]
            }

            console.log((this.lineA, this.lineB).toString())

            ctx.beginPath()
            ctx.moveTo(this.lineA[0], this.lineA[1])
            ctx.lineTo(this.lineB[0], this.lineB[1])
            ctx.stroke()
        });
        
    }
}

