import { Button } from "./Button"
import { TableClientes } from "./TableClientes"

export const ClientesApp = () => {


  return (
    <div className="w-full min-h-screen">

      <div className="container px-2 mx-auto pt-24">

        <div className="flex gap-3">
          <Button
            title="Agregar"
            ruta="/create"
          />
        </div>

        <div>
          <TableClientes />
        </div>

      </div>


    </div>
  )
}
