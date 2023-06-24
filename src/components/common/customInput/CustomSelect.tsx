import { UseFormRegisterReturn } from 'react-hook-form';
import _ from 'lodash';
export interface OptionItemType {
  label: string;
  value: string;
}
interface SelectPropsType {
  options: OptionItemType[];
  register: UseFormRegisterReturn;
  id: string;
}
export function CustomSelect(props: SelectPropsType) {
  const { options, register, id } = props;
  return (
    <select {...register} id={id}>
      {options.map((item, index) => {
        if (!_.isArray(item)) {
          return (
            <option value={item.value} key={index}>
              {item.value}
            </option>
          );
        }
        return <option key={index}>{item}</option>;
      })}
    </select>
  );
}
