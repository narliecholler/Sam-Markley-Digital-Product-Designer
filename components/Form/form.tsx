import { ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DribbbleIcon } from 'public/assets/icons';
import Button from '@/components/Button';
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
    icon: <DribbbleIcon />,
    registerName: 'fullName',
    required: true,
  },
  {
    label: 'Your email',
    icon: <DribbbleIcon />,
    registerName: 'email',
    required: true,
  },
  {
    label: 'Contact number',
    icon: <DribbbleIcon />,
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

  const InputItem = ({ label, icon, registerName, required }: Input) => (
    <InputWrapper>
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
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((i) => (
        <InputItem {...i} key={i.registerName} />
      ))}
      <InputWrapper>
        <label htmlFor="help">
          How can I help? <span>*</span>
        </label>
        <InputContainer id="formTextArea">
          <span>
            <DribbbleIcon />
          </span>
          <textarea
            rows={8}
            id="help"
            {...(register('help'), { required: true })}
          />
        </InputContainer>
      </InputWrapper>
      <div>
        <Button text="Send message" fullWidth />
      </div>
    </form>
  );
};

export default Form;
