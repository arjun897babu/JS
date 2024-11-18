const obj = {
    name:'arjun',
    place:'chevayoor',
    age:26
}

Object.freeze(obj); // makes the objet immutable 

//updating the data properties
obj.name = 'amruth'  
obj.age= 20 
obj.place= 'vellimadukunn' 
// deleting data properties
delete obj.name
delete obj.age
delete obj.place

//adding new data propeties
obj.education='diploma'

console.log(obj) // {name: 'arjun', place: 'chevayoor', age: 26 }

const obj2 = {
    name:'arjun',
    place:'chevayoor',
    age:26,
    education:{
        '+2':'80%',
        degree:'80%'
    }
}

obj2.education["+2"] = 20
obj2.education.degree = '100%'

console.log(obj2)
