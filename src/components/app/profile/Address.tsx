import Map from '@/components/Map';

const Address = () => {

    const rua = 'Rua Marechal Deodoro, 1280';
    const bairro = 'Centro';
    const cidade = 'Concórdia';
    const estado = 'Santa Catarina'
    const cep = '89700-000';

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-xl font-bold dark:text-zinc-50">Endereço:</h4>
      <span className='dark:text-zinc-400 text-zinc-600'>{rua}</span>
      <span className='dark:text-zinc-400 text-zinc-600'>{bairro}, {cidade} - {estado}</span>
      <span className='dark:text-zinc-400 text-zinc-600'>{cep}</span>
      <div className="rounded-lg w-full h-fit border overflow-hidden my-5">
        <Map address={`${rua}, ${bairro}, ${cidade} - ${estado}, ${cep}`} height={200}/>
      </div>
    </div>
  );
};

export default Address;