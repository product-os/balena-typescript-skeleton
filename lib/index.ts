export interface ImplementMe {
    myFunc(): string;
}

const moo = 1;

export class ImplementClass implements ImplementMe {
    public myFunc() {
        return `I need implementing! ${moo}`;
    }
}

console.log(new ImplementClass().myFunc());
