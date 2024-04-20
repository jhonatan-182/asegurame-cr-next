import Image from "next/image";


export default function CardCustom ({
    title,
    description,
    img
} : any) {
    return (
        <div
          className="flex flex-col items-center w-[18rem] h-[19rem] shadow-general rounded-xl"
        >

          <div className="flex justify-center">
              <Image
                src={img}
                width={150}
                height={150}
                alt="Imagen portada Asegurame"
                prioritynpm
                className="justify-center items-center my-5"
                
              />
          </div>

          
          

          <p className="text-body_1 font-semibold text-primary text-center">{`${title}`}</p>

          <p className="text-body_movil font-normal text-texto mt-3 text-center ">
            {description}
          </p>
        </div>
    )
}