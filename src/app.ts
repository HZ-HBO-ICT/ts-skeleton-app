class Animal
{
    private name: string
    private legs: number
    private sound: string

    public constructor(name: string, legs: number, sound: string)
    {
        this.name = name
        this.legs = legs
        this.sound = sound
    }

    public getName(): string
    {
        return this.name
    }

    public getLegs(): number
    {
        return this.legs
    }

    public getSound(): string
    {
        return this.sound
    }
}

let animals = [
     new Animal('dog', 4, 'woof'),
     new Animal('cat', 4, 'meow')
]

animals.forEach(
    (animal) => console.log(
        'A %s has %s legs and goes %s!',
        animal.getName(),
        animal.getLegs(),
        animal.getSound()
    )
)
