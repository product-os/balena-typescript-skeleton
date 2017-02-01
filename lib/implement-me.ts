export interface ImplementMe {
    myFunc(): string;
}

export class ImplementClass implements ImplementMe {
    public myFunc() {
        return 'I need implementing!';
    }
}

console.log(new ImplementClass().myFunc());
