import Button from '@/components/Button';
import Layout from '@/components/layout';
import { useRouter } from 'next/router'

// #717272 gray

export default function Home() {
  const router = useRouter();
  return (
    <Layout title='Identificação'>
      <main className='w-screen h-screen flex justify-center items-center'>
        <div className='bg-[#CCCDCD] w-96 p-6 flex flex-col items-center gap-5 rounded-md'>
          <h1 className='text-3xl font-semibold'>Identificação do cliente</h1>

          <div className='bg-slate-100 w-56 h-56' >

          </div>


          <Button
            classes='bg-[#2493BA] w-3/4 p-3 rounded font-bold'
            handleClick={() => router.push("/service_panel")}
          >
            Ler QR code
          </Button>
        </div>
      </main>
    </Layout>
  )
}
