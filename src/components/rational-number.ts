
class RationalNumber {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = Math.floor(numerator);
        this.denominator = Math.floor(denominator);
        this.normalize()
    }

    add(r: RationalNumber): RationalNumber {
        this.numerator = this.numerator * r.denominator + r.numerator * this.denominator;
        this.denominator *= r.denominator;
        this.normalize()
        return this
    }

    multiply(r: RationalNumber): RationalNumber {
        this.numerator *= r.numerator
        this.denominator *= r.denominator
        this.normalize()
        return this
    }

    private gcd(a: number, b: number): number {
        if (b == 0) {
            return a
        } else {
            return this.gcd(b, a % b)
        }
    }

    private normalize() {
        const d = this.gcd(this.numerator, this.denominator);
        this.numerator /= d;
        this.denominator /= d;
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`
    }
}

export default RationalNumber
