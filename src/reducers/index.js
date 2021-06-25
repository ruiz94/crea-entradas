const initialState = {
  entradas: [
    {
      id: 0,
      titulo: 'Ejemplo',
      fecha: '12-02-2021',
      hora: '13:50',
      autor: 'Daniel Radlif',
      cuerpo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus saepe voluptatem asperiores sequi excepturi nisi numquam error consectetur, dolorum aperiam, quo eaque ratione. Deserunt facere quod eos adipisci impedit.'
    }
  ]
}

const reducers = (state = initialState, action) => {

  switch(action.type){
    case 'AGREGAR_ENTRADA': 
      return {
        ...state,
        entradas: [
          ...state.entradas, 
          {...action.payload, id: state.entradas.length + 1}
        ]
      }
    case 'DELETE_ENTRADA':
      return {
        ...state,
        entradas: state.entradas.filter(entrada => entrada.id !== action.payload)
      }
    default:
      return state;

  }
}

export default reducers;
