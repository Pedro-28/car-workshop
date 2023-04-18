import Button from "@/components/Button";
import Layout from "@/components/layout";

const collaborators = [
  { id: 'f5a11820-e2f8-4875-af9f-5e20b1a3a3a1', name: 'joão da Silva' },
  { id: 'f35a49a5-7e1c-4665-b5d1-77ea5df1258f', name: 'Ana Souza' },
  { id: 'c88e2317-63a4-4a7f-a97a-38fa7ba4b4b4', name: 'José Santos' },
  { id: '8f1c83dc-bd14-4769-9350-8b41464b6d13', name: 'Rafaela Costa' },
  { id: '06df9e44-0b68-4d3f-bc69-7981f7a55e3c', name: 'Luiz Gonzaga' },
];

const parts = [
  { id: '8f3e4633-6d9f-42f9-b41e-6c1730fc2d2a', name: 'Amortecedor', price: 300 },
  { id: 'ce79a1e6-07c6-4a6a-9c3e-6d1b6a93a6a1', name: 'Bateria', price: 250 },
  { id: '10c7d1a4-4ad7-4af4-9a14-1b2855e5e5c9', name: 'Pastilha de Freio', price: 150 },
  { id: 'a0a40fc7-1b23-4f84-9e3d-473a3a048a69', name: 'Radiador', price: 400 },
  { id: '181ba988-4c4d-4d15-a77c-48f13a0745b9', name: 'Correia Dentada', price: 100 },
];


export default function ServicePanel() {
  

  return (
    <Layout title='Painel de serviço'>      
      <div className='w-screen h-screen flex justify-center items-center'>
        <form className="bg-slate-500 p-10 rounded-md gap-2 flex flex-col ">
          <h1 className="text-5xl font-roboto">Painel de serviço</h1>
          <label htmlFor="collaborators">Responsável pelo serviço:</label>
          <select id='collaborators'>
            <option hidden>Responsável pelo serviço</option>
            {
              collaborators.map(({ id, name }) => (
                <option key={id} value={name}>{name}</option>
              ))
            }
          </select>

          <div>
            <label htmlFor="laborCost">Mão de obra:</label>
            <input type='number' id='laborCost' />
          </div>

          <label htmlFor="parts">Peças:</label>
          <select id='parts'>
            {
              parts.map(({ id, name }) => (
                <option key={id} value={name}>{name}</option>
              ))
            }
          </select>




          <Button
            type='submit'
            classes='bg-[#2493BA] p-3 rounded font-bold'
            handleClick={() => { }}
          >
            Iniciar serviço
          </Button>
        </form>
      </div>
    </Layout>
  )
}
