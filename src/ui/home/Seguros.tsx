import { TextCustom } from "../share/atoms";

//consultar desde la base de datos
const seguros = [
  {
    id: 1,
    nombre: "Seguro de viaje",
    imagen: "imagen",
  },
  {
    id: 2,
    nombre: "Seguro de enfermedades graves",
    imagen: "imagen",
  },
  {
    id: 3,
    nombre: "Seguro de deducible automovil",
    imagen: "imagen",
  },
];

export default function Seguros() {
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center mt-5 ">
      {seguros.map((seguro) => (
        <div
          key={seguro.id}
          className="flex flex-col items-center justify-center"
        >
          <div className="shadow-general w-[75px] h-[75px] rounded-xl">
            <div className="flex items-center justify-center h-full">
              {seguro.imagen}
            </div>
          </div>

          <TextCustom
            component={"p"}
            className="text-[10px] mt-3 text-center text-primary h-14"
            text={
              <>
                {`${seguro.nombre.split(" ").at(0)} de`}
                <span className="block font-semibold text-xs capitalize">
                  {seguro.nombre.split(" ").slice(2).join(" ")}
                </span>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}
