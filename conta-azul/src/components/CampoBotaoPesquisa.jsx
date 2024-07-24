import { Input } from "@material-tailwind/react";
 
function CampoBotaoPesquisa() {
  return (
    <div className="w-96">
      <Input
        type="text"
        placeholder="Buscar"
        className="border-none bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 text-[55px] text-center texto-barra-de-busca"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[200px] min-h-[100px]" }}
      />
    </div>
  );
}

export default CampoBotaoPesquisa;