/* 

    - prohibido fetchar todo cuando no se necesita
    - no fetchar activities antes del click del boton
    - 


    * * REDUX * * (AHORA SI ??)

    - store - state centralizado - 
    - cuando un componente se conecta al store se llama suscripcion
    - parte pasiva de la suscripcion de los componentes al store es que se re renderiza cuando cambia algo en el store
    - si alguno de los componentes modifica al store, los otros componentes se re renderiza, aunque no necesiten la nueva info
        - lo anterior no lo puede hacer de forma directa
        - lo hace por medio de un ACTION
            - es capturada, interceptada por un reducer
             - y el reducer es el UNICO encargado y HABILITADO para modificar el store
             
    - componente despacha una ACTION (objeto), esta ACTION es capturada por el REDUCER (funcion), y el REDUCER modifica al STORE, 
    cuando cambia el estado del STORE los componentes suscriptos se re renderizan
    - los componentes no necesariamente necesitan cambiar el estado en el store, solo necesitan el uso de datos que le paso al store
    - el store puede tener varias propiedades que cambien el estado, y los componentes pueden estar suscritos al cambio de estado de 
    una propiedad especifica 

    - creat-react-app con redux

    - instalar librerias para redux en frontend folder
        - REDUX --> funcionalidad de redux
        - REACT-REDUX --> permite conectar redux a react
        - REDUX-THUNK --> para hacer codigo asincrono en las actions

        - el store se hace en el index.js
            - importar de la libreria redux - {createStore} - crea el store
            - importar de la librea react-redux - {Provider} (para proveer a todos los componentes de lo que esta en el store)
        - STORE
            - en index crear variable mySotre/globalStore = createStore()
            - envolver al llamado del componente App.js con tag <Provider store={globalStore}>
            - hacer carpeta que se llame redux, adentro dos carpetas - ACTIONS y Reducers
            - en reducer crear route reducers
            - cada area va a tener un reducer, pero el STORE solo puede ser modificado por UN SOLO REDUCER
            - importar combineReducer, importar reducers
                const rootReducer = combineReducer({
                    // llama a todos los reducers
                    variabe : variableReducer
                })
                export defaul rootReducer, para importar en index y este es el parametro para la creacion del store
            - crear archivo con reducer
            // recibe dos parametros, STATE y ACTION
            // STATE - informacion en el store / la primera vez no hay nada en el store = null (parametro por defecto/valor por defecto) 
            (el tipo de dato siempre va hacer un objeto - hay que indicar que propiedad necesitamos y el valor inicial)
            // ACTION - viene del componente
                const variableReducer = () => {
                    // finalidad modificar el store
                    // el reducer evalua que action se esta requiriendo desde el componente
                    //siempre termina con un return (siempre devuelve un nuevo estado)
                    // en el primer momento el store tiene un objeto con propiedad-valor (las que le vallamos pasando)
                }
                export default variableReducer

                - hight order component
            - como parametro del createStore()
            - en el componente se importa {connect} de react-redux y en el export default connect(puede tener dos parametros, 
            puede estar conectado de dos maneras, suscrito y/o para modificar por medio de las action)(componente) 
                - funcion solo para escucha connect(mapStateToProps) - se define en el reducer
                - mapea el state centralizado y los trae por las props - por esto es que cuando cambia algo en el store, se re renderiza el componente
                - la funcion recibe como parametro el state(que es el store) retorna un objeto con propiedad valor, donde le digo donde me lo trae 
                (nombre de la prop definida por mi) y que me trae (state.propieda del reducer y usamos el nombre que le dimos state.reducer.propiedad) 
                y para usarlo en el componente se usa props.nombre de la prop que definimos nosotro
            - el otro tipo de coneccion es para despachar connect(null, funcionModificadora)()
            - par que tengan las dos conecciones connect(mapStateToProp, mapDispachToProps)
                - mapDispatchToProps = {
                    propiedadProps: que funcion va a traer
                    getLista: (crear action)
                } 
                - crear un archivo con actions
                - es un objeto con fuciones y exportarlas, importarla en el componente que despacha la action (action creator) va a retornar otra funcion, 
                porque se necesita hacer codigo asincrono y aca es donde se fetchea ?? revisar
                - dispatch({
                    type: "GET_ALL_FRIENDS",
                    payload: la variable 
                    // no es oligatorio que la action lleve pauload, pero si type se escribe todo en mayusculas y espacios con guion bajo
                    // el dispatch llega directamente al parametro de lafuncion ( getState tambien - es el estado actual del store )
                })
                - cuando se monta el componente tiene que despachar la accion
                useEffect(() => {
                    props.getLista
                })

                - en el reducer se evalua la action, el type de la action
                 con un switch(action.type) {
                        case "GET_ALL_FRIENDS":
                            //hace algo
                            return {
                                ...state,
                                propiedad que se quiere modificar: action.payload,
                            }
                        default:
                            return state
                 }




*/