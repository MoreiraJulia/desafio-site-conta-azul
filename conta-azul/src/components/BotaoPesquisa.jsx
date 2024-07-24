import React from "react";
import { Dialog, DialogBody, } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import CampoBotaoPesquisa from "./CampoBotaoPesquisa";
 
function BotaoPesquisa() {
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);
 
  return (
    <>
      <div className="flex gap-3">
        <CiSearch onClick={() => handleOpen("xxl")} variant="gradient" className="icone-search"/>
      </div>
      <Dialog
        open={size === "xxl"}
        size={size || "md"}
        handler={handleOpen}
        className="flex items-center justify-center"
      >
        <TfiClose onClick={() => handleOpen(null)} className="cursor-pointer absolute top-2 right-2"/>
        <DialogBody>
          <CampoBotaoPesquisa />
        </DialogBody>
      </Dialog>
    </>
  );
}

export default BotaoPesquisa;