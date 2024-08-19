import { useState } from 'react';
import { Input } from '../ui/input';

const PhoneInput = ({ id }: { id: string }) => {
  const [Phone, setPhone] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue += '(' + value.substring(0, 2) + ')';
    }
    if (value.length > 2) {
        formattedValue += ' ' + value.substring(2, 7);
    }
    if (value.length > 7) {
        formattedValue += '-' + value.substring(7, 11);
    }

    setPhone(formattedValue);
  };

  return (
    <Input
      type="text"
      id={id}
      value={Phone}
      onChange={handleInputChange}
      maxLength={15}
      placeholder="(00) 00000-0000"
      required
    />
  );
};

export default PhoneInput;