
import clientesApi from "../../../api/clientesApi"
import { useDispatch, useSelector } from 'react-redux'
import { getClientes, isLoadingFalse, isLoadingTrue } from "../clientesSlice"
import Swal from "sweetalert2"


export const useClientes = () => {

    const { clientes, isLoading } = useSelector(state => state.clientes)
    const dispatch = useDispatch()

    const loadClientes = async () => {
        try {
            
            const { data } = await clientesApi.get('/clientes');
            dispatch( getClientes(data.clientes) )

        } catch (error) {
            console.log(error)
        }
    }

    const addClientes = async ({ name, numeroDocumento, direction, telephone }) => {

        try {
            
            dispatch( isLoadingTrue() )
            const { status } = await clientesApi.post('/clientes', { name, numeroDocumento, direction, telephone } );
            dispatch( isLoadingFalse() )

            if(status===200) {
                Swal.fire('Creado', 'usuario creado con exito', 'success')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const editClientes = async ({id, name, numeroDocumento, direction, telephone }) => {

        try {
            
            dispatch( isLoadingTrue() )
            const { status } = await clientesApi.put(`/clientes/${id}`, { name, numeroDocumento, direction, telephone } );
            dispatch( isLoadingFalse() )

            if(status===200) {
                Swal.fire('Actualizado', 'usuario actualizado con exito', 'success')
            }

        } catch (error) {
            console.log(error)
        }
    }
    const deletesAllsClientes = async (ids) => {
        try {
            
            const { status } = await clientesApi.post('/clientes/deletes', { ids })

            if(status === 200 ) {
                Swal.fire('Eliminados', 'Se eliminaron todos los clientes seleccionados', 'success')
            }
            loadClientes()

        } catch (error) {
            console.log(error.message)
        }
    }

    const clientForId = async (id) => {
        try {
            
            const { data } = await clientesApi.get(`/clientes/${id}`)
            return data

        } catch (error) {
            console.log(error)
        }
    }


    return {
        // Atributos
        clientes, 
        isLoading,
        // Métodos
        loadClientes,
        addClientes,
        editClientes,
        deletesAllsClientes,
        clientForId,
        

    }
}