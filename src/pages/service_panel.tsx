import Button from "@/components/Button";
import Layout from "@/components/layout";
import Select from "@/components/Select";
import { collaborators, parts } from "@/utils/data";
import { useState } from "react";

export default function ServicePanel() {
  const [collaboratorName, setCollaboratorName] = useState('');
  const [laborCost, setLaborCost] = useState('');
  const [partName, setPartName] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [startTime, setStartTime] = useState('');

  const handleTotalPrice = () => {
    let totalValue = parts.reduce((total, part) => {
      if (part.name === partName) {
        return total + part.price
      }

      return total;
    }, 0);

    totalValue += Number(laborCost);

    setTotalPrice(totalValue);
  }

  const handleServiceStart = () => {
    setStartTime(new Date().toLocaleString())
  }

  return (
    <Layout title='Painel de serviço'>
      <div className='w-screen h-full flex flex-col items-center'>
        <h1 className="text-[#168BB3] my-8 text-5xl font-roboto">Painel de serviço</h1>
        <form className="w-9/12 h-3/4 p-10 gap-2 flex flex-col justify-evenly rounded border-2 border-[#168BB3] ">

          <Select
            id={'collaborators'}
            label={'Responsável pelo serviço:'}
            selectWrapperClasses={''}
            labelClasses={'text-xl font-semibold'}
            selectClasses={'w-full p-1 bg-transparent rounded border-2 border-[#168BB3]'}
            options={collaborators}
            handleChange={setCollaboratorName}
          />

          <div>
            <label className="text-xl font-semibold" htmlFor="laborCost">Mão de obra:</label>
            <input
              className="w-full p-1 bg-transparent rounded border-2 border-[#168BB3]"
              type='number' id='laborCost'
              min={0}
              onChange={({ target }) => setLaborCost(target.value)}
            />
          </div>

          <Select
            id={'parts'}
            label={'Peças:'}
            selectWrapperClasses={''}
            labelClasses={'text-xl font-semibold'}
            selectClasses={'w-full p-1 bg-transparent rounded border-2 border-[#168BB3]'}
            options={parts}
            handleChange={setPartName}
          />

          <Button
            type='submit'
            classes='bg-[#2493BA] p-3 rounded font-bold disabled:bg-[#2492ba73] disabled:text-[#000000a9]'
            handleClick={handleServiceStart}
            disabled={!(!!collaboratorName && !!laborCost && !!partName)}
          >
            Iniciar serviço
          </Button>
        </form>
        <div id="service">

        </div>
      </div>
    </Layout>
  )
}
