import Map from '@/components/Map';

interface AddressProps {
  logradouro: string;
  cidade: string;
  uf: string;
  cep: string;
}

const Address = ({ logradouro, cidade, uf, cep} : AddressProps) => {

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-xl font-bold dark:text-zinc-50">Endereço:</h4>
      <span className='dark:text-zinc-400 text-zinc-600'>{logradouro}</span>
      <span className='dark:text-zinc-400 text-zinc-600'>{cidade} - {uf}</span>
      <span className='dark:text-zinc-400 text-zinc-600'>{cep}</span>
      <div className="rounded-lg w-full h-fit border overflow-hidden my-5">
        <Map address={`${logradouro}, ${cidade} - ${uf}, ${cep}`} height={200}/>
      </div>
    </div>
  );
};

export default Address;