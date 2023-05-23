import { UseFormRegisterReturn } from 'react-hook-form';
import _ from 'lodash';

interface SelectPropsType {
  options: any[];
  register: UseFormRegisterReturn;
  id: string;
}
export function CustomSelect(props: SelectPropsType) {
  const { options, register, id } = props;
  return (
    <select {...register} id={id}>
      {options.map((item, index) => {
        // if (_.isObject(item)) {
        //   return <option key={index}>{item.value}</option>;
        // }
        return <option key={index}>{item}</option>;
      })}
    </select>
  );
}
