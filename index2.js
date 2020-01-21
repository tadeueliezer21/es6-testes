const techs = [
    'ReactJs',
    'NestJs',
    'C puro raiz',
    'Java'
];

const attTechs = techs.filter(x => x.length >= 5).map(x => x.toUpperCase());

console.log(attTechs);

