// Задание: Объекты, filter()
let names = [
    {name: "Василий", surname: "Васильев"},
    {name: "Иван", surname: "Иванов"},
    {name: "Петр", surname: "Петров"}
]
let filter_names = []
function filter(names, name, namee){
    for(let keys of names)
    {
        if (keys[name] === namee)
        {
             filter_names.push(keys)
        }
    }
}
filter(names, "name", "Иван")
console.log(filter_names)