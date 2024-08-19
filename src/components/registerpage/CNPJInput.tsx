import { useState } from 'react';
import { Input } from '../ui/input';

const CNPJInput = () => {
  const [cnpj, setCnpj] = useState('');

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = '';

    if (value.length > 2) {
      formattedValue += value.substring(0, 2) + '.';
      value = value.substring(2);
    }
    if (value.length > 3) {
      formattedValue += value.substring(0, 3) + '.';
      value = value.substring(3);
    }
    if (value.length > 3) {
      formattedValue += value.substring(0, 3) + '/';
      value = value.substring(3);
    }
    if (value.length > 4) {
      formattedValue += value.substring(0, 4) + '-';
      value = value.substring(4);
    }
    formattedValue += value;
    setCnpj(formattedValue);
  };

  return (
    <Input
      type="text"
      value={cnpj}
      onChange={handleInputChange}
      maxLength={18}
      placeholder="00.000.000/0000-00"
    />
  );
};

export default CNPJInput;
