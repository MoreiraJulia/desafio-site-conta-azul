import React from "react";
import { Button, Dialog, Card, CardBody, Typography, Input, Checkbox } from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
 
function ModalCrieSuaConta() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button onClick={handleOpen} className="flex items-center gap-2 text-base text-azul-conta-azul font-medium bg-white shadow-none hover:shadow-none p-0">Teste Gratuitamente <IoIosArrowRoundForward className="text-2xl"/></Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="rounded-none mx-auto w-full max-w-[34rem] ">
          <CardBody className="p-0 flex flex-col gap-4 overflow-scroll">
            <div className="px-4 pt-4">
              <Typography variant="h4" color="blue-gray">
                Crie sua conta
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Preencha os dados abaixo para realizar seu cadastro
              </Typography>
            </div>
            <hr />
            <div className="px-4 pb-4">
              <Typography className="mb-1 font-medium text-sm" variant="h6">
                Nome Completo
              </Typography>
              <Input size="lg" className="rounded-sm" />
              <Typography className="mb-1 font-medium text-sm mt-4" variant="h6">
                CNPJ da sua empresa
              </Typography>
              <Input  size="lg" className="rounded-sm" />
              <Typography className="mb-1 font-medium text-sm mt-4" variant="h6">
                E-mail profissional
              </Typography>
              <Input  size="lg" className="rounded-sm" />
              <Typography className="mb-1 font-medium text-sm mt-4" variant="h6">
                Celular/WhatsApp
              </Typography>
              <Input size="lg" className="rounded-sm" />
              <Typography className="mb-1 font-medium text-sm mt-4" variant="h6">
                Crie sua senha de acesso
              </Typography>
              <Input type="password" size="lg" className="rounded-sm" />
              <Button onClick={handleOpen} fullWidth className="mt-5 rounded-sm bg-verde-folha-conta-azul">
                Continuar
              </Button>
              <div className="-ml-2.5 -mt-1 flex items-center justify-center text-sm font-medium">
                <Checkbox />  
                Concordo com os <a className="ml-1 text-azul-conta-azul" href=""> Termos de Uso</a>
              </div>
            </div>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}

export default ModalCrieSuaConta;