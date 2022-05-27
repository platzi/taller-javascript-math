console.log(salarios);

// Análisis personal para Juanita
function encontrarPersona(personaEnBusqueda) {
  return salarios.find(persona => persona.name == personaEnBusqueda);
  
  // const persona = salarios.find((persona) => {
  //   return persona.name == personaEnBusqueda;
  // });
  // return persona;
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);

  console.log(medianaSalarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];
  
  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento)
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

  // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}

// Análisis empresarial
/* {
  Industrias Mokepon: {
    2018: [salario]
  }
  Industrias Mokepon: {
    2018: [salario, salarios, salrios]
    2019: 
    2025: 
    2026: 
  },
  Industrias Mokepon: {},
  Industrias Mokepon: {},
  Industrias Mokepon: {},
} */
const empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else if (!empresas[nombre][year]) {
    console.warn('La empresa no dio salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}
