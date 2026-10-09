//ARREGLOS
let proyecto = {
    title: "WOMP 3D",
    type: "Modelado 3D",
    year: 2026
};

let proyectos = [
    {
        title: "Fx's 2D & 3D",
        type: "Animacion 2D y 3D",
        year: 2026
    },
    {
        title: "Principios de animacion 2D",
        type: "Animacion 2D",
        year: 2025
    },
    {
        title: "Min's Cake",
        type: "Pagina web",
        year: 2024
    }
];

//FOREACH
console.log("--- ForEach ---");

if (proyectos.length > 0) {
    proyectos.forEach((proyecto) => {
        console.log(proyecto.title);
    });
} else {
    console.log("No existen proyectos registrados");
}

//PUSH() - AGREGAR PROYECTO
console.log("--- Agregar Proyecto ---");

let nuevoProyecto = {
    title: "Ficha de Usagi",
    type: "Pagina web",
    year: 2026
};

let proyectoDuplicado = proyectos.find((proyecto) => {
    return proyecto.title.toLowerCase() ===
        nuevoProyecto.title.toLowerCase();
});

if (nuevoProyecto.title.trim() === "") {
    console.log("Error: el proyecto debe tener un titulo");
} else if (proyectoDuplicado) {
    console.log("Error: el proyecto ya existe");
} else {
    proyectos.push(nuevoProyecto);
    console.log("Proyecto agregado correctamente");
}

console.log("Proyectos actuales:", proyectos);

//FILTER()
console.log("--- Filter ---");

let proyectosFiltrados = proyectos.filter((proyecto) => {
    return proyecto.type.toLowerCase().includes("animacion");
});

if (proyectosFiltrados.length > 0) {
    console.log("Proyectos de animacion:", proyectosFiltrados);
} else {
    console.log("No existen proyectos de animacion");
}

//MAP()
console.log("--- Map ---");

let titulosProyectos = proyectos.map((proyecto) => {
    return proyecto.title;
});

if (titulosProyectos.length > 0) {
    console.log("Titulos de los proyectos:", titulosProyectos);
} else {
    console.log("No hay titulos de proyectos para mostrar");
}

//FIND()
console.log("--- Find ---");

let proyectoEncontrado = proyectos.find((proyecto) => {
    return proyecto.title.toLowerCase() === "min's cake".toLowerCase();
});

if (proyectoEncontrado) {
    console.log("Proyecto encontrado:", proyectoEncontrado);
} else {
    console.log("Error: el proyecto no existe");
}

//CRUD
console.log("--- CRUD ---");

//CREATE: agregar un proyecto
let nuevoProyectoCRUD = {
    title: "Womp 3D",
    type: "Modelado 3D",
    year: 2026
};

let existeProyecto = proyectos.find((proyecto) => {
    return proyecto.title.toLowerCase() === nuevoProyectoCRUD.title.toLowerCase();
});

if (nuevoProyectoCRUD.title.trim() === "") {
    console.log("Error: el titulo no puede estar vacio");
} else if (existeProyecto) {
    console.log("Error: no se puede crear el proyecto porque ya existe");
} else {
    proyectos.push(nuevoProyectoCRUD);
    console.log("Proyecto creado:", nuevoProyectoCRUD);
}

//READ: buscar un proyecto
let proyectoLeido = proyectos.find((proyecto) => {
    return proyecto.title.toLowerCase() === "ficha de usagi".toLowerCase();
});

if (proyectoLeido) {
    console.log("Proyecto encontrado:", proyectoLeido);
} else {
    console.log("Error: no se puede leer el proyecto porque no existe");
}

//UPDATE: modificar un proyecto
let proyectoActualizar = proyectos.findIndex((proyecto) => {
    return proyecto.title.toLowerCase() === "min's cake".toLowerCase();
});

if (proyectoActualizar !== -1) {
    proyectos[proyectoActualizar].year = 2025;
    console.log("Proyecto actualizado:", proyectos[proyectoActualizar]);
} else {
    console.log("Error: no se puede actualizar porque el proyecto no existe");
}

//DELETE: eliminar un proyecto
let proyectoEliminar = proyectos.findIndex((proyecto) => {
    return proyecto.title.toLowerCase() === "womp 3d".toLowerCase();
});

if (proyectoEliminar !== -1) {
    let eliminado = proyectos.splice(proyectoEliminar, 1);
    console.log("Proyecto eliminado:", eliminado[0]);
} else {
    console.log("Error: no se puede eliminar porque el proyecto no existe");
}

//ARREGLO FINAL
console.log("--- Arreglo final de proyectos ---");

if (proyectos.length > 0) {
    proyectos.forEach((proyecto) => {
        console.log(proyecto);
    });
} else {
    console.log("No existen proyectos registrados");
}

/*
console.log(proyecto);
console.log(proyectos[0]);
console.log(proyectos[1].title);
console.log(proyectos[0].type);
console.log(proyectos[2].year);
console.log("Numero de proyectos:", proyectos.length);
*/