import { useState } from 'react';
import { Input } from '../ui/input';

const IEInput = () => {
  const [IE, setIE] = useState('');

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    setIE(value);
  };

  return (
    <Input
      type="text"
      value={IE}
      onChange={handleInputChange}
      maxLength={9}
      placeholder="000000000"
      required
    />
  );
};

export default IEInput;
