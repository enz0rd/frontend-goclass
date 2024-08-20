import { useState } from 'react';
import { Input } from '../ui/input';

const CPFInput = ({ id, name }: { id: string, name: string }) => {
  const [CPF, setCPF] = useState('');

  const formatCPF = (value: string) => {
    let formattedValue = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (formattedValue.length > 3) {
      formattedValue = formattedValue.substring(0, 3) + '.' + formattedValue.substring(3);
    }
    if (formattedValue.length > 7) {
      formattedValue = formattedValue.substring(0, 7) + '.' + formattedValue.substring(7);
    }
    if (formattedValue.length > 11) {
      formattedValue = formattedValue.substring(0, 11) + '-' + formattedValue.substring(11);
    }

    return formattedValue;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCPF(formatCPF(value));
  };

  return (
    <Input
      id={id}
      name={name}
      type="text"
      value={CPF}
      onChange={handleInputChange}
      maxLength={14} // Considerando o formato 000.000.000-00
      placeholder="000.000.000-00"
      required
    />
  );
};

export default CPFInput;
