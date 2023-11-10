let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
     name: 'Rahat',
     retire: (date: Date) => {
        console.log(date)
     }

};