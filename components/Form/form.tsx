import React, { ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/Button';
import { Icon } from '@/components/Icon';
import { InputWrapper, InputContainer } from './form.styles';

type Inputs = {
  fullName: string;
  email: string;
  number: string;
  help: string;
};

type Input = {
  label: string;
  icon: ReactNode;
  registerName: keyof Inputs;
  required: boolean;
};

const inputs: Input[] = [
  {
    label: 'Full name',
    icon: <Icon type="badge" />,
    registerName: 'fullName',
    required: true,
  },
  {
    label: 'Your email',
    icon: <Icon type="mail" />,
    registerName: 'email',
    required: true,
  },
  {
    label: 'Contact number',
    icon: <Icon type="phone" />,
    registerName: 'number',
    required: false,
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ label, icon, registerName, required }) => (
        <InputWrapper key={registerName}>
          <label htmlFor={registerName}>
            {label} {required && <span>*</span>}
          </label>
          <InputContainer>
            <span>{icon}</span>
            <input
              id={registerName}
              type="text"
              {...(register(registerName), { required })}
            />
          </InputContainer>
        </InputWrapper>
      ))}
      <InputWrapper>
        <label htmlFor="help">
          How can I help? <span>*</span>
        </label>
        <InputContainer id="formTextArea">
          <span>
            <Icon type="lightbulb" />
          </span>
          <textarea
            rows={8}
            id="help"
            {...(register('help'), { required: true })}
          />
        </InputContainer>
      </InputWrapper>
      <div>
        <Button icon="send" stroke="light" fullWidth />
      </div>
    </form>
  );
};

export default Form;
